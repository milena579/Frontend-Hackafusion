"use client";

import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import { ROUTES } from "@/constants/routes";
import pessoa from "../../public/pessoa.jpeg";
import Image from "next/image";


interface ICard {
    title: string;
    redirect: (id: number) => void;
    width: string;
    height: string;
    classTitle?: string;
    image?: string;
    id: number
}

export const CardChat = ({ title, redirect, width, height, classTitle, image, id } : ICard) => {
    // console.log(image)
    return (
        <>
            
            <button className="w-full" onClick={() => redirect(id)}>
                <div className={`bg-card dark:bg-cardDark min-w-${width} min-h-${height} rounded-md shadow-md flex items-center p-2 gap-4`}>
                    {image == null ? <p>{image}</p> : <Image src={image} alt="pessoa" width={50} height={30} className="rounded-full"></Image>}
                    <div>
                        <h1 className={`text-fontText dark:text-fontTextDark ${classTitle}`}>{title}</h1>
                    </div>
                </div>
            </button>
        </>
    )
}