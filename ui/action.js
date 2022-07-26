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
	let testText = `
## Major combos

### Utopia Sprawl + Freed from the Real + Arbor Elf
This combo allows you to create infinite mana: Utopia sprawl enchants a land allowing you to tap it to add mana of any colour to your pool (keep in mind the colour must be chosen when you enchant the land). Arbor Elf allows you to tap it to untap a land allowing you to use the Utopia Sprawl again, now we have 2 additional mana. Then we can enchant Arbor Elf with Freed from the Real which allows you to pay 1 blue mana to untap a creature, if you do this to itself, Arbor Elf, you can create infinite mana.

### Freed from the Real + Presence of Gond
This combo allows you to create infinite elf tokens: By using Freed from the Real you can enchant any creature to be untaped by paying 1 blue mana and presence of gond allows you to tap the card to create a 1/1 elf token.

### Timberwatch Elf + Silhana Ledgewalker
This combo allows you to make an infinitely powerful creature: Timberwatch Elf allows you to add a +x/+x counter onto any creature until the end of turn where x is equal to the number of elf creatures on the battlefield, including tokens. You can then put these counters on a card like Silhana Ledgewalker as it has great defensive abilities.




**Green mana**
 - Elvish Mystic 2
 - Llanowar Elves 2
 - Priest of Titania 2

**Any (Blue) mana**
 - Birchlore Rangers 3

**Life**
 - Essence Warden 2
 - Wellwisher 2

**Aggro**
 - Elvish Vanguard 2
 - Silhana Ledgewalker 3

**Aggro Support**
 - Timberwatch Elf
 - Lys Alana Huntmaster

**Other**
 - Arbor Elf
 - Quirion Ranger
 - Elvish Visionary

  `;

	$('#text').val(testText);
	let parsedMarkdown = marked.parse(testText);
	$('#output').html(parsedMarkdown);

	$('#text').on('input', (event) => {
		let inputText = $('#text').val();
		let parsedMarkdown = marked.parse(inputText);
		$('#output').html(parsedMarkdown);
	});
});

$('#text').scroll(() => {
	const textScrollEl = document.getElementById('text');
	const textScrollElMaxPosition =
		textScrollEl.scrollHeight - textScrollEl.clientHeight;
	const textScrollElCurrentPosition = Math.ceil(textScrollEl.scrollTop);
	const textScrollElFraction =
		textScrollElCurrentPosition / textScrollElMaxPosition;

	const outputScrollEl = document.getElementById('output');
	const outputScrollElMaxPosition =
		outputScrollEl.scrollHeight - outputScrollEl.clientHeight;
	const outputScrollElCurrentPosition = Math.ceil(
		textScrollElFraction * outputScrollElMaxPosition
	);

	$('#output').scrollTop(outputScrollElCurrentPosition);
});
