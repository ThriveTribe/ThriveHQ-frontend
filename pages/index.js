import Head from 'next/head';
import Header from 'components/Header';
// import Footer from 'components/Footer';
import Main from '/components/Main';
// import Login from '/components/Login';
import LoginForm from 'components/LoginForm';
import Backgrounds from '@/components/Backgrounds';
// import Head from 'components/head';
import DailyFact from '@/components/DailyFact';
import ToDoList from '@/components/ToDoList';

import { useAuth } from '@/contexts/auth';
// import {useState} from 'react';


// import useResource from '../hooks/useResource';


export default function Home() {
  const { user, login, logout, createUser } = useAuth();
  // const { resources } = useResource();

  
  return (
    <>
      <Head>
        <title>ThriveHQ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
        <div className="relative overflow-hidden h-screen flex flex-col">
          {/* <Header user={user} logout={logout}/> */}
          {/* ternary uncommented to bypass login requirement,  */}
          <Backgrounds/>
          <div className='relative z10'>
            <Header className='relative z10'/>
            {user ? 
              <>
                <Main user={user.username}/>
                <div className="fixed inset-x-0 bottom-0 z-10">
                  <DailyFact />
                  <ToDoList />
                </div>
              </>
              :
              <div className="flex justify-center items-center p-20 pb-8">
                <LoginForm onLogin={login} />
              </div>
            }
          </div>
          {/* <Footer/> */}
        </div>
    </>
  )
}
