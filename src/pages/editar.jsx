import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

function FormUpdate() {

    const router = useRouter()
    const { params } = router.query;
    const [id, setId] = useState("")
    const [nome, setnome] = useState("")
    const [cpf, setcpf] = useState("")
    const [data, setdata] = useState("")
    const [hora, sethora] = useState("")
    const [motivo, setmotivo] = useState("")
  
    const handleNomeChange = (event) => {
      setnome(event.target.value);
    };
  
    const handleCpfChange = (event) => {
      setcpf(event.target.value);
    };
  
    const handleDataChange = (event) => {
      setdata(event.target.value);
    };
  
    const handleHoraChange = (event) => {
      sethora(event.target.value);
    };
  
    const handleMotivoChange = (event) => {
      setmotivo(event.target.value);
    };

    
    const [parametros, setParametros] = useState(null);

    useEffect(() => {
        if (params) {
            console.log(decodeURIComponent(params));
            try {   
                const parametrosObj = JSON.parse(decodeURIComponent(params));
                console.log(parametrosObj);
                setParametros(parametrosObj);
                setnome(parametrosObj.nome)
                setId(parametrosObj.id)
                setcpf(parametrosObj.cpf)
                setmotivo(parametrosObj.motivo)
                setdata(parametrosObj.data)
                sethora(parametrosObj.hora)

            } catch (error) {
                console.error("Erro ao converter os parâmetros:", error);
            }
        }
    }, [params]);



// Arrumar no BackEnd

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('paciente', nome);
        formData.append('cpf',cpf)
        formData.append('data', data);
        formData.append('hora', hora);
        formData.append('motivo', motivo);
       

        try {
            const response = await axios.patch(`http://192.168.0.13:8000/agendamento/${id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(() => { router.push('/consultas') });


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
                <input type="text" id="preco" placeholder="000.000.000-00" value={cpf} onChange={handleCpfChange} className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="descricao" className="text-white">Data da Consulta:</label>
                <input type="text" id="data" placeholder="Data" value={data} onChange={handleDataChange} className="input input-bordered w-full max-w-xs mb-4" />


                <label htmlFor="descricao" className="text-white">Motivo da Consulta:</label>
                <input type="text" id="data" placeholder="Motivo" value={motivo} onChange={handleMotivoChange} className="input input-bordered w-full max-w-xs mb-4" />

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