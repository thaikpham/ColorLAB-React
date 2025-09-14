import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Sony Color Lab
            </Link>
            <div className="ml-10 hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="#" className="text-primary text-sm">
                  Pricing
                </Link>
                <Link href="#" className="text-primary text-sm">
                  Resources
                </Link>
                <Link href="#" className="text-primary text-sm">
                  Community
                </Link>
                <Link href="#" className="text-primary text-sm">
                  Download
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
            <Button className="text-sm hover:opacity-90">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
