import App from "@/App";
import { Background } from "@/components/Background";
import Navbar from "@/components/navbar";
import { Route, Routes, useNavigate } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="/" element={<App/>}></Route>
        <Route path="*" element={<Layout/>}></Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes;

const Layout = () => {

  const router = useNavigate();

  router("/");

  return (
    <Background>
      <Navbar/>
    </Background>
  )
}