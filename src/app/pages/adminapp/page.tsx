import Link from "next/link";

export default function AdminApp() {
    return(
        <section className="w-full h-screen flex justify-center items-center">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            User administration
            </h5>
            {/* <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p> */}
            <ul className="my-4 space-y-3">
                <li>
                    <Link href="pages/admit" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ms-3 whitespace-nowrap">Admit patient</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ms-3 whitespace-nowrap">Edit patient</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ms-3 whitespace-nowrap">See patient</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ms-3 whitespace-nowrap">Delete patient</span>
                    </Link>
                </li>
                {/* <li>
                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
                    </a>
                </li> */}
            </ul>
            <div>
                <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                    <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    Why do I need to connect with my wallet?
                </a>
            </div>
            </div>
        </section>
    )
}