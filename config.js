exports.config = {
    files: {
        javascripts: {
            defaultExtension: "js",
            joinTo: {
                "javascripts/app.js": /^app/,
                "javascripts/vendor.js": /^vendor/
            },
            order: {
                before: [
                    'vendor/scripts/console-helper.js',
                    'vendor/scripts/jquery.js',
                    'vendor/scripts/underscore.js',
                    'vendor/scripts/backbone.js',
                    'vendor/scripts/backbone.marionette.js',
                    'vendor/scripts/bootstrap.js'
                ]
            }
        },
        stylesheets: {
            defaultExtension: "styl",
            joinTo: "stylesheets/app.css",
            order: {
                before: [
                    "vendor/styles/normalize.css",
                    'vendor/styles/bootstrap.css',
                    'vendor/styles/bootstrap-responsive.css',
                    'vendor/styles/font-awesome.css'
                ]
            }
        },
        templates: {
            defaultExtension: "hbs",
            joinTo: "javascripts/app.js"
        }
    },
    server: {
        port: 8080,
        run: true
    },
    "sourceMaps":false
};