import dlx2scription from '../index.js'
import { expect }    from 'chai'
import fixtures      from './index.js'

export default function createDefaultTest(name) {
  return function defaultTest() {

    const { data, scription } = fixtures.get(name)
    const result = dlx2scription(data)

    expect(result).to.equal(scription)

  }
}
