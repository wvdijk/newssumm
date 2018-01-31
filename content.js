/* Newssumm button, by Wieland van Dijk [w.vandijk@nrc.nl], v1.0, Jan 2018 */

/* Injects a new Newssumm button in the editor toolbar at honk.nrc.nl. Uncomment if you prefer this
let ed_toolbar = document.getElementById('ed_toolbar');
let summ_button = document.createElement('input');
summ_button.setAttribute('type', 'button');
summ_button.setAttribute('id', 'qt_content_newssumm');
summ_button.setAttribute('class', 'ed_button button button-small');
summ_button.setAttribute('value', 'NewsSumm');
summ_button.addEventListener('click', makesum);
ed_toolbar.appendChild(summ_button); */

/* Hijacks existing News Summary button. Comment out if you prefer to keep it, see alternative above */
let button = document.getElementById('qt_content_ed_newssummary');
button.addEventListener('click', makesum);

/* Get selected text and turn it into news summary */
function makesum() {
	let textarea = document.getElementById('content');
	let len = textarea.value.length;
	let start = textarea.selectionStart;
	let end = textarea.selectionEnd;
	let sel = textarea.value.substring(start, end);

	/* Regexes to apply lists */
	let items = sel.replace(/([-\*]\s?)(.*)/g, '<li>$2</li>'); // '- foo' or '* foo'-> <li>foo</li>
	let open_list = items.replace(/<li>/, '<ul><li>'); // first <li> -> <ul><li>
	let listed = open_list.replace(/(<\/li>(?=[^<li>]*$))/, '$1</ul>'); // last </li> -> </li></ul>
	let replace = `<aside class="nieuwsfeit-inleiding inline-news-summary">${listed}</aside>`

	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
	return false;
}
