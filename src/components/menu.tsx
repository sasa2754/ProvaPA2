"use client";

import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import esfera from "../../public/esfera.png";
import tema from "../../public/dia-e-noite.png";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
}

export const Menu = ({ op1, op2, op3 }: IMenu) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const tagHtml = document.documentElement;

        if(localStorage.getItem(`theme`) === undefined) {
            return
        }

        const tema = localStorage.getItem("theme");
        console.log(tema);

        // tagHtml.classList.add(tema);
    }, [isDark]);

    const setLocalStorage = () => {
        try {
            if(!localStorage.getItem(`theme`)) {
                localStorage.setItem(`theme`, `dark`);
                changeTheme();
                return
            }
            localStorage.setItem(`theme`, localStorage.getItem(`theme`) === `dark` ? `` : `dark`);
            setIsDark(!isDark);
            changeTheme();
        
        } catch {}
    }

    const changeTheme = () => {
        const tagHtml = document.documentElement;

        if(localStorage.getItem(`theme`) === undefined) {
            return
        }

        const tema : any = localStorage.getItem("theme");

        tagHtml.classList.toggle(tema);

    };

    return (
        <nav className="text-white z-50 shadow-xl bg-backgroundNav  flex items-center justify-between w-full p-2 px-4 fixed">
            <Link href={ROUTES.easterEgg} className="flex items-center gap-2">
                <Image src={esfera} alt="logo" width={30} height={30} />
                <h1 className="text-lg font-bold">Dragon Ball</h1>
            </Link>

            <div className="hidden md:flex gap-2 md:items-center">
                <Link className="cursor-pointer hover:text-neutral-300" href={ROUTES.fetchPage}>{op1}</Link>
                <Link className="cursor-pointer hover:text-neutral-300" href={ROUTES.axiosPage}>{op2}</Link>
                <Link className="cursor-pointer hover:text-neutral-300" href={ROUTES.fetchServer}>{op3}</Link>
                <button onClick={setLocalStorage}>
                    <Image src={tema} alt="tema" width={30} height={30}/>
                </button>
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
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="text-white flex flex-col gap-4 text-center items-center">
                        <Link className="cursor-pointer hover:text-neutral-300 text-2xl" href={ROUTES.fetchPage} onClick={toggleMenu}>{op1}</Link>
                        <Link className="cursor-pointer hover:text-neutral-300 text-2xl" href={ROUTES.axiosPage} onClick={toggleMenu}>{op2}</Link>
                        <Link className="cursor-pointer hover:text-neutral-300 text-2xl" href={ROUTES.fetchServer} onClick={toggleMenu}>{op3}</Link>
                        <button onClick={setLocalStorage}>
                            <Image src={tema} alt="tema" width={30} height={30}/>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};