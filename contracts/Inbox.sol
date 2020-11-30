// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Inbox{
    string public message;

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() view public returns(string memory){
        return message;
    }

}