import React from 'react'
import favicon from './img/favicon.ico'
import appleIcon from './img/apple-touch-icon.png'
import favMd from './img/favicon-32x32.png'
import favLg from './img/favicon-16x16.png'

export default ({ headComponents, body, postBodyComponents }) => {
  return (
    <html lang='en' className='has-navbar-fixed-top'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
        {headComponents}
        <link rel='shortcut icon' href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favLg} />
        <link rel="icon" type="image/png" sizes="16x16" href={favMd} />
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