'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface UserData {
  firstName: string;
  lastName: string;
  committee: string;
  totalGeneralPoints: number;
  totalCommitteePoints: number;
  generalEvents: { [key: string]: number };
  committeeEvents: { [key: string]: number };
}

export default function MemberPointsDashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserData = () => {
      try {
        const storedData = localStorage.getItem('userData');
        
        if (!storedData) {
          router.push('/login');
          return;
        }

        const raw = JSON.parse(storedData);
        
        // Map the data structure
        const generalEvents: { [key: string]: number } = {};
        const excludeKeys = ['First Name', 'Last Name', 'Committee', 'Email', 'Graduating Class', 'Prefect', 'Total General Points', 'Total Committee Points'];
        
        Object.entries(raw).forEach(([key, value]) => {
          if (!excludeKeys.includes(key)) {
            generalEvents[key] = parseInt(String(value)) || 0;
          }
        });

        const mappedData: UserData = {
          firstName: raw['First Name'] || '',
          lastName: raw['Last Name'] || '',
          committee: raw['Committee'] || '',
          totalGeneralPoints: raw['Total General Points'] || 0,
          totalCommitteePoints: raw['Total Committee Points'] || 0,
          generalEvents,
          committeeEvents: {},
        };

        setUserData(mappedData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load user data');
        console.error(err);
        setLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      loadUserData();
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
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

  if (error || !userData) {
    return (
      <div className="bg-darkBlue-900 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <p className="text-xl text-red-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const totalGeneralPoints = Object.values(userData.generalEvents).reduce((sum, val) => sum + val, 0);

  return (
    <div className="bg-darkBlue-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        {/* Header Section with Logout */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex-1">
            <h1 className="text-6xl font-bold mb-4">
              Welcome, <span className="text-gold">{userData.firstName}</span>
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
              <strong>Committee:</strong> <span className="text-gold">{userData.committee}</span>
            </p>
          </div>

          {/* Points Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-darkBlue-800 rounded-lg p-6 border border-gold border-opacity-30">
              <p className="text-lg text-gray-300 mb-2">Total General Points</p>
              <p className="text-5xl font-bold text-gold">{totalGeneralPoints}</p>
            </div>
            <div className="bg-darkBlue-800 rounded-lg p-6 border border-gold border-opacity-30">
              <p className="text-lg text-gray-300 mb-2">Total Committee Points</p>
              <p className="text-5xl font-bold text-gold">{userData.totalCommitteePoints}</p>
            </div>
          </div>
        </div>

        {/* General Events Table */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center text-gold">General Events</h2>
          <div className="overflow-x-auto rounded-xl border border-gold border-opacity-40">
            <table className="w-full">
              <thead>
                <tr className="bg-gold bg-opacity-20 border-b border-gold border-opacity-40">
                  <th className="px-6 py-4 text-left font-semibold">Event Name</th>
                  <th className="px-6 py-4 text-right font-semibold">Points Earned</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(userData.generalEvents).length > 0 ? (
                  Object.entries(userData.generalEvents).map(([eventName, points], index) => (
                    <tr
                      key={index}
                      className="border-b border-gold border-opacity-20 hover:bg-darkBlue-800 hover:bg-opacity-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-gray-200">{eventName}</td>
                      <td className="px-6 py-4 text-right text-gold font-semibold">{points}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="px-6 py-8 text-center text-gray-400">
                      No general events found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Committee Events Table */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center text-gold">Committee Events</h2>
          <div className="overflow-x-auto rounded-xl border border-gold border-opacity-40">
            <table className="w-full">
              <thead>
                <tr className="bg-gold bg-opacity-20 border-b border-gold border-opacity-40">
                  <th className="px-6 py-4 text-left font-semibold">Event Name</th>
                  <th className="px-6 py-4 text-right font-semibold">Points Earned</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(userData.committeeEvents).length > 0 ? (
                  Object.entries(userData.committeeEvents).map(([eventName, points], index) => (
                    <tr
                      key={index}
                      className="border-b border-gold border-opacity-20 hover:bg-darkBlue-800 hover:bg-opacity-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-gray-200">{eventName}</td>
                      <td className="px-6 py-4 text-right text-gold font-semibold">{points}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="px-6 py-8 text-center text-gray-400">
                      No committee events found. Integration coming soon!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
