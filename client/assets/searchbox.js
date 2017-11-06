$(document).ready(function () {
	$("#secondSearch").hide();
	$("#thirdSearch").hide();
});

$('#firstSearch').keydown(function (event) {
	if (event.keyCode != 8) {
	$("#secondSearch").show();
	}
});

$('#secondSearch').keydown(function (event) {
	if (event.keyCode != 8) {
	$("#thirdSearch").show();
	}
});

$('#firstSearch').keyup(function (event) {
	hideSecond();
});

$('#secondSearch').keyup(function (event) {
	hideThird();
});

function hideSecond() {
	if($('#firstSearch').val().length == 0) {
		$("#secondSearch").hide();
	}
}

function hideThird() {
	if($('#secondSearch').val().length == 0) {
		$("#thirdSearch").hide();
	}
}


