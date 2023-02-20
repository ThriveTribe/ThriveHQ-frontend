import Link from 'next/link';


export default function Overview(props){
        return (
            <>
            <div className = 'bg-emerald-100' >
                <Link href='/' className=' px-2 rounded-md bg-white hover:bg-blue-300'>Back to Home </Link>
            </div>
        <div className = 'bg-emerald-100'>
            <table className="w-1/2 mx-auto">
                <thead>
                    <tr>
                        <th className="border border-gray-700">No.</th>
                        <th className="border border-gray-700">Location</th>
                        <th className="border border-gray-700">Minimum Customer/Hour</th>
                        <th className="border border-gray-700">Maximum Customer/Hour</th>
                        <th className="border border-gray-700">Average Cookies/Sale</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        props.locations.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="pl-2 border border-gray-700">{item.id + 1}</td>
                                    <td className="pl-2 border border-gray-700">{item.name}</td>
                                    <td className="pl-2 border border-gray-700">{item.minCustomers}</td>
                                    <td className="pl-2 border border-gray-700">{item.maxCustomers}</td>
                                    <td className="pl-2 border border-gray-700">{item.avgCookies}</td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            </table>
        </div>
        </>
        );
    }
