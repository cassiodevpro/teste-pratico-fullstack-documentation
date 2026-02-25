export default function DatabaseDoc() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a2240] to-[#1a2a4a] text-white font-sans flex items-start justify-center py-16 px-4">
      <main className="w-full max-w-3xl bg-[#162447] rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-16 mt-8">
        <header className="w-full flex flex-col items-center mb-10">
          <h1 className="text-4xl font-bold text-[#7fd8f5] text-center mb-4">Banco de Dados com Docker</h1>
          <p className="text-lg text-[#e0e6ed] text-center mb-4">
            Documentação para configuração e uso do banco de dados PostgreSQL via Docker.
          </p>
        </header>

        <section className="w-full flex flex-col items-center mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7fd8f5] text-center">Pré-requisitos</h2>
          <div className="text-lg mb-4 text-center">
            Docker instalado e funcionando
          </div>
        </section>

        <section className="w-full flex flex-col items-center mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7fd8f5] text-center">Arquivo docker-compose.yml</h2>
          <div className="mb-4 text-lg text-center">
            Na raiz do projeto, já existe um arquivo <span className="font-mono bg-[#233554] rounded px-1">docker-compose.yml</span> que define o serviço do banco.
          </div>
          <div className="mb-4 text-lg text-center">
            O serviço típico para PostgreSQL é assim:
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs overflow-x-auto mb-4 text-center"><code>{`version: '3.8'
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

        <section className="w-full flex flex-col items-center mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7fd8f5] text-center">Inicialização</h2>
          <div className="mb-4 text-lg text-center">No terminal, navegue até a raiz do projeto:</div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-4 text-center"><code>{`cd /Users/cassiodevpro/Documents/git/teste-pratico-fullstack-documentation`}</code></pre>
          <div className="mb-4 text-lg text-center">Suba o banco de dados com Docker Compose:</div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-4 text-center"><code>{`docker compose up -d`}</code></pre>
        </section>

        <section className="w-full flex flex-col items-center mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7fd8f5] text-center">Acesso</h2>
          <div className="mb-4 text-lg text-center">
            O banco estará disponível em <span className="font-mono bg-[#233554] rounded px-1">localhost:5432</span>.
          </div>
          <div className="text-lg mb-4 text-center">
            Usuário: <span className="font-mono bg-[#233554] rounded px-1">factory</span> <br />
            Senha: <span className="font-mono bg-[#233554] rounded px-1">factory</span> <br />
            Database: <span className="font-mono bg-[#233554] rounded px-1">factory</span>
          </div>
        </section>

        <section className="w-full flex flex-col items-center mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7fd8f5] text-center">Dica</h2>
          <div className="mb-4 text-lg text-center">Para parar e remover o banco (incluindo dados):</div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-4 text-center"><code>{`docker compose down -v`}</code></pre>
          <div className="mb-4 text-lg text-center">
            Se precisar de configuração extra (como scripts de inicialização ou acesso remoto), avise!
          </div>
        </section>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.location.href = "/"}
            className="bg-[#7fd8f5] hover:bg-[#233554] transition-colors text-[#162447] font-semibold py-3 px-6 rounded-xl text-lg text-center cursor-pointer shadow-md border border-[#233554]"
          >
            Voltar para Home
          </button>
        </div>
      </main>
    </div>
  );
}
