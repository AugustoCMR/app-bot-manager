import App from "@/App";
import { Background } from "@/components/Background";
import Navbar from "@/components/navbar";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<App />}></Route>
        <Route path="*" element={<Layout />}></Route>
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
      <Navbar />
      <main className="p-6 lg:px-46 md:px-20">
        <Outlet />
      </main>
    </Background>
  )
}