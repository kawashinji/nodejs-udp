'use strict'

const glob = require('glob')
const path = require('path')
const config = require('./config')

exports.entryPaths = () => {
  const recievers = getFiles(`${config.build.entryRoot}/reciever/**/*.ts`)
  const senders = getFiles(`${config.build.entryRoot}/sender/**/*.ts`)
  return { 'reciever': recievers, 'sender': senders }
}

const getFiles = (path, options={}) => {
    return glob.sync(path, options).map((file) => {
        return file
    })
}

exports.resolvePath = (dir) => {
  return path.join(__dirname, '..', dir)
}
