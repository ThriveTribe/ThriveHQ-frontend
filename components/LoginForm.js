
import CreateUserForm from './CreateUserForm';

export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        // <form onSubmit={handleSubmit}>
        //     <fieldset autoComplete='off'>
        //         <legend>Log In</legend>
        //         <label htmlFor="username">Username</label>
        //         <input name="username" />
        //         <label htmlFor="password">Password</label>
        //         <input type="password" name="password" />
        //         <button>Log In</button>
        //     </fieldset>
        // </form>

<div className="container flex w-1/4 flex-col items-center p-2 mx-auto my-3 rounded-md bg-black bg-opacity-30">
  <form onSubmit={handleSubmit} className="items-center">
    <fieldset autoComplete="off" className="items-center">
      <legend className="text-center text-slate-200 text-2xl font-bold text-shadow-3px drop-shadow-md p-2">
        Log In
      </legend>

      <label htmlFor="username" className="text-center block mb-2 text-sm font-semibold text-slate-200 p-2">
        User Name
      </label>
      <input
        name="username"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        placeholder="User Name"
        style={{ minWidth: "0" }}
      />

      <label htmlFor="password" className="text-center block mb-2 text-sm font-semibold text-slate-200 p-2">
        Password
      </label>
      <input
        type="password"
        name="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        placeholder="Password"
        style={{ minWidth: "0" }}
      />

      <button className="text-white bg-emerald-600 hover:bg-indigo-500 font-medium  hover:animate-pulse rounded-md text-sm px-5 py-2.5 mt-2 w-full flex flex-row justify-center align items-center">
        Log In<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

      </button>
    </fieldset>
  </form>
</div>

    // </div>
    );
}

    {/* <div className="container flex flex-cl items-center"> */}
