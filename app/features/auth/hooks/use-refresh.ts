import { useMutation, useQueryClient } from '@tanstack/react-query';
import { refresh } from '../api/refresh';
import { queryKeys } from '@/app/shared/lib/query/query-keys';

export function useRefresh() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: refresh,
    onSuccess: (data) => {
      if (data.user) {
        queryClient.setQueryData(queryKeys.auth.me, data.user);
      }
    },
  });
}
