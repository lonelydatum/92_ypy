import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
import {initYPY, ypyScroll} from './ypy_fx.js'
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});


const {w, h} = bannerSize



function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})

	return tl
}



function olg_ypy(){
	const tl = new TimelineMax()

	tl.add("done")
	tl.add(olg(), "done")
	tl.add(ypyScroll(), "done")
	tl.from([".cta", ".legal"], {opacity:0, duration:.3}, "done+=.7")
	return tl
}


function rotateScale1(data){

	const tl = new TimelineMax()
	const {list, offsetX, offsetY, to} = data
	list.map(a=>{
		const {x, y } = to		
		tl.set(a, {transformOrigin:`${x}px ${y}px`, x:offsetX-x, y:offsetY-y, scale:1, rotate:0})
	})


	
}

function rotateScale2(data){
	const tl = new TimelineMax()
	const {list, offsetX, offsetY, to} = data
	list.map(a=>{
		const {x, y } = to		
		tl.set(a, {transformOrigin:`${x*2}px ${y*2}px`, x:-x+offsetX, y:-y+offsetY, scale:.5, rotate:0})	
	})
	
}

export { init, olg, bannerSize, olg_ypy, rotateScale1, rotateScale2 }