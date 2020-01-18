import React from "react"
//import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, margin: `0 auto 3rem` }}>
      <Image />
    </div>
    <h1>Frederike <span></span> Christoph</h1>
    <h3>Save the date<br /><span>22 / 05 / 21</span></h3>
    <p style={{ fontStyle: `italic` }}>Weitere Informationen folgen</p>
  </Layout>
)

export default IndexPage
