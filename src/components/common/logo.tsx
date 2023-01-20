import { Hamburger } from 'phosphor-react';
import React from 'react';

interface LoginProps {
  width: string;
}

export default function Logo({ width }: LoginProps) {
  return (
    <div>
      <Hamburger
        className={`bg-primary text-white  rounded-lg w-[${width}] h-[${width}] p-2`}
      />
    </div>
  );
}
