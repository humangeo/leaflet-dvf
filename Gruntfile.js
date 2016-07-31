module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            all: {
                options: {
                    separator: ' '
                },
                src: ['src/copyright.js', 'src/leaflet.dvf.linearfunctions.js', 'src/leaflet.dvf.utils.js', 'src/leaflet.dvf.palettes.js', 'src/leaflet.dvf.regularpolygon.js', 'src/leaflet.dvf.markers.js', 'src/leaflet.dvf.chartmarkers.js', 'src/leaflet.dvf.datalayer.js', 'src/leaflet.dvf.lines.js', 'src/leaflet.dvf.controls.js', 'src/leaflet.dvf.experimental.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
            markers: {
                options: {
                    separator: ';'
                },
                src: ['src/copyright.js', 'src/leaflet.dvf.linearfunctions.js', 'src/leaflet.dvf.utils.js', 'src/leaflet.dvf.palettes.js', 'src/leaflet.dvf.markers.js', 'src/leaflet.dvf.chartmarkers.js'],
                dest: 'dist/<%= pkg.name %>.markers.js'
            },
            css: {
                src: ['src/css/dvf.css'],
                dest: 'dist/css/dvf.css'
            }
        },
        uglify: {
            all: {
                options: {
                    preserveComments: 'some',
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.all.dest %>']
                }
            },
            markers: {
                options: {
                    preserveComments: 'some',
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    'dist/<%= pkg.name %>.markers.min.js': ['<%= concat.markers.dest %>']
                }
            },
            country: {
                files: {
                    'dist/data/countryData.min.js': ['src/data/countryData.js']
                }
            },
            state: {
                files: {
                    'dist/data/stateData.min.js': ['src/data/stateData.js']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('test', ['jshint']);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('all', ['jshint', 'concat:all', 'concat:css', 'uglify:all']);
    grunt.registerTask('markers', ['jshint', 'concat:markers', 'uglify:markers']);
};