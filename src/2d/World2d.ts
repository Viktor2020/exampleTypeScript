import {AppEvent} from "../AppEvent";
import {EventName2d} from "./EventName2d";
import Sprite = PIXI.Sprite;
import TextureCache = PIXI.utils.TextureCache;
import Container = PIXI.Container;
import Rectangle = PIXI.Rectangle;
var resources = PIXI.loader.resources;


export class World2d {

    public content = new Container();

    private sobEvent: AppEvent = new AppEvent();// события
    private cat: Sprite;
    private rocket: Sprite;


    constructor() {
        console.log('constructor World2d');
        this.sobEvent.on(EventName2d.COMPLETECREATE2D, this.initWorld.bind(this));
    }


    private initWorld() {
        console.log('создание мира 2d');
        this.testcreate();

        this.sobEvent.emit(EventName2d.ADDTOSTAGE2D, this.content);
        this.sobEvent.on(EventName2d.UPDATE2D, this.update.bind(this));
    }

    private nap: boolean = false;
    private dimention = 1;

    public update() {
        this.cat.rotation += 0.01;
        if (this.rocket.x > 300) {
            this.dimention = -1;
            this.rocket.rotation = Math.PI;
        } else if (this.rocket.x < 100) {
            this.rocket.rotation = 0;
            this.dimention = 1;
        }
        this.rocket.x += this.dimention;
    }


    testcreate() {
        //Create the `tileset` sprite from the texture
        var texture = TextureCache["resource/images/tileset.png"];
        //Create a rectangle object that defines the position and
        //size of the sub-image you want to extract from the texture
        var rectangle = new Rectangle(3 * 32, 2 * 32, 32, 32);
        //Tell the texture to use that rectangular section
        // texture.frame = rectangle; //Create the sprite from the texture
        texture.frame = rectangle;
        this.rocket = new Sprite(texture);

        //Position the rocket sprite on the canvas
        this.rocket.position.set(100, 100);
        this.rocket.anchor.set(.5,.5);
        this.content.addChild(this.rocket);

        //Create the `cat` sprite from the texture
        this.cat = new Sprite(resources["resource/images/imgif.gif"].texture);

        this.cat.position.set(50, 50);
        this.cat.scale.set(0.5, 0.5);
        this.cat.anchor.set(0.5, 0.5);
        this.content.addChild(this.cat);

    }
}
