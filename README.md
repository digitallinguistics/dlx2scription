# dlx2scription

A JavaScript library for converting linguistic data to a simple interlinear text.

Works in both Node and the browser.

- [Overview](#overview)
- [Usage](#usage)
- [Options](#options)
- [Report a problem / Request a feature][issues]

## Overview

> **tl;dr:** This library converts data from [DaFoDiL] format to [Scription] format.

The [Digital Linguistics] (DLx) project provides a recommended format for storing linguistic data called <abbr>[DaFoDiL]</abbr> (<dfn>The Data Format for Digital Linguistics</dfn>). This library provides a converter which transforms DaFoDiL-formatted data into a simple text format frequently used in linguistics called an [interlinear gloss][Leipzig]. In particular, the DLx project offers a specification for how to format interlinear glosses in a way that is computer-readable, called [Scription].

Here is a small example of an utterance in DaFoDiL format:

```json
{
  "metadata": "Swahili",
  "transcription": {
    "default": "ninakupenda"
  },
  "translation": "I love you",
  "words": [
    {
      "transcription": {
        "default": ""
      },
      "analysis": {
        "default": "ni-na-ku-pend-a"
      },
      "gloss": "1sg-PRES-2sg-love-IND",
      "morphemes": [
        {
          "transcription": {
            "default": "ni"
          },
          "gloss": "1sg"
        },
        {
          "transcription": {
            "default": "na"
          },
          "gloss": "PRES"
        },
        {
          "transcription": {
            "default": "ku"
          },
          "gloss": "2sg"
        },
        {
          "transcription": {
            "default": "pend"
          },
          "gloss": "love"
        },
        {
          "transcription": {
            "default": "a"
          },
          "gloss": "IND"
        }
      ]
    }
  ]
}
```

And here is that same data in Scription format:

```txt
# Swahili
ninakupenda
ni-na-ku-pend-a
1sg-PRES-2sg-love-IND
I love you
```

## Usage

### 1. Install

This library is distributed as an `npm` package and can be installed using `npm` or other Node package mangers:

```cmd
npm install @digitallinguistics/dlx2scription
```

### 2. Import the library

#### Node.js

```js
import dlx2scription from '@digitallinguistics/dlx2scription'
```

#### Browser

To use this library in a browser, you can either import the script directly from the `node_modules/` folder, or use a JavaScript bundler (Webpack, Rollup, Browserify, ESBuild, etc.) to bundle the library into a single file while you can import into your HTML:

```html
<script type=module>

  // Import a bundled copy of library.
  import dlx2scription from './dlx2scription.js'

  // OR

  // Import directly from the `node_modules/` folder.
  import dlx2scription from './node_modules/@digitallinguistics/dlx2scription/index.js'

</script>
```

### 3. Convert some data

The library exports a single method which accepts an Array of utterances in DaFoDiL format as the first argument, and an options hash as the second.

```js
const utterances = [/* An array of utterances in DaFoDiL format. */]
const scription  = dlx2scription(utterances, { /* options */ })

console.log(scription)
// # Swahili
// ninakupenda
// ni-na-ku-pend-a
// 1sg-PRES-2sg-love-IND
// I love you
```

## Options

The following options are available:

| Option        | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| (forthcoming) |      |         |             |

## Bugs & Feature Requests

To report a problem or request a feature, please [open an issue here][issues].

<!-- LINKS -->
[Digital Linguistics]: https://github.com/digitallinguistics
[DaFoDiL]:             https://format.digitallinguistics.io
[issues]:              https://github.com/digitallinguistics/dlx2scription
[Leipzig]:             https://www.eva.mpg.de/lingua/resources/glossing-rules.php
[Scription]:           https://scription.digitallinguistics.io
