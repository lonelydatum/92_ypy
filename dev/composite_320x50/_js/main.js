import { READ, startBasic} from '../../_common/js/ypy_arcade.js'
import {bannerSize, init, olg_ypy, rotateScale1, rotateScale2} from '../../_common/js/common.js'



const ypy = [
	{x:-132, y:-443, rotate:-4},
	{x:-209, y:-463, rotate:9},
	{x:-172, y:-499, rotate:10}
]
startBasic({ypy})



document.getElementById("legalContent").innerHTML = `
Must be 19 years of age or older and a resident of Ontario, located in the province to play online 
casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.
`
