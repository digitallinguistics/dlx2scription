import convertTranscription from './transcription.js'
import convertTranslation   from './translation.js'

export default function convertUtterance({
  metadata,
  transcription,
  translation,
}) {

  const lines = []

  if (typeof metadata !== `undefined`) {
    lines.push(`# ${ metadata }`)
  }

  if (transcription) {
    lines.push(...convertTranscription(transcription))
  }

  if (typeof translation !== `undefined`) {
    lines.push(...convertTranslation(translation))
  }

  return lines.join(`\n`)

}
