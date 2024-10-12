import path          from 'node:path'
import scription2dlx from '@digitallinguistics/scription2dlx'

import { readdir, readFile } from 'fs/promises'

const files          = await readdir(import.meta.dirname, { withFileTypes: true })
const scriptionFiles = files.filter(file => file.name.endsWith(`.txt`))

const options = { errors: true }

const tests = new Map

for (const file of scriptionFiles) {

  const scription = await readFile(path.join(file.parentPath, file.name), `utf8`)
  const dlx       = scription2dlx(scription, options)
  const test      = file.name.replace(/\.txt$/v, ``)

  tests.set(test, {
    data:      dlx.utterances,
    scription: scription.replaceAll(`\r\n`, `\n`),
  })

}

export default tests
