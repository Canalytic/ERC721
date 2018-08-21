var CheckERC165 = artifacts.require("CheckERC165.sol");

module.exports = function(deployer) {
    deployer.deploy(CheckERC165.sol);
};

var TokenERC721 = artifacts.require("TokenERC721.sol");

module.exports = function(deployer) {
    deployer.deploy(TokenERC721.sol);
};

var TokenERC721Enumerable = artifacts.require("TokenERC721Enumerable.");

module.exports = function(deployer) {
    deployer.deploy(TokenERC721Enumerable..sol);
};

var TokenERC721Full = artifacts.require("TokenERC721Full.sol");

module.exports = function(deployer) {
    deployer.deploy(TokenERC721Full.sol);
};

var TokenERC721MetaData = artifacts.require("TokenERC721MetaData.sol");

module.exports = function(deployer) {
    deployer.deploy(TokenERC721MetaData.sol);
};
