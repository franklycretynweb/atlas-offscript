"use client";

import {
  LayoutDashboard,
  Bell,
  Users,
  Search,
  GitBranch,
  BarChart3,
  Download,
  Sparkles,
  MoreHorizontal,
  Settings,
  HelpCircle,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Globe,
  Zap,
  Monitor,
  type LucideIcon,
} from "lucide-react";

function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[11px] ${
        active
          ? "bg-stone-800/60 text-stone-100"
          : "text-stone-400"
      }`}
    >
      {active && (
        <div className="-ml-2 mr-0 h-3.5 w-0.5 rounded-full bg-emerald-400" />
      )}
      <Icon className="size-3.5" />
      <span>{label}</span>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  change,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-lg border border-stone-700/40 bg-stone-800/30 p-3">
      <div className="mb-1.5 flex items-center gap-1.5">
        <Icon className="size-3 text-stone-500" />
        <span className="text-[10px] text-stone-400">{label}</span>
      </div>
      <p className="text-lg font-bold text-stone-100">{value}</p>
      <p className="mt-0.5 text-[9px] text-emerald-400">
        {change} · Ostatnie 30 dni
      </p>
    </div>
  );
}

function FilterBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-stone-700/40 bg-stone-800/40 px-2 py-1 text-[9px] text-stone-400">
      {label}
    </div>
  );
}

export function HeroDashboard() {
  return (
    <div className="relative hidden min-h-[780px] w-full lg:block">
      {/* Sidebar Panel */}
      <div className="absolute left-0 top-10 z-10 w-[210px] overflow-hidden rounded-xl border border-stone-700/40 bg-stone-900/95 shadow-2xl backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 pb-4 pt-5">
          <Globe className="size-5 text-emerald-400" />
          <span className="text-sm font-semibold text-stone-100">
            Offscript Atlas
          </span>
        </div>

        {/* Main Menu */}
        <div className="px-3">
          <div className="mb-2 flex items-center gap-1 px-1">
            <span className="text-[11px] text-stone-500">Menu główne</span>
            <ChevronDown className="size-3 text-stone-600" />
          </div>
          <div className="space-y-0.5">
            <NavItem icon={LayoutDashboard} label="Pulpit" active />
            <NavItem icon={Bell} label="Powiadomienia" />
            <NavItem icon={Users} label="Leady" />
            <NavItem icon={Search} label="Scrapery" />
            <NavItem icon={GitBranch} label="Pipeline" />
            <NavItem icon={BarChart3} label="Raporty" />
            <NavItem icon={Download} label="Eksporty" />
            <NavItem icon={Sparkles} label="Wzbogacanie" />
            <NavItem icon={MoreHorizontal} label="Więcej" />
          </div>
        </div>

        {/* General */}
        <div className="mt-4 px-3">
          <div className="mb-2 flex items-center gap-1 px-1">
            <span className="text-[11px] text-stone-500">Ogólne</span>
            <ChevronDown className="size-3 text-stone-600" />
          </div>
          <div className="space-y-0.5">
            <NavItem icon={Settings} label="Ustawienia" />
            <NavItem icon={HelpCircle} label="Pomoc" />
            <NavItem icon={MessageSquare} label="Opinie" />
          </div>
        </div>

        {/* Free Trial */}
        <div className="mx-3 mb-3 mt-6 rounded-lg border border-stone-700/40 bg-stone-800/50 p-3">
          <Zap className="mb-2 size-4 text-emerald-400" />
          <p className="text-xs font-medium text-stone-200">
            Wersja próbna
          </p>
          <p className="mt-1 text-[10px] leading-relaxed text-stone-500">
            Pozostały 4 dni.
            <br />
            Ulepsz, aby kontynuować
          </p>
          <div className="mt-2 flex items-center gap-0.5 text-[10px] text-stone-400">
            Wybierz plan <ChevronRight className="size-2.5" />
          </div>
        </div>

        {/* User */}
        <div className="flex items-center gap-2 border-t border-stone-800/40 px-4 py-3">
          <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800">
            <span className="text-[9px] font-medium text-white">MB</span>
          </div>
          <div>
            <p className="text-[11px] font-medium text-stone-200">
              Mateusz Bryla
            </p>
            <p className="text-[9px] text-stone-500">mateusz@createoffscript.com</p>
          </div>
        </div>
      </div>

      {/* Dashboard Main Panel */}
      <div className="absolute left-[170px] top-0 z-20 w-[540px] overflow-hidden rounded-xl border border-stone-700/40 bg-stone-900/95 shadow-2xl backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-2 px-5 pb-3 pt-4">
          <LayoutDashboard className="size-4 text-stone-400" />
          <span className="text-sm font-semibold text-stone-100">
            Pulpit
          </span>
        </div>

        {/* Period tabs */}
        <div className="px-5 pb-3">
          <div className="flex gap-1.5">
            <span className="rounded-md bg-emerald-500/20 px-3 py-1 text-[10px] font-medium text-emerald-400">
              30 dni
            </span>
            <span className="rounded-md px-3 py-1 text-[10px] text-stone-500">
              3 miesiące
            </span>
            <span className="rounded-md px-3 py-1 text-[10px] text-stone-500">
              1 rok
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 px-5 pb-3">
          <StatCard
            icon={Monitor}
            label="Zescrapowane rekordy"
            value="8,412"
            change="+20%(1,523)"
          />
          <StatCard
            icon={Users}
            label="Aktywne leady"
            value="3,847"
            change="+12%(456)"
          />
        </div>

        {/* Scraping Activity */}
        <div className="mx-5 mb-3 rounded-lg border border-stone-700/40 bg-stone-800/20">
          <div className="flex">
            {/* Left info */}
            <div className="flex-1 p-4">
              <div className="mb-1.5 flex items-center gap-2">
                <BarChart3 className="size-3.5 text-stone-500" />
                <span className="text-[11px] text-stone-400">
                  Aktywność scrapowania
                </span>
              </div>
              <p className="text-xl font-bold text-stone-100">124,500</p>
              <p className="mt-0.5 text-[10px] text-stone-500">
                Łącznie rekordów
              </p>
              <p className="mt-1 text-[10px] text-emerald-400">
                +20%(18,423) · Ostatnie 30 dni
              </p>

              {/* Achievement card */}
              <div className="mt-3 rounded-md border border-emerald-500/20 bg-emerald-500/5 p-2.5">
                <p className="text-[11px] font-medium text-stone-200">
                  Nowy rekord!
                </p>
                <p className="mt-1 text-[9px] leading-relaxed text-stone-400">
                  Listopad miał najwyższy wolumen scrapowania od uruchomienia —
                  124 500 rekordów.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <ChevronLeft className="size-3 text-stone-600" />
                  <div className="flex gap-1">
                    <div className="h-0.5 w-6 rounded-full bg-stone-400" />
                    <div className="h-0.5 w-6 rounded-full bg-stone-700" />
                    <div className="h-0.5 w-6 rounded-full bg-stone-700" />
                    <div className="h-0.5 w-6 rounded-full bg-stone-700" />
                  </div>
                  <ChevronRight className="size-3 text-stone-600" />
                </div>
              </div>
            </div>

            {/* Right chart */}
            <div className="flex flex-1 flex-col p-4">
              <div className="mb-2 self-end rounded-md bg-stone-700/70 px-2 py-1">
                <p className="text-[8px] text-stone-400">8 Nov, 2025</p>
                <p className="text-[9px] font-medium text-stone-200">
                  94 550 rekordów{" "}
                  <span className="text-emerald-400">+20%</span>
                </p>
              </div>
              <div className="flex flex-1 gap-2">
                <div className="flex flex-col justify-between text-[7px] text-stone-600">
                  <span>12K</span>
                  <span>9K</span>
                  <span>6K</span>
                  <span>3K</span>
                  <span>1K</span>
                </div>
                <div className="relative flex-1">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 200 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="heroChartGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#10b981" />
                        <stop
                          offset="100%"
                          stopColor="#10b981"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,85 C15,80 30,75 50,70 S70,60 90,55 S110,45 130,35 S155,25 175,15 L200,5"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,85 C15,80 30,75 50,70 S70,60 90,55 S110,45 130,35 S155,25 175,15 L200,5 V100 H0 Z"
                      fill="url(#heroChartGrad)"
                      opacity="0.15"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-1 text-right text-[7px] text-stone-600">
                18 Oct, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Leads table */}
        <div className="mx-5 mb-5 rounded-lg border border-stone-700/40 bg-stone-800/20 p-3">
          <p className="mb-2 text-xs font-medium text-stone-200">
            3 847 aktywnych leadów
          </p>

          {/* Search + filters */}
          <div className="mb-2.5 flex gap-2">
            <div className="flex flex-1 items-center gap-1.5 rounded-md border border-stone-700/40 bg-stone-800/40 px-2 py-1">
              <Search className="size-2.5 text-stone-500" />
              <span className="text-[9px] text-stone-500">
                Szukaj leada
              </span>
              <span className="ml-auto rounded border border-stone-700/40 px-1 text-[8px] text-stone-600">
                ⌘K
              </span>
            </div>
            <FilterBadge label="Data" />
            <FilterBadge label="Źródło" />
            <FilterBadge label="Etap" />
            <FilterBadge label="Status" />
          </div>

          {/* Table */}
          <div className="text-[9px]">
            <div className="grid grid-cols-[28px_1fr_1fr_1.3fr] gap-2 border-b border-stone-700/30 py-1.5 text-stone-500">
              <span></span>
              <span>ID leada</span>
              <span>Imię</span>
              <span>Email</span>
            </div>
            {[
              {
                id: "001",
                name: "Sarah Chen",
                email: "sarah.c@arcline.com",
                color: "bg-blue-500",
              },
              {
                id: "002",
                name: "Marcus Webb",
                email: "marcus.w@foldstudio.com",
                color: "bg-pink-500",
              },
              {
                id: "003",
                name: "Priya Nair",
                email: "priya.n@kessel.io",
                color: "bg-amber-500",
              },
              {
                id: "004",
                name: "Tom Nilsson",
                email: "tom.n@brightops.com",
                color: "bg-violet-500",
              },
              {
                id: "005",
                name: "Anika Brandt",
                email: "anika.b@talentdrift.de",
                color: "bg-emerald-500",
              },
              {
                id: "006",
                name: "Sara Kowalski",
                email: "sara.k@meridian.co",
                color: "bg-sky-500",
              },
            ].map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-[28px_1fr_1fr_1.3fr] gap-2 border-b border-stone-800/20 py-1.5 text-stone-300"
              >
                <span className="flex items-center">
                  <span className="size-3 rounded border border-stone-700/40" />
                </span>
                <span className="text-stone-500">{row.id}</span>
                <span className="flex items-center gap-1.5">
                  <span
                    className={`size-3.5 shrink-0 rounded-full ${row.color}`}
                  />
                  {row.name}
                </span>
                <span className="truncate text-stone-400">{row.email}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
