import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

interface ICard {
    id: number,
    name: string,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    description: string,
    image: string,
}

export const Card = ({id, name, ki, maxKi, race, gender, description, image} : ICard) => {
    return (
        <div className="cursor-pointer rounded-xl p-3 w-72 object-cover flex flex-col items-center justify-between bg-neutral-50 shadow-xl transition ease-in-out hover:scale-110">
            <h1 className="font-bold text-2xl mb-2">{name}</h1>
            <Image src={image} alt="imagem" className="w-36 object-scale-down h-72 bg-top rounded-t-xl mb-4" width={300} height={300} priority/>
        </div>
    )
}