
const feedOptions = {
  title: '00365 Podcast',
  description: '一档探究热情与好奇心的播客节目',
  feed_url: 'http://00365.harveyqiu.xyz/rss.xml',
  site_url: 'http://00365.harveyqiu.xyz/',
  image_url: 'http://00365.harveyqiu.xyz/logo.png',
  docs: 'https://example.com/rss/docs.html',
  managingEditor: 'Harvey Qiu & Monsell Su',
  webMaster: 'Harvey Qiu',
  copyright: '2020 Harvey Qiu & Monsell Su',
  language: 'zh-cn',
  categories: ['Journal','Technology','Talk'],
  pubDate: 'July 19, 2020 00:36:50 GMT',
  ttl: '60',
  custom_namespaces: {
    'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
  },
  custom_elements: [
    {'itunes:subtitle': 'subtitle!'},
    {'itunes:author': 'Harvey Qiu & Monsell Su'},
    {'itunes:summary': '一档探讨热情与好奇心的播客节目'},
    {'itunes:owner': [
      {'itunes:name': 'Harvey Qiu'},
      {'itunes:email': 'qiushimao@hotmail.com'}
    ]
    },
    {'itunes:image': {
      _attr: {
        href: 'http://00365.harveyqiu.xyz/logo.png'
      }
    }},
    {'itunes:category': [
      {_attr: {
        text: 'Technology'
      }},
      {'itunes:category': {
        _attr: {
          text: 'Journal'
        }
      }}
    ]}
  ]
}

module.exports = {
  pathPrefix: "/00365Podcast",
  siteMetadata: {
    title: `00365 Podcast`,
    author: {
      name: `Harvey Qiu & Monsell Su`,
      summary: `两位大学生`,
    },
    description: `一档探讨热情与好奇心的播客节目`,
    siteUrl: `https://alienmao.github.io/00365Podcast/`,
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
        name: `00365 Podcast`,
        short_name: `00365 Podcast`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
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
