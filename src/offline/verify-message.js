/* @flow */
'use strict' // eslint-disable-line strict
const common = require('../common')
const keypairs = require('ripple-keypairs')
const binary = require('ripple-binary-codec')
const {validate} = common

function verifyMessage(message: string,
  signature: string, publicKey: string
): string {
  validate.verifyMessage({message, signature, publicKey})

  const signingData = binary.encode({
    message: message
  })
  return keypairs.verify(signingData, signature, publicKey)
}

module.exports = verifyMessage
