import {AppEvent} from "../AppEvent";
import {EventName2d} from "./EventName2d";
import {Preloader} from "./Preloader";

// отображение 2д
export class View2d {
    public renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    public stage: PIXI.Container;
    private _x: number = 0;
    private _y: number = 0;
    private _width: number = 1320;
    private _height: number = 720;
    private sobEvent:AppEvent = new AppEvent();// события
    private preloader: Preloader;       // предзагрузчик


    constructor() {
        console.log('создаем 2д...');
        // начинаем загружать ресы
        this.preloader = new Preloader(this.initialize2d.bind(this));
    }

    private initialize2d() {// после загрузки ресурсов создаем 2д
        //Create the renderer
        this.renderer = PIXI.autoDetectRenderer(this._width, this._height);
        //Add the canvas to the HTML document
        document.body.appendChild(this.renderer.view);
        // this.renderer.view.style.position = 'absolute';
        //Create a container object called the `stage`
        this.stage = new PIXI.Container();

        this.resizeFromWindow();
        window.addEventListener("resize", this.resizeFromWindow.bind(this));


        this.sobEvent.on(EventName2d.ADDTOSTAGE2D, this.addToStage.bind(this));

        this.update();
        this.sobEvent.emit(EventName2d.COMPLETECREATE2D);
    }

    public addToStage(c:PIXI.Container) {
        this.stage.addChild(c);
    }


    private resizeFromWindow() {
        scaleToWindow(this.renderer.view);
    }

    //Tell the `renderer` to `render` the `stage`
    public update() {
        this.sobEvent.emit(EventName2d.UPDATE2D);

        this.renderer.render(this.stage);

        requestAnimationFrame(this.update.bind(this));
    }



    public resize(x:number, y:number, width:number, height:number) {

        this.renderer.resize(width, height)
    }
    // getters setters
    // get x(): number {
    //     return this._x;
    // }
    //
    // set x(x: number) {
    //     this._x = x;
    // }
    //
    // get y(): number {
    //     return this._y;
    // }
    //
    // set y(y: number) {
    //     this._y = y;
    // }
    //
    // get width(): number {
    //     return this._width;
    // }
    //
    // set width(width: number) {
    //     this._width = width;
    // }
    //
    // get height(): number {
    //     return this._height;
    // }
    //
    // set height(height: number) {
    //     this._height = height;
    // }

}
function scaleToWindow(canvas: HTMLCanvasElement, backgroundColor?: string) {

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
        } else {
            center = "vertically";
        }
    } else {
        if (canvas.offsetHeight * scale < window.innerHeight) {
            center = "vertically";
        } else {
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
            // Chrome
        } else {
            // Safari
            //canvas.style.maxHeight = "100%";
            //canvas.style.minHeight = "100%";
        }
    }

    //5. Return the `scale` value. This is important, because you'll nee this value
    //for correct hit testing between the pointer and sprites
    return scale;
}