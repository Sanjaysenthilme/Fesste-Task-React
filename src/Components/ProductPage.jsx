import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  // Fetch product details based on id
  const fetchProductDetail = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/product/${id}`);
      const productData = await response.json();
      setProduct(productData);
    } catch (error) {
      console.error(`Error fetching product details: ${error}`);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-4xl">
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
                <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
                <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                <p className="block font-sans text-bold text-base antialiased font-light leading-relaxed text-inherit">
                      The place is close to Barceloneta Beach and bus stop just
                      2 min by walk and near to "Naviglio" where you can enjoy
                      the main night life in Barcelona.
                    </p> 
                <p className="text-xl font-bold text-gray-900">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
