import * as THREE from 'three'

export default function MainView(scene, camera, renderer) {
  let mouseX = 0
  let mouseY = 0
  let material
  let windowHalfX = window.innerWidth / 2
  let windowHalfY = window.innerHeight / 2
  let textureLoader = new THREE.TextureLoader()

  init()
  animate()

  function init() {
    camera.position.z = 500
    scene.fog = new THREE.FogExp2('black', 0.001)

    const geometry = new THREE.BufferGeometry()
    const vertices = []

    for (let i = 0; i < 25000; i++) {
      const x = 6000 * Math.random() - 3000
      const y = 6000 * Math.random() - 3000
      const z = 1500 * Math.random() - 700
      vertices.push(x, y, z)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    material = new THREE.PointsMaterial({
      size: 5,
      sizeAttenuation: true,
      transparent: true,
    })
    textureLoader.load('/src/resources/sprite120.png', (texture) => {
      material.map = texture
      material.needsUpdate = true
    })
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    document.body.addEventListener('pointermove', onPointerMove)
  }

  function onPointerMove(e) {
    mouseX = e.clientX - windowHalfX
    mouseY = e.clientY - windowHalfY
  }

  function animate() {
    requestAnimationFrame(animate)
    camera.position.x += (mouseX - camera.position.x) * 0.03
    camera.position.y += (-mouseY - camera.position.y) * 0.03
    camera.lookAt(scene.position)
  }

}
