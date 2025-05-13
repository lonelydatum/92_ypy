import { READ, startBasic} from '../../_common/js/player_support.js'
import {bannerSize, init, olg_ypy, rotateScale1, rotateScale2} from '../../_common/js/common.js'


document.getElementById("legalContent").innerHTML  = `Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games and screens may not appear as shown. Odds vary by game.

Terms and conditions apply.`
start()
function start(){

	
	// 70 100
	const data = {list:[".ring1_1", ".ring1_2", ".ring1_3"], 
	offsetX:180, offsetY:150, to:{x:250, y:250}}

	
	
	rotateScale1(data)
	rotateScale2({list:[".ypy1-1", ".ypy1-2", ".ypy1-3"], offsetX:0, offsetY:0, to:{x:190, y:50}})
	
	const tl = init()
	// return
	const rotate = 180
	tl.add("arcs-in")
	tl.from(".ring1_1", {rotate:rotate, duration:.5}, "arcs-in+=0")
	tl.from(".ring1_2", {rotate:-rotate, duration:.8}, "arcs-in+=0")
	tl.from(".ring1_3", {rotate:rotate, duration:.6}, "arcs-in+=0")
	
	tl.from(".ypy1-1", {opacity:0, rotate:-60, duration:.4}, "arcs-in+=0.3")
	tl.from(".ypy1-2", {opacity:0, rotate:60, duration:.5}, "arcs-in+=.5")
	tl.from(".ypy1-3", {opacity:0, rotate:-60, duration:.5}, "arcs-in+=.3")
	
	
	tl.to([".ypy1-1",".ypy1-2", ".ypy1-3"], {opacity:0, duration:.3}, "+=1")
	
	tl.from(".t1", {y:250, duration:.4}, "shrink")


	
	
	

	tl.to(".t1", {opacity:0, duration:.3}, `+=${READ.t1}`)
	tl.from([".t2", ".brand-logo"], {opacity:0, duration:.3})

	tl.add("end", `+=${READ.t2}`)
	tl.to(".frame1", {y:`-=${bannerSize.h}`, duration:.5}, "end")
	tl.set(".frame2", {opacity:1}, "end")
	tl.from(".frame2", {y:`+=${bannerSize.h}`, duration:.5}, "end")

	tl.from(".url", {opacity:0, duration:.3})
	
	
	
	
	tl.add(olg_ypy(), "-=.3")
	
	
}

