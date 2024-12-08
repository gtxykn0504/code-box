import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-nav-background backdrop-blur shadow h-12 flex justify-between items-center px-2 fixed w-full z-100 top-0 sm:px-16">
      <span className="font-medium">
        <Link href="/">Zheary</Link>
      </span>
      <div className="text-sm text-gray-800 flex space-x-4">
        <Link href="mailto:zh@zheary.com">🗃️Mail</Link>
      </div>
    </nav>
  );
}
