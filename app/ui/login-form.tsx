'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="w-full max-w-md space-y-4">


      <div className="rounded-2xl bg-white shadow-lg border border-gray-100 px-8 py-10">


        <h1 className="text-2xl font-semibold text-gray-800">
          Please log in to continue
        </h1>

        <p className="mt-1 text-sm text-gray-500">Authorized hospital staff only</p>

        <div className="mt-6">
          <label className="mb-2 block text-xs font-medium text-gray-700">Email</label>

          <div className="relative">
            <input
              className="peer block w-full rounded-lg border border-gray-200 py-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />

            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-blue-600" />
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-xs font-medium text-gray-700">Password</label>


          <div className="relative">
            <input
              className="peer block w-full rounded-lg border border-gray-200 py-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={12}
            />

            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-blue-600" />
          </div>
        </div>

        {/* HIDDEN CALLBACK */}
        <input type="hidden" name="redirectTo" value={callbackUrl} />

        {/* BUTTON */}
        <Button
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition"
          aria-disabled={isPending}
        >
          {isPending ? 'Logging in...' : 'Log in'}
          <ArrowRightIcon className="ml-auto h-5 w-5 text-white" />
        </Button>

        {/* ERROR */}
        <div
          className="flex h-8 items-center space-x-2 mt-3"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 transition">
          Forgot your password?
        </Link>
      </div>

      {/* FOOTER */}
      <p className="text-center text-xs text-gray-400">
        Secure hospital authentication system
      </p>
    </form>
  );
}