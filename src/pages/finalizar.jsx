import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

function Finalizar() {

    const router = useRouter();
    const { params } = router.query;
    const [parametros, setParametros] = useState(null);

    useEffect(() => {
        if (params) {
          try {
            const parametrosObj = JSON.parse(decodeURIComponent(params));
            setParametros(parametrosObj);
          } catch (error) {
            console.error("Erro ao converter os parâmetros:", error);
          }
        }
      }, [params]);

    if (!parametros) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Erro ao carregar os parâmetros.</p>
            </div>
        );
    }

  
    

    const deletarItemDaApi = async (itemId) => {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/tenis/${itemId}`);
      
          if (response.status === 204) {
            console.log('Item excluído com sucesso');
            router.push('/')
          } else {
            console.log('Erro ao excluir o item');
          }
        } catch (error) {
          console.error('Erro ao tentar excluir o item:', error);
        }
      }

    return (
        <div className="flex justify-center bg-[#222] z-0 text-center h-screen w-screen">
            <div className="hero min-h-screen h-full w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={parametros.img1} className="w-[400px] h-[400px]rounded-lg shadow-2xl" />
                    <img src={parametros.img2} className="w-[400px] h-[400px]rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{parametros.nome}</h1>
                        <p className="py-4 w-[400px] "> {parametros.desc}</p>
                        <h1 className="py-4 w-[400px] text-2xl ">R${parametros.preco}</h1>
                        <button className="btn btn-primary" onClick={()=>{deletarItemDaApi(parametros.id)}}>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Finalizar;
