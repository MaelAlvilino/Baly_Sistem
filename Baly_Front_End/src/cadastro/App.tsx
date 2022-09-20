import axios from "axios"
import { useState } from "react"
import { CadastroContainer, CadastroFormButton, CadastroFormButtonContainer, CadastroFormContainer, CadastroFormFirstButton, CadastroHeader } from "./cadastro.styles"
import error from "../imagens/error.jpg"
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [password, setPassword] = useState('')
  const [dt_nasc, setNasci] = useState('')
  const [steps, setSteps] = useState(1);

  const handleAddSteps = () => {
    if (steps === 3) return;

    setSteps(steps + 1);
 };

 const handleRemoveSteps = () => {
    if (steps === 1) return;

    setSteps(steps - 1);
 };
  

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
    <CadastroContainer>
      <CadastroHeader>
            <img src="" alt="Em Andamento" />
            <p>
               Lorem ipsum dolor sit amet, nes as consectetur adipisicing
               Curabitur ut nisi iaculis.
            </p>
         </CadastroHeader>
         <CadastroFormContainer>
        
      {steps === 1 && (
        <>
       <label htmlFor="cadastroNome">Qual o seu nome?</label>
                  <div
                     id="cadastroNome"
                     style={{ position: "relative", height: "max-content" }}
                  >
                     <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>

                  <label htmlFor="cadastroEmail">Qual o seu Sobrenome?</label>
        <div
           id="cadastroEmail"
           style={{ position: "relative", height: "max-content" }}
        >
           <input
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
           />
        </div>

        <label htmlFor="cadastroEmail">Qual a sua data de nascimento?</label>
        <div
           id="cadastroEmail"
           style={{ position: "relative", height: "max-content" }}
        >
           <input
              type="text"
              value={dt_nasc}
              onChange={(e) => setNasci(e.target.value)}
           />
        </div>
        
        

        <label htmlFor="cadastroEmail">Qual o seu telefone?</label>
        <div
           id="cadastroEmail"
           style={{ position: "relative", height: "max-content" }}
        >
           <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
           />
        </div>
        <CadastroFormFirstButton
                           disabled={
                            name && dt_nasc && telefone && sobrenome
                                 ? false
                                 : true
                           }
                           onClick={() => {
                            handleAddSteps();
                           }}
                        >
                           COMEÇAR
                        </CadastroFormFirstButton>
        </>
      )}
      {steps === 2 &&(
        <>
        <label htmlFor="cadastroEmail">Qual o seu CPF?</label>
        <div
           id="cadastroEmail"
           style={{ position: "relative", height: "max-content" }}
        >
           <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
           />
        </div>

        <label htmlFor="cadastroEmail">Qual o seu e-mail?</label>
        <div
           id="cadastroEmail"
           style={{ position: "relative", height: "max-content" }}
        >
           <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
           />
        </div>

        

        <label htmlFor="cadastroEmail">Escolha uma senha :</label>
        <div
           id="cadastroEmail"
           style={{ position: "relative", height: "max-content" }}
        >
           <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
           />
        </div> 

        

        
        <CadastroFormButtonContainer>
                     <CadastroFormButton onClick={handleRemoveSteps}>
                        VOLTAR
                     </CadastroFormButton>
                     <CadastroFormButton
                     disabled={
                      cpf && email && password
                           ? false
                           : true
                     }
                        buttonAdv
                        onClick={funcao}
                     >
                        COMEÇAR
                     </CadastroFormButton>
                  </CadastroFormButtonContainer>
        </>
      )}
      
         </CadastroFormContainer>
    </CadastroContainer>

   
  )
}

export default App
