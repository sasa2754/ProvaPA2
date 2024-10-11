"use client"

import { useEffect, useState, Suspense } from "react";
import { api } from "@/constants/api";
import { Card } from "@/components/card";
import { ToastContainer, toast } from 'react-toastify';

interface IData {
    id: number,
    name: string,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    description: string,
    image: string,
}


const AxiosPage = () => {
    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState(false);
    const [erroMessage, setErroMessage] = useState<string>("Página não encontrada");
    const [page, setPage] = useState<string>("1");
    const [name, setName] = useState<string>("");

    useEffect(() => {
        (async () => {
            if (parseInt(page) <=6 || name) {
                const url = `/characters?${name ? `&name=${encodeURIComponent(name)}` : ''}${page ? `&page=${encodeURIComponent(page)}` : ''}`;
                
                const res = await api.get(url).catch((err) => {
                    setErro(true);
                    console.log(err.message);
                    if (err.response) {
                        console.log(err.response);
                        setErroMessage(err.response.status === 404 ? "Página não encontrada" : "Erro ao buscar os dados");
                    }
                    else {
                        setErroMessage("Falha na requisição");
                    }
                })
    
    
                if (!res) return;
                setErro(false);
    
                if(name) {
                    setData(res.data);
                }
                else {
                    setData(res.data.items);
                }
    
                console.log(res.data.items);
            }
            else {
                setErro(true);
                setErroMessage("Página ou personagem errados!");
                toast("Página ou personagem errados!", {
                    position: "top-right",
                    pauseOnHover: true,
                    draggable: true,
                    style: {
                      background: "radial-gradient(circle, rgba(80,163,181,1) 0%, rgba(60,60,157,1) 100%)",
                      color: "white",
                      display: "flex",
                      width: "250px",
                      margin: "3px",
                      padding: "8px",
                      borderRadius: "5px",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      zIndex: "50",
                      boxShadow: "2px 2px 8px 3px rgba(0, 0, 0, 0.425)",
                    }
                  });
            }
        })()
    
    }, [page, name])
    

    return (
        <>
            <div className="fixed top-16 select-none">
                <ToastContainer />
            </div>
            <div className="flex items-center justify-center w-screen flex-col p-5">
                <div className="flex flex-row flex-wrap gap-5 items-center justify-center pt-5">
                    <div className="flex flex-col gap-2 items-center">
                        <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
                            <input className="border-solid border-2 border-black rounded-md p-1 w-96 text-black mt-5" type="text" value={page} onChange={(e) => setPage(e.target.value)} placeholder="1/6"/>
                            <input className="border-solid border-2 border-black rounded-md p-1 w-96 text-black mt-5" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Goku"/>
                        </div>
                        {erro && <h5 className="font-semibold">{erroMessage}</h5>}
                    </div>
                    <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
                        <Suspense fallback={<h1>Loading...</h1>}>
                            {data.map((item : IData) => (
                            <Card key={item.id} id={item.id} name={item.name} ki={item.ki} maxKi={item.maxKi} gender={item.gender} race={item.race} description={item.description} image={item.image} />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AxiosPage;