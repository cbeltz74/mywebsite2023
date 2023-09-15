import { Routes, Route } from "react-router-dom"
import { HomePage, ResumeNew } from "../pages"

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage title="Home" />}></Route>
            <Route path="/ResumeNew" element={<ResumeNew title="Resume" />}></Route>
        </Routes>
    </div>
  )
}
