const query = window.location.search;
let id = query.slice(3, 12);
const about_card = document.querySelector(".card-about");
// request get data
const getDatum = async (film) => {
  const link = `https://www.omdbapi.com/?i=${id}&apikey=${KEY}`;
  const request = await fetch(link);
  const data = await request.json();
  updateUI(data);
};
getDatum();
function updateUI(movie) {
  console.log(movie);
  about_card.innerHTML = ``;
  const {
    Title,
    Poster,
    Year,
    Country,
    Genre,
    Director,
    Writer,
    Actors,
    Language,
    Runtime,
    Ratings,
    Plot,
    Type,
    Released,
  } = movie;
  about_card.innerHTML = `
  <img
  class="card-img"
  src=${Poster}
  alt="Movie photo"
  width="530"
  height="685"
  />
          <div class="card-data">
            <h1 class="movie-title">${Title}</h1>
            <hr class="about-line" />
            <h3 class="movie-data">Year: <span class="data">${Year}</span></h3>
            <h3 class="movie-data">Released: <span class="data">${Released}</span></h3>
            <h3 class="movie-data">
            Country:
            <span class="data"
            >${Country}</span
            >
            </h3>
            <h3 class="movie-data">
            Genre:
            <span class="data">${Genre}</span>
            </h3>
            <h3 class="movie-data">
            Director:
            <span class="data">${Director}</span>
            </h3>
            <h3 class="movie-data">
            Writter:
            <span class="data"
            >${Writer}</span
            >
            </h3>
            <h3 class="movie-data">
            Actors:
            <span class="data"
            >${Actors}</span
            >
            </h3>
            <h3 class="movie-data">
            Language:
            <span class="data">${Language}</span>
            </h3>

            <h3 class="movie-data">
              Duration:
              <span class="data">${Runtime}</span>
              </h3>
              <h3 class="movie-data">
              Ratings:
              <span class="data">${Ratings[0].Source} ${Ratings[0].Value}</span>
              </h3>
              <h3 class="movie-data">
              Type:
              <span class="data">${Type}</span>
              </h3>
              <h3 class="movie-data">
              Description:
              <span class="movie-description data"
              >${Plot}</span
              >
              </h3>
              <a href="./index.html" class="link">Back to</a>
              `;
}
