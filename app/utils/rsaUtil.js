const fs = require("fs");
const crypto = require('crypto');

const crypto_RSA = (function() {
    const privateKey = fs.readFileSync("./resources/cert/rsa_private_key.pem", "utf8").toString();
    const publicKey = fs.readFileSync("./resources/cert/rsa_public_key.pem", "utf8").toString();

    function encrypt_pubKey(data) {
        return crypto.publicEncrypt(publicKey, Buffer.from(data));
    }

    function decrypt_prvKey(data) {
        return crypto.privateDecrypt({key: privateKey, padding: crypto.constants.RSA_PKCS1_PADDING}, Buffer.from(data, "base64")).toString();
    }

    return {privateKey, publicKey, encrypt_pubKey, decrypt_prvKey};
}());

module.exports = crypto_RSA;


