import Link from "next/link";
import css from './mainNavigation.module.css'
import Logo from "./logo";

const MainNavigation = () => {
  return (
    <header className={css.header}>
      <Link href="/">
          <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
