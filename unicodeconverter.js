
function Unicode() {
	var html = document.HexToUniform.input.value;
    var txt = document.createElement("textarea");
    txt.innerHTML = "&#x" + html;
    document.HexToUniform.txt.value = txt.innerHTML;
}
