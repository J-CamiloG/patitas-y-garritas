
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-24 mb-24">

            <section id="home" className="bg-white h-screen  flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800  mb-12">
                        </span>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none  text-gray-800">
                            Charm Paws
                            <span className="text-5xl sm:text-7xl">
                            Clinic
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 ">
                            Where every wag, purr, and flutter finds its enchanting haven; where the magic of compassionate care meets the science of veterinary expertise, weaving spells of wellness for your beloved companions.
                        </p>
                        <div className="flex mt-8">
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                schedule
                            </a>
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md">
                                cancel appointment  
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src="https://img.freepik.com/fotos-premium/vista-frontal-gato-birmano-sentado-aislado-blanco_191971-16831.jpg?w=1060" className="max-w-xs md:max-w-lg m-auto"/>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-60 items-center justify-between">
                <section id="services" className="bg-white">
                <h2 className="text-gray-900 text-center  text-3xl md:text-5xl font-extrabold mb-2">Our Services</h2>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                        <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            Clinical
                        </a>
                        <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">surgical intervention </h2>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">is a critical service offering advanced medical solutions for a variety of pet health conditions and situations</p>
                        
                        <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                                Clinical
                            </a>
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Paws Health Check Consultations</h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Our Paws Health Check Consultations provide comprehensive evaluations of your pet's well-being.</p>
                            <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Learn more
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                Clinical
                            </a>
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Paws Lab Diagnostics</h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">At Paws Lab Diagnostics, we offer a comprehensive range of laboratory tests to provide valuable insights into your pet's health</p>
                            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                </section>

                <section id="contact" className="bg-white ">
                <h2 className="text-gray-900 text-center  text-3xl md:text-5xl font-extrabold mb-2">Contact</h2>
                    <div className="container px-6 py-12 mx-auto">
                        <div>
                            <h2 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Chat to our friendly team</h2>
                            <p className="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                                <div>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                                </div>

                                <div>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </span>
                                    
                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Live chat</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p>
                                </div>

                                <div>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </span>
                                    
                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                                </div>

                                <div>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </span>
                                    
                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                                </div>
                            </div>

                            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                                <form>
                                    <div className="-mx-2 md:items-center md:flex">
                                        <div className="flex-1 px-2">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                            <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <div className="flex-1 px-2 mt-4 md:mt-0">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                            <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="w-full mt-4">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                    </div>

                                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Send message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </main>
    );
}
