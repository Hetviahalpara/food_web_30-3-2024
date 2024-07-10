import React, { useState } from 'react';
import Helmet from '../Components/Helmet';
import ProductCart from './Category.js/ProductCart';
import products from '../Fakedata/products';
import Commonsection from '../Components/CommonSection';
import ReactPaginate from 'react-paginate';

function Allfood() {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Default');

  const productPerPage = 8;
  const visitedProduct = pageNumber * productPerPage;

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting logic
  const sortedProducts = [...filteredProducts];
  if (sortOption === 'Alphabetically:A-Z') {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title)); // Sort A-Z
  } else if (sortOption === 'Alphabetically:Z-A') {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title)); // Sort Z-A
  } else if (sortOption === 'High-Price') {
    sortedProducts.sort((a, b) => b.price - a.price); // Sort high to low price
  } else if (sortOption === 'Low-Price') {
    sortedProducts.sort((a, b) => a.price - b.price); // Sort low to high price
  }

  // Pagination logic
  const displayProduct = sortedProducts.slice(visitedProduct, visitedProduct + productPerPage);
  const pageCount = Math.ceil(sortedProducts.length / productPerPage);

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    setPageNumber(0); // Reset page number to 0 when search term changes
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setPageNumber(0); // Reset page number to 0 when sort option changes
  };

  return (
    <>
      <Helmet title="All Foods">
        <Commonsection title="All Food"></Commonsection>
        <div className="container mb-4">
          <div className="pt-4 d-flex justify-content-between">
            <div className="position-relative">
              <input
                type="text"
                className="w-100 p-1 ps-2 pe-5 rounded"
                placeholder="I'm looking for ...."
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
              <i className="ri-search-line position-absolute"></i>
            </div>
            <div>
              <select name="sort" id="sort" className="p-1 px-2 rounded" onChange={handleSortChange}>
                <option value="Default">Default</option>
                <option value="Alphabetically:A-Z">Alphabetically : A-Z</option>
                <option value="Alphabetically:Z-A">Alphabetically : Z-A</option>
                <option value="High-Price">High Price</option>
                <option value="Low-Price">Low Price</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {displayProduct.map((item) => (
              <div className="col-3" key={item.id}>
                <ProductCart ProductItem={item}></ProductCart>
              </div>
            ))}
          </div>
        </div>
        <div>
          <ReactPaginate pageCount={pageCount} onPageChange={handleChangePage} containerClassName="paginationBttns" />
        </div>
      </Helmet>
    </>
  );
}

export default Allfood;
