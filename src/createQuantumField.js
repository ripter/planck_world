import { Group, BoxGeometry, MeshBasicMaterial, Mesh, Vector3, WireframeGeometry } from 'three';

// All units in Planck
export function createQuantumField(width, height, depth) {
  const fieldGroup = new Group();

  const geometry = new BoxGeometry(0.5, 0.5, 0.5);
  const material = new MeshBasicMaterial( { color: 0xFF851B } );

  for (let x=0; x < width; x++) {
    for (let y=0; y < height; y++) {
      for (let z=0; z < depth; z++) {
        const mesh = new Mesh(geometry, material);
        mesh.position.set(x, y, z);
        fieldGroup.add(mesh);
      }
    }
  }

  return fieldGroup;
}
