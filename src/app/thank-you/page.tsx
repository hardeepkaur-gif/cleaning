/* =============================================================
   Cleaning Services London — Thank You page  (SINGLE FILE)
   Path: app/thank-you/page.tsx
   No extra CSS file, no client component, no dependencies.
   ============================================================= */

import type { Metadata } from "next";
import Link from "next/link";
import ThmButton from "@/components/menu/ThmButton";
import { SITE_PHONE, SITE_PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You | Cleaning Services London",
  description:
    "Thank you for contacting Cleaning Services London. Our team will review your request and come back with a fixed, upfront quote.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: { index: false, follow: false },
};

/* ---- floating soap bubbles: size / left / duration / delay ---- */
const BUBBLES: [number, string, number, number][] = [
  [26, "6%", 15, 0],
  [14, "14%", 12, 3],
  [38, "23%", 19, 6],
  [18, "34%", 14, 1.5],
  [10, "44%", 11, 8],
  [30, "56%", 17, 4],
  [16, "66%", 13, 9],
  [44, "77%", 21, 2],
  [12, "86%", 12, 6.5],
  [22, "94%", 16, 10],
];

const STEPS = [
  {
    n: "1",
    title: "We Review Your Request",
    text: "Our London team reads your details, checks the property type and works out exactly what the job needs.",
    time: "Within 30 minutes",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h11l5 5v9a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
        <path d="M15 5v5h5M7 14h8M7 17h5" />
      </svg>
    ),
  },
  {
    n: "2",
    title: "You Get a Fixed Quote",
    text: "We call or email a clear, upfront price — no hidden charges, no hourly surprises and no obligation to book.",
    time: "Same working day",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006.5 6.5L17 13l4 1.5v3a2 2 0 01-2.2 2A16.8 16.8 0 014.5 5.2 2 2 0 016.5 3z" />
      </svg>
    ),
  },
  {
    n: "3",
    title: "Your Cleaner Is Assigned",
    text: "Once you confirm, a DBS-checked insured cleaner is booked in, and you get completion photos after the job.",
    time: "On your chosen date",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20v-1.5A4.5 4.5 0 018.5 14h3a4.5 4.5 0 014.5 4.5V20" />
        <circle cx="10" cy="8" r="3.4" />
        <path d="M17 11l1.6 1.6L22 9.2" />
      </svg>
    ),
  },
];

