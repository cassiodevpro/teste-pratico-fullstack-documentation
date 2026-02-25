export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center">
      <div className="w-full mb-6 flex flex-col items-center text-center">
        <span className="text-2xl font-bold text-[#00aaff]">Cássio Moreira de Souza</span>
        <span className="text-lg mt-1">cassiodevpro@gmail.com</span>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <a href="https://linkedin.com/in/cassio-dev-pro" target="_blank" rel="noopener noreferrer" className="underline text-[#00aaff] hover:text-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00aaff]">LinkedIn</a>
          <span className="text-[#00aaff]">|</span>
          <a href="https://github.com/cassio202021041" target="_blank" rel="noopener noreferrer" className="underline text-[#00aaff] hover:text-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00aaff]">GitHub cassio202021041</a>
          <span className="text-[#00aaff]">|</span>
          <a href="https://github.com/cassiodevpro" target="_blank" rel="noopener noreferrer" className="underline text-[#00aaff] hover:text-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00aaff]">GitHub cassiodevpro</a>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-[#00aaff]">Documentação Teste Fullstack</h1>
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
        <a
          href="/frontend-doc"
          className="bg-[#233554] hover:bg-[#00aaff] hover:text-[#162447] transition-colors text-white font-semibold py-4 px-8 rounded-xl text-xl text-center cursor-pointer shadow-lg border border-[#233554] md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#00aaff]"
        >
          Documentação Front-end
        </a>
        <a
          href="/backend-doc"
          className="bg-[#233554] hover:bg-[#00aaff] hover:text-[#162447] transition-colors text-white font-semibold py-4 px-8 rounded-xl text-xl text-center cursor-pointer shadow-lg border border-[#233554] md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#00aaff]"
        >
          Documentação Back-end
        </a>
        <a
          href="/database-doc"
          className="bg-[#233554] hover:bg-[#00aaff] hover:text-[#162447] transition-colors text-white font-semibold py-4 px-8 rounded-xl text-xl text-center cursor-pointer shadow-lg border border-[#233554] md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#00aaff]"
        >
          Banco de Dados (Docker)
        </a>
      </div>
    </div>
  );
}
