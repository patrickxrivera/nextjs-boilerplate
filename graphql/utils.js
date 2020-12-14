import { request } from 'graphql-request';
import useSWR from 'swr';
import config from '../config';

export const useQuery = (query) => {
  const res = useSWR(query, async (query) =>
    request(config.graphQLEndpoint, query),
  );

  return { ...res, loading: !res.data };
};
