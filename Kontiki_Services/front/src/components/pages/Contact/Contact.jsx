import React, { useState } from 'react';
import { Send, Upload, User, Mail, Phone, Building } from 'lucide-react';
import { Alert, AlertDescription } from './Alert';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    cv_file: null
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Créer un FormData pour envoyer les fichiers
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'cv_file' && formData[key]) {
          data.append('cv_file', formData[key]);
        } else if (formData[key]) {
          data.append(key, formData[key]);
        }
      });

      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setStatus({
        loading: false,
        success: true,
        error: null
      });

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        cv_file: null
      });

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, cv_file: file }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-8 text-white">
            <h1 className="text-3xl font-bold text-center">Contactez Kontiki Service</h1>
            <p className="text-center mt-2 text-blue-100">
              Nous sommes à votre écoute pour toute demande
            </p>
          </div>

          {/* Status Messages */}
          {status.success && (
            <Alert className="m-4 bg-green-50 text-green-800 border-green-200">
              <AlertDescription>
                Votre message a été envoyé avec succès !
              </AlertDescription>
            </Alert>
          )}

          {status.error && (
            <Alert className="m-4 bg-red-50 text-red-800 border-red-200">
              <AlertDescription>
                {status.error}
              </AlertDescription>
            </Alert>
          )}

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="relative">
                <label className="text-gray-700 font-medium mb-2 block">Nom complet</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="text-gray-700 font-medium mb-2 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="relative">
                <label className="text-gray-700 font-medium mb-2 block">Téléphone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre numéro"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Company Input */}
              <div className="relative">
                <label className="text-gray-700 font-medium mb-2 block">Entreprise</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre entreprise"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="text-gray-700 font-medium mb-2 block">Message</label>
              <textarea
                className="w-full p-4 h-32 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Votre message..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                required
              />
            </div>

            {/* File Upload */}
            <div className="relative">
              <label className="text-gray-700 font-medium mb-2 block">CV / Documents</label>
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center px-6 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                >
                  <Upload className="mr-2 h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">
                    {formData.cv_file ? formData.cv_file.name : 'Déposer votre CV ou cliquez pour sélectionner'}
                  </span>
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-2">Formats acceptés: PDF, DOC, DOCX</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
                disabled={status.loading}
              >
                <Send className="h-5 w-5" />
                <span>{status.loading ? 'Envoi en cours...' : 'Envoyer'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}