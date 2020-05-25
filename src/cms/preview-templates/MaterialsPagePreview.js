import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles.sass'
import { MaterialPageTemplate } from '../../templates/materials-page'

const MaterialsPagePreview = ({ entry, getAsset }) => {
  const linkData = entry.getIn(['data', 'links'])
  const links = linkData ? linkData.toJS() : []

  return (
    <MaterialPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      files={links}
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
