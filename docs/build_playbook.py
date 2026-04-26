"""
Generate the TaskPanels SEO + GEO Playbook PDF.

Run:  python3 docs/build_playbook.py
Output: docs/seo-geo-playbook.pdf
"""

from pathlib import Path
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate,
    PageTemplate,
    Frame,
    Paragraph,
    Spacer,
    PageBreak,
    Table,
    TableStyle,
    NextPageTemplate,
)

# --- Colors (TaskPanels palette: slate ink, blue accent, off-white surface) ---
BG = HexColor("#0f172a")        # slate-900 — cover background
INK = HexColor("#0f172a")       # slate-900 — body text
SURFACE = HexColor("#f8fafc")   # slate-50 — table headers / soft fills
SURFACE_SOFT = HexColor("#f1f5f9")
BLUE = HexColor("#2563eb")      # blue-600 — primary accent
BLUE_HOVER = HexColor("#1d4ed8")
EMERALD = HexColor("#059669")   # accent for "done" states (visual reference only)
MUTED = HexColor("#64748b")     # slate-500
BORDER = HexColor("#e2e8f0")    # slate-200

OUT = Path(__file__).parent / "seo-geo-playbook.pdf"

# --- Page templates ---
PAGE_W, PAGE_H = LETTER
MARGIN = 0.75 * inch


def cover_page(canvas, doc):
    canvas.saveState()
    # Dark background
    canvas.setFillColor(BG)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # Blue accent strip
    canvas.setFillColor(BLUE)
    canvas.rect(0, PAGE_H - 0.5 * inch, PAGE_W, 0.08 * inch, fill=1, stroke=0)
    # Title
    canvas.setFillColor(white)
    canvas.setFont("Times-Bold", 36)
    canvas.drawString(MARGIN, PAGE_H - 2.2 * inch, "TaskPanels")
    canvas.setFont("Times-Bold", 36)
    canvas.setFillColor(BLUE)
    canvas.drawString(MARGIN, PAGE_H - 2.8 * inch, "SEO + GEO Playbook")
    # Subtitle
    canvas.setFillColor(white)
    canvas.setFont("Helvetica", 13)
    canvas.drawString(
        MARGIN,
        PAGE_H - 3.3 * inch,
        "Search-engine and generative-engine optimization plan",
    )
    canvas.drawString(
        MARGIN, PAGE_H - 3.55 * inch, "for the TaskPanels marketing site."
    )
    # Domain
    canvas.setFont("Helvetica", 11)
    canvas.setFillColor(BLUE)
    canvas.drawString(MARGIN, PAGE_H - 4.2 * inch, "taskpanels.app")
    # Footer
    canvas.setFont("Helvetica", 9)
    canvas.setFillColor(HexColor("#94a3b8"))
    canvas.drawString(MARGIN, 0.6 * inch, "Version 1.0  ·  April 2026")
    canvas.drawRightString(
        PAGE_W - MARGIN, 0.6 * inch, "Reference before every build."
    )
    canvas.restoreState()


