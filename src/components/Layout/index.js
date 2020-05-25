import React from 'react'
import { Helmet } from 'react-helmet'
import '../all.sass';
import config from '../../../meta/config'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default ({ children }) => (
  <>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name='description' content={config.siteDescription} />
    </Helmet>
    <NavBar />
    {children}
    <Footer />
  </>
)