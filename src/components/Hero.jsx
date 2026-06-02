import ronyImg from "../assets/rony.png";

export default function Hero({ setPage }) {
  return (
    <section className="min-h-screen flex items-center bg-[#0B0B0D] text-white pt-16">

      <div className="w-full grid md:grid-cols-2">

        {/* 🧑 LADO ESQUERDO (IMAGEM FULL) */}
        <div className="relative h-[80vh] md:h-screen">

          <img
            src={ronyImg}
            alt="Rony"
            className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
          />

          {/* 🎨 GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A0D12]/80 via-[#0B0B0D]/60 to-[#0B0B0D]"></div>

        </div>

        {/* 📝 LADO DIREITO (TEXTO) */}
        <div className="flex items-center px-6 md:px-16">

          <div className="max-w-xl">

            <p className="text-sm text-[#D9B8A5] tracking-widest uppercase mb-4">
              Back-End Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              RONY <br />
              <span className="text-[#D9B8A5]">ONÓRIO</span>
            </h1>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Formado em Análise e Desenvolvimento de Sistemas, atualmente sou Desenvolvedor Back End Sênior na Nava. Alocado no Santander, um dos maiores bancos da América Latina. Trabalho na área de Trade, contribuindo para o desenvolvimento de soluções robustas e escaláveis em um projeto global. Nessa posição, aplico habilidades avançadas em Docker, JSON, JWT, Jenkins, AWS, AWS CloudFormation, SonarQube, Python, JUnit, ISO8583, Java e Spring Boot para criar soluções robustas e escaláveis.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Java • Spring Boot • Python • Node.js • AWS • PostgreSQL • Oracle SQL Developer • Docker • Jenkins • SonarQube • ISO8583 • JWT • JSON
            </p>

            <div className="mt-8 flex gap-4">

              <button
                onClick={() => setPage('portfolio')}
                className="bg-[#8B1E2D] px-6 py-3 rounded-md text-white hover:opacity-90 transition"
              >
                Ver Projetos
              </button>

              <button
                onClick={() => setPage('about')}
                className="border border-gray-600 px-6 py-3 rounded-md hover:bg-white/5 transition"
              >
                Sobre mim
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}