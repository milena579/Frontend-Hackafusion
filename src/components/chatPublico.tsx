"use client"

import { useEffect, useState } from "react";

interface IChatPublico {
    children?: React.ReactNode;
    sendMessage: (message:string) => void;
    sendFile: () => void;
}


export const ChatPublico = ({ children, sendMessage, sendFile } : IChatPublico) => {
    const [message,setMes] = useState<string>("")

    return(
        <>
            <div className="bg-bgChatBlue dark:bg-bgChatBlueDark flex-col lg:w-9/12 w-full px-3 py-2 flex min-h-[75vh] max-h-[75vh] rounded-md md:max-w-4xl items-center">
                <div className="flex flex-col flex-grow overflow-auto py-3 min-w-full">
                    {children}
                </div>
                <div className="self-end w-full flex-row flex gap-2 mt-auto items-center justify-center">
                    <button onClick={sendFile}>
                        <svg className="w-9 text-fontGrey dark:text-fontGreyDark active:scale-95 transition-transform duration-100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="currentColor" strokeWidth="1.224" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path> </g></svg>
                    </button>
                    <textarea id="messageTextarea" className="dark:text-fontTextDark mt-2 w-4/5 md:w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blueLight dark:focus:ring-blueLightDark p-1 text-fontText resize-none dark:bg-cardDark" value={message} onChange={(e)=>{setMes(e.target.value)}}></textarea>
                    {/* <textarea id="" className="mt-2 w-4/5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 p-3 text-fontText dark:text-fontTextDark bg-blue-50 dark:bg-blue-800 resize-none transition-all duration-300 shadow-sm hover:shadow-md"></textarea> */}
                    <button onClick={()=>{sendMessage(message);setMes("")}}>
                        <svg className="w-9 text-fontGrey dark:text-fontGreyDark active:scale-95 transition-transform duration-100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                </div>
            </div>

        </>
    )
}