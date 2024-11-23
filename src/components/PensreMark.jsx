import React from 'react'

function PensreMark() {

    return (

        <section className='w-full flex justify-center items-center py-12 bg-[#949DA2]'>

            <div className='w-[80%] flex flex-col justify-center items-center text-center gap-4'>

                <h1 className='text-black font-bold text-4xl'>Responsive. Precise. Hassle-free.</h1>

                <p>Designed to deliver just the right friction and draw digital ink on <br /> reMarkable with incredibly low lag, Marker and Marker Plus are <br /> inseparable from the paper-like experience. Exceptionally <br />precise tools, down to the smallest details.</p>

                <div className='flex flex-col gap-4 mt-12'>

                    <img src="/firstpen.png" alt=" Fist pen " />

                    <img src="/secondpen.png" alt=" Fist pen " />

                </div>


                <div className='w-full flex justify-between text-black font-bold'>

                    <p>No charging or setup required</p>

                    <p>Attaches to reMarkable magnetically</p>

                    <p>Tilt and pressure sensitive</p>

                </div>

            </div>

        </section>

    )

}

export default PensreMark