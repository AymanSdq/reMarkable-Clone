import React from 'react'

function RemarkvsTablette() {

    return (
        
        <section className='w-full py-16 flex justify-center items-center'>

            <div className='w-[80%] flex '>

                {/* Left */}
                <div className='w-1/2 flex flex-col gap-7 justify-center items-center relative'>

                    <div className='w-full flex flex-col justify-center items-center '>
                        <img className='w-full' src="/leftvs.png" alt="Left vs" />
                        <img className='w-[215px] -mt-[73px] h-[250px]' src="/tab.png" alt="Tablete vs remarkable" />
                    </div>


                    <h1 className='text-4xl'>Other tablets</h1>



                </div>


                {/* right */}
                <div className='w-1/2 flex flex-col gap-7'>

                    <img src="/rightvs.png" alt="Left vs" />

                </div>


            </div>


        </section>

    )

}

export default RemarkvsTablette