"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import pessoa from "../../public/pessoa.jpeg";



interface ICard {
    cor?: string;
    title: string;
    redirect: string; // Id do fórum
    width: string;
    height: string;
    description?: string;
    classTitle?: string;
    image?: string;
}

export const Card = ({ cor, title, redirect, width, height, description, classTitle, image } : ICard) => {
    const heightColor = Number(height) - 1;

    return (
        <>
            
            <Link href={`${redirect}`}>
                <div className={`bg-card dark:bg-cardDark min-w-${width} min-h-${height} rounded-md shadow-md flex items-center p-2 gap-4`}>
                    <div className={`w-4  ${cor} dark:${cor}Dark rounded-sm`} style={{ minHeight: `${heightColor}px` }}></div>
                    {image != null && (
                        <Image src={pessoa} alt="logo" width={50} height={30} className="rounded-full"/>
                    )}
                    {image == null && (
                        <>
                        </>
                    )}
                    <div className="flex flex-col gap-2">
                        <h1 className={`text-fontText dark:text-fontTextDark font-bold ${classTitle}`}>{title.length > 28 ? `${title.slice(0, 28)}...` : title}</h1>
                        <p className="text-fontText dark:text-fontTextDark">{description != null && description.length > 140 ? `${description.slice(0, 140)}...` : description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}