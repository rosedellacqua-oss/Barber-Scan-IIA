export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_24%)] pointer-events-none" />
      <div className="relative mx-auto flex min-h-screen max-w-[1300px] flex-col gap-10 px-6 py-8 lg:px-10 lg:py-12">
        <header className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-slate-950/75 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Barber Scan IA</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Diagnóstico capilar inteligente para barbearias premium
            </h1>
          </div>
          <div className="space-y-3 text-right">
            <p className="text-sm text-slate-400">Acelere o atendimento com análise de couro cabeludo, densidade e estilo.</p>
            <div className="inline-flex gap-3">
              <button className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Ver demo
              </button>
              <button className="rounded-full border border-slate-600 px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-white">
                Como funciona
              </button>
            </div>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr] xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                Smart Scan</span>
              <h2 className="text-3xl font-semibold text-white">Upload da foto do cliente e receba o diagnóstico instantâneo.</h2>
              <p className="max-w-2xl text-slate-300 leading-relaxed">
                Use a tecnologia de IA para identificar padrões de queda, oleosidade, espessura e recomendações de cuidados para cortes, tratamentos e produtos.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Tempo médio</p>
                <p className="mt-3 text-3xl font-semibold text-white">2 min</p>
              </div>
              <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Precisão</p>
                <p className="mt-3 text-3xl font-semibold text-white">95%</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-700/80 bg-slate-950/80 p-6">
              <h3 className="text-lg font-semibold text-white">Fluxo de uso</h3>
              <ol className="mt-4 space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-xs font-semibold text-slate-950">1</span>
                  Selecionar foto ou usar câmera do celular no atendimento.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-xs font-semibold text-slate-950">2</span>
                  Receber análise de couro cabeludo e sugestões de corte.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-xs font-semibold text-slate-950">3</span>
                  Mostrar o resultado ao cliente e gerar histórico de atendimento.
                </li>
              </ol>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="rounded-[28px] border border-cyan-500/20 bg-gradient-to-br from-slate-950/90 to-slate-900/80 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Painel do profissional</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Resumo da análise</h3>
                </div>
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-200">Atualizado agora</span>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl border border-slate-700/90 bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Nível de oleosidade</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <span className="text-2xl font-semibold text-white">Moderado</span>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">68%</span>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-700/90 bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Densidade dos fios</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <span className="text-2xl font-semibold text-white">Saudável</span>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">80%</span>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-700/90 bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Recomendação</p>
                  <div className="mt-3 text-white">Corte fade curto com finalização matte e tratamento nutritivo semanal.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-700/90 bg-slate-950/90 p-6">
              <h4 className="text-lg font-semibold text-white">Próximo cliente</h4>
              <div className="mt-4 grid gap-4">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/95 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Nome</p>
                  <p className="mt-2 text-lg font-semibold text-white">Mateus Silva</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/95 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Serviço</p>
                    <p className="mt-2 text-white">Barba + Corte</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/95 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Hora</p>
                    <p className="mt-2 text-white">15:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Análise do couro cabeludo',
              desc: 'Detecta oleosidade, ressecamento e sinais de caspa para indicar tratamentos personalizados.',
            },
            {
              title: 'Visagismo e recomendação',
              desc: 'Sugere formas de corte e acabamento baseadas no formato do rosto e estilo do cliente.',
            },
            {
              title: 'Histórico do cliente',
              desc: 'Salva cada atendimento para facilitar follow-up e fidelização da carteira.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-800/90 bg-slate-950/85 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/95">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </section>

        <footer className="rounded-[32px] border border-white/10 bg-slate-950/75 p-6 text-center text-slate-400 shadow-2xl shadow-slate-950/20">
          <p className="text-sm">Barber Scan IA — sistema de atendimento inteligente para barbearias modernas.</p>
        </footer>
      </div>
    </main>
  );
}