const SERVICES = [
  {
    href: "/domestic-cleaning-services",
    title: "Domestic Cleaning",
    text: "Regular or one-off house cleaning by vetted cleaners you can trust.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    href: "/end-of-tenancy-cleaning",
    title: "End of Tenancy",
    text: "Deposit-friendly deep cleans for landlords, agents and tenants.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M14.5 3.5l6 6-8.5 8.5H6v-6L14.5 3.5z" />
        <path d="M12.5 5.5l6 6" />
      </svg>
    ),
  },
  {
    href: "/carpet-cleaning-london",
    title: "Carpet Cleaning",
    text: "Hot water extraction that lifts stains, odours and deep-set dirt.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v11H4z" />
        <path d="M4 16l-1 3h18l-1-3" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    ),
  },
  {
    href: "/gutter-cleaning-london",
    title: "Gutter Cleaning",
    text: "Blockages cleared and downpipes flushed, with before and after photos.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 8h18v4H3z" />
        <path d="M7 12v5a2 2 0 002 2M17 12v3" />
        <path d="M12 3l3 5H9l3-5z" />
      </svg>
    ),
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export default function ThankYouPage() {
  return (
    <main className="clty">
      <style>{CSS}</style>

      {/* ambient background */}
      <div className="clty-blobs" aria-hidden="true">
        <span className="clty-blob clty-blob1" />
        <span className="clty-blob clty-blob2" />
        <span className="clty-blob clty-blob3" />
      </div>

      <div className="clty-bubbles" aria-hidden="true">
        {BUBBLES.map(([size, left, dur, delay], i) => (
          <span
            key={i}
            className="clty-bubble"
            style={{
              width: size,
              height: size,
              left,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      {/* ---------------- HERO ---------------- */}
      <section className="clty-hero" aria-labelledby="thank-you-page-title">
        <div className="clty-shell">
          <div className="clty-heroGrid">
            <div className="clty-heroCopy">
              <span className="clty-pill">
                <span className="clty-dot" />
                Request Received
              </span>

              <h1 className="clty-title" id="thank-you-page-title">
                Thank you — your{" "}
                <span className="clty-mark">
                  clean is booked in
                  <svg
                    className="clty-swoosh"
                    viewBox="0 0 300 20"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M4 14C60 5 150 3 296 9" />
                  </svg>
                </span>{" "}
                with us.
              </h1>

              <p className="clty-lead">
                Your details have reached the Cleaning Services London team and
                we&apos;re already matching you with the right cleaner and a
                fixed, upfront price — no call centres, no guesswork.
              </p>

              <div className="clty-ctaRow">
                <ThmButton href={SITE_PHONE_HREF}>
                  Call Us Now — {SITE_PHONE}
                </ThmButton>
                <ThmButton href="/case-studies" variant="secondary">
                  See Our Work
                </ThmButton>
              </div>

              <div className="clty-proof">
                <span className="clty-stars" aria-label="5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
                    </svg>
                  ))}
                </span>
                <span>
                  Trusted by homeowners, landlords and businesses across London
                </span>
              </div>
            </div>

            {/* status ticket */}
            <div className="clty-ticket">
              <div className="clty-ticketTop">
                <div className="clty-tick" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </div>
                <div>
                  <h2>Enquiry Confirmed</h2>
                  <p>
                    We&apos;ve logged your request and it&apos;s now with our
                    booking team.
                  </p>
                </div>
              </div>

              <div className="clty-ticketBody">
                <div className="clty-barLabel">
                  <span>Progress</span>
                  <em>Step 1 of 3</em>
                </div>
                <div className="clty-bar" aria-hidden="true">
                  <span className="clty-barFill" />
                </div>

                <ul className="clty-checkList">
                  <li>
                    <span className="clty-cIcon" aria-hidden="true">
                      <Check />
                    </span>
                    Details received and logged
                  </li>
                  <li>
                    <span className="clty-cIcon" aria-hidden="true">
                      <Check />
                    </span>
                    Assigned to a London coordinator
                  </li>
                  <li className="clty-pending">
                    <span
                      className="clty-cIcon clty-spinner"
                      aria-hidden="true"
                    />
                    Fixed quote being prepared
                  </li>
                </ul>

                <div className="clty-ticketFoot">
                  <div>
                    Expected reply
                    <strong>Within 30 minutes</strong>
                  </div>
                  <div>
                    Opening hours
                    <strong>Mon – Sun, 8am – 8pm</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STEPS ---------------- */}
      <section className="clty-section" aria-labelledby="thank-you-steps-title">
        <div className="clty-shell">
          <div className="clty-head clty-reveal">
            <span className="clty-kicker">What Happens Next</span>
            <h2 id="thank-you-steps-title">
              Three Simple Steps, No Waiting Around
            </h2>
            <p>
              Every enquiry follows the same clear process — so you always know
              where your booking stands.
            </p>
          </div>

          <div className="clty-steps">
            {STEPS.map((s) => (
              <div className="clty-step clty-reveal" key={s.n}>
                <span className="clty-ghost" aria-hidden="true">
                  {s.n}
                </span>
                <div className="clty-stepIcon" aria-hidden="true">
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="clty-time">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.5v5l3 1.8" />
                  </svg>
                  {s.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section
        className="clty-section clty-noTop"
        aria-labelledby="thank-you-services-title"
      >
        <div className="clty-shell">
          <div className="clty-head clty-reveal">
            <span className="clty-kicker">While You Wait</span>
            <h2 id="thank-you-services-title">
              Add Another Service to Your Quote
            </h2>
            <p>
              Getting more than one job done in a single visit usually works out
              cheaper — just mention it when we call.
            </p>
          </div>

          <div className="clty-services">
            {SERVICES.map((s) => (
              <Link className="clty-card clty-reveal" href={s.href} key={s.title}>
                <div className="clty-cardIcon" aria-hidden="true">
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="clty-cardLink">
                  Learn more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CASE STUDIES ---------------- */}
      <section className="clty-section clty-noTop" aria-label="Case studies">
        <div className="clty-shell">
          <div className="clty-band clty-reveal">
            <div className="clty-bandGlow" aria-hidden="true" />
            <div className="clty-bandRing" aria-hidden="true" />

            <div className="clty-bandCopy">
              <span className="clty-bandKicker">Proof, Not Promises</span>
              <h2>See the Standard Before We Even Arrive</h2>
              <p>
                Mould removal, bathroom deep cleans, garden clearances — our
                case studies show real London jobs with before and after photos
                from the same cleaners who&apos;ll be working on your property.
              </p>

              <div className="clty-bandTags" aria-hidden="true">
                <span>Before &amp; After</span>
                <span>Real London Jobs</span>
                <span>Photo Proof</span>
              </div>

              <ThmButton href="/case-studies" className="clty-bandBtn">
                View All Case Studies
              </ThmButton>
            </div>

            <div className="clty-bandVisual">
              <div className="clty-baFrame">
                <div className="clty-baCol">
                  <span className="clty-baLabel">Before</span>
                  <img
                    src="/images/case-studies/bathroom-deep-clean-canning-town-before.webp"
                    alt=""
                    width={320}
                    height={240}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="clty-baCol">
                  <span className="clty-baLabel clty-baLabelAfter">After</span>
                  <img
                    src="/images/case-studies/bathroom-deep-clean-canning-town-after.webp"
                    alt=""
                    width={320}
                    height={240}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="clty-baBadge" aria-hidden="true">
                  Real job result
                </span>
              </div>

              <div className="clty-stats">
                <div className="clty-stat">
                  <div className="clty-statNum">100%</div>
                  <p>DBS-checked cleaners</p>
                </div>
                <div className="clty-stat">
                  <div className="clty-statNum">Fixed</div>
                  <p>Upfront pricing, always</p>
                </div>
                <div className="clty-stat">
                  <div className="clty-statNum">7 Days</div>
                  <p>Open every day, 8am–8pm</p>
                </div>
                <div className="clty-stat">
                  <div className="clty-statNum">Photos</div>
                  <p>Completion proof on every job</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* =============================================================
   All styles — scoped under .clty so nothing leaks into the site
   ============================================================= */
const CSS = `
.clty{
  --teal:#0a4644; --teal-mid:#0e5e5b; --teal-soft:#16807c;
  --coral:#e26a4c; --coral-dark:#c9573b; --coral-soft:#fbe6df;
  --ink:#595752; --ink-strong:#232220;
  --cream:#fdfcfa; --mint:#eaf3f2; --mint-deep:#d5e9e6; --line:#e8e4dd;
  position:relative; overflow:hidden; background:var(--cream); color:var(--ink);
  font-family:var(--font);
}
.clty *{box-sizing:border-box}
.clty h1,.clty h2,.clty h3{
  font-family:var(--font-two);
  margin:0; line-height:1.22; letter-spacing:-.015em; color:var(--ink-strong);
}
.clty p{margin:0}
.clty-shell{width:min(1180px,100% - 40px); margin-inline:auto; position:relative; z-index:2}
.clty-section{padding:clamp(56px,7vw,88px) 0 !important}
.clty-noTop{padding-top:0 !important}
.clty-hero{padding:clamp(56px,8vw,96px) 0 clamp(50px,7vw,80px) !important}

/* ---------- background blobs ---------- */
.clty-blobs{position:absolute; inset:0; z-index:0; pointer-events:none; overflow:hidden}
.clty-blob{position:absolute; border-radius:50%; filter:blur(60px); opacity:.55; animation:clty-drift 18s ease-in-out infinite}
.clty-blob1{width:520px;height:520px;top:-180px;left:-140px;background:radial-gradient(circle,#bfe3de,transparent 70%)}
.clty-blob2{width:460px;height:460px;top:-80px;right:-160px;background:radial-gradient(circle,#fbd9cd,transparent 70%);animation-delay:-6s}
.clty-blob3{width:420px;height:420px;top:52%;left:-180px;background:radial-gradient(circle,#d9ece9,transparent 70%);animation-delay:-11s}
@keyframes clty-drift{
  0%,100%{transform:translate3d(0,0,0) scale(1)}
  33%{transform:translate3d(34px,26px,0) scale(1.07)}
  66%{transform:translate3d(-24px,18px,0) scale(.96)}
}

/* ---------- floating soap bubbles ---------- */
.clty-bubbles{position:absolute; inset:0; z-index:1; pointer-events:none; overflow:hidden}
.clty-bubble{
  position:absolute; bottom:-140px; border-radius:50%; opacity:0;
  background:radial-gradient(circle at 32% 28%,rgba(255,255,255,.95),rgba(255,255,255,.25) 42%,rgba(191,227,222,.35) 70%,rgba(255,255,255,0) 72%);
  border:1px solid rgba(14,94,91,.16);
  box-shadow:inset -4px -6px 12px rgba(14,94,91,.08);
  animation:clty-rise linear infinite;
}
@keyframes clty-rise{
  0%{transform:translateY(0) translateX(0) scale(.7); opacity:0}
  8%{opacity:.75}
  55%{transform:translateY(-46vh) translateX(28px) scale(1)}
  92%{opacity:.4}
  100%{transform:translateY(-104vh) translateX(-18px) scale(1.06); opacity:0}
}

/* ---------- scroll reveal (CSS only, safe fallback) ---------- */
@supports (animation-timeline: view()){
  .clty-reveal{
    animation:clty-up both;
    animation-timeline:view();
    animation-range:entry 4% cover 26%;
  }
}
@keyframes clty-up{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}

/* ---------- hero ---------- */
.clty-heroGrid{display:grid; grid-template-columns:1.05fr .95fr; gap:clamp(32px,5vw,64px); align-items:center}
.clty-heroCopy{animation:clty-in .8s .05s both cubic-bezier(.22,1,.36,1)}
@keyframes clty-in{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}

.clty-pill{
  display:inline-flex; align-items:center; gap:9px; padding:8px 16px 8px 10px;
  border-radius:999px; background:#fff; border:1px solid var(--mint-deep);
  box-shadow:0 6px 18px rgba(10,70,68,.06);
  font-size:12px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--teal-mid);
}
.clty-dot{width:9px;height:9px;border-radius:50%;background:#23a06f;position:relative;margin-left:4px}
.clty-dot::after{content:"";position:absolute;inset:0;border-radius:50%;background:#23a06f;animation:clty-beat 1.8s ease-out infinite}
@keyframes clty-beat{0%{transform:scale(1);opacity:.7}70%,100%{transform:scale(3.2);opacity:0}}

.clty-title{margin-top:20px; font-size:clamp(1.85rem,6.2vw,3.35rem); font-weight:700; overflow-wrap:break-word}
.clty-mark{position:relative; display:inline; color:var(--teal); white-space:normal}
.clty-swoosh{position:absolute; left:-2%; bottom:-.34em; width:104%; height:.42em; overflow:visible; pointer-events:none}
.clty-swoosh path{
  fill:none; stroke:var(--coral); stroke-width:7; stroke-linecap:round;
  stroke-dasharray:300; stroke-dashoffset:300;
  animation:clty-draw 1.1s .5s cubic-bezier(.65,0,.35,1) forwards;
}
@keyframes clty-draw{to{stroke-dashoffset:0}}

.clty-lead{margin-top:22px; font-size:clamp(.98rem,1.5vw,1.07rem); line-height:1.8; max-width:520px}
.clty-ctaRow{margin-top:30px; display:flex; flex-wrap:wrap; gap:14px; align-items:center}
.clty-ctaRow .thmBtn{flex:0 1 auto}

.clty-proof{margin-top:28px; display:flex; align-items:center; gap:14px; flex-wrap:wrap; font-size:.87rem}
.clty-stars{display:inline-flex; gap:3px; color:var(--coral)}
.clty-stars svg{width:15px;height:15px;fill:currentColor}

/* ---------- status ticket ---------- */
.clty-ticket{
  position:relative; background:#fff; border:1px solid var(--line); border-radius:22px;
  padding:34px 32px 30px; box-shadow:0 30px 70px rgba(10,70,68,.12);
  animation:clty-float 7s ease-in-out infinite;
}
@keyframes clty-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.clty-ticket::before,.clty-ticket::after{
  content:""; position:absolute; width:26px; height:26px; border-radius:50%;
  background:var(--cream); border:1px solid var(--line); top:62%;
}
.clty-ticket::before{left:-14px; clip-path:inset(0 0 0 50%)}
.clty-ticket::after{right:-14px; clip-path:inset(0 50% 0 0)}

.clty-ticketTop{display:flex; align-items:center; gap:16px; padding-bottom:22px; border-bottom:1px dashed var(--line)}
.clty-tick{
  flex:none; width:62px; height:62px; border-radius:50%; display:grid; place-items:center; position:relative;
  background:linear-gradient(145deg,#34b892,#0f8a71); box-shadow:0 10px 24px rgba(15,138,113,.3);
  animation:clty-pop .6s cubic-bezier(.22,1.2,.36,1) both;
}
.clty-tick::after{content:""; position:absolute; inset:-7px; border-radius:50%; border:2px solid rgba(15,138,113,.28); animation:clty-ripple 2.6s ease-out infinite}
.clty-tick svg{width:30px;height:30px}
.clty-tick path{
  fill:none; stroke:#fff; stroke-width:3.4; stroke-linecap:round; stroke-linejoin:round;
  stroke-dasharray:48; stroke-dashoffset:48; animation:clty-tickDraw .5s .35s ease-out forwards;
}
@keyframes clty-tickDraw{to{stroke-dashoffset:0}}
@keyframes clty-pop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes clty-ripple{0%{transform:scale(1);opacity:.8}70%,100%{transform:scale(1.4);opacity:0}}

.clty-ticketTop h2{font-size:1.22rem; font-weight:600}
.clty-ticketTop p{margin-top:5px; font-size:.86rem}
.clty-ticketBody{padding-top:22px}
.clty-barLabel{
  display:flex; justify-content:space-between; align-items:baseline; margin-bottom:10px;
  font-size:.79rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:var(--teal-mid);
}
.clty-barLabel em{font-style:normal; color:var(--coral); letter-spacing:0; text-transform:none; font-size:.85rem}
.clty-bar{height:8px; border-radius:999px; background:var(--mint); overflow:hidden}
.clty-barFill{
  display:block; height:100%; width:0; border-radius:999px;
  background:linear-gradient(90deg,var(--teal-soft),var(--coral)); background-size:200% 100%;
  animation:clty-fill 1.6s .4s cubic-bezier(.22,1,.36,1) forwards, clty-shift 3s linear 2s infinite;
}
@keyframes clty-fill{to{width:34%}}
@keyframes clty-shift{to{background-position:200% 0}}

.clty-checkList{list-style:none; margin:22px 0 0; padding:0; display:grid; gap:13px}
.clty-checkList li{display:flex; align-items:center; gap:11px; font-size:.9rem; color:var(--ink-strong)}
.clty-cIcon{
  flex:none; width:22px; height:22px; border-radius:50%; display:grid; place-items:center;
  background:var(--mint); color:var(--teal-mid);
}
.clty-cIcon svg{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.clty-pending{color:var(--ink)}
.clty-spinner{background:#fff; border:2px solid var(--mint-deep); border-top-color:var(--coral); animation:clty-spin .9s linear infinite}
@keyframes clty-spin{to{transform:rotate(360deg)}}

.clty-ticketFoot{
  margin-top:24px; padding-top:18px; border-top:1px dashed var(--line);
  display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; font-size:.82rem;
}
.clty-ticketFoot strong{display:block; color:var(--ink-strong); font-size:.92rem; font-weight:600; margin-top:3px}

/* ---------- section heads ---------- */
.clty-head{text-align:center; max-width:640px; margin:0 auto clamp(34px,5vw,50px)}
.clty-kicker{
  display:inline-block; font-size:11.5px; font-weight:600; letter-spacing:.17em; text-transform:uppercase;
  color:var(--teal-mid); background:var(--mint); padding:7px 15px; border-radius:999px; margin-bottom:15px;
}
.clty-head h2{font-size:clamp(1.6rem,3.3vw,2.15rem); font-weight:700}
.clty-head p{margin-top:14px; line-height:1.78; font-size:.97rem}

/* ---------- steps ---------- */
.clty-steps{display:grid; grid-template-columns:repeat(3,1fr); gap:22px}
.clty-step{
  position:relative; background:#fff; border:1px solid var(--line); border-radius:18px;
  padding:30px 26px; overflow:hidden;
  transition:transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s ease, border-color .28s ease;
}
.clty-step::before{
  content:""; position:absolute; inset:0 0 auto 0; height:3px;
  background:linear-gradient(90deg,var(--teal-soft),var(--coral));
  transform:scaleX(0); transform-origin:left; transition:transform .4s cubic-bezier(.22,1,.36,1);
}
.clty-step:hover{transform:translateY(-7px); border-color:var(--mint-deep); box-shadow:0 22px 46px rgba(10,70,68,.12)}
.clty-step:hover::before{transform:scaleX(1)}
.clty-ghost{
  position:absolute; top:8px; right:18px; font-family:var(--font-two); font-size:4.4rem; font-weight:700;
  color:var(--mint); line-height:1; transition:color .3s ease, transform .3s ease;
}
.clty-step:hover .clty-ghost{color:var(--coral-soft); transform:scale(1.06)}
.clty-stepIcon{
  position:relative; width:52px; height:52px; border-radius:15px; display:grid; place-items:center;
  background:var(--mint); color:var(--teal); margin-bottom:18px;
  transition:transform .35s cubic-bezier(.22,1.4,.36,1), background .3s ease, color .3s ease;
}
.clty-step:hover .clty-stepIcon{background:var(--teal); color:#fff; transform:rotate(-8deg) scale(1.06)}
.clty-stepIcon svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.clty-step h3{position:relative; font-size:1.06rem; font-weight:600}
.clty-step p{position:relative; margin-top:10px; font-size:.91rem; line-height:1.75}
.clty-time{
  position:relative; display:inline-flex; align-items:center; gap:7px; margin-top:16px;
  font-size:.75rem; font-weight:600; letter-spacing:.07em; text-transform:uppercase; color:var(--coral);
}
.clty-time svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}

/* ---------- service cards ---------- */
.clty-services{display:grid; grid-template-columns:repeat(4,1fr); gap:20px}
.clty-card{
  position:relative; display:block; text-decoration:none; color:inherit; background:#fff;
  border:1px solid var(--line); border-radius:18px; padding:26px 24px; overflow:hidden; isolation:isolate;
  transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, color .3s ease;
}
.clty-card::before{
  content:""; position:absolute; inset:auto -20% -60% -20%; height:160%; z-index:-1;
  background:linear-gradient(160deg,var(--teal-mid),var(--teal));
  border-radius:50% 50% 0 0 / 22% 22% 0 0; transform:translateY(100%);
  transition:transform .55s cubic-bezier(.22,1,.36,1);
}
.clty-card:hover{transform:translateY(-7px); box-shadow:0 24px 50px rgba(10,70,68,.2); color:#fff}
.clty-card:hover::before{transform:translateY(0)}
.clty-card:hover h3{color:#fff}
.clty-card:hover p{color:rgba(255,255,255,.82)}
.clty-cardIcon{
  width:50px; height:50px; border-radius:14px; display:grid; place-items:center;
  background:var(--mint); color:var(--teal); margin-bottom:16px;
  transition:background .35s ease,color .35s ease,transform .35s ease;
}
.clty-card:hover .clty-cardIcon{background:var(--coral); color:#fff; transform:translateY(-3px) rotate(6deg)}
.clty-cardIcon svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.clty-card h3{font-size:1rem; font-weight:600; transition:color .3s ease}
.clty-card p{margin:9px 0 16px; font-size:.87rem; line-height:1.7; transition:color .3s ease}
.clty-cardLink{display:inline-flex; align-items:center; gap:7px; font-size:.85rem; font-weight:600; color:var(--coral); transition:color .3s ease}
.clty-card:hover .clty-cardLink{color:#fff}
.clty-cardLink svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .28s ease}
.clty-card:hover .clty-cardLink svg{transform:translateX(5px)}

/* ---------- case study band ---------- */
.clty-band{
  position:relative; overflow:hidden; border-radius:28px;
  background:linear-gradient(135deg,#062f2d 0%, var(--teal) 48%, #0c524f 100%);
  color:#fff; padding:clamp(34px,5vw,56px);
  display:grid; grid-template-columns:1.05fr .95fr;
  gap:clamp(28px,4vw,48px); align-items:center;
  box-shadow:0 28px 60px rgba(10,70,68,.22);
}
.clty-bandGlow,.clty-bandRing{position:absolute; pointer-events:none}
.clty-bandGlow{
  width:420px; height:420px; border-radius:50%;
  right:-120px; top:-160px;
  background:radial-gradient(circle,rgba(226,106,76,.35), transparent 68%);
  filter:blur(8px);
}
.clty-bandRing{
  width:280px; height:280px; border-radius:50%;
  border:1px solid rgba(255,255,255,.1);
  left:42%; bottom:-160px;
}
.clty-bandCopy,.clty-bandVisual{position:relative; z-index:1}
.clty-bandKicker{
  display:inline-flex; align-items:center; gap:8px; margin-bottom:16px;
  padding:7px 14px 7px 10px; border-radius:999px;
  background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.16);
  font-size:11.5px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:#d7efec;
}
.clty-bandKicker::before{
  content:""; width:8px; height:8px; border-radius:50%; background:var(--coral);
  box-shadow:0 0 0 4px rgba(226,106,76,.22);
}
.clty-bandCopy h2{font-size:clamp(1.55rem,3.2vw,2.2rem); font-weight:700; color:#fff; max-width:16ch}
.clty-bandCopy p{margin:14px 0 0; line-height:1.78; font-size:.96rem; max-width:460px; color:rgba(255,255,255,.78)}
.clty-bandTags{display:flex; flex-wrap:wrap; gap:8px; margin:18px 0 26px}
.clty-bandTags span{
  padding:7px 12px; border-radius:999px; font-size:.78rem; font-weight:600;
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12); color:#e8f6f4;
}
.clty-bandBtn{box-shadow:0 16px 34px rgba(0,0,0,.22)}
.clty-bandVisual{display:grid; gap:16px}
.clty-baFrame{
  position:relative; display:grid; grid-template-columns:1fr 1fr; gap:10px;
  padding:10px; border-radius:20px;
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
}
.clty-baCol{
  position:relative; overflow:hidden; border-radius:14px; aspect-ratio:4/3;
  background:#0a3a38;
}
.clty-baCol img{
  width:100%; height:100%; object-fit:cover; display:block;
  transition:transform .45s ease;
}
.clty-baFrame:hover .clty-baCol img{transform:scale(1.05)}
.clty-baLabel{
  position:absolute; left:10px; top:10px; z-index:1;
  padding:5px 10px; border-radius:999px;
  background:rgba(10,70,68,.85); color:#fff; font-size:.72rem; font-weight:700;
  letter-spacing:.06em; text-transform:uppercase;
}
.clty-baLabelAfter{background:rgba(226,106,76,.92)}
.clty-baBadge{
  position:absolute; left:50%; bottom:-11px; transform:translateX(-50%);
  padding:7px 14px; border-radius:999px; white-space:nowrap;
  background:var(--coral); color:#fff; font-size:.75rem; font-weight:700;
  letter-spacing:.04em; box-shadow:0 10px 24px rgba(0,0,0,.25);
}
.clty-stats{display:grid; grid-template-columns:repeat(2,1fr); gap:12px; margin-top:8px}
.clty-stat{
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(8px); border-radius:16px; padding:16px 14px; text-align:left;
  transition:transform .3s ease, background .3s ease, border-color .3s ease;
}
.clty-stat:hover{
  transform:translateY(-4px);
  background:rgba(255,255,255,.12);
  border-color:rgba(226,106,76,.45);
}
.clty-statNum{font-family:var(--font-two); font-size:1.35rem; font-weight:700; color:#fff; line-height:1}
.clty-stat p{margin-top:7px; font-size:.78rem; line-height:1.45; color:rgba(255,255,255,.72)}

/* ---------- responsive ---------- */
@media (max-width:1000px){
  .clty-heroGrid{grid-template-columns:1fr; gap:28px}
  .clty-ticket{max-width:560px; width:100%}
  .clty-services{grid-template-columns:repeat(2,1fr)}
  .clty-steps{grid-template-columns:1fr; gap:16px}
  .clty-band{grid-template-columns:1fr; gap:28px}
  .clty-baFrame{margin-bottom:14px}
  .clty-bandCopy h2{max-width:none}
}

@media (max-width:767px){
  .clty-shell{width:min(1180px,100% - 28px)}
  .clty-hero{padding:clamp(36px,8vw,56px) 0 clamp(36px,6vw,52px) !important}
  .clty-section{padding:clamp(40px,8vw,64px) 0 !important}
  .clty-noTop{padding-top:0 !important}

  .clty-blob1,.clty-blob2,.clty-blob3{opacity:.35; filter:blur(48px)}
  .clty-bubbles{display:none}

  .clty-pill{font-size:11px; letter-spacing:.1em; padding:7px 14px 7px 9px}
  .clty-title{margin-top:16px; font-size:clamp(1.7rem,7.4vw,2.35rem); line-height:1.18; letter-spacing:-.02em}
  .clty-swoosh{display:none}
  .clty-lead{margin-top:16px; font-size:.95rem; line-height:1.7}
  .clty-ctaRow{margin-top:22px; flex-direction:column; gap:10px; align-items:stretch}
  .clty-ctaRow .thmBtn,
  .clty-band .thmBtn{width:100%; justify-content:center}
  .clty-proof{margin-top:20px; align-items:flex-start; gap:10px; font-size:.84rem; line-height:1.55}

  .clty-ticket{
    padding:24px 18px 22px; border-radius:18px;
    animation:none; box-shadow:0 18px 40px rgba(10,70,68,.12);
  }
  .clty-ticket::before,.clty-ticket::after{display:none}
  .clty-ticketTop{flex-direction:row; align-items:flex-start; gap:12px; padding-bottom:18px}
  .clty-tick{width:48px; height:48px}
  .clty-tick svg{width:24px; height:24px}
  .clty-ticketTop h2{font-size:1.05rem}
  .clty-ticketTop p{font-size:.82rem; line-height:1.55}
  .clty-checkList{gap:11px}
  .clty-checkList li{font-size:.86rem; align-items:flex-start}
  .clty-ticketFoot{flex-direction:column; gap:14px; margin-top:18px; padding-top:16px}

  .clty-head{margin-bottom:28px}
  .clty-head h2{font-size:clamp(1.4rem,6vw,1.85rem)}
  .clty-head p{font-size:.92rem}

  .clty-step{padding:24px 20px}
  .clty-ghost{font-size:3.4rem; top:4px; right:12px}
  .clty-stepIcon{width:46px; height:46px; margin-bottom:14px}
  .clty-stepIcon svg{width:22px; height:22px}
  .clty-step h3{font-size:1rem}
  .clty-step p{font-size:.88rem}

  .clty-services{grid-template-columns:1fr; gap:14px}
  .clty-card{padding:22px 20px}

  .clty-band{
    padding:28px 20px 32px; border-radius:20px; gap:22px;
  }
  .clty-bandGlow{width:260px; height:260px; right:-90px; top:-110px}
  .clty-bandRing{display:none}
  .clty-bandKicker{font-size:10.5px; margin-bottom:12px}
  .clty-bandCopy h2{font-size:clamp(1.35rem,6vw,1.75rem)}
  .clty-bandCopy p{font-size:.9rem; margin-top:12px}
  .clty-bandTags{gap:6px; margin:14px 0 20px}
  .clty-bandTags span{padding:6px 10px; font-size:.72rem}
  .clty-baFrame{gap:8px; padding:8px; border-radius:16px; margin-bottom:18px}
  .clty-baCol{border-radius:12px}
  .clty-baLabel{left:8px; top:8px; padding:4px 8px; font-size:.68rem}
  .clty-baBadge{font-size:.7rem; padding:6px 12px; bottom:-12px}
  .clty-stats{gap:10px; margin-top:10px}
  .clty-stat{padding:14px 12px; border-radius:14px}
  .clty-statNum{font-size:1.15rem}
  .clty-stat p{font-size:.74rem}
}

@media (max-width:480px){
  .clty-shell{width:min(1180px,100% - 24px)}
  .clty-title{font-size:1.62rem}
  .clty-ticketTop{flex-direction:column}
  .clty-baFrame{grid-template-columns:1fr 1fr}
  .clty-stats{grid-template-columns:1fr 1fr}
  .clty-bandTags span:last-child{display:none}
}

@media (max-width:360px){
  .clty-title{font-size:1.48rem}
  .clty-stats{grid-template-columns:1fr}
  .clty-baFrame{grid-template-columns:1fr}
  .clty-baBadge{position:static; transform:none; display:inline-flex; margin:8px auto 0}
  .clty-baFrame{justify-items:center}
}

@media (prefers-reduced-motion: reduce){
  .clty *,.clty *::before,.clty *::after{animation:none !important; transition:none !important}
  .clty-swoosh path,.clty-tick path{stroke-dashoffset:0}
  .clty-barFill{width:34%}
  .clty-reveal{opacity:1; transform:none}
}
`;
