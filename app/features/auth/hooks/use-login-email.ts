import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginEmail } from '../api/login-email';
import { queryKeys } from '@/app/shared/lib/query/query-keys';

export function useLoginEmail() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginEmail,
    onSuccess: (data) => {
      if (data.user) {
        queryClient.setQueryData(queryKeys.auth.me, data.user);
      }
    },
  });
}
