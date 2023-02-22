import { useState } from 'react';

export default async function ZenHandler(req, res) {

    // const [state, setState] = useState({
    //     author: null,
    //     quote: null,
    //     blockQuote: null,
    // });


    let zenData = 'http://127.0.0.1:8000/thrive/zen/'

    const options = {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
    };

    const response = await fetch(zenData, options);

    const data = await response.json();
    res.status(200).json(data)
    console.log(data)

    const newState = {
        author: data.a,
        quote: data.q,
        blockQuote: data.h,
    };

    setState(prevState => ({ ...prevState, ...newState }));


}