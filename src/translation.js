export default function convertTranslation(tln) {

  const lines = []

  if (typeof tln === `string`) {

    lines.push(tln)

  } else {

    const languages = Object.keys(tln)

    if (languages.length === 1) {

      lines.push(tln[languages[0]])

    } else {

      for (const language of languages) {
        lines.push(tln[language])
      }

    }

  }

  return lines

}
