import convertUtterance from './src/convertUtterance.js'

export default function dlx2scription(utterances = []) {
  return utterances.map(convertUtterance).join(`\n\n`)
}
