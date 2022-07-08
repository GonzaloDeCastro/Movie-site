const loadMovie = async () => {
  try {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2ebeba6c8e22651406e52dfb2ffc2491"
    );
    console.log(resp);
    if (resp.status === 200) {
      const data = await resp.json();
      let movies = "";
      data.results.map((movie) => {
        movies += `
          <div class="movie">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
            <h3 class="title">${movie.title}</h3>
          </div>
        `;
      });

      document.getElementById("container").innerHTML = movies;
    } else if (resp.status === 401) {
      console.log("Error URL API");
    } else if (resp.status === 404) {
      console.log("Movie not found");
    } else {
      console.log("Error 500");
    }
  } catch (error) {
    console.log(error);
  }
};

loadMovie();
