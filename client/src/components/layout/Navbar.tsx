import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="max-w-6xm mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--color-foreground)]"
        >
          <Dumbbell className="w-6 h-6 text-[var(--color-accent)]" />
          <span className="font-semibold text-lg">GymAI</span>
        </Link>

        <nav>
          <>
            <Link to="/auth/sign-in" className="rounded-md bg-lime-400 px-4 py-2 font-medium text-black hover:bg-lime-500">
              Sign In
            </Link>
          </>
        </nav>
      </div>
    </header>
  );
}
