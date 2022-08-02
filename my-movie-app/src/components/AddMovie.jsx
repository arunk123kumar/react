import { React, useEffect, useState } from "react";
function AddMovie({ onChange, flag }) {
  const [movie, setmovie] = useState({});

  // useEffect(() => {
  //    localStorage.setItem("flag", false);
  // }, []);

  const doSubmit = () => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify([movie]));
    } else {
      const allMovies = [...JSON.parse(localStorage.getItem("data")), movie];
      localStorage.setItem("data", JSON.stringify(allMovies));
      console.log(allMovies);
    }

    onChange(true);

    localStorage.setItem("flag", true);

    console.log("Add movie", flag);
    alert("Movie Add successfully");
    // }
  };

  return (
    <>
      <form>
        <fieldset>
          <legend>Add Movie</legend>
          <label htmlFor="name">
            Movie Name
            <input
              type="text"
              onChange={(e) => setmovie({ ...movie, Name: e.target.value })}
              value={movie.Name}
              id="name"
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              onChange={(e) => setmovie({ ...movie, desc: e.target.value })}
              value={movie.num}
              id="description"
              rows={"5"}
            />
          </label>
          <label htmlFor="poster">
            Poster Url
            <input
              type="text"
              onChange={(e) => setmovie({ ...movie, poster: e.target.value })}
              value={movie.poster}
              id="poster"
            />
          </label>
          <label htmlFor="cast">
            cast
            <input
              type="text"
              onChange={(e) => setmovie({ ...movie, cast: e.target.value })}
              value={movie.cast}
              id="cast"
            />
          </label>
          <label htmlFor="genre">
            genre:
            <div id="genre">
              <label htmlFor="Action">
                <input
                  id="Action"
                  type="radio"
                  name="genre"
                  onChange={(e) => setmovie({ ...movie, genre: "Action" })}
                />
                Action
              </label>
              <label htmlFor="Horror">
                <input
                  id="Horror"
                  type="radio"
                  name="genre"
                  onChange={(e) => setmovie({ ...movie, genre: "Horror" })}
                />
                Horror
              </label>
              <label htmlFor="Thriller">
                <input
                  id="Thriller"
                  type="radio"
                  name="genre"
                  onChange={(e) => setmovie({ ...movie, genre: "Thriller" })}
                />
                Horror
              </label>
            </div>
          </label>

          <label htmlFor="language">
            language
            <select
              name="language"
              id="language"
              value={movie.language}
              onChange={(e) => setmovie({ ...movie, language: e.target.value })}
            >
              <option value="opt">Select language</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
            </select>
          </label>
          <button type="button" id="submit" onClick={doSubmit}>
            Add movie
          </button>
          <button type="reset" id="reset" onClick={() => setmovie({})}>
            Reset
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default AddMovie;
