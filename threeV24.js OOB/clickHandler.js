// InitScene.js
import * as THREE from '../build/three.module.js';
// clickHandler.js
function setupClickHandler(scene, camera, renderer) {
    // 点击事件处理
    document.addEventListener('click', onClick.bind(null, scene, camera, renderer), false);
}

function onClick(scene, camera, renderer, event) {
    // 计算点击位置的归一化设备坐标
    const mouse = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
    };

    // 通过射线检测获取点击的物体
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // 获取射线与场景中的物体相交的数组
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        const object = intersects[0].object;
        // 这里可以根据点击的物体执行相应的操作
        if (object.userData.onClick) {
            object.userData.onClick();
        }
    }
}

export { setupClickHandler };
