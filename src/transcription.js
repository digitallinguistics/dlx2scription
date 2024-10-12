export default function convertTranscription(txn) {

  const lines         = []
  const orthographies = Object.keys(txn)

  if (orthographies.length === 1) {

    lines.push(txn[orthographies[0]])

  } else {

    for (const orthography of orthographies) {
      lines.push(txn[orthography])
    }

  }

  return lines

}
