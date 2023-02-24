import Link from 'next/link';
import { useAuth } from "@/contexts/auth";
// import Weather from './weather';


export default function Header() {

    const { user, login, logout } = useAuth();
    return (
        
        <header className=' flex justify-between content-center bg-zinc-900 bg-opacity-30'>
 
            <h1 className='pt-1 pl-1 text-md pd-2 m-2 text-left text-white font-semibold'>Thrive HQ</h1>
            {/* </div> */}
                <div className='flex flex-row content-center my-3 pr-1'>
                {/* <button className=' px-2 mx-2 rounded-md bg-white hover:bg-blue-300'>{user?.username}</button> */}
                <button className=' flex flex-row px-2 mx-2 rounded-md bg-emerald-800 text-white hover:bg-indigo-500 hover:animate-bounce' onClick={logout}>
                    Logout
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pl-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                </button>
            </div>
        {/* <Weather/> */}
        </header>
    )
}

// *** working code! commented on to work on static front end
// export default function Header({user, logout}) {

//     // const { user, login } = useAuth();
//     return (
        
//         <header className=' flex content-evenly bg-zinc-900'>
//             <div className='w-3/4 my-3' >
//             <h1 className='text-3xl text-center text-white font-semibold'>Thrive HQ</h1>
//             </div>
//             <div className=' w-1/4 my-3'>
//             <button className=' px-2 mx-2 rounded-md bg-white hover:bg-blue-300'>{user?.username}</button>
//             <button className=' px-2 mx-2 rounded-md bg-emerald-800 text-white hover:bg-blue-300' onClick={logout}>Logout</button>
//             </div>
//             {/* <button className=' px-2 rounded-md bg-white hover:bg-blue-500'>Overview</button> */}
//         </header>
//     )

// }
