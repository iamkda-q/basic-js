const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const messageWithoutSpace = message.replace(/\s/g, "")
    let keyMessage = messageWithoutSpace.split("");
    let i =0
while(i<messageWithoutSpace.length) {
  for (let j=0; j<key.length; j++) {
    keyMessage[i] = key[j]
    i++
  }
}

    for (let i=0; i<messageWithoutSpace.length; i++) {
      for (let j=0; j<key.length; j++) {
        keyMessage[i] = key[j]
        i++
      }

    }
    return keyMessage



/*     if (this.isDirect) {
      
    } */
  }
  decrypt(encryptedMessage, key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const a = new VigenereCipheringMachine(true);

console.log(a.encrypt("attack at dawn", "lemon"));

module.exports = {
  VigenereCipheringMachine
};
