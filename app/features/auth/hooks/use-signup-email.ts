import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  signupEmail,
  SignupEmailRequest,
  SignupEmailResponse,
} from '../api/signup-email';
import { AxiosError } from 'axios';
import { ErrorResponseBody } from '@/app/shared/lib/http/http-error';
import { queryKeys } from '@/app/shared/lib/query/query-keys';

export function useSignupEmail() {
  const queryClient = useQueryClient();

  return useMutation<
    SignupEmailResponse,
    AxiosError<ErrorResponseBody>,
    SignupEmailRequest
  >({
    mutationFn: signupEmail,
    onSuccess: (data) => {
      if (data.user) {
        queryClient.setQueryData(queryKeys.users.me, data.user);
      }
    },
  });
}
