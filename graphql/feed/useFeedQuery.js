import { useQuery } from '../utils';

const feedQuery = `{
  feed {
      title
      content
      author {
          name
      }
  }
}`;

export const useFeedQuery = () => useQuery(feedQuery);
