const { useRouter } = require("next/router");

function TableComp(){

    const router = useRouter()

    return(<>
    
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Cliente
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Data
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Motivo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Claudio Dante
                        </th>
                        <td class="px-6 py-4">
                            20/12/23 10:40
                        </td>
                        <td class="px-6 py-4">
                            Dor de Dente
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>);
}

export default TableComp;