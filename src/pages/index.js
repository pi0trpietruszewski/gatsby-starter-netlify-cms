import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SliderSection from "../components/SliderSection/SliderSection";
import OfferSection from "../components/OfferSection/OfferSection";
import ContactFormSection from "../components/ContactFormSection/AboutSection";
import AboutSection from "../components/AboutSection/AboutSection";


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      {/*<TextInput*/}
      {/*  onChange={x => {*/}
      {/*    console.log(x.target.value)*/}
      {/*  }}*/}
      {/*  placeholder={"Placeholder"}*/}
      {/*  label={"Label"}*/}
      {/*/>*/}
      <SEO title="All posts" />
      <SliderSection />
      <OfferSection />
      <AboutSection />
      <ContactFormSection />
      {/*{posts.map(({ node }) => {*/}
      {/*  const title = node.frontmatter.title || node.fields.slug*/}
      {/*  return (*/}
      {/*    <article key={node.fields.slug}>*/}
      {/*      <header>*/}
      {/*        <h3*/}
      {/*          style={*/}
      {/*            {*/}
      {/*              // marginBottom: rhythm(1 / 4),*/}
      {/*            }*/}
      {/*          }*/}
      {/*        >*/}
      {/*          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>*/}
      {/*            {title}*/}
      {/*          </Link>*/}
      {/*        </h3>*/}
      {/*        <small>{node.frontmatter.date}</small>*/}
      {/*      </header>*/}
      {/*      <section>*/}
      {/*        <p*/}
      {/*          dangerouslySetInnerHTML={{*/}
      {/*            __html: node.frontmatter.description || node.excerpt,*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </section>*/}
      {/*    </article>*/}
      {/*  )*/}
      {/*})}*/}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`