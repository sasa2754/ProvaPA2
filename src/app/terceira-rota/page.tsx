import { Card } from "@/components/cardTerceira";
import Link from "next/link";
import { Suspense } from "react";


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

const serverSide = async () => {
    const res = await fetch("https://dragonball-api.com/api/characters?limit=50")
    const data : IData[] = (await res.json()).items
    console.log(data)

    return (
        <>
        <div className="flex items-center justify-center w-screen flex-col p-5">
                <div className="flex flex-row gap-5 flex-wrap items-center justify-center pt-10 pb-8">
                    <Suspense fallback={<h1>Loading...</h1>}>
                        {data.map((item : IData) => (
                            <Link href={`/personagem/${item.id}`}>
                                <Card key={item.id} id={item.id} name={item.name} ki={item.ki} maxKi={item.maxKi} gender={item.gender} race={item.race} description={item.description} image={item.image} />
                            </Link>
                        ))}
                     </Suspense>
                </div>
        </div>

        </>
    )
}

export default serverSide;