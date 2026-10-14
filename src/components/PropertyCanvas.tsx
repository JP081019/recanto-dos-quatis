'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useMemo, useRef } from 'react';
import { cameraPose, configureRenderer, configureScene, createProperty, disposeProperty, PROPERTY } from '@/three/property-scene.mjs';
type Selection = 'overview' | '01' | '02';
type Props = { selection: Selection; reduced: boolean; mobile: boolean; onReady: () => void; onFailure: () => void; onMarkers: (markers: { id: string; x: number; y: number }[]) => void };
function Model({ selection, reduced, mobile, onReady, onFailure, onMarkers }: Props) {
  const { camera, scene, gl, size, invalidate } = useThree();
  const model = useMemo(() => createProperty(THREE), []);
  const ready = useRef(false);
  const progress = useRef(1);
  const start = useRef(new THREE.Vector3());
  const currentTarget = useRef(new THREE.Vector3());
  const startTarget = useRef(new THREE.Vector3());
  const desired = useMemo(() => cameraPose(size.width / size.height, 1, selection, mobile), [selection, mobile, size.width, size.height]);
  useEffect(() => {
    configureScene(scene, THREE); configureRenderer(gl, THREE);
    gl.domElement.addEventListener('webglcontextlost',onFailure);
    const pose = cameraPose(size.width / size.height, 1, 'overview', mobile);
    camera.position.set(...pose.position as [number,number,number]); currentTarget.current.set(...pose.target as [number,number,number]);
    camera.lookAt(currentTarget.current); invalidate();
    return () => { gl.domElement.removeEventListener('webglcontextlost',onFailure);disposeProperty(model); };
    // Scene lifetime is independent from the selected building.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, scene, gl, camera, invalidate, onFailure]);
  useEffect(() => {
    start.current.copy(camera.position);startTarget.current.copy(currentTarget.current);
    progress.current = reduced ? 1 : 0;
    (camera as THREE.PerspectiveCamera).fov = desired.fov;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix(); invalidate();
  }, [selection, desired, reduced, camera, invalidate]);
  useFrame((_, delta) => {
    progress.current = Math.min(1, progress.current + delta / 1.1);
    const ease = 1 - Math.pow(1 - progress.current, 3);
    const position = new THREE.Vector3(...desired.position as [number,number,number]);
    const target = new THREE.Vector3(...desired.target as [number,number,number]);
    camera.position.lerpVectors(start.current, position, ease);
    currentTarget.current.lerpVectors(startTarget.current, target, ease); camera.lookAt(currentTarget.current); camera.updateMatrixWorld();
    onMarkers(PROPERTY.buildings.filter(b=>b.id !== 'support').map(b=>{
      const projected=new THREE.Vector3(b.x,8,b.z).project(camera);
      return {id:b.id,x:(projected.x*.5+.5)*size.width,y:(-.5*projected.y+.5)*size.height};
    }));
    gl.domElement.dataset.cameraPosition=camera.position.toArray().map(n=>n.toFixed(3)).join(',');
    gl.domElement.dataset.selection=selection;
    gl.domElement.dataset.cameraSettled=String(progress.current===1);
    if(!ready.current){ready.current=true;onReady();gl.shadowMap.needsUpdate=true;gl.shadowMap.autoUpdate=false;}
    if(progress.current<1)invalidate();
  });
  return <primitive object={model} />;
}
export default function PropertyCanvas(props: Props) {
  return <Canvas frameloop="demand" dpr={[1,1.5]} shadows camera={{fov:45,near:.1,far:1500}} gl={{antialias:true,alpha:false}}><Model {...props} /></Canvas>;
}
