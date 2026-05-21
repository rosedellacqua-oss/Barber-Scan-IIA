import { useEffect, useState } from 'react';
import { Camera, CheckCircle2, Clock3, Scissors, Sparkles, Upload, UserRound } from 'lucide-react';

type DiagnosticMetric = {
  label: string;
  value: string;
  score: number;
  tone: 'cyan' | 'emerald' | 'amber';
};

const defaultMetrics: DiagnosticMetric[] = [
  { label: 'Oleosidade', value: 'Aguardando leitura', score: 0, tone: 'cyan' },
  { label: 'Densidade', value: 'Sem diagnóstico', score: 0, tone: 'emerald' },
  { label: 'Saúde do couro cabeludo', value: 'Sem diagnóstico', score: 0, tone: 'amber' },
];

const analyzedMetrics: DiagnosticMetric[] = [
  { label: 'Oleosidade', value: 'Moderada', score: 68, tone: 'cyan' },
  { label: 'Densidade', value: 'Boa cobertura', score: 81, tone: 'emerald' },
  { label: 'Saúde do couro cabeludo', value: 'Leve ressecamento frontal', score: 59, tone: 'amber' },
];

const carePlan = [
  'Higienização com shampoo de equilíbrio 3x por semana.',
  'Finalização matte para manter volume sem pesar a raiz.',
  'Retorno em 21 dias para comparar evolução do couro cabeludo.',
];

const upcomingClients = [
  { name: 'Mateus Silva', service: 'Corte + barba', time: '15:30' },
  { name: 'Joao Pedro', service: 'Camuflagem grisalha', time: '16:20' },
  { name: 'Rafael Costa', service: 'Corte social', time: '17:10' },
];

function toneClasses(tone: DiagnosticMetric['tone']) {
  if (tone === 'emerald') {
    return 'bg-emerald-400/10 text-emerald-200 border-emerald-400/20';
  }

  if (tone === 'amber') {
    return 'bg-amber-400/10 text-amber-200 border-amber-400/20';
  }

  return 'bg-cyan-400/10 text-cyan-200 border-cyan-400/20';
}

export default function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisReady, setAnalysisReady] = useState(false);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    setAnalysisReady(false);
    setIsAnalyzing(false);
  }

  function handleAnalysis() {
    if (!selectedFile) {
      return;
    }

    setIsAnalyzing(true);
    setAnalysisReady(false);

    window.setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisReady(true);
    }, 1800);
  }

  const metrics = analysisReady ? analyzedMetrics : defaultMetrics;

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_20%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col gap-8 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
        <header className="grid gap-5 rounded-[30px] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              Barber Scan IA
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Painel real de atendimento com scan capilar, foto do cliente e recomendacao imediata.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Estruture o atendimento da barbearia em uma unica tela: captura, leitura visual, orientacao tecnica e proximo passo comercial.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <div className="flex items-center gap-3 text-cyan-200">
                <Clock3 className="h-5 w-5" />
                <span className="text-sm text-slate-300">Tempo medio</span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-white">2 min</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <div className="flex items-center gap-3 text-emerald-200">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm text-slate-300">Retencao</span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-white">+28%</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <div className="flex items-center gap-3 text-amber-200">
                <Scissors className="h-5 w-5" />
                <span className="text-sm text-slate-300">Servicos guiados</span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-white">12</p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6">
            <div className="rounded-[30px] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Captura do cliente</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Upload ou foto para iniciar o diagnostico</h2>
                </div>
                <label className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20">
                  <Upload className="h-4 w-4" />
                  Selecionar imagem
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                </label>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-dashed border-slate-700 bg-slate-950/80 p-4">
                  {previewUrl ? (
                    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950">
                      <img src={previewUrl} alt="Preview do cliente" className="h-[360px] w-full object-cover" />
                    </div>
                  ) : (
                    <div className="flex h-[360px] flex-col items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,rgba(8,47,73,0.65),rgba(15,23,42,0.92))] px-6 text-center">
                      <div className="rounded-full border border-white/10 bg-white/5 p-4 text-cyan-200">
                        <Camera className="h-7 w-7" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-white">Pronto para escanear</h3>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                        Envie uma foto frontal ou lateral do couro cabeludo para simular o fluxo real de atendimento da barbearia.
                      </p>
                    </div>
                  )}
                </div>

                <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-5">
                  <div className="flex items-center gap-3 text-slate-200">
                    <UserRound className="h-5 w-5 text-cyan-300" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Ficha do cliente</p>
                      <p className="mt-1 text-lg font-semibold text-white">Mateus Silva</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 text-sm text-slate-300">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                      Queixa principal: afinamento na regiao frontal e excesso de oleosidade.
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                      Objetivo: corte curto, visual limpo e orientacao de manutencao em casa.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleAnalysis}
                    disabled={!selectedFile || isAnalyzing}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
                  >
                    {isAnalyzing ? 'Analisando imagem...' : 'Gerar diagnostico'}
                  </button>

                  <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
                    {selectedFile
                      ? `Arquivo selecionado: ${selectedFile.name}`
                      : 'Nenhuma imagem selecionada. O diagnostico habilita quando uma foto for enviada.'}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <section className="rounded-[30px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Leitura tecnica</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Resumo do scan</h2>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {analysisReady ? 'Atualizado agora' : 'Aguardando imagem'}
                  </span>
                </div>

                <div className="mt-6 grid gap-4">
                  {metrics.map((metric) => (
                    <article key={metric.label} className="rounded-3xl border border-slate-800 bg-slate-950/85 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm text-slate-400">{metric.label}</p>
                          <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                        </div>
                        <span className={`rounded-full border px-3 py-1 text-xs ${toneClasses(metric.tone)}`}>
                          {metric.score > 0 ? `${metric.score}%` : '--'}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Orientacao do barbeiro</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Plano de acao e venda assistida</h2>

                <div className="mt-6 rounded-[26px] border border-cyan-400/15 bg-[linear-gradient(135deg,rgba(8,47,73,0.35),rgba(15,23,42,0.95))] p-5">
                  <p className="text-sm text-slate-300">Corte recomendado</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Low fade com textura no topo</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Preserva volume na parte superior, reduz brilho excessivo nas laterais e reforca a sensacao de densidade no contorno frontal.
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {carePlan.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/85 p-4 text-sm leading-relaxed text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className="grid gap-6">
            <section className="rounded-[30px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Operacao</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Fila de atendimento</h2>

              <div className="mt-6 space-y-4">
                {upcomingClients.map((client) => (
                  <article key={`${client.name}-${client.time}`} className="rounded-3xl border border-slate-800 bg-slate-950/85 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-white">{client.name}</p>
                        <p className="mt-1 text-sm text-slate-400">{client.service}</p>
                      </div>
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                        {client.time}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[30px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Fluxo do app</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Como a tela opera</h2>

              <ol className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
                <li className="rounded-2xl border border-slate-800 bg-slate-950/85 p-4">1. Recepcao registra a foto do cliente no inicio do atendimento.</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-950/85 p-4">2. O barbeiro dispara a leitura e apresenta o diagnostico na mesma tela.</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-950/85 p-4">3. O app organiza recomendacao tecnica, produtos e retorno sugerido.</li>
              </ol>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
