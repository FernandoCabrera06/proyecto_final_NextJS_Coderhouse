"use client";
import React, { useState, useRef, useEffect } from "react";
import Boton from "../ui/Boton";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db, storage } from "@/app/firebase/config";
import Link from "next/link";

const categorias = ["Perros", "Aves", "Gatos", "Reptiles", "Peces", "Otros"];

const EditForm = ({ params }) => {
  const [values, setValues] = useState({
    id: "",
    description: "",
    stock: "",
    img: "",
    price: "",
    suggested: false,
    brand: "",
    discountRate: "",
    category: "",
  });

  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  // Extraer el ID del parámetro
  const id = params?.id || "";

  // Cargar los datos del producto
  useEffect(() => {
    if (!id) return; // No hacer nada si no hay ID

    const fetchProduct = async () => {
      try {
        const productDocRef = doc(db, "productos", id);
        const productDoc = await getDoc(productDocRef);
        if (productDoc.exists()) {
          console.table(productDoc.data())
          setValues(productDoc.data());
        } else {
          console.log("No se encontró el producto.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      console.error("ID del producto no está disponible");
      return;
    }

    try {
      // Subir la nueva imagen si se ha seleccionado un archivo
      if (file) {
        const storageRef = ref(storage, `images/${id.toString()}`);
        const fileSnapshot = await uploadBytes(storageRef, file);
        const fileURL = await getDownloadURL(fileSnapshot.ref);
        setValues((prevValues) => ({
          ...prevValues,
          img: fileURL,
        }));
      }

      // Actualizar el documento en Firestore
      const docRef = doc(db, "productos", id);
      await updateDoc(docRef, values);
      console.log("Producto actualizado!");

      // Limpiar el formulario y los archivos
      setValues({
        id: "",
        description: "",
        stock: "",
        img: "",
        price: "",
        suggested: false,
        brand: "",
        discountRate: "",
        category: "",
      });
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      alert("Error al guardar el producto. Verifica los datos e intenta de nuevo.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 mt-10 max-w-sm mx-auto bg-white rounded-lg shadow-lg border border-gray-300"
    >
      <div className="mb-3">
        <h2 className="flex justify-center">{`Editando el producto nro ${id}`}</h2>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="block text-xs font-medium text-gray-700">
          Descripción:
        </label>
        <input
          className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs"
          type="text"
          id="description"
          name="description"
          value={values.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stock" className="block text-xs font-medium text-gray-700">
          Stock:
        </label>
        <input
          className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs"
          type="number"
          id="stock"
          name="stock"
          value={values.stock}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="img" className="block text-xs font-medium text-gray-700">
          Imagen:
        </label>
        <input
          className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs"
          type="file"
          id="img"
          name="img"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="block text-xs font-medium text-gray-700">
          Precio:
        </label>
        <input
          className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs"
          type="number"
          id="price"
          name="price"
          value={values.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3 flex items-center">
        <input
          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          type="checkbox"
          id="suggested"
          name="suggested"
          checked={values.suggested}
          onChange={handleInputChange}
        />
        <label htmlFor="suggested" className="ml-2 block text-xs font-medium text-gray-700">
          ¿Producto Sugerido?
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="brand" className="block text-xs font-medium text-gray-700">
          Marca:
        </label>
        <input
          className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs"
          type="text"
          id="brand"
          name="brand"
          value={values.brand}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="discountRate" className="block text-xs font-medium text-gray-700">
          Porcentaje de descuento:
        </label>
        <input
          className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs"
          type="number"
          id="discountRate"
          name="discountRate"
          value={values.discountRate}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="block text-xs font-medium text-gray-700">
          Categoría:
        </label>
        <select
          className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs"
          id="category"
          name="category"
          value={values.category}
          onChange={handleInputChange}
        >
          {categorias.map((item) => (
            <option key={item} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <Link
          href={`/admin/`}
          className="bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 py-2 px-4 border rounded"
        >
          Volver
        </Link>
        <Boton
          type="submit"
          className="px-3 py-1 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Guardar
        </Boton>
      </div>
    </form>
  );
};

export default EditForm;
