// main.js

import * as THREE from '../build/three.module.js';
import { InitScene } from './InitScene.js';

let initScene;

function init() {
    initScene = new InitScene();
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    initScene.animate();
}

window.onload = init;
