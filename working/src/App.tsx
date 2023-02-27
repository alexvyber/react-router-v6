import reactLogo from "./assets/react.svg"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      asdf
      {/* <Nav /> */}
      <br />
      <br />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
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
