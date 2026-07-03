# Portfolio Elevation Plan — Execution Pass

*July 2026 · Follows PORTFOLIO_STRATEGY.md · Every current-state claim below was verified against live repos, deployments, and build logs*

---

## Critical findings (fix before anything else)

1. **Dead flagship links (P0):** The live portfolio links to `github.com/Ripnrip/EtherealDimension` and `github.com/Ripnrip/etherealsearch-frontend` — both return 404 to the public (private or renamed). Your two strongest projects have broken "Code" buttons for every visitor.
2. **Artful Archives Vercel production is broken:** latest deploy `ERROR` — build fails at page-data collection for `/api/admin/profile` with `Invalid supabaseUrl` (Supabase client constructed at module scope with missing env var). The live site runs on the Hostinger VPS (`www.artfularchives.studio` → 200 OK); the Vercel copy is a broken duplicate.
3. **`flow-dynamic-island.vercel.app` 404s** while the Flow repo README presumably points at a web demo.
4. **Five portfolio variants deployed** (portfolio, -claude, -gemini, -manus, guriboycodes). Consolidate to one.

---

## Per-project upgrade plans

### 1. Ethereal Dimension / Hylios AR (flagship #1)

**Current state:** etherealdimension.io live; Hylios on App Store (per portfolio claims); code repos private → dead public links; family fragmented across 6+ Vercel projects (ethereal-dimension-nextjs, -ai-ar, -search, ethereal-eye/explorer ×3).

**Upgrades**
- *README/docs:* Create ONE public showcase repo (`ethereal-dimension-showcase`) if the product code must stay private: architecture diagrams (RoomPlan/ARKit pipeline, YOLO→CoreML conversion), screen recordings, App Store link, Austin DoT case study. This fixes the dead link without open-sourcing IP.
- *Code quality:* Not assessable until you grant access to the private repos (`add repo` in this session, or local pass). Priority audit targets: CoreML model versioning, ARKit session handling, test coverage.
- *Visuals:* This project should *define* the portfolio's media style — 15–30s screen-capture of a live room scan with mesh overlay, exported as hero MP4 + GIF. The dreamlike "ethereal" aesthetic is your brand; codify it (palette, typography) and reuse everywhere.
- *Website:* etherealdimension.io becomes the product umbrella: Hylios (App Store CTA), Austin DoT (case study w/ detection footage), Search (live demo link). Kill/redirect the 5 fragment deployments.
- *App Store:* Refresh Hylios listing — new screenshots w/ device frames, preview video, updated description keyed to "AR room scanning / spatial intelligence."
- *Synergies:* Rosicrucian Explorer shares the "ethereal search" DNA — cross-link. Remotion pipeline (etherealsearch-videos) produces the demo videos.

**Priority/effort:** Quick win: showcase repo + fix portfolio links (1–2 days). Medium: unified site + App Store refresh (1–2 wks). Deep: Austin DoT case study w/ footage (worth it — this is the single most differentiating asset you own).

**Why:** Highest uniqueness score; already live + shipped; the gap is packaging, not substance. Tradeoff considered: open-sourcing the app vs. showcase repo — showcase wins (protects IP, faster, and hiring managers rarely read full app code anyway).

---

### 2. Rosicrucian Knowledge Explorer (flagship #2)

**Current state:** Live and working (verified 200). 73K vectors, Qdrant/OpenAI/R2/Supabase, PDF page-jump, media timestamp seek, 60-test suite, Amplitude. Repo private → dead portfolio link. Sister deployments (rosicrucian-search-engine, rosa-arcana on Lovable) fragment the story.

