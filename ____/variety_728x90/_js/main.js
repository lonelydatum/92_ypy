import {READ, rotateSetRetina, rotateDo} from '../../_common/js/variety.js'
import {init, olg_ypy} from '../../_common/js/common.js'

start()


function start(){
	const tl = init()
// translate(2px, -234px)

	const TRANSFORMORIGIN = {x:495, y:424}
	const rings = [
		{id:".ring1", offsetY:658, offsetX:498, scale:1},
		{id:".ring2", offsetY:658, offsetX:498, scale:1},
		{id:".ring3", offsetY:658, offsetX:498, scale:1},
		{id:".ring4", offsetY:658, offsetX:498, scale:1},
		{id:".ring5", offsetY:658, offsetX:498, scale:1},		
	]

	function transformOrigin(obj){
		// const scale = 2
		const {x, y } = obj.to || TRANSFORMORIGIN
		const offsetX = obj.offsetX || 0 
		const offsetY = obj.offsetY || 0 
		console.log(offsetX - x);
		tl.set(obj.id, {transformOrigin:`${x}px ${y}px`, x:-x+offsetX, y:y-offsetY, scale:1, rotate:0})
	}

	rings.map(a=>transformOrigin(a))

	const data = {
		list: [".ypy-1", ".ypy-2", ".ypy-3"],
		offsetY:0, offsetX:0, to:{x:494, y:90}
	}

	rotateSetRetina(data)
	tl.add(rotateDo(120, 30 ))


	


}
