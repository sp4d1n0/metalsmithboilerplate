const metalsmith = require('metalsmith');
const serve = require('metalsmith-serve');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const watch = require('metalsmith-watch');

metalsmith(__dirname)
    .source('./src/content')
    .use(markdown())
    .destination('./build')
    .use(layouts({
      engine: 'handlebars',
      directory: 'src/templates/layouts',
      default: 'default.hbs',
    }))
    .use(serve({
      port: 26785}))
    .use(
        watch({
          paths: {
            '${source}/content/**/*': true,
            '${source}/templates/**/*': true,
          },
          livereload: true,
        }),
    )
    .build(function(err) {
      if (err) console.log(err);
    });

