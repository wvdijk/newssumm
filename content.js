/* Redirect button, by Wieland van Dijk [w.vandijk@nrc.nl], v1.0, July 2017 */

/* Injects a redirect button in the editor toolbar at honk.nrc.nl */
var ed_toolbar = document.getElementById('ed_toolbar');
var redir_button = document.createElement('input');
redir_button.setAttribute('type', 'button');
redir_button.setAttribute('id', 'qt_content_redir');
redir_button.setAttribute('class', 'ed_button button button-small');
redir_button.setAttribute('value', 'Redirect');
redir_button.addEventListener('click', redirect);
ed_toolbar.appendChild(redir_button);

/* Prompt for target of redirection, and replace article body with appropriate redirect code */
function redirect() {
	var url = prompt('Waar moet dit artikel naar doorverwijzen?');
	if (url) {
		var code = '<script>location.replace(\'' + url + '\')\; document.body.style.visibility = \'hidden\'\; </script><noscript>Dit artikel is te vinden op ' + '<a href=\"' + url + '\">' + url + '</a></noscript>';
		var content = document.getElementById('content');
		content.innerText = code;
	}
}
