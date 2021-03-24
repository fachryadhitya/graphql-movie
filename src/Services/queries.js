import { gql } from "@apollo/client";

export const ALL_MOVIES = gql`
  {
    movies {
      id
      name
      genre
      actor {
        id
        name
      }
    }
  }
`;

export const ALL_ACTORS = gql`
  {
    actors {
      id
      name
      age
      movies {
        id
        name
        genre
      }
    }
  }
`;

export const FIND_MOVIE = gql`
  query findMovieById($idToSearch: ID!) {
    movie(id: $idToSearch) {
      id
      name
      genre
      actor {
        id
        name
      }
    }
  }
`;

export const FIND_ACTOR = gql`
  query findActorById($idToSearch: ID!) {
    actor(id: $idToSearch) {
      name
      age
      movies {
        name
      }
    }
  }
`;
