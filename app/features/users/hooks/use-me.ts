import { queryKeys } from '@/app/shared/lib/query/query-keys';
import { useQuery } from '@tanstack/react-query';
import { getMe } from '../api/get-me';

export function useMe() {
  return useQuery({
    queryKey: queryKeys.users.me,
    queryFn: getMe,
    retry: 0,
  });
}
