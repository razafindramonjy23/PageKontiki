import React, { useState } from 'react';
import { Send, Upload, User, Mail, Phone, Building } from 'lucide-react';

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
      const formDataToSend = new FormData();
      
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('message', formData.message);
      
      if (formData.cv_file) {
        formDataToSend.append('cv_file', formData.cv_file);
      }

      console.log('Sending data:', Object.fromEntries(formDataToSend.entries()));

      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'envoi du formulaire');
      }

      setStatus({
        loading: false,
        success: true,
        error: null
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        cv_file: null
      });

    } catch (error) {
      console.error('Error:', error);
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
      <div className="max-w-4xl px-4 py-12 mx-auto">
        <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
          {/* Header */}
          <div className="p-8 text-white bg-blue-600">
            <h1 className="text-3xl font-bold text-center">Contactez Kontiki Service</h1>
            <p className="mt-2 text-center text-blue-100">
              Nous sommes à votre écoute pour toute demande
            </p>
          </div>

          {/* Status Messages */}
          {status.success && (
            <div className="p-4 m-4 border border-green-200 rounded-lg bg-green-50">
              <p className="text-sm font-medium text-green-800">
                Votre message a été envoyé avec succès !
              </p>
            </div>
          )}

          {status.error && (
            <div className="p-4 m-4 border border-red-200 rounded-lg bg-red-50">
              <p className="text-sm font-medium text-red-800">
                {status.error}
              </p>
            </div>
          )}

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Name Input */}
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Nom complet</label>
                <div className="relative">
                  <User className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="email"
                    className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Téléphone</label>
                <div className="relative">
                  <Phone className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="tel"
                    className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre numéro"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Company Input */}
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Entreprise</label>
                <div className="relative">
                  <Building className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre entreprise"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Votre message..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                required
              />
            </div>

            {/* File Upload */}
            <div className="relative">
              <label className="block mb-2 font-medium text-gray-700">CV / Documents</label>
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
                  className="flex items-center justify-center px-6 py-3 transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-blue-500"
                >
                  <Upload className="w-5 h-5 mr-2 text-gray-400" />
                  <span className="text-gray-600">
                    {formData.cv_file ? formData.cv_file.name : 'Déposer votre CV ou cliquez pour sélectionner'}
                  </span>
                </label>
              </div>
              <p className="mt-2 text-sm text-gray-500">Formats acceptés: PDF, DOC, DOCX</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center px-8 py-3 space-x-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                disabled={status.loading}
              >
                <Send className="w-5 h-5" />
                <span>{status.loading ? 'Envoi en cours...' : 'Envoyer'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}