import React from 'react'

function SmallSection() {

    return (
        <section className='w-full flex flex-col justify-start items-center py-4 pt-10 bg-[#D9D9D9]'>

            <div className='w-1/2 flex flex-col  gap-10 justify-center items-center'>

                <h1 className='text-3xl text-black font-bold sansita'>Praised by tech’s most respected publications</h1>

                {/* Both image container */}
                <div className='flex gap-10 '>
                    <img src="/toms.svg" alt="Toms logo" />
                    <img src="/mashable.svg" alt="Toms logo" />
                </div>

            </div>


        </section>
    )

}

export default SmallSection