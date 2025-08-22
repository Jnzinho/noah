import Image from 'next/image';
import BackgroundImage from '@/assets/sticks.jpg';
// import { ArrowDown01Icon } from 'hugeicons-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-black">
      <Image
        src={BackgroundImage}
        alt="Background"
        fill
        className="object-cover opacity-100"
        style={{ objectPosition: 'left 75%' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3">
        <p className="text-white text-center text-3xl font-sans font-bold tracking-normal text-shadow-md">
          And i love vermont, but it&apos;s the
        </p>
        <h1 className="text-white text-center text-7xl font-sans font-bold tracking-tight text-shadow-md">
          Season of the sticks
        </h1>
        <p className="text-white text-center text-2xl font-sans font-bold tracking-normal text-shadow-md">
          And I saw your mom, she forgot that I existed
        </p>
      </div>
      {/* <div className="absolute bottom-10 left-3/2 -translate-x-1/2 flex flex-col gap-4 animate-bounce">
        <ArrowDown01Icon className="w-14 h-14 text-white" />
      </div> */}
    </div>
  );
}
