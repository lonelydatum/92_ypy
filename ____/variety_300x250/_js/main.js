import {READ, rotateDo} from '../../_common/js/variety.js'
import {init,rotateScale2, olg_ypy} from '../../_common/js/common.js'

start()


function start(){
	const tl = init()


	const data = {
		list: [".ypy-1", ".ypy-2", ".ypy-3", ".ring1", ".ring2", ".ring3", ".ring4", ".ring5"],
		offsetY:-22, offsetX:0, to:{x:158, y:154}
	}

	rotateScale2(data)



	tl.add(rotateDo(180, 120 ))


	
	
	

	
	

	


}