import { Checkbox } from '@mui/material';
import { Eye, EyeSlash, FacebookLogo, GoogleLogo } from 'phosphor-react';
import React, { useState } from 'react';

import Link from 'next/link';

export default function Form() {
  const [isVisible, setIsVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="px-5 mt-6 flex flex-col items-center gap-3">
      <form className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-1">
          <label className="ml-5 text-sm" htmlFor="email">
            Email<span className="text-primary-color">*</span>
          </label>
          <input
            className="border py-1 px-5 rounded-3xl text-sm"
            type="text"
            placeholder="Email or Phone Number"
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <label className="ml-5 text-sm" htmlFor="email">
            Password<span className="text-primary-color">*</span>
          </label>
          <div className="border py-1 px-5 rounded-3xl text-sm flex items-center justify-between">
            <input
              type={isVisible ? 'text' : 'password'}
              placeholder="Password"
            />
            {isVisible ? (
              <EyeSlash
                onClick={handlePasswordVisibility}
                className="text-lg"
              />
            ) : (
              <Eye onClick={handlePasswordVisibility} className="text-lg" />
            )}
          </div>
        </div>

        <div className="flex items-center ml-2">
          <Checkbox
            size="small"
            sx={{
              color: '#ff224b',
              '&.Mui-checked': {
                color: '#ff224b',
              },
              '& .MuiSvgIcon-root': { fontSize: 16 },
            }}
          />
          <label htmlFor="checkbox">Remeber me</label>
        </div>
        <input
          className="bg-primary text-white py-2 rounded-3xl"
          type="submit"
          value="Sign up"
        />
      </form>
      <Link href="#" className="text-primary-color font-semibold text-sm">
        Forgot the password?
      </Link>
      <div className="flex flex-col items-center">
        <span className="text-sm mb-2">or continue with</span>
        <div className="flex gap-5 ">
          <button className="flex items-end gap-1 border py-3 px-8 rounded-xl">
            <FacebookLogo className="text-2xl text-blue-900 " />
            <span className="text-sm font-semibold">Facebook</span>
          </button>
          <button className="flex items-end gap-1 border py-3 px-8 rounded-xl">
            <GoogleLogo className="text-2xl text-red-900 " />
            <span className="text-sm font-semibold">Google</span>
          </button>
        </div>
      </div>
      <div className="text-zinc-400 mt-2">
        Already have an account?{' '}
        <Link href="#" className="text-primary-color">
          Sign in
        </Link>
      </div>
    </div>
  );
}
