import type { GalleryScene, VisualKind } from "@/lib/data/products";
import { cn } from "@/lib/utils";

interface ProductVisualProps {
  kind: VisualKind;
  palette: [string, string, string];
  scene?: GalleryScene;
  title: string;
  className?: string;
}

const sceneTransforms: Record<GalleryScene, string> = {
  hero: "translate(0 0) scale(1)",
  detail: "translate(26 -18) scale(1.08) rotate(-4 480 560)",
  material: "translate(-18 -34) scale(1.14) rotate(4 480 560)",
  studio: "translate(0 18) scale(0.96) rotate(-3 480 560)",
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function WatchFigure({
  primary,
  ink,
  soft,
  detail,
}: {
  primary: string;
  ink: string;
  soft: string;
  detail: string;
}) {
  return (
    <>
      <ellipse cx="480" cy="905" fill="rgba(0,0,0,0.12)" rx="190" ry="44" />
      <rect fill={ink} height="295" opacity="0.92" rx="42" width="110" x="425" y="148" />
      <rect fill={ink} height="316" opacity="0.92" rx="42" width="110" x="425" y="655" />
      <rect fill={primary} height="208" opacity="0.25" rx="30" width="56" x="452" y="202" />
      <rect fill={primary} height="228" opacity="0.22" rx="30" width="56" x="452" y="702" />
      <circle cx="480" cy="560" fill={primary} opacity="0.22" r="205" />
      <circle cx="480" cy="560" fill={ink} r="184" stroke={primary} strokeOpacity="0.4" strokeWidth="22" />
      <circle cx="480" cy="560" fill={soft} r="138" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
      <circle cx="480" cy="560" fill="rgba(255,255,255,0.48)" r="112" />
      <circle cx="480" cy="560" fill="none" r="102" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * Math.PI) / 6;
        const x1 = 480 + Math.cos(angle) * 84;
        const y1 = 560 + Math.sin(angle) * 84;
        const x2 = 480 + Math.cos(angle) * 96;
        const y2 = 560 + Math.sin(angle) * 96;

        return (
          <line
            key={index}
            stroke={ink}
            strokeLinecap="round"
            strokeOpacity="0.82"
            strokeWidth={index % 3 === 0 ? 6 : 3}
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
          />
        );
      })}
      <line stroke={detail} strokeLinecap="round" strokeWidth="10" x1="480" x2="546" y1="560" y2="528" />
      <line stroke={ink} strokeLinecap="round" strokeWidth="7" x1="480" x2="480" y1="560" y2="468" />
      <circle cx="480" cy="560" fill={ink} r="14" />
      <rect fill={ink} height="52" rx="16" width="22" x="652" y="534" />
      <path
        d="M346 428C382 372 438 344 480 344C522 344 577 372 614 428"
        fill="none"
        opacity="0.3"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="18"
      />
    </>
  );
}

function CoatFigure({
  primary,
  ink,
  soft,
}: {
  primary: string;
  ink: string;
  soft: string;
}) {
  return (
    <>
      <ellipse cx="484" cy="940" fill="rgba(0,0,0,0.12)" rx="202" ry="48" />
      <path
        d="M481 176C542 176 576 212 602 248L654 402L633 420L606 356L592 382L592 884C592 914 569 938 540 938H422C392 938 368 914 368 884V382L354 356L327 420L306 402L358 248C384 212 418 176 481 176Z"
        fill={ink}
      />
      <path
        d="M418 246L482 336L546 246L576 256L520 398H444L388 256L418 246Z"
        fill={primary}
        opacity="0.3"
      />
      <path d="M420 246L482 334L542 246L500 476H464L420 246Z" fill={soft} />
      <path d="M420 246L388 256L460 540L482 520L420 246Z" fill="rgba(255,255,255,0.22)" />
      <path d="M542 246L576 256L504 540L482 520L542 246Z" fill="rgba(255,255,255,0.12)" />
      <rect fill={primary} height="120" opacity="0.14" rx="24" width="54" x="454" y="474" />
      <path d="M448 178C448 156 464 142 482 142C500 142 516 156 516 178V190H448V178Z" fill={ink} opacity="0.72" />
    </>
  );
}

