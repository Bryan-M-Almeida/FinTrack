"use client";
import { useState } from "react";

interface Props {
  onNovaTransacao: (nova: any) => void;
}

const TransacaoForm = ({ onNovaTransacao }: Props) => {
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/transacoes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ titulo, valor: Number(valor), tipo }),
    });

    const nova = await res.json();
    onNovaTransacao(nova);
    setTitulo("");
    setValor("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          className="border p-2 rounded"
        />
        <input
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Valor"
          type="number"
          className="border p-2 rounded"
        />
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Adicionar
        </button>
      </form>
    </>
  );
};

export default TransacaoForm;
