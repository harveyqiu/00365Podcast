import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const Guests = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Hosts" />
      <div class="container">
        <div class="columns">
            <div class="column">
                <h1 class="title">
                    Guests
                </h1>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                jwnb
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Guests;