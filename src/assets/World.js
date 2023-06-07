import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export default class World {
  constructor(el) {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.setZ(5)
    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setPixelRatio( window.devicePixelRatio )
    this.textRenderer = new CSS2DRenderer()
    this.textRenderer.setSize(window.innerWidth, window.innerHeight)
    this.textRenderer.domElement.style.position = 'absolute'
    this.textRenderer.domElement.style.top = '0px'
    document.body.appendChild(this.textRenderer.domElement)
    window.addEventListener('resize', () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.textRenderer.setSize(window.innerWidth, window.innerHeight)
    })
  }
  render() {
    this.renderer.render(this.scene, this.camera)
    this.textRenderer.render(this.scene, this.camera)
  }
}
