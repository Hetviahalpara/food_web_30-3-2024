import React from 'react'
import Helmet from "../Components/Helmet"
import ProductCart from './Category.js/ProductCart'
import products from '../Fakedata/products'
import Commonsection from '../Components/CommonSection'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';

function Allfood() {

  const [pageNumber, setpageNumber] = useState(0);

  const productPerPage = 8;
  const visitedProduct = pageNumber * productPerPage;
  const displayProduct = products.slice(visitedProduct,
    visitedProduct + productPerPage)

  const pageCount = Math.ceil(products.length / productPerPage)

  const changepage = ({ selected }) => {
    setpageNumber(selected)
  }

  return (
    <>
      <Helmet title="All Foods">
        <Commonsection title="All Food"></Commonsection>
        <div className='container mb-4'>
          <div className="pt-4 d-flex justify-content-between">
            <div className="position-relative">
              <input type="text" className="w-100 p-1 ps-2 pe-5 rounded" placeholder="I'm looking for ...." />
              {/* <i className="ri-search-eye-line position-absolute"></i> */}
              <i className="ri-search-line position-absolute"></i>
            </div>
            <div>
              <form action="/action_page.php">
                <select name="sort" id="sort" className=" p-1 px-2 rounded">
                  <option value="Default">Default</option>
                  <option value="Alphabetically:A-Z">Alphabetically : A-Z</option>
                  <option value="Alphabetically:Z-A">Alphabetically : Z-A</option>
                  <option value="High-Price">High Price</option>
                  <option value="Low-Price">Low Price</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            {
              displayProduct.map((item) => {
                return (
                  <div className='col-3' key={item.id}>
                    <ProductCart ProductItem={item}></ProductCart>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <ReactPaginate pageCount={pageCount} onPageChange={changepage} containerClassName="paginationBttns"></ReactPaginate>
        </div>
      </Helmet>
    </>
  )
}

export default Allfood