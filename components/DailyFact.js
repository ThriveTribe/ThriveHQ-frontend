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
            <div className=' flex justify-center pt-6 '>
                <div className='flex-col p-4 justify-center w-3/5 '>
                    <p className= "text-slate-200 drop-shadow-lg text-lg text-center">Black History Month Fact:</p>
                    <p className="text-slate-300 drop-shadow-lg text-lg text-center">{factInfo.text}</p>
                </div>
            </div>
        </>
    )
}
