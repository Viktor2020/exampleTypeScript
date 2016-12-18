define(["require", "exports"], function (require, exports) {
    "use strict";
    // загрузчик ресурсов
    var Preloader = (function () {
        function Preloader(fun, loadProgressHandler) {
            // список картинок для загрузки
            this.imagesLink = [
                'resource/images/img.png',
                'resource/images/img1.png',
                'resource/images/imgif.gif',
                'resource/images/tileset.png'
            ];
            console.log('начинаем загружать ресурсы для 2д');
            PIXI.loader.add(this.imagesLink).load(fun).on("progress", loadProgressHandler || Preloader.loadProgressHandler.bind(this));
        }
        Preloader.loadProgressHandler = function (loader, resource) {
            //Display the file `url` currently being loaded
            console.log("loading: " + resource.url);
            //Display the precentage of files currently loaded
            console.log("progress: " + loader.progress + "%");
            //If you gave your files names as the first argument
            //of the `add` method, you can access them like this
            //console.log("loading: " + resource.name);
        };
        return Preloader;
    }());
    exports.Preloader = Preloader;
});
//# sourceMappingURL=Preloader.js.map