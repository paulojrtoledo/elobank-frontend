import { useAuth } from "../contexts/AuthContext";

export function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {user?.name}!</p>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
