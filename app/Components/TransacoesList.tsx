"use client";

interface Props {
  transacoes: { id: number; titulo: string; valor: number; tipo: string }[];
}

const TransacoesList = ({ transacoes }: Props) => (
  <>
    <ul className="space-y-2">
      {transacoes.map((t) => (
        <li key={t.id} className="border p-2 rounded flex justify-between">
          <span>
            {t.titulo} ({t.tipo})
          </span>
          <span>R$ {t.valor}</span>
        </li>
      ))}
    </ul>
  </>
);

export default TransacoesList;