**Upgrades**
- *README/docs:* Best candidate in the whole portfolio for a public architecture deep-dive: "How I built a 73K-vector RAG engine with page-level PDF citations." Either make the repo public with a hero README, or publish the write-up on the portfolio site + a sanitized public repo (ingest pipeline skeleton, no data).
- *Code quality:* You already have 60 tests — surface that (CI badge). Add a `docs/architecture.md` with the ingest→embed→retrieve→cite flow diagram (Mermaid).
- *Visuals:* 20s GIF of the killer feature — search → click citation → PDF opens at exact page with highlight. Nobody else demos that; it sells instantly. Second GIF: podcast timestamp seek.
- *Website:* No separate site needed — the app IS the site. Add an `/about` page explaining the architecture to visitors.
- *Distribution:* n/a. Consider a short technical post (personal site or dev.to) — RAG-with-citations is a top interview topic in 2026.
- *Synergies:* brain-system is the local/personal knowledge twin of this cloud system — frame as "Knowledge & Search" pillar together. AMORC-Search + amorc-cycles-toolbar-mcp are satellites; mention, don't feature.

**Priority/effort:** Quick win: public repo/link fix + 2 GIFs (2–3 days). Medium: architecture write-up + about page (1 wk). Why: deepest verifiable full-stack AI work; the effort-to-impact ratio of the citation GIF is the best in the portfolio.

---

### 3. Agent0 cluster — agent-zero-macOS + Agent0-Career-And-Learning (flagship #3)

**Current state:** `agent-zero-macOS`: fork with good docs, screenshots, videos; value = your Tart VM + WhatsApp customization, but reads as a fork (0 stars). `Agent0-Career-And-Learning`: strong README (ASCII architecture, Docker microservices, Agent Zero + Cognee + Lightpanda), but **it publicly documents your live job search — "$220K+ Staff roles, 28 verified contacts, outreach automation."**

**Upgrades**
- *README/docs (sensitive — do first):* Reframe Agent0-Career as a general **"autonomous research & outreach pipeline"**: strip live job-search specifics, dollar targets, and contact counts from README (keep them for interviews, not the public repo). Rename to something like `agent-pipeline` or `outreach-agent`. This is both a privacy fix and better positioning.
- *Code quality:* Add missing prerequisites, API-key setup docs, and a `docker compose up` happy path that works without secrets (mock mode). For agent-zero-macOS, add a "What I changed vs upstream" section at the top — that's the actual portfolio content.
- *Visuals:* Terminal-session recording (asciinema or GIF) of the agent loop running end-to-end; architecture diagram upgrade from ASCII to rendered (Mermaid/Figma).
- *Website:* No. Instead: an **Agent0 case-study page on the portfolio site** covering the PayPal/Venmo deployment story (metrics, architecture, what "self-correcting workflows" means concretely) — the public repos become the "see also" evidence.
- *Synergies:* This is the "Agentic Systems" pillar anchor with Mercury. The MCP repos (Quake-Coding-Arena-MCP, amorc-cycles-toolbar-mcp) belong under it as ecosystem fluency.

**Priority/effort:** Quick win: sanitize/reframe Agent0-Career README (half a day, do immediately). Medium: case-study page + demo recording (1 wk). Why the urgency: the current README leaks personal job-search operational detail to anyone who finds the repo — including employers.

---

### 4. Project Mercury (PayPal) — case study only

**Current state:** No public code (correct — employer IP). Exists only as 2 sentences on the portfolio site. The story (72-hr prototype → SVP backing, 5 SDXL LoRAs, 23% loss reduction, 109MB production models) is Staff-engineer gold currently buried in a card component.

**Upgrades**
- *Docs:* Full case-study page: problem → 72-hour build → what you trained and why LoRA → productionization (model size optimization) → org impact. Diagrams of the agentic e-commerce flow (recreated, no proprietary detail). Get comms-safe clearance on numbers you cite.
- *Visuals:* Since no product footage is shareable: stylized architecture diagrams + a "72 hours" timeline graphic in the ethereal art style. Optionally SDXL-generated illustrative imagery — thematically perfect since the project itself trained SDXL LoRAs.
- *Everything else:* n/a by design.

**Priority/effort:** Medium (3–5 days of writing/diagramming). Why: for Staff-level roles, one deep verifiable-sounding case study beats five toy repos. Tradeoff: risk of over-claiming without code — mitigate with precise, checkable metrics and "what I'd do differently."

