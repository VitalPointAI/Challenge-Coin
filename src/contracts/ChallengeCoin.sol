pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract ChallengeCoin is ERC721Full, ERC721Mintable {

    using SafeMath for uint;

    struct Coin {
        string name;  // Name of the Coin
        string qual; // Qualification coin represents
    }

    Coin[] public coins; // First Item has Index 0
    address public owner;

    constructor(string memory _name, string memory _symbol) ERC721Full(_name, _symbol) public {
        owner = msg.sender; // owner of ChallengeCoin contract who can create a new coin
    }

    function mintCoin(string memory name, string memory qual, address account) public {
        require(owner == msg.sender, 'not the owner'); // Only the Owner can create Coins
        uint coinId = coins.length; // Unique coin ID
        coins.push(Coin(name, qual));
        _mint(account, coinId); // Mint a new card
    }

    function getCoinDetails(uint _coinId) public view returns(string memory name, string memory qual){
        Coin memory _coins = coins[_coinId];
        name = _coins.name;
        qual = _coins.qual;
    }
}