import Image from "next/image";

interface IPerson {
    params: {
        id: string
    }
}

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

interface IDataStaticIndex {
    items: IData[];
}

const Personagem = async ({params: {id}} : IPerson) => {
    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data : IData = await res.json()

    return (
        <div className="flex items-center justify-center w-screen flex-col p-5">
            <div className="bg-white dark:bg-sky-800 dark:text-white flex flex-row gap-5 flex-wrap justify-center mt-10 p-5 rounded-lg shadow-2xl md:p-10">
                <Image className="w-36 object-scale-down bg-top rounded-t-xl mb-4 md:w-52" src={data.image} width={300} height={300} alt="Imagem" priority></Image>
                <div className="flex flex-col items-center mt-8 gap-5">
                    <h1 className="text-4xl font-bold">{data.name}</h1>
                    <div className="flex flex-col gap-3 md:flex-row">
                        <h2 className="text-lg"><b>Ki: </b>{data.ki}</h2>
                        <h2 className="text-lg"><b>MaxKi: </b>{data.maxKi}</h2>
                        <h2 className="text-lg"><b>Race: </b>{data.race}</h2>
                        <h2 className="text-lg"><b>Gender: </b>{data.gender}</h2>
                    </div>
                    <p className="flex max-w-[500px] items-center text-center">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Personagem

export async function generateStaticParams() {
    const res = await fetch("https://dragonball-api.com/api/characters")
    const data: IDataStaticIndex = await res.json();
    return data.items.map((item) => item.id.toString());
}