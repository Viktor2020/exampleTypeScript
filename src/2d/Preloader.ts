
// загрузчик ресурсов
export class Preloader {

    // список картинок для загрузки
    public imagesLink:string[] = [
        'resource/images/img.png',
        'resource/images/img1.png',
        'resource/images/imgif.gif',
        'resource/images/sprites.json',
        'resource/images/sprites.png',
        'resource/images/tileset.png'
    ];

    constructor(fun:()=>void, loadProgressHandler?:(loader, resource)=>void) {
        console.log('начинаем загружать ресурсы для 2д');
        PIXI.loader.add(this.imagesLink).load(fun).on("progress", loadProgressHandler||Preloader.loadProgressHandler.bind(this));
    }

    private static loadProgressHandler(loader, resource) {
        //Display the file `url` currently being loaded
        console.log("loading: " + resource.url);
        //Display the precentage of files currently loaded
        console.log("progress: " + loader.progress + "%");
        //If you gave your files names as the first argument
        //of the `add` method, you can access them like this
        //console.log("loading: " + resource.name);
    }

}