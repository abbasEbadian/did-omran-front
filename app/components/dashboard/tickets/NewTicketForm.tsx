"use client";
import React, { useState } from 'react';
import axios from 'axios';

const NewTicketForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [ticketType, setTicketType] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('ticketType', ticketType);
    formData.append('description', description);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.post('/api/tickets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Ticket created successfully:', response.data);
      // Reset form
      setTitle('');
      setTicketType('');
      setDescription('');
      setFile(null);
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          عنوان تیکت:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ticketType" className="block text-sm font-medium text-gray-700">
          نوع تیکت:
        </label>
        <select
          id="ticketType"
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">انتخاب کنید</option>
          <option value="پشتیبانی">پشتیبانی</option>
          <option value="فنی">فنی</option>
          <option value="مالی">مالی</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          متن تیکت:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="file" className="block text-sm font-medium text-gray-700">
          آپلود فایل:
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        ثبت تیکت
      </button>
    </form>
  );
};

export default NewTicketForm;