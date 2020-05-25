import CMS from 'netlify-cms'
import '../assets/styles.sass'

// import EventsPagePreview from './preview-templates/EventsPagePreview'
import MaterialsPagePreview from './preview-templates/MaterialsPagePreview'

CMS.registerPreviewStyle('/styles.css')

// CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('materials', MaterialsPagePreview)
