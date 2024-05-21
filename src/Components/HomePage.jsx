import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";

import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate(); 
  const [products, setProducts] = useState([]);

//   search Products
  const [searchQuery, setSearchQuery] = useState("");

//   Products
  const fetchProductData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=5`);
      const responseData = await response.json();
      setProducts(responseData.products);
      console.log(responseData.products);
    } catch (e) {
      console.log(`We got some error from Fetch: ${e}`);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

//   search query section
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const MoveNextPage = (e,id)=>{
    e.preventDefault();
    console.log('product id',id);
    // navigate(`/${titel}:${id}`)
    // navigate(<ProductPage/>)
    navigate(`/product/${id}`);
}

  return (
    <div>
      <Navbar searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="flex flex-row mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-100">
        {filteredProducts && filteredProducts.length
          ? filteredProducts.map((product, index) => (
            <div className=" border-gray-500">

              <ul key={index} className="w-full">
                <li className="mb-4">
                  <div className=" relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width={400}
                      height={400}
                      />
                  </div>
                  <br />
                  <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {product.title}
                    </h5>
                    {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      The place is close to Barceloneta Beach and bus stop just
                      2 min by walk and near to "Naviglio" where you can enjoy
                      the main night life in Barcelona.
                    </p>  */}
                  </div>

                  {/* <div className="block mb-2 pl-4 font-sans text-xl">
                    <span> - ${product.price}</span>
                  </div> */}
                  <div className="p-6 pt-0">
                    <button
                      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                      onClick={(e)=> MoveNextPage(e,product.id)}
                      >
                      Read More
                    </button>
                  </div>
                </li>
              </ul>
              
            </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default HomePage;
