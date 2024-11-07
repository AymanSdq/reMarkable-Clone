import React from 'react'

function FocusSection() {
    return (
        
        <section className='w-full flex flex-col justify-center items-center py-16 bg-[#071721] gap-16'>

            <div className='w-[80%] flex flex-col justify-center items-center gap-12'>

                <h1 className='text-7xl text-center text-white font-bold'>The only tablet <br /> that helps you  <br /> focus</h1>

                <img src="/focus-image.png" className='h-[700px] w-full object-cover' alt="Focus Image" />

                <p className='text-white'>In a distracted world, reMarkable 2 was designed to not get in your brain’s <br /> way. Free from distractions, you can find the focus you need to think better. <br /> No notifications, social media, or email — just you and your thoughts</p>

            </div>

            <div className='w-full flex flex-col justify-center items-center gap-10'>
                {/* First Section */}
                <div className='w-full flex justify-center items-center techno py-16'>

                    <div className='w-[80%] flex'>
                        <div className='flex w-1/2 text-center flex-col gap-6'>

                            <p className='text-white italic text-sm sansita'>The second-generation CANVAS display</p>

                            <h1 className='text-white text-4xl'> A breakthrough <br /> technology</h1>

                            <p className='text-white'>
                                We’ve spent six years developing technology that <br /> mimics the tactile nature and immediate response of<br /> paper. Qualities that make paper a simple, yet powerful <br /> and flexible tool for thinking. The result is the second-<br /> generation CANVAS display. Twice as fast as its<br /> predecessor, it’s the world’s fastest digital paper.
                            </p>

                        </div>
                        <div className='flex w-1/2'>

                        </div>
                    </div>

                </div>
                {/* Second Section */}
                <div className='w-[80%] flex flex-col justify-center items-center gap-5 '>

                    <div className='w-full grid grid-cols-4'>

                        <div className='flex flex-col justify-center col-span-1 items-center gap-4'>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.5552C1 2.592 3.046 1 5.572 1H23.858C26.382 1 28.428 2.592 28.428 4.5552V8.1104M1 4.5552V29.4448C1 31.408 3.046 33 5.572 33H28.428C30.954 33 33 31.408 33 29.4448V11.3104C33 10.4617 32.5786 9.64778 31.8284 9.04766C31.0783 8.44754 30.0609 8.1104 29 8.1104H5.572C3.046 8.1104 1 6.52 1 4.5552Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.67096 13.0594C6.68313 12.9547 6.72098 12.8529 6.78237 12.7599C6.84375 12.6669 6.92746 12.5845 7.0287 12.5174C7.12994 12.4503 7.24672 12.3999 7.37236 12.3689C7.49801 12.338 7.63004 12.3271 7.76092 12.3371L11.5068 12.6171C14.1617 12.8282 16.7086 13.0818 18.8026 13.3706C20.8435 13.6514 22.5994 13.9834 23.5644 14.3906C23.8124 14.4954 24.0854 14.6362 24.2964 14.829C24.5214 15.0346 24.7344 15.3593 24.6464 15.7617C24.5644 16.1281 24.2694 16.3753 24.0334 16.5241C23.7646 16.6846 23.4699 16.8154 23.1574 16.9129C21.8875 17.3329 19.4975 17.7305 15.7657 18.1208C14.0837 18.2968 12.8428 18.4688 11.9648 18.6296C12.1748 18.6664 12.4028 18.7032 12.6448 18.7384C13.8617 18.9176 15.3947 19.0704 17.0266 19.1872C18.2736 19.2768 19.6085 19.4176 20.7495 19.5984C21.3195 19.6888 21.8545 19.7904 22.3135 19.9048C22.7504 20.0136 23.1974 20.152 23.5334 20.3384C23.7004 20.4304 23.9214 20.5784 24.0674 20.8016C24.2374 21.0631 24.2704 21.3799 24.1024 21.6799C23.9604 21.9359 23.7154 22.1007 23.5254 22.2039C23.3109 22.3155 23.0815 22.4075 22.8414 22.4783C21.8815 22.7743 20.1775 23.0431 17.5436 23.2943C14.9327 23.5438 13.3647 23.8598 12.5078 24.171C12.1658 24.2958 11.9948 24.399 11.9168 24.459C11.9468 24.4958 12.0028 24.5518 12.0978 24.6246C12.2778 24.763 12.5418 24.9174 12.8838 25.079C13.5657 25.4014 14.4467 25.7014 15.3007 25.935L18.5456 26.7717C18.7981 26.8369 19.0078 26.9796 19.1288 27.1685C19.2498 27.3573 19.272 27.5769 19.1906 27.7789C19.1091 27.9809 18.9308 28.1487 18.6947 28.2455C18.4586 28.3422 18.1841 28.36 17.9316 28.2949L14.6707 27.4533L14.6627 27.4509C13.7297 27.1957 12.7078 26.8541 11.8668 26.4565C11.4522 26.2667 11.0657 26.0399 10.7148 25.7806C10.3958 25.5366 10.0748 25.2126 9.94385 24.8094C9.79686 24.3582 9.92085 23.907 10.2838 23.5263C10.6138 23.1815 11.1098 22.9215 11.6818 22.7143C12.8288 22.2983 14.6487 21.9599 17.3066 21.7063C18.8946 21.5543 20.0625 21.4023 20.8935 21.2583C20.7167 21.2261 20.5394 21.196 20.3615 21.1679C19.1995 20.9914 18.027 20.8622 16.8486 20.7808C15.1817 20.6608 13.5817 20.5032 12.2838 20.312C11.7013 20.2301 11.1246 20.1241 10.5558 19.9944C10.0898 19.884 9.61686 19.7424 9.27088 19.5464C9.03182 19.4173 8.84242 19.2376 8.72389 19.0272C8.5619 18.7216 8.6039 18.3952 8.79789 18.128C8.96189 17.9025 9.20588 17.7545 9.39887 17.6585C9.60586 17.5569 9.84586 17.4697 10.1038 17.3929C11.1098 17.0945 12.8628 16.8113 15.5067 16.5345C18.7386 16.1961 20.7765 15.8681 21.9135 15.5737C21.1365 15.3681 19.9645 15.1538 18.4626 14.9474C16.4346 14.6674 13.9407 14.4186 11.3118 14.2098L7.57393 13.9298C7.30994 13.9101 7.06652 13.8074 6.89719 13.6442C6.72786 13.481 6.64649 13.2706 6.67096 13.0594Z" fill="white"/></svg>
                            <p className='text-white'>A paper-like surface</p>
                        </div>

                        <div className='flex flex-col col-span-1 justify-center items-center gap-4'>
                            <svg width="35" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0057 33.6806C11.0219 33.5824 11.0724 33.487 11.1542 33.3998C11.2361 33.3126 11.3477 33.2353 11.4827 33.1724C11.6177 33.1095 11.7734 33.0622 11.9409 33.0332C12.1084 33.0042 12.2845 32.994 12.459 33.0033L17.4535 33.2658C20.9934 33.4638 24.3893 33.7016 27.1812 33.9723C29.9024 34.2355 32.2437 34.5468 33.5303 34.9285C33.861 35.0268 34.2249 35.1588 34.5063 35.3395C34.8063 35.5322 35.0903 35.8367 34.9729 36.214C34.8636 36.5575 34.4703 36.7892 34.1556 36.9287C33.7972 37.0792 33.4043 37.2018 32.9877 37.2932C31.2944 37.6869 28.1078 38.0597 23.132 38.4256C20.8894 38.5906 19.2348 38.7519 18.0641 38.9026C18.3441 38.9371 18.6481 38.9716 18.9708 39.0046C20.5934 39.1726 22.6373 39.3159 24.8132 39.4254C26.4759 39.5094 28.2558 39.6413 29.7771 39.8108C30.5371 39.8956 31.2504 39.9908 31.8624 40.0981C32.445 40.2001 33.041 40.3298 33.489 40.5046C33.7116 40.5908 34.0063 40.7296 34.2009 40.9388C34.4276 41.184 34.4716 41.481 34.2476 41.7623C34.0583 42.0023 33.7316 42.1568 33.4783 42.2535C33.1923 42.3581 32.8864 42.4444 32.5663 42.5107C31.2864 42.7882 29.0144 43.0402 25.5026 43.2757C22.0213 43.5097 19.9307 43.8059 18.7881 44.0977C18.3321 44.2147 18.1041 44.3114 18.0001 44.3677C18.0401 44.4022 18.1148 44.4547 18.2415 44.5229C18.4815 44.6527 18.8334 44.7974 19.2894 44.9489C20.1987 45.2511 21.3734 45.5324 22.512 45.7514L26.8385 46.5358C27.1752 46.5969 27.4549 46.7307 27.6162 46.9078C27.7774 47.0848 27.807 47.2907 27.6985 47.4801C27.5899 47.6694 27.3521 47.8268 27.0373 47.9175C26.7225 48.0082 26.3565 48.0249 26.0199 47.9638L21.672 47.1748L21.6614 47.1726C20.4174 46.9333 19.0548 46.6131 17.9335 46.2404C17.3806 46.0624 16.8654 45.8498 16.3975 45.6066C15.9722 45.3779 15.5442 45.0741 15.3696 44.6962C15.1736 44.2732 15.3389 43.8502 15.8229 43.4932C16.2629 43.17 16.9242 42.9262 17.6868 42.732C19.2161 42.342 21.6427 42.0248 25.1866 41.787C27.3038 41.6445 28.8611 41.502 29.9691 41.367C29.7334 41.3368 29.4969 41.3086 29.2598 41.2823C27.7104 41.1168 26.1471 40.9957 24.5759 40.9193C22.3533 40.8068 20.2201 40.6591 18.4895 40.4798C17.7128 40.4031 16.9438 40.3037 16.1855 40.1821C15.5642 40.0786 14.9336 39.9458 14.4723 39.7621C14.1535 39.6411 13.901 39.4726 13.7429 39.2754C13.5269 38.9889 13.5829 38.6829 13.8416 38.4324C14.0603 38.2209 14.3856 38.0822 14.6429 37.9922C14.9189 37.8969 15.2389 37.8152 15.5829 37.7432C16.9242 37.4634 19.2614 37.1979 22.7866 36.9384C27.0958 36.6212 29.8131 36.3137 31.329 36.0377C30.2931 35.845 28.7305 35.644 26.7279 35.4505C24.0239 35.188 20.6987 34.9548 17.1935 34.759L12.2097 34.4965C11.8577 34.4781 11.5331 34.3818 11.3073 34.2288C11.0816 34.0758 10.9731 33.8786 11.0057 33.6806Z" fill="white"/><path d="M1 1V23.6664L14.7423 34.333" stroke="white" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29 1.00015H28.4274V23.611L14.7423 34.2331L15.2004 34.4331L29 23.7221V1.00015Z" stroke="white"/><path d="M2.14514 6.3335H27.912" stroke="white" stroke-width="2"/><ellipse cx="14.7424" cy="34.1663" rx="1.14519" ry="0.833324" fill="white"/></svg>
                            <p className='text-white'>Incredible responsiveness</p>
                        </div>

                        <div className='flex flex-col col-span-1 justify-center items-center gap-4'>
                            <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.88525 1V23.6666L17.728 34.3333" stroke="white" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.9773 0.999836H28.5255V23.6109L17.728 34.2331L18.0894 34.4331L28.9773 23.722V0.999836Z" stroke="white"/><path d="M7.78882 6.3335H28.1189" stroke="white" stroke-width="2"/><ellipse cx="17.728" cy="34.1668" rx="0.90356" ry="0.833332" fill="white"/><line x1="0.977295" y1="34" x2="15.7053" y2="34" stroke="white"/></svg>
                            <p className='text-white'>Minimal pen-to-ink distance</p>
                        </div>

                        <div className='flex flex-col col-span-1 justify-center items-center gap-4'>
                            <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.66667V25C1 25.7072 1.28095 26.3855 1.78105 26.8856C2.28115 27.3857 2.95942 27.6667 3.66667 27.6667H19.6667C20.3739 27.6667 21.0522 27.3857 21.5523 26.8856C22.0524 26.3855 22.3333 25.7072 22.3333 25V9.456C22.3333 9.10075 22.2623 8.74908 22.1244 8.42166C21.9866 8.09424 21.7847 7.79766 21.5307 7.54933L15.6107 1.76C15.1125 1.27288 14.4434 1.00009 13.7467 1H3.66667C2.95942 1 2.28115 1.28095 1.78105 1.78105C1.28095 2.28115 1 2.95942 1 3.66667V3.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.3333 1V6.33333C14.3333 7.04058 14.6143 7.71885 15.1144 8.21895C15.6145 8.71905 16.2927 9 17 9H22.3333" stroke="white" stroke-width="2" stroke-linejoin="round"/></svg>
                            <p className='text-white'>Crisp black ink</p>
                        </div>

                    </div>

                    <div className='w-full flex'>

                        <div className='w-1/2 text-white py-16 px-10 bg-black'>
                            <p>reMarkable 2 looks and feels like paper. A <br />
                                combination of cutting edge digital paper <br />
                                technology and ultra-thin high-friction  <br />
                                surface materials, allows the second- <br />
                                generation CANVAS display to deliver an <br />
                                unprecedented paper experience.</p>
                        </div>

                        <div className='w-1/2'>
                            <img src="/loosbook.png" alt="looks book" />
                        </div>

                    </div>

                </div>

            </div>
            
        </section>

    )
}

export default FocusSection