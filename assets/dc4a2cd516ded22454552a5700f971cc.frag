precision mediump float;

        uniform float     time;
        uniform vec2      resolution;
        varying vec2 vTextureCoord;

        #define PI 0.01

        void main( void ) {

            vec2 p = ( vTextureCoord.xy / resolution.xy ) - 0.5;

            float sx = 0.2*sin( 25.0 * p.y - time * 5.);

            float dy = 0.9/ ( 50. * abs(p.y - sx));

            gl_FragColor = vec4( (p.x + 0.5) * dy, 0.5 * dy, dy-1.65, 5.0 );

        }