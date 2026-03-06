"use client";

import {
  Globe,
  Sparkles,
  ArrowRight,
  Users,
  ShieldCheck,
  Briefcase,
  UserSearch,
  MapPin,
  ShoppingCart,
  Lock,
  Clock,
  BarChart3,
  Check,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { HeroDashboard } from "@/components/hero-dashboard";
import { FeaturesBento } from "@/components/features-bento";

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                            */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Produkt", href: "#product" },
    { label: "Zastosowania", href: "#use-cases" },
    { label: "Cennik", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-800/60 bg-stone-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <Globe className="size-5 text-emerald-400" />
            <span className="text-base font-semibold tracking-tight text-stone-100">
              Offscript Atlas
            </span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-stone-400 transition-colors hover:text-stone-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <Button variant="ghost" size="sm" className="text-stone-400 hover:text-stone-100">
            Zaloguj się
          </Button>
          <Button size="sm" className="rounded-full border border-stone-600 bg-stone-900 text-stone-100 hover:bg-stone-800">
            Zacznij za darmo
          </Button>
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex size-9 items-center justify-center rounded-lg text-stone-400 transition-colors hover:text-stone-100 sm:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="border-t border-stone-800/40 bg-stone-950/95 backdrop-blur-xl px-6 pb-6 pt-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-stone-300 transition-colors hover:text-stone-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="ghost" size="sm" className="justify-start text-stone-400 hover:text-stone-100">
              Zaloguj się
            </Button>
            <Button size="sm" className="rounded-full border border-stone-600 bg-stone-900 text-stone-100 hover:bg-stone-800">
              Zacznij za darmo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  LOGO ICONS (fake company logos for social proof strip)             */
/* ------------------------------------------------------------------ */
const socialProofLogos = [
  {
    name: "Coppervine",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M8 1L14.5 4.75v6.5L8 15 1.5 11.25v-6.5z" stroke="white" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    name: "BrightOps",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M8 1v14M1 8h14M3.1 3.1l9.8 9.8M12.9 3.1 3.1 12.9" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    nameClass: "font-bold tracking-widest text-xs uppercase",
  },
  {
    name: "Foldstudio",
    icon: (
      <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden>
        <path d="M1 1h8l3 3v11H1V1z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M9 1v3h3" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    nameClass: "italic tracking-tight",
  },
  {
    name: "Talentdrift",
    icon: (
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
        <path d="M1 2h16M1 6h11M1 10h13" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Arcline",
    icon: (
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
        <path d="M1 11C3 4 6 1 9 1s6 3 8 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    nameClass: "uppercase tracking-[0.12em] text-xs font-semibold",
  },
  {
    name: "kessel.io",
    icon: null,
    nameClass: "font-light tracking-tight text-[15px]",
  },
  {
    name: "Meridian",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1.3"/>
        <ellipse cx="8" cy="8" rx="2.8" ry="6.5" stroke="white" strokeWidth="1"/>
        <line x1="1.5" y1="8" x2="14.5" y2="8" stroke="white" strokeWidth="1"/>
      </svg>
    ),
    nameClass: "uppercase tracking-[0.1em] text-xs",
  },
  {
    name: "Stackwise",
    icon: (
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
        <rect x="0" y="0" width="18" height="3.5" rx="1.75" fill="white"/>
        <rect x="0" y="5.25" width="13" height="3.5" rx="1.75" fill="white" fillOpacity="0.65"/>
        <rect x="0" y="10.5" width="8" height="3.5" rx="1.75" fill="white" fillOpacity="0.35"/>
      </svg>
    ),
    nameClass: "font-medium",
  },
];

function BrandLogo({ name, icon, nameClass = "" }: { name: string; icon: React.ReactNode; nameClass?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      {icon}
      <span className={`text-sm text-white ${nameClass}`}>{name}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative border-b border-stone-800/40 overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-10 lg:pt-32">
        {/* Left */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl font-bold leading-[1.06] tracking-tight text-stone-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Zamień stronę
            <br />
            w pipeline.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone-400">
            Od surowych URL-i do zakwalifikowanych deali — Atlas scrapuje uporządkowane leady,
            wzbogaca każdy rekord i wrzuca je do CRM, którego naprawdę chcesz używać.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-stone-700 bg-transparent px-6 text-stone-100 hover:bg-stone-800"
            >
              Zacznij za darmo
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-stone-100 px-6 text-stone-950 hover:bg-white"
            >
              Zobacz jak to działa
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>

          {/* Mobile-only app preview */}
          <div className="mt-10 block w-full lg:hidden">
            <div className="overflow-hidden rounded-2xl border border-stone-700/40 bg-stone-900/80 shadow-2xl backdrop-blur-sm">
              {/* Mini header */}
              <div className="flex items-center justify-between border-b border-stone-800/40 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Globe className="size-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-stone-200">Offscript Atlas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">Live</span>
                </div>
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 p-4">
                <div className="rounded-lg border border-stone-700/40 bg-stone-800/40 p-3">
                  <p className="text-[10px] text-stone-500">Zescrapowane rekordy</p>
                  <p className="mt-1 text-xl font-bold text-stone-100">8,412</p>
                  <p className="mt-0.5 text-[9px] text-emerald-400">+20% ten miesiąc</p>
                </div>
                <div className="rounded-lg border border-stone-700/40 bg-stone-800/40 p-3">
                  <p className="text-[10px] text-stone-500">Aktywne leady</p>
                  <p className="mt-1 text-xl font-bold text-stone-100">3,847</p>
                  <p className="mt-0.5 text-[9px] text-emerald-400">+12% ten miesiąc</p>
                </div>
              </div>
              {/* Mini scraping activity */}
              <div className="space-y-1.5 border-t border-stone-800/40 px-4 pb-4 pt-3">
                <p className="mb-2 text-[10px] font-medium text-stone-400">Ostatnia aktywność</p>
                {[
                  { label: "linkedin.com/in/search", count: "124 rekordy", color: "bg-blue-500" },
                  { label: "crunchbase.com/startups", count: "89 rekordów", color: "bg-emerald-500" },
                  { label: "producthunt.com/makers", count: "56 rekordów", color: "bg-amber-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-md bg-stone-800/40 px-3 py-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`size-1.5 shrink-0 rounded-full ${item.color}`} />
                      <span className="truncate text-[10px] text-stone-400">{item.label}</span>
                    </div>
                    <span className="ml-3 shrink-0 text-[10px] font-medium text-stone-300">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right — dashboard mock */}
        <div className="relative">
          <HeroDashboard />
        </div>
      </div>

      {/* Social proof strip */}
      <div className="relative z-10 border-t border-stone-800/40">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.18em] text-stone-600">
            Zaufały nam zespoły oparte na danych
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-7 opacity-50 sm:grid-cols-4">
            {socialProofLogos.map((logo) => (
              <div key={logo.name} className="flex justify-center">
                <BrandLogo name={logo.name} icon={logo.icon} nameClass={logo.nameClass} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



/* ------------------------------------------------------------------ */
/*  USE CASES                                                         */
/* ------------------------------------------------------------------ */
const useCases = [
  {
    icon: Briefcase,
    title: "Agencje",
    bullets: [
      "Scrapuj listy prospektów z katalogów",
      "Wzbogacaj o wielkość firmy i domenę",
      "Przypisuj leady do opiekunów klientów",
    ],
  },
  {
    icon: UserSearch,
    title: "Rekruterzy",
    bullets: [
      "Pobieraj profile kandydatów z publicznych portali",
      "Deduplikuj wobec istniejącej bazy talentów",
      "Śledź etapy kontaktu per kandydat",
    ],
  },
  {
    icon: MapPin,
    title: "Usługi lokalne",
    bullets: [
      "Zbieraj lokalne wizytówki firm",
      "Normalizuj adresy i formaty telefonów",
      "Uruchamiaj geotargetowane sekwencje follow-up",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Badania e-commerce",
    bullets: [
      "Monitoruj strony produktów konkurencji",
      "Wyciągaj ceny, SKU i dostępność",
      "Eksportuj uporządkowane dane do Twojego stacku analitycznego",
    ],
  },
];

function UseCases() {
  return (
    <section id="use-cases" className="border-b border-stone-800/40 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center">
          <Badge variant="outline" className="border-stone-700 text-stone-400 text-xs">
            Zastosowania
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Stworzone dla zespołów, które żyją danymi.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {useCases.map((uc) => (
            <Card
              key={uc.title}
              className="border-stone-800/60 bg-stone-900/40 transition-colors hover:border-emerald-500/20"
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex size-9 items-center justify-center rounded-lg border border-stone-800 bg-stone-800/50 sm:size-10">
                  <uc.icon className="size-4 text-emerald-400 sm:size-5" />
                </div>
                <CardTitle className="mt-3 text-sm text-stone-100 sm:text-base">{uc.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0 sm:px-6 sm:pb-6">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-stone-500 sm:text-xs">
                  Typowy przepływ
                </p>
                <ul className="space-y-2">
                  {uc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-1.5 text-xs text-stone-400 sm:gap-2 sm:text-sm">
                      <ChevronRight className="mt-0.5 size-3 shrink-0 text-emerald-500/60 sm:size-3.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INTEGRATIONS MARQUEE                                              */
/* ------------------------------------------------------------------ */
const integrationLogos: Record<string, React.ReactNode> = {
  "Google Sheets": (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Notion: (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.28 2.29c-.42-.326-.98-.7-2.055-.607L3.01 2.87c-.466.046-.56.28-.374.466l1.823 1.872zm.793 3.358v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.63c0-.606-.233-.933-.748-.886l-15.177.887c-.56.046-.747.326-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.726l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933l3.222-.186zM2.877 1.17l13.728-.84c1.682-.14 2.101.093 2.8.606l3.876 2.71c.466.326.606.747.606 1.26v16.06c0 .84-.28 1.54-1.448 1.493l-15.458.887c-.84.046-1.261-.093-1.682-.606L2.1 19.308c-.513-.7-.746-1.307-.746-1.96V2.777c0-.84.466-1.54 1.354-1.607h.168z"/>
    </svg>
  ),
  HubSpot: (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.2 2.2 0 0 0 17.23.833h-.066a2.2 2.2 0 0 0-2.2 2.2v.067c0 .86.5 1.6 1.222 1.96V7.93a5.56 5.56 0 0 0-2.756 1.426l-7.27-5.655a2.464 2.464 0 0 0 .073-.535 2.48 2.48 0 1 0-2.48 2.48c.396 0 .768-.1 1.1-.27l7.146 5.56a5.58 5.58 0 0 0-.376 2.02c0 .74.147 1.446.408 2.093l-2.198 1.79a2.28 2.28 0 0 0-.675-.106 2.294 2.294 0 1 0 2.294 2.293c0-.247-.043-.483-.115-.706l2.132-1.736a5.58 5.58 0 1 0 4.444-8.953zm-.967 7.873a2.293 2.293 0 1 1 0-4.586 2.293 2.293 0 0 1 0 4.586z"/>
    </svg>
  ),
  Zapier: (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
      <path d="M15.088 12.004l3.003-3.003a7.41 7.41 0 0 0 0-2.886h-4.244l3.003-3.004a7.448 7.448 0 0 0-2.042-2.04L11.804 4.073V0h-.001a7.41 7.41 0 0 0-2.886 0v4.244L5.913 1.241a7.448 7.448 0 0 0-2.04 2.042l3.002 3.003H2.63a7.41 7.41 0 0 0 0 2.886h4.244L3.872 12.176a7.448 7.448 0 0 0 2.041 2.04l3.003-3.002v4.244a7.41 7.41 0 0 0 2.886 0v-4.244l3.003 3.003a7.448 7.448 0 0 0 2.04-2.041l-3.002-3.003h4.244a7.41 7.41 0 0 0 0-2.886h-4.244l1.245-1.283zM12 14.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z"/>
    </svg>
  ),
  Airtable: (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
      <path d="M11.522 1.754L2.846 5.217a.848.848 0 0 0 .006 1.574l8.738 3.354a2.04 2.04 0 0 0 1.457 0l8.738-3.354a.848.848 0 0 0 .006-1.574L13.115 1.754a2.56 2.56 0 0 0-1.593 0zM20.4 8.4v7.8c0 .36-.216.684-.546.822l-7.654 3.2V12.6l8.2-3.2v-1zM11.2 12.6v7.622L3.546 17.022A.9.9 0 0 1 3 16.2V8.4l8.2 4.2z"/>
    </svg>
  ),
  Slack: (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  ),
  Make: (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
      <circle cx="6" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="18" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M9.5 12h5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Salesforce: (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
      <path d="M10.006 5.17a4.679 4.679 0 0 1 3.408-1.476c1.728 0 3.234.94 4.041 2.335a5.186 5.186 0 0 1 2.159-.469C22.073 5.56 24 7.493 24 9.88c0 2.386-1.927 4.32-4.386 4.32a4.4 4.4 0 0 1-.975-.109 3.834 3.834 0 0 1-3.476 2.209 3.85 3.85 0 0 1-1.762-.425 4.347 4.347 0 0 1-3.99 2.625 4.352 4.352 0 0 1-4.137-2.979A3.474 3.474 0 0 1 4 15.82c-2.21 0-4-1.787-4-3.993s1.79-3.993 4-3.993c.528 0 1.033.102 1.495.287A4.728 4.728 0 0 1 10.006 5.17z"/>
    </svg>
  ),
  Webhooks: (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L12 12m0-10a4 4 0 0 0-4 4c0 1.1.45 2.1 1.17 2.83L12 12m0 0l-2.83 2.83A4 4 0 1 0 12 22m0-10l2.83 2.83A4 4 0 1 1 12 22"/>
    </svg>
  ),
  "CSV Export": (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
      <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/>
    </svg>
  ),
};

const integrations = [
  "Google Sheets", "Notion", "HubSpot", "Zapier", "Airtable",
  "Slack", "Make", "Salesforce", "Webhooks", "CSV Export",
];

function IntegrationLogo({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-4 sm:px-8">
      <div className="flex size-10 items-center justify-center rounded-lg border border-stone-800 bg-stone-900 text-stone-400">
        {integrationLogos[name]}
      </div>
      <span className="whitespace-nowrap text-sm font-medium text-stone-500">
        {name}
      </span>
    </div>
  );
}

function Integrations() {
  return (
    <section className="border-b border-stone-800/40 bg-stone-950 py-16">
      <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.2em] text-stone-600">
        Integruje się z Twoimi narzędziami
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-stone-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-stone-950 to-transparent" />

        {/* Row 1 — scrolls left */}
        <div
          className="flex"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[...integrations, ...integrations].map((name, i) => (
            <IntegrationLogo key={`a-${i}`} name={name} />
          ))}
        </div>

        {/* Row 2 — scrolls right, slightly offset */}
        <div
          className="mt-4 flex"
          style={{ animation: "marquee-reverse 35s linear infinite" }}
        >
          {[...integrations.slice().reverse(), ...integrations.slice().reverse()].map(
            (name, i) => (
              <IntegrationLogo key={`b-${i}`} name={name} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRUST & SECURITY                                                  */
/* ------------------------------------------------------------------ */
const trustItems = [
  {
    icon: Clock,
    title: "Ograniczanie zapytań",
    desc: "Wbudowany throttling zapytań respektuje pojemność serwera i zapobiega przeciążeniu.",
  },
  {
    icon: ShieldCheck,
    title: "Świadomość robots.txt",
    desc: "Atlas domyślnie sprawdza robots.txt. Możesz konfigurować zgodność per domena.",
  },
  {
    icon: BarChart3,
    title: "Logi audytu",
    desc: "Każde zadanie scrapowania, eksport i akcja w pipeline jest logowana z timestampami i ID użytkowników.",
  },
  {
    icon: Lock,
    title: "Kontrola retencji danych",
    desc: "Ustaw polityki auto-usuwania per workspace. Usuwaj rekordy na żądanie.",
  },
];

function TrustSecurity() {
  return (
    <section className="border-b border-stone-800/40 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center">
          <Badge variant="outline" className="border-stone-700 text-stone-400 text-xs">
            Zaufanie i zgodność
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Odpowiedzialne scrapowanie domyślnie.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-400">
            Nie składamy absolutnych obietnic — ale budujemy zabezpieczenia, dzięki którym możesz działać z pewnością.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {trustItems.map((t) => (
            <div key={t.title} className="flex flex-col items-start">
              <div className="flex size-9 items-center justify-center rounded-lg border border-stone-800 bg-stone-900/60 sm:size-10">
                <t.icon className="size-4 text-emerald-400 sm:size-5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-stone-100 sm:mt-4">{t.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-400 sm:text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                      */
/* ------------------------------------------------------------------ */
const testimonialsRow1 = [
  {
    quote: "Kiedyś spędzaliśmy 6 godzin tygodniowo na kopiowaniu leadów do arkuszy. Atlas skrócił to do około 20 minut — a dane są czystsze niż cokolwiek, co robiliśmy ręcznie.",
    name: "Jenna Morales",
    role: "Head of Growth w Coppervine",
    avatar: 1,
  },
  {
    quote: "Sam pipeline jest wart swojej ceny. Przestaliśmy płacić za osobne CRM w tydzień po wdrożeniu. Mapowanie pól uratowało nas od kolejnego bałaganu z importem CSV.",
    name: "Daniel Park",
    role: "Ops Lead w Studioframe",
    avatar: 2,
  },
  {
    quote: "Jako rekruterka potrzebuję uporządkowanych danych kandydatów szybko. Atlas pobiera je, deduplikuje wobec mojej bazy i tego samego dnia już piszę do kandydatów.",
    name: "Anika Brandt",
    role: "Senior Recruiter w Talentdrift",
    avatar: 3,
  },
  {
    quote: "Zastąpiliśmy trzy różne narzędzia Atlasem. Scrapowanie, wzbogacanie i zarządzanie pipeline — wszystko w jednym miejscu. Integracje webhookowe też działają solidnie.",
    name: "Marcus Webb",
    role: "CTO w Foldstudio",
    avatar: 4,
  },
  {
    quote: "Dane wzbogacania w Atlasie są zaskakująco dokładne. Wskaźniki pewności to miły dodatek — dokładnie wiemy, które rekordy wymagają ręcznej weryfikacji.",
    name: "Sarah Chen",
    role: "Product Manager w Arcline",
    avatar: 5,
  },
];

const testimonialsRow2 = [
  {
    quote: "Samo wykrywanie duplikatów zaoszczędziło nam setki godzin. Koniec ze sprzątaniem bałaganu po importach — Atlas wyłapuje niemal-duplikaty zanim trafią do pipeline.",
    name: "Tom Nilsson",
    role: "CEO i współzałożyciel BrightOps",
    avatar: 6,
  },
  {
    quote: "Świetny produkt — dopracowany, intuicyjny i dokładnie to, czego potrzebowaliśmy. Zespół zrobił więcej niż oczekiwaliśmy, żeby pomóc nam wystartować.",
    name: "Priya Nair",
    role: "Product Manager w Kessel",
    avatar: 7,
  },
  {
    quote: "Doskonały produkt — niezawodny, łatwy do wdrożenia i dokładnie taki jak w opisie. Obsługa była na najwyższym poziomie i zapewniła sprawny onboarding.",
    name: "Leo Andersen",
    role: "CEO i współzałożyciel Meridian",
    avatar: 8,
  },
  {
    quote: "Najwyższa jakość — łatwy do konfiguracji i działa zgodnie z obietnicą. Zespół wsparcia był niesamowicie responsywny i uważny na nasze potrzeby.",
    name: "Maya Torres",
    role: "Head of Sales w Brightpath",
    avatar: 9,
  },
  {
    quote: "Przeszliśmy od ręcznego scrapowania katalogów do w pełni zautomatyzowanego pipeline w niecały dzień. Eksporty CSV i triggery webhookowe po prostu działają.",
    name: "James Liu",
    role: "Growth Engineer w Stackwise",
    avatar: 10,
  },
];

/* Notion-style avatar SVGs */
function NotionAvatar({ id }: { id: number }) {
  const avatars: Record<number, React.ReactNode> = {
    1: ( /* woman, short hair */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="52" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="49" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="49" r="2" fill="#3a3a3a"/>
        <path d="M55 58q5 4 10 0" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M38 38q10-18 44 0" fill="#3a3a3a"/>
        <path d="M38 38q-2 14 0 20" fill="#3a3a3a"/>
        <path d="M82 38q2 14 0 20" fill="#3a3a3a"/>
      </svg>
    ),
    2: ( /* man, spiky hair */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="52" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="49" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="49" r="2" fill="#3a3a3a"/>
        <path d="M55 58q5 4 10 0" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M36 42q4-22 24-24q20 2 24 24" fill="#3a3a3a"/>
      </svg>
    ),
    3: ( /* woman, long hair */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="52" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="49" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="49" r="2" fill="#3a3a3a"/>
        <path d="M55 58q5 4 10 0" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M36 36q10-16 48 0v30q-4 4-8-8" fill="#3a3a3a"/>
        <path d="M36 36v26q4 4 8-8" fill="#3a3a3a"/>
      </svg>
    ),
    4: ( /* man, glasses */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="52" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="49" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="49" r="2" fill="#3a3a3a"/>
        <path d="M55 58q5 4 10 0" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <rect x="44" y="43" width="14" height="10" rx="3" fill="none" stroke="#3a3a3a" strokeWidth="2"/>
        <rect x="62" y="43" width="14" height="10" rx="3" fill="none" stroke="#3a3a3a" strokeWidth="2"/>
        <line x1="58" y1="48" x2="62" y2="48" stroke="#3a3a3a" strokeWidth="2"/>
        <path d="M38 36q10-16 44 0" fill="#3a3a3a"/>
      </svg>
    ),
    5: ( /* woman, bun */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="52" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="49" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="49" r="2" fill="#3a3a3a"/>
        <path d="M55 58q5 4 10 0" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M38 40q10-16 44 0" fill="#3a3a3a"/>
        <circle cx="60" cy="24" r="10" fill="#3a3a3a"/>
      </svg>
    ),
    6: ( /* man, beard */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="52" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="49" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="49" r="2" fill="#3a3a3a"/>
        <path d="M46 62q14 16 28 0" fill="#3a3a3a"/>
        <path d="M36 40q10-18 48 0" fill="#3a3a3a"/>
      </svg>
    ),
    7: ( /* woman, curly */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="52" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="49" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="49" r="2" fill="#3a3a3a"/>
        <path d="M55 58q5 4 10 0" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M32 50q-2-24 28-28q30 4 28 28q4 12-2 18" fill="#3a3a3a"/>
        <path d="M32 50q-4 12 2 18" fill="#3a3a3a"/>
      </svg>
    ),
    8: ( /* man, cap */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="55" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="52" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="52" r="2" fill="#3a3a3a"/>
        <path d="M55 61q5 4 10 0" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <rect x="36" y="34" width="48" height="14" rx="4" fill="#3a3a3a"/>
        <rect x="30" y="44" width="56" height="5" rx="2" fill="#3a3a3a"/>
      </svg>
    ),
    9: ( /* woman, side part */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="52" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="49" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="49" r="2" fill="#3a3a3a"/>
        <path d="M55 58q5 4 10 0" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M34 44q6-20 50-8v12q-2 6-6-4" fill="#3a3a3a"/>
        <path d="M34 44v12q2 6 6-4" fill="#3a3a3a"/>
      </svg>
    ),
    10: ( /* man, clean cut */
      <svg viewBox="0 0 120 120" className="size-full">
        <circle cx="60" cy="60" r="60" fill="#3a3a3a"/>
        <circle cx="60" cy="52" r="22" fill="#d4d4d4"/>
        <ellipse cx="60" cy="100" rx="32" ry="24" fill="#d4d4d4"/>
        <circle cx="52" cy="49" r="2" fill="#3a3a3a"/>
        <circle cx="68" cy="49" r="2" fill="#3a3a3a"/>
        <path d="M55 58q5 4 10 0" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M38 42q8-16 44 0q2 4 0 6l-44 0q-2-2 0-6" fill="#3a3a3a"/>
      </svg>
    ),
  };
  return (
    <div className="size-10 overflow-hidden rounded-full">
      {avatars[id] ?? avatars[1]}
    </div>
  );
}

function TestimonialCard({ t }: { t: { quote: string; name: string; role: string; avatar: number } }) {
  return (
    <div className="w-[280px] shrink-0 rounded-xl border border-stone-800/60 bg-stone-900/60 p-5 mx-2 sm:w-[340px] sm:p-6 sm:mx-3">
      {/* Quote mark */}
      <svg width="28" height="20" viewBox="0 0 28 20" className="mb-4 text-stone-400" fill="currentColor">
        <path d="M0 20V8.344C0 2.784 3.36 0 8.4 0v4.2c-2.52 0-4.2 1.26-4.2 4.144h4.2V20H0zm15.6 0V8.344C15.6 2.784 18.96 0 24 0v4.2c-2.52 0-4.2 1.26-4.2 4.144H24V20H15.6z"/>
      </svg>
      <p className="text-sm leading-relaxed text-stone-300">{t.quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <NotionAvatar id={t.avatar} />
        <div>
          <p className="text-sm font-medium text-stone-100">{t.name}</p>
          <p className="text-xs text-stone-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="border-b border-stone-800/40 bg-stone-950 py-24 lg:py-32 overflow-hidden">
      <div className="text-center px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
          Opinie
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
          Co mówią o nas<br />nasi użytkownicy
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mt-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-stone-950 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-stone-950 to-transparent sm:w-24" />
        <div
          className="flex"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="mt-4 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-stone-950 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-stone-950 to-transparent sm:w-24" />
        <div
          className="flex"
          style={{ animation: "marquee-reverse 45s linear infinite" }}
        >
          {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PRICING                                                           */
/* ------------------------------------------------------------------ */
const plans = [
  {
    name: "Starter",
    price: "29",
    desc: "Idealny dla osób indywidualnych i projektów pobocznych eksplorujących zbieranie danych z sieci.",
    highlighted: false,
    icon: Sparkles,
    features: [
      "1 000 rekordów / miesiąc",
      "5 szablonów scrapowania",
      "Podstawowe wzbogacanie",
      "Eksporty CSV",
    ],
  },
  {
    name: "Pro",
    price: "79",
    desc: "Kompleksowe rozwiązanie dla rosnących zespołów, które potrzebują czystych danych na skalę z pełnymi narzędziami pipeline.",
    highlighted: true,
    icon: Users,
    features: [
      "10 000 rekordów / miesiąc",
      "Nieograniczone szablony",
      "Pełny pakiet wzbogacania",
      "Nieograniczone pipeline",
      "CSV + webhooki",
      "Wykrywanie duplikatów",
    ],
  },
  {
    name: "Team",
    price: "199",
    desc: "Dla organizacji z wieloma pipeline, wymaganiami zgodności i współpracą zespołową.",
    highlighted: false,
    icon: ShieldCheck,
    features: [
      "50 000 rekordów / miesiąc",
      "Wszystko z planu Pro",
      "5 miejsc w zespole",
      "Dostęp oparty na rolach",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="border-b border-stone-800/40 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Wybierz plan dla siebie
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-400">
            Znajdź idealny plan dopasowany do Twojego budżetu i celów. Każdy plan zawiera 14-dniowy okres próbny.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const isLight = plan.highlighted;
            return (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl p-8 ${
                  isLight
                    ? "order-first bg-stone-100 text-stone-900 shadow-2xl ring-2 ring-emerald-500/20 md:order-none md:ring-0 md:-my-4 md:py-12"
                    : "border border-stone-800/60 bg-stone-900/50 text-stone-100"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex size-12 items-center justify-center rounded-full ${
                    isLight ? "bg-stone-900" : "bg-stone-800"
                  }`}
                >
                  <plan.icon className={`size-5 ${isLight ? "text-stone-100" : "text-stone-300"}`} />
                </div>

                {/* Badge */}
                <span
                  className={`mt-5 w-fit rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                    isLight
                      ? "border-stone-300 text-stone-700"
                      : "border-stone-700 text-stone-400"
                  }`}
                >
                  {plan.name}
                </span>

                {/* Price */}
                <div className="mt-5 flex items-baseline">
                  <span
                    className={`text-sm font-medium ${isLight ? "text-stone-500" : "text-stone-500"}`}
                  >
                    $
                  </span>
                  <span
                    className={`text-6xl font-bold tracking-tight ${
                      isLight ? "text-stone-900" : "text-stone-50"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    isLight ? "text-stone-600" : "text-stone-400"
                  }`}
                >
                  {plan.desc}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <ArrowRight
                        className={`size-4 shrink-0 ${
                          isLight ? "text-stone-400" : "text-stone-500"
                        }`}
                      />
                      <span className={isLight ? "text-stone-800" : "text-stone-300"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-colors ${
                    isLight
                      ? "bg-stone-900 text-stone-100 hover:bg-stone-800"
                      : "border border-stone-700 bg-stone-800/60 text-stone-200 hover:bg-stone-700"
                  }`}
                >
                  Zacznij
                  <ArrowRight className="size-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    q: "Czy web scraping jest legalny?",
    a: "To zależy od jurysdykcji, regulaminu strony oraz rodzaju zbieranych danych. Atlas oferuje ograniczanie zapytań, świadomość robots.txt i kontrole zgodności, aby pomóc Ci działać odpowiedzialnie. Zalecamy konsultację prawną dla Twojego konkretnego przypadku.",
  },
  {
    q: "Jak dokładne są dane wzbogacania?",
    a: "Wzbogacanie korzysta z publicznie dostępnych źródeł — dokładność różni się w zależności od pola i obszaru pokrycia. Gdzie to możliwe, wyświetlamy wskaźniki pewności, abyś mógł zdecydować, czemu zaufać, a co zweryfikować ręcznie.",
  },
  {
    q: "Czy mogę eksportować swoje dane?",
    a: "Tak. Każdy plan zawiera eksporty CSV. Plany Pro i Team obsługują również webhooki, dzięki czemu możesz wysyłać dane do narzędzi downstream przy zmianach etapów lub planować automatyczne eksporty.",
  },
  {
    q: "Czy Atlas zastępuje moje CRM?",
    a: "Atlas zawiera lekkie CRM z etapami pipeline, zadaniami, notatkami i automatyzacjami. Dla wielu zespołów to wszystko, czego potrzebują. Jeśli już używasz HubSpot lub Salesforce, Atlas może zasilać te narzędzia czystymi danymi przez integracje.",
  },
  {
    q: "Co się dzieje z moimi danymi po anulowaniu?",
    a: "Możesz wyeksportować wszystko przed końcem subskrypcji. Po anulowaniu dane są przechowywane przez 30 dni, a następnie trwale usuwane zgodnie z naszą polityką retencji.",
  },
  {
    q: "Jak działa wykrywanie duplikatów?",
    a: "Atlas używa dopasowania rozmytego po polach imienia, e-maila, domeny i telefonu. Niemal-dopasowania są flagowane do przeglądu lub automatycznie łączone w zależności od Twoich ustawień progu pewności.",
  },
  {
    q: "Czy wspieracie współpracę zespołową?",
    a: "Plan Team zawiera 5 miejsc z dostępem opartym na rolach. Możesz przypisywać etapy pipeline, udostępniać szablony i przeglądać aktywność zespołu w logu audytu. Dodatkowe miejsca są dostępne jako dodatki.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="border-b border-stone-800/40 bg-stone-950">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <div className="text-center">
          <Badge variant="outline" className="border-stone-700 text-stone-400 text-xs">
            FAQ
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Często zadawane pytania.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-stone-800/60">
              <AccordionTrigger className="text-left text-stone-100 hover:no-underline hover:text-emerald-400">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-stone-400 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FINAL CTA                                                         */
/* ------------------------------------------------------------------ */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-stone-800/40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <h2 className="text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
          Przestań kopiować. Zacznij zamykać deale.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-stone-400">
          14-dniowy okres próbny. Bez karty. Konfiguracja w niecałe dwie minuty.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="bg-emerald-500 text-stone-950 hover:bg-emerald-400">
            Zacznij za darmo
            <ArrowRight className="ml-1 size-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-stone-100">
            Umów demo
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                            */
/* ------------------------------------------------------------------ */
const footerLinks = {
  Produkt: ["Funkcje", "Cennik", "Integracje", "Changelog", "Dokumentacja"],
  Firma: ["O nas", "Blog", "Kariera", "Kontakt"],
  Prawne: ["Prywatność", "Regulamin", "DPA", "Bezpieczeństwo"],
};

function Footer() {
  return (
    <footer className="bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <Globe className="size-5 text-emerald-400" />
              <span className="text-base font-semibold tracking-tight text-stone-100">
                Offscript Atlas
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              Web scraping i CRM w jednym narzędziu. Zbieraj leady, wzbogacaj
              rekordy i zarządzaj pipeline bez sklejania narzędzi taśmą.
            </p>
            <div className="mt-6">
              <div className="flex max-w-xs gap-2">
                <Input
                  placeholder="you@company.com"
                  className="h-9 border-stone-800 bg-stone-900/60 text-sm text-stone-300 placeholder:text-stone-600"
                />
                <Button size="sm" className="shrink-0 bg-emerald-500 text-stone-950 hover:bg-emerald-400">
                  Subskrybuj
                </Button>
              </div>
              <p className="mt-2 text-xs text-stone-600">Aktualności produktowe. Bez spamu.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 md:col-span-3 md:grid-cols-3">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-stone-400 transition-colors hover:text-stone-100"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        <Separator className="my-10 bg-stone-800/60" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Offscript Atlas. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-stone-700">
            Scrapuj odpowiedzialnie.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />
      <Hero />
      <FeaturesBento />
      <UseCases />
      <Integrations />
      <TrustSecurity />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
