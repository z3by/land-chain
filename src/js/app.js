App = {
  web3Provider: null,
  contracts: {},
  contractInstance: null,




  init: function () {

    return App.initWeb3();
  },





  initWeb3: function () {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },




  initContract: function () {
    $.getJSON('ERC721Token.json', function (data) {

      //   // Get the necessary contract artifact file and instantiate it with truffle-contract
      var AdoptionArtifact = data;
      App.contracts.Adoption = TruffleContract(AdoptionArtifact);

      //   // Set the provider for our contract
      App.contracts.Adoption.setProvider(App.web3Provider);

    });

    return App.bindEvents();
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
  },




  // approve someone to deal with one of your lands;
  approve: function () {
    const key = $('#approve-key').val();
    const id = $('#approve-id').val();

    console.log('approve', key, id);
  },






  // approve someone to deal with all of your lands;
  approveAll: function () {
    const key = $('#approve-all-key').val();

    console.log('approve', key);
  },



  // check who has the permession for one land
  isApproved: function () {
    const id = $('#is-approved-id').val();

    console.log('approve', id);
  },




  // check if someone is approved for all of your lands
  isApprovedForAll: function () {
    const id = $('#is-approved-all-id').val();

    console.log(id);
  },



  //check how many lands someone has
  getBalance: function () {
    const key = $('#balance-key').val();
    console.log(key);
    

  },




  // check if the land is exist
  isExist: function () {
    const id = $('#exist-id').val();
    console.log(id);

  },




  // enter the land id to get it's owner
  ownerById: function () {
    const id = $('#owner-id').val();
    console.log(id);

  },




  // Transfer Ownership of a land from someone to someone else
  transfer: function () {
    const from = $('#transfer-from').val();
    const to = $('#transfer-to').val();
    const id = $('#transfer-id').val();
    console.log(from, to, id);

  },




  // safe Transfer Ownership of a land from someone to someone else
  safeTransfer: function () {
    const from = $('#safe-transfer-from').val();
    const to = $('#safe-transfer-to').val();
    const id = $('#safe-transfer-id').val();
    console.log(from, to, id);


  },



};

$(function () {
  $(window).load(function () {
    App.init();
  });
});