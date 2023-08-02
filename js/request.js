const KEY = "6df3c53a";
// request get data
const getData = async (film) => {
  const link = `https://www.omdbapi.com/?s=${film}&apikey=${KEY}`;
  loader(true);
  const request = await fetch(link);
  const data = await request.json();
  loader(false);
  return data.Search;
};
