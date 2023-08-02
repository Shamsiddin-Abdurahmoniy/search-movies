const form = document.getElementById("form");
const movies_list = document.getElementById("movies-list");
const overlay = document.querySelector(".overlay");
// focus
form.film.focus();
// loader function
function loader(state) {
  if (state) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}
// get movie from API
const getMovie = async (movie) => {
  const data = await getData(movie);
  return data;
};
// get input value
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const movie_name = form.film.value.trim().toLowerCase();
  form.reset();
  getMovie(movie_name).then((data) => {
    // console.log(data);
    updateUI(data);
  });
});
// updateUI movies
function updateUI(movies) {
  movies_list.innerHTML = "";
  movies.forEach((movie) => {
    console.log(movie);
    const { Title, Type, Year, Poster, imdbID } = movie;

    movies_list.innerHTML += `
    <li class="movie-item">
    <div class="movie-img">
    <img
    class="poster"
    src=${Poster != "N/A" ? Poster : "./images/png/no-image.png"}
    alt="Image for movie"
    width="250"
    height="325"
              />
            </div>
            <hr class="line" />
            <div class="movie-data">
            <h3 class="movie-data">
            Title: <span class="data">${Title}</span>
            </h3>
            <h3 class="movie-data">
            Year: <span class="data">${Year}</span>
            </h3>
            <h3 class="movie-data">
            Type: <span class="data">${Type}</span>
            </h3>
              <a class='link' href=${
                `./about.html` + `?i=${imdbID}&apikey=${KEY}`
              }>Read more</a>
            </div>
          </li>
    `;
  });
}
