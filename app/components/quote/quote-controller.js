function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
		var template=`<h4>${quote.author}</h4>
		<h3>${quote.quote}</h3>`

		document.getElementById('quote').innerHTML=template
	})
function show(){
	qs.getQuote(qs.getQuote)
}
show()
}

