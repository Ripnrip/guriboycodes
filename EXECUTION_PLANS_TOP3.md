# Deep Execution Plans — Top 3 + Artful Archives Studio

*July 2026 · Based on direct code inspection of `ripnrip/etherealdimension`, `ripnrip/amorc-search`, and `ripnrip/agent0-career-and-learning` (cloned into this session), plus Vercel build logs and live-site checks for Artful Archives.*

---

## 🚨 URGENT — do this before any portfolio work (15 minutes)

**`Agent0-Career-And-Learning` is public and contains real people's data.** Verified in the clone:
- `vault/contacts/` — 28 markdown dossiers named after real recruiters/executives
- `memory/contacts.json` (28 entries) and `memory/contacts_jas.json` (54 entries) — enriched contact data with per-entry fields
- `vault/Interview Prep.md`, `vault/Target Companies.md`, `vault/Daily Report.md`, `memory/strategy_notes.md`, `memory/verified_hot_jobs.json` — your live job-search operations

**Action now:** GitHub → repo Settings → change visibility to **Private**. Deleting the files is NOT enough — they remain in git history. The clean public path is a **fresh sanitized repo** (see Project 3 plan). API keys are handled correctly (env-injected in `services/openmanus/entrypoint.py`), so the exposure is data, not credentials.

---

# Project 1 — Ethereal Dimension / Hylios

**What I inspected:** `/workspace/etherealdimension` — the etherealdimension.io Next.js site. 399MB repo, 174 files, Next 14.2.35 App Router, pages: `app/page.tsx`, `app/hylios/`, `app/austin-ai/`, `app/ethereal-search/{,explorer,concepts}`, `app/animations/`.

## 1.1 Code & Architecture

**Repo diet (highest priority — blocks everything else):**
- `out/` (85MB static export) is committed. Delete it, add to `.gitignore`. It duplicates `public/assets` (another 85MB).
- Five raw videos sit in the repo root (~70MB): `detected-barricades-final.MP4`, `barricade-demo.MP4`, `EtherealDimensionsSplash.mp4`, two `ScreenRecording_03-18-2025*.MP4`. Move to `public/videos/` at compressed web sizes (H.265/WebM, ≤5MB each) or host on R2/Vercel Blob; keep originals out of git.
- Root-level strays: `.DS_Store` files, duplicate loose components (`ScrollAnimations.jsx`, `ParticleBackground.jsx`, `animated-list.jsx` duplicate `components/*.tsx` versions), stray `index.html`, planning docs with emoji filenames (`🚀 ETHEREAL DIMENSION WEBSITE - ULTIMATE ENHANCEMENT COMPLETE.md`) → move to `docs/`, delete dupes.
- `vercel` (46MB+ CLI package) is in `dependencies` — remove it; it's a global tool, not an app dependency.
- *Why first:* you can't make this repo public (fixing the portfolio's dead link) while it's 399MB of committed builds and raw footage. After cleanup, decide: rewrite history (`git filter-repo` on the big blobs) **or** cut a fresh public repo from the cleaned tree. Fresh repo is faster and safer.

**Copy/content truth pass:**
- `app/hylios/page.tsx` currently says "Consciousness-aware AI… quantum processing power… quantum-enhanced precision." To an engineering audience this reads as vaporware — and it *undersells the real thing*, which is genuinely impressive: RoomPlan/ARKit room scanning shipped to the App Store. Rewrite every "quantum/consciousness" phrase into concrete pipeline language: LiDAR capture → RoomPlan geometry → mesh export → CoreML classification.
- `README.md` describes a stack the code doesn't have (Three.js, React Three Fiber, GSAP, Lenis, React 19, OpenAI — none in `package.json`). Either implement the ambition or (recommended) rewrite the README to the true stack: Next 14, framer-motion, cobe, Supabase, Resend. A hiring manager who opens `package.json` after reading the current README concludes the README is fiction — worst possible outcome.
- `app/austin-ai/page.tsx`: lead with the real `detected-barricades-final` footage; add a metrics strip (model, inference fps, dataset size — pull real numbers from the iOS project) and a pipeline diagram (YOLO training → CoreML conversion → on-device inference).

