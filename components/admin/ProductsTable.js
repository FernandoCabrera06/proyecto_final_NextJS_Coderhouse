"use client";
import Image from "next/image";
import Link from "next/link";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { useState, useEffect } from "react";
import Loading from "../../app/catalogo/detail/loading";

const ProductsTable = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/productos/todos`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setItems(data);
      } else {
        console.error("Datos recibidos no son un array:", data);
      }
    } catch (e) {
      console.error("Hubo un error al traer los datos: " + e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
    
  }, []);

  const deleteProduct = async (id) => {
    const idProducto = String(id);
    const docRef = doc(db, "productos", idProducto);
    try {
      setLoading(true);
      await deleteDoc(docRef);
      console.log(`Producto ${id} borrado!`);
      fetchItems(); // Refresca la lista después de eliminar
    } catch (e) {
      console.error("Error al borrar el producto: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Link
            href={`/admin/create/`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Agregar Producto +
          </Link>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Precio
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Stock
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Categoria
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Imagen
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Marca
                  </th>
                  <th
                    scope="col"
                    className="px-16 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Image
                        src={item.img}
                        alt={item.description}
                        width={80}
                        height={80}
                        className="rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.brand}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/admin/edit/${item.id}`}
                        className="bg-transparent hover:bg-green-600 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => deleteProduct(item.id)}
                        className="bg-transparent ml-2 hover:bg-red-500 text-red-700 font-semibold hover:text-white px-4 border border-red-500 hover:border-transparent rounded h-9"
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsTable;
