import React from 'react'

function EyeFriendly() {

    return (
        
        <section className='w-full bg-[#152934] flex justify-center items-center'>

            <div className='w-[80%] flex flex-col justify-center items-center py-14 gap-10'>

                <div className='w-[50%] flex text-center flex-col gap-10'>
                    <h1 className='text-white text-6xl  sansita'>An eye-friendly reading experience</h1>
                    <p className='text-white sansita'>Comfortably read PDFs or ebooks for hours on end <br /> without backlight, glare, or eye strain.</p>
                </div>

                <div className='w-full'>
                    <img src="/eyefriendly.jpg" alt="Dev image" />
                </div>


                {/* Info section */}
                <div className='w-full flex flex-col gap-6'>

                    {/* First line */}
                    <div className='w-full flex'>
                        <div className='w-1/2 flex flex-col gap-6 text-white justify-center'>

                            <h1 className='text-white font-bold text-4xl'>Easily make notes on br your documents</h1>
                            <p className='sansita'>Read and review reports and presentations by writing your thoughts <br /> directly onto the page - or add a blank one if ideas really start to flow. <br /> Signing PDFs and taking notes while reading has never been easier.</p>

                            <ul className='flex flex-col gap-8'>
                                <li className='flex items-center gap-4'>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.06383 6.66666C2.25125 6.66666 1.47195 6.89493 0.897375 7.30126C0.322795 7.70759 0 8.25869 0 8.83332V21.8333C0 22.408 0.322795 22.9591 0.897375 23.3654C1.47195 23.7717 2.25125 24 3.06383 24H15.3191C16.1317 24 16.911 23.7717 17.4856 23.3654C18.0602 22.9591 18.383 22.408 18.383 21.8333V8.83332C18.383 8.25869 18.0602 7.70759 17.4856 7.30126C16.911 6.89493 16.1317 6.66666 15.3191 6.66666H3.06383ZM3.06383 7.74999H15.3191C15.7254 7.74999 16.1151 7.86413 16.4024 8.06729C16.6897 8.27046 16.8511 8.54601 16.8511 8.83332V21.8333C16.8511 22.1206 16.6897 22.3962 16.4024 22.5994C16.1151 22.8025 15.7254 22.9167 15.3191 22.9167H3.06383C2.65754 22.9167 2.26789 22.8025 1.9806 22.5994C1.69331 22.3962 1.53191 22.1206 1.53191 21.8333V8.83332C1.53191 8.54601 1.69331 8.27046 1.9806 8.06729C2.26789 7.86413 2.65754 7.74999 3.06383 7.74999Z" fill="white"/><path d="M8.68086 0C7.86829 0 7.08899 0.228273 6.51441 0.634602C5.93983 1.04093 5.61703 1.59203 5.61703 2.16667V15.1667C5.61703 15.7413 5.93983 16.2924 6.51441 16.6987C7.08899 17.1051 7.86829 17.3333 8.68086 17.3333H20.9362C21.7488 17.3333 22.5281 17.1051 23.1026 16.6987C23.6772 16.2924 24 15.7413 24 15.1667V2.16667C24 1.59203 23.6772 1.04093 23.1026 0.634602C22.5281 0.228273 21.7488 0 20.9362 0L8.68086 0ZM8.68086 1.08333H20.9362C21.3425 1.08333 21.7321 1.19747 22.0194 1.40063C22.3067 1.6038 22.4681 1.87935 22.4681 2.16667V15.1667C22.4681 15.454 22.3067 15.7295 22.0194 15.9327C21.7321 16.1359 21.3425 16.25 20.9362 16.25H8.68086C8.27458 16.25 7.88493 16.1359 7.59764 15.9327C7.31035 15.7295 7.14895 15.454 7.14895 15.1667V2.16667C7.14895 1.87935 7.31035 1.6038 7.59764 1.40063C7.88493 1.19747 8.27458 1.08333 8.68086 1.08333Z" fill="white"/><path d="M4.88885 18.2277C4.01259 18.618 3.57446 19.2644 3.57446 20.1667C3.57446 21.52 6.12306 23.8334 8.42144 23.8334H14.3014C16.5508 23.8334 17.9168 22.55 17.9168 21.52V17.3667C17.9168 17.0797 17.7425 16.8044 17.432 16.6011C17.1216 16.3979 16.7004 16.2832 16.2608 16.2824C16.0438 16.2819 15.8288 16.3094 15.6281 16.3632C15.4274 16.417 15.2449 16.4961 15.091 16.5959C14.9371 16.6958 14.8149 16.8145 14.7313 16.9452C14.6477 17.0759 14.6043 17.216 14.6037 17.3577V17.3944" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M5.60272 18.9817V11.721C5.60272 11.4366 5.77582 11.1638 6.08394 10.9626C6.39206 10.7615 6.80996 10.6485 7.2457 10.6485C7.68145 10.6485 8.09934 10.7615 8.40746 10.9626C8.71558 11.1638 8.88868 11.4366 8.88868 11.721V17.0493" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8.88867 17.1667V15.7693C8.88867 15.6466 8.92571 15.525 8.99766 15.4116C9.06962 15.2982 9.17509 15.1952 9.30804 15.1084C9.441 15.0216 9.59885 14.9528 9.77256 14.9058C9.94628 14.8588 10.1325 14.8347 10.3205 14.8347C10.5085 14.8347 10.6947 14.8588 10.8684 14.9058C11.0422 14.9528 11.2 15.0216 11.333 15.1084C11.4659 15.1952 11.5714 15.2982 11.6433 15.4116C11.7153 15.525 11.7523 15.6466 11.7523 15.7693V17.3093" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.7401 17.386V16.436C11.7401 16.1881 11.891 15.9504 12.1595 15.7751C12.428 15.5998 12.7922 15.5013 13.1719 15.5013C13.5517 15.5013 13.9159 15.5998 14.1844 15.7751C14.4529 15.9504 14.6038 16.1881 14.6038 16.436V17.5013" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    Drag and drop file transfer
                                </li>
                                <li className='flex items-center gap-4'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 16.5L18 18M10 1V0V1ZM10 20V19V20ZM19 10H20H19ZM0 10H1H0ZM16.5 3.5L18 2L16.5 3.5ZM2 18L3.5 16.5L2 18ZM2 2L3.5 3.5L2 2Z" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
                                    Readable in sunlight
                                </li>
                                <li className='flex items-center gap-4'>
                                    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.75V21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H16.5V22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6.75H16.5C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V16.5H3V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0L14.25 0L21 6.75ZM2.4 17.775H0V23.7735H1.1865V21.7605H2.391C2.8215 21.7605 3.1875 21.675 3.489 21.501C3.7935 21.3255 4.026 21.0885 4.1835 20.79C4.34698 20.4768 4.42997 20.1278 4.425 19.7745C4.425 19.3995 4.3455 19.0605 4.188 18.759C4.03134 18.4593 3.79183 18.2109 3.498 18.0435C3.198 17.8635 2.8335 17.775 2.4 17.775ZM3.2175 19.7745C3.22291 19.9721 3.17909 20.168 3.09 20.3445C3.01007 20.4982 2.88565 20.6242 2.733 20.706C2.55838 20.7924 2.36524 20.8346 2.1705 20.829H1.182V18.72H2.172C2.499 18.72 2.7555 18.81 2.94 18.9915C3.1245 19.1745 3.2175 19.4355 3.2175 19.7745ZM5.043 17.775V23.7735H7.233C7.8345 23.7735 8.334 23.6535 8.73 23.418C9.13073 23.1782 9.44366 22.8159 9.6225 22.3845C9.8175 21.9345 9.9165 21.3915 9.9165 20.7585C9.9165 20.1285 9.819 19.5915 9.6225 19.146C9.44577 18.7196 9.13584 18.3618 8.739 18.126C8.343 17.892 7.8405 17.775 7.2315 17.775H5.043ZM6.2295 18.7425H7.074C7.446 18.7425 7.749 18.8175 7.9875 18.9705C8.23506 19.1324 8.42183 19.3719 8.5185 19.6515C8.637 19.953 8.6955 20.3295 8.6955 20.781C8.70015 21.0802 8.66586 21.3787 8.5935 21.669C8.54006 21.898 8.43998 22.1135 8.2995 22.302C8.16899 22.4702 7.99608 22.6007 7.7985 22.68C7.567 22.7666 7.32112 22.8084 7.074 22.803H6.2295V18.7425ZM11.844 21.387V23.7735H10.659V17.775H14.481V18.7545H11.844V20.43H14.253V21.387H11.844Z" fill="white"/></svg>
                                    PDF and ebook (ePub) support
                                </li>
                            </ul>


                        </div>
                        <div className="w-1/2 flex">
                            <img src="/signeit.png" alt="Convert" />
                        </div>
                    </div>


                    {/* second line */}
                    <div className='w-full flex'>
                        <div className="w-1/2 flex">
                            <img src="/eye-2.png" alt="Eye friendly" />
                        </div>
                        <div className='w-1/2 flex flex-col gap-6 text-white pl-12'>

                            <h1 className='text-white font-bold text-4xl'>Read web articles on <br />reMarkable with a click</h1>
                            <p className='sansita'>Any web page, simplified and ready to read on your paper tablet <br />
                            with our Google Chrome plug-in, Read on reMarkable.</p>

                            

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )

}

export default EyeFriendly