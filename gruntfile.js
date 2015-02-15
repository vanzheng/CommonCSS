module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dist/common.css': 'common.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/common.min.css': 'common.less'
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask('default', ['less']);
}
