var ERC721 = artifacts.require('./ERC721.sol')
var ERC721Basic = artifacts.require('./ERC721Basic.sol')
var ERC721BasicToken = artifacts.require('./ERC721BasicToken.sol')
var ERC721Holder = artifacts.require('./ERC721Holder.sol')
var ERC721Receiver = artifacts.require('./ERC721Receiver.sol')
var ERC721Token = artifacts.require('./ERC721Token.sol')

module.exports = function (deployer) {
  deployer.deploy(ERC721)
  deployer.deploy(ERC721Basic)
  deployer.deploy(ERC721BasicToken)
  deployer.deploy(ERC721Holder)
  deployer.deploy(ERC721Receiver)
  deployer.link(ERC721, ERC721Basic, ERC721BasicToken, ERC721Holder, ERC721Receiver, ERC721Token)
  deployer.deploy(ERC721Token, "land", "la")
}
