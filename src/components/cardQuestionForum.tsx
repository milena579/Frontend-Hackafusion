"use client";

import Link from "next/link";
import { useState } from "react";
import { ROUTES } from "@/constants/routes";

interface ICard {
    cor: string;
    title: string;
    redirect: string // Id do fórum
}

export const CardForumQuestion = ({cor, title, redirect} : ICard) => {
    return (
        <>
        <Link href={`/questions/${redirect}`}>
            <div className="bg-card dark:bg-cardDark w-72 h-20 rounded-md shadow-md flex items-center p-2 gap-4">
                <div className={`w-4 h-5/6 ${cor} rounded-sm`}></div>
                <h1 className="text-fontText dark:text-fontTextDark">{title.length > 28 ? `${title.slice(0, 28)}...` : title}</h1>
            </div>
        </Link>
        </>
    )
}