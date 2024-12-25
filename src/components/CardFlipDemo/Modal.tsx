"use client";

import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  content?: string;
}

const Modal = ({ isOpen, onClose, children, content }: ModalProps) => {
  const [copyStatus, setCopyStatus] = useState('');

  if (!isOpen) return null;

  const handleCopy = async () => {
    if (!content) return;
    
    try {
      await navigator.clipboard.writeText(content);
      setCopyStatus('已复制！');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      setCopyStatus('复制失败');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-[90%] max-w-4xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">代码示例</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button 
                onClick={handleCopy}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
              >
                复制代码
              </button>
              {copyStatus && (
                <span className="text-sm text-green-600">{copyStatus}</span>
              )}
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 