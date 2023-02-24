import { useEffect, useState } from 'react';
import Image from 'next/image';

// const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// const factUrl = baseUrl + '/thrive/daily_fact/';

const weatherUrl = "https://weather-embed.p.rapidapi.com/forecast?city=seattle&country=US&textColor=white&units=imperial&days=1"

export default function Weather({weatherURL}){
    const [weatherInfo, setWeatherInfo] = useState('');
    useEffect(() => {
        (async() => {
    
            try {
                const options = {
                    method: "GET",
                    headers: {
                    'X-RapidAPI-Key': '8917f90294msh668c563d6c1ab7cp194e9ejsnfb3e9e8f1a80',
		            'X-RapidAPI-Host': 'weather-embed.p.rapidapi.com'},
                    };
                const response = await fetch(weatherUrl, options);
                const blob = await response.blob();
                const objectUrl = URL.createObjectURL(blob);
                setWeatherInfo(objectUrl);
            } catch (error) {
                console.error(error);
            } 
        })
        ();
     }, [weatherURL]);

    return(
        <>
        <Image src={weatherInfo} alt="Weather PNG image" height="100" width="100"/>
        </>
    )
}
