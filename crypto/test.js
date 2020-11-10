const crypto = require('crypto')
const fs = require('fs')

const data = 'hello world!'
const private_key = fs.readFileSync('./keys/rsa_private.key')
const public_key = fs.readFileSync('./keys/rsa_public.key')

///////////////// 摘要 ////////////////////
console.log(`\n====== 摘要 =====`)

// md5
const digest_md5 = crypto.createHash('md5').update(data, 'utf8').digest('hex')
console.log(`md5: ${digest_md5}`)

// sha1
const digest_sha1 = crypto.createHash('sha1').update(data, 'utf8').digest('hex')
console.log(`sha1: ${digest_sha1}`)

// sha256
const digest_sha256 = crypto.createHash('sha256').update(data, 'utf8').digest('hex')
console.log(`sha256: ${digest_sha256}`)

// sha512
const digest_sha512 = crypto.createHash('sha512').update(data, 'utf8').digest('hex')
console.log(`sha512: ${digest_sha512}`)

// 
const hello_md5 = crypto.createHash('md5').update('hello', 'utf8').digest()
const helloworld_md5 = crypto.createHash('md5').update('hello world', 'utf8').digest()
console.log(hello_md5.length, helloworld_md5.length)

const hello_sha1 = crypto.createHash('sha1').update('hello', 'utf8').digest()
const helloworld_sha1 = crypto.createHash('sha1').update('hello world', 'utf8').digest()
console.log(hello_sha1.length, helloworld_sha1.length)



//////////////// 加密摘要 ////////////////////
console.log(`\n===== 加密摘要 =====`)

const hmac_digest = crypto.createHmac('md5', private_key).update(data).digest('hex')
console.log(`hmac_md5: ${hmac_digest}`)

// console.log(crypto.getHashes())





//////////////////// 对称加密 //////////////////////
// console.log(`\n===== 对称加密 =====`)

// const cipher = crypto.createCipheriv('aes-128-ccm', '0123456789111111', '0123456789111111')
// cipher.update(data, 'utf8', 'hex')
// const res = cipher.final('hex')
// console.log(res)






/////////////////// 非对称加密 ///////////////////////
console.log(`\n===== 非对称加密 =====`)

// 发送方，使用接收方的公钥对信息进行加密
const encryptedMessage = crypto.publicEncrypt(public_key, Buffer.from(data))
console.log(encryptedMessage)

// 接收方，使用自己的私钥对加密的信息进行解密
const decryptedData = crypto.privateDecrypt(private_key, encryptedMessage)
console.log(decryptedData.toString())





//////////////////////// 签名 //////////////////////////////
console.log(`\n===== 签名 =====`)

// 发送方，使用自己的私钥对【数据】进行签名
const sign = crypto.createSign('rsa-sha256').update(data).sign(private_key, 'hex')
console.log(sign)

// 接收方，使用对方的公钥对【数据】和【签名】进行验证
const res = crypto.createVerify('rsa-sha256').update(data).verify(public_key, sign, 'hex')
console.log(res)












