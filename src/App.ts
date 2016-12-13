
// console.log('startMain');
import Person from './Person'
import {ControllerView2d} from './2d/ControllerView2d'


import {AppEvent} from './AppEvent'
import {EventName2d} from "./2d/EventName2d";

export function App() {
    console.log('старт приложения');

    // document.body.innerHTML = 'Example';
    console.log(new Person());

    var controllerView2d = new ControllerView2d();

    let ev = new AppEvent();

    // ev.on('test', function (data) {
    //     console.log(data);
    // });

    ev.emit(EventName2d.STARTCREATE2D);
    // console.log(ev.events);

    // console.log('startMain2');
}
// console.log('startMain3');
// bigSob.on('das', function () {
//
// });
// var a = new AppEvent();
// console.log('lll', a);

var app = new App();
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
