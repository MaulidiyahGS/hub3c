'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            options: {
                nospawn: true
            },
            less: {
                files: [
                        'app/pre-build/less/*.less',
                        'app/pre-build/less/parsial/*.less'
                        ],
                tasks: ['less:server']
            },
            concat: {
                files: ['app/pre-build/js/*.js'],
                tasks: ['concat']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                tasks: ['jshint'],
                files: [
                    'app/*.html',
                    'app/styles/{,*/}*.css',
                    'app/scripts/{,*/}*.js',
                    'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'app'),
                            lrSnippet
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        less: {
            server: {
                options: {
                    paths:  [
                                'app/pre-build/less'
                            ]
                },
                files: {
                    'app/styles/main.css': 'app/pre-build/less/main.less'
                }
            }
        },
        concat: {
            js: {
                src:[
                        'app/components/angular/angular.min.js',
                        'app/components/angular-route/angular-route.min.js',
                        'app/pre-build/js/app.js',
                        'app/pre-build/js/directive/*.js'
                    ],
                dest: 'app/scripts/main.js'
            }
        }
    });

    grunt.registerTask('server', function (target) {

        grunt.task.run([
            'less:server',
            'concat',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};