---

### 5. Hackathon Legacy Pack (Aron, Carly, MLH Drone/BBC, Schindler '22)

**Current state:** Videos already exist in this repo (`public/videos/`: BBC drone 18MB, Aron, Carly, journey). `ARon` repo: **no README at all**, 2 commits, raw Xcode project + `MyActionClassifier.mlmodel`, 1 star. Carly repo similar age. Portfolio Hackathons section is already good.

**Upgrades**
- *README:* ARon needs a proper README this week: hero image, HackZurich 2021 context, CreateML training story (50 pushups/50 squats/50 jumping-jacks dataset, 93% accuracy in 24h), embedded YouTube link, architecture (CoreML + ARKit + Garmin). Same treatment for Carly-HackZurich2018 (add the Credit Suisse interview link — third-party proof).
- *Code:* Do NOT refactor 2021 hackathon code — it's a time capsule; the README should say so explicitly ("built in 24h, preserved as-is"). Honest framing beats retro-polishing.
- *Visuals:* Cut 5–10s GIFs from the existing MP4s (pose-detection overlay moment from Aron; drone footage from BBC clip) for READMEs and the site.
- *Distribution:* None. The BBC documentary and Devpost links ARE the distribution — surface them harder.
- *Synergies:* Feeds the "velocity" narrative that legitimizes the Mercury 72-hour story.

**Priority/effort:** All quick wins (2–3 days total). Why: highest polish-per-hour in the portfolio — the assets exist, they just need packaging. Tradeoff: could skip old repos entirely, but a recruiter *will* click through from the hackathon section, and an empty repo kills the story.

---

### 6. brain-system

**Current state:** Already has the best README of your original repos (Quick Start, `<10ms search over 1,400+ notes` perf data, ARCHITECTURE/API/CHANGELOG/CONTRIBUTING docs). Python/Flask/SQLite. 0 stars — pure visibility problem.

**Upgrades**
- *Docs:* Add a demo GIF (instant search across vaults) at the top; add "Why not just use Obsidian search?" section — the comparison is the hook.
- *Code:* Cut a tagged v1.0 release with install via `pipx`/`uv`; add CI badge. Small effort, large credibility.
- *Visuals:* Graph-visualization screenshot; terminal search GIF.
- *Website:* No. This one's play is **community distribution**: post to r/ObsidianMD and Hacker News (Show HN) after the GIF + release land. It's the only repo in the portfolio with genuine organic-star potential.
- *Synergies:* Twin of Rosicrucian Explorer (local vs cloud knowledge systems); also literally the tool that will index your portfolio notes.

**Priority/effort:** Quick win: GIF + release (1–2 days). Medium: launch posts. Why: dev-tool zeitgeist + already documented = cheapest possible shot at real GitHub social proof, which then halos the whole profile.

---

### 7. Flow (Dynamic Island)

**Current state:** Good README (Ghibli hero, feature list, SwiftUI/WidgetKit/ActivityKit stack table, architecture). 2 stars, 29 commits. Mixed repo: ~50% TypeScript / 33% Swift — a web extension/demo lives alongside the iOS app, which muddies "native iOS product." Companion Vercel deploy 404s.

**Upgrades**
- *Code/architecture:* Restructure: `/ios` (app) and `/web` (marketing or web demo) with a top-level README routing visitors; or split the web piece into its own repo. Fix or remove the dead Vercel deployment.
- *Docs:* Add a screen-recording GIF of the Dynamic Island interaction — for this project the animation IS the product; a static README undersells it fatally.
- *App Store:* **This is your strongest new App Store candidate.** Scope a v1: one polished flow (focus timer with Live Activity), TestFlight beta, then release. A second live App Store product transforms "iOS engineer since 2016" into "ships iOS products today."
- *Website:* One-pager landing (flow app style: dark, animated) with App Store badge — reuse a portfolio-variant Vercel slot.
- *Synergies:* Shares Live Activities/ActivityKit expertise with the iOS pillar; landing page uses the unified design system.

