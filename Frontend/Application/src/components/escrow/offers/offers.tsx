import React from 'react'
import Header from "@/layouts/Header";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FaUser } from "react-icons/fa";

const Offers: React.FC = () => {
    return (
        <div>
            <Header />
        
        <div className="bg-white min-h-screen text-black py-6 px-4">
            
            <div className="max-w-full mx-auto mb-4">
                <h1 className='font-bold text-2xl mb-2'>Puerto Viejo House · <span className="text-gray-500">Interested People</span></h1>
                <div>
                    <p className="text-gray-700">1,310 km away · 2 bedrooms · 2 beds · 1 bathroom</p>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                            <th className="py-3 px-4 text-left">Wallet</th>
                            <th className="py-3 px-4 text-left">Reservation Date</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        <tr className="border-b hover:bg-gray-100">
                            <td className="py-3 px-4 flex items-center">
                                <FaUser className="mr-2" /> QXSZ...23S
                            </td>
                            <td className="py-3 px-4">2024-10-25</td>
                            <td className="py-3 px-4">
                                <button className="bg-green-500 text-white text-lg p-3 me-1 rounded-lg hover:underline"><SlLike /></button>
                                <button className="bg-red-500 text-white text-lg p-3 ms-1 rounded-lg hover:underline"><SlDislike /></button>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="py-3 px-4 flex items-center">
                                <FaUser className="mr-2" /> P2OZ...378
                            </td>
                            <td className="py-3 px-4">2024-10-25</td>
                            <td className="py-3 px-4">
                                <button className="bg-green-500 text-white text-lg p-3 me-1 rounded-lg hover:underline"><SlLike /></button>
                                <button className="bg-red-500 text-white text-lg p-3 ms-1 rounded-lg hover:underline"><SlDislike /></button>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="py-3 px-4 flex items-center">
                                <FaUser className="mr-2" /> QXSZ...23S
                            </td>
                            <td className="py-3 px-4">2024-10-25</td>
                            <td className="py-3 px-4">
                                <button className="bg-green-500 text-white text-lg p-3 me-1 rounded-lg hover:underline"><SlLike /></button>
                                <button className="bg-red-500 text-white text-lg p-3 ms-1 rounded-lg hover:underline"><SlDislike /></button>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="py-3 px-4 flex items-center">
                                <FaUser className="mr-2" /> QXSZ...23S
                            </td>
                            <td className="py-3 px-4">2024-10-25</td>
                            <td className="py-3 px-4">
                                <button className="bg-green-500 text-white text-lg p-3 me-1 rounded-lg hover:underline"><SlLike /></button>
                                <button className="bg-red-500 text-white text-lg p-3 ms-1 rounded-lg hover:underline"><SlDislike /></button>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="py-3 px-4 flex items-center">
                                <FaUser className="mr-2" /> QXSZ...23S
                            </td>
                            <td className="py-3 px-4">2024-10-25</td>
                            <td className="py-3 px-4">
                                <button className="bg-green-500 text-white text-lg p-3 me-1 rounded-lg hover:underline"><SlLike /></button>
                                <button className="bg-red-500 text-white text-lg p-3 ms-1 rounded-lg hover:underline"><SlDislike /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default Offers;