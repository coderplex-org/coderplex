import { useQuery as _useQuery } from '@apollo/react-hooks';

const useQuery = query => _useQuery(query, { ssr: false });

export default useQuery;
