const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');

metalsmith(__dirname)
    .use(markdown())
    .destination('./build')
    .build();
