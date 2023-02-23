
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


        <div className="container flex w-1/2 flex-col items-center p-2 mx-auto my-3 rounded-md border border-emerald-500 bg-emerald-200">
        <form onSubmit={handleSubmit} className="items-center">
            <fieldset autoComplete='off' className="items-center">
                {/* <button className="text-white bg-emerald-600 hover:bg-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mt-2 text-center content-center w-60">Create New User</button> */}
                <legend className="text-center text-2xl font-bold">Log In</legend>

                <label htmlFor="password" className="text-center block mb-2 text-sm font-semibold text-gray-900">User Name</label>
                <input name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="User Name"/>
                <label htmlFor="password" className="text-center block mb-2 text-sm font-semibold text-gray-900">Password</label>
                <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="password"/>
                <div className="container flex flex-col items-center">
                <button className="text-white bg-emerald-600 hover:bg-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mt-2 text-center content-center w-60">Log In</button>
                </div>
            </fieldset>
        </form>
        </div>
    );
}