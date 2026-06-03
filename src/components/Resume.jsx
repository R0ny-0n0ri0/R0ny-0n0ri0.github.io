export default function Resume() {
  return (
    <section className="min-h-screen bg-[#0B0B0D] text-white px-6 md:px-16 py-24">

      {/* TÍTULO */}
      <h1 className="text-5xl md:text-6xl font-bold mb-16 text-[#F2E4DC]">
        Resume
      </h1>

      <div className="grid md:grid-cols-2 gap-16">

        {/* 🧠 SKILLS */}
        <div>

          <h2 className="text-2xl font-semibold mb-8 text-[#D9B8A5]">
            Skills
          </h2>

          <ul className="space-y-4">

            {[
              "Java",
              "Spring Boot",
              "Spring MVC",
              "Node.js",
              "Quarkus",
              "API REST",
              "JWT",
              "Docker",
              "AWS (Lambda, S3, SQS, SNS, CloudFormation)",
              "PostgreSQL",
              "MySQL",
              "Oracle SQL",
              "Git",
              "Jenkins",
              "SonarQube",
              "JIRA",
              "Scrum",
              "Angular",
              "JavaScript",
              "HTML5",
              "Kotlin",
              "Python",
              "C#",
              "ASP.NET",
              "UML",
              "Levantamento de Requisitos",
              "Arquitetura de Software"
            ].map((skill, i) => (
              <li
                key={i}
                className="bg-white/5 border border-white/10 px-5 py-3 rounded-lg backdrop-blur-md hover:bg-white/10 transition"
              >
                {skill}
              </li>
            ))}

          </ul>

        </div>

        {/* 💼 EXPERIÊNCIA */}
        <div>

          <h2 className="text-2xl font-semibold mb-8 text-[#D9B8A5]">
            Experiência
          </h2>

          <div className="space-y-8">

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
              <h3 className="text-lg font-semibold text-[#F2E4DC]">
                Desenvolvedor Back-End Sênior | Nava
              </h3>
              <p className="text-[#BFA18F] mt-2">
                Santander | Projeto Global de Trade | Atual <br />
                Desenvolvedor Back-End Sênior alocado no Santander, um dos maiores bancos da América Latina. Trabalho na área de Trade, contribuindo para o desenvolvimento de soluções robustas e escaláveis em um projeto global, com foco em performance, segurança e integração de sistemas. Utilizo tecnologias modernas e boas práticas de engenharia de software para entregar produtos de alta qualidade e impacto direto nos negócios internacionais do banco.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
              <h3 className="text-lg font-semibold text-[#F2E4DC]">
                Desenvolvedor Back-End Sênior | Evertec
              </h3>
              <p className="text-[#BFA18F] mt-2">
                Evertec | 09/2024 - 05/2025 <br />
                Atuei no desenvolvimento e manutenção de sistemas financeiros de alta disponibilidade, utilizando principalmente Java como tecnologia principal. Fui responsável pela implementação e evolução de processamentos bancários e transações eletrônicas para grandes bandeiras de pagamento, como Visa e Mastercard, garantindo segurança, performance e confiabilidade nas operações.
               </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
              <h3 className="text-lg font-semibold text-[#F2E4DC]">
                Desenvolvedor Back-End | Deloitte
              </h3>
              <p className="text-[#BFA18F] mt-2">
                SESC | Johnson&Johnson | 03/2023 - 09/2024 <br />
                Profissional experiente em desenvolvimento de software, com sólida expertise em tecnologias Java, JSP, JavaScript, Node.js, e ferramentas de teste como Postman e SoapUI. Com habilidades consolidadas em AWS, conduzo o desenvolvimento e sustentação de sites de forma eficiente e eficaz. Minha experiência abrange desde a arquitetura e o desenvolvimento até a implementação e manutenção de sistemas, garantindo alto desempenho e confiabilidade. Sou apaixonado por solucionar problemas complexos e otimizar processos, sempre buscando a excelência no resultado final. Com um histórico comprovado de entregas bem-sucedidas.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}