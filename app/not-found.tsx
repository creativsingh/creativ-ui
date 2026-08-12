import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[var(--canvas)] text-neutral-900 dark:text-neutral-100">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20">
        <Container size="narrow" className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-mono text-xl font-bold border border-neutral-200 dark:border-neutral-700">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Documentation Entry Not Found.
          </h1>

          <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
            The requested documentation page or component slug does not exist in the Creativ UI index.
          </p>

          {/* Paired CTAs with equal length/width */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/getting-started/introduction"
              className="w-full sm:w-56 h-10 px-5 rounded-full bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium text-sm inline-flex items-center justify-center transition-opacity hover:opacity-90 shadow-sm"
            >
              Return to Documentation
            </Link>
            <Link
              href="/"
              className="w-full sm:w-56 h-10 px-5 rounded-full border border-neutral-300 dark:border-neutral-700 font-medium text-sm inline-flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