**Structure/features:**
- Consolidate the three `ethereal-search` routes into one `/search` page that links out to the live Rosicrucian explorer (cross-portfolio synergy).
- Add `app/austin-ai` → rename route to `/austin` (cleaner shareable URL); add `<meta>` OG tags per route — currently missing, so shares render bare.
- Add `.env.example` documenting `SUPABASE_*` and `RESEND_API_KEY` (contact modal), and a `docs/architecture.md`.
- Kill the fragment Vercel projects (`ethereal-dimension-ai-ar`, `-search`, `ethereal-eye`, `-explorer` ×2, `ethereal-dimension-search`) once their content is folded in; point `etherealdimension.io` at this one project.

## 1.2 README & Documentation

New README structure (public showcase repo): hero video/GIF (Hylios scan) → one-line thesis ("Spatial intelligence, shipped — an AR/CV product family: Hylios on the App Store and real-time barricade detection built with Austin DoT") → 3 product cards (Hylios / Austin Barricades / Ethereal Search) each with media + live link → honest tech table → "How the barricade detector works" section with pipeline diagram → App Store badge → author footer. Selling points to lead with: **App Store product**, **city-government partnership**, **on-device ML** (privacy + no-server angle — very 2026).

## 1.3 Visuals & Media

You already own the raw material — production is mostly editing:
- **Hero loop:** `EtherealDimensionsSplash.mp4` → 8s seamless WebM loop for site + README.
- **Austin case study:** `detected-barricades-final.MP4` (bounding-box overlay footage) → 15s clip + 5s GIF. This is the single most convincing artifact in your whole portfolio — real CV on real streets.
- **Hylios:** `public/assets/HyliosScan.gif` exists; re-capture at higher fidelity on device (room scan with mesh forming) for App Store preview + site hero.
- **Style direction:** the established "ethereal" identity — deep slate/navy (`from-slate-900 via-blue-900`), luminous green accent (`--ethereal-green`), particle atmospherics — plus the Ghibli-illustration hero convention from your READMEs. Keep both: Ghibli for GitHub warmth, dark-luminous for product pages.
- **Generation prompts (Grok Imagine or similar):**
  1. *"Studio Ghibli style illustration, a glowing translucent wireframe of a living room floating above an engineer's outstretched hand, soft dusk light, deep navy sky with luminous green fireflies forming a point cloud, painterly, wide 16:9"* — Hylios README hero.
  2. *"Ghibli-style street scene of Austin at golden hour, orange traffic barricades outlined by soft glowing green bounding boxes, a friendly robot observer sketching them in a notebook, warm and whimsical, 16:9"* — Austin case-study hero.
  3. *"Ethereal floating islands connected by bridges of light, each island holding a small glowing product icon (phone with AR mesh, traffic cone, magnifying glass), night sky, bioluminescent palette of teal and green, painterly anime film still, 21:9"* — umbrella site hero.

## 1.4 Portfolio Presentation

- **Tagline:** "Spatial intelligence, shipped."
- **Lead metrics:** Live on the App Store · Built with Austin Dept. of Transportation · Real-time on-device detection (add fps/model size once confirmed from the iOS repo).
- **Showcase:** etherealdimension.io as the product umbrella (this repo), public showcase repo fixing the portfolio's dead GitHub link, refreshed Hylios App Store listing (new screenshots w/ device frames + 15–30s preview video cut from the scan capture).

## 1.5 Roadmap

| Phase | Work | Effort |
|---|---|---|
| **P0 (days 1–2)** | Repo diet: delete `out/`, strays, dupes; compress+relocate videos; fix `.gitignore`; remove `vercel` dep | 1 day |
| **P1 (days 2–4)** | Truth pass: README rewrite to real stack; de-quantum the Hylios/Austin copy; add OG tags + `.env.example` | 1–2 days |
| **P2 (week 2)** | Public showcase repo (or make this one public post-cleanup); fix portfolio dead link; cut hero loop + barricade clip + GIFs | 2–3 days |
| **P3 (weeks 3–4)** | Route consolidation, `/austin` case study page w/ metrics, kill fragment deployments, point domain | 3–4 days |
| **P4 (weeks 4–6)** | Hylios App Store refresh: device captures, preview video, listing copy | 1 wk |

*Dependency:* the Hylios **iOS app repo** wasn't found on this account — I need its name/location for code-level recs and real metrics.

---

# Project 2 — Rosicrucian Knowledge Explorer

**What I inspected:** `/workspace/amorc-search` (public Python backend, 14MB) — the ingest/RAG engine behind the live explorer. Frontend repo (`etherealsearch-frontend` per portfolio link) is inaccessible — likely private under another name; need it for frontend-level recs.

## 2.1 Code & Architecture

