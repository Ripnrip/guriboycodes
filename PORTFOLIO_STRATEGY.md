# Portfolio Discovery & Strategy — Deep Pass 1

*Prepared July 2026 · Discovery across GitHub (Ripnrip), Vercel (gsinghdevs-projects), Lovable, and the guriboycodes portfolio repo*

---

## 1. Access & Coverage Audit

| Source | Status | What was covered |
|---|---|---|
| Portfolio repo (this repo) | ✅ Full | 15 curated projects with descriptions, images, 5 demo videos, resume PDF |
| GitHub `Ripnrip` | ✅ Read (public) | All ~52 original repos + ~38 forks enumerated; write access scoped to this repo only |
| Vercel `gsinghdevs-projects` | ✅ Full | 50 projects listed (API cap — may be more); flagship URLs verified live |
| v0.dev | ⚠️ Indirect | No direct API; 13+ `v0-*` projects visible via Vercel deployments |
| Lovable | ✅ Full | 2 workspaces, ~10 real projects (ethe-ui-spell, agent-folio-pulse, coach-connect-ai, rosa-arcana, Vivian's Lagree Studio, Graph Explorer Prime…) |
| Mac Studio / MacBook | ❌ Not reachable | Remote sandbox — no SSH/computer-use to local machines from this session |
| Obsidian vault | ❌ Not reachable | But `brain-system` repo (multi-vault Obsidian indexer) confirms the vault exists locally |
| Other GitHub accounts | ❌ Unknown | Need account names to enumerate |

**Gaps to close in a future pass:** local Mac repos, Obsidian vault notes, other GitHub accounts, v0.dev generation history. None of these block the strategy below — the public footprint is already large enough to curate from.

---

## 2. Full Inventory (condensed)

**Original GitHub repos — modern era (2025–2026):**
Agent0-Career-And-Learning (Python, job-search pipeline w/ AI enrichment), agent-zero-macOS (Agent Zero on Tart VM + WhatsApp), brain-system (multi-vault Obsidian second brain, SQLite indexing), Agentic-News-Transformer, zai-vision-suite (GLM-4.6V multi-platform vision), Flow (Dynamic Island productivity), Quake-Coding-Arena-MCP, amorc-cycles-toolbar-mcp, AMORC-Search, etherealsearch-showcase, etherealsearch-videos (Remotion demo videos), Transcribe-Translate, GurduwaraLangarGame, 4× portfolio variants.

**Original GitHub repos — iOS era (2016–2021):**
ARon (HackZurich '21), Carly-HackZurich2018, BeeBack family (AR, 3D models, splash), EyePop-iOS/Scraper, ChildSafe, OpenFDALabels, ARRecognition, ParabitBeacon, WayajiOs, GatherTeam, and ~10 more Swift/Obj-C demos.

**Vercel (50 projects):** ethereal-dimension family (nextjs, ai-ar, search, ethereal-eye/explorer ×3), rosicrucian family (knowledge-explorer, search-engine, rosa-arcana), 4 portfolio variants, 13+ v0-* experiments (eeg-game, vector-verse dashboard, coach-connect, cycles-of-life, tsf-community-exchange…), client/personal (gng wedding sites, artful-archives-studio ×2, outlook-* ×4), tool forks (opencut, novel, super-productivity).

**Existing media assets:** 4 hackathon demo MP4s (MLH drone/BBC, Aron, Carly, HackZurich journey), Ghibli-style project art ×15, LinkedIn screenshots, resume PDF, Remotion video pipeline.

**Verified live:** etherealdimension.io · rosicrucian-knowledge-explorer.vercel.app · agentic-seo.vercel.app · ginaandgurinder.com · both portfolio variants.

---

## 3. The Shortlist (14 projects, 3 tiers)

**Selection criteria, in priority order:**
1. **Differentiated story** — does it prove something most senior engineers can't?
2. **Demonstrability** — live URL, App Store listing, or video that exists today
3. **Technical depth** — real systems (vectors, CV models, agents), not scaffolds
4. **Effort-to-polish ratio** — how far is it from portfolio-grade?
5. **Recency & relevance** — agentic AI and spatial computing are the 2026 market

### Tier 1 — Flagships (carry the portfolio)

| # | Project | Why it leads | Polish gap |
|---|---|---|---|
| 1 | **Ethereal Dimension** (Hylios AR scanner + Austin DoT barricade CV) | AI × spatial computing with a *government partnership* and an *App Store product*. Nobody else has this combo. | Site live; needs unified case-study page, App Store link surfaced, demo video |
| 2 | **Rosicrucian Knowledge Explorer** | 73K-vector full-stack RAG (Qdrant/OpenAI/R2/Supabase) with PDF page-jump, media timestamp seek, 60 tests, analytics. Deepest public full-stack AI work. | Live + repo exists; needs architecture README + demo GIF |
| 3 | **Agent0 @ PayPal/Venmo** + `agent-zero-macOS` + `Agent0-Career-And-Learning` | Agentic AI *deployed to real engineering orgs*. The public repos prove hands-on agent infra skill. | Internal code unshareable → write as case study; polish the two public repos |
| 4 | **Project Mercury (PayPal)** | 72-hr prototype → SVP backing; 5 SDXL LoRAs trained, 23% loss reduction. Staff-level impact story. | No shareable code → case-study write-up + visuals only |
| 5 | **Hackathon record** (Aron '21, Schindler AR '22 🥇, Carly '18 finalist, MLH London 🥇 + BBC documentary) | Third-party validation + velocity proof. Videos already exist. | Package as one "wins" page with embedded videos; clip GIFs |

### Tier 2 — Proof of range

| # | Project | Why included | Polish gap |
|---|---|---|---|
| 6 | **brain-system** | Obsidian multi-vault second brain w/ SQLite indexing — dev-tool zeitgeist, highly starrable | README, demo GIF, install docs |
| 7 | **Flow (Dynamic Island)** | Shippable iOS product; 2 stars already | Decide: App Store release or polished TestFlight demo |
| 8 | **Agentic SEO + VectorVerse Evolve** | End-to-end automation business system (n8n, Strapi, 3-stage content pipeline) | Live; consolidate into one story, add repo/README |
| 9 | **Agentic News Transformer** | Clean Python multi-agent pipeline, public repo | README + sample output artifacts |
| 10 | **ZAI Vision Studio** | Creative GPU/shader + AI vision work — differentiates aesthetically | README, shader demo GIFs |
| 11 | **MCP tooling** (Quake-Coding-Arena-MCP, amorc-cycles-toolbar-mcp) | MCP is the protocol of the moment; shows ecosystem fluency | Merge/curate into one polished MCP repo |

### Tier 3 — Character & community

| # | Project | Why included |
|---|---|---|
| 12 | **Gurdwara Langar App + Game** | Community impact + gamification; humanizes the portfolio |
| 13 | **Gina & Gurinder wedding site** | Design polish with real users; doubles as front-end craft proof |
| 14 | **etherealsearch-videos (Remotion)** | Meta-skill: you build your own demo-video pipeline — feature it as tooling |

### Explicitly excluded, and why
- **All ~38 forks** (clawket, cognee, opencut, super-productivity, novel, airi…) — forks dilute; keep starred, not showcased.
- **v0-* one-offs & outlook experiments** — exploration, not portfolio. Archive or fold learnings into a single "AI experimentation lab" note.
- **Client/medical work** (Nurse-Practitioner repos, Vivian's Lagree) — private client material; list as "client work" line-items only if needed.
- **Pre-2018 Swift demos** (GatherTeam, ASS, Reportes…) — superseded by the modern iOS story. Archive on GitHub to clean the profile.
- **Portfolio site variants** (portfolio, portfolio-claude, portfolio-gemini, guriboycodes_v2) — consolidate to ONE canonical site; delete/archive the rest. Four live variants actively hurt credibility.

---

## 4. Portfolio Strategy

### Positioning: **"I take AI out of the chat box and ship it — to the App Store, to the streets of Austin, to PayPal's engineering org."**

Three pillars, each anchored by a flagship:
1. **Agentic Systems** — Agent0, Mercury, Agentic SEO/News (enterprise-grade agent engineering)
2. **AI × Spatial / Mobile** — Ethereal Dimension/Hylios, Aron, Carly, Flow (10 years of iOS + CV/AR)
3. **Knowledge & Search** — Rosicrucian Explorer, brain-system, MCP tools (RAG done properly)

The hackathon record is the connective tissue: 2× first place, BBC documentary, a decade of shipping under 72-hour constraints.

### Quick wins (≤2 weeks)
1. **Consolidate to one portfolio site**; 301/archive the other three variants.
2. **Pin 6 repos on GitHub** (rosicrucian frontend, brain-system, Flow, Agent0-Career, Agentic-News-Transformer, zai-vision-suite) and archive ~25 stale repos.
3. **READMEs with hero GIF for the 8 public shortlist repos** — biggest polish-per-hour available.
4. **Cut GIFs from existing MP4s** (drone/BBC, Aron, Carly) for READMEs and the site.
5. **Add OG images + analytics** to the live flagship deployments.

### Medium-term (1–2 months)
6. **Case-study pages for Mercury and Agent0** (code private → story, architecture diagrams, metrics).
7. **Hylios App Store push**: refreshed listing, 60–90s demo video (Remotion pipeline or HeyGen).
8. **Flow → App Store** as the second shipped product.
9. **One architecture deep-dive post** on the 73K-vector RAG system (great hiring-manager bait).

### Longer-term
10. Unified **etherealdimension.io** product site tying the AR/CV/search family together.
11. Demo-video series using the Remotion pipeline (turn a cost center into a showcase).

---

## 5. Reasoning, Assumptions & Alternatives

**Exploration order:** portfolio repo first (curated index = highest signal density), then GitHub full enumeration (ground truth), then Vercel (what's actually deployed), then Lovable (long tail). Account-level GitHub API was proxy-blocked; worked around via public profile pages.

**Key assumptions:** portfolio claims (Austin DoT, SVP backing, App Store availability of Hylios) are accurate and evidenceable; Mercury/Agent0 code stays private (hence case-study treatment); the Mac holds unpublished work that could change Tier 2 composition but likely not Tier 1.

**Main tradeoff:** recency vs. proof. Legacy iOS work is old but has *external validation* (BBC, Credit Suisse interview, Devpost). Resolution: keep it, but frame it as the *foundation* of the mobile pillar rather than standalone projects.

**Alternative curations considered:**
- *Narrow AI-only portfolio* (drop iOS history) — rejected: the AI×mobile combination is the differentiator, not a distraction.
- *Chronological "10 years of shipping"* — rejected as primary frame (buries the lede) but useful as an About-page timeline.
- *Product-studio framing* (everything as shipped products) — premature until Hylios + Flow are both live on the App Store; revisit after execution phase.
