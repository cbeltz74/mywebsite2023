import { Routes, Route } from "react-router-dom"
import { HomePage, ResumeNew } from "../pages"
import { ProjectDetailsList, CTB } from "../components"

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage title="Home" />}></Route>
            <Route path="/resume" element={<ResumeNew title="Resume" />}></Route>
            <Route path="/projects" element={<ProjectDetailsList title="Projects" />}></Route>
            <Route path="/projects/ctb" element={<CTB title="Covering the Bases" />}></Route>
            <Route path="/projects/toptwins" element={<ProjectDetailsList title="Twins on Topps" />}></Route>
            <Route path="/projects/taxpayerform" element={<ProjectDetailsList title="Taxpayer Form" />}></Route>
            <Route path="/projects/paydate" element={<ProjectDetailsList title="Paydate" />}></Route>
            <Route path="/projects/cinemate" element={<ProjectDetailsList title="Cinemate" />}></Route>
        </Routes>
    </div>
  )
}
