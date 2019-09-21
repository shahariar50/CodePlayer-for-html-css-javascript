let htmlb = false;
let cssb = false;
let jsb = false;
let outputb = false;

$("#htmlcon").show();
$("#outputcon").show();

let colnum = 2;
$(".editor").css("width", "calc(100%/"+colnum+")");

$(".navtogglebtn").click(function(){
	$(this).toggleClass("active");

	let prsdbtn = $(this).attr("id");

	

	switch (prsdbtn) {
		case "htmlbtn":
			if(htmlb == false){
				colnum -= 1;
				$("#htmlcon").hide();
				htmlb = true;
			}
			else {
				colnum += 1;
				$("#htmlcon").show();
				htmlb = false;
			}
			break;
		case "cssbtn":
			if(cssb == false){
				colnum += 1;
				$("#csscon").show();
				cssb = true;
			}
			else {
				colnum -= 1;
				$("#csscon").hide();
				cssb = false;
			}
			break;
		case "jsbtn":
			if(jsb == false){
				colnum += 1;
				$("#jscon").show();
				jsb = true;
			}
			else {
				colnum -= 1;
				$("#jscon").hide();
				jsb = false;
			}
			break;
		case "outputbtn":
			if(outputb == false){
				colnum -= 1;
				$("#outputcon").hide();
				outputb = true;
			}
			else {
				colnum += 1;
				$("#outputcon").show();
				outputb = false;
			}
			break;
		default:
			alert(2);
			break;
	}
	$(".editor").css("width", "calc(100%/"+colnum+")");


});
$("textarea").on('change keyup paste', function(){
	$("iframe").contents().find("html").html($("#htmlPanel").val());
	$("iframe").contents().find("head").html("<style>" + $("#cssPanel").val() + "</style>"/* + '<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>' */+ '<script type="text/javascript" >' + $("#jsPanel").val() + '</script>');
});
