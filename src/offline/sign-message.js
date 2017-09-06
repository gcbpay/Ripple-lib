/* @flow */
'use strict' // eslint-disable-line strict
const common = require('../common')
const keypairs = require('ripple-keypairs')
const binary = require('ripple-binary-codec')
const {validate} = common

function signMessage(message: string,
  privateKey: string
): string {
  validate.signMessage({message, privateKey})

  const signingData = binary.encode({
    message: message
  })
  return keypairs.sign(signingData, privateKey)
}

module.exports = signMessage
