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
        headers: {
          'Accept': 'application/json',
        },
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
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-5xl px-4 py-16 mx-auto">
        {/* Header with decorative elements */}
        <div className="relative mb-8 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Contactez Kontiki Service</h1>
          <div className="flex justify-center mt-4">
            <div className="w-32 h-2 rounded-full bg-amber-400"></div>
          </div>
          <p className="mt-4 text-lg text-blue-200">
            Nous sommes à votre écoute pour toute demande
          </p>
        </div>

        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute w-24 h-24 rounded-full -top-4 -left-4 bg-amber-400/20 blur-xl"></div>
          <div className="absolute w-32 h-32 rounded-full -bottom-4 -right-4 bg-blue-400/20 blur-xl"></div>
          
          <div className="relative overflow-hidden bg-white shadow-2xl rounded-3xl backdrop-blur-xl">
            {/* Status Messages */}
            {status.success && (
              <div className="p-4 m-4 text-center border-2 border-green-500 rounded-xl bg-green-50">
                <p className="text-lg font-medium text-green-800">
                  Votre message a été envoyé avec succès !
                </p>
              </div>
            )}

            {status.error && (
              <div className="p-4 m-4 text-center border-2 border-red-500 rounded-xl bg-red-50">
                <p className="text-lg font-medium text-red-800">
                  {status.error}
                </p>
              </div>
            )}

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Name Input */}
                <div className="relative group">
                  <label className="block mb-2 font-medium text-gray-700">Nom complet</label>
                  <div className="relative">
                    <User className="absolute w-5 h-5 transform -translate-y-1/2 text-blue-950 left-3 top-1/2" />
                    <input
                      type="text"
                      className="w-full py-3 pl-10 pr-4 transition-all border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-blue-950 group-hover:border-blue-950"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <label className="block mb-2 font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute w-5 h-5 transform -translate-y-1/2 text-blue-950 left-3 top-1/2" />
                    <input
                      type="email"
                      className="w-full py-3 pl-10 pr-4 transition-all border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-blue-950 group-hover:border-blue-950"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <label className="block mb-2 font-medium text-gray-700">Téléphone</label>
                  <div className="relative">
                    <Phone className="absolute w-5 h-5 transform -translate-y-1/2 text-blue-950 left-3 top-1/2" />
                    <input
                      type="tel"
                      className="w-full py-3 pl-10 pr-4 transition-all border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-blue-950 group-hover:border-blue-950"
                      placeholder="Votre numéro"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                {/* Company Input */}
                <div className="relative group">
                  <label className="block mb-2 font-medium text-gray-700">Entreprise</label>
                  <div className="relative">
                    <Building className="absolute w-5 h-5 transform -translate-y-1/2 text-blue-950 left-3 top-1/2" />
                    <input
                      type="text"
                      className="w-full py-3 pl-10 pr-4 transition-all border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-blue-950 group-hover:border-blue-950"
                      placeholder="Votre entreprise"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="group">
                <label className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea
                  className="w-full h-20 p-4 transition-all border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-blue-950 group-hover:border-blue-950"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>

              {/* File Upload */}
              <div className="relative group">
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
                    className="flex items-center justify-center px-6 py-4 transition-all border-2 border-gray-200 border-dashed cursor-pointer rounded-xl group-hover:border-blue-950 hover:bg-blue-50"
                  >
                    <Upload className="w-6 h-6 mr-2 text-blue-950" />
                    <span className="text-gray-600">
                      {formData.cv_file ? formData.cv_file.name : 'Déposer votre CV ou cliquez pour sélectionner'}
                    </span>
                  </label>
                </div>
                <p className="mt-2 text-sm text-gray-500">Formats acceptés: PDF, DOC, DOCX</p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="flex items-center px-8 py-4 space-x-3 text-white transition-all bg-blue-950 rounded-xl hover:bg-blue-800 disabled:opacity-50 hover:scale-105"
                  disabled={status.loading}
                >
                  <Send className="w-5 h-5" />
                  <span className="text-lg">{status.loading ? 'Envoi en cours...' : 'Envoyer'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}