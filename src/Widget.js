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
    // scene.background = new THREE.Color(0x282c34);  // dark grey
    // White background
    scene.background = new THREE.Color(0xffffff);  // white

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    //const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    // Create a torus
    const radiusTorus = .7;
    const tubeRadius = 0.4;
    const radialSegments = 12;
    const tubularSegments = 24;
    const geometry = new THREE.TorusGeometry(
      radiusTorus, tubeRadius, radialSegments, tubularSegments);

    const cubes = []; // just an array we can use to rotate the cubes

    // Create a basic white material
    // const material = new THREE.MeshBasicMaterial({ color: 0x4F758B, wireframe: true });
    // lighter blue material
    // const material = new THREE.MeshBasicMaterial({ color: 0x7AAED6, wireframe: true });
    // very light blue
    const material = new THREE.MeshBasicMaterial({ color: 0xB3D1E8, wireframe: true });

    // Create cubes
    const cube1 = new THREE.Mesh(geometry, material);
    scene.add(cube1);
    cubes.push(cube1);

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
        const rot = time * 0.3;
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
