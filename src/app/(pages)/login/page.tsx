'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();

      if (!trimmedUsername || !trimmedPassword) {
        setError('Please enter both username and password');
        setLoading(false);
        return;
      }

      // Call the API route
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: trimmedUsername,
          password: trimmedPassword,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || 'Login failed');
        setLoading(false);
        return;
      }

      // Store minimal session data
      localStorage.setItem('username', result.user.username);
      localStorage.setItem('userId', result.user.id);
      localStorage.setItem('userEmail', result.user.email);

      // Redirect to member points page
      router.push('/member-points');
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-darkBlue-900 text-white min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 pt-0">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300">
              <i>Enter your username and password to access your member points.</i>
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-gradient-to-br from-darkBlue-800 to-darkBlue-700 rounded-2xl border-2 border-gold border-opacity-40 p-8 pt-0 shadow-2xl mb-6">
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">Sign In</h2>

            {error && (
              <div className="bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 rounded-lg p-4 mb-6">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  disabled={loading}
                  autoComplete="username"
                  className="w-full px-4 py-3 rounded-lg bg-darkBlue-900 border border-gold border-opacity-30 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:border-opacity-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  disabled={loading}
                  autoComplete="current-password"
                  className="w-full px-4 py-3 rounded-lg bg-darkBlue-900 border border-gold border-opacity-30 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:border-opacity-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-darkBlue-900 font-bold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>

          {/* Info Text */}
          <div className="bg-darkBlue-800 bg-opacity-50 rounded-lg p-4 border border-gold border-opacity-20">
            <p className="text-sm text-gray-300 text-center">
              <strong>Need help?</strong> Contact us at{' '}
              <Link href="/contact" className="text-gold hover:text-yellow-400 transition-colors">
                contact page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
