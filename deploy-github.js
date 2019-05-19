const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/HardAndHeavy/hardandheavy.github.io.git',
  }
)