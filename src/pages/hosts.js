import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const Hosts = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Hosts" />
      <div class="container">
        <div class="columns">
            <div class="column">
                <h1 class="title">
                    Hosts
                </h1>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                msnb
            </div>
            <div class="column">
                Harvey
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Hosts;