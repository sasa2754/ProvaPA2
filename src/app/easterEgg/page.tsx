"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import goku from "../../../public/goku.png";


const EasterEgg = () => {
    const [genkiSize, setGenkiSize] = useState(100);


    const aumentarGenkiDama = () => {
        setGenkiSize((prevSize) => prevSize + 20);
    };

    return (
        <div className="relative flex flex-col items-center justify-end min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/cidade.jpg')" }}>
            <Image src={goku} alt="Goku" width={300} height={400} className="z-10" />
            <div onClick={aumentarGenkiDama} className="absolute z-10 rounded-full cursor-pointer bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 animate-pulse shadow-[0_0_60px_rgba(0,0,255,0.7),0_0_100px_rgba(0,0,255,0.4)]" style={{width: `${genkiSize}px`, height: `${genkiSize}px`, top: `${genkiSize * -0.1}px`}}></div>
            <div className="fixed right-0 z-10 bg-blue-800 shadow-2xl px-2 rounded-lg flex items-center justify-center pb-4 m-2">
                <p className="text-white mt-4 text-lg">Ajude o Goku a salvar o mundo!</p>
            </div>
        </div>
    );
};

export default EasterEgg;