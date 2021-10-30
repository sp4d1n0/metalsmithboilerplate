const metalsmith = require('metalsmith');
const serve = require('metalsmith-serve');
const markdown = require('metalsmith-markdown');
const watch = require('metalsmith-watch');

metalsmith(__dirname)
    .use(markdown())
    .destination('./build')
    .use(serve({
      port: 26785}))
    .use(
        watch({
          paths: {
            '${source}/content/**/*': true,
            'templates/**/*': '**/*.md',
          },
          livereload: true,
        }),
    )
    .build(function(err) {
      if (err) console.log(err);
    });