function ShoeFigure({
  primary,
  ink,
  soft,
}: {
  primary: string;
  ink: string;
  soft: string;
}) {
  return (
    <>
      <ellipse cx="480" cy="890" fill="rgba(0,0,0,0.12)" rx="246" ry="54" />
      <path
        d="M248 652C312 596 404 524 526 530C616 534 698 590 748 670C774 712 804 742 824 756C844 770 850 800 832 822C818 840 790 848 758 848H294C226 848 184 802 182 760C180 724 198 698 248 652Z"
        fill={ink}
      />
      <path
        d="M274 706C332 648 410 596 516 598C600 600 676 646 730 718"
        fill="none"
        opacity="0.22"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="18"
      />
      <path
        d="M246 764H802C816 764 828 776 828 790V800C828 826 806 848 780 848H300C238 848 200 818 194 780C192 770 200 764 246 764Z"
        fill={soft}
      />
      <path d="M280 654C358 610 450 590 534 600C606 608 674 648 718 706" fill="none" stroke={primary} strokeLinecap="round" strokeWidth="14" />
      <path d="M392 628L440 706" fill="none" stroke={primary} strokeLinecap="round" strokeWidth="12" />
      <path d="M464 614L508 702" fill="none" stroke={primary} strokeLinecap="round" strokeWidth="12" />
      <path d="M530 616L568 704" fill="none" stroke={primary} strokeLinecap="round" strokeWidth="12" />
      <path d="M606 632L634 710" fill="none" stroke={primary} strokeLinecap="round" strokeWidth="12" />
    </>
  );
}

function FragranceFigure({
  primary,
  ink,
  soft,
}: {
  primary: string;
  ink: string;
  soft: string;
}) {
  return (
    <>
      <ellipse cx="480" cy="930" fill="rgba(0,0,0,0.12)" rx="150" ry="42" />
      <rect fill={ink} height="130" rx="18" width="186" x="387" y="202" />
      <rect fill="rgba(255,255,255,0.12)" height="88" rx="14" width="112" x="424" y="226" />
      <rect fill={soft} height="548" rx="46" stroke="rgba(0,0,0,0.08)" strokeWidth="4" width="372" x="294" y="326" />
      <rect fill={primary} height="432" opacity="0.18" rx="28" width="282" x="340" y="384" />
      <rect fill="rgba(255,255,255,0.4)" height="330" rx="20" width="52" x="362" y="424" />
      <rect fill={ink} height="108" opacity="0.08" rx="18" width="198" x="382" y="532" />
      <path d="M358 428H602" stroke="rgba(255,255,255,0.58)" strokeWidth="10" />
      <path d="M382 702H578" stroke="rgba(0,0,0,0.12)" strokeLinecap="round" strokeWidth="8" />
    </>
  );
}

function BagFigure({
  primary,
  ink,
  soft,
}: {
  primary: string;
  ink: string;
  soft: string;
}) {
  return (
    <>
      <ellipse cx="480" cy="918" fill="rgba(0,0,0,0.12)" rx="212" ry="48" />
      <path
        d="M284 432C284 378 326 334 380 334H580C634 334 676 378 676 432V806C676 866 628 914 568 914H392C332 914 284 866 284 806V432Z"
        fill={ink}
      />
      <path
        d="M382 370C382 308 426 266 480 266C534 266 578 308 578 370V416H540V372C540 332 514 304 480 304C446 304 420 332 420 372V416H382V370Z"
        fill={ink}
      />
      <rect fill={soft} height="440" rx="34" width="318" x="322" y="418" />
      <rect fill={primary} height="350" opacity="0.22" rx="24" width="254" x="354" y="456" />
      <rect fill={ink} height="50" opacity="0.08" rx="16" width="118" x="421" y="606" />
      <rect fill={primary} height="24" rx="12" width="70" x="445" y="588" />
      <path d="M344 454C392 432 438 422 480 422C522 422 572 432 616 454" fill="none" opacity="0.3" stroke="white" strokeLinecap="round" strokeWidth="16" />
    </>
  );
}

