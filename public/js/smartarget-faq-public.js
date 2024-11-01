function init_faq (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_faq(hash);
}

function insertJs_faq (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_faq`;
	document.head.appendChild(script);
}

init_faq(smartarget_faq_params.hash);
