import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import TableComp from "@/components/table";

function Consultas(){

    const router = useRouter()

    return(<>
    
    <div className="overflow-hidden">
      <NavBar />
      <div className="container mx-auto my-10  rounded-md">
        <div className="justify-center items-center h-screen">
          <TableComp />
        </div>
      </div>
      <Footer />
    </div>

    </>);
}

export default Consultas;