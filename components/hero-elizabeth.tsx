import Image from 'next/image';
import BackgroundImage from '@/assets/cape-elizabeth.png';
import { ArrowDown01Icon } from 'hugeicons-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-black">
      <Image
        src={BackgroundImage}
        alt="Background"
        fill
        className="object-cover opacity-90"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3">
        <p className="text-white text-center text-2xl font-sans font-bold tracking-normal text-shadow-md">
          And does the wind blow, in
        </p>
        <h1 className="text-white text-center text-8xl font-hand font-bold text-shadow-md">
          Cape Elizabeth
        </h1>
        <p className="text-white text-center text-2xl font-sans font-bold tracking-normal text-shadow-md">
          constant and cold, how do we live with this?
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-4 animate-bounce">
        <ArrowDown01Icon className="w-14 h-14 text-white" />
      </div>
    </div>
  );
}
