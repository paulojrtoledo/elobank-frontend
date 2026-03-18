import { useState } from "react";
import { Link } from "react-router-dom";


export function LoginPage() {

  const [cpf, setCpf] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(cpf, password) // temporary console.log

    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      setError("O CPF digitado precisa ter 11 dígitos numéricos")
      return;
    } 
      
    if (password.length !== 6 || !/^\d+$/.test(password)) {
      setError("A senha digitada precisa ter 6 dígitos numéricos")
      return;
    } 
      setError(null)
  }

  return (
    <div>
        <h1>
            Bem-vindo ao Elo Bank
        </h1>

        <p>
            Faça login abaixo e acesse sua conta!
        </p>
        
      <form onSubmit={handleSubmit}>
        <label htmlFor="cpf">
            CPF
        </label>
        <input id="cpf" type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        <label htmlFor="password">
            Senha
        </label>
        <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Entrar</button>
        {error && <p>{error}</p>}
      </form>

      <Link to="/forgot-password">Esqueci minha senha</Link>
      <Link to="/register">Não tem conta na Elo Bank? Cadastre-se</Link>
    </div>
  );
}

