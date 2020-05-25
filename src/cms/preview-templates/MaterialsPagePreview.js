import React from 'react'
import PropTypes from 'prop-types'
import { MaterialsPageTemplate } from '../../templates/materials-page'

const MaterialsPagePreview = ({ entry }) => {
  const linkData = entry.getIn(['data', 'links'])
  const links = linkData ? linkData.toJS() : []

  return (
    <MaterialsPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      links={links}
    />
  )
}

MaterialsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default MaterialsPagePreview
