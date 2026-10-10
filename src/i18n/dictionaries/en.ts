/**
 * English copy for Aeroost. This file is the type source for every other
 * locale, so keys added here must be mirrored in `fa.ts` and `ar.ts`.
 */
export const en = {
  meta: {
    siteName: "Aeroost",
    tagline: "Practical Technology. Thoughtfully Engineered.",
    locale: "en",
    titleSuffix: "Aeroost",
    ogImageAlt: "Aeroost — practical technology, thoughtfully engineered.",
    titles: {
      home: "Aeroost — Practical Technology. Thoughtfully Engineered.",
      projects: "Projects — Aeroost",
      technology: "Technology — Aeroost",
      about: "About — Aeroost",
      faq: "Frequently asked questions — Aeroost",
      contact: "Contact — Aeroost",
      notFound: "Page not found — Aeroost",
    },
    descriptions: {
      home: "Aeroost is an independent technology initiative working across software engineering, artificial intelligence, game development, and digital tools.",
      projects: "The Aeroost project directory: what is public today, what is in progress, and what is only an area of interest.",
      technology: "How Aeroost approaches software engineering, artificial intelligence, game development, and digital tools.",
      about: "What Aeroost is, the principles behind the work, and a factual account of its current public status.",
      faq: "Direct answers about Aeroost, its focus areas, project status, contact, privacy, and security.",
      contact: "Contact Aeroost through the inquiry form, with response expectations and security guidance.",
    },
  },

  a11y: {
    skipToContent: "Skip to main content",
    mainNavigation: "Main navigation",
    languageNavigation: "Language",
    themeNavigation: "Colour theme",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    breadcrumbs: "Breadcrumb",
    currentLanguage: "Current language",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    logoHome: "Aeroost — back to home",
    clearSearch: "Clear search",
    statusFilter: "Filter by status",
    filtersGroup: "Project filters",
    copyLink: "Copy link",
    copied: "Copied",
    externalLink: "Opens in a new window",
    siteFooter: "Footer",
    expandHint: "Select the question to read the answer",
  },

  nav: {
    home: "Home",
    projects: "Projects",
    technology: "Technology",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
  },

  common: {
    current: "Current",
    viewDirectory: "See project statuses",
    contactCta: "Contact Aeroost",
    focusAreas: "Focus areas",
    notReleased: "Not released",
    newWindow: "Opens in a new window",
    github: "GitHub",
    backToTop: "Back to top",
    languagesAvailable: "English · Persian · Arabic · French · Spanish · Russian · Chinese",
  },

  status: {
    active: "Active",
    exploring: "Exploring",
    planned: "Planned",
    released: "Released",
  },

  statusDescriptions: {
    active: "Ongoing work that can be partly inspected today.",
    exploring: "Concept studies and written analysis. Nothing to use yet.",
    planned: "Scoped and prioritised, but not started.",
    released: "Available to use or read without asking.",
  },

  theme: {
    light: "Light",
    dark: "Dark",
  },

  home: {
    hero: {
      eyebrow: "Independent Technology Initiative",
      headlineStart: "Practical Technology.",
      headlineAccent: "Thoughtfully Engineered.",
      intro:
        "Aeroost explores practical solutions across software engineering, artificial intelligence, game development, and digital tools.",
      supporting:
        "Clear design decisions, maintainable engineering, and transparent project information guide the approach.",
      ctaProjects: "Explore Projects",
      ctaFocus: "Explore Focus Areas",
      ctaContact: "Contact Aeroost",
      glanceTitle: "What is verifiable here",
      glanceCaption: "Statuses describe what exists today, not what is planned.",
      glanceItems: [
        { label: "Public repository", value: "Aeroost on GitHub", kind: "link" },
        { label: "Released products", value: "None published yet", kind: "text" },
        { label: "Interface languages", value: "EN, FA, AR, FR, ES, RU, ZH", kind: "text" },
        { label: "Themes", value: "Light and dark, remembered", kind: "text" },
        { label: "Monitored channel", value: "Inquiry form", kind: "text" },
      ],
    },
    focus: {
      eyebrow: "Focus areas",
      title: "Four areas, one engineering standard.",
      intro:
        "Each area describes how Aeroost works — the decisions it takes seriously. They are fields of practice, not a product catalogue.",
      cta: "Read the technology notes",
    },
    focusItems: {
      software: {
        title: "Software Engineering",
        summary:
          "Systems that stay readable: explicit architecture, tested behaviour, and interfaces nobody has to decode.",
      },
      ai: {
        title: "Artificial Intelligence",
        summary:
          "Assistance applied where it measurably helps, with evaluation, limits, and data handling stated plainly.",
      },
      games: {
        title: "Game Development",
        summary:
          "Playable loops built from a few simple systems, then tested for feel, pacing, and frame stability.",
      },
      tools: {
        title: "Digital Tools",
        summary:
          "Focused utilities that remove steps from real work and stay reliable enough to be depended on.",
      },
    },
    philosophy: {
      eyebrow: "Approach",
      title: "Design decisions you can trace.",
      lead:
        "Aeroost treats the reasoning behind a build as part of the deliverable. Constraints are named early, trade-offs are written down, and nothing ships as a black box.",
      aside: "Written as engineering notes rather than marketing copy.",
      items: [
        {
          title: "Start from the constraint",
          body: "Every piece of work begins with what cannot change — audience, platform, data, and the budget of attention. The rest follows from that list.",
        },
        {
          title: "Prefer the legible solution",
          body: "A straightforward design that someone else can maintain beats a clever one that only its author understands.",
        },
        {
          title: "Verify before claiming",
          body: "Behaviour is tested, measurements are taken with real tools, and unverified statements are left out of the documentation.",
        },
        {
          title: "Keep the surface calm",
          body: "Interfaces hold one idea at a time. Decoration earns its place only when it improves comprehension.",
        },
      ],
    },
    projectsBand: {
      eyebrow: "Public record",
      title: "Nothing to release yet, said plainly.",
      body:
        "The Projects page states exactly what is public, what is in progress, and what is only an area of interest — with no implied availability and no placeholder announcements.",
      cta: "Open the projects directory",
    },
    contactBand: {
      eyebrow: "Get in touch",
      title: "Question about a specific build?",
      body: "Describe the problem, the constraints, and what a finished result looks like.",
      cta: "Contact Aeroost",
      note: "The inquiry form is the only monitored channel.",
    },
  },

  projects: {
    eyebrow: "Projects",
    title: "Public work, with its real status.",
    intro:
      "This directory lists what can be inspected right now and says plainly what cannot. Work is grouped by the focus area it belongs to, and every status describes availability rather than ambition.",

    release: {
      label: "Released for use",
      emptyTitle: "No public projects yet.",
      emptyBody:
        "Aeroost’s public project directory will feature projects when they are ready to share. Check back for future releases.",
      alreadyPublic: "What is already public:",
      repoTitle: "Aeroost ecosystem repository",
      repoBody: "Project overview plus documentation in seven languages.",
      repoLink: "Open repository on GitHub",
    },

    directory: {
      title: "Where the work stands",
      intro:
        "Four engineering workstreams, each at a different stage. None of them should be read as a product you can use.",
      searchLabel: "Search workstreams",
      searchPlaceholder: "Search by name, area, or practice",
      filterLabel: "Status",
      filterAll: "All",
      resultsLabel: "workstreams shown",
      noMatchesTitle: "Nothing matches that filter.",
      noMatchesBody: "Try another status, or clear the search field to see all four workstreams.",
      clearFilters: "Clear filters",
      fields: {
        status: "Status",
        area: "Focus area",
        step: "Current step",
        availability: "Availability",
      },
    },

    records: {
      website: {
        name: "Aeroost website",
        area: "Software Engineering",
        summary:
          "The multilingual site you are reading: shared design tokens, right-to-left layout, and static rendering inside one Next.js application.",
        step: "Extended page by page as new content is needed, with build, type, and lint checks on every change.",
        availability: "Live on this domain",
      },
      foundations: {
        name: "Layout and component foundations",
        area: "Software Engineering",
        summary:
          "Spacing, type scale, colour tokens, and accessible patterns that behave identically in left-to-right and right-to-left writing modes.",
        step: "Proven inside the website first; only patterns that survive real pages are extracted into anything reusable.",
        availability: "Internal to this project",
      },
      evaluation: {
        name: "Assisted workflow evaluation",
        area: "Artificial Intelligence",
        summary:
          "Written analysis and small experiments on where model assistance saves time, where it only adds steps, and how to tell the difference.",
        step: "Evaluation criteria and example sets are being written before any tool is hosted.",
        availability: "Not released",
      },
      prototypes: {
        name: "Gameplay prototype studies",
        area: "Game Development",
        summary:
          "Short, disposable builds that test one mechanic each — movement feel, turn pacing, and render budget — and report what they measured.",
        step: "Concept studies and measurement notes. No game is announced, and no build is published as playable.",
        availability: "Not released",
      },
      utilities: {
        name: "Utilities backlog",
        area: "Digital Tools",
        summary:
          "Small browser-side utilities for everyday work: text comparison, format inspection, and unit conversion, without accounts or uploads.",
        step: "Scoped and prioritised. The first tool starts once its input and failure cases are written down.",
        availability: "Not started",
      },
    },

    principlesNote: {
      title: "How the directory is maintained",
      body:
        "An entry moves to Released only when something can be used or read without asking. Status changes are written here first, so this page stays the reference point.",
    },
  },

  technology: {
    eyebrow: "Technology",
    title: "Four areas of practice.",
    intro:
      "What Aeroost pays attention to in each field — and where it deliberately stops.",
    indexLabel: "On this page",
    considerationsLabel: "What matters",
    boundaryLabel: "Where it stops",
    note: {
      title: "Focus areas are not products.",
      body: "Everything here describes a working method. For what can actually be used or read today, see the projects directory.",
      cta: "Open projects",
    },
    areas: {
      software: {
        name: "Software Engineering",
        tagline: "Software is only useful while it can be changed.",
        definition:
          "Effort therefore goes into structure and feedback, not just features. A design that survives its second maintainer is the goal.",
      },
      ai: {
        name: "Artificial Intelligence",
        tagline: "Models are useful for fuzzy work and unreliable for guaranteed answers.",
        definition:
          "Most of the discipline is recognising which case you are in before the model touches the output, and saying so in the interface.",
      },
      games: {
        name: "Game Development",
        tagline: "Rules become experience through the controller.",
        definition:
          "Credibility comes from pacing, input response, and stable frame time. Artwork cannot compensate for a loop that feels wrong.",
      },
      tools: {
        name: "Digital Tools",
        tagline: "A tool earns its place by removing steps.",
        definition:
          "If it adds setup, accounts, or learning cost, it has moved the friction rather than removed it. Utility is measured in saved actions.",
      },
    },
    considerations: {
      software: [
        {
          title: "Architecture that explains itself",
          body: "Modules own one concern, boundaries are explicit, and a new reader can follow a request from interface to data and back.",
        },
        {
          title: "Testing where behaviour matters",
          body: "Unit tests cover rules, integration tests cover wiring, and a few end-to-end checks cover the paths that must not break. Coverage numbers are not the objective.",
        },
        {
          title: "Performance as a budget",
          body: "Payload size, render cost, and query time are measured against a stated budget instead of judged by feel.",
        },
        {
          title: "Usability as part of correctness",
          body: "When the intended action is hard to find, the feature is treated as incomplete rather than blamed on the person using it.",
        },
      ],
      ai: [
        {
          title: "Start with the simpler solution",
          body: "A rule, a search index, or a self-validating form field often solves the problem with fewer moving parts, so that option is evaluated first.",
        },
        {
          title: "Evaluation before claims",
          body: "Prompts and pipelines are checked against a fixed set of examples with known answers, and the pass rate is recorded rather than described.",
        },
        {
          title: "Limits stated in the open",
          body: "Uncertainty, refusal, and stale knowledge are surfaced to the person using the tool instead of being hidden behind confident wording.",
        },
        {
          title: "Privacy by scope",
          body: "Data sent to a model is minimised, kept only where it is needed, and never used for training without explicit consent.",
        },
      ],
      games: [
        {
          title: "One mechanic per prototype",
          body: "Each build tests a single verb — jump, aim, trade — and is kept or discarded on how it performs, not on how it looks.",
        },
        {
          title: "Iteration on feel",
          body: "Acceleration, input buffering, and camera response are tuned in short loops with the build running, because graphs cannot judge responsiveness alone.",
        },
        {
          title: "Measured performance",
          body: "Frame-time distribution, load size, and memory growth are profiled on the lowest target device rather than the development machine.",
        },
        {
          title: "Documented player experience",
          body: "Controls, difficulty curve, and failure states are written down so design intent can be checked against the finished loop.",
        },
      ],
      tools: [
        {
          title: "Useful on first contact",
          body: "The main action is available immediately, with sensible defaults and no gate before the value is visible.",
        },
        {
          title: "Reliable on awkward inputs",
          body: "Empty fields, pasted files, unusual characters, and right-to-left text are treated as normal use rather than misuse.",
        },
        {
          title: "Local where local is enough",
          body: "Work that can happen in the browser stays in the browser, which removes latency and most data-handling questions at once.",
        },
        {
          title: "Keyboard and clipboard friendly",
          body: "Shortcuts, focus order, and paste behaviour are part of the design, because tools are used repeatedly rather than admired once.",
        },
      ],
    },
    boundaries: {
      software: "No framework advocacy. The right tool is the one that stays maintainable after the first burst of enthusiasm.",
      ai: "No assistant is presented as autonomous judgement. Anything touching money, health, or legal matters stays with a person.",
      games: "No release dates, early access, or store pages are announced before a playable build exists to test.",
      tools: "Tools are published when they are dependable, not when they are demoable.",
    },
  },

  about: {
    eyebrow: "About",
    title: "An independent initiative, described without padding.",
    intro:
      "Aeroost is an independent technology initiative. It builds practical software and keeps the reasoning behind each decision visible, so that the work can be inspected rather than only admired.",

    mission: {
      title: "Mission",
      body: "Make small, well-engineered technology that people can use and understand — and write down why it was built that way.",
    },
    vision: {
      title: "Vision",
      body: "The direction was set in the project’s own documentation and has not changed since.",
      quote: "Build technology that is powerful, practical, and built to last.",
      attribution: "Aeroost project documentation",
    },

    principles: {
      title: "Principles",
      intro: "Five commitments decide what gets built, how it is described, and what is left unsaid.",
      items: [
        {
          title: "Say what is true",
          body: "Statuses describe what exists today. Planned work is labelled as planned, and nothing borrows the vocabulary of release notes.",
        },
        {
          title: "Design before code",
          body: "Layout, wording, and flow are settled on paper first so that implementation does not have to invent them under pressure.",
        },
        {
          title: "Keep it maintainable",
          body: "Independence means clear naming, few dependencies, and documentation that still makes sense after the mood it was written in.",
        },
        {
          title: "Respect attention",
          body: "One idea per screen, measurable performance, and accessible defaults treated as requirements rather than polish.",
        },
        {
          title: "Leave the door open",
          body: "Semantic HTML, portable formats, and standard tooling, so someone else can pick the work up without permission.",
        },
      ],
    },

    approach: {
      title: "How work proceeds",
      intro: "The stages run in order, and each one leaves something readable behind.",
      steps: [
        { title: "Frame", body: "Write the problem, the constraints, and what a finished result looks like." },
        { title: "Sketch", body: "Settle structure and wording; reject ideas that already need an explanation." },
        { title: "Build", body: "Implement in small, testable pieces on top of the tokens and patterns already in place." },
        { title: "Verify", body: "Measure with real tools: type checks, production build, keyboard pass, and target screen widths." },
        { title: "Publish", body: "Record the state honestly, then link it from the projects directory." },
      ],
    },

    status: {
      title: "Current public status",
      intro: "What can be checked outside this website, stated as it is.",
      items: [
        "One public repository holds the project overview and its documentation in seven languages.",
        "No products, applications, or services are announced as released.",
        "No customers, partnerships, funding, or awards are claimed, because none are published.",
        "This website is where project status is described; the directory stays the reference point.",
      ],
    },
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions worth answering directly.",
    intro:
      "Short answers about what Aeroost is, how its work is described, and how to reach it. Anything missing can be asked through the contact form.",
    groupsLabel: "Sections",
    groups: {
      initiative: "Aeroost",
      work: "Focus areas and projects",
      contact: "Contact, privacy, and security",
    },
    items: {
      what: {
        q: "What is Aeroost?",
        a: "An independent technology initiative working in four areas: software engineering, artificial intelligence, game development, and digital tools. It builds software and documents the reasoning behind each decision.",
      },
      who: {
        q: "Who is behind it?",
        a: "Aeroost is independent and maintained without a staff list. It does not name employees, agencies, or partner organisations, because none are published.",
      },
      company: {
        q: "Is Aeroost a company?",
        a: "It is an initiative rather than an agency. Technology and its documentation are published openly; commercial arrangements are discussed individually instead of being advertised here.",
      },
      difference: {
        q: "What is the difference between a focus area and a project?",
        a: "A focus area describes a field of practice and how decisions are made in it. A project is something you can inspect today — code, a tool, or a document. The Technology page covers the first, the Projects page covers the second.",
      },
      empty: {
        q: "Why does the projects directory look empty?",
        a: "Because there is nothing to release yet. Public work is listed as soon as it exists; until then the directory shows an empty state instead of decorative placeholder cards.",
      },
      statuses: {
        q: "What do the status labels mean?",
        a: "Active is ongoing work that can be partly inspected. Exploring covers concept studies and written analysis with nothing to use. Planned means scoped but not started. Released means available without asking.",
      },
      when: {
        q: "When will something be released?",
        a: "When it is dependable enough to be used and documented. There is no dated roadmap, because dates published without a build behind them are guesses.",
      },
      contact: {
        q: "How do I contact Aeroost?",
        a: "Use the inquiry form on the Contact page. It is the only monitored channel: no email address is published, and there are no social accounts to message.",
      },
      privacy: {
        q: "What happens to what I send?",
        a: "Your name, email, topic, and message are stored in the project’s own database so the inquiry can be answered. The site loads no advertising or analytics scripts and sets no tracking cookies.",
      },
      security: {
        q: "How should I report a security problem?",
        a: "Send a short description of the effect and how to reproduce it through the inquiry form, and keep details out of public issues. Do not include credentials, tokens, or anyone else’s data.",
      },
      languages: {
        q: "Which languages and themes are supported?",
        a: "English, Persian, Arabic, French, Spanish, Russian and Chinese, with a right-to-left layout for Persian and Arabic, plus light and dark themes that persist between visits. Language switching does not reload the page.",
      },
      aiUsage: {
        q: "Does Aeroost use AI to build its software?",
        a: "Sometimes, for drafting and reviewing routine work. Decisions, verification, and every published claim stay with a person, and generated text is checked before it appears here.",
      },
    },
    expandHint: "Select the question to read the answer.",
    still: {
      title: "Something not covered here?",
      body: "The contact form accepts specific questions about a piece of work, reuse, or a problem worth solving.",
      cta: "Ask a question",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Send a clear question; get a plain answer.",
    intro: "Inquiries are read one at a time. The more concrete the message, the more useful the reply.",

    channels: {
      title: "Verified channels",
      body: "These are the only channels Aeroost publishes.",
      githubLabel: "GitHub",
      githubValue: "github.com/Aeroost",
      githubNote: "Public repository and project documentation.",
      githubCta: "Open GitHub",
      formLabel: "Inquiry form",
      formValue: "On this page",
      formNote: "Stored in the project database and answered by email.",
      noEmail:
        "No email address is published. Treat any address claiming to represent Aeroost as unverified, and use the form below.",
    },

    expectations: {
      title: "Response expectations",
      body: "Inquiries are read periodically rather than instantly. There is no fixed response time and no queue sorted by project size — a clear question simply gets a clearer answer.",
    },

    before: {
      title: "Before you write",
      items: [
        "Do not send passwords, tokens, or API keys.",
        "For a security issue, describe the effect and how to reproduce it; leave out anything that exposes other people.",
        "Attach nothing. A link to a public repository or snippet is easier to read than a file.",
        "Questions with legal or financial consequences get a factual reply, not advice.",
      ],
    },

    form: {
      title: "Inquiry form",
      intro: "Four fields. The message is stored only so that it can be answered.",
      name: "Name",
      namePlaceholder: "How you should be addressed",
      email: "Email",
      emailPlaceholder: "name@example.com",
      topic: "Topic",
      topics: {
        project: "A specific piece of work",
        reuse: "Reuse or licensing",
        feedback: "Feedback on this website",
        security: "Security report",
        other: "Something else",
      },
      message: "Message",
      messagePlaceholder: "The problem, the constraints, and what a finished result would look like.",
      submit: "Send inquiry",
      submitting: "Sending…",
      optional: "optional",
      success: {
        title: "Inquiry received.",
        body: "Your message is recorded with the details you provided. Include a reply address if you expect an answer.",
        another: "Send another inquiry",
      },
      errors: {
        name: "Add a name so the reply can be addressed.",
        email: "Enter an email address that can receive a reply.",
        message: "Describe the question a little more — at least 20 characters.",
        form: "Some fields need attention. They are marked below.",
        generic: "The inquiry could not be sent just now. Please try again shortly.",
        rate: "Too many inquiries from this connection. Please try again in a few minutes.",
      },
      privacy:
        "Name, email, and message are stored in this project’s database for the sole purpose of replying, and are not shared with third parties.",
      counter: "{count} of {min} characters minimum",
    },
  },

  footer: {
    blurb:
      "An independent technology initiative across software engineering, artificial intelligence, game development, and digital tools.",
    exploreTitle: "Explore",
    capabilitiesTitle: "Capabilities",
    contactTitle: "Contact",
    statusTitle: "Status",
    statusLines: ["No released products", "Repository and documentation public", "Directory updated when status changes"],
    languagesTitle: "Languages",
    themeTitle: "Appearance",
    copyright: "© {year} Aeroost.",
    legalNote: "Everything here describes what is available today.",
    builtWith: "Built with Next.js, TypeScript, and Tailwind CSS.",
  },

  notFound: {
    code: "404",
    title: "Page not found",
    body: "The address may be out of date, or this page has no equivalent in the current language.",
    home: "Back to home",
    projects: "See the projects directory",
  },
};

/** Structural contract every locale must satisfy, keys included. */
export type Dictionary = typeof en;

/** Widen a dictionary so locale files can be checked against it without literal mismatches. */
export type { Dictionary as DefaultDictionary };
