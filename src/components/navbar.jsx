import Image from 'next/image'
import { useRouter } from "next/router";


function NavBar() {

    const router = useRouter()

    return (
        <>
        
            <div className="navbar bg-black h-16">
                <div className="navbar-start mx-6">
                    <Image src="" className="w-14" />
                    <div className=" hidden md:flex ml-3 text-white">
                       Dentart Odontologia
                    </div>
                </div>
                <div className="navbar-end">
                    <div className=" items-center gap-6 mx-6  ">
                        <div className="form-control h-8">
                            <input type="text" placeholder="Buscar" className="input bg-[#414141]  input-bordered w-36 md:w-auto" />
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div className="drawer drawer-end z-40">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="btn btn-ghost drawer-button"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                            </div>
                            <div className="drawer-side ">
                                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full  bg-base-200 text-base-content">
                                    <li onClick={()=>{router.push('/')}}><a>Agendar uma consulta</a></li>
                                    <li onClick={()=>{router.push('consultas')}}><a>Consultas</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;