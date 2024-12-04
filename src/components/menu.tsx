"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ROUTES } from "@/app/constants/routes";
import logoETS from "../../public/logoETS.png";
import pessoa from "../../public/pessoa.jpeg";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
}

export const Menu = ({ op1, op2, op3 }: IMenu) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="text-fontTitle z-50 shadow-xl bg-backgroundNav  flex items-center justify-between w-full p-2 px-4 fixed">
            <Link href={ROUTES.forum} className="flex items-center gap-2">
                <Image src={logoETS} alt="logo" width={50} height={30} />
                <h1 className="text-lg font-bold text-fontGrey dark:text-fontGreyDark">Engineering Technical School</h1>
            </Link>
            <div className="hidden md:flex gap-2 md:items-center">
                <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.forum}>{op1}</Link>
                <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.project}>{op2}</Link>
                <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.discosion}>{op3}</Link>
                <svg className="w-8 text-fontTitle dark:text-fontTitleDark" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z" stroke="currentColor" strokeWidth="2.304"></path> <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeWidth="2.304" strokeLinecap="round"></path> </g></svg>
                <svg
                    className="w-7 text-fontTitle dark:text-fontTitleDark"
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <g fill="currentColor">
                        <path d="M172.625,102.4c-42.674,0-77.392,34.739-77.392,77.438c0,5.932,4.806,10.74,10.733,10.74
                            c5.928,0,10.733-4.808,10.733-10.74c0-30.856,25.088-55.959,55.926-55.959c5.928,0,10.733-4.808,10.733-10.74
                            C183.358,107.208,178.553,102.4,172.625,102.4z"/>
                        <path d="M361.657,301.511c19.402-30.436,30.645-66.546,30.645-105.244C392.302,88.036,304.318,0,196.151,0
                            c-38.676,0-74.765,11.25-105.182,30.663C66.734,46.123,46.11,66.759,30.659,91.008C11.257,121.444,0,157.568,0,196.267
                            c0,108.217,87.998,196.266,196.151,196.266c38.676,0,74.779-11.264,105.197-30.677C325.582,346.396,346.206,325.76,361.657,301.511
                            z M259.758,320.242c-19.075,9.842-40.708,15.403-63.607,15.403c-76.797,0-139.296-62.535-139.296-139.378
                            c0-22.912,5.558-44.558,15.394-63.644c13.318-25.856,34.483-47.019,60.323-60.331c19.075-9.842,40.694-15.403,63.578-15.403
                            c76.812,0,139.296,62.521,139.296,139.378c0,22.898-5.558,44.53-15.394,63.616C306.749,285.739,285.598,306.916,259.758,320.242z"
                        />
                        <path d="M499.516,439.154L386.275,326.13c-16.119,23.552-36.771,44.202-60.309,60.345l113.241,113.024
                            c8.329,8.334,19.246,12.501,30.148,12.501c10.916,0,21.833-4.167,30.162-12.501C516.161,482.83,516.161,455.822,499.516,439.154z"
                        />
                    </g>
                </svg>
                <Link href={ROUTES.profile} className="flex items-center gap-2">
                    <Image src={pessoa} alt="logo" width={50} height={30} className="rounded-full"/>
                </Link>
                <Link href={ROUTES.login} className="flex items-center gap-2">
                    <div>
                        <svg
                            className="w-6 text-fontTitle dark:text-fontTitleDark"
                            viewBox="0 0 600 600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" 
                            >
                            <g>
                                <path
                                d="M 130 0 C 58.672245 0 0 58.672245 0 130 L 0 470 C 0 541.32776 58.672245 600 130 600 L 301.57812 600 C 367.83331 600 423.13643 549.36696 430.67188 485 L 349.43555 485 C 343.32179 505.66026 324.7036 520 301.57812 520 L 130 520 C 101.60826 520 80 498.39174 80 470 L 80 130 C 80 101.60826 101.60826 80 130 80 L 301.57812 80 C 324.7036 80 343.32179 94.339739 349.43555 115 L 430.67188 115 C 423.13642 50.633038 367.83331 0 301.57812 0 L 130 0 z"
                                />
                                <path
                                d="m 476.86328,179.99911 a 40,40 0 0 0 -28.28516,11.71484 40,40 0 0 0 0,56.57032 l 11.71485,11.71484 H 163.72656 a 40,40 0 0 0 -40,40 40,40 0 0 0 40,40 h 296.56641 l -11.71485,11.71484 a 40,40 0 0 0 0,56.57032 40,40 0 0 0 56.57032,0 l 72.79101,-72.79102 A 40,40 0 0 0 600,299.99911 40,40 0 0 0 577.5293,264.09481 l -72.38086,-72.38086 a 40,40 0 0 0 -28.28516,-11.71484 z"
                                />
                            </g>
                        </svg>
                    </div>
                </Link>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center">
                    <Link href={ROUTES.forum} className="flex items-center gap-2">
                        <Image src={logoETS} alt="logo" width={50} height={30} />
                        <h1 className="text-lg font-bold text-fontGrey">Engineering Technical School</h1>
                    </Link>
                    <div className="hidden md:flex gap-2 md:items-center">
                        <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.forum} onClick={toggleMenu}>{op1}</Link>
                        <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.project} onClick={toggleMenu}>{op2}</Link>
                        <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.discosion} onClick={toggleMenu}>{op3}</Link>
                        <svg className="w-8 text-fontTitle dark:text-fontTitleDark" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z" stroke="currentColor" strokeWidth="2.304"></path> <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeWidth="2.304" strokeLinecap="round"></path> </g></svg>
                        <svg
                            className="w-7 text-fontTitle dark:text-fontTitleDark"
                            version="1.1"
                            id="_x32_"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                        >
                            <g fill="currentColor">
                                <path d="M172.625,102.4c-42.674,0-77.392,34.739-77.392,77.438c0,5.932,4.806,10.74,10.733,10.74
                                    c5.928,0,10.733-4.808,10.733-10.74c0-30.856,25.088-55.959,55.926-55.959c5.928,0,10.733-4.808,10.733-10.74
                                    C183.358,107.208,178.553,102.4,172.625,102.4z"/>
                                <path d="M361.657,301.511c19.402-30.436,30.645-66.546,30.645-105.244C392.302,88.036,304.318,0,196.151,0
                                    c-38.676,0-74.765,11.25-105.182,30.663C66.734,46.123,46.11,66.759,30.659,91.008C11.257,121.444,0,157.568,0,196.267
                                    c0,108.217,87.998,196.266,196.151,196.266c38.676,0,74.779-11.264,105.197-30.677C325.582,346.396,346.206,325.76,361.657,301.511
                                    z M259.758,320.242c-19.075,9.842-40.708,15.403-63.607,15.403c-76.797,0-139.296-62.535-139.296-139.378
                                    c0-22.912,5.558-44.558,15.394-63.644c13.318-25.856,34.483-47.019,60.323-60.331c19.075-9.842,40.694-15.403,63.578-15.403
                                    c76.812,0,139.296,62.521,139.296,139.378c0,22.898-5.558,44.53-15.394,63.616C306.749,285.739,285.598,306.916,259.758,320.242z"
                                />
                                <path d="M499.516,439.154L386.275,326.13c-16.119,23.552-36.771,44.202-60.309,60.345l113.241,113.024
                                    c8.329,8.334,19.246,12.501,30.148,12.501c10.916,0,21.833-4.167,30.162-12.501C516.161,482.83,516.161,455.822,499.516,439.154z"
                                />
                            </g>
                        </svg>
                        <Link href={ROUTES.profile} className="flex items-center gap-2">
                            <Image src={pessoa} alt="logo" width={50} height={30} className="rounded-full"/>
                        </Link>
                        <Link href={ROUTES.login} onClick={toggleMenu} className="flex items-center gap-2">
                            <div>
                                <svg
                                    className="w-6 text-fontTitle dark:text-fontTitleDark"
                                    viewBox="0 0 600 600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" 
                                    >
                                    <g>
                                        <path
                                        d="M 130 0 C 58.672245 0 0 58.672245 0 130 L 0 470 C 0 541.32776 58.672245 600 130 600 L 301.57812 600 C 367.83331 600 423.13643 549.36696 430.67188 485 L 349.43555 485 C 343.32179 505.66026 324.7036 520 301.57812 520 L 130 520 C 101.60826 520 80 498.39174 80 470 L 80 130 C 80 101.60826 101.60826 80 130 80 L 301.57812 80 C 324.7036 80 343.32179 94.339739 349.43555 115 L 430.67188 115 C 423.13642 50.633038 367.83331 0 301.57812 0 L 130 0 z"
                                        />
                                        <path
                                        d="m 476.86328,179.99911 a 40,40 0 0 0 -28.28516,11.71484 40,40 0 0 0 0,56.57032 l 11.71485,11.71484 H 163.72656 a 40,40 0 0 0 -40,40 40,40 0 0 0 40,40 h 296.56641 l -11.71485,11.71484 a 40,40 0 0 0 0,56.57032 40,40 0 0 0 56.57032,0 l 72.79101,-72.79102 A 40,40 0 0 0 600,299.99911 40,40 0 0 0 577.5293,264.09481 l -72.38086,-72.38086 a 40,40 0 0 0 -28.28516,-11.71484 z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};