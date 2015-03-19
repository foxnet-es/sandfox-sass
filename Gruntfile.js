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

                    sourceMap: true,

                    includePaths:
                    [
                        './node_modules/bootcamp/dist'
                    ]
                },

                dev:
                {
                    files:
                    {
                        './dist/sandfox.css'     : './src/main.scss'
                    }
                },

                unit:
                {
                    files:
                    {
                        './dist/sandfox.unit.css'     : './test/unit/unit.scss'
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

    grunt.registerTask( 'test',     [ 'sass:unit' ] );

    grunt.registerTask( 'dev',      [ 'sass:dev' ] );

    grunt.registerTask( 'master',   [ 'sass:master' ] );

    grunt.registerTask( 'default',  [ 'dev' ] );
};