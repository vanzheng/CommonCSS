module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask('default', ['less']);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    '_output/common.css': 'common.less'
                }
            },
            production: {
                files: {
                    '_output/common.min.css': 'common.less'
                }
            }
        }
    });
}
