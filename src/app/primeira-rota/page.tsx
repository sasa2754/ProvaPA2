"use client"

import { Card } from "@/components/card";
import { useEffect, useState, Suspense } from "react";

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

const FetchPage = () => {
    const [character, setCharacter] = useState<any>([]);

     useEffect(() => {
        const load = async () => {
          try {
            const res = await fetch("https://dragonball-api.com/api/characters?limit=50");
            const data = await res.json();
            setCharacter(data.items);
            console.log(character);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        load();
      }, [])

      return (
        <div className="flex items-center justify-center w-screen flex-col p-5">
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center pt-10 pb-8">
                <Suspense fallback={<h1>Loading...</h1>}>
                    {character.map((item : IData) => (
                        <Card key={item.id} id={item.id} name={item.name} ki={item.ki} maxKi={item.maxKi} gender={item.gender} race={item.race} description={item.description} image={item.image} />
                    ))}
                </Suspense>
            </div>
        </div>
      )
}

export default FetchPage