App = {
  web3Provider: null,
  contracts: {},

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
    $.getJSON('ERC721Token.json', function(data) {

    //   // Get the necessary contract artifact file and instantiate it with truffle-contract
      var AdoptionArtifact = data;
      App.contracts.Adoption = TruffleContract(AdoptionArtifact);
    
    //   // Set the provider for our contract
      App.contracts.Adoption.setProvider(App.web3Provider);
    
    //   // Use our contract to retrieve and mark the adopted pets
      return App.markAdopted();
    });

    // return App.bindEvents();
  },

  bindEvents: function () {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: async function () {
    var adoptionInstance;

    var deployed = await App.contracts.Adoption.deployed()
    deployed.then(function(instance) {
      adoptionInstance = instance;
      console.log(adoptionInstance);
    });
  },

  handleAdopt: function (event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function () {
  $(window).load(function () {
    App.init();
  });
});