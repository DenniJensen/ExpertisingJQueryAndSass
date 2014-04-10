var width_questiobox;
var margin_left = 0;
var index = 0;
var loading_status = 100;

var swipe = function swipe() {
	console.log('swipe');
	margin_left = -800;
	if (index < 6) {
		hide_current_question();
		index++;
		set_question_count_in_html();
	} else {
		//TODO handle last question
	}
}

function hide_current_question() {
	var current_question = $('.questionbox').eq(index);
	current_question.css("margin-left", margin_left);
	loading_status += 100;
	$('#loading-status').css("width", loading_status);
}

function set_question_count_in_html() {
	$('#question-count').text(7 - index);
}

function init_slider() {
	var width_questiobox = $('.field-box').width();
	$('#continue').on('click', swipe);
}

$( document ).ready(function() {
	init_slider();
	set_question_count_in_html();
});