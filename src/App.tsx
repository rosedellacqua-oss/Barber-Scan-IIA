export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
        <h1 className="text-4xl font-semibold mb-4">Barber Scan IA</h1>
        <p className="text-slate-300 leading-relaxed">
          O deploy no Vercel agora usa Vite + React + Tailwind e está pronto para build.
        </p>
        <div className="mt-6 rounded-2xl bg-slate-950/90 p-4 border border-slate-700">
          <p className="text-sm text-slate-400">
            Atualize <code className="bg-slate-900 px-1 py-0.5 rounded">src/App.tsx</code> com sua aplicação.
          </p>
        </div>
      </div>
    </main>
  );
}
