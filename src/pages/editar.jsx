import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

function FormUpdate() {

    const router = useRouter()

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [motivo, setMotivoConsulta] = useState('');
    const [data, setData] = useState('');

    const { params } = router.query;
    const [parametros, setParametros] = useState(null);

    useEffect(() => {
        if (params) {
            try {
                const parametrosObj = JSON.parse(decodeURIComponent(params));
                setParametros(parametrosObj);
                setId(parametrosObj.id)
                setNome(parametrosObj.nome)
                setCPF(parametrosObj.cpf)
                setMotivoConsulta(parametrosObj.motivo)
                setData(parametrosObj.data)

            } catch (error) {
                console.error("Erro ao converter os parâmetros:", error);
            }
        }
    }, [params]);


    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleCPFChange = (event) => {
        setCPF(event.target.value);
    };

    const handleDateChange = (event) => {
        setData(event.target.value);
    };

    const handleMotivoChange = (event) => {
        setMotivoConsulta(event.target.files[0]);
    };


// Arrumar no BackEnd

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('nomeProd', nome);
        formData.append('descProd', descricao);
        formData.append('precoProd', preco);
       

        try {
            const response = await axios.patch(`http://127.0.0.1:8000/tenis/${id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(() => { router.push('/') });


        } catch (error) {
            console.error('Erro ao atualizar o produto:', error.message);
        }
    };

    return (<>
        <div className="overflow-hidden">
            <NavBar/>
        <div className=" flex flex-col justify-center items-center bg-[#222] h-screen w-screen">
            <h1 className="pb-7 text-[23px]">Editar Consulta</h1>
            <form className="flex flex-col space-y-4 items-center bg-[#696868] p-4 rounded-lg shadow-md max-w-md">
                <label htmlFor="nome" className="text-white">Nome:</label>
                <input type="text" id="nome" placeholder="Nome" value={nome} onChange={handleNomeChange} className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="preco" className="text-white">CPF:</label>
                <input type="text" id="preco" placeholder="Preço" value={cpf} onChange={handleCPFChange} className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="descricao" className="text-white">Data da Consulta:</label>
                <input type="text" id="data" placeholder="Preço" value={data} onChange={handleDateChange} className="input input-bordered w-full max-w-xs mb-4" />


                <label htmlFor="descricao" className="text-white">Motivo da Consulta:</label>
                <input type="text" id="data" placeholder="Preço" value={motivo} onChange={handleMotivoChange} className="input input-bordered w-full max-w-xs mb-4" />

                <button onClick={handleSubmit} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Editar</button>
            </form>
        </div>
        <div>
        <Footer />
        </div>
        </div>
    </>);
}

export default FormUpdate;