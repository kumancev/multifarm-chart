export function ToggleDate() {

  return (
    <div className="mt-5">
      <nav className="my-4 bg-[#272d49] rounded-l-2xl rounded-r-2xl" aria-label="Pagination"> 

        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-sm text-gray-200 hover:bg-gray-600 rounded-xl focus:z-20">7d</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-sm text-gray-200 hover:bg-gray-600 rounded-xl focus:z-20 md:inline-flex">14d</a>
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-cente px-4 py-2 text-sm font-sm text-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl focus:z-20">30d</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-sm text-gray-200 hover:bg-gray-600 rounded-xl focus:z-20 md:inline-flex">90d</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-sm text-gray-200 hover:bg-gray-600 rounded-xl focus:z-20 md:inline-flex">180d</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-sm text-gray-200 hover:bg-gray-600 rounded-xl focus:z-20">1y</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-sm text-gray-200 hover:bg-gray-600 rounded-xl focus:z-20">Max</a>
      </nav>
    </div>

  );
}
