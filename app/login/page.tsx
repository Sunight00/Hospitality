'use client';

import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* LEFT SIDE - HOSPITAL BRAND PANEL */}
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Hospital Management System</h1>

          <p className="mt-4 text-blue-100 text-sm leading-relaxed">
            Secure access to patient records, prescriptions, billing,
            inventory, and hospital operations. Built for medical staff only.
          </p>

          <div className="mt-8 text-blue-100 text-xs space-y-1">
            <p>✔ Role-based access control</p>
            <p>✔ Encrypted medical data</p>
            <p>✔ Secure authentication system</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <LoginForm />
      </div>
    </div>
  );
}