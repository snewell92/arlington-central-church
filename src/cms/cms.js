import CMS from 'netlify-cms'

import '../components/all.sass'

// import EventsPagePreview from './preview-templates/EventsPagePreview'
import MaterialsPagePreview from './preview-templates/MaterialsPagePreview'

// CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('materials', MaterialsPagePreview)
