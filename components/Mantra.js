import { useEffect, useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const zenUrl = baseUrl + '/thrive/zen/';


export default function Mantra(){
    const [zenInfo, setZenInfo] = useState({
        author: null,
        quote: null,
        blockQuote: null,
    });
    useEffect(() => {
        (async() => {
    
            let zenData = zenUrl
        
            const options = {
                method: "GET",
                headers: {'Content-Type': 'application/json'},
            };
        
            const response = await fetch(zenData, options);
            const data = await response.json();
        
            let tempZenInfo = {
                author: data.a,
                quote: data.q,
                blockQuote: data.h,
            };
        
            setZenInfo(tempZenInfo);
        })
        ();
     },[])

    return(
        <>
        <p className="text-gray-200 drop-shadow-md text-lg p-5">&quot;{zenInfo.quote}&quot; - {zenInfo.author}</p>

        </>
    )
}
