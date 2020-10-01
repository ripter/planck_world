import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

import { createQuantumField } from './createQuantumField';



//
// Create the Scene and setup Camera, Rendering
const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// var geometry = new BoxGeometry();
// var material = new MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new Mesh( geometry, material );
// scene.add( cube );


const field = createQuantumField(3, 3, 3);
field.position.x = -1.5;
field.position.y = -1.5;
scene.add(field);


window.scene = scene;

//
// Animate everything!
const animate = function () {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();
