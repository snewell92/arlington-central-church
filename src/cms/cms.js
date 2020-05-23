import CMS from 'netlify-cms'

import EventsPagePreview from './preview-templates/EventsPagePreview'

CMS.registerPreviewStyle('/styles.css')

CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('materials', Mate)
