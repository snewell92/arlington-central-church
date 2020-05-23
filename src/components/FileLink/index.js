import React from 'react'

const FileLink = ({ link: { title, desc, link: url } }) => {
  return (
    <div
      className='content'
      style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
    >
      <h2><a href={url}>{title}</a></h2>
      <p>{desc}</p>
    </div>
  )
}

export default FileLink
