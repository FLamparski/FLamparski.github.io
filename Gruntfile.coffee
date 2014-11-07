module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    express:
      all:
        options:
          port: 4000
          hostname: '0.0.0.0'
          bases: ['_site/']
    concat:
      options:
        separator: ';'
      dist:
        src: ['js/**/*.js']
        dest: 'dist/<%= pkg.name %>.js'
    uglify:
      options:
        banner: '/* Compiled <%= pkg.name %> ' +
        '<%= grunt.template.today("dd-mm-yyyy") %>*/\n'
      dist:
        files:
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    jshint:
      files: ['js/ftw/*.js']
    jekyll:
      options:
        bundleExec: false
        src: '.'
      dist:
        options:
          dest: '_site/'
    sass:
      dist:
        options:
          style: 'expanded'
          compass: true
        files:
          'stylesheets/style.css': 'sass/screen.scss'
    watch:
      options:
        livereload: true
      files: [
        'js/ftw/*.js', 'sass/*.scss', 'Gruntfile.coffee',
        '_includes/**/*.html', 'blog/**/*', '_posts/**/*',
        '_layouts/**/*', 'index.html'
      ]
      tasks: ['jshint', 'concat', 'uglify', 'sass', 'jekyll']

  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-jekyll'
  grunt.loadNpmTasks 'grunt-express'

  grunt.registerTask 'default', ['express', 'jshint', 'concat', 'uglify',
    'sass', 'jekyll']
  grunt.registerTask 'serve', ['default', 'watch']