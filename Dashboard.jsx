export default function Dashboard() {
  return (
    <div className="container">
      <div className="hero">
        <h1>PERSONAL BELLO PRO</h1>
        <p>Treino • Foco • Disciplina • Resultados</p>

        <div className="cards">
          <div className="card">
            <h2>Área do Personal</h2>
            <p>Gerencie alunos, treinos e evolução física.</p>
          </div>

          <div className="card">
            <h2>Área do Aluno</h2>
            <p>Acompanhe treinos, dieta e resultados.</p>
          </div>

          <div className="card">
            <h2>Firebase Integrado</h2>
            <p>Pronto para autenticação e banco em nuvem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}