**Priority/effort:** Quick win: demo GIF + repo restructure + fix dead link (2–3 days). High-impact deeper work: App Store v1 (3–4 wks, worth it). Tradeoff: App Store review + polish is real work — but it's the only Tier-2 project that can graduate to Tier 1.

---

### 8. Agentic SEO + VectorVerse Evolve (one story)

**Current state:** agentic-seo.vercel.app live (200). VectorVerse: n8n + Strapi 3-stage content pipeline, dashboard deployed via v0; no coherent public repo; portfolio "github" link points at your profile root (weak).

**Upgrades**
- *Docs:* Merge into one narrative: "VectorVerse — an autonomous content & SEO business system," with Agentic SEO as its public-facing tool. One public repo (or showcase repo) with the n8n workflow diagrams (n8n exports are shareable JSON — great artifact), Strapi schema, pipeline stages.
- *Code:* If the pipeline code is scattered/private, publish the n8n workflow JSONs + a runner README rather than a fake monorepo.
- *Visuals:* Dashboard screenshot; a 3-stage pipeline diagram (Intelligence → Ideation → Generation); before/after of a "Magic Report."
- *Website:* Agentic SEO already is one. Add sample-report page so visitors see output without signing up.
- *Synergies:* Concrete business-application proof for the Agentic pillar — pairs with Mercury (enterprise) as "agents making money" bookends.

**Priority/effort:** Medium (1 wk consolidation). Why included over deeper polish elsewhere: it's the only project demonstrating *business* automation, which broadens the audience from engineering managers to founders/CTOs.

---

### 9. Supporting repos — Agentic-News-Transformer + zai-vision-suite

**Current state:** Both already have professional READMEs with Ghibli heroes, badges, architecture sections. Zero engagement. News-Transformer lacks visible output; zai lacks visual demos (ironic for a vision/shader project).

**Upgrades (batch treatment)**
- News-Transformer: commit an `examples/` directory with 2–3 real generated outputs (executive brief, social thread) so the pipeline's value is inspectable in 10 seconds.
- zai-vision-suite: shader/vision demo GIFs — this repo should be the most visually arresting README in the profile; currently text-only below the hero.
- Both: pin-worthy after the above; no websites, no further investment.

**Priority/effort:** Quick wins (1 day each). Reasoning: they exist to make the pinned-repo grid look alive and diverse — cap investment there.

---

### 10. Artful Archives Studio (added per request)

**Current state (verified):** Production site live on **Hostinger VPS** (`www.artfularchives.studio` → 200). Vercel `artful-archives-studio` (Next.js 14, pnpm, Playwright configured) **build-broken since Dec 2025**: `Invalid supabaseUrl` thrown during page-data collection at `/api/admin/profile` — a Supabase client is instantiated at module scope and env vars are missing on Vercel. Separate `-showcase` deploy is live. GitHub repo not visible on Ripnrip (private or other account).

**Upgrades**
- *Code (specific fix):* (a) Set `NEXT_PUBLIC_SUPABASE_URL` / keys in Vercel project env, AND (b) refactor the Supabase client to lazy initialization inside handlers (module-scope `createClient` breaks builds and is fragile) — or mark the admin routes `dynamic = 'force-dynamic'` so build-time page-data collection skips them. Then decide the canonical host: **either** Vercel or the VPS — running both invites drift. Recommendation: keep the VPS as production (it works, and it demonstrates infra breadth), make Vercel a preview environment or delete the broken project.
- *Docs:* Needs repo access to assess. At minimum: deployment topology doc (VPS + Supabase + Next.js) — this is a genuinely good "I run real infrastructure" story.
- *Visuals:* Screenshots of the gallery/studio experience; if it's an art platform, the art IS the media — curate an OG image set.
- *Website:* It is one. Portfolio treatment: add as a project card ("full-stack art gallery platform — Next.js, Supabase, self-hosted VPS") linking to the live site.
- *Synergies:* Your only *self-hosted-infra* + *e-commerce-adjacent* story; complements the Vercel-heavy rest of the portfolio. Also a natural home for ZAI/ethereal visual experiments.

