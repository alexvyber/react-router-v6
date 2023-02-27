// import Product from './product';
// import ProductsIndex from '/products-index';
import Loadable from "../common/loadable"
import { css } from "@emotion/css"
import { lazy } from "react"
import { Routes, Route } from "react-router-dom"

const Product = Loadable(lazy(() => import("./product")))
const ProductsIndex = Loadable(lazy(() => import("./products-index")))

const ProductsStyles = css`
  display: flex;
  flex-direction: column;
  .Logo {
    width: 125px;
    margin: 0 auto 25px;
  }
`

const Products = () => (
  <div className={ProductsStyles}>
    aaaaaaaa
    <img src="/assets/img/logo.svg" alt="Ultimate Burgers" className="Logo" />
    <Routes>
      <Route path="/" element={<ProductsIndex />} />
      <Route path=":id" element={<Product />} />
    </Routes>
  </div>
)

export default Products
