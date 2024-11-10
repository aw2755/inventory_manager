"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 } from 'uuid';
import Header from '@/app/(components)/Header';

type ProductFormData = {
    name: string;
    price: number;
    stock: number;
}

type CreateProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (formData: ProductFormData) => void;
}

const CreateProductModal = ({
    isOpen, 
    onClose, 
    onCreate
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stock: 0,
  });

  const handleSubmit = ((e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stock"
          ? parseFloat(value)
          : value,
    });
  }

  if (!isOpen) return null;

  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product"/>
        <form onSubmit={handleSubmit} className="mt-5">
          {/* PRODUCT NAME */}
          <label 
            htmlFor="productName" 
            className={labelCssStyles}>
            Product Name
          </label>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={handleChange}
            value={formData.name}
            className={inputCssStyles}
            required
          />

          {/* PRICE */}
          <label 
            htmlFor="productPrice" 
            className={labelCssStyles}>
            Price
          </label>
          <input 
            type="number" 
            name="price" 
            placeholder="Price" 
            onChange={handleChange}
            value={formData.price}
            className={inputCssStyles}
            required
          />

          {/* STOCK */}
          <label 
            htmlFor="productStock" 
            className={labelCssStyles}>
            Stock
          </label>
          <input 
            type="number" 
            name="stock" 
            placeholder="Stock" 
            onChange={handleChange}
            value={formData.stock}
            className={inputCssStyles}
            required
          />

          {/* CREATE ACTIONS */}
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Create
          </button>
          <button onClick={onClose} type="button" className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-700">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProductModal