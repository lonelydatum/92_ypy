import {READ, rotateSetRetina, rotateDo} from '../../_common/js/variety.js'
import {init, olg_ypy} from '../../_common/js/common.js'

start()


function start(){
	const tl = init()
// translate(-74px, -508px)

	const TRANSFORMORIGIN = {x:777, y:750}
	const rings = [
		{id:".ring1", offsetY:1258, offsetX:703, scale:1},
		{id:".ring2", offsetY:1258, offsetX:703, scale:1},
		{id:".ring3", offsetY:1258, offsetX:703, scale:1},
		{id:".ring4", offsetY:1258, offsetX:703, scale:1},
		{id:".ring5", offsetY:1258, offsetX:703, scale:1},		
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

	// return

	const data = {
		list: [".ypy-1", ".ypy-2", ".ypy-3"],
		offsetY:0, offsetX:0, to:{x:711, y:280}
	}

	rotateSetRetina(data)
	tl.add(rotateDo(120, 30 ))


	


}
