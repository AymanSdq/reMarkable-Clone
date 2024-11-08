import React from 'react'

function Thinproduct() {
    return (
        
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

    )
}

export default Thinproduct