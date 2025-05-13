import {READ, rotateSetRetina, rotateDo} from '../../_common/js/variety.js'
import {bannerSize, init, olg_ypy, rotateScale1, rotateScale2} from '../../_common/js/common.js'

start()


function start(){
	

	const tl = init()

	const data = {list:[".ring1", ".ring2", ".ring3", ".ring4", ".ring5"], 
	offsetX:125, offsetY:310, to:{x:265, y:310}}	
	rotateScale1(data)


	rotateScale2({list:[".ypy-1", ".ypy-2", ".ypy-3"], offsetX:0, offsetY:0, to:{x:150, y:300}})

	
	tl.add(rotateDo(180, 30 ))

}
