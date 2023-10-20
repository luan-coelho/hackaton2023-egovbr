import Link from 'next/link';
export default function HeaderRoot() {
  return (
    <header className="bg-white flex items-center justify-center text-zinc-800 p-4 flex-col gap-4">
      <div>
        <h1 className="font-bold text-3xl uppercase text-[#FFC82A]">
          <Link href="/">Auditoria</Link>
        </h1>
      </div>

      <div>
        <ul className="font-medium flex gap-2">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/setor">Setor</Link>
          </li>
          <li>
            <Link href="/grupo">Grupo</Link>
          </li>
          <li>
            <Link href="/ouvidoria">Avaliação</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
