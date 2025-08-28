import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";

export const Router = () => {
  const user = true;

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}