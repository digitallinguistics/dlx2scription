import dlx2scription from './index.js'
import { expect }    from 'chai'

import { describe, it } from 'node:test'

describe(`dlx2scription`, function() {

  it(`exports a function`, function() {
    expect(dlx2scription).to.be.a(`function`)
  })

})
