// Next_13+ (App Router) maintenance page
// Save this file as: /app/maintenance/page.jsx
// It uses the image at /public/logoeuremo.png
// Tailwind CSS is assumed to be configured in the project.

import Image from 'next/image'

export const metadata = {
    title: 'Manutenção — Euremo',
    description: 'Página temporária de manutenção',
}

export default function MaintenancePage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6">
            <div className="max-w-3xl w-full text-center p-8 rounded-2xl shadow-lg ring-1 ring-gray-100 bg-white">
                <div className="flex justify-center mb-6">
                    <div className="w-36 h-36 relative">
                        <Image
                            src="/logoeuremo.png"
                            alt="Logo Euremo"
                            fill
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 120px, 144px"
                            priority
                        />
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">Estamos em manutenção</h1>
                <p className="text-gray-600 mb-6">Desculpe o transtorno — estamos fazendo atualizações importantes para melhorar seu serviço. Voltaremos em breve.</p>

                <div className="grid gap-4 sm:grid-cols-2 items-center mb-6">
                    <div>
                        <p className="text-sm text-gray-500">Status:</p>
                        <div className="mt-2 inline-flex items-center gap-2">
                            <span className="inline-block w-3 h-3 rounded-full bg-amber-400 animate-pulse" aria-hidden />
                            <span className="text-sm font-medium text-gray-700">Em progresso</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Tempo estimado:</p>
                        <p className="mt-2 text-sm text-gray-700">Aproximadamente 1–2 semanas</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="/"
                        className="inline-block px-5 py-2 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200 ring-1 ring-gray-200"
                        aria-label="Voltar à página inicial"
                    >
                        Voltar ao site
                    </a>

                    <a
                        href="mailto:suporte@euremo.com"
                        className="inline-block px-5 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                        Contatar suporte
                    </a>
                </div>

                <p className="text-xs text-gray-400 mt-6">Se precisar de acesso urgente, entre em contato com nossa equipe.</p>
            </div>
        </main>
    )
}

/*
  Uso alternativo (Pages Router):
  - Salve o mesmo JSX em: /pages/maintenance.jsx
  - Para servir automaticamente em tempo de build como página estática, crie public/maintenance.html

  Observações:
  - Ajuste as cores/linguagem conforme necessário.
  - Se não usa Tailwind, converta as classes para CSS normal.
*/
