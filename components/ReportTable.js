import {hours, hourlySales, locations, hourlySalesTotalRender, hourlyTotals} from './data'
import ReportTableRow from 'components/ReportTableRow'

export default function ReportTable({stands, deleteStand}){
    

    // calculate totals for totals row
    const totalRow = stands.reduce((acc, stand) => {
        return stand.hourly_sales.map((sale, i) => acc[i] + sale);
    }, Array(hours.length).fill(0));

    const totalTotal = totalRow.reduce((sum, sale) => sum + sale, 0);
    // console.log(totalRow)
    // console.log(totalTotal)

    return(
        stands.length > 0 ? (
            <table className="w-3/4 mx-auto my-5">
             {/* Table Header */}
            <thead>
                <tr className="border border-gray-700 bg-emerald-500">
                    <th className="border border-gray-700 text-center">Location</th>
                    {hours.map((hour) => {
                        return <th key={hour.id} className="border border-gray-700 text-center">{hour}</th>
                    })}
                    <th>Totals</th>
                </tr>
            </thead>
            {/* Table rows */}
            <tbody>
                {stands.map(stand => (
                    <ReportTableRow key={stand.id} stand={stand} deleteStand={deleteStand} />
                ))}
            </tbody>
            <tfoot>
                <tr className=' text-center font-semibold border border-gray-700 bg-emerald-500'>
                    <tf>Totals</tf>
                    {totalRow.map((total) => {
                            return <td key={total.id} className="border border-gray-700 text-center">{total}</td>
                        })}
                    <tf>{totalTotal}</tf>
                </tr>
            </tfoot>
            </table>
        ) : (
            <h2 className="text-center my-5 font-bold text-2xl ">No Cookie Stands Available</h2>
        )
    )
}