import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function ThankYouHero() {
  return (
    <section className="tyHero" aria-labelledby="thank-you-page-title">
      <div className="tyHeroBg" aria-hidden />

      <div className="tyHeroInner">
        <h1 id="thank-you-page-title">Thank You</h1>
        <nav aria-label="Breadcrumb">
          <ol className="tyBreadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="tyBreadcrumbSep" aria-hidden>
              <FaAngleRight />
            </li>
            <li aria-current="page">Thank You</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
