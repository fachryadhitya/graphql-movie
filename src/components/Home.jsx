import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ALL_MOVIES } from "../Services/queries";
import Layout from "./Layout";
function Home() {
  const [movies, setMovies] = useState([]);
  const resultMovies = useQuery(ALL_MOVIES);

  useEffect(() => {
    if (resultMovies) {
      setMovies(resultMovies.data?.movies);
    }
  }, [resultMovies, resultMovies.data]);

  const imageRenderer = (genre) => {
    switch (genre) {
      case "Romantic":
        return "https://wallpapercave.com/wp/wp2597418.jpg";
      case "Action":
        return "https://www.highreshdwallpapers.com/wp-content/uploads/2017/05/High-Action-HD-Wallpaper.jpg";
      case "Thriller":
        return "https://c4.wallpaperflare.com/wallpaper/158/844/878/halloween-horror-thriller-2018-wallpaper-preview.jpg";
      case "Sci-Fi":
        return "https://i.pinimg.com/originals/5b/25/e7/5b25e71433bea4cb4a3172bf54a84a65.jpg";
      default:
        return null;
    }
  };
  return (
    <Layout>
      {resultMovies.loading ? (
        <div>
          <h1>Loading..</h1>
        </div>
      ) : (
        <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto">
          <h1 className="font-sans font-bold text-2xl mb-4">Now Showing</h1>
          <div className="flex flex-wrap gap-4">
            {movies?.map((i) => (
              <div
                key={i.id}
                className="border-2 border-black rounded-md w-full lg:w-48"
              >
                <img
                  src={imageRenderer(i.genre)}
                  alt=""
                  className="max-w-full h-42 lg:h-32"
                />
                <div className="text-left p-4">
                  <Link to={`/movie-details/${i.id}`}>
                    <h1 className="font-sans font-semibold cursor-pointer underline">
                      Title: {i.name}
                    </h1>
                  </Link>
                  <h2>Genre: {i.genre}</h2>
                  <h2>Actor: {i.actor.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;
