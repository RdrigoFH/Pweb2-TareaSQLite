document.getElementById('loadMovies').addEventListener('click', () => {
   fetch('/movies')
       .then(response => response.json())
       .then(data => {
           const moviesList = document.getElementById('moviesList');
           moviesList.innerHTML = '';
           data.data.forEach(movie => {
               const li = document.createElement('li');
               li.textContent = `${movie.MovieID}: ${movie.Title} (${movie.Year}) - Score: ${movie.Score}, Votes: ${movie.Votes}`;
               moviesList.appendChild(li);
           });
       })
       .catch(error => console.error('Error:', error));
});