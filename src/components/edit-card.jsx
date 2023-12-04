import { carrinho } from "@/data/dados";
import { useRouter } from "next/router";

function CardEdicao({ data }) {
    const router = useRouter();
    console.log(data);

    const handleClick = () => {
        router.push({
            pathname: '/editar',
            query: {
                params: encodeURIComponent(JSON.stringify({
                    id:data.id,
                    img1: data.img1,
                    img2: data.img2,
                    nome: data.nomeProd,
                    preco: data.precoProd,
                    desc: data.descProd,
                }))
            },
        });
    };


    return (
        <>
            <div className=" mx-2 cursor-pointer py-4 hover:flex w-72 flex-col transform transition-transform duration-300 ease-in-out" >
                <div className=" hover:bg-transparent bg-transparent shadow-xl transform duration-300 ease-in-out hover:scale-95">
                    <img src={data.img2} alt="Shoes" />
                </div>
                <div className="pt-2 w-full h-full">
                    <h4>{data.nomeProd}</h4>
                    <p>R${data.precoProd}</p>
                    <button className="btn btn-primary" onClick={()=>{handleClick()}}>Editar</button>

                </div>
            </div>

        </>
    );
}

export default CardEdicao;