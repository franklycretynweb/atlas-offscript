"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

/* ------------------------------------------------------------------ */
/*  CARD MOCKUPS                                                       */
/* ------------------------------------------------------------------ */

function ScrapingMockup() {
  return (
    <div className="flex h-full flex-col justify-end p-4">
      <div className="rounded-lg border border-stone-700/40 bg-stone-900/80 backdrop-blur-sm overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-1.5 border-b border-stone-700/30 px-3 py-2">
          <div className="size-2 rounded-full bg-stone-600" />
          <div className="size-2 rounded-full bg-stone-600" />
          <div className="size-2 rounded-full bg-stone-600" />
          <span className="ml-2 font-mono text-[10px] text-stone-500">atlas scrape</span>
        </div>
        {/* Terminal content */}
        <div className="space-y-1.5 p-3 font-mono text-[10px] leading-relaxed">
          <p className="text-stone-500">$ atlas scrape https://example.com/team</p>
          <p className="text-emerald-400/80">&#10003; Pobrano 248 rekordow</p>
          <p className="text-emerald-400/80">&#10003; Wyciagnieto: imie, email, firma</p>
          <p className="text-emerald-400/80">&#10003; Deduplikacja: 12 duplikatow</p>
          <div className="flex items-center gap-2 pt-1">
            <div className="h-1 w-24 rounded-full bg-stone-700">
              <div className="h-1 w-20 rounded-full bg-emerald-500/70" />
            </div>
            <span className="text-stone-500">236 nowych leadow</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnrichmentMockup() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="w-full max-w-[280px] rounded-lg border border-stone-700/40 bg-stone-900/80 backdrop-blur-sm p-4 space-y-3">
        {/* Contact card header */}
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-stone-700 text-xs font-bold text-stone-300">
            AK
          </div>
          <div>
            <p className="text-xs font-medium text-stone-200">Anna Kowalska</p>
            <p className="text-[10px] text-stone-500">Head of Sales</p>
          </div>
          <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
            Wzbogacony
          </span>
        </div>
        {/* Fields */}
        <div className="space-y-2 border-t border-stone-700/30 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-stone-500">Email</span>
            <span className="text-[10px] text-stone-300">a.kowalska@firma.pl</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-stone-500">Firma</span>
            <span className="text-[10px] text-stone-300">TechCorp Sp. z o.o.</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-stone-500">LinkedIn</span>
            <div className="flex items-center gap-1">
              <div className="size-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-stone-300">Znaleziono</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-stone-500">Pewnosc</span>
            <div className="flex items-center gap-1.5">
              <div className="h-1 w-16 rounded-full bg-stone-700">
                <div className="h-1 w-14 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-[10px] text-emerald-400">92%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineMockup() {
  return (
    <div className="flex h-full items-end justify-center p-4 pb-5">
      <div className="flex w-full max-w-[300px] gap-2">
        {/* Column 1 */}
        <div className="flex-1 space-y-1.5">
          <div className="rounded-md bg-stone-800/80 px-2 py-1.5 text-center">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-stone-400">Nowe</p>
            <p className="text-sm font-bold text-stone-200">24</p>
          </div>
          <div className="rounded-md border border-stone-700/30 bg-stone-900/80 p-2">
            <p className="text-[10px] font-medium text-stone-300">Acme Corp</p>
            <p className="text-[9px] text-stone-500">3 kontakty</p>
          </div>
          <div className="rounded-md border border-stone-700/30 bg-stone-900/80 p-2">
            <p className="text-[10px] font-medium text-stone-300">Nova Ltd</p>
            <p className="text-[9px] text-stone-500">1 kontakt</p>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex-1 space-y-1.5">
          <div className="rounded-md bg-stone-800/80 px-2 py-1.5 text-center">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-amber-400/80">W toku</p>
            <p className="text-sm font-bold text-stone-200">12</p>
          </div>
          <div className="rounded-md border border-amber-500/20 bg-stone-900/80 p-2">
            <p className="text-[10px] font-medium text-stone-300">Bright SA</p>
            <p className="text-[9px] text-stone-500">Demo umowione</p>
          </div>
        </div>
        {/* Column 3 */}
        <div className="flex-1 space-y-1.5">
          <div className="rounded-md bg-stone-800/80 px-2 py-1.5 text-center">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-emerald-400/80">Wygrane</p>
            <p className="text-sm font-bold text-stone-200">8</p>
          </div>
          <div className="rounded-md border border-emerald-500/20 bg-stone-900/80 p-2">
            <p className="text-[10px] font-medium text-stone-300">Zenith IO</p>
            <p className="text-[9px] text-emerald-400/70">Zamkniete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DuplicatesMockup() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="w-full max-w-[280px] space-y-2">
        {/* Record A */}
        <div className="rounded-lg border border-stone-700/40 bg-stone-900/80 p-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-stone-300">Jan Nowak</span>
            <span className="rounded bg-stone-700/60 px-1.5 py-0.5 text-[8px] text-stone-400">Rekord A</span>
          </div>
          <p className="text-[10px] text-stone-500">jan.nowak@firma.pl</p>
          <p className="text-[10px] text-stone-500">firma.pl</p>
        </div>
        {/* Match indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-px flex-1 bg-amber-500/30" />
          <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[9px] font-semibold text-amber-400">
            87% dopasowanie
          </span>
          <div className="h-px flex-1 bg-amber-500/30" />
        </div>
        {/* Record B */}
        <div className="rounded-lg border border-amber-500/20 bg-stone-900/80 p-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-stone-300">Jan K. Nowak</span>
            <span className="rounded bg-stone-700/60 px-1.5 py-0.5 text-[8px] text-stone-400">Rekord B</span>
          </div>
          <p className="text-[10px] text-amber-400/70">j.nowak@firma.pl</p>
          <p className="text-[10px] text-amber-400/70">firma.pl</p>
        </div>
      </div>
    </div>
  );
}

function ExportsMockup() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="w-full max-w-[260px] space-y-3">
        {/* Central hub */}
        <div className="flex items-center justify-center">
          <div className="rounded-lg border border-stone-700/40 bg-stone-900/80 px-3 py-2">
            <p className="text-[10px] font-semibold text-emerald-400">Atlas Export</p>
          </div>
        </div>
        {/* Connection lines + targets */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Sheets", icon: "S" },
            { name: "HubSpot", icon: "H" },
            { name: "CSV", icon: "C" },
          ].map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-1.5">
              <div className="h-3 w-px bg-stone-600" />
              <div className="flex size-8 items-center justify-center rounded-lg border border-stone-700/40 bg-stone-800/80 text-[10px] font-bold text-stone-400">
                {t.icon}
              </div>
              <span className="text-[9px] text-stone-500">{t.name}</span>
            </div>
          ))}
        </div>
        {/* Status line */}
        <div className="rounded-md border border-stone-700/30 bg-stone-900/80 px-3 py-2 text-center">
          <p className="text-[10px] text-stone-400">
            <span className="text-emerald-400">&#10003;</span> 1,284 rekordow wyslanych
          </p>
        </div>
      </div>
    </div>
  );
}

