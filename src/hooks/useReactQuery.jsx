import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../config/axios.config';

const useReactQuery = ({ queryKey, url, config }) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosInstance.get(url, config);
      return data;
    },
  });
};

export default useReactQuery;
