"use client";

import { useState } from "react";

interface IChat {

}

export const ChatPrivate = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const openChat = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>  
        {isOpen == true && (
            <>
                <button onClick={openChat}>
                    <div className="fixed flex flex-col p-1 items-center justify-center md:bottom-96 right-0 bg-blueMiddle md:h-10 md:w-96 w-16 h-16 m-5 rounded-tl-3xl shadow-md">
                        <svg className="w-9 text-fontTextDark md:self-end" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> </g></svg>
                    </div>
                </button>
                <div className="fixed flex bottom-0 right-0 h-96 w-96 bg-background dark:bg-backgroundDark shadow-xl rounded-tl-3xl md:rounded-none">
                    gfrdeger
                </div>
            </>

        )}
        
        {isOpen == false && (
            <>
                <button onClick={openChat}>
                    <div className="fixed flex flex-col p-1 items-center justify-center bottom-0 right-0 bg-blueMiddle md:h-10 md:w-96 w-16 h-16 rounded-full m-5 md:rounded-tl-3xl md:rounded-none md:m-0 shadow-md">
                        <svg className="w-9 text-fontTextDark md:self-end" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> </g></svg>
                    </div>
                </button>
            </>

        )}
        </>
    )
}