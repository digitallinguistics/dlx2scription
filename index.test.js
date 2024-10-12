import dlx2scription from './index.js'
import { expect }    from 'chai'
import fixtures      from './test/index.js'

import { describe, it, test } from 'node:test'

function createDefaultTest(name) {
  return function defaultTest() {

    const { data, scription } = fixtures.get(name)
    const result              = dlx2scription(data)

    expect(result).to.equal(scription)

  }
}

describe(`dlx2scription`, function() {

  describe(`library`, function() {

    it(`converts multiple utterances`, createDefaultTest(`multiple-utterances`))

  })

  describe.only(`lines`, function() {

    test(`metadata`, createDefaultTest(`metadata`))

    test(`transcription: single orthography`, createDefaultTest(`transcription-single`))

    test(`transcription: multiple orthographies`, function() {

      const { data } = fixtures.get(`transcription-multiple`)
      const result   = dlx2scription(data)
      const expected = `qaxtiqi\nʔaštiʔi\nHelloǃ`

      expect(result).to.equal(expected)

    })

    test(`translation: single language`, createDefaultTest(`translation-single`))

    test(`translation: multiple languages`, function() {

      const { data } = fixtures.get(`translation-multiple`)
      const result   = dlx2scription(data)
      const expected = `Jambo\nHello\nBonjour`

      expect(result).to.equal(expected)

    })

  })

  describe(`options`)

})
