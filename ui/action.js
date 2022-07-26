const send = () => {
	console.log('sent!');
	setTimeout(() => {
		window.api.send('testToServer', { message: 'test' });
	}, 2000);
};

window.api.receive('testFromServer', (data) => {
	console.log(data);
	console.log('testFromServer');
});

$(document).ready(function () {
	$('#text').on('input', (event) => {
		let inputText = $('#text').val();
		let parsedMarkdown = marked.parse(inputText);
		$('#output').html(parsedMarkdown);
	});
});
