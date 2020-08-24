$(document).ready(function () {
	$('.form-modal-button').on("click", function () {
		$('.modal').show();
	});
	$('.modal-dialog__close').on("click", function () {
		$('.modal').hide();
	});
});

$(document).ready(function () {
	$('#modal-form').validate({
		rules: {
			username: "required",
			email: {
				required: true,
				email: true
			},
			message: "required"
		},
		messages: {
			username: "Укажите имя!",
			email: "Введите почтовый адрес!",
			message: "Укажите примерные параметры груза!"
		}
	});
});