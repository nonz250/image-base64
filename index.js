#! /usr/bin/env node

import base64js from 'base64-js'
import cac from 'cac'
import chalk from 'chalk'
import clipboardy from 'clipboardy'
import fs from 'fs'

const cli = cac();

cli
  .command('encode <path>', 'Convert images to base64 strings.')
  .action((path) => {
    const image = fs.readFileSync(path)
    const base64strings = base64js.fromByteArray(image)
    clipboardy.write(base64strings).then(() => {
      console.log(chalk.green('✅ Successfully. Copied to clipboard.'))
    }).catch(() => {
      console.error(chalk.red('⚠️ Failed. Please check your input.'))
    })
  })

cli.help()

cli.parse()
