"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import pessoa from "../../public/pessoa.jpeg";



interface ICard {
    id?: number; // Por enquanto é opcional, mas depois não vai ser
    cor?: string; // Corzinha do lado do card, onde tem imagem não é pra ter cor, onde tem cor, não é pra ter imagem
    title: string; // Título do card, é obrigatório
    redirect?: string; // Redirect, se não for pra direcionar pra nenhum lugar, é só colocar #
    width: string; // Width (tem que colocar a medida também, não só o número)
    height: string; // Height, mesma coisa do width, precisa da medida
    description?: string; // Descriçãozinha básica, caso tenha
    classTitle?: string; // Classes extras para o título caso precise, por exemplo pra aumentar ou diminuir a font ou colocar em bold
    image?: string; // Imagem fofa
    classExtra?: string; // Classe extra pro card em si, cuidado com esse aqui pq pode dar conflito caso já tenha a classe adicionada
    display?: boolean; // Para exibir o card

    // Preciso saber quando exibir o botão, e se exibir o botão, preciso saber se ele está favoritado ou não, por isso precisa dos dois
    favorite?: boolean; // Para exibir o botão de favorito como favorito
    star?: boolean; // Para exibir o botão de favorito sem pintar
    toggleFavorite?: () => void; // Para mudar o favorito (estrela pintada ou não)

    editButton?: boolean; // Para exibir o botão de editar
    deleteButton?: boolean; // Para exibir o botão de excluir

    editFunction?: () => void; // Função do botão de editar
    deleteFunction?: () => void; // Função do botão de excluir
}

export const Card = ({ cor, title, redirect, width, height, description, classTitle, image, classExtra, display=true, favorite, star, toggleFavorite, deleteButton, editButton, editFunction, deleteFunction } : ICard) => {
    const heightValue = parseInt(height); // Converte a altura para um número inteiro pq ele vem como string;
    const heightColor = heightValue - 1;

    return (
        <>
            {(display && redirect && editButton && deleteButton) ? (
                <div className={`${classExtra} transition-all bg-card dark:bg-cardDark hover:bg-backgroundCardBlue dark:hover:bg-backgroundCardBlueDark duration-300 rounded-md shadow-md flex justify-between items-center p-2 gap-4`} style={{minWidth: `${width}`, minHeight: `${height}`, height: 'auto'}}>
                        <div className="flex flex-row gap-3 w-full">
                            <Link href={`${redirect}`} className="flex items-center p-2 gap-4 w-full">
                                <div className={`w-4 ${cor} dark:${cor}Dark rounded-sm`} style={{ minHeight: `${heightColor}px`, height: `${heightColor}` }}></div>
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
                            </Link>
                        </div>

                            {editButton && deleteButton ? (
                            <>
                                <div className="text-fontText dark:text-fontTextDark flex-row flex">
                                    <button onClick={ editFunction }>
                                        <svg className="w-8 text-fontTitle dark:text-fontTitleDark active:scale-95 transition-transform duration-150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="currentColor" strokeWidth="1.128" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="currentColor" strokeWidth="1.128" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </button>
                                    <button onClick={ deleteFunction }>
                                        <svg className="w-9 text-buttonRed dark:text-buttonRedDark active:scale-95 transition-transform duration-150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="currentColor" strokeWidth="1.176" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </button>
                                </div>
                            </>
                        ) : null}

                    </div>
            ) : (display && !redirect) ? (
                <div className={`${classExtra} bg-card dark:bg-cardDark rounded-md shadow-md flex items-center p-2 gap-4`} style={{minWidth: `${width}`, minHeight: `${height}`, height: 'auto'}}>
                    <div className={`w-4 ${cor} dark:${cor}Dark rounded-sm`} style={{ minHeight: `${heightColor}px`, height: `${heightColor}` }}></div>
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

                    {toggleFavorite && (
                        <button onClick={toggleFavorite}>
                            {star && !favorite ? (
                                <svg className="w-8 text-fontTitle dark:text-fontTitleDark self-start" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="currentColor" strokeWidth="1.08" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            ) : (star && favorite) ? (
                                <svg className="w-8 text-fontTitle dark:text-fontTitleDark self-start" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="currentColor" strokeWidth="1.08" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            ): (<></>)}
                        </button>
                    )}
                </div>
            ) : (display && redirect) ? (
                <Link href={`${redirect}`} style={{minWidth: `${width}`, minHeight: `${height}`, height: 'auto'}}>
                    <div className={`${classExtra} active:scale-95 transition-all bg-card dark:bg-cardDark hover:bg-backgroundCardBlue dark:hover:bg-backgroundCardBlueDark duration-300 rounded-md shadow-md flex justify-between items-center p-2 gap-4`} style={{minWidth: `${width}`, minHeight: `${height}`, height: 'auto'}}>
                        <div className="flex flex-row items-center gap-3">
                            <div className={`w-4 ${cor} dark:${cor}Dark rounded-sm`} style={{ minHeight: `${heightColor}px`, height: `${heightColor}` }}></div>
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
                    </div>
                </Link>
            ) : null}
        </>
    )
}