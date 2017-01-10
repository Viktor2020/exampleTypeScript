define(["require", "exports", "../AppEvent", "./EventName2d"], function (require, exports, AppEvent_1, EventName2d_1) {
    "use strict";
    var Sprite = PIXI.Sprite;
    var TextureCache = PIXI.utils.TextureCache;
    var Container = PIXI.Container;
    var Rectangle = PIXI.Rectangle;
    var resources = PIXI.loader.resources;
    var World2d = (function () {
        function World2d() {
            this.content = new Container();
            this.sobEvent = new AppEvent_1.AppEvent(); // события
            this.nap = false;
            this.dimention = 1;
            console.log('constructor World2d');
            this.sobEvent.on(EventName2d_1.EventName2d.COMPLETECREATE2D, this.initWorld.bind(this));
        }
        World2d.prototype.initWorld = function () {
            console.log('создание мира 2d');
            this.testcreate();
            this.sobEvent.emit(EventName2d_1.EventName2d.ADDTOSTAGE2D, this.content);
            this.sobEvent.on(EventName2d_1.EventName2d.UPDATE2D, this.update.bind(this));
        };
        World2d.prototype.update = function () {
            this.cat.rotation += 0.01;
            if (this.rocket.x > 300) {
                this.dimention = -1;
                this.rocket.rotation = Math.PI;
            }
            else if (this.rocket.x < 100) {
                this.rocket.rotation = 0;
                this.dimention = 1;
            }
            this.rocket.x += this.dimention;
        };
        World2d.prototype.testcreate = function () {
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
            this.rocket.anchor.set(.5, .5);
            this.content.addChild(this.rocket);
            //Create the `cat` sprite from the texture
            this.cat = new Sprite(resources["resource/images/imgif.gif"].texture);
            this.cat.position.set(50, 50);
            this.cat.scale.set(0.5, 0.5);
            this.cat.anchor.set(0.5, 0.5);
            this.content.addChild(this.cat);
            var id = resources["resource/images/sprites.json"].textures;
            console.log(resources, id);
            var sprite = new Sprite(id['1.png']);
            this.content.addChild(sprite);
            var sprite1 = new Sprite(id['2.png']);
            sprite1.x = 300;
            this.content.addChild(sprite1);
            var sprite2 = new Sprite(id['2.png']);
            sprite2.x = 300;
            sprite2.y = 300;
            this.content.addChild(sprite2);
        };
        return World2d;
    }());
    exports.World2d = World2d;
});
//# sourceMappingURL=World2d.js.map