**Current state:** ~30 loose scripts in the repo root spanning at least three architecture generations — LlamaIndex + local storage (`setup_index.py`, `load_and_persist_index.py`, `llama_index_api.py`, `rosicrucian_chat_app.py`), ChromaDB era (`setup_chromadb.py`, `index_to_chroma.py`, `llama_index_api_chroma.py`, `rosicrucian_chat_app_chroma.py`, `query_chroma_index.py`, `test_chroma_setup.py`), and modern pieces (`process_with_docling.py` — Docling PDF processing, `enriched_and_index.py`, `batch_process_load.py`). Plus full deploy tooling for three platforms (`Dockerfile.backend/frontend`, `docker-compose.yml`, `nginx.conf`, `Procfile`, `app.yaml`, `deploy_dockerhub.sh`) and committed artifacts (`output/processing.log`, two presentation directories).

**Recommendations:**
1. **Restructure as a package with an honest evolution story** (this is the clever move — the "mess" is actually a great narrative):
   ```
   src/ingest/     # docling processing, chunking, enrichment
   src/index/      # vector store adapters (chroma → qdrant)
   src/api/        # serving layer
   src/eval/       # NEW — retrieval quality harness
   legacy/v1-llamaindex/  legacy/v2-chromadb/   # preserved, documented
   ```
   A `docs/evolution.md` — "v1 LlamaIndex → v2 ChromaDB → v3 Qdrant (live, 73K vectors)" with what each migration taught you — turns repo sprawl into senior-engineer judgment on display.
2. One canonical entrypoint + `Makefile` (`make ingest`, `make index`, `make serve`); single `requirements.txt` (currently two: `requirements.txt` + `chroma_requirements.txt`).
3. **Add `src/eval/`** — even 20 golden questions with retrieval-hit scoring. Measured RAG is the #1 differentiator from tutorial RAG in 2026 interviews; you already have the 60-test frontend suite to pair with it.
4. Hygiene: gitignore `output/`, remove `processing.log`, move the two presentation dirs to `docs/` or out.
5. Keep only `docker-compose.yml` as the blessed deploy path; move Heroku/GCP artifacts to `legacy/`.

## 2.2 README & Documentation

`rosicrucian_knowledge_explorer.md` already contains excellent material — the document-collection table (digests 1920s–2020s, books, symposiums, transcripts) and a Mermaid RAG diagram. Promote it into the README: hero image → headline numbers (**73K+ vectors · 100+ years of texts · page-level PDF citations · timestamp-seek audio/video**) → live-demo link → collection table → architecture diagram (extend the existing Mermaid with Docling + Qdrant + R2) → evolution story link → eval results table. Tone: reverent-but-technical; the "ancient wisdom × modern retrieval" contrast is the hook — don't bury it.

## 2.3 Visuals & Media

- **The money shot (make this first):** 20s screen capture — type a question → answer with citations → click citation → *PDF opens at the exact page, highlighted*. Then a second 10s clip: podcast/video result → click → playback seeks to the exact timestamp. Nobody demos citation UX this well; it converts instantly.
- Hero: Ghibli-style library illustration. Prompt: *"Studio Ghibli style, a vast candle-lit archive library with rose-gold light, floating open books connected by threads of luminous teal light converging into a glowing geometric lattice above a reading desk, dust motes, painterly, 16:9"*.
- Diagram: ingest pipeline (PDF/audio/video → Docling/whisper → chunks → embeddings → Qdrant) rendered in Mermaid dark theme.

## 2.4 Portfolio Presentation

- **Tagline:** "A century of esoteric texts, searchable to the page."
- **Lead metrics:** 73K vectors · 5 media types · page-level citations · 60-test suite.
- **Showcase:** the live app is the demo; add an in-app `/about` architecture page; publish the deep-dive post ("RAG with page-level citations") on the portfolio site — strongest technical-writing candidate you have. GitHub: pin the backend repo post-restructure; get the frontend repo public or showcase-ified (need its real name).

## 2.5 Roadmap

| Phase | Work | Effort |
|---|---|---|
| **P1 (days 1–3)** | Citation + timestamp demo clips/GIFs; README overhaul reusing existing MD material | 2 days |
| **P2 (week 1–2)** | Package restructure + Makefile + legacy/ + evolution doc | 3–4 days |
| **P3 (week 2–3)** | Eval harness w/ golden set; publish results in README | 2–3 days |
| **P4 (week 3–4)** | Architecture deep-dive post + in-app about page | 3 days |

