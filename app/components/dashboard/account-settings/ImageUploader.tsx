"use client"; // این کامپوننت باید در سمت کلاینت اجرا شود

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import UserInfo from '@/app/components/icons/user-info.svg'

const ImageUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  // هنگام انتخاب فایل
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // ایجاد پیش‌نمایش عکس
    }
  };

  // ارسال فایل به سرور
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('لطفاً یک فایل انتخاب کنید.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile); // فایل را به فرم‌دیتا اضافه کنید

    try {
      setUploadStatus('در حال آپلود...');
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('آپلود موفقیت‌آمیز بود!');
      console.log('پاسخ سرور:', response.data);
    } catch (error) {
      setUploadStatus('آپلود با خطا مواجه شد.');
      console.error('خطا در آپلود:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className=" text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {previewUrl && (
        <div className="mt-4">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="h-32 w-32 text-center mx-auto bg-white100 rounded-full hover:bg-blue-600 disabled:bg-gray-400"
      >
        <Image
        src={UserInfo}
        alt="star Img"
        width={24}
        height={24} />
      </button>
      {uploadStatus && <p className="mt-2 text-sm text-gray-600">{uploadStatus}</p>}
    </div>
  );
};

export default ImageUploader;