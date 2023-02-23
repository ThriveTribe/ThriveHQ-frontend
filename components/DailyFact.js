import { useEffect, useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const factUrl = baseUrl + '/thrive/daily_fact/';


export default function DailyFact(){
    const [factInfo, setFactInfo] = useState({
        author: null,
        quote: null,
        blockQuote: null,
    });
    useEffect(() => {
        (async() => {
    
            let factData = factUrl
        
            const options = {
                method: "GET",
                headers: {'Content-Type': 'application/json'},
            };
        
            const response = await fetch(factData, options);
            const data = await response.json();
        
            let tempFactInfo = {
                text: data['Results'][0]['text'],
            };
            console.log(tempFactInfo)
        
            setFactInfo(tempFactInfo);
        })
        ();
     },[])

    return(
        <>
            <div className='flex-col content-center w-3/4 opacity-70 bg-slate-300'>
                <p className="text-gray-700 w-3/4 drop-shadow-md text-lg">Black History Month Fact:</p>
                <p className="text-gray-700 w-3/4 drop-shadow-md text-lg">{factInfo.text}</p>
            </div>
        </>
    )
}
