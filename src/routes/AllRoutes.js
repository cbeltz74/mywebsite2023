import { Routes, Route } from "react-router-dom"
import { HomePage } from "../pages"

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage title="Home" />}></Route>
        </Routes>
    </div>
  )
}
