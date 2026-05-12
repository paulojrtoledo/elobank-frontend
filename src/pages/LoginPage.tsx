import { useState } from "react";
import { Link } from "react-router-dom";
import { isAxiosError } from "axios";
import { useAuth } from "../contexts/AuthContext";

export function LoginPage() {
  const { login } = useAuth();
  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      setError("O CPF digitado precisa ter 11 dígitos numéricos");
      return;
    }

    if (password.length !== 6 || !/^\d+$/.test(password)) {
      setError("A senha digitada precisa ter 6 dígitos numéricos");
      return;
    }

    setError(null);

    try {
      // Após login bem-sucedido, isAuthenticated torna-se true e o
      // PublicRoute redireciona automaticamente para /dashboard.
      await login(cpf, password);
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        setError(err.response?.data?.message || "Erro ao fazer login");
      } else {
        setError("Erro inesperado");
      }
    }
  }

  return (
    <div>
      <h1>Bem-vindo ao Spendly</h1>

      <p>Faça login abaixo e acesse sua conta!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="cpf">CPF</label>
        <input
          id="cpf"
          type="text"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>

        {error && <p>{error}</p>}
      </form>

      <Link to="/forgot-password">Esqueci minha senha</Link>
      <Link to="/register">Não tem conta na Spendly? Cadastre-se</Link>
    </div>
  );
}
