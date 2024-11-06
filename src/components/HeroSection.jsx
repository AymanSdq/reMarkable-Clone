import React from 'react'

function HeroSection() {
    return (

        <section className=' w-full flex lg:h-[calc(100vh-65px)] bg-[#1E2A2F]'>

            <div className='lg:w-1/2 flex justify-end items-center'>
                <img src="/board.svg" alt="Image Board" loading='lazy' />
            </div>

            <div className='lg:w-1/2 flex items-center justify-start'>
                
                <div className='w-[50%] flex flex-col gap-10'>

                    <div className='flex flex-col text-white'>
                        <h1 className='sansita text-7xl'>reMarkable 2</h1>
                        <p className='text-3xl italic'>thenext genration paper tablet</p>
                    </div>

                    <p className='text-white'>Replace your notebooks and printed documents 
                    with the only tablet that feels like paper.</p>

                    {/* Watch and shop buttons */}
                    <div className='w-full flex gap-6'>

                        <a href="#" className='sansita flex items-center rounded-full gap-2 bg-[#CB7428] text-white px-6 py-2'>
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.57037 4.71533H19.1819L21.0001 19.0003H1.00012L2.57037 4.71533Z" stroke="white" stroke-width="0.77038" stroke-linejoin="round"/><path d="M5.28278 8.6919C5.28278 9.44829 5.89595 10.0615 6.65234 10.0615C7.40873 10.0615 8.02191 9.44829 8.02191 8.6919C8.02191 7.93551 7.40873 7.32233 6.65234 7.32233C5.89595 7.32233 5.28278 7.93551 5.28278 8.6919ZM13.9784 8.6919C13.9784 9.44829 14.5916 10.0615 15.348 10.0615C16.1044 10.0615 16.7176 9.44829 16.7176 8.6919C16.7176 7.93551 16.1044 7.32233 15.348 7.32233C14.5916 7.32233 13.9784 7.93551 13.9784 8.6919ZM6.65234 8.6919C6.90483 8.73872 6.90483 8.73874 6.90483 8.73873C6.90484 8.73868 6.90485 8.73864 6.90486 8.73856C6.9049 8.73838 6.90495 8.73809 6.90502 8.73769C6.90518 8.73688 6.90541 8.73561 6.90574 8.73388C6.90639 8.73044 6.90739 8.72517 6.90873 8.71815C6.91142 8.70411 6.9155 8.68304 6.92098 8.65542C6.93192 8.60017 6.94843 8.51871 6.97053 8.41478C7.01472 8.2069 7.08121 7.90933 7.17009 7.55203C7.34805 6.83666 7.61493 5.88536 7.97121 4.93619C8.32862 3.98399 8.77052 3.04898 9.29336 2.35661C9.82072 1.65824 10.3911 1.25679 11.0002 1.25679V0.743207C10.1486 0.743207 9.44522 1.30324 8.8835 2.04711C8.31725 2.79697 7.85477 3.78493 7.49038 4.75571C7.12486 5.72951 6.85251 6.70118 6.67169 7.42805C6.58119 7.79186 6.5134 8.09522 6.46817 8.30799C6.44555 8.41439 6.42856 8.49818 6.41718 8.55561C6.41149 8.58432 6.40721 8.60644 6.40432 8.62151C6.40288 8.62904 6.40178 8.63481 6.40104 8.63876C6.40067 8.64073 6.40038 8.64225 6.40019 8.6433C6.40009 8.64383 6.40001 8.64424 6.39996 8.64454C6.39993 8.64468 6.3999 8.64482 6.39989 8.64489C6.39987 8.64499 6.39986 8.64507 6.65234 8.6919ZM11.0002 1.25679C11.6092 1.25679 12.1796 1.65824 12.707 2.35661C13.2298 3.04898 13.6717 3.98399 14.0291 4.93619C14.3854 5.88536 14.6523 6.83666 14.8302 7.55203C14.9191 7.90933 14.9856 8.2069 15.0298 8.41478C15.0519 8.51871 15.0684 8.60017 15.0794 8.65542C15.0848 8.68304 15.0889 8.70411 15.0916 8.71815C15.093 8.72517 15.094 8.73044 15.0946 8.73388C15.0949 8.73561 15.0952 8.73688 15.0953 8.73769C15.0954 8.73809 15.0954 8.73838 15.0955 8.73856C15.0955 8.73864 15.0955 8.73868 15.0955 8.73873C15.0955 8.73874 15.0955 8.73872 15.348 8.6919C15.6005 8.64507 15.6005 8.64499 15.6005 8.64489C15.6004 8.64482 15.6004 8.64468 15.6004 8.64454C15.6003 8.64424 15.6003 8.64383 15.6002 8.6433C15.6 8.64225 15.5997 8.64073 15.5993 8.63876C15.5986 8.63481 15.5975 8.62904 15.596 8.62151C15.5931 8.60644 15.5888 8.58432 15.5832 8.55561C15.5718 8.49818 15.5548 8.41439 15.5322 8.30799C15.4869 8.09522 15.4191 7.79186 15.3286 7.42805C15.1478 6.70118 14.8755 5.72951 14.51 4.75571C14.1456 3.78493 13.6831 2.79697 13.1168 2.04711C12.5551 1.30324 11.8517 0.743207 11.0002 0.743207V1.25679Z" fill="white"/></svg>
                            Buy Now
                        </a>

                        <button name='watch' className='text-white flex gap-4 px-6 py-2'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20C12.1819 20 13.3522 19.7672 14.4442 19.3149C15.5361 18.8626 16.5282 18.1997 17.364 17.364C18.1997 16.5282 18.8626 15.5361 19.3149 14.4442C19.7672 13.3522 20 12.1819 20 11C20 9.8181 19.7672 8.64778 19.3149 7.55585C18.8626 6.46392 18.1997 5.47177 17.364 4.63604C16.5282 3.80031 15.5361 3.13738 14.4442 2.68508C13.3522 2.23279 12.1819 2 11 2C8.61305 2 6.32387 2.94821 4.63604 4.63604C2.94821 6.32387 2 8.61305 2 11C2 13.3869 2.94821 15.6761 4.63604 17.364C6.32387 19.0518 8.61305 20 11 20ZM11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22Z" fill="white"/><path d="M15 10.9999L9 15.3299V6.66992L15 10.9999Z" fill="white"/></svg>
                            watch video
                        </button>

                    </div>

                    {/* Button learn mopre */}
                    <a href="#" className='flex text-sm w-[220px] rounded-full justify-center items-center py-3 text-white gap-4 mt-10 border-2 border-white'>
                        scroll to learn more
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8375 19.0013C13.6881 19.0018 13.5405 18.9688 13.4055 18.9048C13.2705 18.8407 13.1516 18.7473 13.0575 18.6313L8.22749 12.6313C8.08041 12.4523 8 12.2279 8 11.9963C8 11.7646 8.08041 11.5402 8.22749 11.3613L13.2275 5.36125C13.3972 5.15704 13.6411 5.02861 13.9056 5.00423C14.17 4.97985 14.4333 5.06151 14.6375 5.23125C14.8417 5.40099 14.9701 5.6449 14.9945 5.90933C15.0189 6.17375 14.9372 6.43704 14.7675 6.64125L10.2975 12.0013L14.6175 17.3613C14.7398 17.508 14.8174 17.6868 14.8413 17.8763C14.8652 18.0659 14.8343 18.2583 14.7522 18.4308C14.6702 18.6034 14.5404 18.7488 14.3783 18.8499C14.2162 18.9509 14.0285 19.0035 13.8375 19.0013Z" fill="white"/><circle cx="12" cy="12" r="11" stroke="white" stroke-width="2"/></svg>
                    </a>

                </div>


            </div>

        </section>

    )
}

export default HeroSection