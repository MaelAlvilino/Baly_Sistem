import axios from "axios"
import { useState } from "react"

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [password, setPassword] = useState('')
  const [dt_nasc, setNasci] = useState('')
  

  const json = {
    nome : name,
    email: email,
    password: password,
    sobrenome: sobrenome,
    cpf: cpf,
    telefone: telefone,
    dt_nasc: dt_nasc,
    
  }
  const funcao = (e: any) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/cadastro', json)
      .then(() => {
        console.log("deu certo");
      })
      .catch(() => {
        console.log("deu erro");
      });
  }

  return (
    <form onSubmit={funcao}>

      <h1>hello world</h1>
      <div>
      <div className="wrap-input">
          <input
            type="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="nome"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="nome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
          <input
            type="nome"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            value={dt_nasc}
            onChange={(e) => setNasci(e.target.value)}
          />
        </div>
      </div>
      <button>clica aqui</button>
    </form>
  )
}

export default App
