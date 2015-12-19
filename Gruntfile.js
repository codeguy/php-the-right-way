module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dist: {
                options: {
                    cleancss: true,
                    compress: true,
                    ieCompat: true
                },
                files: {
                    "css/all.css": "less/all.less"
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'ie 9']
                    })
                ]
            },
            dist: {
                src: 'css/all.css'
            }
        },
        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['less:dist', 'postcss:dist'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    // Default task(s)
    grunt.registerTask('default', ['less', 'postcss:dist']);
};
