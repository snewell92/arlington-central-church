import CMS from 'netlify-cms'
import '../styles/global.sass'

// import EventsPagePreview from './preview-templates/EventsPagePreview'
import MaterialsPagePreview from './preview-templates/MaterialsPagePreview'

// CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('materials', MaterialsPagePreview)
