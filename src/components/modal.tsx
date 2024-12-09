"use client";

import React from 'react';

interface IModal {
    title: string;
    isOpen: boolean;
    children?: React.ReactNode;
    onClose: () => void;
}

const Modal = ({ title, isOpen, children, onClose } : IModal) => {
    if (!isOpen) return null;

    return (
        <>
            <div className='fixed inset-0 w-screen h-screen bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-col fixed bg-background dark:bg-backgroundDark md:w-3/6 md:min-h-80 w-11/12 h-5/6 p-3 rounded-lg shadow'>
                    <div className='flex flex-row items-center w-full justify-between'>
                        <h1 className='text-fontText dark:text-fontTextDark text-xl font-semibold mb-2'>{title}</h1>
                        <button onClick={onClose}>
                            <svg className="w-6 text-fontTitle dark:text-fontTitleDark" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                    </div>
                    <hr className='w-full z-50'/>

                <div className='z-50 flex p-2 justify-center items-center flex-wrap'>
                    {children}
                </div>
                
                </div>
            </div>
        </>
    )
}

export default Modal