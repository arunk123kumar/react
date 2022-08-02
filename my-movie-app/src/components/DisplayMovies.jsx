import React, { useEffect, useState, useMemo } from "react";
import "/DisplayMovies.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
const movieDB = [
  {
    Name: "KGF",
    desc: "Best Movie",
    poster: "https://",
    cast: "Yash",
    genre: "Action",
    language: "Hindi",
  },
];
function DisplayMovies({ flag }) {
  const [movielist, setmovielist] = useState(movieDB);

  const flags = localStorage.getItem("flag");

  const [newMovies, setNewMovies] = useState(
    JSON.parse(localStorage.getItem("data")).length
  );

  let movies;
  useEffect(() => {
    console.log(flag);
  }, [flag]);
  useEffect(() => {
    movies = JSON.parse(localStorage.getItem("data"));
    console.log("asdasd");
  });

  useEffect(() => {
    if (localStorage.getItem("data")) {
      movies = JSON.parse(localStorage.getItem("data"));
      console.log("storage ", movies, movies.length);
      console.log("shab", movielist.length < movies.length);
      const tempMovie = [...movieDB, ...movies];
      console.log("diff", tempMovie);

      setmovielist([...tempMovie]);

      //   if (movielist.length - movies.length !== 1) {
      //     // console.log("update");
      //     setmovielist([...tempMovie]);
      //   }

      //   console.log(tempMovie);
      //   console.log(tempMovie.length);
      //   if (flags) {
      //     console.log("movie lenght", movies.length);
      //     console.log("movielist length", movielist.length);
      //     setmovielist(tempMovie);
      //   }
      //   localStorage.setItem("flag", false);
    }
  }, [flag]);
  console.log("display Movie ", flags);
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={0}>
        {movies.map((movie) => {
          return (
            <div className="movieinfo">
              <div className="movie-items">
                <div className="poster">
                  <img
                    src={`${imgBaseUrl}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>

                <h3 className="movie-title">
                  {movie.original_title
                    ? movie.original_title
                    : movie.original_name}
                </h3>
                <div className="detailsbutton">
                  <Button variant="outlined">Show Details</Button>
                </div>
              </div>
            </div>
          );
        })}
      </Grid>
    </>
  );
}
export default DisplayMovies;
