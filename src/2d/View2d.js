define(["require", "exports", "../AppEvent", "./EventName2d", "./Preloader"], function (require, exports, AppEvent_1, EventName2d_1, Preloader_1) {
    "use strict";
    // отображение 2д
    var View2d = (function () {
        function View2d() {
            this._x = 0;
            this._y = 0;
            this._width = 1320;
            this._height = 720;
            this.sobEvent = new AppEvent_1.AppEvent(); // события
            console.log('создаем 2д...');
            // начинаем загружать ресы
            this.preloader = new Preloader_1.Preloader(this.initialize2d.bind(this));
        }
        View2d.prototype.initialize2d = function () {
            //Create the renderer
            this.renderer = PIXI.autoDetectRenderer(this._width, this._height);
            //Add the canvas to the HTML document
            document.body.appendChild(this.renderer.view);
            // this.renderer.view.style.position = 'absolute';
            //Create a container object called the `stage`
            this.stage = new PIXI.Container();
            this.resizeFromWindow();
            window.addEventListener("resize", this.resizeFromWindow.bind(this));
            this.sobEvent.on(EventName2d_1.EventName2d.ADDTOSTAGE2D, this.addToStage.bind(this));
            this.update();
            this.sobEvent.emit(EventName2d_1.EventName2d.COMPLETECREATE2D);
        };
        View2d.prototype.addToStage = function (c) {
            this.stage.addChild(c);
        };
        View2d.prototype.resizeFromWindow = function () {
            scaleToWindow(this.renderer.view);
        };
        //Tell the `renderer` to `render` the `stage`
        View2d.prototype.update = function () {
            this.sobEvent.emit(EventName2d_1.EventName2d.UPDATE2D);
            this.renderer.render(this.stage);
            requestAnimationFrame(this.update.bind(this));
        };
        View2d.prototype.resize = function (x, y, width, height) {
            this.renderer.resize(width, height);
        };
        return View2d;
    }());
    exports.View2d = View2d;
    function scaleToWindow(canvas, backgroundColor) {
        backgroundColor = backgroundColor || "#2C3539";
        var scaleX, scaleY, scale, center;
        //1. Scale the canvas to the correct size
        //Figure out the scale amount on each axis
        scaleX = window.innerWidth / canvas.offsetWidth;
        scaleY = window.innerHeight / canvas.offsetHeight;
        //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
        scale = Math.min(scaleX, scaleY);
        canvas.style.transformOrigin = "0 0";
        canvas.style.transform = "scale(" + scale + ")";
        console.log(scaleX);
        //2. Center the canvas.
        //Decide whether to center the canvas vertically or horizontally.
        //Wide canvases should be centered vertically, and
        //square or tall canvases should be centered horizontally
        if (canvas.offsetWidth > canvas.offsetHeight) {
            if (canvas.offsetWidth * scale < window.innerWidth) {
                center = "horizontally";
            }
            else {
                center = "vertically";
            }
        }
        else {
            if (canvas.offsetHeight * scale < window.innerHeight) {
                center = "vertically";
            }
            else {
                center = "horizontally";
            }
        }
        //Center horizontally (for square or tall canvases)
        var margin;
        if (center === "horizontally") {
            margin = (window.innerWidth - canvas.offsetWidth * scale) / 2;
            canvas.style.marginTop = '0';
            canvas.style.marginBottom = '0';
            canvas.style.marginLeft = margin + "px";
            canvas.style.marginRight = margin + "px";
        }
        //Center vertically (for wide canvases)
        if (center === "vertically") {
            margin = (window.innerHeight - canvas.offsetHeight * scale) / 2;
            canvas.style.marginTop = margin + "px";
            canvas.style.marginBottom = margin + "px";
            canvas.style.marginLeft = '0';
            canvas.style.marginRight = '0';
        }
        //3. Remove any padding from the canvas  and body and set the canvas
        //display style to "block"
        canvas.style.paddingLeft = '0';
        canvas.style.paddingRight = '0';
        canvas.style.paddingTop = '0';
        canvas.style.paddingBottom = '0';
        canvas.style.display = "block";
        //4. Set the color of the HTML body background
        document.body.style.backgroundColor = backgroundColor;
        //Fix some quirkiness in scaling for Safari
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("safari") != -1) {
            if (ua.indexOf("chrome") > -1) {
            }
            else {
            }
        }
        //5. Return the `scale` value. This is important, because you'll nee this value
        //for correct hit testing between the pointer and sprites
        return scale;
    }
});
//# sourceMappingURL=View2d.js.map