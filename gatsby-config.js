
const feedOptions = {
  title: '00365 Podcast',
  description: '一档探究热情与好奇心的播客节目',
  feed_url: 'http://example.com/rss.xml',
  site_url: 'http://example.com',
  image_url: 'http://example.com/icon.png',
  docs: 'http://example.com/rss/docs.html',
  managingEditor: 'Dylan Greene',
  webMaster: 'Dylan Greene',
  copyright: '2020 Harvey Qiu & Monshell Su',
  language: 'zh-cn',
  categories: ['Category 1','Category 2','Category 3'],
  pubDate: 'May 20, 2019 04:00:00 GMT',
  ttl: '60',
  custom_namespaces: {
    'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
  },
  custom_elements: [
    {'itunes:subtitle': 'A show about everything'},
    {'itunes:author': 'John Doe'},
    {'itunes:summary': 'All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store'},
    {'itunes:owner': [
      {'itunes:name': 'John Doe'},
      {'itunes:email': 'john.doe@example.com'}
    ]},
    {'itunes:image': {
      _attr: {
        href: 'http://example.com/podcasts/everything/AllAboutEverything.jpg'
      }
    }},
    {'itunes:category': [
      {_attr: {
        text: 'Technology'
      }},
      {'itunes:category': {
        _attr: {
          text: 'Gadgets'
        }
      }}
    ]}
  ]
}

module.exports = {
  siteMetadata: {
    title: `00365 Podcast`,
    author: {
      name: `Harvey Qiu & Monshell Su`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-podcast-feed-fix`,
      options: {
          feedOptions
      },
    }
  ],
}