def body_page(canvas, doc):
    canvas.saveState()
    # Header rule
    canvas.setFillColor(BLUE)
    canvas.rect(0, PAGE_H - 0.05 * inch, PAGE_W, 0.05 * inch, fill=1, stroke=0)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(
        MARGIN, PAGE_H - 0.4 * inch, "TaskPanels — SEO + GEO Playbook"
    )
    canvas.drawRightString(
        PAGE_W - MARGIN, PAGE_H - 0.4 * inch, f"Page {doc.page}"
    )
    # Footer
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.5)
    canvas.line(
        MARGIN, 0.55 * inch, PAGE_W - MARGIN, 0.55 * inch
    )
    canvas.setFont("Helvetica-Oblique", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(
        MARGIN,
        0.4 * inch,
        "Reference this guide before every change to the taskpanels-website domain.",
    )
    canvas.restoreState()


# --- Styles ---
styles = getSampleStyleSheet()

H1 = ParagraphStyle(
    "H1",
    parent=styles["Heading1"],
    fontName="Times-Bold",
    fontSize=22,
    textColor=INK,
    spaceBefore=8,
    spaceAfter=10,
    leading=26,
)

H2 = ParagraphStyle(
    "H2",
    parent=styles["Heading2"],
    fontName="Times-Bold",
    fontSize=15,
    textColor=BLUE_HOVER,
    spaceBefore=14,
    spaceAfter=6,
    leading=18,
)

H3 = ParagraphStyle(
    "H3",
    parent=styles["Heading3"],
    fontName="Helvetica-Bold",
    fontSize=11,
    textColor=INK,
    spaceBefore=8,
    spaceAfter=3,
    leading=14,
)

BODY = ParagraphStyle(
    "Body",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=10,
    textColor=INK,
    leading=14,
    spaceAfter=6,
    alignment=TA_LEFT,
)

CALLOUT = ParagraphStyle(
    "Callout",
    parent=BODY,
    fontName="Helvetica-Oblique",
    fontSize=9.5,
    textColor=MUTED,
    leftIndent=10,
    rightIndent=10,
    leading=13,
    spaceBefore=4,
    spaceAfter=8,
)

BULLET = ParagraphStyle(
    "Bullet",
    parent=BODY,
    fontName="Helvetica",
    fontSize=10,
    textColor=INK,
    leftIndent=18,
    bulletIndent=6,
    leading=14,
    spaceAfter=2,
)

TOC_ROW = ParagraphStyle(
    "TocRow",
    parent=BODY,
    fontName="Helvetica",
    fontSize=10.5,
    textColor=INK,
    leading=18,
    spaceAfter=2,
)

PHASE_LABEL = ParagraphStyle(
    "PhaseLabel",
    parent=BODY,
    fontName="Helvetica-Bold",
    fontSize=9,
    textColor=BLUE_HOVER,
    leading=12,
    spaceAfter=2,
)


def bullets(items):
    return [Paragraph(f"•&nbsp;&nbsp;{i}", BULLET) for i in items]


def section_box(title, sub):
    """Heading bar with phase label and title."""
    tbl = Table(
        [[Paragraph(f'<font color="#1d4ed8">{sub}</font>', PHASE_LABEL)],
         [Paragraph(title, H1)]],
        colWidths=[6.5 * inch],
    )
    tbl.setStyle(
        TableStyle([
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ("LINEBELOW", (0, 1), (-1, 1), 1.2, BLUE),
        ])
    )
    return tbl


def table_with_header(rows, col_widths):
    """Standard table with surface-tinted header row."""
    tbl = Table(
        [[Paragraph(c, H3) if i == 0 else Paragraph(c, BODY) for c in r]
         for i, r in enumerate(rows)],
        colWidths=col_widths,
    )
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SURFACE),
        ("TEXTCOLOR", (0, 0), (-1, 0), INK),
        ("LINEBELOW", (0, 0), (-1, -1), 0.3, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return tbl


def build():
    doc = BaseDocTemplate(
        str(OUT),
        pagesize=LETTER,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=0.85 * inch,
        bottomMargin=0.75 * inch,
        title="TaskPanels — SEO + GEO Playbook",
        author="TaskPanels",
    )

    cover_frame = Frame(
        0, 0, PAGE_W, PAGE_H, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0
    )
    body_frame = Frame(
        MARGIN,
        0.75 * inch,
        PAGE_W - 2 * MARGIN,
        PAGE_H - 1.55 * inch,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )

    doc.addPageTemplates([
        PageTemplate(id="Cover", frames=cover_frame, onPage=cover_page),
        PageTemplate(id="Body", frames=body_frame, onPage=body_page),
    ])

    story = []

    # --- COVER ---
    story.append(NextPageTemplate("Body"))
    story.append(PageBreak())

    # --- TABLE OF CONTENTS ---
    story.append(Paragraph("Contents", H1))
    toc_rows = [
        ("How to use this playbook", "3"),
        ("Progress tracker", "4"),
        ("Phase 0  ·  Baseline & audit", "5"),
        ("Phase 1  ·  Site architecture & spoke pages", "7"),
        ("Phase 2  ·  Content engine", "10"),
        ("Phase 3  ·  Schema markup", "12"),
        ("Phase 4  ·  AI search & GEO signals", "13"),
        ("Phase 5  ·  Per-page metadata", "14"),
        ("Phase 6  ·  Technical foundation & compliance", "15"),
        ("Phase 7  ·  Analytics & measurement", "17"),
        ("Phase 8  ·  Authority building", "18"),
        ("Execution timeline", "19"),
        ("Tools & resources", "20"),
    ]
    rows = []
    for label, page in toc_rows:
        rows.append([
            Paragraph(label, TOC_ROW),
            Paragraph(f'<font color="#64748b">{page}</font>', TOC_ROW),
        ])
    tbl = Table(rows, colWidths=[5.7 * inch, 0.6 * inch])
    tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LINEBELOW", (0, 0), (-1, -1), 0.3, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 2),
        ("RIGHTPADDING", (0, 0), (-1, -1), 2),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("ALIGN", (1, 0), (1, -1), "RIGHT"),
    ]))
    story.append(tbl)
    story.append(PageBreak())

    # --- HOW TO USE ---
    story.append(Paragraph("How to use this playbook", H1))
    story.append(Paragraph(
        "This document is the canonical SEO and GEO (Generative Engine Optimization) "
        "plan for the TaskPanels marketing site at <b>taskpanels.app</b>. It covers "
        "traditional search optimization (Google, Bing) <i>and</i> AI-citation "
        "optimization for ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews.",
        BODY,
    ))
    story.append(Paragraph("The contract", H2))
    story.append(Paragraph(
        "<b>Reference this playbook before every change to the domain.</b> "
        "Every new page, schema change, copy revision, navigation tweak, image swap, "
        "or technical refactor should pass three checks:", BODY,
    ))
    for p in bullets([
        "<b>Architecture check:</b> Does this fit the hub-and-spoke model in Phase 1, or does it create an orphan page?",
        "<b>Citation check:</b> Does the page contain at least one quotable, attributable claim that an AI engine can pull (Phase 4)?",
        "<b>Metadata check:</b> Does the page have a unique title, description, canonical, OG image, and the right schema (Phases 3 &amp; 5)?",
    ]):
        story.append(p)

    story.append(Paragraph("Phase model", H2))
    story.append(Paragraph(
        "Phases are sequenced by dependency, not strict calendar weeks. "
        "Phase 0 is one-time baseline. Phases 1–6 are buildout in order. Phases 7 and 8 are ongoing. "
        "You don't have to finish a phase before starting the next — but you do need Phase 0 done first.",
        BODY,
    ))

    story.append(Paragraph("Conventions", H2))
    for p in bullets([
        "<b>Spoke</b> = a dedicated indexable URL targeting one intent cluster. Spokes link to the hub (homepage) and to siblings.",
        "<b>E-E-A-T</b> = Experience, Expertise, Authoritativeness, Trustworthiness — Google's quality framework, also used heuristically by AI engines.",
        "<b>GEO</b> = Generative Engine Optimization — making content easy for LLM-based search to cite.",
        "<b>Citability</b> = whether a page contains discrete, attributable claims an AI engine will quote.",
        "<b>llms.txt</b> = emerging standard at <font face=\"Courier\">/llms.txt</font> that points AI crawlers at canonical content.",
    ]):
        story.append(p)

    story.append(PageBreak())

    # --- PROGRESS TRACKER ---
    story.append(Paragraph("Progress tracker", H1))
    story.append(Paragraph(
        "Snapshot of where the project stands as of <b>April 2026</b>. "
        "Update this table at the end of each work session before committing.",
        BODY,
    ))

    progress = [
        ["Item", "Phase", "Status"],
        ["Production deploy on Vercel", "—", "Done"],
        ["Single-page hub (homepage) with all marketing sections", "1", "Done"],
        ["Hero / Problem / Comparison / HowItWorks / Outcomes / SummaryPreview / UnrealizedEffort / Audience / Testimonials / Pricing / FAQ / FinalCTA / Footer", "1", "Done"],
        ["Top-level pages: /features, /pricing, /privacy, /terms", "1", "Done"],
        ["Organization + WebSite + SoftwareApplication JSON-LD", "3", "Partial — needs sameAs, contactPoint, aggregateRating"],
        ["FAQPage JSON-LD on homepage FAQ section", "3", "Done"],
        ["robots.txt with explicit AI-crawler allow-list", "4 / 6", "Done"],
        ["llms.txt", "4", "Done"],
        ["sitemap.ts (5 URLs)", "6", "Done"],
        ["Canonical URLs on all 5 pages", "5 / 6", "Done"],
        ["metadataBase + sitewide robots / OG locale", "5 / 6", "Done"],
        ["Privacy policy + Terms of Service pages", "6", "Done"],
        ["GTM container GTM-MMVK7FPJ V2 (CookieYes + GA4)", "7", "Done — published 2026-04-26"],
        ["GA4 (G-G00NB917QJ) routed exclusively via GTM with Built-in Consent Checks", "7", "Done"],
        ["CookieYes consent banner (live on production)", "6", "Done"],
        ["Google Consent Mode v2 defaults inline in <head>", "6", "Done — gcs=G100 → G111 verified end-to-end"],
        ["Open Graph + Twitter cards (app/opengraph-image.tsx + twitter-image.tsx)", "5", "Done — dynamic, statically optimized at build time, branded design"],
        ["Organization.logo JSON-LD repointed at live OG endpoint", "3", "Done — no more 404 for AI engines extracting logo"],
        ["Per-page OG metadata (titles, descriptions, OG images)", "5", "Partial — sitewide default works; spokes will get their own opengraph-image.tsx"],
        ["About page with founder bio + Person JSON-LD", "1 / 4", "Done — /about live with Brian Winckel bio, headshot, sameAs LinkedIn/X/brianwinckel.com"],
        ["Organization.founder field linking to Person entity", "3", "Done"],
        ["/privacy + /terms updated for GA4/GTM/CookieYes/Consent Mode v2 disclosure", "6", "Done — cookies enumerated, retention windows, GDPR/CCPA rights, Manage Preferences UX documented"],
        ["Spoke pages (/for-engineers, /for-managers, /features/*, /vs/*)", "1", "Not started"],
        ["Blog / FAQ / Glossary / Comparison / Changelog", "2", "Not started"],
        ["Article / Review / BreadcrumbList / HowTo / Person schema", "3", "Not started"],
        ["Testimonials with real names + Review schema", "3 / 4", "Not started"],
        ["/privacy enumerates GA4 + CookieYes cookies", "6", "TODO — banner is live; policy text needs to catch up"],
        ["404 / 500 pages (branded)", "6", "Default Next.js"],
        ["Google Search Console + Bing Webmaster verification", "0 / 7", "Not started"],
        ["Microsoft Clarity", "7", "Not started — install through GTM (no code deploy needed)"],
        ["Directory listings (Product Hunt, G2, Capterra, Crunchbase)", "8", "Not started"],
        ["LinkedIn company page + sameAs in Organization schema", "4 / 8", "Not started"],
        ["Backlink program / podcast appearances", "8", "Not started"],
    ]
    story.append(table_with_header(progress, [3.6 * inch, 0.6 * inch, 2.3 * inch]))
    story.append(Spacer(1, 12))
    story.append(Paragraph(
        "<b>How to update:</b> after each commit/push, edit the progress list in "
        "<font face=\"Courier\">docs/build_playbook.py</font> and re-run the script to "
        "regenerate this PDF.",
        CALLOUT,
    ))

    story.append(PageBreak())

    # ===== PHASE 0 =====
    story.append(section_box("Phase 0  ·  Baseline & audit", "ONE-TIME — DO BEFORE ANY OTHER PHASE"))
    story.append(Paragraph(
        "Before writing a single new page, capture the starting state so lift can be measured. "
        "Everything in this phase is read-only; nothing changes the live site.",
        BODY,
    ))

    story.append(Paragraph("0.1  GEO baseline audit", H2))
    story.append(Paragraph(
        "Run the <font face=\"Courier\">/geo</font> skill against the production URL. "
        "It produces a 0–100 GEO score plus sub-scores for citability, AI crawler access, "
        "llms.txt compliance, brand mentions, schema, technical SEO, content E-E-A-T, "
        "and platform readiness for ChatGPT / Perplexity / Gemini / AI Overviews / Bing Copilot.",
        BODY,
    ))
    story.append(Paragraph(
        "TaskPanels has a March 2026 baseline saved at <font face=\"Courier\">GEO-AUDIT-REPORT.md</font> "
        "(28→50 / 100 lift after the initial schema + crawler-access pass). "
        "Save future audit JSON to <font face=\"Courier\">docs/audits/baseline-YYYY-MM.json</font> and the "
        "PDF report to <font face=\"Courier\">docs/audits/baseline-YYYY-MM.pdf</font>. "
        "Re-run quarterly and after each major phase completion.",
        BODY,
    ))

    story.append(Paragraph("0.2  Search Console + Bing Webmaster verification", H2))
    for p in bullets([
        "Verify <b>taskpanels.app</b> in Google Search Console (DNS or HTML meta).",
        "Verify in Bing Webmaster Tools (import from GSC works).",
        "Submit the existing <font face=\"Courier\">sitemap.xml</font> on first verification.",
        "Enable email alerts for manual actions and Core Web Vitals regressions.",
    ]):
        story.append(p)

    story.append(Paragraph("0.3  Analytics scaffolding", H2))
    story.append(Paragraph(
        "GA4 (<font face=\"Courier\">G-G00NB917QJ</font>) is already wired in "
        "<font face=\"Courier\">app/layout.tsx</font> via <font face=\"Courier\">@next/third-parties/google</font>. "
        "Decide on the rest before Phase 7 install:",
        BODY,
    ))
    for p in bullets([
        "Google Tag Manager container ID — recommended to refactor GA4 behind GTM so future tags don't require deploys.",
        "Microsoft Clarity project ID — heatmaps + session replay.",
        "(Optional) PostHog or GrowthBook for product analytics + experiments.",
    ]):
        story.append(p)

    story.append(Paragraph("0.4  Performance baseline", H2))
    for p in bullets([
        "Run PageSpeed Insights on homepage, /features, /pricing. Save mobile + desktop reports.",
        "Note current Core Web Vitals: <b>LCP</b> (target &lt;2.5s), <b>INP</b> (target &lt;200ms), <b>CLS</b> (target &lt;0.1).",
        "Likely LCP risk: the hero illustration and dashboard preview screens. Verify they're served as AVIF/WebP via <font face=\"Courier\">next/image</font>.",
        "Capture Lighthouse score for SEO + Best Practices + Accessibility.",
    ]):
        story.append(p)

    story.append(Paragraph("0.5  Crawl baseline", H2))
    story.append(Paragraph(
        "Run Screaming Frog (free up to 500 URLs). Export and store. Look for: "
        "broken links (4xx/5xx), redirect chains, missing alt text, duplicate titles "
        "or descriptions, missing canonicals, orphan pages, thin content (&lt;300 words). "
        "With only 5 URLs live today this should be a clean run — re-run after every spoke launch.",
        BODY,
    ))

    story.append(Paragraph("Exit criteria", H3))
    for p in bullets([
        "Baseline GEO score saved",
        "Baseline Lighthouse / PSI saved",
        "Baseline crawl saved",
        "GSC + Bing verified (or scheduled to verify in Phase 6 with DNS)",
    ]):
        story.append(p)

    story.append(PageBreak())

    # ===== PHASE 1 =====
    story.append(section_box(
        "Phase 1  ·  Site architecture & spoke pages",
        "BIGGEST GEO LEVER — DO IMMEDIATELY AFTER BASELINE"
    ))
    story.append(Paragraph(
        "TaskPanels has a homepage hub plus <font face=\"Courier\">/features</font>, "
        "<font face=\"Courier\">/pricing</font>, and the legal pair. The homepage is doing the work of "
        "ten landing pages. Splitting that into a <b>hub + dedicated spoke pages</b> is the single "
        "highest-leverage SEO move because it lets each URL target one intent cluster instead of "
        "diluting every keyword into the same homepage.",
        BODY,
    ))

    story.append(Paragraph("Spoke priority list", H2))
    spokes = [
        ("1", "/for-engineers", "engineer daily summary, standup notes, shipped work tracker"),
        ("2", "/for-managers", "team status report, manager 1:1 prep, weekly rollup"),
        ("3", "/for-designers", "design work tracking, revisions log, creative status"),
        ("4", "/for-consultants", "client status report, billable work summary, deliverable tracker"),
        ("5", "/for-freelancers", "freelance work log, client update template, prove impact"),
        ("6", "/features/daily-summary", "AI daily work summary, automatic standup generator"),
        ("7", "/features/unrealized-effort", "track shelved work, scrapped projects, pivots"),
        ("8", "/features/blockers", "blocker tracking, follow-up reminders, approvals log"),
        ("9", "/features/weekly-rollup", "weekly work report, project rollup, status update"),
        ("10", "/features/exports", "export work summary, email status update, PDF report"),
        ("11", "/about", "founder story, E-E-A-T, sameAs"),
        ("12", "/vs/asana-personal", "TaskPanels vs Asana for personal work"),
        ("13", "/vs/jira-individual", "TaskPanels vs Jira for individual contributors"),
        ("14", "/vs/notion-tasks", "TaskPanels vs Notion task tracking"),
        ("15", "/vs/time-trackers", "TaskPanels vs Toggl / Harvest / Clockify"),
        ("16", "/vs/employee-monitoring", "TaskPanels vs surveillance software (anti-positioning)"),
        ("17", "/contact", "conversion endpoint with own schema"),
    ]
    rows = [["#", "URL", "Intent / target keyword cluster"]]
    for s in spokes:
        rows.append(list(s))
    story.append(table_with_header(rows, [0.4 * inch, 2.0 * inch, 4.1 * inch]))

    story.append(Paragraph("Anatomy of a spoke page", H2))
    for p in bullets([
        "<b>H1</b> with the primary keyword, near the start of the visible page.",
        "<b>One-sentence quotable summary</b> directly under the H1 (citation hook for AI).",
        "<b>800–1,500 words</b> of substantive content. No fluff — AI engines penalize filler.",
        "<b>2–3 H2 sections</b> answering long-tail / question-based queries.",
        "<b>FAQ block</b> at the bottom (3–6 Qs) wrapped in <font face=\"Courier\">FAQPage</font> schema.",
        "<b>Internal links</b> back to the hub and to ≥3 sibling spokes with descriptive anchor text (never \"click here\" or \"learn more\" alone).",
        "<b>OG image</b> specific to that page (1200×630, generated via <font face=\"Courier\">/api/og</font> or static).",
        "<b>Author byline</b> if it's content-heavy (blog, case study) — Phase 4 E-E-A-T.",
    ]):
        story.append(p)

    story.append(Paragraph("Internal linking strategy", H2))
    story.append(Paragraph(
        "Every page links to at least three related pages with descriptive anchor text. "
        "The homepage hub should link to the top 5–7 spokes in the body, plus all spokes via the footer. "
        "Each spoke links back to the hub plus 2–3 sibling spokes. Blog posts link to the most relevant spoke. "
        "Use breadcrumbs on every non-home page (with <font face=\"Courier\">BreadcrumbList</font> schema).",
        BODY,
    ))

    story.append(PageBreak())

    # ===== PHASE 2 =====
    story.append(section_box(
        "Phase 2  ·  Content engine",
        "ONGOING — START AS SOON AS PHASE 1 SPOKES ARE LIVE"
    ))
    story.append(Paragraph(
        "Long-tail traffic and AI citations come from a steady output of well-structured "
        "supporting content. Use the <b>pillar / cluster</b> model: one pillar page per major topic, "
        "3–4 supporting posts feeding each pillar with internal links.",
        BODY,
    ))

    story.append(Paragraph("2.1  Blog (/blog)", H2))
    story.append(Paragraph("Suggested pillar #1: <b>The complete guide to writing manager-ready work summaries</b>", H3))
    for p in bullets([
        "How to write a daily standup that doesn't suck",
        "The weekly 1:1 update template that gets you promoted",
        "Showing impact to a remote manager when they can't see you work",
        "What to put in a status report (and what to leave out)",
        "How to communicate blockers without sounding stuck",
    ]):
        story.append(p)
    story.append(Paragraph("Suggested pillar #2: <b>Unrealized effort: the work that doesn't show up on a status report</b>", H3))
    for p in bullets([
        "What is unrealized effort? (definition + examples)",
        "How to track shelved, scrapped, and pivoted work",
        "Talking about pivots in performance reviews without sounding flaky",
        "Revisions and rework as evidence of expertise, not slowness",
        "Why hours-based time tracking misses 40% of the work that matters",
    ]):
        story.append(p)
    story.append(Paragraph("Suggested pillar #3: <b>Visibility without surveillance</b>", H3))
    for p in bullets([
        "Showing your work without screen monitoring or keystroke logging",
        "Self-reported vs. system-reported productivity — what the research says",
        "Burnout, presenteeism, and the ethics of work tracking in 2026",
        "AI summaries vs. AI surveillance — drawing the line",
        "Why \"track everything\" backfires for both workers and managers",
    ]):
        story.append(p)
    story.append(Paragraph(
        "<b>Cadence:</b> 1 post / week minimum. Each post: 1,200–2,500 words, 2–4 H2s, "
        "an FAQ block, an author byline with Person schema, an OG image, and links to "
        "the relevant spoke and pillar.",
        BODY,
    ))

    story.append(Paragraph("2.2  FAQ (/faq)", H2))
    story.append(Paragraph(
        "The homepage already has a 5-question FAQ section with FAQPage schema (good start). "
        "Promote that to a dedicated <font face=\"Courier\">/faq</font> page that consolidates "
        "everything for AI engines that want a single citable source. Topics:",
        BODY,
    ))
    for p in bullets([
        "What is TaskPanels and how does it work?",
        "Is TaskPanels employee surveillance? (Already answered — keep, expand)",
        "How is TaskPanels different from Asana / Jira / Notion / Linear?",
        "How is TaskPanels different from Toggl / Harvest / Clockify?",
        "What is unrealized effort and why does it matter?",
        "Does TaskPanels integrate with my calendar / Slack / GitHub?",
        "What does TaskPanels cost? What's free vs. Pro vs. Team?",
        "What data does TaskPanels store, and where?",
        "Can my manager see what I track? Who controls the data?",
        "Is there an export? What happens to my data if I cancel?",
    ]):
        story.append(p)

    story.append(Paragraph("2.3  Glossary (/glossary)", H2))
    story.append(Paragraph(
        "A page defining productivity-tracking terms (unrealized effort, daily standup, status report, "
        "1:1 update, blocker, scope creep, RACI, OKR, async update, deep work block, presenteeism) is a "
        "long-tail traffic magnet and a citation hook for AI engines. Each term gets its own anchor "
        "link with a 2–3 sentence definition. <b>Especially valuable for TaskPanels-coined terms</b> "
        "like \"unrealized effort\" — own the definition and AI engines will cite you.",
        BODY,
    ))

    story.append(Paragraph("2.4  Comparison pages (/vs/[competitor])", H2))
    story.append(Paragraph(
        "High mid-funnel intent. Examples: <i>TaskPanels vs Asana for personal work</i>, "
        "<i>TaskPanels vs Jira for individual contributors</i>, <i>TaskPanels vs Toggl</i>, "
        "<i>TaskPanels vs employee monitoring software</i> (anti-positioning page — high signal). "
        "Use a comparison table, three honest pros / cons of each, and a clear recommendation. "
        "These convert and they get cited by AI when users ask \"what's the best work tracker for X.\"",
        BODY,
    ))

    story.append(Paragraph("2.5  Changelog (/changelog)", H2))
    story.append(Paragraph(
        "Public release notes (1–2 lines per release). Signals freshness to Google and "
        "gives prospects a reason to re-visit. Wrap each entry in Article schema with datePublished. "
        "For a tool whose core promise is \"prove your work,\" a public changelog is also "
        "powerful self-evidence.",
        BODY,
    ))

    story.append(Paragraph("2.6  Press kit (/press)", H2))
    story.append(Paragraph(
        "Logo files (PNG + SVG, light + dark), product screenshots, founder bio + headshot, "
        "boilerplate company description, contact email. Makes it trivial for journalists, "
        "podcast hosts, and directory editors to feature TaskPanels correctly.",
        BODY,
    ))

    story.append(PageBreak())

    # ===== PHASE 3 =====
    story.append(section_box("Phase 3  ·  Schema markup", "DO ALONGSIDE PHASE 1"))
    story.append(Paragraph(
        "JSON-LD in <font face=\"Courier\">&lt;head&gt;</font>. Already in <font face=\"Courier\">app/layout.tsx</font>: "
        "<b>Organization</b>, <b>WebSite</b>, and <b>SoftwareApplication</b> (with three Offer tiers). "
        "<b>FAQPage</b> is on the homepage FAQ section. Stack the rest as pages are built. "
        "Validate everything at <font face=\"Courier\">search.google.com/test/rich-results</font>.",
        BODY,
    ))

    schema_table = [
        ["Schema type", "Where it goes", "Status / TODO"],
        ["Organization", "Sitewide (layout.tsx)", "Exists — extend with sameAs (LinkedIn, X/Twitter, ProductHunt, Crunchbase), logo URL, contactPoint"],
        ["WebSite", "Sitewide (layout.tsx)", "Exists — consider adding SearchAction once /blog or /docs has search"],
        ["SoftwareApplication", "Sitewide (layout.tsx)", "Exists with 3 Offers — add aggregateRating after first reviews, screenshot URLs"],
        ["FAQPage", "Homepage FAQ + future /faq + each spoke's FAQ block", "Partial — homepage done; spokes TODO"],
        ["Article", "Every blog post", "TODO — include author, datePublished, dateModified, image"],
        ["BreadcrumbList", "Every non-home page", "TODO — implement reusable Breadcrumbs component"],
        ["Product", "Each pricing tier (split out from SoftwareApplication if granular)", "TODO"],
        ["Review + Person", "Wrap each testimonial", "TODO — testimonials currently lack real names + Review schema"],
        ["HowTo", "\"3 simple steps\" / How it works section", "TODO (flagged in March 2026 audit)"],
        ["VideoObject", "When demo videos exist", "TODO (pending video)"],
        ["speakable", "1–2 sentence summary on each page that voice / AI assistants should read aloud", "TODO"],
        ["Person", "/about + each blog post author byline", "TODO — jobTitle, worksFor, sameAs"],
    ]
    story.append(table_with_header(schema_table, [1.5 * inch, 2.0 * inch, 3.0 * inch]))
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        "The <font face=\"Courier\">/geo-schema</font> skill auto-generates and validates these. "
        "Run it after every spoke launch.",
        CALLOUT,
    ))

    story.append(PageBreak())

    # ===== PHASE 4 =====
    story.append(section_box("Phase 4  ·  AI search & GEO signals", "ONGOING — STARTS AFTER PHASE 1"))
    story.append(Paragraph(
        "The part most teams miss. Traditional SEO ranks pages; GEO determines whether AI engines "
        "<i>cite</i> you when answering a user's question. The two overlap but aren't the same.",
        BODY,
    ))

    story.append(Paragraph("4.1  llms.txt", H2))
    story.append(Paragraph(
        "TaskPanels already ships <font face=\"Courier\">/llms.txt</font> at "
        "<font face=\"Courier\">public/llms.txt</font> with About, Key Pages, Core Features, "
        "Pricing, Audience, and Differentiators. <b>Re-generate via "
        "<font face=\"Courier\">/geo-llmstxt</font> any time spokes are added or renamed.</b> "
        "Currently lists 5 URLs — every new spoke needs a one-line summary added.",
        BODY,
    ))

    story.append(Paragraph("4.2  Citability", H2))
    story.append(Paragraph(
        "Every spoke and blog post should contain at least one quotable sentence with concrete data. "
        "<b>TaskPanels currently has no quotable stat on the live site</b> (flagged in the March 2026 audit). "
        "Establish one through customer interviews, a baseline survey, or product telemetry — for example: "
        "<i>\"TaskPanels users save an average of N minutes per week writing status updates\"</i> or "
        "<i>\"X% of tracked work would otherwise go unreported.\"</i> Promote claims like that into a "
        "<i>stat callout</i> visually distinct on the page so they're easy for AI engines to extract. "
        "Cite the source if available.",
        BODY,
    ))

    story.append(Paragraph("4.3  Brand-mention coverage", H2))
    story.append(Paragraph(
        "AI engines weight third-party mentions heavily for entity recognition. The March 2026 audit "
        "scored Brand Authority at 10/100 — this is the single biggest score-mover available. Get listed on:",
        BODY,
    ))
    for p in bullets([
        "<b>SaaS directories:</b> G2, Capterra, GetApp, Software Advice, AlternativeTo, BuiltWith, SaaSHub",
        "<b>Productivity-specific:</b> Product Hunt (1 launch — pick the moment), Tools.fyi, Workflow Magazine, ToolFinder",
        "<b>Startup data:</b> Crunchbase, AngelList / Wellfound, F6S",
        "<b>Communities:</b> r/productivity, r/projectmanagement, r/freelance, Hacker News (Show HN), Indie Hackers",
        "<b>Trust:</b> Trustpilot, G2 reviews, Google Business Profile",
        "<b>Social presence:</b> LinkedIn company page (currently missing — create immediately), X/Twitter, YouTube channel",
    ]):
        story.append(p)
    story.append(Paragraph(
        "The <font face=\"Courier\">/geo-brand-mentions</font> skill scans for current presence and "
        "produces a Brand Authority score (0–100). Re-run monthly.",
        BODY,
    ))

    story.append(Paragraph("4.4  AI crawler access", H2))
    story.append(Paragraph(
        "<font face=\"Courier\">public/robots.txt</font> already explicitly allows GPTBot, ChatGPT-User, "
        "ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, Googlebot, Bingbot, cohere-ai, and "
        "anthropic-ai. <b>Add the following to keep the allow-list current:</b>", BODY,
    ))
    for p in bullets([
        "Perplexity-User (in addition to PerplexityBot)",
        "Applebot-Extended (Apple Intelligence)",
        "Amazonbot",
        "CCBot (Common Crawl, used as training corpus by many models)",
        "Meta-ExternalAgent / Meta-ExternalFetcher",
    ]):
        story.append(p)
    story.append(Paragraph(
        "Block only if there's a specific IP / competitive concern. The "
        "<font face=\"Courier\">/geo-crawlers</font> skill audits this.",
        CALLOUT,
    ))

    story.append(Paragraph("4.5  E-E-A-T signals", H2))
    for p in bullets([
        "<b>Founder bio</b> on /about with credentials, prior companies, sameAs to LinkedIn / X / GitHub. (Currently no /about page — flagged in audit as high-priority gap.)",
        "<b>Author bios</b> on every blog post (Person schema, photo, LinkedIn link).",
        "<b>Sign content with real names</b> — no \"by The TaskPanels Team.\"",
        "<b>Cite sources</b> in blog posts (productivity research, peer-reviewed studies on remote work, customer interviews).",
        "<b>Last-updated date</b> visible on every post and spoke.",
        "<b>Real testimonials</b> with name, title, company, and Review schema (current testimonials lack attribution — fix as part of Phase 3 schema work).",
    ]):
        story.append(p)

    story.append(PageBreak())

    # ===== PHASE 5 =====
    story.append(section_box("Phase 5  ·  Per-page metadata", "MUST BE COMPLETE BEFORE A PAGE GOES LIVE"))
    story.append(Paragraph(
        "Sitewide defaults live in <font face=\"Courier\">app/layout.tsx</font> (title template "
        "<font face=\"Courier\">%s | TaskPanels</font>, base description, OG, Twitter card). "
        "Every spoke and blog post needs its own override via <font face=\"Courier\">generateMetadata()</font> "
        "or static <font face=\"Courier\">metadata</font> export.", BODY,
    ))

    story.append(Paragraph("Per-page checklist", H2))
    for p in bullets([
        "<b>Title</b> — unique; 50–60 chars; primary keyword near the start; suffix is auto-applied as <font face=\"Courier\">| TaskPanels</font>.",
        "<b>Description</b> — unique; 150–160 chars; action-oriented; include a number or specific claim.",
        "<b>canonical</b> — absolute URL (handled by <font face=\"Courier\">alternates.canonical</font>).",
        "<b>OG image</b> — page-specific; 1200×630 PNG/JPG. <b>Build the missing <font face=\"Courier\">/og/taskpanels-og.png</font> base file first</b>, then a dynamic <font face=\"Courier\">/api/og</font> route for spokes / blog.",
        "<b>Twitter card</b> = <font face=\"Courier\">summary_large_image</font>; same image as OG.",
        "<b>OG type</b> = <font face=\"Courier\">article</font> for blog posts; <font face=\"Courier\">website</font> elsewhere.",
        "<b>OG locale</b> = <font face=\"Courier\">en_US</font> (already sitewide).",
        "<b>robots</b> = index, follow (default); set <i>noindex</i> only on admin / preview / utm-only landing pages.",
        "Validate OG render at <font face=\"Courier\">opengraph.xyz</font> before merging.",
    ]):
        story.append(p)

    story.append(Paragraph("Title formula examples", H2))
    for p in bullets([
        "Homepage: \"TaskPanels — Turn your work into proof.\" (existing)",
        "/for-engineers: \"Daily Work Tracker for Engineers | TaskPanels\"",
        "/for-managers: \"Team Status &amp; 1:1 Prep Tool | TaskPanels\"",
        "/features/daily-summary: \"AI Daily Work Summary Generator | TaskPanels\"",
        "/features/unrealized-effort: \"Track Shelved &amp; Scrapped Work | TaskPanels\"",
        "/vs/asana-personal: \"TaskPanels vs Asana for Personal Work | TaskPanels\"",
        "/blog/[post]: \"[Post title] | TaskPanels Blog\"",
    ]):
        story.append(p)

    story.append(PageBreak())

    # ===== PHASE 6 =====
    story.append(section_box("Phase 6  ·  Technical foundation & compliance", "DO BEFORE LAUNCHING SPOKES PUBLICLY"))

    story.append(Paragraph("6.1  Sitemap & robots", H2))
    for p in bullets([
        "<font face=\"Courier\">app/sitemap.ts</font> — already exists for the 5 current URLs. Extend on every spoke launch.",
        "<font face=\"Courier\">public/robots.txt</font> — already permissive to AI crawlers. Add Applebot-Extended, Amazonbot, CCBot (see 4.4).",
        "Submit sitemap to Search Console + Bing Webmaster on first verification.",
        "Set up <b>IndexNow</b> for Bing — POST URL changes to the IndexNow API on deploy. Indexes in hours instead of days.",
    ]):
        story.append(p)

    story.append(Paragraph("6.2  Canonicals & redirects", H2))
    for p in bullets([
        "Every page already has its own canonical via <font face=\"Courier\">alternates.canonical</font>.",
        "Decide canonical host: <font face=\"Courier\">taskpanels.app</font> (marketing) vs <font face=\"Courier\">app.taskpanels.app</font> (product). Marketing is canonical for SEO; redirect bare-domain alternates if any.",
        "301 redirect anything that moves. Don't 302.",
        "Avoid redirect chains — 1 hop max.",
        "Configure <font face=\"Courier\">trailingSlash</font> consistently (Next.js default is no trailing slash).",
    ]):
        story.append(p)

    story.append(Paragraph("6.3  Error pages", H2))
    for p in bullets([
        "<font face=\"Courier\">app/not-found.tsx</font> — branded 404 with quick links to top spokes (currently default Next.js).",
        "<font face=\"Courier\">app/error.tsx</font> — branded 500 (currently default).",
        "Both should retain the header / footer so users can recover.",
    ]):
        story.append(p)

    story.append(Paragraph("6.4  Privacy, terms, and cookie consent", H2))
    for p in bullets([
        "<b>/privacy</b> — already exists.",
        "<b>/terms</b> — already exists.",
        "<b>Cookie consent banner</b> — required if you have EU traffic and you load GA4 / Clarity. Now urgent because GA4 is live. Options: Cookiebot (paid, robust), Osano (free tier), or build a simple banner that defers analytics until consent.",
        "Both /privacy and /terms are already linked from the footer — keep that contract.",
    ]):
        story.append(p)

    story.append(Paragraph("6.5  Core Web Vitals targets", H2))
    for p in bullets([
        "<b>LCP &lt; 2.5s</b> — largest contentful paint. Watch the hero illustration and dashboard preview.",
        "<b>INP &lt; 200ms</b> — interaction to next paint. Replaced FID in 2024.",
        "<b>CLS &lt; 0.1</b> — cumulative layout shift. Reserve image dimensions, avoid late-loading webfonts shifting layout. The Inter font with <font face=\"Courier\">display: swap</font> in layout is correct.",
        "Monitor via Search Console → Core Web Vitals report and PSI Field Data.",
    ]):
        story.append(p)

    story.append(Paragraph("6.6  Image optimization", H2))
    for p in bullets([
        "Use <font face=\"Courier\">next/image</font> for all raster images.",
        "Use <font face=\"Courier\">priority</font> only on the above-the-fold hero (one image per page).",
        "Verify Next.js is serving AVIF/WebP via the <font face=\"Courier\">Accept</font> header check.",
        "Every image has a meaningful <font face=\"Courier\">alt</font> attribute. Decorative-only images use <font face=\"Courier\">alt=\"\"</font>.",
        "<b>Build the missing <font face=\"Courier\">public/og/taskpanels-og.png</font></b> (referenced in <font face=\"Courier\">SEO.ogImage</font> but file does not exist).",
    ]):
        story.append(p)

    story.append(Paragraph("6.7  Internal linking & breadcrumbs", H2))
    story.append(Paragraph(
        "Already covered in Phase 1 architecture — but it's also a Phase 6 technical concern. "
        "Implement breadcrumbs as a reusable <font face=\"Courier\">&lt;Breadcrumbs&gt;</font> component "
        "with <font face=\"Courier\">BreadcrumbList</font> JSON-LD baked in. Mount on every non-home page.",
        BODY,
    ))

    story.append(Paragraph("6.8  Status page (optional but recommended for B2B)", H2))
    story.append(Paragraph(
        "A public status page (Statuspage.io, Instatus, or a simple custom page driven by uptime "
        "checks) is a trust signal for B2B prospects. Link it from the footer. Especially useful "
        "for TaskPanels because the product runs at <font face=\"Courier\">app.taskpanels.app</font> — "
        "marketing-site visitors will want to see whether the app is up.",
        BODY,
    ))

    story.append(PageBreak())

    # ===== PHASE 7 =====
    story.append(section_box("Phase 7  ·  Analytics & measurement", "ONGOING — LIGHT TOUCH BUT NEVER SKIPPED"))

    story.append(Paragraph("7.1  GTM as the single tag controller (recommended refactor)", H2))
    story.append(Paragraph(
        "GA4 is currently wired direct via <font face=\"Courier\">@next/third-parties/google</font>. "
        "That's fine for now — but the recommended architecture is <b>Google Tag Manager as the single "
        "tag controller</b>, with GA4 / Clarity / experiment tools / ad pixels all loaded through GTM. "
        "Adding the next thing then becomes a no-deploy change. Plan to refactor before installing the "
        "second tag (Clarity).", BODY,
    ))

    story.append(Paragraph("7.2  GA4 events (configured via GTM once refactored)", H2))
    for p in bullets([
        "<font face=\"Courier\">cta_app_click</font> — primary CTA (\"Get started\" / \"Open app\")",
        "<font face=\"Courier\">pricing_view</font> — pricing page reached",
        "<font face=\"Courier\">scroll_depth_50 / 75 / 100</font> — engagement",
        "<font face=\"Courier\">outbound_click</font> — clicks to <font face=\"Courier\">app.taskpanels.app</font>",
        "<font face=\"Courier\">faq_open</font> — which FAQ questions get expanded (intent signal)",
        "<font face=\"Courier\">summary_preview_view</font> — homepage anchor reached",
        "<font face=\"Courier\">file_download</font> — press kit assets, exported sample summary",
        "<font face=\"Courier\">video_play / complete</font> — any embedded demo video",
    ]):
        story.append(p)

    story.append(Paragraph("7.3  Microsoft Clarity", H2))
    story.append(Paragraph(
        "Free, no sampling, heatmaps + scroll maps + session replay + rage-click detection. "
        "Install via GTM (after the GTM refactor). Catches UX issues that funnel analytics never will — "
        "especially valuable for the long homepage where users scroll through 12 sections before hitting "
        "the primary CTA.", BODY,
    ))

    story.append(Paragraph("7.4  Search Console & Bing Webmaster (review cadence)", H2))
    for p in bullets([
        "<b>Weekly:</b> top queries / pages / CTR; flag any sudden drops.",
        "<b>Monthly:</b> coverage report (excluded URLs, soft 404s); Core Web Vitals trend; manual actions check.",
        "<b>Quarterly:</b> full export to BigQuery / Looker Studio for cohort analysis.",
    ]):
        story.append(p)

    story.append(Paragraph("7.5  A/B testing infrastructure", H2))
    story.append(Paragraph(
        "Required to iterate on conversion. Recommended order of preference: "
        "<b>GrowthBook</b> (open source, self-host, feature flags + experiments), "
        "<b>PostHog</b> (analytics + experiments in one — strong fit for a dev-tool-adjacent product), "
        "<b>Optimizely / VWO</b> (paid, plug-and-play). Set up before you start building "
        "spokes so you can split-test variants from day 1 — especially headline, primary CTA copy, "
        "and pricing page tier presentation.",
        BODY,
    ))

    story.append(Paragraph("7.6  Reporting", H2))
    story.append(Paragraph(
        "Single Looker Studio dashboard pulling from GA4 + Search Console + (optional) "
        "PostHog/GrowthBook. Reviewed monthly. Tracks: organic clicks, organic impressions, top "
        "spoke pages, AI-source traffic (referrals from chat.openai.com, perplexity.ai, "
        "gemini.google.com, claude.ai), app sign-up clicks, sign-up CVR by source.",
        BODY,
    ))

    story.append(PageBreak())

    # ===== PHASE 8 =====
    story.append(section_box(
        "Phase 8  ·  Authority building",
        "ONGOING — START WEEK 4+, NEVER ENDS"
    ))
    story.append(Paragraph(
        "Once the on-site work is done, off-site authority is the long-term moat. "
        "AI engines and Google both weight third-party signals heavily, especially for "
        "an emerging brand without years of organic history. The current Brand Authority "
        "score is 10/100 — every action in this phase moves that needle.",
        BODY,
    ))

    story.append(Paragraph("8.1  Directory listings (Phase 4 was inventory; Phase 8 is execution)", H2))
    for p in bullets([
        "<b>Product Hunt</b> — single biggest one-time lever for a productivity tool. Plan the launch carefully (Tuesday/Wednesday, 12:01am PT, prepared assets, hunter lined up).",
        "G2, Capterra, GetApp, Software Advice, AlternativeTo.",
        "Crunchbase, F6S, Wellfound (formerly AngelList).",
        "Productivity-specialist directories: Tools.fyi, ToolFinder, Workflow Magazine.",
        "Each listing should link back to the canonical <b>taskpanels.app</b> URL.",
    ]):
        story.append(p)

    story.append(Paragraph("8.2  Backlink program", H2))
    for p in bullets([
        "<b>Guest posts</b> on productivity / future-of-work blogs: Doist Blog (Todoist), Atlassian Work Life, RescueTime Blog, Zapier Learn, Ness Labs, Superorganizers, Every.to.",
        "<b>HARO / Connectively</b> — respond to journalist queries about remote work, productivity, AI in the workplace, manager / IC communication. 2–3 responses / week.",
        "<b>Podcast appearances</b> — The Knowledge Project, Deep Questions w/ Cal Newport, Lenny's Podcast (PM-leaning), The Daily Standup, Software Engineering Daily, The Craft of Open Source. Each episode = an authoritative backlink and a real audience.",
        "<b>Communities</b> — be genuinely useful (not promotional) in r/productivity, r/projectmanagement, r/freelance, r/cscareerquestions, Hacker News, Indie Hackers.",
        "<b>Co-marketing</b> — partner with adjacent tools (calendar apps, Slack-summary tools, focus apps). Cross-published content + linked partner pages = mutual backlinks.",
    ]):
        story.append(p)

    story.append(Paragraph("8.3  Press &amp; PR", H2))
    for p in bullets([
        "Press kit at <b>/press</b> (built in Phase 2.6).",
        "Newsworthy moments: funding rounds, product launches, customer milestones (\"first 1,000 users\"), AI integration milestones, original research (\"State of work tracking 2026\").",
        "Pitch trade press first (Future Forum, FlexJobs blog, Built In, The Information remote-work coverage) — they're easier wins than tier-1 tech press.",
        "Once you have 2–3 trade hits, pitch tech press (TechCrunch, The Verge, VentureBeat, Forbes contributors covering productivity / future of work).",
    ]):
        story.append(p)

    story.append(Paragraph("8.4  Customer-driven content", H2))
    for p in bullets([
        "Case studies: aim for 1 new case study / quarter, each with its own <font face=\"Courier\">/case-studies/[customer]</font> URL.",
        "Customer quotes / video testimonials — replace anonymous homepage testimonials with named quotes, wrap in Review schema (Phase 3).",
        "Original research — survey TaskPanels users on time spent writing status updates, frequency of unrealized effort, etc. Publish as a downloadable report. <b>This is also how you generate the citable stat the site currently lacks (4.2).</b>",
        "Co-branded webinars with customers — recording becomes blog content + YouTube video.",
    ]):
        story.append(p)

    story.append(PageBreak())

    # ===== EXECUTION TIMELINE =====
    story.append(Paragraph("Execution timeline", H1))
    story.append(Paragraph(
        "Suggested sequencing. Calendar weeks are flexible; dependency order is not.",
        BODY,
    ))
    timeline = [
        ["Week", "Focus"],
        ["1", "Phase 0 baseline + Phase 6 quick wins (build missing /og/taskpanels-og.png, branded 404/500, cookie banner now that GA4 is live, GSC + Bing verification)"],
        ["2", "Phase 1 prerequisite: ship /about with founder bio + Person schema. Highest-leverage E-E-A-T move."],
        ["3–4", "Phase 1: top 5 spokes (/for-engineers, /for-managers, /features/daily-summary, /features/unrealized-effort, /vs/employee-monitoring). Each with full Phase 3 schema and Phase 5 metadata."],
        ["5", "Phase 3 schema audit pass + Phase 4 llms.txt re-gen + brand-mention inventory + AI crawler verification. Add Applebot/Amazonbot/CCBot to robots.txt."],
        ["6–7", "Phase 1 remaining spokes (/for-designers, /for-consultants, /for-freelancers, /features/blockers, /features/weekly-rollup, /features/exports, /vs/asana-personal, /vs/jira-individual, /vs/notion-tasks, /vs/time-trackers)."],
        ["8", "Phase 2 launch: /faq (promote homepage block), /glossary (own \"unrealized effort\"), /press, /changelog. First 4 blog posts (one per pillar + intro)."],
        ["9", "Phase 7: GTM refactor + Clarity + GSC review cadence + A/B framework installed."],
        ["10+", "Phase 8 ongoing: 1 blog post / week, 1 directory listing / week, 1 backlink action / week, monthly Search Console review, quarterly /geo audit re-run. Plan Product Hunt launch."],
    ]
    story.append(table_with_header(timeline, [0.7 * inch, 5.8 * inch]))

    story.append(PageBreak())

    # ===== TOOLS =====
    story.append(Paragraph("Tools &amp; resources", H1))

    story.append(Paragraph("Skills available in this workspace", H2))
    for p in bullets([
        "<font face=\"Courier\">/geo</font> — full GEO+SEO audit, prioritized action plan, composite score.",
        "<font face=\"Courier\">/geo-citability</font> — score &amp; rewrite suggestions for citation-readiness.",
        "<font face=\"Courier\">/geo-crawlers</font> — AI crawler access map.",
        "<font face=\"Courier\">/geo-llmstxt</font> — generate or validate llms.txt.",
        "<font face=\"Courier\">/geo-brand-mentions</font> — brand-mention authority scan.",
        "<font face=\"Courier\">/geo-platform-optimizer</font> — per-platform tuning (ChatGPT / Perplexity / Gemini / AI Overviews / Bing Copilot).",
        "<font face=\"Courier\">/geo-schema</font> — schema generation + validation.",
        "<font face=\"Courier\">/geo-technical</font> — Core Web Vitals, crawlability, security checks.",
        "<font face=\"Courier\">/geo-content</font> — E-E-A-T evaluation.",
        "<font face=\"Courier\">/geo-report</font> — client-ready audit deliverable.",
        "<font face=\"Courier\">/geo-report-pdf</font> — professional PDF audit report.",
        "<font face=\"Courier\">/seo-optimizer</font> — traditional SEO content &amp; technical work.",
    ]):
        story.append(p)

    story.append(Paragraph("External tools", H2))
    for p in bullets([
        "<b>Google Search Console</b> — search.google.com/search-console",
        "<b>Bing Webmaster Tools</b> — bing.com/webmasters",
        "<b>PageSpeed Insights</b> — pagespeed.web.dev",
        "<b>Rich Results Test</b> — search.google.com/test/rich-results",
        "<b>Schema Validator</b> — validator.schema.org",
        "<b>OpenGraph Preview</b> — opengraph.xyz",
        "<b>Screaming Frog SEO Spider</b> — free up to 500 URLs",
        "<b>Microsoft Clarity</b> — clarity.microsoft.com",
        "<b>IndexNow</b> — indexnow.org",
    ]):
        story.append(p)

    story.append(Paragraph("Reference links", H2))
    for p in bullets([
        "Google Search Quality Rater Guidelines (E-E-A-T): <font face=\"Courier\">developers.google.com/search/docs/fundamentals/creating-helpful-content</font>",
        "llms.txt spec: <font face=\"Courier\">llmstxt.org</font>",
        "Schema.org: <font face=\"Courier\">schema.org</font>",
        "Next.js metadata + OG image docs (read from <font face=\"Courier\">node_modules/next/dist/docs/</font> per <font face=\"Courier\">AGENTS.md</font>)",
        "Existing baseline audit: <font face=\"Courier\">GEO-AUDIT-REPORT.md</font> (March 2026)",
    ]):
        story.append(p)

    story.append(Spacer(1, 24))
    story.append(Paragraph(
        "<b>End of playbook.</b> Reference this document before every change to the "
        "taskpanels-website domain. Update the Progress Tracker on page 4 at the end of each "
        "work session.", CALLOUT,
    ))

    doc.build(story)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    build()
