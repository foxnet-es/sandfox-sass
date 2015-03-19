module.exports = function( grunt ) {

    var path        = require( "path" ),

        pkg         = grunt.file.readJSON(  "package.json" ),

        config      = 
        ({
        
            pkg         : pkg,

            sass:
            {
                options:
                {
                    style: 'expanded',

                    sourceMap: true
                },

                dev:
                {
                    files:
                    {
                        './dist/sandfox.css'     : './src/main.scss'
                    }
                }
            },

            watch       : 
            {
                css     :
                {
                    files       : [ './package.json', './src/*.scss', './src/**/*.scss' ],

                    tasks       : [ 'sass' ]
                }
            },
        });

    grunt.initConfig( config );   

    grunt.loadNpmTasks( 'grunt-sass' );

    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.registerTask( 'dev',      [ 'sass:dev' ] );

    grunt.registerTask( 'master',   [ 'sass:master' ] );

    grunt.registerTask( 'default',  [ 'dev' ] );
};