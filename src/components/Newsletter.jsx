import React from 'react'

function Newsletter() {

    return (
        <section className='w-full py-16 justify-center items-center bg-[#DFDDDC]'>

            <div className='w-full flex justify-center items-center bg-[#071721]'>

                <div className='w-[80%] flex'>

                    <div className='w-[40%] gap-6 text-center flex flex-col text-white justify-center items-center'>
                        
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16.2305" r="16" fill="white" fill-opacity="0.2"/><path d="M25.9894 10.6367C26.009 10.5156 25.9921 10.3914 25.9409 10.2799C25.7834 9.58766 25.2831 9.23047 24.4375 9.23047H8.1875C7.44375 9.23047 6.64248 9.50391 6.24844 10.0405C6.21436 10.0664 6.18186 10.0958 6.1525 10.1298C6.02654 10.2752 5.98248 10.4621 6.01063 10.6383C6.005 10.6889 6 10.7399 6 10.793V20.793C6 21.8286 7.15219 22.9805 8.1875 22.9805H24.4375C25.4731 22.9805 26 21.8286 26 20.793V10.793C26 10.7377 25.9928 10.6892 25.9894 10.6367H25.9894ZM8.18742 10.4805L24.4374 10.4804H24.4459L15.9999 17.212L7.58807 10.5079C7.77932 10.4726 8.01463 10.4805 8.1874 10.4805H8.18742ZM24.4374 21.7304H8.18746C7.84277 21.7304 7.24996 21.1379 7.24996 20.7929V11.8389L15.5906 18.5117C15.7081 18.6133 15.854 18.6639 15.9999 18.6639C16.1504 18.664 16.2958 18.61 16.4096 18.5117L24.7499 11.8392V20.7929C24.7499 21.1379 24.7824 21.7304 24.4374 21.7304Z" fill="white"/></svg>

                        <h1 className='text-3xl'>Learn how reMarkable <br />works</h1>
                        
                        <p>Discover how you can create the perfect <br />
                            folder structure, become a better note- <br />
                            taker, and master reMarkable’s powerful  <br />
                            digital tools.</p>

                        <div className='flex'>
                            <input className='py-2 px-2 text-black rounded-l-full' type="mail" placeholder='Your Email' />
                            <button className='bg-[#CB7428] sansita font-bold px-4 rounded-r-full' name='signup'>sign up</button>
                        </div>

                    </div>

                    <div className='w-[60%]'>
                        <img className='w-full h-[450px]' src="/newsletter.png" alt="Image news letter" />
                    </div>

                </div>

            </div>

        </section>
    )

}

export default Newsletter