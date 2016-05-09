const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const Promise = require('bluebird')

var start = async () => {
  let i = 0

  console.log('start')
  await Promise.delay(1000)
  console.log(++i)
  await Promise.delay(1000)
  console.log(++i)
  await Promise.delay(1000)
  console.log(++i)
  await Promise.delay(1000)
  console.log('stop')
}

start()
