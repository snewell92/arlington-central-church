import CMS from 'netlify-cms-app'
import '../components/all.sass'
import MaterialsPagePreview from './preview-templates/MaterialsPagePreview'

CMS.registerPreviewTemplate('materials', MaterialsPagePreview)
