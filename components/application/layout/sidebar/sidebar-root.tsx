"use client";

import "./index.css";

import { useSidebar } from "@/contexts/sidebar-context";
import { OptionIcon } from "lucide-react";
import SidebarMenu from "./sidebar-menu";
import SidebarMenuItem from "./sidebar-menu-item";

export default function SidebarRoot() {
  const { isOpen } = useSidebar();

  return (
    <aside className={`${isOpen ? "sidebar-open" : "sidebar-close"}`}>
      <div className={`flex items-center flex-col justify-center gap-3 ${isOpen ? "px-4" : ""}`}>
        <div className="text-black rounded-full p-1">
          <h1>UNITINS</h1>
        </div>
        {isOpen && <div className="text-sm font-medium leading-7 hidden md:block">
          Hackaton 2023
        </div>}
      </div>

      <SidebarMenu>
        <SidebarMenuItem description="Opção 1" pathName="/qrcode">
          <OptionIcon />
        </SidebarMenuItem>
      </SidebarMenu>
    </aside>
  );
}