function BundleFigure({
  primary,
  ink,
  soft,
}: {
  primary: string;
  ink: string;
  soft: string;
}) {
  return (
    <>
      <ellipse cx="486" cy="920" fill="rgba(0,0,0,0.12)" rx="228" ry="48" />
      <g transform="translate(72 136)">
        <rect fill={soft} height="450" rx="42" width="250" x="420" y="250" />
        <rect fill={ink} height="84" rx="18" width="126" x="482" y="180" />
        <rect fill={primary} height="308" opacity="0.2" rx="24" width="176" x="458" y="332" />
      </g>
      <g transform="translate(-56 72) scale(0.82)">
        <ellipse cx="480" cy="905" fill="rgba(0,0,0,0.08)" rx="160" ry="38" />
        <rect fill={ink} height="210" opacity="0.92" rx="34" width="84" x="438" y="208" />
        <rect fill={ink} height="216" opacity="0.92" rx="34" width="84" x="438" y="658" />
        <circle cx="480" cy="560" fill={ink} r="152" stroke={primary} strokeOpacity="0.36" strokeWidth="16" />
        <circle cx="480" cy="560" fill="white" fillOpacity="0.68" r="112" />
        <line stroke={primary} strokeLinecap="round" strokeWidth="8" x1="480" x2="538" y1="560" y2="524" />
        <line stroke={ink} strokeLinecap="round" strokeWidth="6" x1="480" x2="480" y1="560" y2="470" />
        <circle cx="480" cy="560" fill={ink} r="12" />
      </g>
      <g transform="translate(12 240) rotate(-8 220 600)">
        <path
          d="M154 488C208 446 270 420 356 426C430 432 490 470 538 538C560 568 584 592 598 602C614 616 618 644 604 660C592 674 570 680 546 680H196C142 680 110 644 110 612C110 584 124 562 154 488Z"
          fill={ink}
        />
        <path d="M144 614H576C588 614 598 624 598 636V644C598 664 580 680 560 680H200C154 680 126 658 120 628C118 620 124 614 144 614Z" fill={soft} />
        <path d="M170 548C232 502 286 484 354 488C420 490 480 520 522 570" fill="none" stroke={primary} strokeLinecap="round" strokeWidth="12" />
      </g>
    </>
  );
}

export function ProductVisual({
  kind,
  palette,
  scene = "hero",
  title,
  className,
}: ProductVisualProps) {
  const [primary, ink, soft] = palette;
  const detail = soft === "#ffffff" ? primary : soft;
  const key = `${slugify(title)}-${kind}-${scene}`;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[30px] border border-black/6 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(255,255,255,0.1))]",
        className,
      )}
    >
      <svg
        aria-hidden
        className="h-full w-full"
        fill="none"
        viewBox="0 0 960 1120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${key}-wash`} x1="180" x2="780" y1="120" y2="980">
            <stop stopColor="white" stopOpacity="0.78" />
            <stop offset="1" stopColor={primary} stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id={`${key}-glow`} cx="0" cy="0" r="1" gradientTransform="translate(480 220) rotate(90) scale(400 420)">
            <stop stopColor={primary} stopOpacity="0.28" />
            <stop offset="1" stopColor={primary} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect fill={`url(#${key}-wash)`} height="1120" width="960" />
        <circle cx="480" cy="220" fill={`url(#${key}-glow)`} r="400" />
        <circle cx="740" cy="254" fill="rgba(255,255,255,0.42)" r="128" />
        <circle cx="236" cy="860" fill="rgba(255,255,255,0.18)" r="172" />
        <path d="M144 238H816" opacity="0.12" stroke={ink} strokeWidth="2" />
        <path d="M180 926H780" opacity="0.12" stroke={ink} strokeWidth="2" />
        <g transform={sceneTransforms[scene]}>
          {kind === "watch" ? <WatchFigure detail={detail} ink={ink} primary={primary} soft={soft} /> : null}
          {kind === "coat" ? <CoatFigure ink={ink} primary={primary} soft={soft} /> : null}
          {kind === "shoe" ? <ShoeFigure ink={ink} primary={primary} soft={soft} /> : null}
          {kind === "fragrance" ? <FragranceFigure ink={ink} primary={primary} soft={soft} /> : null}
          {kind === "bag" ? <BagFigure ink={ink} primary={primary} soft={soft} /> : null}
          {kind === "bundle" ? <BundleFigure ink={ink} primary={primary} soft={soft} /> : null}
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_20%,transparent_80%,rgba(0,0,0,0.05))]" />
    </div>
  );
}

