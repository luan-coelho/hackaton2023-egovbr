"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center text-white">
      <div className="bg-green-600 w-[500px] mt-5 p-5 rounded-2xl">
        <h1 className="text-center font-medium text-3xl">Auditoria</h1>
        <div className="mt-2 flex items-center justify-center">
          <ul className="flex gap-2">
            <Link className="bg-white text-zinc-800 p-2 rounded-xl font-medium" href="/contato">
              <li>Página Inicial</li>
            </Link>
            <Link className="bg-white text-zinc-800 p-2 rounded-xl font-medium" href="/contato">
              <li>Avaliação</li>
            </Link>
            <Link className="bg-white text-zinc-800 p-2 rounded-xl font-medium" href="/contato">
              <li>Setor</li>
            </Link>
            <Link className="bg-white text-zinc-800 p-2 rounded-xl font-medium" href="/contato">
              <li>Grupo</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
