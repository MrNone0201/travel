let menuPhone = document.getElementById('menu_Phone');

let a = 0

function openMenu() {
	if (a == 0) {
		menuPhone.style.transition = "1s all"
		menuPhone.style.height = "500px"
		menuPhone.style.opacity = "1"
		menuPhone.style.pointerEvents = "all"

		a = 1
	}else if(a == 1){
		menuPhone.style.transition = "1s all"
		menuPhone.style.height = "0"
		menuPhone.style.opacity = "0"
		menuPhone.style.pointerEvents = "none"		
		
		a = 0
	}	
}

function openSelect() {
	$(".start").hide()
	$(".closeSelect").show()
	$(".selectMenu").css({
		transition:"2s",
		pointerEvents:"all",
		opacity:1,
		height:'50%'
	});
}
function closeSelect() {
	$(".start").show()
	$(".closeSelect").hide()
	$(".selectMenu").css({
		transition:"2s",
		pointerEvents:"none",
		opacity:0,
		height:'0'
	});
}

function openSelectP() {
	$(".startPhone").hide()
	$(".closeSelectPhone").show()
	$(".closeSelectPhone").css({
		zIndex:"9999"
	})
	$(".selectMenuPhone").css({
		transition:"1s",
		pointerEvents:"all",
		opacity:1,
		height:'500px',
		zIndex:"9998"
	});
	$(".selectFormPhone").css({
		pointerEvents:"none",
		pointerEvents:"all",
	})
}
function closeSelectP() {
	$(".startPhone").show()
	$(".closeSelectPhone").hide()
	$(".selectMenuPhone").css({
		transition:"1s",
		opacity:0,
		height:'0'
	});
	$(".selectFormPhone").css({
		pointerEvents:"none",
	})
}

function firstLeft() {
	document.getElementById("photo").scrollLeft -= 400
}
function firstRight() {
	document.getElementById("photo").scrollLeft += 400
}

function seccondLeft() {
	document.getElementById("photoTwo").scrollLeft -= 400
}
function seccondRight() {
	document.getElementById("photoTwo").scrollLeft += 400
}

function thirdLeft() {
	document.getElementById("photoThree").scrollLeft -= 400
}
function thirdRight() {
	document.getElementById("photoThree").scrollLeft += 400
}


	$(".forYerevan").show()

function mapOne () {
	$(".forYerevan").show()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
}

function mapTwo () {
	$(".forYerevan").hide()
	$(".forAragatsotn").show()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
}



function mapThree () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").show()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
}


function mapFour () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").show()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
}




function mapFive () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").show()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
}



function mapSix () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").show()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
}



function mapSeven () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").show()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
}



function mapEight () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").show()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
}




function mapNine () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").show()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
}


function mapTen () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").show()
	$(".forVayocDzor").hide()
}




function mapEleven () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").show()
}




function phonemapOne () {
	$(".forYerevan").show()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}

function phonemapTwo () {
	$(".forYerevan").hide()
	$(".forAragatsotn").show()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}



function phonemapThree () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").show()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}


function phonemapFour () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").show()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}




function phonemapFive () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").show()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}



function phonemapSix () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").show()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}



function phonemapSeven () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").show()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}



function phonemapEight () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").show()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}




function phonemapNine () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").show()
	$(".forTavush").hide()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}


function phonemapTen () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").show()
	$(".forVayocDzor").hide()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}




function phonemapEleven () {
	$(".forYerevan").hide()
	$(".forAragatsotn").hide()
	$(".forArarat").hide()
	$(".forArmavir").hide()
	$(".forGegharkunik").hide()
	$(".forKotayk").hide()
	$(".forLori").hide()
	$(".forShirak").hide()
	$(".forSyunik").hide()
	$(".forTavush").hide()
	$(".forVayocDzor").show()
	$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
}



function placesMenu() {
	if(a == 0){
	$(".placesMenu").css({
		width:"30%",
		transition:"2s",
		opacity:1,
		pointerEvents:"all"
	})
	$(".openPlacesMenu").css({
		left:"30%",
		transition:"2s",
		transform:"rotate(180deg)",
		borderBottomRightRadius:"0",
		borderBottomLeftRadius:"20px",
		borderTopLeftRadius:"20px",
		borderTopRightRadius:"0"
	})
	a = 1
	}else if (a == 1){
		$(".placesMenu").css({
		width:"0%",
		transition:"2s",
		opacity:0,
		pointerEvents:"none"
	})
		$(".openPlacesMenu").css({
		left:"0",
		transition:"2s",
		transform:"rotate(0deg)",
		borderBottomRightRadius:"20px",
		borderBottomLeftRadius:"0",
		borderTopLeftRadius:"0",
		borderTopRightRadius:"20px"

	})
	a = 0
	}
}