import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Bloqueia acesso a rotas que exigem autenticação.
// Enquanto o estado ainda está sendo hidratado (isLoading), renderiza nada
// para evitar um redirect prematuro antes de saber se o token é válido.
export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
