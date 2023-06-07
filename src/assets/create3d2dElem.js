import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
export default function create3d2dElem(tag, text, className = 'empty') {
    const tagElem = document.createElement(tag)
    tagElem.textContent = text
    tagElem.className = className
    const dElem = new CSS2DObject(tagElem)
    return dElem

}