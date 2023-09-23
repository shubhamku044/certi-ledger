// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.9.3/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.9.3/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@4.9.3/security/Pausable.sol";
import "@openzeppelin/contracts@4.9.3/access/Ownable.sol";
import "@openzeppelin/contracts@4.9.3/utils/Counters.sol";

contract Certficate is ERC721, ERC721Enumerable, Pausable, Ownable {
    // Property Variables
    using Counters for Counters.Counter;
    uint256 public MINT_PRICE = 0.05 ether;
    uint256 public MAX_SUPPLY = 2;

    Counters.Counter private _tokenIdCounter;
    //lifecycle methods
    constructor() ERC721("Certficate", "Certi") {
        //start token at 1;
        _tokenIdCounter.increment();
    }
    

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://CertiLedgerBaseURI/";
    }
    //pausable functions
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
    //minting function
    function safeMint(address to) public  payable {
        require(totalSupply()<MAX_SUPPLY, "No TOKEN LEFT");

        require(msg.value >= MINT_PRICE, "Not enough ether sent");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}


//0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 - OWNER

//0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2