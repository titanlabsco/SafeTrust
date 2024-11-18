import React from "react";

const AccountOverview: React.FC = () => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2 text-black">
        Account overview
      </h2>
      <table className="w-full text-left border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-black">Creation date</th>
            <th className="px-4 py-2 border-b text-black">Wallet address</th>
            <th className="px-4 py-2 border-b text-black">Email</th>
            <th className="px-4 py-2 border-b text-black">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b text-black">20/09/2022</td>
            <td className="px-4 py-2 border-b text-black">XMD...22DR</td>
            <td className="px-4 py-2 border-b text-black">
              randalVciano@gmail.com
            </td>
            <td className="px-4 py-2 border-b">
              <button className="text-gray-500">...</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountOverview;
