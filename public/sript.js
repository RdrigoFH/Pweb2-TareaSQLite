document.getElementById('loadMovies').addEventListener('click', () => {
   fetch('/movies')
       .then(response => response.json())
       .then(data => {
           const moviesList = document.getElementById('moviesList');
           moviesList.innerHTML = '';
       })
       .catch(error => console.error('Error:', error));
});