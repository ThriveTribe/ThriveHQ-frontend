
import { lazy, Suspense } from 'react';
import ToDoList from './ToDoList';
import Mantra from './Mantra';
import DailyFact from './DailyFact';
// import Calendar from './Calendar';
const Clock = lazy(() => import('../components/ClockTemp'));

export default function Main(props){
  return(
  
    <main className="">
      <DailyFact/>
      <div className='p-50 m-20 flex flex-col flex-grow text-center justify-items-center content-center'>
      <h1 className= "text-6xl text-gray-200 drop-shadow-lg font-comfortaa">Hello, {props.user}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Clock />
      </Suspense>
      <Mantra/>
      <ToDoList/>
      {/* <Calendar/> */}
      
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
