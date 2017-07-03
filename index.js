// Generated by LiveScript 1.5.0
(function(){
  var Web3, program, ref$, blue, yellow, web3, abi, contractFactory, result, amount;
  Web3 = require('web3');
  program = require('commander');
  ref$ = require('chalk'), blue = ref$.blue, yellow = ref$.yellow;
  program.version('0.1.0').option('-t, --to [address]', 'Recepient address').option('-a, --amount [value]', 'Ethereum amount').option('-c, --confirm_hash [hash]', 'Confirm hash created by another owner').option('-d, --data [0x...]', 'Provide transaction data').parse(process.argv);
  web3 = new Web3();
  abi = [
    {
      "constant": false,
      "inputs": [{
        "name": "_owner",
        "type": "address"
      }],
      "name": "removeOwner",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_addr",
        "type": "address"
      }],
      "name": "isOwner",
      "outputs": [{
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "m_numOwners",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "m_lastDay",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [],
      "name": "resetSpentToday",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "m_spentToday",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_owner",
        "type": "address"
      }],
      "name": "addOwner",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "m_required",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_h",
        "type": "bytes32"
      }],
      "name": "confirm",
      "outputs": [{
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_newLimit",
        "type": "uint256"
      }],
      "name": "setDailyLimit",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        }, {
          "name": "_value",
          "type": "uint256"
        }, {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "execute",
      "outputs": [{
        "name": "_r",
        "type": "bytes32"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_operation",
        "type": "bytes32"
      }],
      "name": "revoke",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_newRequired",
        "type": "uint256"
      }],
      "name": "changeRequirement",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [
        {
          "name": "_operation",
          "type": "bytes32"
        }, {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "hasConfirmed",
      "outputs": [{
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "name": "ownerIndex",
        "type": "uint256"
      }],
      "name": "getOwner",
      "outputs": [{
        "name": "",
        "type": "address"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_to",
        "type": "address"
      }],
      "name": "kill",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        }, {
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "changeOwner",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "m_dailyLimit",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "type": "function"
    }, {
      "inputs": [
        {
          "name": "_owners",
          "type": "address[]"
        }, {
          "name": "_required",
          "type": "uint256"
        }, {
          "name": "_daylimit",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "constructor"
    }, {
      "payable": true,
      "type": "fallback"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        }, {
          "indexed": false,
          "name": "operation",
          "type": "bytes32"
        }
      ],
      "name": "Confirmation",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        }, {
          "indexed": false,
          "name": "operation",
          "type": "bytes32"
        }
      ],
      "name": "Revoke",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldOwner",
          "type": "address"
        }, {
          "indexed": false,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerChanged",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "newOwner",
        "type": "address"
      }],
      "name": "OwnerAdded",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "oldOwner",
        "type": "address"
      }],
      "name": "OwnerRemoved",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "newRequirement",
        "type": "uint256"
      }],
      "name": "RequirementChanged",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_from",
          "type": "address"
        }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "to",
          "type": "address"
        }, {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "SingleTransact",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        }, {
          "indexed": false,
          "name": "operation",
          "type": "bytes32"
        }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "to",
          "type": "address"
        }, {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "MultiTransact",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "operation",
          "type": "bytes32"
        }, {
          "indexed": false,
          "name": "initiator",
          "type": "address"
        }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "to",
          "type": "address"
        }, {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "ConfirmationNeeded",
      "type": "event"
    }
  ];
  contractFactory = web3.eth.contract(abi).at('0x1f96beae932df4d05b133160f440ae992869efeb');
  result = program.to != null
    ? (console.log("Create data field for init transaction"), amount = parseFloat((ref$ = program.amount) != null ? ref$ : "0"), console.log(blue("To"), program.to), console.log(blue("Amount"), amount), console.log(blue("Data"), program.data), contractFactory.execute.getData(program.to, amount, program.data))
    : program.confirm_hash != null ? (console.log("Create data field for confirm transaction"), console.log(blue("Hash"), program.confirm_hash), contractFactory.confirm.getData(program.confirm_hash)) : '';
  if (result.length === 0) {
    console.log("Nothing to do");
  } else {
    console.log("Please send this transaction to your multisig wallet with 0 amount and data field:", yellow(result));
  }
}).call(this);
