import { z } from 'zod';

export const signupSchema = z
  .object({
    email: z.email('Invalid email format'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    userName: z
      .string()
      .min(2, 'Username must be at least 2 characters long')
      .max(20, 'Username must be no more than 20 characters long')
      .regex(
        /^[a-zA-Z0-9_]+$/,
        'User ID can only contain letters, numbers, and underscores',
      ),
    displayName: z
      .string()
      .min(1, 'Please enter a display name')
      .max(20, 'Display name must be no more than 20 characters long'),
    terms: z.boolean().refine((value) => value === true, {
      message: 'You must agree to the Terms of Service and Privacy Policy',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type SignFormValues = z.infer<typeof signupSchema>;
