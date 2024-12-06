"use client";

import React from 'react';

interface IModal {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode; 
}

const Modal: React.FC<IModal> = ({ title, isOpen, onClose, children }) => {
    if (!isOpen) return null;
    <>
        <div className='fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center gap-4'>
            <div>

            </div>
        </div>
    </>
}

export default Modal