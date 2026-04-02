import { Menu, X } from "lucide-react";
import "@/styles/menu.scss";
import { useState } from "react";
const MenuMobile = () => {
  const [open, setOpen] = useState<boolean>();
  return (
    <div id="menu">
      <button onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default MenuMobile;
