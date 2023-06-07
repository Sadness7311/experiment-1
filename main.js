import MainView from "./src/MainView"
import World from "./src/assets/World"
import create3d2dElem from "./src/assets/create3d2dElem"



const world = new World(document.querySelector('.webgl')) 
const { scene, camera, renderer } = world


const h11 = create3d2dElem('h1', "I'm Sadness7311, I'm")
const h12 = create3d2dElem('h1', "a Web Developer.")
h11.position.y = 200
h12.position.y = 50
scene.add(h11, h12)


MainView(scene, camera, renderer)

function render() {
  requestAnimationFrame(render)
  world.render()
}
render()