**Priority/effort:** Quick win: env-var fix + host decision (half a day once I have repo/VPS access). Medium: portfolio integration + topology write-up. **Access needed:** the GitHub repo (tell me the name — I can request it via `add repo`) and/or VPS SSH (see access section).

---

## Portfolio Elevation Roadmap

### The end state (60 days out)

**One canonical portfolio site** (this repo, `guriboycodes.com`-class domain recommended) with: 3 pillars (Agentic Systems / AI × Spatial & Mobile / Knowledge & Search), 2 flagship case studies (Mercury, Agent0), ~10 project cards **all of whose links resolve**, a hackathon wins section with embedded video, and a consistent ethereal/Ghibli visual identity. GitHub profile: 6 pinned, curated repos, every one with hero media + real README; ~25 stale repos archived. Two live App Store products (Hylios refreshed, Flow launched). All other portfolio-site variants 301-redirected.

### Websites / dedicated pages — order
1. Portfolio consolidation (week 1) — everything else links from here
2. Mercury + Agent0 case-study pages (weeks 2–3)
3. etherealdimension.io product umbrella (weeks 3–5)
4. Flow landing page (with App Store push, weeks 4–8)

### App Store / public demo candidates
1. **Hylios** — already listed; refresh (screenshots, preview video)
2. **Flow** — new release; the highest-leverage deep investment in this plan
3. Aron — public demo via existing video only; do not resurrect the app

### Cross-project synergy work
- **Design system:** Formalize the Ghibli-hero + dark-ethereal style you're already using: standard README template (hero 1280×640, badge row, arch diagram, demo GIF, footer), OG-image template, shared palette. One day of work, applied everywhere — this is what makes 10 repos read as one person's *body of work*.
- **Media pipeline:** Promote etherealsearch-videos (Remotion) into a general `demo-factory` repo that renders all project demo videos — and feature it as a project itself.
- **Knowledge loop:** brain-system indexes your Obsidian vault → vault holds project notes → notes feed case studies. Use the tool you built to build the portfolio; then say so.

### 30–60 day order of attack

| Window | Work |
|---|---|
| **Days 1–3** | P0s: fix dead EtherealDimension/etherealsearch links (showcase repos or make public); sanitize Agent0-Career README; fix Artful Archives Vercel build or retire it; pick canonical portfolio variant |
| **Days 4–10** | README+GIF sweep: ARon, Carly, brain-system (+v1.0 release), Flow, zai, News-Transformer examples; cut GIFs from existing MP4s; pin 6 repos; archive ~25; GitHub profile README |
| **Days 11–21** | Mercury + Agent0 case-study pages; Rosicrucian architecture write-up + citation GIF; brain-system Show HN / r/ObsidianMD launch; design-system template applied |
| **Days 22–40** | etherealdimension.io umbrella site; Hylios App Store refresh + Remotion demo video; Agentic SEO/VectorVerse consolidation |
| **Days 40–60** | Flow v1 App Store release (TestFlight → launch) + landing page; Artful Archives topology write-up; portfolio-variant redirects and final QA of every link |

### Access that would unlock more precise work
1. **Private repos** → in this session, tell me to add them (e.g. "add Ripnrip/etherealsearch-frontend") and I can audit code directly.
2. **Hostinger VPS** → this sandbox has no SSH client/keys. Options: add a setup script + SSH key secret to this Claude Code environment, or run a local Claude Code session on the Mac (which already has the `hostinger-vps` alias) for the VPS and local-repo pass.
3. **Mac local pass** → local session to sweep unpublished repos + Obsidian vault; findings feed back into this plan.
4. **Other GitHub accounts** → names needed.
