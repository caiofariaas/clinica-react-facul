import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';



function Adicionar() {

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
                <input type="text" id="nome" placeholder="Nome" className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="preco" className="text-white">CPF:</label>
                <input type="text" id="preco" placeholder="Preço" className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="descricao" className="text-white">Data da consulta:</label>
                <input type="text" id="descricao" placeholder="Descrição" className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="descricao" className="text-white">Motivo da Consulta:</label>
                <input type="text" id="descricao" placeholder="Descrição" className="input input-bordered w-full max-w-xs mb-4" />
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Agendar</button>
            </form>
        </div>
        <div>
        <Footer />
        </div>
      </div>
    </>);
}

export default Adicionar;
    