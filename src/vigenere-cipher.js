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
    const messageWithoutSpace = message.toUpperCase();
    let keyMessage = messageWithoutSpace.split("");
    let i = 0;

/*     for (let i=0; i < messageWithoutSpace.length; i += key.length) {
      for (let j=0; j<key.length && i+j<messageWithoutSpace.length; j++) {
        if (messageWithoutSpace[i+j].match(/[A-Z]/)) {
          keyMessage[i + j] = key.toUpperCase()[j]
        } else {
          keyMessage[i + j] = messageWithoutSpace[i+j]
        }
      }
    } */
    let j = 0;
    for (let i=0; i < messageWithoutSpace.length; i++) {
        if (messageWithoutSpace[i].match(/[A-Z]/)) {
          keyMessage[i] = key.toUpperCase()[j]
          j+=1;
        } else {
          keyMessage[i] = messageWithoutSpace[i]
        }
        if (j>=key.length) {
          j = 0
        }
    }


    keyMessage = keyMessage.map((it, index) =>{
      if (64 < it.charCodeAt(0) < 90) {
        return (it.charCodeAt(0) - 64 + messageWithoutSpace.charCodeAt(index) - 65) % 26
      }
      return it
    })

    return keyMessage

    keyMessage = String.fromCharCode(...keyMessage.map(i => {

    }))





/*     if (this.isDirect) {
      
    } */
  }
  decrypt(encryptedMessage, key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const a = new VigenereCipheringMachine(true);
console.log("!".charCodeAt(0))
console.log(a.encrypt("attack at dawn!", "alphonse"));

module.exports = {
  VigenereCipheringMachine
};