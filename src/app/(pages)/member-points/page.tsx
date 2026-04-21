'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface MemberData {
  'Full Name': string;
  'First Name': string;
  'Last Name': string;
  Committee: string;
  Email: string;
  'Graduating Class': string;
  Prefect: string;
  'Total General Points': number;
  'Total Committee Points': number;
  [key: string]: any;
}

export default function MemberPointsDashboard() {
  const router = useRouter();
  const [generalData, setGeneralData] = useState<MemberData | null>(null);
  const [committeeData, setCommitteeData] = useState<MemberData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMemberData = async () => {
      try {
        const email = localStorage.getItem('userEmail');

        if (!email) {
          router.push('/login');
          return;
        }

        // Fetch General data
        const generalRes = await fetch('/api/member/general', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        if (!generalRes.ok) {
          throw new Error('Failed to fetch general data');
        }

        const generalResult = await generalRes.json();

        // Fetch Committee data
        const committeeRes = await fetch('/api/member/committee', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        if (!committeeRes.ok) {
          throw new Error('Failed to fetch committee data');
        }

        const committeeResult = await committeeRes.json();

        setGeneralData(generalResult.data);
        setCommitteeData(committeeResult.data);
        setLoading(false);
      } catch (err) {
        console.error('Error loading member data:', err);
        setError('Failed to load member data');
        setLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      loadMemberData();
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="bg-darkBlue-900 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <p className="text-xl text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !generalData) {
    return (
      <div className="bg-darkBlue-900 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <p className="text-xl text-red-400">{error || 'Failed to load user data'}</p>
            <button
              onClick={() => router.push('/login')}
              className="mt-4 px-6 py-3 bg-gold text-darkBlue-900 rounded-lg font-semibold"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Get general event columns (exclude standard columns)
  const excludeKeys = [
    'Full Name',
    'First Name',
    'Last Name',
    'Committee',
    'Email',
    'Graduating Class',
    'Prefect',
    'Total General Points',
    'id',
    'created_at',
  ];

  const generalEvents = Object.entries(generalData)
    .filter(([key]) => !excludeKeys.includes(key))
    .reduce((acc, [key, value]) => {
      acc[key] = parseInt(String(value)) || 0;
      return acc;
    }, {} as { [key: string]: number });

  // Get committee event columns
  const committeeExcludeKeys = [
    'Full Name',
    'First Name',
    'Last Name',
    'Committee',
    'Email',
    'Graduating Class',
    'Prefect',
    'Total Committee Points',
    'id',
    'created_at',
  ];

  const committeeEvents = committeeData
    ? Object.entries(committeeData)
        .filter(([key]) => !committeeExcludeKeys.includes(key))
        .reduce((acc, [key, value]) => {
          acc[key] = parseInt(String(value)) || 0;
          return acc;
        }, {} as { [key: string]: number })
    : {};

  return (
    <div className="bg-darkBlue-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        {/* Header Section with Logout */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex-1">
            <h1 className="text-6xl font-bold mb-4">
              Welcome, <span className="text-gold">{generalData['First Name']}</span>
            </h1>
            <p className="text-lg text-gray-300">
              <strong>Note: Events may be added before points are inputted. Please allow a week for your points to update. Thank you!</strong>
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap ml-4"
          >
            Logout
          </button>
        </div>

        {/* User Details Section */}
        <div className="bg-gradient-to-br from-darkBlue-800 to-darkBlue-700 rounded-xl border border-gold border-opacity-40 p-8 mb-12">
          <div className="text-center mb-8">
            <p className="text-2xl mb-4">
              <strong>Committee:</strong> <span className="text-gold">{generalData.Committee}</span>
            </p>
          </div>

          {/* Points Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-darkBlue-800 rounded-lg p-6 border border-gold border-opacity-30">
              <p className="text-lg text-gray-300 mb-2">Total General Points</p>
              <p className="text-5xl font-bold text-gold">{generalData['Total General Points'] || 0}</p>
            </div>
            <div className="bg-darkBlue-800 rounded-lg p-6 border border-gold border-opacity-30">
              <p className="text-lg text-gray-300 mb-2">Total Committee Points</p>
              <p className="text-5xl font-bold text-gold">{committeeData?.['Total Committee Points'] || 0}</p>
            </div>
          </div>
        </div>

        {/* General Events Table */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center text-gold">General Events</h2>
          {Object.keys(generalEvents).length > 0 ? (
            <div className="overflow-x-auto rounded-xl border border-gold border-opacity-40">
              <table className="w-full">
                <thead>
                  <tr className="bg-gold bg-opacity-20 border-b border-gold border-opacity-40">
                    <th className="px-6 py-4 text-left font-semibold">Event Name</th>
                    <th className="px-6 py-4 text-right font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(generalEvents).map(([event, points]) => (
                    <tr key={event} className="border-b border-gold border-opacity-20 hover:bg-darkBlue-800 hover:bg-opacity-30 transition-colors">
                      <td className="px-6 py-4">{event}</td>
                      <td className="px-6 py-4 text-right font-semibold text-gold">{points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-400">No general events found</p>
          )}
        </div>

        {/* Committee Events Table */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center text-gold">Committee Events</h2>
          {Object.keys(committeeEvents).length > 0 ? (
            <div className="overflow-x-auto rounded-xl border border-gold border-opacity-40">
              <table className="w-full">
                <thead>
                  <tr className="bg-gold bg-opacity-20 border-b border-gold border-opacity-40">
                    <th className="px-6 py-4 text-left font-semibold">Event Name</th>
                    <th className="px-6 py-4 text-right font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(committeeEvents).map(([event, points]) => (
                    <tr key={event} className="border-b border-gold border-opacity-20 hover:bg-darkBlue-800 hover:bg-opacity-30 transition-colors">
                      <td className="px-6 py-4">{event}</td>
                      <td className="px-6 py-4 text-right font-semibold text-gold">{points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-400">No committee events found</p>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="text-center">
          <Link href="/" className="text-gold hover:text-yellow-400 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
              

