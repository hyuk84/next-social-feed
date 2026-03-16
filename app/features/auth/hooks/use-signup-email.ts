import { useMutation } from '@tanstack/react-query';
import {
  signupEmail,
  SignupEmailRequest,
  SignupEmailResponse,
} from '../api/signup-email';
import { AxiosError } from 'axios';

type ApiErrorResponse = {
  message?: string;
  code?: string;
  details?: unknown;
};

export function useSignupEmail() {
  return useMutation<
    SignupEmailResponse,
    AxiosError<ApiErrorResponse>,
    SignupEmailRequest
  >({
    mutationFn: signupEmail,
  });
}
