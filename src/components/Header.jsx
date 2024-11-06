import React from 'react'

function Header() {
    return (

        <header className='w-full flex justify-around items-center h-[65px]'>
            
            <img src="/logo.svg" alt="Logo" />

            {/* Links menu Header */}
            <div className='flex items-center gap-5 sansita'>
                <a href="#">about remarkable 2</a>
                <a href="#">shop</a>
                <a href="#">for business</a>
                <a href="#">FAQ & Surport</a>
                <a href="#">more</a>
            </div>

            <a href="#" className='sansita flex items-center rounded-full gap-2 bg-[#CB7428] text-white px-4 py-1'>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.57037 4.71533H19.1819L21.0001 19.0003H1.00012L2.57037 4.71533Z" stroke="white" stroke-width="0.77038" stroke-linejoin="round"/><path d="M5.28278 8.6919C5.28278 9.44829 5.89595 10.0615 6.65234 10.0615C7.40873 10.0615 8.02191 9.44829 8.02191 8.6919C8.02191 7.93551 7.40873 7.32233 6.65234 7.32233C5.89595 7.32233 5.28278 7.93551 5.28278 8.6919ZM13.9784 8.6919C13.9784 9.44829 14.5916 10.0615 15.348 10.0615C16.1044 10.0615 16.7176 9.44829 16.7176 8.6919C16.7176 7.93551 16.1044 7.32233 15.348 7.32233C14.5916 7.32233 13.9784 7.93551 13.9784 8.6919ZM6.65234 8.6919C6.90483 8.73872 6.90483 8.73874 6.90483 8.73873C6.90484 8.73868 6.90485 8.73864 6.90486 8.73856C6.9049 8.73838 6.90495 8.73809 6.90502 8.73769C6.90518 8.73688 6.90541 8.73561 6.90574 8.73388C6.90639 8.73044 6.90739 8.72517 6.90873 8.71815C6.91142 8.70411 6.9155 8.68304 6.92098 8.65542C6.93192 8.60017 6.94843 8.51871 6.97053 8.41478C7.01472 8.2069 7.08121 7.90933 7.17009 7.55203C7.34805 6.83666 7.61493 5.88536 7.97121 4.93619C8.32862 3.98399 8.77052 3.04898 9.29336 2.35661C9.82072 1.65824 10.3911 1.25679 11.0002 1.25679V0.743207C10.1486 0.743207 9.44522 1.30324 8.8835 2.04711C8.31725 2.79697 7.85477 3.78493 7.49038 4.75571C7.12486 5.72951 6.85251 6.70118 6.67169 7.42805C6.58119 7.79186 6.5134 8.09522 6.46817 8.30799C6.44555 8.41439 6.42856 8.49818 6.41718 8.55561C6.41149 8.58432 6.40721 8.60644 6.40432 8.62151C6.40288 8.62904 6.40178 8.63481 6.40104 8.63876C6.40067 8.64073 6.40038 8.64225 6.40019 8.6433C6.40009 8.64383 6.40001 8.64424 6.39996 8.64454C6.39993 8.64468 6.3999 8.64482 6.39989 8.64489C6.39987 8.64499 6.39986 8.64507 6.65234 8.6919ZM11.0002 1.25679C11.6092 1.25679 12.1796 1.65824 12.707 2.35661C13.2298 3.04898 13.6717 3.98399 14.0291 4.93619C14.3854 5.88536 14.6523 6.83666 14.8302 7.55203C14.9191 7.90933 14.9856 8.2069 15.0298 8.41478C15.0519 8.51871 15.0684 8.60017 15.0794 8.65542C15.0848 8.68304 15.0889 8.70411 15.0916 8.71815C15.093 8.72517 15.094 8.73044 15.0946 8.73388C15.0949 8.73561 15.0952 8.73688 15.0953 8.73769C15.0954 8.73809 15.0954 8.73838 15.0955 8.73856C15.0955 8.73864 15.0955 8.73868 15.0955 8.73873C15.0955 8.73874 15.0955 8.73872 15.348 8.6919C15.6005 8.64507 15.6005 8.64499 15.6005 8.64489C15.6004 8.64482 15.6004 8.64468 15.6004 8.64454C15.6003 8.64424 15.6003 8.64383 15.6002 8.6433C15.6 8.64225 15.5997 8.64073 15.5993 8.63876C15.5986 8.63481 15.5975 8.62904 15.596 8.62151C15.5931 8.60644 15.5888 8.58432 15.5832 8.55561C15.5718 8.49818 15.5548 8.41439 15.5322 8.30799C15.4869 8.09522 15.4191 7.79186 15.3286 7.42805C15.1478 6.70118 14.8755 5.72951 14.51 4.75571C14.1456 3.78493 13.6831 2.79697 13.1168 2.04711C12.5551 1.30324 11.8517 0.743207 11.0002 0.743207V1.25679Z" fill="white"/></svg>
                Buy Now
            </a>
            
        </header>

    )
}

export default Header