import { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { mockServices, Service } from '../../data/mockData';

export default function PhoneVerification() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6 mt-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Верификация телефона 
        </h2>
      </div>
    </div>
  );
}
