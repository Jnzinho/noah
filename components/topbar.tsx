import { LighthouseIcon } from 'hugeicons-react';
import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="p-6 flex items-center justify-between absolute top-0 left-0 right-0 z-10 text-gray-50 bg-white/10">
      <div className="flex items-center gap-2">
        <LighthouseIcon />
        <p className="text-2xl font-medium">Cape Elizabeth</p>
      </div>
      <div className="flex items-center gap-6 font-medium text-xl">
        <Link href="#home">Home</Link>
        <Link href="#attractions">Attractions</Link>
        <Link href="#songs">Songs</Link>
        <Link href="#about">About</Link>
      </div>
    </div>
  );
}
