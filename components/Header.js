import Link from 'next/link';
// import { useAuth } from "@/contexts/auth";


export default function Header() {

    // const { user, login } = useAuth();
    return (
        
        <header className=' flex content-evenly bg-zinc-900'>
            <div className='w-3/4 my-3' >
            <h1 className='text-3xl text-center text-white font-semibold'>Thrive HQ</h1>
            </div>
            <div className=' w-1/4 my-3'>
            {/* <button className=' px-2 mx-2 rounded-md bg-white hover:bg-blue-300'>{user?.username}</button> */}
            {/* <button className=' px-2 mx-2 rounded-md bg-emerald-800 text-white hover:bg-blue-300' onClick={logout}>Logout</button> */}
            </div>
            {/* <button className=' px-2 rounded-md bg-white hover:bg-blue-500'>Overview</button> */}
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