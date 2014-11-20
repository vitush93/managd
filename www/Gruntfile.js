// will be combined and minified in specific order
var styleSheets = [
    //'bower_components/bootstrap/dist/css/bootstrap.css',
    //'bower_components/bootstrap/dist/css/bootstrap-theme.css',
    'dev/css/bootstrap-theme-paper-full.min.css',
    //'dev/css/buttons.css',
    //'dev/css/checkbox.css',
    'bower_components/font-awesome/css/font-awesome.css',
    'css/less.css'
];

// will be combined and minified in specific order
var scripts = [
    //'bower_components/jquery/dist/jquery.js',
    'dev/js/jquery.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'dev/js/Chart.js',
    'dev/js/jquery.bootstrap-autohidingnavbar.js',
    'dev/js/nette.ajax.js',
    'dev/js/live-form-validation.js',
    'dev/js/page.js'
];


// GRUNT CONFIGURATION
module.exports = function (grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssc: {
            build: {
                options: {
                    sortSelectors: true,
                    lineBreaks: true,
                    sortDeclarations: true,
                    consolidateViaDeclarations: false,
                    consolidateViaSelectors: false,
                    consolidateMediaQueries: false
                },
                files: {
                    'css/master.css': 'css/master.css'
                }
            }
        },

        cssmin: {
            build: {
                src: 'css/master.css',
                dest: 'css/master.css'
            }
        },

        less: {
            build: {
                files: {
                    'css/less.css': 'dev/less/main.less'
                }
            }
        },

        concat: {
            dist: {
                src: styleSheets,
                dest: 'css/master.css'
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    'css/master.css': 'css/master.css'
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'js/master.js': scripts
                }
            }
        },

        watch: {
            js: {
                files: ['dev/js/*.js'],
                tasks: ['buildjs']
            },
            css: {
                files: ['dev/less/*.less', 'dev/css/*.css'],
                tasks: ['buildcss']
            }
        }

    });

    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('buildcss', ['less', 'concat', 'cssc', 'autoprefixer', 'cssmin']);
    grunt.registerTask('buildjs', ['uglify']);
    grunt.registerTask('build', ['buildcss', 'buildjs']);

};