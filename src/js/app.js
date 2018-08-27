App = {
  web3Provider: null,
  contracts: {},
  contractInstance: null,
  msg: $('.msg'),




  init: function () {

    return App.initWeb3();
  },



  initWeb3: function () {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },




  initContract: function () {
    $.getJSON('ERC721Token.json', function (data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var LandArtifact = data;
      App.contracts.Land = TruffleContract(LandArtifact);

      // Set the provider for our contract
      App.contracts.Land.setProvider(App.web3Provider);

      App.createContractInstance();
      return App.bindEvents();

    });
  },



  createContractInstance() {
    App.contracts.Land.deployed()
      .then(function (instance) {
        App.contractInstance = instance;
      });

  },




  bindEvents: function () {
    $('.approve').click(App.approve);
    $('.approve-all').click(App.approveAll);
    $('.is-approved').click(App.isApproved);
    $('.is-approved-all').click(App.isApprovedForAll);
    $('.balance-btn').click(App.getBalance);
    $('.is-exist').click(App.isExist);
    $('.owner-by-id').click(App.ownerById);
    $('.transfer-btn').click(App.transfer);
    $('.safe-transfer-btn').click(App.safeTransfer);
    $('.total-count').click(App.totalSupply);
  },




  // approve someone to deal with one of your lands;
  approve: function () {
    const key = $('#approve-key').val();
    const id = $('#approve-id').val();

    App.contractInstance.approve(key, id).then(() => {
      App.setMessage();
      App.msg.text('approved');
    });
  },






  // approve someone to deal with all of your lands;
  approveAll: function () {
    const key = $('#approve-all-key').val();
    App.contractInstance.setApprovalForAll(key, true).then(() => {
      App.setMessage();
      App.msg.text('approved for all');
    });
  },



  // check who has the permession for one land
  isApproved: function () {
    const id = $('#is-approved-id').val();

    App.contractInstance.getApproved(id).then(approved => {
      console.log(approved);
    });

  },




  // check if someone is approved for all of your lands
  isApprovedForAll: function () {
    const first = $('#is-approved-all-first').val();
    const second = $('#is-approved-all-second').val();

    App.contractInstance.isApprovedForAll(first, second).then((approved) => {
      App.setMessage();
      if (approved) {
        App.msg.text('this user is approved for all lands');
      } else {
        App.msg.text('this user is not approved for all lands');

      }
    });

  },



  //check how many lands someone has
  getBalance: function () {
    const key = $('#balance-key').val();
    App.contractInstance.balanceOf(key).then((balance) => {
      App.setMessage();
      App.msg.text(balance.toNumber());
    });


  },




  // check if the land is exist
  isExist: function () {
    const id = $('#exist-id').val();
    App.contractInstance.exists(id).then(exists => {
      App.setMessage();
      if (exists) {
        App.msg.text('the records for this land is exists');
      } else {
        App.msg.text('the records for this land is not exists');

      }
    });

  },


  setMessage: function () {
    App.msg.show();
    setTimeout(() => {
      App.msg.hide();
    }, 3000);
  },




  // enter the land id to get it's owner
  ownerById: function () {
    const id = $('#owner-id').val();

    App.contractInstance.exists(id).then((exists) => {
      if (exists) {
        App.contractInstance.ownerOf(id).then((owner) => {
          App.setMessage();
          App.msg.text('the owner public key is ' + owner);
        });
      } else {
        App.setMessage();
        App.msg.text('no such land records');
      }
    });
  },




  // Transfer Ownership of a land from someone to someone else
  transfer: function () {
    const from = $('#transfer-from').val();
    const to = $('#transfer-to').val();
    const id = $('#transfer-id').val();
    App.contractInstance.transfer(from, to, id);


  },




  // safe Transfer Ownership of a land from someone to someone else
  safeTransfer: function () {
    const from = $('#safe-transfer-from').val();
    const to = $('#safe-transfer-to').val();
    const id = $('#safe-transfer-id').val();
    App.contractInstance.safeTransferFrom(from, to, id).then(done => {
      console.log(done);
    });
  },





  // safe Transfer Ownership of a land from someone to someone else

  totalSupply: function () {
    App.contractInstance.totalSupply().then(data => {
      App.setMessage();
      App.msg.text('there is ' + (data.toNumber()) + ' registerd lands');
    });
  },

};

$(function () {
  $(window).load(function () {
    App.init();
  });
});