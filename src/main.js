import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, DirectionalLight, AmbientLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { createQuantumField } from './createQuantumField';



//
// Create the Scene and setup Camera, Rendering
const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//
// Setup the user controls.
const controls = new OrbitControls(camera, renderer.domElement);

const field = createQuantumField(3, 3, 3);
field.position.x = -1.5;
field.position.y = -1.5;
scene.add(field);


// lights
let light = new DirectionalLight( 0xffffff );
// let light = new DirectionalLight( 0xff0000 );
light.position.set( 1, 1, 1 );
scene.add( light );
//
// light = new DirectionalLight( 0x002288 );
// light.position.set( - 1, - 1, - 1 );
// scene.add( light );

// light = new AmbientLight( 0xffffff );
// scene.add( light );

window.scene = scene;

//
// Animate everything!
const animate = function () {
  requestAnimationFrame( animate );


  renderer.render( scene, camera );
};

animate();
