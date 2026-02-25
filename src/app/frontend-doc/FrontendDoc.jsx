export default function FrontendDoc() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a2240] to-[#1a2a4a] text-white font-sans flex items-start justify-center py-16 px-4">
      <main className="w-full max-w-3xl bg-[#162447] rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-12 mt-8">
        <header className="w-full flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-[#7fd8f5] text-center mb-2">
            Documentação Front-end (Vue 3)
          </h1>
        </header>
        <section className="w-full flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#7fd8f5] text-center">Pré-requisitos</h2>
          <div className="text-lg mb-4 text-center">
            Node.js (recomendado versão 18 ou superior)<br />
            npm (gerenciador de pacotes do Node)
          </div>
        </section>
        <section className="w-full flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#7fd8f5] text-center">Instalação</h2>
          <div className="text-lg mb-2 text-center">
            Abra o terminal e navegue até a pasta do frontend:
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2 text-center">
            <code>{`cd /Users/cassiodevpro/Documents/git/teste-pratico-fullstack/frontend`}</code>
          </pre>
          <div className="text-lg mb-2 text-center">
            Instale as dependências do projeto:
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2 text-center">
            <code>{`npm install`}</code>
          </pre>
        </section>
        <section className="w-full flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#7fd8f5] text-center">Configuração</h2>
          <div className="mb-2 text-lg text-center">
            O arquivo principal de configuração é o{" "}
            <span className="font-mono bg-[#233554] rounded px-1">
              vite.config.js
            </span>
            .
          </div>
          <div className="mb-2 text-lg text-center">
            O projeto já está pronto para rodar, mas se quiser alterar a porta
            padrão, edite o{" "}
            <span className="font-mono bg-[#233554] rounded px-1">
              vite.config.js
            </span>
            :
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2 text-center">
            <code>{`// ...existing code...
server: {
  port: 3000 // Altere para a porta desejada
}
// ...existing code...`}</code>
          </pre>
        </section>
        <section className="w-full flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#7fd8f5] text-center">Execução</h2>
          <div className="mb-2 text-lg text-center">
            Para iniciar o servidor de desenvolvimento:
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2 text-center">
            <code>{`npm run dev`}</code>
          </pre>
          <div className="mb-2 text-lg text-center">
            O terminal mostrará o endereço local (exemplo:{" "}
            <span className="font-mono bg-[#233554] rounded px-1">
              http://localhost:3000
            </span>
            ).
          </div>
        </section>
        <section className="w-full flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#7fd8f5] text-center">Acesso</h2>
          <div className="mb-2 text-lg text-center">
            Abra o navegador e acesse o endereço informado pelo terminal.
          </div>
          <div className="mb-2 text-lg text-center">
            O frontend estará disponível e integrado ao backend.
          </div>
        </section>
        <section className="w-full flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#7fd8f5] text-center">Dicas</h2>
          <div className="mb-2 text-lg text-center">Para build de produção, use:</div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2 text-center">
            <code>{`npm run build`}</code>
          </pre>
          <div className="mb-2 text-lg text-center">
            Os arquivos finais ficarão na pasta{" "}
            <span className="font-mono bg-[#233554] rounded px-1">dist</span>.
          </div>
          <div className="mb-2 text-lg text-center">
            Se precisar de configuração extra (como variáveis de ambiente ou integração com o backend), avise!
          </div>
        </section>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-[#7fd8f5] hover:bg-[#233554] transition-colors text-[#162447] font-semibold py-3 px-6 rounded-xl text-lg text-center cursor-pointer shadow-md border border-[#233554]"
          >
            Voltar para Home
          </button>
        </div>
      </main>
    </div>
  );
}
