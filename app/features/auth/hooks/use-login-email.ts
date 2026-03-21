import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponseBody } from '@/app/shared/lib/http/http-error';
import { queryKeys } from '@/app/shared/lib/query/query-keys';
import {
  loginEmail,
  LoginEmailRequest,
  LoginEmailResponse,
} from '../api/login-email';

export function useLoginEmail() {
  const queryClient = useQueryClient();

  return useMutation<
    LoginEmailResponse,
    AxiosError<ErrorResponseBody>,
    LoginEmailRequest
  >({
    mutationFn: loginEmail,
    onSuccess: (data) => {
      if (data.user) {
        queryClient.setQueryData(queryKeys.users.me, data.user);
      }
    },
  });
}
