/* MDI ecosystem cards: click a card to open its detail card (same modal pattern as the hero invoice preview). */
(function () {
  "use strict";

  var products = {
 "white-label": {
  "name": "Your Domain",
  "title": "Your firm’s own invoicing platform.",
  "copy": "Give clients a digital invoicing system on your custom domain, in your branding, with packages built around your own commercial model.",
  "flow": [
   "Your domain and branding",
   "Your own client packages",
   "Clients served under your name"
  ],
  "best": "Accounting & consulting firms",
  "works": "Digital Invoicing · PRA",
  "rows": [
   [
    "Custom domain",
    "invoice.yourfirm.pk"
   ],
   [
    "Logo & colours",
    "Yours"
   ],
   [
    "Client packages",
    "Your pricing"
   ],
   [
    "One-time setup",
    "Rs. 140,000"
   ]
  ],
  "status": "WHITE LABEL READY",
  "cta": "Visit Your Domain page",
  "href": "https://mydigitalinvoice.com/your-domain",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 8h18M7 12h5m-5 3h3\"/><circle cx=\"16.5\" cy=\"13.5\" r=\"2\"/></svg>",
  "index": 1,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20White%20Label."
 },
 "pra": {
  "name": "PRA",
  "title": "PRA eIMS invoicing for Punjab services.",
  "copy": "Purpose-built reporting for Punjab service businesses, using the same invoice-volume brackets as FBR but activated and billed separately.",
  "flow": [
   "Punjab service invoices",
   "eIMS reporting workflow",
   "QR record and audit history"
  ],
  "best": "Punjab service businesses",
  "works": "Digital Invoicing · Reports",
  "rows": [
   [
    "Service invoices",
    "Included"
   ],
   [
    "eIMS reporting",
    "Included"
   ],
   [
    "QR invoice record",
    "Included"
   ],
   [
    "Billing",
    "Separate from FBR"
   ]
  ],
  "status": "PRA eIMS READY",
  "cta": "Visit PRA page",
  "href": "https://mydigitalinvoice.com/pra-integration",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20h16M6 17V9m4 8V5m4 12v-7m4 7V7\"/><path d=\"M3 9l9-6 9 6\"/></svg>",
  "index": 2,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20PRA."
 },
 "pos": {
  "name": "POS",
  "title": "Counter sales that become compliant invoices.",
  "copy": "Bill customers at the counter and keep every sale recorded as a compliant invoice, with stock and reports updated in the same portal.",
  "flow": [
   "Fast counter billing",
   "Every sale recorded as an invoice",
   "Stock and reports kept in sync"
  ],
  "best": "Retail shops & outlets",
  "works": "Warehouse · Reports",
  "rows": [
   [
    "Counter billing",
    "Included"
   ],
   [
    "Compliant sale invoice",
    "Included"
   ],
   [
    "Stock update on sale",
    "Included"
   ],
   [
    "Branch reporting",
    "Included"
   ]
  ],
  "status": "POS READY",
  "cta": "Visit POS page",
  "href": "https://mydigitalinvoice.com/pos",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"3\" width=\"16\" height=\"11\" rx=\"2\"/><path d=\"M8 7h8M8 10h4\"/><path d=\"M6 14l-1 7h14l-1-7\"/><path d=\"M9 18h6\"/></svg>",
  "index": 3,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20POS."
 },
 "digital-invoicing": {
  "name": "Digital Invoicing",
  "title": "FBR digital invoices with IRN and QR codes.",
  "copy": "Create invoices with buyer, HS and tax details, receive the IRN and verifiable QR record, and keep every response linked to the original transaction.",
  "flow": [
   "Invoice with HS and tax logic",
   "IRN and QR record returned",
   "Audit-ready history retained"
  ],
  "best": "Sales tax-registered businesses",
  "works": "PRA · Reports · Ledger",
  "rows": [
   [
    "FBR sale-type scenarios",
    "28 / 28"
   ],
   [
    "Bulk upload",
    "9,000+ invoices"
   ],
   [
    "IRN + QR record",
    "Included"
   ],
   [
    "Audit ledger",
    "10 years"
   ]
  ],
  "status": "DIGITAL INVOICING READY",
  "cta": "Visit Digital Invoicing page",
  "href": "https://mydigitalinvoice.com/digital-invoicing",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 2h9l5 5v15H6z\"/><path d=\"M14 2v6h6\"/><path d=\"M9 13h6m-6 4h3\"/><rect x=\"14\" y=\"15\" width=\"3\" height=\"3\"/></svg>",
  "index": 4,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20Digital%20Invoicing."
 },
 "payroll": {
  "name": "Payroll",
  "title": "Payroll, done right every month.",
  "copy": "Run monthly payroll for your whole team — salaries, deductions and Pakistani statutory contributions calculated together, with salary slips for every employee.",
  "flow": [
   "Automated monthly payroll runs",
   "Salary slips for every employee",
   "Compliance alerts before deadlines"
  ],
  "best": "Any team with salaried staff",
  "works": "General Ledger · Reports",
  "rows": [
   [
    "EOBI",
    "Included"
   ],
   [
    "Professional tax",
    "Provincial"
   ],
   [
    "IESSI / KPESSI",
    "Included"
   ],
   [
    "WWF &amp; WCE cess",
    "Included"
   ]
  ],
  "status": "PAYROLL APP ON GOOGLE PLAY",
  "cta": "Visit Payroll page",
  "href": "https://mydigitalinvoice.com/payroll",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"9\" cy=\"7\" r=\"3.5\"/><path d=\"M3 20v-1a6 6 0 0 1 9.5-4.9\"/><rect x=\"14\" y=\"13\" width=\"8\" height=\"8\" rx=\"1.5\"/><path d=\"M16.5 17h3\"/></svg>",
  "index": 5,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20Payroll."
 },
 "general-ledger": {
  "name": "General Ledger",
  "title": "Your books, posted automatically.",
  "copy": "Sales, purchases, payroll and company expenses post to your general ledger, so your chart of accounts stays current without double entry.",
  "flow": [
   "Chart of accounts",
   "Automatic journal postings",
   "Payroll and expenses posted to the GL"
  ],
  "best": "Finance teams & accountants",
  "works": "Every MDI module",
  "rows": [
   [
    "Chart of accounts",
    "Included"
   ],
   [
    "Journal postings",
    "Automatic"
   ],
   [
    "Payroll accounts",
    "Separated"
   ],
   [
    "Expense app postings",
    "Included"
   ]
  ],
  "status": "LEDGER IN SYNC",
  "cta": "Open My Digital Invoice",
  "href": "https://fbr.mydigitalinvoice.com/login",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z\"/><path d=\"M4 21.5V4.5M8 7h8M8 11h8M8 15h5\"/></svg>",
  "index": 6,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20General%20Ledger."
 },
 "company-reports": {
  "name": "Company Reports",
  "title": "Every number in one reporting view.",
  "copy": "Review invoice activity, tax-ready summaries, authority responses and company performance without rebuilding records manually.",
  "flow": [
   "Sales and tax summaries",
   "Invoice and submission activity",
   "Audit trail on every record"
  ],
  "best": "Owners, managers & accountants",
  "works": "Every MDI module",
  "rows": [
   [
    "Sales summary",
    "Included"
   ],
   [
    "Tax-ready summary",
    "Included"
   ],
   [
    "Submission status",
    "Included"
   ],
   [
    "Audit trail",
    "Included"
   ]
  ],
  "status": "REPORTS LIVE",
  "cta": "Open My Digital Invoice",
  "href": "https://fbr.mydigitalinvoice.com/login",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19V9m5 10V5m5 14v-7m5 7V3\"/><path d=\"M3 21h18\"/></svg>",
  "index": 7,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20Company%20Reports."
 },
 "purchasing": {
  "name": "Purchasing",
  "title": "Purchases connected to stock and accounts.",
  "copy": "Record purchases from your suppliers and keep products, stock and transaction history connected from order to ledger.",
  "flow": [
   "Supplier and seller registry",
   "Purchase records against products",
   "Stock and ledger updated together"
  ],
  "best": "Traders, retailers & manufacturers",
  "works": "Warehouse · General Ledger",
  "rows": [
   [
    "Supplier records",
    "Included"
   ],
   [
    "Purchase entries",
    "Included"
   ],
   [
    "Stock update on receipt",
    "Included"
   ],
   [
    "Ledger posting",
    "Included"
   ]
  ],
  "status": "PURCHASING READY",
  "cta": "Open My Digital Invoice",
  "href": "https://fbr.mydigitalinvoice.com/login",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"9\" cy=\"20\" r=\"1.5\"/><circle cx=\"18\" cy=\"20\" r=\"1.5\"/><path d=\"M2 3h3l2.6 11.5a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 7H6\"/></svg>",
  "index": 8,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20Purchasing."
 },
 "warehouse": {
  "name": "Warehouse",
  "title": "Know what you hold, everywhere.",
  "copy": "Connect products, stock and equipment records to sales and purchases, with a complete history of every movement.",
  "flow": [
   "Products and stock levels",
   "Equipment records",
   "Full movement history"
  ],
  "best": "Businesses holding stock",
  "works": "POS · Purchasing",
  "rows": [
   [
    "Product catalogue",
    "Included"
   ],
   [
    "Stock levels",
    "Live"
   ],
   [
    "Equipment records",
    "Included"
   ],
   [
    "Movement history",
    "Included"
   ]
  ],
  "status": "INVENTORY IN SYNC",
  "cta": "Open My Digital Invoice",
  "href": "https://fbr.mydigitalinvoice.com/login",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21V8l9-5 9 5v13\"/><path d=\"M7 21v-8h10v8M7 17h10\"/></svg>",
  "index": 9,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20Warehouse."
 },
 "distribution": {
  "name": "Distribution",
  "title": "Sell MDI into your business network.",
  "copy": "The MDI Distributor programme lets consultants, accountants, sales professionals and business networks offer MDI to the companies they work with.",
  "flow": [
   "For consultants and accountants",
   "For sales pros and networks",
   "Backed by the MDI support team"
  ],
  "best": "Consultants, accountants & networks",
  "works": "The full MDI platform",
  "rows": [
   [
    "Who can join",
    "Resellers & networks"
   ],
   [
    "What you offer",
    "The MDI platform"
   ],
   [
    "Support",
    "MDI local team"
   ],
   [
    "Applications",
    "Open"
   ]
  ],
  "status": "DISTRIBUTORS WELCOME",
  "cta": "Visit Distribution page",
  "href": "https://mydigitalinvoice.com/distribution",
  "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"5\" r=\"2.5\"/><circle cx=\"5\" cy=\"19\" r=\"2.5\"/><circle cx=\"19\" cy=\"19\" r=\"2.5\"/><path d=\"M12 7.5v4M12 11.5l-5.5 5.5M12 11.5l5.5 5.5\"/></svg>",
  "index": 10,
  "wa": "https://wa.me/923336820820?text=Assalamualaikum%2C%20I%27m%20interested%20in%20MDI%20Distribution."
 }
};

  var modal = document.getElementById("mdi-product-modal");
  if (!modal) return;
  var closeButton = modal.querySelector(".dual-modal-close");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lastTrigger = null;
  var total = Object.keys(products).length;

  function q(sel) { return modal.querySelector(sel); }
  function esc(s) { var d = document.createElement("div"); d.innerHTML = s; return d.textContent; }

  function populate(id) {
    var p = products[id];
    if (!p) return false;
    q("[data-pm-eyebrow]").textContent = "MDI solution · " + String(p.index).padStart(2, "0") + " of " + total;
    q("[data-pm-title]").textContent = p.title;
    q("[data-pm-copy]").textContent = p.copy;
    q("[data-pm-name]").textContent = p.name;
    q("[data-pm-best]").textContent = p.best;
    q("[data-pm-works]").textContent = p.works;
    q("[data-pm-status]").textContent = p.status;
    q("[data-pm-cta]").textContent = p.cta;
    q("[data-pm-icon]").innerHTML = p.icon;

    var flow = q("[data-pm-flow]");
    flow.innerHTML = "";
    p.flow.forEach(function (item) {
      var s = document.createElement("span");
      s.textContent = item;
      flow.appendChild(s);
    });

    var rows = q("[data-pm-rows]");
    rows.innerHTML = '<div class="dual-full-row mdi-pm-row"><span>Feature</span><span>In MDI</span></div>';
    p.rows.forEach(function (r) {
      var row = document.createElement("div");
      row.className = "dual-full-row mdi-pm-row";
      var a = document.createElement("span"); a.textContent = esc(r[0]);
      var b = document.createElement("b"); b.textContent = esc(r[1]);
      row.appendChild(a); row.appendChild(b);
      rows.appendChild(row);
    });

    var link = q("[data-pm-link]");
    link.href = p.href;
    var external = /^https?:/.test(p.href) && p.href.indexOf(location.hostname || "mydigitalinvoice.com") === -1;
    if (external) { link.target = "_blank"; link.rel = "noopener"; } else { link.removeAttribute("target"); link.removeAttribute("rel"); }
    q("[data-pm-wa]").href = p.wa;
    modal.setAttribute("data-product", id);
    return true;
  }

  function open(id, trigger) {
    if (!populate(id)) return;
    lastTrigger = trigger || null;
    document.body.classList.add("dual-invoice-open");
    modal.hidden = false;
    requestAnimationFrame(function () {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      window.setTimeout(function () { closeButton.focus(); }, reduceMotion ? 0 : 600);
    });
  }

  function close() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("dual-invoice-open");
    window.setTimeout(function () {
      modal.hidden = true;
      if (lastTrigger) lastTrigger.focus();
    }, reduceMotion ? 0 : 380);
  }

  document.querySelectorAll("[data-product-open]").forEach(function (card) {
    card.addEventListener("click", function () { open(card.getAttribute("data-product-open"), card); });
  });

  closeButton.addEventListener("click", close);
  modal.addEventListener("click", function (e) { if (e.target === modal) close(); });

  /* in-page links (e.g. Payroll → #payroll) close the card before scrolling */
  q("[data-pm-link]").addEventListener("click", function () {
    if (this.getAttribute("href").charAt(0) === "#") close();
  });

  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "Tab") {
      var f = Array.prototype.slice.call(modal.querySelectorAll('button:not([disabled]), a[href]'));
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
})();

/* Every MDI mark plays the "Assemble" reveal: when it scrolls into view, on hover, and every 6 seconds while visible. */
(function () {
  "use strict";
  var marks = Array.prototype.slice.call(document.querySelectorAll(".mdi-pw--assemble"));
  if (!marks.length) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var visible = new Set();
  function play(mark) {
    mark.classList.remove("is-assembling");
    void mark.getBoundingClientRect();            // restart the CSS animation
    mark.classList.add("is-assembling");
  }
  marks.forEach(function (mark) {
    var host = mark.closest("a, button, .dual-modal-brand, .mdi-eco-brand, .dual-portal-logo, .dual-risk-route-core") || mark;
    host.addEventListener("mouseenter", function () { play(mark); });
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { if (!visible.has(e.target)) play(e.target); visible.add(e.target); }
        else visible.delete(e.target);
      });
    }, { threshold: 0.6 });
    marks.forEach(function (m) { io.observe(m); });
  } else {
    marks.forEach(function (m) { visible.add(m); play(m); });
  }
  window.setInterval(function () {
    if (document.hidden) return;
    visible.forEach(play);
  }, 6000);
})();
