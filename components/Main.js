
import { lazy, Suspense } from 'react';
import ToDoList from './ToDoList';
import TDleft from './TDLEFT';
import Mantra from './Mantra';
const Clock = lazy(() => import('../components/ClockTemp'));

export default function Main(){
  return(
  
    <main>
      <div className='p-50 m-20 flex flex-col flex-grow text-center justify-items-center content-center'>
      <h1 className= "text-6xl text-gray-200 drop-shadow-lg font-comfortaa">Hello, *user*</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Clock />
      </Suspense>
      <Mantra/>
      <ToDoList/>
      
    </div>
    {/* <ToDoList className/> */}
    {/* <TDleft className="relative h-32 w-32"/> */}

    </main>

  )
}

// ! DO NOT DELETE! RESOURCE/DELETE FUNCTIONALITY

// // import useResource from '../hooks/useResource';

// export default function Main(props) {
//   // const { resources, deleteResource } = useResource();

//     return(
//         <main className='py-6 bg-zinc-900'>
//           <body><h1>hello world </h1></body>
          
//         </main >
//     )
// }
