import axios from "axios";
import { useEffect, useState } from "react";

function Usuario() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const procurarDados = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/Procedimento`);

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const listarDados = async () => {
    const response = await procurarDados();

    let primeiroProc = response.data;
    console.log(primeiroProc);
    setA(String(primeiroProc).substring(0, 15));
    setB(String(primeiroProc).substring(16, 33));
    setC(String(primeiroProc).substring(34, 51));
    console.log(a, b, c);
  };

  return (
    <>
      <h1> consultar procedimentos</h1>
      <button onClick={listarDados}> PROCEDIMENTOS</button>
      <p>{a}</p>
      <p>{b}</p>
      <p>{c}</p>
    </>
  );
}
export default Usuario;
