import { useLazyQuery } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { FIND_ACTOR } from "../Services/queries";
import Layout from "./Layout";
export default function ActorDetails() {
  const params = useParams();
  const [getActor, result] = useLazyQuery(FIND_ACTOR);

  const showActor = useCallback(
    (id) => {
      getActor({ variables: { idToSearch: id } });
    },
    [getActor]
  );

  useEffect(() => {
    showActor(params.id);
  }, [params, result.data, showActor]);

  return (
    <Layout>
      {result.loading ? (
        <h1>Loading..</h1>
      ) : (
        <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto">
          <h1 className="font-serif font-bold text-2xl hover:underline">
            Here is your actor details
          </h1>
          <div className="border-2 rounded-lg border-dark-grey-primary border-b-8 p-2 border-l-8 mt-6">
            <h2 className="font-sans font-semibold text-xl">
              Name: {result?.data?.actor.name}
            </h2>
            <h2 className="font-sans text-xl">
              Age: {result?.data?.actor.age}
            </h2>
            <h2 className="text-xl font-sans">
              Featured Movies:{" "}
              {result?.data?.actor.movies.map((i) => (
                <p>{i.name}</p>
              ))}
            </h2>
          </div>
        </div>
      )}
    </Layout>
  );
}
