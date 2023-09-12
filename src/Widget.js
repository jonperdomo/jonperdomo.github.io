import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// Define the Widget component
const Widget = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const cubes = []; // just an array we can use to rotate the cubes

    // Create a basic green material
    const material1 = new THREE.MeshBasicMaterial({ color: 0x44aa88 });

    // Create a basic blue material
    const material2 = new THREE.MeshBasicMaterial({ color: 0x0007FAE });

    // Create two textured cubes
    const cube1 = new THREE.Mesh(geometry, material1);
    const cube2 = new THREE.Mesh(geometry, material2);
    scene.add(cube1);
    scene.add(cube2);
    cubes.push(cube1);
    cubes.push(cube2);

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time) {
      time *= 0.001; // convert time to seconds

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * 0.1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
      });

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }, []);

  return <canvas ref={canvasRef} />;
};

// Export the Widget component
export default Widget;
