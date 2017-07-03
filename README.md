# Blockstarter Sign

Sign transactions of your multisig wallet created by blockstarter 

### Install it

Install nodejs and npm (documentation: https://www.npmjs.com/package/npm)
```
npm i blockstarter_sign --save
```


### Use it


* Set (to) address - target address where do you want to send money from your multisig address
* Set Amount - How many ethers would you like to send

```
blockstarter_sign --to 0x1f96beae932df4d05b133160f440ae992869efeb --amount 1
```

* Obtain Generated $data 
* Open Metamask (or something else)
* Put Your multisig contract address (TO)
* Set 0 Amount
* Put generated $data in data field

Note! Each owner should repeat a same action

