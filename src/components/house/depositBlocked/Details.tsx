import React from "react";

const Details: React.FC = () => {
  return (
    <div className="col-span-8 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-black mb-4">
        Payment batch - Escrow Status
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Escrow Description
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-2">
          <p>
            <strong>Creation date:</strong> 25 January 2025
          </p>
          <p>
            <strong>Amount blocked:</strong> $4,000
          </p>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Tenant Information
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Tenant name:</strong> John Smith
          </p>
          <p className="text-sm text-gray-700">
            <strong>Wallet Address:</strong> MJE...XN32
          </p>
          <p className="text-sm text-gray-700">
            <strong>Email Address:</strong> john_st@gmail.com
          </p>
          <p className="text-sm text-gray-700 mt-4">
            <strong>Rental date:</strong> 20 January 2025
          </p>
          <p className="text-sm text-gray-700">
            <strong>Deposit amount:</strong> $4,000
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Owner Information
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Owner name:</strong> Alberto Casas
          </p>
          <p className="text-sm text-gray-700">
            <strong>Wallet Address:</strong> MJE...XN32
          </p>
          <p className="text-sm text-gray-700">
            <strong>Email Address:</strong> albertoCasas100@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
