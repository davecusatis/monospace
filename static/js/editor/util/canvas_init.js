/**
 * Created by david on 12/13/15.
 */

var canvas = document.getElementById('canvas');
document.body.appendChild(canvas);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 480/320, 0.1, 1000 );



var renderer = new THREE.WebGLRenderer();
renderer.setSize( 480, 320 );
canvas.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var render = function () {
    requestAnimationFrame( render );

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);
};

render();
