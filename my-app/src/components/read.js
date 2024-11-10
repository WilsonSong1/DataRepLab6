import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  //movies is set as the current state value
  //SetMovies is the setState value
  //useState is set as an empty array
  const [movies, setMovies] = useState([]);

  //Calling useEffect to synchronise API
  useEffect(() => {
    //Adding API link
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
    //Fetching resources from the API
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    //Displaying movies
    <div>
      <h2>This is my Read Component.</h2>
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;