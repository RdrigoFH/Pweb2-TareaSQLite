document.getElementById('loadMovies').addEventListener('click', () => {
   fetch('/movies')
       .then(response => response.json())
       
});