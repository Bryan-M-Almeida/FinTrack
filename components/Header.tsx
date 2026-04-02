"use client";

import { usePathname } from "next/navigation";
import MenuMobile from "@/components/MenuMobile";
import Link from "next/link";
import "@/styles/header.scss";
import {
  ChartColumn,
  CheckCircle2,
  Clock,
  Flame,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [ofensiva, setOfensiva] = useState<number>(0);
  const [notificacao, setNotificacao] = useState<boolean>(false);
  const pathname = usePathname();
  console.log(notificacao);
  return (
    <header>
      <div className="container">
        {/* Logo */}
        <div className="logo-container">
          <span className="logo">
            <TrendingUp size={24} />
          </span>

          <h1>
            Fin<span>Track</span>
          </h1>
        </div>

        <div className="container-btns">
          {/* Ofensiva (A ser implementado) */}
          {/* <div className="ofensiva">
            <div className="fogo">
              <Flame size={18} className="text-orange-400 fill-orange-500" />
            </div>
            <span>
              {ofensiva === 1 ? `${ofensiva} dia` : `${ofensiva} dias`}
            </span>
          </div> */}

          {/* Links */}
          <nav>
            <Link
              href={"/"}
              className={`btnLink ${pathname === "/" ? "text-[#8B5CF6]" : "text-gray-400 hover:text-white/90"}`}
            >
              <LayoutDashboard size={18} /> Início
            </Link>
            <Link
              href={"/estatisticas"}
              className={`btnLink ${pathname === "/estatisticas" ? "text-[#8B5CF6]" : "text-gray-400 hover:text-white/90"}`}
            >
              <ChartColumn size={18} /> Estatísticas
            </Link>
            <Link
              href={"/contas"}
              className={`btnLink ${pathname === "/contas" ? "text-[#8B5CF6]" : "text-gray-400 hover:text-white/90"}`}
            >
              <Clock size={18} />
              Contas
            </Link>
            <Link
              href={"/poupanca"}
              className={`btnLink ${pathname === "/poupanca" ? "text-[#8B5CF6]" : "text-gray-400 hover:text-white/90"}`}
            >
              <CheckCircle2 size={18} />
              Poupança
            </Link>
          </nav>

          {/* conta */}
          <div className="conta-container">
            <div className="notificacao">
              <button
                className={`${notificacao ? "text-[#8B5CF6]" : "text-gray-400"}`}
                onClick={() => setNotificacao(!notificacao)}
              >
                <Clock size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <MenuMobile />
    </header>
  );
};

export default Header;
