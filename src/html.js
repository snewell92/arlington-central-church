import React from 'react'
import favicon from './img/favicon.ico'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e)
  }
}

export default ({ headComponents, body, postBodyComponents }) => {
  let css
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        id='gatsby-inlined-css'
        dangerouslySetInnerHTML={{ __html: inlinedStyles }}
      />
    )
  }

  return (
    <html lang='en' className='has-navbar-fixed-top'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
        {headComponents}
        <link rel='shortcut icon' href={favicon} />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {css}
      </head>
      <body>
        <div
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
        <script src={__PATH_PREFIX__ + '/js/toggle.js'} />
      </body>
    </html>
  )
}