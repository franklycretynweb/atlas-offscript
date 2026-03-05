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
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
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
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                <a
                  href={item.url}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <div
                            className={`h-full w-full bg-gradient-to-br ${item.gradient}`}
                          />
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
