#pragma header

uniform float darkness;

void main() {
    vec4 color = flixel_texture2D(bitmap, openfl_TextureCoordv.xy);
    color.rgb *= (1.0 - darkness);
    gl_FragColor = color;
}