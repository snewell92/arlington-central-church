import React from 'react'
import PropTypes from 'prop-types'
import { MaterialPageTemplate } from '../../templates/materials-page'

const MaterialsPagePreview = ({ entry, getAsset }) => {
  const linkData = entry.getIn(['data', 'links'])
  const links = linkData ? linkData.toJS() : []

  return (
    <MaterialPageTemplate
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
  }),
  getAsset: PropTypes.func,
}

export default MaterialsPagePreview
