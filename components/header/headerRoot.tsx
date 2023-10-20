"use client";

export default function HeaderRoot() {
  return (
    <header className="bg-white flex items-center justify-center text-zinc-800 p-4 flex-col gap-4">
      <div>
        <h1 className="font-bold text-3xl uppercase text-[#FFC82A]">Auditoria</h1>
      </div>

      <div>
        <ul className="font-medium flex gap-2">
          <li>Página</li>
          <li>Página</li>
          <li>Página</li>
          <li>Página</li>
        </ul>
      </div>
    </header>
  );
}
