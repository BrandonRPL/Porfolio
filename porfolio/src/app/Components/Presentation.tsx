import React, {useState} from 'react'


const Presentation = () => {
  return (
    <section>
        <div style={{
        backgroundImage: `url(https://www.solbyte.com/blog/wp-content/uploads/desarrollo-web-a-medida.png)`,
        top: '70px',
        left: '100px',
        width: '1000px',
        height: '500px',
        }}>
           
            <div className='flex flex-col p-72 justify-center'>
                <p className=' font-sans text-6xl text-stone-50 bg-purple-900 to-blue-500 mr-3 px-4 pb-1 rounded-full'>Brandon Parra</p>
                <button className='mt-8 p-1 mx-36 relative inline-flex items-center justify-center   overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                    <p className="font-sans relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">hoja de vida</p>
                </button>
            </div>
        </div>
    </section>


    )
}
export default Presentation