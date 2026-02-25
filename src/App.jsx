import { Routes, Route, Link } from "react-router-dom";
import FrontendDoc from "./app/frontend-doc/FrontendDoc";
import BackendDoc from "./app/backend-doc/BackendDoc";
import DatabaseDoc from "./app/database-doc/DatabaseDoc";
import './App.css'

function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f2027] to-[#2c5364]">
      <main className="w-full max-w-3xl bg-[rgba(24,38,54,0.85)] rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-8 items-center">
        
        <div className="w-full mb-6 flex flex-col items-center text-center gap-2">
          <span className="text-2xl font-bold text-[#7fd8f5]">
            Cássio Moreira de Souza
          </span>
          <span className="text-lg text-[#e0e6ed]">
            cassiodevpro@gmail.com
          </span>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
            <a href="https://linkedin.com/in/cassio-dev-pro" target="_blank" rel="noopener noreferrer" className="underline text-[#7fd8f5] hover:text-[#e0e6ed] text-center">
              LinkedIn
            </a>
            <a href="https://github.com/cassio202021041" target="_blank" rel="noopener noreferrer" className="underline text-[#7fd8f5] hover:text-[#e0e6ed] text-center">
              GitHub cassio202021041
            </a>
            <a href="https://github.com/cassiodevpro" target="_blank" rel="noopener noreferrer" className="underline text-[#7fd8f5] hover:text-[#e0e6ed] text-center">
              GitHub cassiodevpro
            </a>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-[#7fd8f5] text-center">
          Documentação Teste Fullstack
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full justify-center items-center">
          <div>
            <Link
              to="/frontend-doc"
              className="bg-[#233554] hover:bg-[#7fd8f5] hover:text-[#162447] transition-colors text-[#e0e6ed] font-semibold py-4 px-8 rounded-xl text-xl text-center shadow-lg block"
            >
              Documentação Front-end
            </Link>
          </div>
          <div>
            <Link
              to="/backend-doc"
              className="bg-[#233554] hover:bg-[#7fd8f5] hover:text-[#162447] transition-colors text-[#e0e6ed] font-semibold py-4 px-8 rounded-xl text-xl text-center shadow-lg block"
            >
              Documentação Back-end
            </Link>
          </div>
          <div>
            <Link
              to="/database-doc"
              className="bg-[#233554] hover:bg-[#7fd8f5] hover:text-[#162447] transition-colors text-[#e0e6ed] font-semibold py-4 px-8 rounded-xl text-xl text-center shadow-lg block"
            >
              Banco de Dados (Docker)
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frontend-doc" element={<FrontendDoc />} />
      <Route path="/backend-doc" element={<BackendDoc />} />
      <Route path="/database-doc" element={<DatabaseDoc />} />
    </Routes>
  )
}