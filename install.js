/** @param {NS} ns */
//Install scripts for playing bitburner
export async function main(ns) {
	await ns.wget("https://raw.githubusercontent.com/5p0ng3b0b/bitburner-scripts/main/autoinfiltrate.js", "autoinfiltrate.js");
	await ns.wget("https://raw.githubusercontent.com/5p0ng3b0b/bitburner-scripts/main/devmenu.js", "devmenu.js");
	await ns.wget("https://raw.githubusercontent.com/alainbryden/bitburner-scripts/main/git-pull.js", "git-pull.js");
	await ns.exec("git-pull.js", "home");
}
