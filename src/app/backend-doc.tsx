import Link from 'next/link';

export default function BackendDoc() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0a2240] to-[#1a2a4a] text-white font-sans flex items-center justify-center py-12 px-4">
      <main className="w-full max-w-3xl bg-[#162447] rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-8">
        <h1 className="text-4xl font-bold mb-2 text-[#00aaff]">🏭 Production Optimizer — Back-end</h1>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Pré-requisitos</h2>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>Java 17+, Maven 3.8+, Docker 24+</li>
          </ul>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            1. Criar projeto no{' '}
            <a
              className="underline text-[#00aaff] cursor-pointer hover:text-[#00d4ff]"
              href="https://start.spring.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              start.spring.io
            </a>
          </h2>
          <div className="mb-2 text-lg">Dependências:</div>
          <div className="bg-[#233554] rounded p-2 text-sm font-mono inline-block mb-4">
            Spring Web · Spring Data JPA · PostgreSQL Driver · Lombok · Validation · DevTools
          </div>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Subir PostgreSQL com Docker</h2>
          <div className="mb-2 text-lg">
            Crie <span className="font-mono bg-[#233554] rounded px-1">docker-compose.yml</span> na raiz:
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs overflow-x-auto mb-2">
            <code>{`version: '3.8'
services:
  postgres:
    image: postgres:16
    container_name: factory_postgres
    environment:
      POSTGRES_DB: factorydb
      POSTGRES_USER: factory_user
      POSTGRES_PASSWORD: factory_pass
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
`}</code>
          </pre>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-4">
            <code>{`docker compose up -d`}</code>
          </pre>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            3. Configurar <span className="font-mono bg-[#233554] rounded px-1">application.properties</span>
          </h2>
          <pre className="bg-[#233554] rounded p-4 text-xs overflow-x-auto mb-2">
            <code>{`server.port=8080

spring.datasource.url=jdbc:postgresql://localhost:5432/factorydb
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.username=factory_user
spring.datasource.password=factory_pass

spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
`}</code>
          </pre>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Rodar o projeto</h2>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-4">
            <code>{`docker compose up -d
mvn spring-boot:run`}</code>
          </pre>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Testes unitários</h2>
          <pre className="bg-[#233554] rounded p-4 text-xs font-mono mb-4">
            <code>{`mvn test`}</code>
          </pre>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Testes de API com Postman</h2>
          <div className="mb-2 text-lg font-semibold">Configuração inicial</div>
          <ol className="list-decimal list-inside text-lg mb-4">
            <li>
              Abra o Postman e crie uma <b>Collection</b> chamada{' '}
              <span className="font-mono bg-[#233554] rounded px-1">Production Optimizer</span>
            </li>
            <li>
              Crie um <b>Environment</b>{' '}
              <span className="font-mono bg-[#233554] rounded px-1">Local</span> com a variável{' '}
              <span className="font-mono bg-[#233554] rounded px-1">base_url = http://localhost:8080</span>
            </li>
            <li>
              Use <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}`}</span> em todas as requisições abaixo
            </li>
          </ol>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h3 className="text-xl font-bold mb-2">Matérias-Primas</h3>
          <div className="mb-2 text-lg">
            POST <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/raw-materials`}</span>
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs overflow-x-auto mb-2">
            <code>{`{
  "code": "MP001",
  "name": "Farinha de Trigo",
  "stockQuantity": 500.0
}`}</code>
          </pre>
          <div className="mb-4 text-sm">
            Resposta esperada: <span className="font-mono bg-[#233554] rounded px-1">201 Created</span>
          </div>
          <div className="mb-2 text-lg">
            GET <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/raw-materials`}</span>
          </div>
          <div className="mb-4 text-sm">
            Resposta esperada: <span className="font-mono bg-[#233554] rounded px-1">200 OK</span> — array com todos os registros
          </div>
          <div className="mb-2 text-lg">
            GET <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/raw-materials/1`}</span>
          </div>
          <div className="mb-4 text-sm">
            Resposta esperada: <span className="font-mono bg-[#233554] rounded px-1">200 OK</span> — objeto da matéria-prima
          </div>
          <div className="mb-2 text-lg">
            PUT <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/raw-materials/1`}</span>
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs overflow-x-auto mb-2">
            <code>{`{
  "code": "MP001",
  "name": "Farinha Integral",
  "stockQuantity": 300.0
}`}</code>
          </pre>
          <div className="mb-4 text-sm">
            Resposta esperada: <span className="font-mono bg-[#233554] rounded px-1">200 OK</span>
          </div>
          <div className="mb-2 text-lg">
            DELETE <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/raw-materials/1`}</span>
          </div>
          <div className="mb-4 text-sm">
            Resposta esperada: <span className="font-mono bg-[#233554] rounded px-1">204 No Content</span>
          </div>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h3 className="text-xl font-bold mb-2">Produtos</h3>
          <div className="mb-2 text-lg">
            POST <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/products`}</span>
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs overflow-x-auto mb-2">
            <code>{`{
  "code": "PRD001",
  "name": "Pao Frances",
  "price": 0.75,
  "ingredients": [
    { "rawMaterialId": 1, "requiredQuantity": 50.0 },
    { "rawMaterialId": 2, "requiredQuantity": 10.0 }
  ]
}`}</code>
          </pre>
          <div className="mb-4 text-sm">
            Resposta esperada: <span className="font-mono bg-[#233554] rounded px-1">201 Created</span>
          </div>
          <div className="mb-2 text-lg">
            GET <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/products`}</span>
          </div>
          <div className="mb-2 text-lg">
            PUT <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/products/1`}</span> — mesmo body do POST com alterações
          </div>
          <div className="mb-2 text-lg">
            DELETE <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/products/1`}</span> — <span className="font-mono bg-[#233554] rounded px-1">204 No Content</span>
          </div>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h3 className="text-xl font-bold mb-2">Otimizacao de Producao</h3>
          <div className="mb-2 text-lg">
            GET <span className="font-mono bg-[#233554] rounded px-1">{`{{base_url}}/api/production/optimize`}</span>
          </div>
          <pre className="bg-[#233554] rounded p-4 text-xs overflow-x-auto mb-2">
            <code>{`{
  "suggestions": [
    {
      "productName": "Bolo de Chocolate",
      "quantityToProduce": 3,
      "totalRevenue": 45.00
    },
    {
      "productName": "Pao Frances",
      "quantityToProduce": 10,
      "totalRevenue": 7.50
    }
  ],
  "totalExpectedRevenue": 52.50
}`}</code>
          </pre>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h3 className="text-xl font-bold mb-2">Cenarios de erro</h3>
          <table className="w-full text-sm mb-4 border border-[#233554]">
            <thead>
              <tr className="bg-[#233554]">
                <th className="p-2">Cenario</th>
                <th className="p-2">Request</th>
                <th className="p-2">Esperado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">ID inexistente</td>
                <td className="p-2">GET /api/products/999</td>
                <td className="p-2">404 Not Found</td>
              </tr>
              <tr>
                <td className="p-2">Body invalido</td>
                <td className="p-2">POST /api/products sem name</td>
                <td className="p-2">400 Bad Request</td>
              </tr>
              <tr>
                <td className="p-2">Sem estoque</td>
                <td className="p-2">GET /api/production/optimize</td>
                <td className="p-2">200 OK lista vazia</td>
              </tr>
            </tbody>
          </table>
        </section>
        <hr className="border-[#233554]" />
        <section>
          <h3 className="text-xl font-bold mb-2">Script de validação automática (aba Tests do Postman)</h3>
          <pre className="bg-[#233554] rounded p-4 text-xs overflow-x-auto mb-2">
            <code>{`pm.test("Status correto", () => {
    pm.response.to.have.status(200);
});

pm.test("Retornou lista", () => {
    pm.expect(pm.response.json()).to.be.an("array");
});

// Salvar ID para proxima requisicao
const body = pm.response.json();
pm.environment.set("product_id", body.id);`}</code>
          </pre>
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
