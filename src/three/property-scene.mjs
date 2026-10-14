// Shared geometry, lighting and camera: offline flight and live property use this file.
export const PROPERTY = {
  reference: 'public/images/img10.jpg',
  provisional: true,
  buildings: [
    { id: '01', x: 8, z: -7, width: 12, depth: 19, shape: 'rectangle' },
    { id: '02', x: 1, z: 24, width: 16, depth: 16, shape: 'octagon' },
    { id: 'support', x: -10, z: -31, width: 9, depth: 9, shape: 'octagon' },
  ],
};
export const SKY = '#a9c4ce';
export function cameraPose(aspect, progress = 1, selection = 'overview', vertical = aspect < 1) {
  const referenceAspect = vertical ? 540 / 960 : 1280 / 720;
  const fov = 2 * Math.atan(Math.tan(45 * Math.PI / 360) * Math.min(1, referenceAspect / aspect)) * 180 / Math.PI;
  if (selection !== 'overview') {
    const building = PROPERTY.buildings.find(b => b.id === selection) || PROPERTY.buildings[0];
    return { position: [building.x + (vertical ? 23 : 21), 17, building.z + (vertical ? 31 : 22)], target: [building.x, 2.3, building.z], fov };
  }
  const ease = progress * progress * (3 - 2 * progress);
  const start = vertical ? [82, 145, 185] : [50, 118, 172];
  const end = vertical ? [68, 105, 113] : [48, 76, 82];
  return {
    position: start.map((n, i) => n + (end[i] - n) * ease),
    target: [0, 85 * (1 - ease), 0], fov,
  };
}
export function configureScene(scene, THREE) {
  scene.background = new THREE.Color(SKY);
  scene.fog = new THREE.FogExp2(SKY, .0017);
}
export function configureRenderer(renderer, THREE) {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
}
export function createProperty(THREE) {
  const group = new THREE.Group();
  group.name = 'Recanto dos Quatis — referência aproximada';
  let seed = 2714;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  function texture(base, bark = false) {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 256;
    const ctx = canvas.getContext('2d'); ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 5000; i++) {
      ctx.fillStyle = `rgba(${random() > .5 ? '255,255,235' : '5,28,22'},${.025 + random() * .1})`;
      ctx.fillRect(random() * 256, random() * 256, bark ? 1 : 1 + random() * 4, bark ? 10 + random() * 40 : 1 + random() * 4);
    }
    const result = new THREE.CanvasTexture(canvas); result.colorSpace = THREE.SRGBColorSpace;
    result.wrapS = result.wrapT = THREE.RepeatWrapping; return result;
  }
  const woodMap = texture('#81593e', true), grassMap = texture('#72854e'); grassMap?.repeat.set(28, 32);
  const wood = new THREE.MeshStandardMaterial({ color: '#b88c63', map: woodMap, roughness: .94 });
  const roof = new THREE.MeshStandardMaterial({ color: '#b74931', roughness: .85, side: THREE.DoubleSide });
  const stone = new THREE.MeshStandardMaterial({ color: '#cec6ac', roughness: .95 });
  const glass = new THREE.MeshStandardMaterial({ color: '#274647', metalness: .18, roughness: .3 });
  function box(w, h, d, material, x, y, z, parent = group) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
  }
  const terrainGeo = new THREE.PlaneGeometry(800, 800, 100, 100);
  const terrainPoints = terrainGeo.attributes.position;
  for (let i = 0; i < terrainPoints.count; i++) {
    const x = terrainPoints.getX(i), z = terrainPoints.getY(i);
    const radius=Math.hypot(x,z),rise=Math.max(0,Math.min(1,(radius-85)/110));
    const hills=35+Math.sin(x*.015)*Math.cos(z*.013)*25+Math.sin(x*.027+z*.012)*17;
    terrainPoints.setZ(i, -.2 + Math.sin(x * .09) * Math.cos(z * .07) * .22 + rise*hills);
  }
  terrainGeo.computeVertexNormals();
  const terrain = new THREE.Mesh(terrainGeo, new THREE.MeshStandardMaterial({ color: '#a0ac6e', map: grassMap, roughness: 1 }));
  terrain.rotation.x = -Math.PI / 2; terrain.receiveShadow = true; group.add(terrain);
  function ribbon(points, width, material) {
    const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p[0], .06, p[1])));
    const vertices = [], indices = [], samples = curve.getPoints(70);
    samples.forEach((p, i) => {
      const tangent = curve.getTangent(i / 70), normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize().multiplyScalar(width / 2);
      vertices.push(p.x + normal.x, p.y, p.z + normal.z, p.x - normal.x, p.y, p.z - normal.z);
      if (i < 70) { const j = i * 2; indices.push(j, j + 1, j + 2, j + 1, j + 3, j + 2); }
    });
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geo.setIndex(indices); geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, material); mesh.receiveShadow = true; group.add(mesh); return mesh;
  }
  const water = new THREE.MeshStandardMaterial({ color: '#376e73', metalness: .25, roughness: .26, side: THREE.DoubleSide });
  ribbon([[-23,-75],[-25,-32],[-27,0],[-29,34],[-26,77]], 4.7, water);
  ribbon([[13,0],[12,13],[14,28],[12,40]], 2, water);
  ribbon([[46,-65],[39,-15],[31,20],[23,75]], 4.5, stone);
  ribbon([[5,-4],[1,7],[-2,15],[1,24]], 1.8, stone);
  const circle = new THREE.Mesh(new THREE.CylinderGeometry(3.8,3.8,.14,36),stone); circle.position.set(0,.09,9); circle.receiveShadow = true; group.add(circle);
  box(5.4,.28,2.1,wood,12.5,.32,24);
  const smallGeo = new THREE.CylinderGeometry(.3,.36,.7,10);
  const seats = new THREE.InstancedMesh(smallGeo,wood,8), dummy = new THREE.Object3D();
  for(let i=0;i<8;i++){const a=i/8*Math.PI*2;dummy.position.set(Math.cos(a)*2.7,.5,9+Math.sin(a)*2.7);dummy.updateMatrix();seats.setMatrixAt(i,dummy.matrix)}seats.castShadow=true;group.add(seats);
  for (const building of PROPERTY.buildings) {
    const house = new THREE.Group(); house.name = `building-${building.id}`; house.position.set(building.x, 0, building.z); group.add(house);
    if (building.shape === 'rectangle') {
      box(building.width + 1,.25,building.depth + 1,stone,0,.1,0,house);
      box(building.width,4.2,building.depth,wood,0,2.3,0,house);
      const w = building.width / 2 + .7, d = building.depth / 2 + .8, e = 4.6, ridge = 7.1;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute([-w,e,-d, -w,e,d, 0,ridge,d, -w,e,-d, 0,ridge,d, 0,ridge,-d, w,e,-d, 0,ridge,-d, 0,ridge,d, w,e,-d, 0,ridge,d, w,e,d],3)); geo.computeVertexNormals();
      const roofMesh = new THREE.Mesh(geo,roof); roofMesh.castShadow = true; house.add(roofMesh);
      box(1.7,2.5,.13,glass,-3,2.4,d-.75,house); box(1.7,2.5,.13,glass,3,2.4,d-.75,house);
      box(1.7,3.3,.17,wood,0,1.9,d-.73,house);
      for (const side of [-1,1]) for (const z of [-6,0,6]) box(.12,1.8,1.8,glass,side*(building.width/2+.03),2.7,z,house);
      box(building.width+1,.24,2.8,wood,0,.35,d+.4,house);
      for(const x of [-w,0,w])box(.18,4.2,.18,wood,x,2.5,d+1.7,house);
    } else {
      const radius = building.width / 2;
      const base = new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,.25,8),stone); base.position.y=.1; house.add(base);
      const walls = new THREE.Mesh(new THREE.CylinderGeometry(radius*.88,radius*.88,3.6,8),wood); walls.position.y=2.1;walls.castShadow=true;house.add(walls);
      const top = new THREE.Mesh(new THREE.ConeGeometry(radius+1,3.1,8),roof);top.position.y=5.4;top.rotation.y=Math.PI/8;top.castShadow=true;house.add(top);
      for(let i=0;i<8;i++){const a=i/8*Math.PI*2;const window=box(2.3,1.9,.13,glass,Math.sin(a)*radius*.81,2.3,Math.cos(a)*radius*.81,house);window.rotation.y=a;}
    }
  }
  // Araucaria-inspired silhouettes and soft broadleaf crowns, instanced for reuse.
  const trunkGeo = new THREE.CylinderGeometry(.12,.25,1,9);
  const trunkMat = new THREE.MeshStandardMaterial({color:'#615d43',map:woodMap,roughness:1});
  const crownGeo = new THREE.SphereGeometry(1,12,8);
  const crownMat = new THREE.MeshStandardMaterial({color:'#335c43',roughness:1});
  const trunks = new THREE.InstancedMesh(trunkGeo,trunkMat,260);
  const crowns = new THREE.InstancedMesh(crownGeo,crownMat,780);
  let trees=0, crownCount=0;
  for(let i=0;i<350;i++) {
    const x=(random()-.5)*128,z=(random()-.5)*145;
    if (PROPERTY.buildings.some(b=>Math.abs(x-b.x)<b.width*.7+2 && Math.abs(z-b.z)<b.depth*.6+3) || (Math.abs(x)<5 && z>-6 && z<30) || (x>19 && x<46)) continue;
    if(trees>=260)break;
    const h=7+random()*9;dummy.position.set(x,h/2,z);dummy.scale.set(1,h,1);dummy.rotation.set(0,0,0);dummy.updateMatrix();trunks.setMatrixAt(trees++,dummy.matrix);
    for(let n=0;n<3;n++){dummy.position.set(x+(random()-.5)*1.6,h-1+n*.8,z+(random()-.5)*1.6);dummy.scale.set(2.2+random()*1.4,.65+random()*.7,2.2+random()*1.4);dummy.updateMatrix();crowns.setMatrixAt(crownCount,dummy.matrix);crowns.setColorAt(crownCount++,new THREE.Color().setHSL(.25+random()*.08,.19,.26+random()*.09));}
  }
  trunks.count=trees;crowns.count=crownCount;trunks.castShadow=true;crowns.castShadow=true;group.add(trunks,crowns);
  // The continuous relief around the property gives the flight a natural horizon.
  group.add(new THREE.HemisphereLight('#f5ead6','#476b5c',2.5));
  const sun = new THREE.DirectionalLight('#ffe8bd',3.1);sun.position.set(-55,100,25);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-80;sun.shadow.camera.right=80;sun.shadow.camera.top=90;sun.shadow.camera.bottom=-90;sun.shadow.camera.far=240;sun.shadow.bias=-.001;group.add(sun);
  return group;
}
export function disposeProperty(group) {
  const geometries = new Set(), materials = new Set(), textures = new Set();
  group.traverse(object => { if(object.geometry)geometries.add(object.geometry);if(object.material)for(const material of Array.isArray(object.material)?object.material:[object.material])materials.add(material);if(object.shadow)object.shadow.dispose();if(object.isInstancedMesh)object.dispose(); });
  materials.forEach(material=>{for(const value of Object.values(material))if(value?.isTexture)textures.add(value);material.dispose()});
  textures.forEach(texture=>texture.dispose());geometries.forEach(geometry=>geometry.dispose());
}
