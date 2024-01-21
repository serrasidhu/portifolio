"use client"
export default function Button() {
    return (
        <div className=' w-96 shadow-lg bg-white  rounded-md p-20'> 
        <h1 className='text-3xl block text-center font-semibold'><i className="fa-solid fa-user"></i>Login/SignUp</h1>
        <hr className='mt-3'></hr>
        <div className='mt-3'>
          <label htmlFor="username" className='block text-base mb-2'>Username</label>
          <input type="text" id="username" className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Usernamae...'></input>
          <label htmlFor="Password" className='block text-base mb-2'>Password</label>
          <input type="text" id="username" className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password...'></input>
        </div>
        <div className="mt-3 flex justify-between items-center" >
          <div>
          <input type="checkbox"></input>
          <label>Remember Me </label>
          </div>
        <div>
            <a href='#' className='text-indigo-800 font-semibload'>Forget Password?</a>
        </div>
          </div>
        <div className='mt-5'>
          <button type="submit"className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Login</button>
        </div>
        <div className='mt-5'>
          <button type="submit"className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>SignUp</button>
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </div>

    )
}