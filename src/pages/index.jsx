import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { useRouter } from "next/router";



function Adicionar() {
  const router = useRouter()

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


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append('paciente', nome);
    formData.append("cpf",cpf)
    formData.append('data', data);
    formData.append('hora', hora);
    formData.append('motivo', motivo);

    try {
      const response = await axios.post('http://192.168.0.13:8000/agendamento/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(() => { router.push('/consultas') });
      


    } catch (error) {
      console.error('Erro ao agendar horario:', error.message);
    }

  }

  return (<>
    <div className="overflow-hidden">
      <div className="absolute w-full bg-[#222]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <NavBar />
        </header>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#222] h-screen w-screen">
        <h1 className="pb-7 text-[23px]">Agendar Consulta</h1>
        <form className="flex flex-col space-y-4 items-center bg-[#696868] p-4 rounded-lg shadow-md max-w-md">
          <label htmlFor="nome" className="text-white">Nome:</label>
          <input type="text" id="nome" onChange={handleNomeChange} placeholder="Nome" className="input input-bordered w-full max-w-xs mb-4" />

          <label htmlFor="preco" className="text-white">CPF:</label>
          <input type="text" id="CPF" onChange={handleCpfChange} placeholder="000.000.000-00" className="input input-bordered w-full max-w-xs mb-4" />

          <label htmlFor="descricao" className="text-white">Data da consulta:</label>
          <input type="date" id="descricao" onChange={handleDataChange} placeholder="Descrição" className="input input-bordered w-full max-w-xs mb-4" />

          <label htmlFor="descricao" className="text-white">Hora da consulta:</label>
          <input type="text" id="descricao" onChange={handleHoraChange} placeholder="Horário" className="input input-bordered w-full max-w-xs mb-4" />

          <label htmlFor="descricao" className="text-white">Motivo da Consulta:</label>
          <input type="text" id="descricao" onChange={handleMotivoChange} placeholder="Descrição" className="input input-bordered w-full max-w-xs mb-4" />

          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleSubmit}>Agendar</button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </>);
}

export default Adicionar;
