let scale = 0.3
var canvas = document.querySelectorAll('canvas')[0],
    ctx = canvas.getContext('2d'),
    arrows = [],
    ARROWS_GRID = 40;
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
var Mouse = function (el) {
    this.el = el || window;
    this.x = 0;
    this.y = 0;
    var _getPointerEvent = function(event) {
        return event.targetTouches ? event.targetTouches[0] : event;
    };
    var _setMouseCoordinates = function ( e ) {
        e.preventDefault();
        var pointer = _getPointerEvent(e),
            x = pointer.pageX,
            y = pointer.pageY;
        this.x = x;
        this.y = y;
    };
    var events = "mousernter mousemove touchstart touchenter touchmove";
    events.split(' ').forEach(function(eventName){
        this.el.addEventListener(eventName,_setMouseCoordinates.bind(this))
    })
    return this;
}();
var Arrow = function (o) {
    this.x = o.x | 0;
    this.y = o.y | 0;
    this.color = o.color || "#ffffff";
    this.rotation = o.rotation | 0;
    this.draw = function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.lineWidth = 1;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(40 * scale, 0);
        ctx.lineTo(40 * scale, 10 * scale);
        ctx.lineTo(80 * scale, -15 * scale);
        ctx.lineTo(40 * scale, -40 * scale);
        ctx.lineTo(40 * scale, -30 * scale);
        ctx.lineTo(0, -30 * scale);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fillStyle = "#4472c4";
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };
};
var setViewport = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
};
var createParticles = function () {
    arrows = [];
    var ROWS = canvas.width / ARROWS_GRID,
        COLS = canvas.height / ARROWS_GRID;
    for (var x = 0; x < ROWS; x++) {
        for (var y = 0; y < COLS; y++){
            arrows.push(new Arrow({
                x:x * ARROWS_GRID,
                y:y * ARROWS_GRID
            }));
        }
    }
};
var loop = function (){
    render();
    window.requestAnimationFrame(loop);
};
var render = function () {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    [].forEach.call(arrows,function(arrow){
        arrow.rotation = Math.atan2(Mouse.y - arrow.y,Mouse.x - arrow.x);
        arrow.draw();
    });
};
setViewport();
createParticles();
loop();
window.addEventListener('resize',setViewport,false);