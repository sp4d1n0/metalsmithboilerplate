const metalsmith = require('metalsmith');
const serve = require('metalsmith-serve');
const layouts = require('metalsmith-layouts');
const helpers = require('metalsmith-register-helpers');
const markdown = require('metalsmith-markdown');
const watch = require('metalsmith-watch');

metalsmith(__dirname)
    .source('./src/content')
    .use(markdown())
    .destination('./build')
    .use(helpers({
      directory: 'src/templates/helpers',
    }))
    .use(layouts({
      engine: 'handlebars',
      directory: 'src/templates/layouts',
      default: 'default.hbs',
    }))
    .use(serve({
      port: 28657}))
    .use(
        watch({
          paths: {
            '${source}/**/*': true,
            // '${source}/../templates/**/*': true,
          },
          livereload: true,
        }),
    )
    .build(function(err) {
      if (err) console.log(err);
    });

