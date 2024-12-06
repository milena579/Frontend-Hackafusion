"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ROUTES } from "@/constants/routes";


interface ICard {
    cor: string;
    title: string;
    redirect: string; // Id do fórum
    width: string;
    height: string;
    description?: string;
    classTitle?: string;
}

export const Card = ({ cor, title, redirect, width, height, description, classTitle } : ICard) => {
    const heightColor = Number(height) - 1;

    return (
        <>
            {}
            <Link href={`${redirect}`}>
                <div className={`bg-card dark:bg-cardDark min-w-${width} min-h-${height} rounded-md shadow-md flex items-center p-2 gap-4`}>
                    <div className={`w-4  ${cor} rounded-sm`} style={{ minHeight: `${heightColor}px` }}></div>
                    <div>
                        <h1 className={`text-fontText dark:text-fontTextDark ${classTitle}`}>{title.length > 28 ? `${title.slice(0, 28)}...` : title}</h1>
                        <p className="text-fontText dark:text-fontTextDark">{description != null && description.length > 140 ? `${description.slice(0, 140)}...` : description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}