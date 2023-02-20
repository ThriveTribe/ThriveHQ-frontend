
export default function ReportTableRow({ stand, deleteStand }) {

    function clickHandler() {
        deleteStand(stand.id);
    }

    if (stand.hourly_sales.length == 0) {
        // bunk data
        stand.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    return (
        <tr className=" border border-gray-700 odd:bg-emerald-200 even:bg-emerald-400 ">
            <td className=" border border-gray-700">{stand.location} <button onClick={clickHandler}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg></button> 
    </td>
            {stand.hourly_sales.map((hour) => {
                return <td key={hour.id} className="border border-gray-700 text-center">{hour}</td>
            })}
            <td className='text-center'>{stand.hourly_sales.reduce((sum, value) => sum + value, 0)}</td>
        </tr>
    );
}