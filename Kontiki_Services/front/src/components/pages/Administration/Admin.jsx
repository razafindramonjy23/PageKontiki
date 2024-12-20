import React, { useState, useEffect } from 'react';
import { Calendar, Users, CheckCircle, XCircle, Clock, BarChart } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCandidates: 0,
    pendingInterviews: 0,
    completedInterviews: 0,
    averageScore: 0
  });
  const [candidates, setCandidates] = useState([]);
  const [selectedTab, setSelectedTab] = useState('upcoming');

  useEffect(() => {
    // Fetch dashboard data
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    // Implement API calls here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">Tableau de Bord EntretienDev</h1>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Users className="h-10 w-10 text-blue-900" />
              <div className="ml-4">
                <p className="text-gray-500">Candidats Total</p>
                <p className="text-2xl font-bold text-blue-900">{stats.totalCandidates}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Clock className="h-10 w-10 text-yellow-400" />
              <div className="ml-4">
                <p className="text-gray-500">Entretiens en attente</p>
                <p className="text-2xl font-bold text-blue-900">{stats.pendingInterviews}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <div className="ml-4">
                <p className="text-gray-500">Entretiens complétés</p>
                <p className="text-2xl font-bold text-blue-900">{stats.completedInterviews}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <BarChart className="h-10 w-10 text-blue-600" />
              <div className="ml-4">
                <p className="text-gray-500">Score moyen</p>
                <p className="text-2xl font-bold text-blue-900">{stats.averageScore}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setSelectedTab('upcoming')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'upcoming'
                    ? 'border-yellow-400 text-blue-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Prochains entretiens
              </button>
              <button
                onClick={() => setSelectedTab('completed')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'completed'
                    ? 'border-yellow-400 text-blue-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Entretiens terminés
              </button>
              <button
                onClick={() => setSelectedTab('candidates')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'candidates'
                    ? 'border-yellow-400 text-blue-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Liste des candidats
              </button>
            </nav>
          </div>

          {/* Table */}
          <div className="mt-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Candidat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {candidates.map((candidate) => (
                    <tr key={candidate.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {candidate.name}
                            </div>
                            <div className="text-sm text-gray-500">{candidate.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{candidate.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{candidate.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          candidate.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {candidate.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Voir détails
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;