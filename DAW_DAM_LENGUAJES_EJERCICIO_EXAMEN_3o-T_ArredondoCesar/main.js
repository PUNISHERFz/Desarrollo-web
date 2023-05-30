window.addEventListener('load', function() {
	const dogBtn = document.getElementById('dog_btn');
	const dogResult = document.getElementById('dog_result');
  
	dogBtn.addEventListener('click', function() {
	  fetch('https://api.thedogapi.com/v1/images/search')
		.then(response => response.json())
		.then(data => {
		  const imageUrl = data[0].url;
		  dogResult.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
		  dogResult.classList.add('slide-top');
		})
		.catch(error => console.error(error));
	});
  });
  