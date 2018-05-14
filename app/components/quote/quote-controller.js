function QuoteController() {

	var qs = new QuoteService()

	qs.getQuote((quote) => {
		var template = `<h4>${quote.author}</h4>
	<h3>${quote.quote}</h3>`

		document.getElementById('quote').innerHTML = template
	})
}

