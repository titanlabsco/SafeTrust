'use client';

import useNewApartment from '@/hooks/house/new-apartment/useNewApartment';
import React from 'react';
import { CiMoneyBill } from 'react-icons/ci';
import { IoHomeOutline, IoLocationOutline } from 'react-icons/io5';
import ImageField from './image-field/ImageField';

const FormNewApartment = () => {
  const { onSubmit } = useNewApartment();

  return (
    <form
      className="flex gap-10 flex-col md:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          name: '',
          location: '',
          amount: 0,
          details: '',
          rooms: 1,
          bathrooms: 1,
          petFriendly: false,
        });
      }}
    >
      <section className="h-full w-full md:w-1/3 flex flex-col gap-10">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold mb-2">
            Apartment Name <span className="text-red-700 font-bold">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-orange-50 p-2 flex items-center justify-center">
              <IoHomeOutline size={20} className="text-custom-orange" />
            </div>
            <input
              id="name"
              type="text"
              placeholder="Apartment Name"
              name="name"
              className="px-4 py-2 flex-grow text-black focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="font-bold mb-2">
            Location <span className="text-red-700 font-bold">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-orange-50 p-2 flex items-center justify-center">
              <IoLocationOutline size={20} className="text-custom-orange" />
            </div>
            <input
              id="location"
              type="text"
              placeholder="Location"
              name="location"
              className="px-4 py-2 flex-grow text-black focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount" className="font-bold mb-2">
            Amount <span className="text-red-700 font-bold">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-orange-50 p-2 flex items-center justify-center">
              <CiMoneyBill size={20} className="text-custom-orange" />
            </div>
            <input
              id="amount"
              type="number"
              placeholder="Amount to pay"
              name="amount"
              className="px-4 py-2 flex-grow text-black focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="promotion" className="font-bold mb-2">
            Promotion percent <span className="text-red-700 font-bold">*</span>
          </label>
          <div className="flex w-2/5 items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-orange-50 p-2 flex items-center justify-center">
              <CiMoneyBill size={20} className="text-custom-orange" />
            </div>
            <select
              className="px-4 py-2 flex-grow rounded-lg text-black focus:outline-none"
              name="promotion"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="font-bold mb-2">Rooms</label>
            <select className="border border-gray-300 rounded-lg px-4 py-2 w-full text-black mt-3">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <label className="font-bold mb-2">Bathrooms</label>
            <select className="border border-gray-300 rounded-lg px-4 py-2 w-full text-black mt-3">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex items-center">
            <div className="md:mt-10">
              <input
                id="pet-friendly"
                type="checkbox"
                name="pet-friendly"
                className="mr-2"
              />
              <label htmlFor="pet-friendly" className="font-bold">
                Pet friendly
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full w-full md:w-2/3 flex flex-col gap-10">
        <div>
          <label htmlFor="details" className="font-bold mb-2">
            Apartment Details
          </label>
          <textarea
            id="details"
            placeholder="Apartment details"
            name="details"
            className="border mt-2 border-gray-300 rounded-lg px-4 py-2 w-full text-black"
          />
        </div>

        <ImageField />

        <button
          type="submit"
          className="bg-custom-orange text-white rounded-lg px-4 py-4 w-full"
        >
          Regist
        </button>
      </section>
    </form>
  );
};

export default FormNewApartment;
