import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { usePageTitle } from "../components/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <div className="min-h-screen grid-paper-dark flex items-center justify-center px-4 pt-24 text-center">
      <div>
        <p className="font-impact text-[40vw] md:text-[18rem] leading-none text-orange-200">404</p>
        <p className="mt-4 text-gray-400 text-lg">This page wandered off. Let's get you back.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-orange-200 text-black font-semibold px-5 py-3 rounded-full hover:bg-orange-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>
      </div>
    </div>
  );
}
