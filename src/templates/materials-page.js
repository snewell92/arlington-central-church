import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import FileLink from '../components/FileLink'
import Layout from '../components/Layout'

export const MaterialsPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  links,
}) => (
    <Layout>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                  <h2 className='subtitle'>
                    {subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          {links.map((link, id) =>
            <FileLink key={id} link={link} />
          )}
        </div>
      </section>
    </Layout>
  )

MaterialsPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  links: PropTypes.array,
}

const MaterialsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <MaterialsPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      links={frontmatter.links}
    />
  )
}

MaterialsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MaterialsPage

export const materialsPageQuery = graphql`
  query MaterialsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        links {
          link
          title
          desc
        }
      }
    }
  }
`
