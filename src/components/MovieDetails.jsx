import { useLazyQuery } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FIND_MOVIE } from "../Services/queries";
import Layout from "./Layout";

export default function MovieDetails() {
  const params = useParams();
  console.log(params);

  const [getMovie, result] = useLazyQuery(FIND_MOVIE);

  const showMovie = useCallback(
    (id) => {
      getMovie({ variables: { idToSearch: id } });
    },
    [getMovie]
  );

  useEffect(() => {
    showMovie(params.id);
  }, [params, result.data, showMovie]);

  return (
    <Layout>
      {result.loading ? (
        <h1>Loading..</h1>
      ) : (
        <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto">
          <h1 className="font-serif font-bold text-2xl hover:underline">
            Here is your movie details
          </h1>
          <div className="border-2 rounded-lg border-green-primary border-b-8 p-2 border-l-8 mt-6">
            <h2 className="font-sans font-semibold text-xl">
              Movie Title: {result?.data?.movie.name}
            </h2>
            <h2 className="font-sans text-xl">
              Genre: {result?.data?.movie.genre}
            </h2>
            <Link to={`/actor-details/${result?.data?.movie.actor.id}`}>
              <h2 className="text-xl font-sans cursor-pointer underline">
                Actor: {result?.data?.movie.actor.name}
              </h2>
            </Link>
          </div>
        </div>
      )}
    </Layout>
  );
}
