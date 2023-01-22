import React from 'react';
import Logo from '../common/logo';

export default function LoginHeader() {
  return (
    <header>
      <div className="flex flex-col items-center gap-3 pt-16 mb-8">
        <Logo width={'h-16'} height={'w-16'} />
        <span className="text-primary-color font-bold">Foodz</span>
      </div>
      <h1 className="text-center font-bold text-">Sign in to your account</h1>
    </header>
  );
}
