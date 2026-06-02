export default function Portfolio() {
  const projects = [
    {
      title: "Sistema de Combustível",
      desc: "Aplicação para cálculo e comparação de preços de combustível",
      tech: "TypeScript"
    },
    {
      title: "API Backend",
      desc: "Desenvolvimento de APIs escaláveis com Spring Boot",
      tech: "Java"
    },
    {
      title: "User System",
      desc: "Sistema de gerenciamento de usuários com autenticação",
      tech: "Java"
    },
    {
      title: "Integrações AWS",
      desc: "Uso de serviços AWS como S3 e Lambda para backend",
      tech: "AWS"
    }
  ];

  return (
    <section className="min-h-screen bg-[#0B0B0D] text-white px-6 md:px-16 py-24">

      {/* TÍTULO */}
      <h1 className="text-5xl md:text-6xl font-bold mb-16 text-[#F2E4DC]">
        Portfolio
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((p, i) => (
          <div
            key={i}
            className="
              group
              relative
              p-8
              rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur-md
              transition
              duration-300
              hover:scale-[1.02]
              hover:bg-white/10
            "
          >

            {/* 🔥 Glow vinho no hover */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-[#8B1E2D]/0
              group-hover:bg-[#8B1E2D]/10
              transition
            "></div>

            {/* CONTEÚDO */}
            <div className="relative z-10">

              <h3 className="text-xl font-semibold text-[#F2E4DC] mb-4">
                {p.title}
              </h3>

              <p className="text-[#BFA18F] mb-6 leading-relaxed">
                {p.desc}
              </p>

              <span className="
                inline-block
                text-sm
                px-4 py-1
                rounded-full
                border border-white/20
                text-[#D9B8A5]
              ">
                {p.tech}
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}