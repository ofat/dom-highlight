module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: [
                'Gruntfile.js',
                'dom-highlight.js'
            ],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        uglify: {
            dest: {
                files: {
                    'dom-highlight.min.js': ['dom-highlight.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);

};