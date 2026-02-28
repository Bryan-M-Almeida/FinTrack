import {
  Bell,
  BellDot,
  ChartColumnIcon,
  CircleCheck,
  Clock,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import "./header.scss";

const Header = () => {
  const notificacoes = 0;

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
              {notificacoes > 0 ? <BellDot /> : <Bell />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
