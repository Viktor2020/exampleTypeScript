define(["require", "exports", "./Person", "./2d/ControllerView2d", "./AppEvent", "./2d/EventName2d"], function (require, exports, Person_1, ControllerView2d_1, AppEvent_1, EventName2d_1) {
    "use strict";
    function App() {
        console.log('старт приложения');
        // document.body.innerHTML = 'Example';
        console.log(new Person_1.default());
        var controllerView2d = new ControllerView2d_1.ControllerView2d();
        var ev = new AppEvent_1.AppEvent();
        // ev.on('test', function (data) {
        //     console.log(data);
        // });
        ev.emit(EventName2d_1.EventName2d.STARTCREATE2D);
        // console.log(ev.events);
        // console.log('startMain2');
    }
    exports.App = App;
    // console.log('startMain3');
    // bigSob.on('das', function () {
    //
    // });
    // var a = new AppEvent();
    // console.log('lll', a);
    var app = new App();
});
// console.log(app);
// console.log('startMai4');
//
// import Person from "./Person";
//
//
// var scene, camera, renderer;
// var geometry, material, mesh;
//
// init();
// animate();
//
// function init() {
//
//     scene = new THREE.Scene();
//
//     camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
//     camera.position.z = 1000;
//
//     geometry = new THREE.BoxGeometry( 200, 200, 200 );
//     material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
//
//     mesh = new THREE.Mesh( geometry, material );
//     scene.add( mesh );
//
//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize( window.innerWidth, window.innerHeight );
//
//     document.body.appendChild( renderer.domElement );
//
// }
//
// function animate() {
//
//     requestAnimationFrame( animate );
//
//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.02;
//
//     renderer.render( scene, camera );
//
// }
//
//# sourceMappingURL=App.js.map