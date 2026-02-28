"use client";

import { useState, useEffect } from "react";
import TransacaoForm from "./Components/TransacaoForm";
import TransacoesList from "./Components/TransacoesList";
const Home = () => {
  const [transacoes, setTransacoes] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/transacoes")
      .then((res) => res.json())
      .then((data) => setTransacoes(data));
  }, []);
  return (
    <>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">FinTrack Dashboard</h1>
        <TransacaoForm
          onNovaTransacao={(nova) => setTransacoes([...transacoes, nova])}
        />
        <TransacoesList transacoes={transacoes} />
      </main>
    </>
  );
};

export default Home;
