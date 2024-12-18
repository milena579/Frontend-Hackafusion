"use client"

import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Modal from "./modal";
import { useState } from "react";

interface ISeeMore {
    isAdmin: boolean;
    children?: React.ReactNode;
    button: string;
    toggleAdd?: () => void;
    title: string;
    redirect: string;
}

const SeeMore = ({ isAdmin, children, button, toggleAdd, title, redirect } : ISeeMore) => {


    return (
        <>
            <div className="flex items-center flex-col md:py-10 md:px-14 p-3">
                <div className="flex justify-between w-full mb-3">
                    <Link href={"/profile"}>
                        <svg className="w-9 text-fontGrey dark:text-fontGreyDark hover:scale-105 transition-transform" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <defs>
                                    <style>{`.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:28.672;}`}</style>
                                </defs>
                                <g data-name="Layer 2" id="Layer_2">
                                    <g data-name="E416, back, Media, media player, multimedia, player" id="E416_back_Media_media_player_multimedia_player">
                                        <circle className="cls-1" cx="256" cy="256" r="246"></circle>
                                        <polyline className="cls-1" points="333.82 100.37 178.18 256 333.82 411.63"></polyline>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    {isAdmin && toggleAdd && (
                        <button onClick={toggleAdd} className=" bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded py-2 px-4 text-fontButton">
                            {button}
                        </button>
                    )}
               </div>
               <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl">{title}</h1>


               <div className="flex justify-center flex-col" >
                    {children}
               </div>

            </div>
        </>
    )
}

export default SeeMore