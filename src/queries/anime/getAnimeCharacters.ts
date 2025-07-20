import { gql } from "graphql-request";
import { CHARACTER_FRAGMENT } from "../../fragments/character";

export const GET_ANIME_CHARACTERS = gql`
  ${CHARACTER_FRAGMENT}

  query GetAnimeCharacters($id: Int, $page: Int = 1, $perPage: Int = 25) {
    Media(id: $id, type: ANIME) {
      characters(page: $page, perPage: $perPage) {
        pageInfo {
          hasNextPage
        }
        edges {
          role
          node {
            ...CharacterFragment
          }
        }
      }
    }
  }
`;