*Dependency:* frontend repo name/access. *Synergy:* shares the "Knowledge & Search" pillar with brain-system; the evolution doc pattern reuses in Agent0.

---

# Project 3 — Agent0 Cluster

**What I inspected:** `/workspace/agent0-career-and-learning` (1.1MB) — genuinely well-architected: `agent.py` orchestrator, 11 focused tools (`tools/scrape_jobs.py`, `enrich_contacts.py`, `research_contact.py`, `draft_message.py`, `outreach_tracker_api.py`, `notify_telegram.py`, `sync_vault.py`, `deep_search.py`…), containerized services (`services/openmanus`, `services/cognee`, `services/openviking`), agent skills as markdown (`skills/*.SKILL.md`), `prompts/system.md`, Obsidian vault integration.

## 3.1 Code & Architecture

1. **Remediate exposure (P0, detailed above):** flip private now → then build the public version as a **fresh repo** (history rewrite is possible but a fresh cut is cleaner). Public repo named e.g. **`sentinel-outreach`** or **`agent-pipeline`**: same `tools/` + `services/` + `skills/` code, but `vault/` and `memory/` replaced by `fixtures/` with obviously-synthetic demo data (Acme Corp, Jane Recruiter). Add `data/` to `.gitignore` permanently; real data never returns to git.
2. **Separate engine from campaign.** Right now code and personal data are interleaved (the repo *is* your job search). Refactor to `DATA_DIR` env-based paths so the engine is generic and any "campaign" (job search, sales outreach, research sweep) is a data directory. This single change converts a personal tool into a reusable framework — which is the portfolio claim you want.
3. **Mock mode** (`MOCK=1 docker compose up`): canned LLM/search responses so an evaluator sees the full loop run without API keys in <5 minutes. Highest-conversion feature a public agent repo can have.
4. Hygiene: remove `tools/scrape_jobs.py.bak_20260317`, `.omc/state`, `vault/.obsidian` from public cut; add a few pytest smoke tests for `tools/` (any tests at all put you ahead of 95% of public agent repos).
5. `agent-zero-macOS`: add a top "What this fork changes vs upstream" section (Tart VM config, 8-core tuning, WhatsApp integration) — the delta is the portfolio content, not the fork.

## 3.2 README & Documentation

Public repo README: hero GIF (agent loop in terminal) → thesis ("An autonomous research-and-outreach pipeline: scrape → enrich → research → draft → track, with persistent graph memory") → architecture diagram (upgrade the ASCII art to Mermaid: agent core ↔ Cognee knowledge graph ↔ OpenManus browser ↔ vault sync ↔ Telegram) → the **skills-as-markdown pattern** section (`skills/*.SKILL.md` — this is exactly the agent-skills paradigm the industry adopted in 2026; name it and claim it) → quickstart with mock mode → "Deployed variants" note linking the PayPal/Venmo case study. Emphasize: multi-service orchestration, graph memory (Cognee), human-in-the-loop outreach (drafts, never auto-sends — important ethical framing).

## 3.3 Visuals & Media

- **Terminal demo:** asciinema/VHS recording of one full loop in mock mode (job found → contact enriched → message drafted → Telegram notification) — 30s, converts to GIF for README.
- **Architecture visual:** dark-theme Mermaid or a Figma render in the ethereal palette.
- Hero prompt: *"Studio Ghibli style, a small diligent robot at a wooden desk at night surrounded by floating glowing index cards connected by threads of light forming a constellation-like knowledge graph, warm lamp light against deep blue, painterly, 16:9"*.
- **Case-study page media (Mercury/Agent0 on portfolio site):** recreated architecture diagrams + a "self-correcting loop" animated SVG (plan → act → verify → repair).

## 3.4 Portfolio Presentation

- **Tagline:** "Agents that finish the job — scrape, enrich, reach out, remember."
- **Lead highlights:** deployed to Venmo & PayPal engineering teams (case study) · multi-service Docker architecture · Cognee graph memory · skills-as-markdown pattern.
- **Showcase:** portfolio case-study page is primary (the enterprise story), public `sentinel-outreach` repo is the evidence, `agent-zero-macOS` supporting. Never re-mention the job-search origin publicly — "outreach automation framework" full stop.

## 3.5 Roadmap

| Phase | Work | Effort |
|---|---|---|
| **P0 (today)** | Repo → private | 15 min |
| **P1 (days 1–3)** | Fresh sanitized public repo: fixtures, DATA_DIR refactor, hygiene | 2–3 days |
| **P2 (week 1–2)** | Mock mode + smoke tests + Mermaid diagram + README | 3 days |
| **P3 (week 2–3)** | Terminal demo recording; agent-zero-macOS delta section; portfolio case-study page | 3–4 days |

