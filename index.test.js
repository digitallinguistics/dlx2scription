import dlx2scription from './index.js'
import { expect }    from 'chai'
import fixtures      from './test/index.js'

import { describe, it, test } from 'node:test'

describe(`dlx2scription`, function() {

  describe(`library`, function() {

    it(`converts multiple utterances`)

  })

  describe(`lines`, function() {

    test(`metadata`, function() {

      const { data, scription } = fixtures.get(`metadata`)
      const result              = dlx2scription(data)

      expect(result).to.equal(scription)

    })

    test(`transcription: single orthography`, function() {

      const { data, scription } = fixtures.get(`transcription-single`)
      const result              = dlx2scription(data)

      expect(result).to.equal(scription)

    })

    test(`transcription: multiple orthographies`, function() {

      const { data } = fixtures.get(`transcription-multiple`)
      const result   = dlx2scription(data)
      const expected = `qaxtiqi\nʔaštiʔi\nHelloǃ`

      expect(result).to.equal(expected)

    })

    test(`translation: single language`, function() {

      const { data, scription } = fixtures.get(`translation-single`)
      const result              = dlx2scription(data)

      expect(result).to.equal(scription)

    })

    test(`translation: multiple languages`, function() {

      const { data } = fixtures.get(`translation-multiple`)
      const result   = dlx2scription(data)
      const expected = `Jambo\nHello\nBonjour`

      expect(result).to.equal(expected)

    })

  })

  describe(`options`)

})
