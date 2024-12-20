import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, CheckCircle, XCircle, Filter, Search } from 'lucide-react';

const InterviewDashboard = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchInterviews();
  }, [filter]);

  const fetchInterviews = async () => {
    try {
      const response = await fetch(`/api/interviews/?status=${filter}`);
      const data = await response.json();
      setInterviews(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching interviews:', error);
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const statusColors = {
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      scheduled: 'bg-blue-100 text-blue-800'
    };
    return statusColors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Tableau de Bord Entretien</h1>
          <p className="text-blue-200">Gestion des entretiens techniques</p>
        </div>
      </header>

      {/* Statistics Cards */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Calendar className="h-10 w-10 text-blue-900" />
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm">Entretiens Aujourd'hui</h3>
                <p className="text-2xl font-semibold text-gray-900">8</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="h-10 w-10 text-yellow-400" />
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm">Candidats en Attente</h3>
                <p className="text-2xl font-semibold text-gray-900">24</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm">Entretiens Complétés</h3>
                <p className="text-2xl font-semibold text-gray-900">156</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Clock className="h-10 w-10 text-red-500" />
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm">Temps Moyen</h3>
                <p className="text-2xl font-semibold text-gray-900">45min</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un candidat..."
                className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Tous les statuts</option>
              <option value="pending">En attente</option>
              <option value="scheduled">Programmé</option>
              <option value="completed">Complété</option>
              <option value="cancelled">Annulé</option>
            </select>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
              Nouvel Entretien
            </button>
          </div>
        </div>

        {/* Interview Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Heure
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
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">Chargement...</td>
                </tr>
              ) : (
                interviews.map((interview) => (
                  <tr key={interview.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          {interview.candidate.name[0]}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {interview.candidate.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {interview.candidate.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(interview.datetime).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {interview.type}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(interview.status)}`}>
                        {interview.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button className="text-blue-900 hover:text-blue-700 mr-3">
                        Détails
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Annuler
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InterviewDashboard;