App = {
  web3Provider: null,
  contracts: {},
  contractInstance: null,
  msg: $('.msg'),
  
  
  
  
  init: function () {
    
    return App.initWeb3();
  },
  
  
  
  // fill this function to initialize web3
  // if the user is using meta mask so use the injected web3
  // else fall back to ganache;
  initWeb3: function () {
    //replace me;
  },
  
  
  
  // complete this function to intialize the contract
  // you should get the contract artifacts and save it in the App.contracts object UP ^;
  // use truffle to create useable version form the artifacts; 
  initContract: function () {
    $.getJSON('ERC721Token.json', function (data) {
      // replace me :)
    });
  },
  
  
  // get the deployed version of the contract and create an instance
  // save the instance in App.contractInstance so you can deal with the contract from web 3
  createContractInstance() {
    
  },
  
  
  
  // you don't need to change anything here;
  // this function is just to bind the functions to the user click events;
  bindEvents: function () {
    $('.approve').click(App.approve);
    $('.approve-all').click(App.approveAll);
    $('.is-approved').click(App.getApproved);
    $('.is-approved-all').click(App.isApprovedForAll);
    $('.balance-btn').click(App.getBalance);
    $('.is-exist').click(App.isExist);
    $('.owner-by-id').click(App.ownerById);
    $('.transfer-btn').click(App.transfer);
    $('.safe-transfer-btn').click(App.safeTransfer);
    $('.total-count').click(App.totalSupply);
  },
  
  setMessage: function(text) {
    App.msg.show();
    App.msg.text(text);
    setTimeout(() => {
      App.msg.hide();
    }, 3000);
  },



/*
  give the permission for someone to deal with one land;
  this function should @TODO        use the ABI instance that you got it to call the approve function that's located in the smart contract;
  call the approve funct            ion in the smart contract and pass the user input and set the result as message;

*/
  approve: function () {
    // get the land id and the public key from the user input;
    const key = $('#approve-key').val();
    const id = $('#approve-id').val();

    // replcae me :)

  },



/*
  give the permission for someone to deal with all of your lands;
  @TODO       use the ABI instance that you got it to call the setApprovalForAll function that's located in the smart contract;
              call the approve function in the smart contract and pass the user input and set the result as message;
*/
  approveAll: function () {
    //get the public key from the user input;
    const key = $('#approve-all-key').val();

    // replcae me :)
  },



/*
  check who has the permession to deal with a specifec land;
  @TODO       use the ABI instance that you got it to call the getApproved function that's located in the smart contract;
              call the approve function in the smart contract and pass the user input and set the result as message;
*/
  getApproved: function () {
    // get the land id forn the user input
    const id = $('#is-approved-id').val();

    // replace me :)
  },




/*
  check if someone has the permission to deal with a all the lands ownership of someone else;
  @TODO       use the ABI instance that you got it to call the isApprovedForAll function that's located in the smart contract;
              call the isApprovedForAll function in the smart contract and pass the user input and set the result as message;
*/
  isApprovedForAll: function () {
    
    const first = $('#is-approved-all-first').val();
    const second = $('#is-approved-all-second').val();

    // replace me :)
  },





/*
  get the lands count of some one by his own public key;
  @TODO       use the ABI instance that you got it to call the balanceOf function that's located in the smart contract;
              call the balanceOf function in the smart contract and pass the user input and set the result as message;
@HINT       you need to convert the value you get form the result to a integer number; 
*/
  getBalance: function () {
    // get the public key form the user input
    const key = $('#balance-key').val();

    // replace me :)
  },




/*
  check if the given land id is exist;
  @TODO       use the ABI instance that you got it to call the exists function that's located in the smart contract;
              call the exists function in the smart contract and pass the user input and set the result as message;
*/
  isExist: function () {
    // get the land id form the user input;
    const id = $('#exist-id').val();

    // replace me :)
  },


  




/*
  get the owner of a land by it's own id;
  @TODO       use the ABI instance that you got it to call the ownerOf function that's located in the smart contract;
              call the ownerOf function in the smart contract and pass the user input and set the result as message;
*/
  ownerById: function () {
    // get the land id form the user input;
    const id = $('#owner-id').val();

    // replace me :)
  },



/*
  Transfer Ownership of a land from someone to someone else;
  @TODO       use the ABI instance that you got it to call the transferFrom function that's located in the smart contract;
              call the transferFrom function in the smart contract and pass the user input and confirm the transaction status as a message;
*/
  transfer: function () {
    // get the sender the receiver and the land id from the user input;
    const from = $('#transfer-from').val();
    const to = $('#transfer-to').val();
    const id = $('#transfer-id').val();

    // replace me :)

  },



/*
  safe Transfer Ownership of a land from someone to someone else;
  @TODO       use the ABI instance that you got it to call the safeTransferFrom function that's located in the smart contract;
              call the safeTransferFrom function in the smart contract and pass the user input and confirm the transaction status as a message;
*/
  safeTransfer: function () {
    // get the sender the receiver and the land id from the user input;
    const from = $('#safe-transfer-from').val();
    const to = $('#safe-transfer-to').val();
    const id = $('#safe-transfer-id').val();

    // replace me;
  },




  
/*
  get the total lands count;
  @TODO       use the ABI instance that you got it to call the safeTransferFrom function that's located in the smart contract;
             call the safeTransferFrom function in the smart contract and pass the user input and confirm the transaction status as a message;
  @HINT      you need to convert the type of the result to integer number;
*/
  totalSupply: function () {
    
    //replace me :)
  },

};


// calling the init functions; 
$(function () {
  $(window).load(function () {
    App.init();
    App.bindEvents();
  });
});