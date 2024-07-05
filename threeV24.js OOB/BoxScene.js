// BoxScene.js
import * as THREE from '../build/three.module.js';

class BoxScene {
    constructor(scene) {
        this.scene = scene; // 使用传入的场景参数
        this.setupMesh();
    }

    setupMesh() {
        const texture = new THREE.TextureLoader().load('textures/crate.gif');
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh); // 将网格添加到传入的场景中
    }

    animate() {
        if (this.mesh) {
            this.mesh.rotation.x += 0.01; // 每帧按X轴旋转
        }
        // 添加额外的动画逻辑
        // 这里可以添加BoxScene特定的动画逻辑
    }
}

export { BoxScene };