export default function CardContainer() {
    return(
        <div className="shadow-lg bg-white rounded-md overflow-hidden max-w-xs mx-auto">
            <img className="w-full h-52 object-cover" src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Hotel Room" />
            <div className="py-7 px-6">
                <div className="flex justify-between items-end">
                    <span>Hotel Room</span>
                    <button className="text-blue-500 capitalize border border-gray-300 rounded-md py-1 px-3">view stats</button>
                </div>
                <h1 className="text-2xl font-bold text-gray-800">$250.00</h1>
                <hr className="mt-3 mb-5" />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor...</p>
                <span className="text-gray-400 text-sm mt-2.5 mb-6 block">Posted 2 hrs ago <span></span>New Chicago, ON</span>
                <div>
                    <button className="capitalize bg-blue-500 rounded-md pt-1 pb-1.5 px-3.5 text-white">manage listing</button>
                    <button className="text-gray-500 ml-2">Unpublish</button>
                </div>
            </div>
        </div>
    )
}