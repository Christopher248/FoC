function hex2bin(){
	var hex = document.HtoBform.hex.value
    var binary = (parseInt(hex, 16).toString(2)).padStart(8, '0')
	document.HtoBform.binary.value = binary
}