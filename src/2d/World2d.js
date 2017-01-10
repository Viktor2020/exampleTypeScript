define(["require", "exports", "../AppEvent", "./EventName2d", "../utill/Keyboard"], function (require, exports, AppEvent_1, EventName2d_1, Keyboard_1) {
    "use strict";
    var Sprite = PIXI.Sprite;
    var ParticleContainer = PIXI.particles.ParticleContainer;
    var resources = PIXI.loader.resources;
    var World2d = (function () {
        function World2d() {
            this.content = new ParticleContainer(15000, {
                position: true,
                rotation: true,
                alpha: false,
                scale: false,
                uvs: false
            });
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
            this.cat.x += this.cat.vx || 0;
            this.cat.y += this.cat.vy || 0;
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
            var id = resources["resource/images/sprites.json"].textures;
            //Create the `tileset` sprite from the texture
            // var texture = TextureCache["resource/images/tileset.png"];
            // //Create a rectangle object that defines the position and
            // //size of the sub-image you want to extract from the texture
            // var rectangle = new Rectangle(3 * 32, 2 * 32, 32, 32);
            // //Tell the texture to use that rectangular section
            // // texture.frame = rectangle; //Create the sprite from the texture
            // texture.frame = rectangle;
            this.rocket = new Sprite(id['6.png']);
            //Position the rocket sprite on the canvas
            this.rocket.position.set(100, 100);
            this.rocket.anchor.set(.5, .5);
            this.content.addChild(this.rocket);
            //Create the `cat` sprite from the texture
            this.cat = new Sprite(id['5.png']);
            this.cat.position.set(50, 50);
            this.cat.scale.set(0.5, 0.5);
            this.cat.anchor.set(0.5, 0.5);
            this.content.addChild(this.cat);
            console.log(resources, id);
            var sprite = new Sprite(id['1.png']);
            this.content.addChild(sprite);
            var sprite1 = new Sprite(id['2.png']);
            sprite1.x = 300;
            this.content.addChild(sprite1);
            this.cat.vx = 0;
            this.cat.vy = 0;
            //Capture the keyboard arrow keys
            var left = Keyboard_1.keyboard(37), up = Keyboard_1.keyboard(38), right = Keyboard_1.keyboard(39), down = Keyboard_1.keyboard(40);
            var cat = this.cat;
            //Left arrow key `press` method
            left.press = function () {
                console.log('left.press');
                //Change the cat's velocity when the key is pressed
                cat.vx = -5;
                cat.vy = 0;
            };
            //Left arrow key `release` method
            left.release = function () {
                console.log('left.release');
                //If the left arrow has been released, and the right arrow isn't down,
                //and the cat isn't moving vertically:
                //Stop the cat
                if (!right.isDown && cat.vy === 0) {
                    cat.vx = 0;
                }
            };
            //Up
            up.press = function () {
                console.log('up.press');
                cat.vy = -5;
                cat.vx = 0;
            };
            up.release = function () {
                console.log('up.release');
                if (!down.isDown && cat.vx === 0) {
                    cat.vy = 0;
                }
            };
            //Right
            right.press = function () {
                console.log('right.press');
                cat.vx = 5;
                cat.vy = 0;
            };
            right.release = function () {
                console.log('right.release');
                if (!left.isDown && cat.vy === 0) {
                    cat.vx = 0;
                }
            };
            //Down
            down.press = function () {
                console.log('down.press');
                cat.vy = 5;
                cat.vx = 0;
            };
            down.release = function () {
                console.log('down.release');
                if (!up.isDown && cat.vx === 0) {
                    cat.vy = 0;
                }
            };
        };
        return World2d;
    }());
    exports.World2d = World2d;
});
//# sourceMappingURL=World2d.js.map