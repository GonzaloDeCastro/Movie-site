const loadMovie = async () => {
  try {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=2ebeba6c8e22651406e52dfb2ffc2491"
    );
    console.log(resp);
    data = await resp.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

loadMovie();