const cardMockups: Record<string, React.ReactNode> = {
  "item-1": <ScrapingMockup />,
  "item-2": <EnrichmentMockup />,
  "item-3": <PipelineMockup />,
  "item-4": <DuplicatesMockup />,
  "item-5": <ExportsMockup />,
};

/* ------------------------------------------------------------------ */
/*  GALLERY COMPONENT                                                  */
/* ------------------------------------------------------------------ */

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  gradient: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Jak to działa",
  demoUrl = "#",
  items = [
    {
      id: "item-1",
      title: "Inteligentne scrapowanie",
      summary:
        "Skieruj Atlas na dowolną publiczną stronę lub listę. Szablony wyciągają imiona, e-maile, firmy i własne pola do uporządkowanych wierszy.",
      url: "#",
      gradient: "from-emerald-900/80 to-stone-900",
    },
    {
      id: "item-2",
      title: "Automatyczne wzbogacanie",
      summary:
        "Atlas wzbogaca kontakty o dane domenowe, profile social media i wnioskowane role. Wskaźniki pewności pomagają ocenić jakość danych.",
      url: "#",
      gradient: "from-sky-900/80 to-stone-900",
    },
    {
      id: "item-3",
      title: "Zarządzanie pipeline",
      summary:
        "Rekordy trafiają do pipeline z etapami, zadaniami, notatkami i automatyzacjami. Tablice kanban utrzymują Twoje deale w ruchu.",
      url: "#",
      gradient: "from-violet-900/80 to-stone-900",
    },
    {
      id: "item-4",
      title: "Wykrywanie duplikatów",
      summary:
        "Dopasowanie rozmyte po imieniu, e-mailu i domenie wyłapuje niemal-duplikaty zanim trafią do pipeline. Auto-merge lub ręczna weryfikacja.",
      url: "#",
      gradient: "from-amber-900/80 to-stone-900",
    },
    {
      id: "item-5",
      title: "Eksporty i integracje",
      summary:
        "Pobieraj CSV w dowolnym momencie. Wysyłaj webhooki przy zmianach etapów do Google Sheets, HubSpot, Salesforce i innych narzędzi.",
      url: "#",
      gradient: "from-rose-900/80 to-stone-900",
    },
  ],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section id="product" className="border-b border-stone-800/40 bg-stone-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-3xl font-semibold text-stone-50 md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            <a
              href={demoUrl}
              className="group flex items-center gap-1 text-sm font-medium text-stone-400 transition-colors hover:text-emerald-400 md:text-base lg:text-lg"
            >
              Umów demo
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-6 flex shrink-0 items-center justify-start gap-2 md:mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="border-stone-700 text-stone-400 hover:bg-stone-800 hover:text-stone-100 disabled:pointer-events-auto disabled:opacity-30"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="border-stone-700 text-stone-400 hover:bg-stone-800 hover:text-stone-100 disabled:pointer-events-auto disabled:opacity-30"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative"
        >
          <CarouselContent className="-mr-4 pl-6 md:pl-0 md:ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="basis-[85%] pl-4 sm:basis-[70%] md:basis-auto md:max-w-[452px]">
                <a
                  href={item.url}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                          />
                          <div className="relative h-full w-full">
                            {cardMockups[item.id]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium text-stone-100 md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-stone-400 md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-sm text-stone-300 transition-colors group-hover:text-emerald-400">
                    Czytaj więcej{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };
