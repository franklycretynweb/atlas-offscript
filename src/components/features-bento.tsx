"use client";

import {
  ShieldCheck,
  Sparkles,
  GitBranch,
  Globe,
  ArrowUpRight,
  Paperclip,
  ChevronDown,
  Webhook,
  Search,
  Filter,
  Database,
  FileDown,
  Copy,
} from "lucide-react";

function FeatureCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-stone-800/60 bg-stone-900/50 ${className}`}
    >
      {children}
    </div>
  );
}

function CodeBackground() {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-stone-900/80 px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden font-mono text-[10px] leading-relaxed text-stone-700 opacity-60">
        <div className="p-4">
          {`User-agent: *\nDisallow: /admin/\nDisallow: /api/internal/\nAllow: /public/\nAllow: /listings/\n\nSitemap: https://example.com/sitemap.xml\n\n# Atlas checks robots.txt\n# Rate limiting: 2 req/s\n# Respects Crawl-delay\n\nUser-agent: AtlasBot\nAllow: /\nCrawl-delay: 1`}
        </div>
      </div>
      <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-stone-700/60 bg-stone-800 shadow-2xl">
        <ShieldCheck className="size-8 text-stone-300" />
      </div>
    </div>
  );
}

function TaskListMockup() {
  return (
    <div className="flex h-48 flex-col items-center justify-center overflow-hidden bg-stone-900/80 px-6">
      <div className="w-full max-w-[280px] space-y-2">
        <div className="flex items-center gap-2 rounded-md bg-stone-800/60 px-3 py-2 text-xs text-stone-400">
          <Sparkles className="size-3 text-emerald-400" />
          <span>Scrapowanie strony...</span>
        </div>
        <div className="space-y-0.5 rounded-lg border border-stone-700/40 bg-stone-800/40 p-3">
          <div className="flex items-baseline gap-2 text-xs">
            <span className="text-stone-600">2.</span>
            <span className="text-stone-400">Wyciąganie pól kontaktu...</span>
          </div>
          <div className="flex items-baseline gap-2 text-xs">
            <span className="text-stone-600">3.</span>
            <span className="font-medium text-stone-200">
              Deduplikacja rekordów...
            </span>
          </div>
          <div className="flex items-baseline gap-2 text-xs">
            <span className="text-stone-600">4.</span>
            <span className="text-stone-400">Wzbogacanie danymi domenowymi...</span>
          </div>
          <div className="flex items-baseline gap-2 text-xs">
            <span className="text-stone-600">5.</span>
            <span className="text-stone-400">Wysyłanie do pipeline...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegrationHub() {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-stone-900/80">
      {/* Lines from center */}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 400 200"
        fill="none"
      >
        <line x1="200" y1="100" x2="100" y2="50" stroke="#3f3f46" strokeWidth="1" />
        <line x1="200" y1="100" x2="300" y2="50" stroke="#3f3f46" strokeWidth="1" />
        <line x1="200" y1="100" x2="100" y2="150" stroke="#3f3f46" strokeWidth="1" />
        <line x1="200" y1="100" x2="300" y2="150" stroke="#3f3f46" strokeWidth="1" />
        <line x1="200" y1="100" x2="340" y2="100" stroke="#3f3f46" strokeWidth="1" />
        <line x1="200" y1="100" x2="60" y2="100" stroke="#3f3f46" strokeWidth="1" />
      </svg>
      {/* Center icon */}
      <div className="relative z-10 flex size-14 items-center justify-center rounded-xl border border-stone-700/60 bg-stone-800 shadow-xl">
        <Database className="size-6 text-emerald-400" />
      </div>
      {/* Orbiting icons */}
      <div className="absolute left-[18%] top-[20%] flex size-9 items-center justify-center rounded-full border border-stone-700/40 bg-stone-800/80">
        <Filter className="size-4 text-stone-400" />
      </div>
      <div className="absolute right-[18%] top-[20%] flex size-9 items-center justify-center rounded-full border border-stone-700/40 bg-stone-800/80">
        <Copy className="size-4 text-stone-400" />
      </div>
      <div className="absolute bottom-[20%] left-[18%] flex size-9 items-center justify-center rounded-full border border-stone-700/40 bg-stone-800/80">
        <FileDown className="size-4 text-stone-400" />
      </div>
      <div className="absolute bottom-[20%] right-[18%] flex size-9 items-center justify-center rounded-full border border-stone-700/40 bg-stone-800/80">
        <Sparkles className="size-4 text-stone-400" />
      </div>
      <div className="absolute right-[10%] top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone-700/40 bg-stone-800/80">
        <Search className="size-4 text-stone-400" />
      </div>
      <div className="absolute left-[10%] top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone-700/40 bg-stone-800/80">
        <GitBranch className="size-4 text-stone-400" />
      </div>
    </div>
  );
}

function UrlInputMockup() {
  return (
    <div className="flex h-48 items-end justify-center overflow-hidden bg-stone-900/80 px-6 pb-6">
      <div className="w-full max-w-md space-y-3">
        <div className="rounded-xl border border-stone-700/40 bg-stone-800/60 px-4 py-3">
          <p className="text-sm text-stone-500">
            Wklej URL, aby rozpocząć scrapowanie...
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-lg bg-stone-800/60 px-3 py-1.5">
            <Globe className="size-3.5 text-emerald-400" />
            <span className="text-xs font-medium text-stone-300">
              Autowykrywanie
            </span>
            <ChevronDown className="size-3 text-stone-500" />
          </div>
          <div className="flex size-7 items-center justify-center rounded-lg border border-stone-700/40 bg-stone-800/40">
            <Paperclip className="size-3.5 text-stone-500" />
          </div>
          <div className="ml-auto flex size-7 items-center justify-center rounded-lg bg-emerald-500">
            <ArrowUpRight className="size-3.5 text-stone-950" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WebhookMockup() {
  return (
    <div className="flex h-48 flex-col items-center justify-center overflow-hidden bg-stone-900/80 px-6">
      <Webhook className="size-8 text-stone-300" />
      <p className="mt-3 font-mono text-xs text-stone-500">POST /webhook</p>
      <div className="mt-2 flex items-center gap-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="h-1 w-1 rounded-full bg-stone-700"
          />
        ))}
      </div>
      <p className="mt-2 text-sm text-stone-300">Zdarzenia w czasie rzeczywistym</p>
    </div>
  );
}

export function FeaturesBento() {
  return (
    <section className="border-b border-stone-800/40 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        {/* Top row — 3 equal columns */}
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard>
            <CodeBackground />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-stone-100">
                Odpowiedzialne scrapowanie
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Atlas domyślnie sprawdza robots.txt, automatycznie ogranicza
                liczbę zapytań i daje pełną kontrolę zgodności per domena.
              </p>
            </div>
          </FeatureCard>

          <FeatureCard>
            <TaskListMockup />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-stone-100">
                Pipeline w jednym przepływie
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Scrapuj, deduplikuj, wzbogacaj i wysyłaj do pipeline w jednym
                zautomatyzowanym przepływie. Bez przełączania zakładek.
              </p>
            </div>
          </FeatureCard>

          <FeatureCard>
            <IntegrationHub />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-stone-100">
                Wybierz swój stack
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Połącz z HubSpot, Salesforce, Sheets, Notion lub wysyłaj
                webhooki. Atlas wpasowuje się w narzędzia, których już używasz.
              </p>
            </div>
          </FeatureCard>
        </div>

        {/* Bottom row — 2 columns (wider left) */}
        <div className="mt-4 grid gap-4 md:grid-cols-[1.6fr_1fr]">
          <FeatureCard>
            <UrlInputMockup />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-stone-100">
                Scrapuj prostym URL-em
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Wklej dowolną publiczną stronę. Atlas automatycznie wykryje strukturę,
                wyciągnie kontakty, firmy i własne pola — bez pisania kodu.
              </p>
            </div>
          </FeatureCard>

          <FeatureCard>
            <WebhookMockup />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-stone-100">
                Webhooki w czasie rzeczywistym
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Wysyłaj zdarzenia przy zmianach etapów, nowych leadach lub ukończonych scrapach.
                Przekazuj dane tam, gdzie potrzebuje ich Twój stack.
              </p>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
