"use client";

import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import { ROUTES } from "@/constants/routes";
import pessoa from "../../public/pessoa.jpeg";
import Image from "next/image";


interface ICard {
    title: string;
    redirect: MouseEventHandler;
    width: string;
    height: string;
    classTitle?: string;
    image?: string;
}

export const CardChat = ({ title, redirect, width, height, classTitle, image } : ICard) => {
    const heightColor = Number(height) - 1;

    return (
        <>
            
            <button className="w-full" onClick={redirect}>
                <div className={`bg-card dark:bg-cardDark min-w-${width} min-h-${height} rounded-md shadow-md flex items-center p-2 gap-4`}>
                    {image == null ? <p>{image}</p> : <Image src={pessoa} alt="pessoa" width={50} height={30} className="rounded-full"></Image>}
                    
                    <div>
                        <h1 className={`text-fontText dark:text-fontTextDark ${classTitle}`}>{title.length > 28 ? `${title.slice(0, 28)}...` : title}</h1>
                    </div>
                </div>
            </button>
        </>
    )
}