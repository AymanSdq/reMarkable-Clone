import React from 'react'

function Thinproduct() {
    return (
        
        <section className='w-full flex-col flex justify-center items-center'>

                <section className='w-full py-16 bg-[#0A111B] flex justify-center items-center'>
                    <div className='flex text-white text-center w-[80%] gap-16 flex-col justify-center items-center'>
                        <h1 className="text-7xl">The world's <br /> thinnest tablet</h1>
                        <p className='sansita'>At just 0.19 inches / 4.7 mm, reMarkable is the world’s thinnest <br />tablet. This is essential to providing a more paper-like writing <br />experience.</p>

                        <img src="/thintablette.png" alt="Thin Tablette" />

                        <div className='w-full flex gap-16 justify-center items-start'>
                            
                            <div className='flex-col flex gap-4'>
                                <p>Thinner is better for writing </p>
                                <p>Paper-thin design for comfortable <br />
                                handwriting.</p>
                            </div>

                            <div className='flex-col flex gap-4'>
                                <p>Thinner is better for writing </p>
                                <p>Paper-thin design for comfortable <br />
                                handwriting.</p>
                            </div>

                        </div>
                    </div>
                </section>


                <section className='w-[80%] grid grid-cols-3 gap-6 py-6 bg-[#DFDDDC]'>

                    <div className='col-span-1'>
                        <img src="/workd2.png" alt="World image" />
                    </div>

                    <div className="col-span-2">
                        <img src="/workd1.png" alt="World image" />
                    </div>

                </section>

        </section>

    )
}

export default Thinproduct