*Synergy:* Cognee also appears in your fork list; the vault sync connects to brain-system; the case study pairs with Mercury as the Agentic pillar.

---

# Project 4 — Artful Archives Studio

**What I could inspect:** Vercel projects + failed build log + live sites. **Repo not accessible** — `ripnrip/artful-archives-studio` doesn't exist/isn't authorized; it's on another account or differently named. Live production: `www.artfularchives.studio` (Hostinger VPS, 200 OK). Vercel `artful-archives-studio` (Next 14, pnpm, Playwright): production build **failing since Dec 2025**.

## 4.1 Code & Architecture (from build evidence)

1. **The build failure, precisely:** `pnpm run build` dies during page-data collection for `/api/admin/profile`: `Error: Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL` thrown from `createClient` at module scope (webpack chunk trace: `t.createClient → new o → 76429 → route.js`). Fix both halves: (a) set `NEXT_PUBLIC_SUPABASE_URL`/`SUPABASE_*` keys in the Vercel project env; (b) move `createClient()` calls out of module scope into a lazy `getSupabase()` inside route handlers — module-scope clients crash builds whenever env is absent and create one client per import. Alternatively add `export const dynamic = 'force-dynamic'` to admin API routes so build-time collection skips them. Do (b) regardless; it's the durable fix.
2. **Pick one production host.** VPS is live and working; Vercel copy is broken and drifting. Recommendation: VPS stays canonical (self-hosted infra is a portfolio differentiator against an otherwise Vercel-heavy footprint), Vercel becomes preview-only or gets deleted. Two "productions" guarantee future drift.
3. Full code recs pending access — highest-value audit targets once I'm in: admin/auth flow around that `/api/admin/profile` route, Supabase RLS policies, image pipeline (an art platform lives or dies on image handling), and the Playwright suite state.

## 4.2 README & Documentation

Deployment topology doc first — Next.js + Supabase + Hostinger VPS + (Vercel previews) with a diagram: it's your "I run real infrastructure" credential. Then a product README: what the studio is, gallery features, tech stack, admin capabilities.

## 4.3 Visuals & Media

The art is the media. Curated gallery screenshots (desktop + mobile), an OG-image set per artwork/collection, and a 20s browse-flow capture. Style: let the artwork lead; chrome minimal. If AI-generated gallery pieces fit the brand, this is the natural home for ethereal-dimension-style pieces — cross-pollination with ZAI Vision Studio shaders as ambient gallery backdrops.

## 4.4 Portfolio Presentation

- **Tagline:** "A full-stack gallery platform on real infrastructure."
- **Highlights:** Next.js 14 + Supabase + self-hosted VPS · admin CMS · e-commerce-ready.
- Portfolio card links to the live VPS site; the topology write-up is the technical hook.

## 4.5 Roadmap

| Phase | Work | Effort |
|---|---|---|
| **P0** | You: send repo name + add it here (and/or VPS access, below) | — |
| **P1 (day 1)** | Env vars on Vercel + lazy Supabase client; decide canonical host | half day |
| **P2 (week 1)** | Code audit (auth, RLS, images, tests) once repo accessible | 2 days |
| **P3 (week 2)** | Topology doc + gallery media + portfolio card | 2 days |

---

# Access that unlocks the rest

1. **Worked already:** `add repo` — got me `etherealdimension`, `amorc-search`, `agent0-career-and-learning`. Same one-liner gets me more; I need the **exact names** for: the Hylios **iOS app** repo, the Rosicrucian **frontend** repo, and the **Artful Archives** repo (whichever account they live on — if another account owns them, the Claude GitHub App needs to be installed there).
2. **Hostinger VPS:** no SSH client/keys exist in this sandbox. Either (a) add an SSH key secret + `apt-get install openssh-client` setup script to this Claude Code environment (then I can inspect the VPS directly), or (b) run a local Claude Code session on the Mac where `hostinger-vps` already resolves.
3. **Combined 2-week sprint order** (if executing everything in parallel with me): Day 1: Agent0 private-flip + Artful env fix. Days 1–2: ethereal repo diet. Days 2–4: truth-pass copy + Rosicrucian demo GIFs. Week 2: sanitized `sentinel-outreach` public cut + README overhauls + showcase repo public. Weeks 3–4: case-study pages, eval harness, App Store prep.
