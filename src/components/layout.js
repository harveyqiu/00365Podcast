import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, children }) => {
  let header = (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          00365彩色
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>
          <a class="navbar-item" href="/episodes">
            Episodes
          </a>
          <a class="navbar-item" href="/hosts">
            Hosts
          </a>
          <a class="navbar-item" href="/guests">
            Guests
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-link">
                <strong>联系我们</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
  return (
    <div>
      {header}
      <section class="section">{children}</section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
