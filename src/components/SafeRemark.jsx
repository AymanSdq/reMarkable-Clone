import React from 'react'

function SafeRemark() {

    return (
        <div className='bg-[#9F8476] py-12 flex justify-center items-center'>

            <div className='flex w-[80%] flex-col justify-start gap-10 items-center'>

                <div className='flex  sansita  text-center flex-col gap-2 text-white justify-center items-center'>
                    <p className=''>Filos</p>
                    <h1 className='text-3xl'>Keep your reMarkable safe</h1>
                    <p>Created with function and style in mind, all Folios are made from <br />
                        fine materials and designed to fit your reMarkable 2 perfectly.</p>
                </div>

                <div className='relative'>
                    <img src="/bigpc.png" alt="Big Pc image" />

                    <div className='text-white sansita absolute bottom-[42px]'>
                        <h1 className='text-3xl mb-2'>Folio</h1>
                        <p className='text-sm'>The original sleeve for reMarkable 2. <br />
                        In minimalist polymer weave.</p>
                    </div>

                </div>

                <div className='w-full flex'>

                    <div className='w-1/2 flex'>
                        <img src="/3remark.png" alt="reMarkable three" />
                    </div>

                    <div className='w-1/2 flex flex-col justify-center items-center text-white'>

                        <div className='flex flex-col'>
                            <h1 className='text-4xl mb-3'>Book Folio</h1>
                            <p className=''>Keep your reMarkable in its cover while  <br /> working. Designed in conjunction with  <br /> reMarkable 2, Book Folio is smart and <br /> functional protection for your paper tablet.</p>
                            <a href="#" className='flex text-sm w-[220px] rounded-full justify-center items-center py-3 text-white gap-4 mt-10 border-2 border-white'>
                            scroll to learn more
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8375 19.0013C13.6881 19.0018 13.5405 18.9688 13.4055 18.9048C13.2705 18.8407 13.1516 18.7473 13.0575 18.6313L8.22749 12.6313C8.08041 12.4523 8 12.2279 8 11.9963C8 11.7646 8.08041 11.5402 8.22749 11.3613L13.2275 5.36125C13.3972 5.15704 13.6411 5.02861 13.9056 5.00423C14.17 4.97985 14.4333 5.06151 14.6375 5.23125C14.8417 5.40099 14.9701 5.6449 14.9945 5.90933C15.0189 6.17375 14.9372 6.43704 14.7675 6.64125L10.2975 12.0013L14.6175 17.3613C14.7398 17.508 14.8174 17.6868 14.8413 17.8763C14.8652 18.0659 14.8343 18.2583 14.7522 18.4308C14.6702 18.6034 14.5404 18.7488 14.3783 18.8499C14.2162 18.9509 14.0285 19.0035 13.8375 19.0013Z" fill="white"/><circle cx="12" cy="12" r="11" stroke="white" stroke-width="2"/></svg>
                            </a>
                            <p className='text-center mt-3'>34 SEC</p>
                            <p className='my-4 pl-16'>Built-in magnets mean you can simply <br />snap your reMarkable in place</p>
                            <p className=' pl-16'>Book Folio is available in a fine leather  <br /> finish that ages beautifully</p>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )

}

export default SafeRemark