import Link from "next/link";

export default function DatabaseDoc() {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl font-bold mb-2 text-[#00aaff]">Banco de Dados com Docker</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Pré-requisitos</h2>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Docker instalado e funcionando</li>
        </ul>
      </section>
      <hr className="border-[#233554]" />
      <section>
        <h2 className="text-2xl font-semibold mb-2">Arquivo docker-compose.yml</h2>
        <div className="mb-2 text-lg">Na raiz do projeto, já existe um arquivo <span className="font-mono bg-[#233554] rounded px-1">docker-compose.yml</span> que define o serviço do banco.</div>
        <pre className="bg-[#233554] rounded p-4 text-xs overflow-x-auto mb-2"><code>{`version: '3.8'
services:
  postgres:
    image: postgres:16
    container_name: factory_postgres
    environment:
      POSTGRES_DB: factory
      POSTGRES_USER: factory
      POSTGRES_PASSWORD: factory
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
`}</code></pre>
      </section>
      <hr className="border-[#233554]" />
      <section>
        <h2 className="text-2xl font-semibold mb-2">Inicialização</h2>
        <div className="mb-2 text-lg">Suba o banco de dados com Docker Compose:</div>
        <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2"><code>{`docker compose up -d`}</code></pre>
      </section>
      <hr className="border-[#233554]" />
      <section>
        <h2 className="text-2xl font-semibold mb-2">Acesso</h2>
        <div className="mb-2 text-lg">O banco estará disponível em <span className="font-mono bg-[#233554] rounded px-1">localhost:5432</span>.</div>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Usuário: <span className="font-mono bg-[#233554] rounded px-1">factory</span></li>
          <li>Senha: <span className="font-mono bg-[#233554] rounded px-1">factory</span></li>
          <li>Database: <span className="font-mono bg-[#233554] rounded px-1">factory</span></li>
        </ul>
      </section>
      <hr className="border-[#233554]" />
      <section>
        <h2 className="text-2xl font-semibold mb-2">Dica</h2>
        <div className="mb-2 text-lg">Para parar e remover o banco (incluindo dados):</div>
        <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2"><code>{`docker compose down -v`}</code></pre>
      </section>
      <div className="flex justify-center mt-8">
        <Link href="/" className="bg-[#00aaff] hover:bg-[#233554] transition-colors text-white font-semibold py-3 px-6 rounded-xl text-lg text-center shadow-md border border-[#233554]">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}