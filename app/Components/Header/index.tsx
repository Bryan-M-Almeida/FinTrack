"use client";
import {
  Bell,
  BellDot,
  ChartColumnIcon,
  CircleCheck,
  Clock,
  LayoutDashboard,
  Menu,
  TrendingUp,
  X,
} from "lucide-react";
import "./header.scss";

import { useState } from "react";

interface Notificacao {
  id: number;
  mensagem: string;
}

const Header = () => {
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([
    { id: 1, mensagem: "teste" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <TrendingUp size={25} />
            </div>
            <h1>
              Fin
              <span>Track</span>
            </h1>
          </div>

          <div className="menu-container">
            <nav>
              <button>
                <LayoutDashboard size={20} />
                Início
              </button>

              <button>
                <ChartColumnIcon size={20} />
                Estatísticas
              </button>

              <button>
                <Clock size={20} />
                Contas
              </button>

              <button>
                <CircleCheck size={20} />
                Poupança
              </button>
            </nav>

            <div className="config-container">
              <div className="notificacao">
                <button aria-label="Notificações">
                  {notificacoes.length > 0 ? (
                    <BellDot size={20} />
                  ) : (
                    <Bell size={20} />
                  )}
                </button>
              </div>

              <button className="btn-menu" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <div className="perfil-container">
                <button className="icon-perfil"></button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
