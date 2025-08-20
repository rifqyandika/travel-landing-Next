"use client";

export default function CardBooking() {
    return (
        <div className="bg-white/30 opa md:rounded-full rounded-lg shadow-md p-4 w-full max-w-5xl mx-auto">
            <form className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                {/* Check In */}
                <select className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-400">
                    <option>Destination</option>
                    <option>Bali</option>
                    <option>Lombok</option>
                    <option>Komodo Land</option>
                </select>

                {/* Check Out */}
                <select className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-400">
                    <option>Date</option>
                    <option>2025-08-23</option>
                    <option>2025-08-24</option>
                    <option>2025-08-25</option>
                </select>

                {/* Adults */}
                <select className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-400">
                    <option>Adult: 1</option>
                    <option>Adult: 2</option>
                    <option>Adult: 3</option>
                    <option>Adult: 4</option>
                </select>

                {/* Children */}
                <select className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-400">
                    <option>Children: 0</option>
                    <option>Children: 1</option>
                    <option>Children: 2</option>
                    <option>Children: 3</option>
                </select>

                {/* Book Button */}
                <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-2 rounded-full bg-slate-900 text-white font-medium hover:bg-orange-600 transition"
                >
                    Book Now →
                </button>
            </form>
        </div>
    );
}
