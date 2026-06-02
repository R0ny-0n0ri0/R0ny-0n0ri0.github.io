import ronyBg from "../assets/rony-about.png";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center text-[#F2E4DC] py-20 md:py-24">

      {/* 🖼️ IMAGEM DE FUNDO */}
      <img
        src={ronyBg}
        alt="Rony background"
        className="absolute inset-0 w-full h-full object-cover object-[65%_48%] scale-105"
      />

      {/* 🎨 OVERLAY ESCURO */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/95 via-[#0B0B0D]/85 to-[#0B0B0D]/100"></div>

      {/* 🔥 CAMADA VINHO */}
      <div className="absolute inset-0 bg-[#8B1E2D]/20 mix-blend-multiply"></div>

      {/* 📝 CONTEÚDO */}
      <div className="relative z-10 max-w-4xl px-6 md:px-16 pb-16">

        <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-10 leading-tight">
          Sobre mim
        </h1>

        <p className="text-base md:text-lg text-[#D9B8A5] leading-relaxed mb-6">
          Atuo como Desenvolvedor Back-End com foco na construção de APIs escaláveis,
          seguras e de alta performance. Tenho experiência sólida utilizando Java com
          Spring Boot, além de trabalhar com integrações e arquitetura de sistemas distribuídos.
        </p>

        <p className="text-base md:text-lg text-[#BFA18F] leading-relaxed mb-6">
          Ao longo da minha trajetória, participei do desenvolvimento de soluções voltadas
          para ambientes corporativos, lidando com dados críticos, performance e confiabilidade.
        </p>

        <p className="text-base md:text-lg text-[#D9B8A5] leading-relaxed">
          Tecnologias principais: Java, Spring Boot, Node.js, AWS, PostgreSQL e integração de sistemas.
        </p>

      </div>

    </section>
  );
}