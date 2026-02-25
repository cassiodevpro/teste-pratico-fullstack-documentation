export default function Home() {
	return (
		<div className="min-h-screen w-full bg-linear-to-br from-[#0a2240] to-[#1a2a4a] text-white font-sans flex items-center justify-center py-12 px-4">
			<main className="w-full max-w-3xl bg-[#162447] rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-8 items-center">
				<div className="w-full mb-6 flex flex-col items-center text-center">
					<span className="text-2xl font-bold text-[#00aaff]">Cássio Moreira de Souza</span>
					<span className="text-lg mt-1"> cassiodevpro@gmail.com</span>
					<div className="flex flex-wrap justify-center gap-2 mt-2">
						<a href="https://linkedin.com/in/cassio-dev-pro" target="_blank" rel="noopener noreferrer" className="underline text-[#00aaff] hover:text-[#00d4ff]">LinkedIn</a>
						<span>|</span>
						<a href="https://github.com/cassio202021041" target="_blank" rel="noopener noreferrer" className="underline text-[#00aaff] hover:text-[#00d4ff]">GitHub cassio202021041</a>
						<span>|</span>
						<a href="https://github.com/cassiodevpro" target="_blank" rel="noopener noreferrer" className="underline text-[#00aaff] hover:text-[#00d4ff]">GitHub cassiodevpro</a>
					</div>
				</div>
				<h1 className="text-4xl font-bold mb-8 text-[#00aaff]">Documentação Teste Fullstack</h1>
				<div className="flex flex-col md:flex-row gap-6 w-full justify-center">
					<a
						href="/frontend-doc"
						className="bg-[#233554] hover:bg-[#00aaff] transition-colors text-white font-semibold py-4 px-8 rounded-xl text-xl text-center cursor-pointer shadow-lg border border-[#233554] md:w-1/3"
					>
						Documentação Front-end
					</a>
					<a
						href="/backend-doc"
						className="bg-[#233554] hover:bg-[#00aaff] transition-colors text-white font-semibold py-4 px-8 rounded-xl text-xl text-center cursor-pointer shadow-lg border border-[#233554] md:w-1/3"
					>
						Documentação Back-end
					</a>
					<a
						href="/database-doc"
						className="bg-[#233554] hover:bg-[#00aaff] transition-colors text-white font-semibold py-4 px-8 rounded-xl text-xl text-center cursor-pointer shadow-lg border border-[#233554] md:w-1/3"
					>
						Banco de Dados (Docker)
					</a>
				</div>
			</main>
		</div>
	);
}
