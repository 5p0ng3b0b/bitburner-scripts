/** @param {NS} ns */
// Test script for entering commands via html injection
export 	function injectCommand(commandLine) {
		const terminalInput = document.getElementById("terminal-input");
		terminalInput.value = commandLine;
		const handler = Object.keys(terminalInput)[1];
		terminalInput[handler].onChange({ target: terminalInput });
		terminalInput[handler].onKeyDown({ key: 'Enter', preventDefault: () => null });
	}
export async function main(ns) {
	//Download script, create alias and execute alias
	injectCommand('wget https://raw.githubusercontent.com/5p0ng3b0b/bitburner-scripts/main/autoinfiltrate.js autoinfiltrate.js')
	injectCommand('alias autoinfiltrate=run autoinfiltrate.js')
	injectcommand('autoinfiltrate')
}
