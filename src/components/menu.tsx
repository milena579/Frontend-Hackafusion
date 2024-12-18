"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ROUTES } from "@/constants/routes";
import logoETS from "../../public/logoETS.png";
import pessoa from "../../public/pessoa.jpeg";
import coloridinho from "../../public/coloridinho.jpg";
import Modal from "./modal";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { it } from "node:test";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
}


interface IUser{
    id:Number,
    name:string,
    edv:string,
    email:string,
    telefone:string,
    image:string,
    student:boolean
}

export const Menu = ({ op1, op2, op3 }: IMenu) => {

    const router = useRouter();
    const [data,setData] = useState<IUser>();
    const [searchTerm, setSearchTerm] = useState('');
    const [users,setUsers] = useState<IUser[]>([])

    const loadProfile = async()=>{
        await fetch(`http://localhost:8080/user/0`,{
            method:"GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string
            }
        })
        .then((res)=>{
            if(res.status === 403){
                router.push(ROUTES.login)
            }
            
            res.json().then((data)=>{
                console.log(data)

                setData(data.user);
            })
        })
    }

    const handleSearchChange = async () => {
        if(searchTerm===""){
            return
        }
        await fetch(`http://localhost:8080/user?query=${searchTerm}`,{
            method:"GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string
            }
        }).then((res)=>{
            res.json().then((userData)=>{
                setUsers(userData.listObject)
            })
        })
    };


    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true || null);

    const toggleTheme = () => {
        const tagHtml = document.documentElement;

        if(localStorage.getItem(`theme`) === undefined) {
            return
        }

        const tema : any = localStorage.getItem("theme");

        tagHtml.classList.toggle(tema);
    }

    useEffect(() => {
        const tagHtml = document.documentElement;

        if(localStorage.getItem(`theme`) === undefined) {
            return
        }

        const tema = localStorage.getItem("theme");
        console.log(tema);
        const admin = sessionStorage.getItem('Admin');
        setIsAdmin(admin === "true");
        loadProfile();

    }, [isDark]);

    const setLocalStorage = () => {
        try {
            if(!localStorage.getItem(`theme`)) {
                localStorage.setItem(`theme`, `dark`);
                toggleTheme();
                return
            }
            localStorage.setItem(`theme`, localStorage.getItem(`theme`) === `dark` ? `` : `dark`);
            setIsDark(!isDark);
            toggleTheme();
        
        } catch {}
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsOpenSearch(!isOpenSearch);
    };

    const toggleNotification = () => {
        setIsOpenNotification(!isOpenNotification);
    };

    return (
        <>
            <nav className="text-fontTitle z-50 shadow-xl bg-background flex items-center justify-between w-full p-2 px-8 fixed dark:bg-backgroundDark  shadow-gray-100/5">
                <Link href={ROUTES.forum} className="flex items-center gap-2">
                    <Image src={logoETS} alt="logo" width={50} height={30}/>
                    <h1 className="text-lg font-bold text-fontGrey dark:text-fontGreyDark md:flex hidden">Engineering Technical School</h1>
                </Link>
                <div className="hidden justify-around w-5/12 lg:flex md:items-center">
                    <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.forum}>{op1}</Link>
                    <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.project}>{op2}</Link>
                    <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.discosion}>{op3}</Link>
                    {isAdmin && (
                        <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.users}>Users</Link>
                    )}
                    <button onClick={toggleNotification}>
                        <svg className="w-8 text-fontTitle dark:text-fontTitleDark" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z" stroke="currentColor" strokeWidth="1.5"></path> <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                    </button>
                    <button onClick={toggleSearch}>
                        <svg className="w-9 text-fontTitle dark:text-fontTitleDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                    </button>
                    <Link href={ROUTES.profile} className="flex items-center gap-2">
                        {data?.image ? (
                            <Image src={data?.image} loader={()=>data?.image} alt="logo" width={50} height={30} className="rounded-full"/>
                        ) : (
                            <Image src={pessoa} alt="logo" width={50} height={30} className="rounded-full"/>
                        )}
                    </Link>
                    <button onClick={setLocalStorage}>
                        <svg className="w-11 text-fontTitle dark:text-fontTitleDark" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                            <circle cx="21" cy="16" r="8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="14" y1="5" x2="14" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="4.81" y1="6.81" x2="6.93" y2="8.93" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="3" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="4.81" y1="25.19" x2="6.93" y2="23.07" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="14" y1="27" x2="14" y2="26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.43,22.57C15.67,22.85,14.85,23,14,23c-3.87,0-7-3.13-7-7s3.13-7,7-7c0.85,0,1.67,0.15,2.43,0.43" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <Link href={ROUTES.login} className="flex items-center gap-2">
                        <div>
                            <svg className="w-9 text-fontTitle dark:text-fontTitleDark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                    </Link>
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none text-fontTitle dark:text-fontTitleDark">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center gap-4">
                        <button onClick={toggleMenu} className="focus:outline-none text-white">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <Link className="cursor-pointer hover:text-neutral-400 text-2xl text-fontTitleDark" href={ROUTES.forum} onClick={toggleMenu}>{op1}</Link>
                        <Link className="cursor-pointer hover:text-neutral-400 text-2xl text-fontTitleDark" href={ROUTES.project} onClick={toggleMenu}>{op2}</Link>
                        <Link className="cursor-pointer hover:text-neutral-400 text-2xl text-fontTitleDark" href={ROUTES.discosion} onClick={toggleMenu}>{op3}</Link>
                        {isAdmin && (
                            <Link className="cursor-pointer hover:text-neutral-400 text-fontTitle text-lg dark:text-fontTitleDark" href={ROUTES.users}>Users</Link>
                        )}
                        <Link className="cursor-pointer hover:text-neutral-400 text-2xl text-fontTitleDark" href={ROUTES.profile} >Perfil</Link>
                        <div className="flex gap-5">
                            <button onClick={toggleNotification}>
                                <svg className="w-8 text-fontTitleDark" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z" stroke="currentColor" strokeWidth="1.5"></path> <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                            </button>
                            <button onClick={setLocalStorage}>
                                <svg className="w-11 text-fontTitleDark" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                                    <circle cx="21" cy="16" r="8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="14" y1="5" x2="14" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="4.81" y1="6.81" x2="6.93" y2="8.93" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="3" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="4.81" y1="25.19" x2="6.93" y2="23.07" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="14" y1="27" x2="14" y2="26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.43,22.57C15.67,22.85,14.85,23,14,23c-3.87,0-7-3.13-7-7s3.13-7,7-7c0.85,0,1.67,0.15,2.43,0.43" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button onClick={toggleSearch}>
                                <svg className="w-9 text-fontTitleDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                            </button>
                            <Link href={ROUTES.login} onClick={toggleMenu} className="flex items-center gap-2">
                                <svg className="w-9 text-fontTitleDark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            <div className="h-14 mb-2"></div>
            <Image src={coloridinho} alt="logo" className="w-full h-1 fixed z-50"/>

            {/* Modal do search */}
            <Modal title="Pesquisa de usuário" isOpen={isOpenSearch} onClose={toggleSearch}>
                <div className="flex items-center w-full justify-center flex-col">
                    <div className="flex h-8 items-center w-full justify-center">
                        <input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} type="text" placeholder="Pesquise um usuário" className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12 h-9"/>
                        <button onClick={()=>{handleSearchChange()}}>
                            <svg className="w-9 text-fontGrey dark:text-fontGreyDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center justify-center mt-3 p-1">
                        {users?.map((item)=>{
                            return(
                                <Card classTitle="font-semibold" height="60%" width="100%" title={item.name} redirect={`profile/${item.id}`} image={item.image}></Card>
                            )
                        })}
                    </div>
                </div>
            </Modal>

            {/* Modal do notification */}
            <Modal title="Notificações" isOpen={isOpenNotification} onClose={toggleNotification}>
                <div className="flex gap-2 flex-grow flex-col justify-center items-center p-1 w-full">
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                    <Card title="Latonildo de Monster" description="curtiu o seu comentário" width="100%" height="80px" image="" classTitle="font-semibold" classExtra="basis-full"></Card>
                </div>
            </Modal>
        </>
    );
};