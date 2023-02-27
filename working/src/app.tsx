import { Navigate, Route, Routes } from "react-router-dom"
import "./app.css"
import Products from "./components/products/products"
import Nav from "./components/common/nav"
import Admin from "./components/admin/admin"

function App() {
  return (
    <div className="App">
      App
      <br />
      <br />
      <Nav />
      <br />
      <Routes>
        <Route path="/" element={<h1>asdfasd!!!f</h1>} />
        <Route path="/a" element={<h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa</h1>} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="*" element={<>Some</>} />
        {/* <Route path="/useReducer" element={<UseReducer />} /> */}
        {/* <Route path="/useMemo" element={<UseMemo />} /> */}
        {/* <Route path="/useCallback" element={<UseCallback />} /> */}
        {/* <Route path="/useRef" element={<UseRef />} /> */}
        {/* <Route path="/useLayoutEffect" element={<UseLayoutEffect />} /> */}
        {/* <Route path="/useId" element={<UseId />} /> */}
      </Routes>
    </div>
  )
}

export default App
