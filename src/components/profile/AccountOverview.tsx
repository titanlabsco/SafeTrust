import React from "react";

const AccountOverview: React.FC = () => {
 return (
   <div className="mb-6">
     <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
       Account overview
     </h2>
     <table className="w-full text-left border border-gray-300 dark:border-gray-700 rounded-lg">
       <thead className="bg-gray-100 dark:bg-dark-surface2">
         <tr>
           <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">Creation date</th>
           <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">Wallet address</th>
           <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">Email</th>
           <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">Action</th>
         </tr>
       </thead>
       <tbody className="bg-white dark:bg-dark-surface">
         <tr>
           <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">20/09/2022</td>
           <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">XMD...22DR</td>
           <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">randalVciano@gmail.com</td>
           <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
             <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
               ...
             </button>
           </td>
         </tr>
       </tbody>
     </table>
   </div>
 );
};

export default AccountOverview;