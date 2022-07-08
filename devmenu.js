/** @param {NS} ns **/
//alias menu="run devmenu.js"
let getProps = (obj) => Object.entries(obj).find(entry => entry[0].startsWith("__reactProps"))[1].children.props;
let hasPlayer = (obj) => 
{
	try
	{
		return getProps(obj).player ? true : false;
	}
	catch(ex)
	{
		return false;
	}
}

export async function main(ns) {
	let boxes = Array.from(eval("document").querySelectorAll("[class*=MuiBox-root]"));
	let box =  boxes.find(x => hasPlayer(x));

	if(box)
	{
		ns.tprintf("INFO className: \"" + box.className + "\"");

		let props = getProps(box);

		// get a 10% cash bonus
		props.player.money = props.player.money * 1.1;

		//  open dev menu
		props.router.toDevMenu();
	}
}
