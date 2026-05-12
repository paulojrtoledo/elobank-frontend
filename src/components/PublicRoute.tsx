import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Impede que usuário já autenticado acesse rotas públicas como /login e /register.
// Enquanto o estado está sendo hidratado, renderiza nada para evitar
// um redirect prematuro para /dashboard antes de confirmar a autenticação.
export function PublicRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
