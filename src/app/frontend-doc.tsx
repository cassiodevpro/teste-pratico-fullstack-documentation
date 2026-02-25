import Link from "next/link";

export default function FrontendDoc() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0a2240] to-[#1a2a4a] text-white font-sans flex items-center justify-center py-12 px-4">
      <main className="w-full max-w-3xl bg-[#162447] rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-8">
        <h1 className="text-4xl font-bold mb-2 text-[#00aaff]">Documentação Front-end (Vue 3)</h1>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Pré-requisitos</h2>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>Node.js (recomendado versão 18 ou superior)</li>
            <li>npm (gerenciador de pacotes do Node)</li>
          </ul>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">Instalação</h2>
          <ol className="list-decimal list-inside text-lg mb-4">
            <li>Abra o terminal e navegue até a pasta do frontend:</li>
          </ol>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2"><code>{`cd /Users/cassiodevpro/Documents/git/teste-pratico-fullstack/frontend`}</code></pre>
          <ol className="list-decimal list-inside text-lg mb-4" start={2}>
            <li>Instale as dependências do projeto:</li>
          </ol>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2"><code>{`npm install`}</code></pre>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">Configuração</h2>
          <div className="mb-2 text-lg">O arquivo principal de configuração é o <span className="font-mono bg-[#233554] rounded px-1">vite.config.js</span>.</div>
          <div className="mb-2 text-lg">O projeto já está pronto para rodar, mas se quiser alterar a porta padrão, edite o <span className="font-mono bg-[#233554] rounded px-1">vite.config.js</span>:</div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2"><code>{`// ...existing code...\nserver: {\n  port: 3000 // Altere para a porta desejada\n}\n// ...existing code...`}</code></pre>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">Execução</h2>
          <div className="mb-2 text-lg">Para iniciar o servidor de desenvolvimento:</div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2"><code>{`npm run dev`}</code></pre>
          <div className="mb-2 text-lg">O terminal mostrará o endereço local (exemplo: <span className="font-mono bg-[#233554] rounded px-1">http://localhost:3000</span>).</div>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">Acesso</h2>
          <div className="mb-2 text-lg">Abra o navegador e acesse o endereço informado pelo terminal.</div>
          <div className="mb-2 text-lg">O frontend estará disponível e integrado ao backend.</div>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">Dicas</h2>
          <div className="mb-2 text-lg">Para build de produção, use:</div>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-2"><code>{`npm run build`}</code></pre>
          <div className="mb-2 text-lg">Os arquivos finais ficarão na pasta <span className="font-mono bg-[#233554] rounded px-1">dist</span>.</div>
          <div className="mb-2 text-lg">Se precisar de configuração extra (como variáveis de ambiente ou integração com o backend), avise!</div>
        </section>
        <div className="flex justify-center mt-8">
           <Link
            href="/"
            className="bg-[#00aaff] hover:bg-[#233554] transition-colors text-white font-semibold py-3 px-6 rounded-xl text-lg text-center cursor-pointer shadow-md border border-[#233554]"
          >
            Voltar para Home
          </Link>
        </div>
      </main>
    </div>
  );
}
