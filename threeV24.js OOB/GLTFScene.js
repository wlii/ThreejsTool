// GLTFScene.js
import * as THREE from '../build/three.module.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';

class GLTFScene {
    constructor(initScene) {
        this.scene = initScene.scene; // 共享场景
        this.init();
    }

    init() {
        this.loadGLTFModel();
    }

    loadGLTFModel() {
        const loader = new GLTFLoader();
        loader.load('./wli-module/gltf/lingang/6-transformer-1base.glb', (gltf) => {
            this.gltfModel = gltf.scene;
            this.scene.add(this.gltfModel); // 添加到共享场景中
        });
    }

    animate() {
        // 添加GLTFScene特定的动画逻辑
        if (this.gltfModel) {
            // 在这里可以对加载的模型进行动画操作
			this.gltfModel.rotation.y += 0.0001; // 每帧按X轴旋转
        }
    }
}

export { GLTFScene };