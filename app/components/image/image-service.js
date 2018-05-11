function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

//public

	this.getImage = function (callWhenDone) {
		// ^^^^^^^ How do you call this function? I call it thru another function in my controller. So 
		//create this function, and inside of it i will include this path imageService.getImage(and callback
	// draw function.. )
		return $.get(apiUrl, function (res) {
			res = JSON.parse(res)
			console.log('Image Data:', res)
			callWhenDone(res)
		})
	}
}
