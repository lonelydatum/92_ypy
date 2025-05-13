import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
import {initYPY, ypyScroll} from './ypy_fx.js'
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const READ_COMPOSITE = {
	t1: 2,
	t2: 3
}


const READ_LIVEDEALERS = {
	t1: 2,
	t2: 3
}


const READ_GAMESHOW = {
	t1: 2,
	t2: 3.3
}


const READ_ALL = {
	composite: READ_COMPOSITE,
	gameshow: READ_GAMESHOW,
	livedealers:READ_LIVEDEALERS
}

const read = READ_ALL[universalBanner.name]
console.log(read);


const {w, h} = bannerSize

function logoGO(logoNum){
	const tl = new TimelineMax()
	tl.from([`.logo${logoNum} .logo_bg`, `.logo${logoNum} .logo_olg`], {duration:.7, stagger:.1, scale:0, ease:"back.out"})
	return tl
}

function init({ypy, device}){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	
	

	tl.set(".frame1", {opacity:1})

	tl.add(logoGO(1))


	tl.add(ypy)
	

	tl.add("t1", "+=.2")
	tl.from([".t1"], {duration:.3, y:"+=30", opacity:0}, "t1")
	tl.from([".device"], {duration:.5, opacity:0}, "t1")
	tl.to(".t1", {duration:.3, opacity:0}, `+=${read.t1}`)

	TweenLite.to(".hero_off", {duration:.6, opacity:0, yoyo:true, repeat:11, repeatDelay:.3, ease:"bounce.out"})


	tl.add("t2")
	if(device){
		tl.add(device)	
	}
	
	
	tl.from(".t2", {duration:.3, opacity:0}, "t2")
	tl.to(".t2", {duration:.3, opacity:0}, `+=${read.t2}`)
	
	tl.to([ ".logo1", ".frame1"], {duration:.3, opacity:0} )


	
	tl.set(".frame2", {opacity:1}, "+=.3")

	tl.from(".end_device", {duration:.3, opacity:0})
	tl.from(".end_url", {duration:.3, opacity:0}, "+=.3")
	tl.from(".end_ypy", {duration:.3, opacity:0}, "+=.3")
	tl.from(".end_cta", {duration:.3, opacity:0, y:"+=50", opacity:0}, "+=.3")


	tl.add(logoGO(2))
	return tl
}


 

export { init, olg, bannerSize }