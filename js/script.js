

    var fetchJokeButton = document.getElementById('fetchJoke');
    var jokeList = document.getElementById('jokeList');
  
    fetchJokeButton.addEventListener('click', function() {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(function(data) {
          var jokeItem = document.createElement('li');
          jokeItem.textContent = data.value;
          jokeList.appendChild(jokeItem);
        })
        .catch(function(error) {
          console.error('There was a problem with the fetch operation:', error);
        });
    });
  