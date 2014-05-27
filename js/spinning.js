$(function (){
    if(typeof window.spinning === "undefined"){
        window.spinning = {
            COLOR_ANDROID:    "#00B524",
            COLOR_JAVASCRIPT: "#EDDD00",
            COLOR_HTML5:      "#F14A29",
            COLOR_PYTHON:     "#2B5B84"
        };
    }
    window.$spinningContainer = $(".spinning");
    window.$spinningHeader = $("#spinCanvas");
    window.$spinningContainer.resize(spinningResize).resize();
    webGLStart();
});

function spinningResize(){
    window.spinning.cx = $spinningContainer.width() / 2;
    window.spinning.cy = $spinningContainer.height() / 2;
    $spinningHeader.width = $spinningContainer.width();
    $spinningHeader.height = $spinningContainer.height();
    if(typeof window.headerGL !== "undefined" && window.headerGL){
        window.headerGL.viewport(0, 0, $spinningHeader.width, $spinningHeader.height);
    }
}

function initGL($canvas){
    var canvas = $canvas[0]; // Unpack jQuery object
    var gl = null;

    try {
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    } catch (e) {}
    if(!gl){
        console.error("Unable to initialise WebGL");
        gl = null;
    } else return gl;
}

function webGLStart() {
    var gl = initGL($spinningHeader);
    if (gl) {
        window.headerGL = gl;
        $(".spinningContainer").resize();
        gl.clearColor(0.5, 0.5, 0.5, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
}


