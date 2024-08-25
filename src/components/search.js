export function Search(){
    return (
    <div className="grid grid-cols-3 lg:grid-cols-6 p-4 gap-1.5 lg:gap-5 lg:w-3/4 m-auto ">
        <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 col-span-2 lg:col-span-5 text-black"
        placeholder="Enter Name of Place"
        name="search"
        />
        <button className="rounded-lg bg-blue-500 hover:bg-blue-400"> search</button>
    </div>)
}