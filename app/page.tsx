import HeroElizabeth from '@/components/hero-elizabeth';
import HeroStickSeason from '@/components/hero-stick-season';
// import Topbar from '@/components/topbar';

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative">
          <HeroElizabeth />
          <HeroStickSeason />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      </main>
    </div>
  );
}
