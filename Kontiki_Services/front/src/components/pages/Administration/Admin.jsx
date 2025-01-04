import React, { useState, useEffect } from 'react';
import { Calendar, Users, CheckCircle, XCircle, Clock, BarChart } from 'lucide-react';
import axios from 'axios';

const DEPARTMENTS = {
  IT: 'Développeurs',
  HR: 'Ressources Humaines',
  CALL: 'Commercial',
  COMPTA: 'Comptabilité',
  AM: 'Affiliate Manager',
  RD: 'Responsable Deliverability',
  TM: 'Trafic Manager'
};

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCandidates: 0,
    pendingInterviews: 0,
    completedInterviews: 0,
    averageScore: 0
  });
  const [candidates, setCandidates] = useState([]);
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [interviewsResponse, contactsResponse] = await Promise.all([
        axios.get('http://localhost:8000/api/testDev/'),
        axios.get('http://localhost:8000/api/contact/')
      ]);

      const interviews = interviewsResponse.data;
      const contacts = contactsResponse.data;

      setStats({
        totalCandidates: contacts.length,
        pendingInterviews: interviews.filter(i => i.status === 'pending').length,
        completedInterviews: interviews.filter(i => i.status === 'completed').length,
        averageScore: calculateAverageScore(interviews)
      });

      setCandidates(formatCandidatesData(interviews, contacts));
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const calculateAverageScore = (interviews) => {
    const completed = interviews.filter(i => i.status === 'completed');
    return completed.length ? Math.round(completed.reduce((sum, i) => sum + (i.score || 0), 0) / completed.length) : 0;
  };

  const formatCandidatesData = (interviews, contacts) => {
    return interviews.map(interview => ({
      id: interview.id,
      name: contacts.find(c => c.id === interview.contact_id)?.name || 'N/A',
      email: contacts.find(c => c.id === interview.contact_id)?.email || 'N/A',
      date: interview.date,
      department: interview.department,
      type: interview.type,
      status: interview.status
    }));
  };

  const getFilteredCandidates = () => {
    let filtered = candidates;
    
    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(c => c.department === selectedDepartment);
    }

    switch (selectedTab) {
      case 'upcoming':
        return filtered.filter(c => c.status === 'pending');
      case 'completed':
        return filtered.filter(c => c.status === 'completed');
      case 'candidates':
        return filtered;
      default:
        return filtered;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="text-white bg-blue-900 shadow-lg">
        <div className="container px-6 py-4 mx-auto">
          <h1 className="text-2xl font-bold">Tableau de Bord EntretienDev</h1>
        </div>
      </header>

      <div className="container px-6 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <Users className="w-10 h-10 text-blue-900" />
              <div className="ml-4">
                <p className="text-gray-500">Candidats Total</p>
                <p className="text-2xl font-bold text-blue-900">{stats.totalCandidates}</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <Clock className="w-10 h-10 text-yellow-400" />
              <div className="ml-4">
                <p className="text-gray-500">Entretiens en attente</p>
                <p className="text-2xl font-bold text-blue-900">{stats.pendingInterviews}</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
              <div className="ml-4">
                <p className="text-gray-500">Entretiens complétés</p>
                <p className="text-2xl font-bold text-blue-900">{stats.completedInterviews}</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <BarChart className="w-10 h-10 text-blue-600" />
              <div className="ml-4">
                <p className="text-gray-500">Score moyen</p>
                <p className="text-2xl font-bold text-blue-900">{stats.averageScore}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          {/* Sélecteur de département */}
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="block w-full py-2 pl-3 pr-10 mb-4 text-base border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="all">Tous les départements</option>
            {Object.entries(DEPARTMENTS).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>

          <div className="border-b border-gray-200">
            <nav className="flex -mb-px space-x-8">
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

          <div className="mt-8">
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Candidat
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Département
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Type
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getFilteredCandidates().map((candidate) => (
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
                        <div className="text-sm text-gray-900">{DEPARTMENTS[candidate.department]}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(candidate.date).toLocaleDateString()}
                        </div>
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
                          {candidate.status === 'completed' ? 'Terminé' : 'En attente'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <button className="mr-3 text-blue-600 hover:text-blue-900">
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