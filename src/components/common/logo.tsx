import { Hamburger } from 'phosphor-react';
import React from 'react';

interface LoginProps {
  width?: string;
  height?: string;
}

export default function Logo({ width = 'w-20', height = 'h-20' }: LoginProps) {
  return (
    <div>
      <Hamburger
        className={`bg-primary p-2 text-white  rounded-2xl  ${width} ${height}`}
      />
    </div>
  );
}
