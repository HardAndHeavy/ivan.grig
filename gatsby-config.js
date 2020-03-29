module.exports = {
  siteMetadata: {
    title: `7grig.ru`,
    author: `Иван Григорьев`,
    description: `Это интернет-журнал обо всём. Я увлекаюсь программированием и саморазвитием. Люблю музыку, спорт и конечно же свою семью.`,
    siteUrl: `https://7grig.ru/`,
    social: {
      vk: `https://vk.com/soloist`,
      instagram: `https://www.instagram.com/hardandheavymetal`,
      github: `https://github.com/HardAndHeavy`,
      mail: `HardAndHeavyMetal@gmail.com`,
    },
    git: `https://github.com/HardAndHeavy/ivan.grig`,
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
        trackingId: `UA-139535011-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `grig blog`,
        short_name: `7grig.ru`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `static/phoneIcon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
