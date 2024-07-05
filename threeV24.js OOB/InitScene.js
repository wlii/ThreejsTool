// InitScene.js
import * as THREE from '../build/three.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { BoxScene } from './BoxScene.js'; // 引入BoxScene
import { GLTFScene } from './GLTFScene.js'; // 引入GLTFScene
import { setupClickHandler } from './clickHandler.js'; // 引入点击事件处理函数

class InitScene {
    constructor() {
        this.scene = new THREE.Scene();
        this.objects = [];
        this.setupCamera();
        this.setupRenderer();
        this.setupControls();
        this.setupLights();
        this.setupHelper();
        this.setupEventListeners();
        this.setupEventListeners();

        // 创建并添加单个BoxScene实例，传递InitScene的场景
        this.boxScene = new BoxScene(this.scene);

        // 创建并添加GLTFScene实例，传递InitScene的实例
        this.gltfScene = new GLTFScene(this);

        // 添加点击事件处理
        setupClickHandler(this.scene, this.camera, this.renderer);
    }

    addObject(object) {
        this.objects.push(object);
        this.scene.add(object);
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.z = 30;
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    setupControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.screenSpacePanning = false;
        this.controls.maxPolarAngle = Math.PI / 2;
    }

    setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add(ambientLight);
    }

    setupHelper() {
        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.onWindowResize());
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.boxScene.animate(); // 调用BoxScene的animate方法
        this.gltfScene.animate(); // 如果GLTFScene有动画逻辑，也可以调用其animate方法
        this.renderer.render(this.scene, this.camera);
    }
}

export { InitScene };
