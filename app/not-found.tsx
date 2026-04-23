import Link from "next/link";

import { buttonStyles } from "@/lib/design/button-styles";

export default function NotFound() {
  return (
    <section className="px-5 pb-20 pt-10 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[960px] rounded-[38px] border border-black/8 bg-white/55 px-6 py-16 text-center backdrop-blur-xl">
        <p className="text-[0.7rem] uppercase tracking-[0.34em] text-muted">Not found</p>
        <h1 className="mt-5 font-display text-6xl text-foreground md:text-7xl">
          That piece is no longer on the floor.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted">
          The archive rotates quickly. Head back to the homepage or browse the live collection to
          find another edit with the same luxury mood.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            className={buttonStyles("primary", "lg")}
            data-cursor
            data-cursor-label="Home"
            href="/"
          >
            Return home
          </Link>
          <Link
            className={buttonStyles("secondary", "lg")}
            data-cursor
            data-cursor-label="Browse"
            href="/collections"
          >
            View collections
          </Link>
        </div>
      </div>
    </section>
  );
}
