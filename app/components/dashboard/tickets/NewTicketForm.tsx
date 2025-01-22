"use client";
import React, { useState } from 'react';
import axios from 'axios';
import FloatingLabelInput from '../../FloatingLabelInput';

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
      <div className="mb-4 w-2/4 block">
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-3 rounded-2xl bg-did/10 shadow-custom-shadow text-dark text-sm placeholder:text-did/50 placeholder:text-sm focus:outline-none focus:ring-indigo-500
           focus:border-indigo-500"
           placeholder='عنوان تیکت را وارد کنید'
        />
      </div>
      <div className="mb-4">
        <select
          id="ticketType"
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-3 rounded-2xl bg-did/10 shadow-custom-shadow text-dark text-sm text-did/50   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">نوع تیکت را انتخاب کنید</option>
          <option value="پشتیبانی">پشتیبانی</option>
          <option value="فنی">فنی</option>
          <option value="مالی">مالی</option>
        </select>
      </div>
      <div className="mb-4">
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-3 rounded-2xl bg-did/10 shadow-custom-shadow text-dark text-sm placeholder:text-did/50 placeholder:text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder='محتوای تیکت را وارد نمایید...'
          rows={6}
        />
      </div>
        <div className="flex items-center gap-3">
            <button
                type="submit"
                className="px-8 py-2 bg-blue text-white rounded-2xl hover:bg-indigo-700 focus:outline-none whitespace-nowrap"
            >
                 ارسال تیکت
            </button>
            <div className="grow flex justify-between border border-did/10 rounded-2xl items-center bg-white100 ps-4 pe-2 py-1">
                <label htmlFor="file" className="block text-sm font-medium text-secondary800">
                 فرمت‌های مجاز: jpg, png, zip, rar, pdf
                </label>
                <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="mt-1 block text-sm text-secondary file:mr-4 file:py-2 file:px-4 file:rounded 
                file:border-0 file:text-sm file:font-semibold file:bg-blue700 file:text-white hover:file:bg-blue800"
                placeholder=''
                />
            </div>

        </div>
      <FloatingLabelInput/>
    </form>
  );
};

export default NewTicketForm;