import { Routes, Route, Link } from "react-router-dom";
import FrontendDoc from "./app/frontend-doc/FrontendDoc";
import BackendDoc from "./app/backend-doc/BackendDoc";
import DatabaseDoc from "./app/database-doc/DatabaseDoc";
import "./App.css";

function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <main className="w-full max-w-3xl bg-[rgba(24,38,54,0.85)] rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="text-2xl font-bold text-[#f3f6fa]">
            Cássio Moreira de Souza
          </span>
          <div className="text-lg font-bold text-[#f3f6fa]">
            cassiodevpro@gmail.com
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
            <a
              href="https://github.com/cassiodevpro"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-[#7fd8f5] hover:text-[#e0e6ed]"
            >
              GitHub: cassiodevpro
            </a>
            <div> <a
              href="https://github.com/cassio202021041"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-[#7fd8f5] hover:text-[#e0e6ed]"
            >
              GitHub: cassio202021041
            </a></div>
           
            <div>
              <a
                href="https://linkedin.com/in/cassio-dev-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-[#7fd8f5] hover:text-[#e0e6ed]"
              >
                LinkedIn: cassio-dev-pro
              </a>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-[#7fd8f5] text-center">
          Documentação do Teste Fullstack
        </h1>

        <div className="flex flex-col gap-6 w-full">
          <div>
            <Link
              to="/frontend-doc"
              className="link-card text-xl font-bold text-[#f3f6fa] text-center block"
            >
              Front-end
            </Link>
          </div>
          <div>
            <Link
              to="/backend-doc"
              className="link-card text-xl font-bold text-[#f3f6fa] text-center block"
            >
              Back-end
            </Link>
          </div>
          <div>
            <Link
              to="/database-doc"
              className="link-card text-xl font-bold text-[#f3f6fa] text-center block"
            >
              Banco de Dados
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frontend-doc" element={<FrontendDoc />} />
      <Route path="/backend-doc" element={<BackendDoc />} />
      <Route path="/database-doc" element={<DatabaseDoc />} />
    </Routes>
  );
}
