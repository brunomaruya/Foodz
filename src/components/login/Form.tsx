import React from 'react';

export default function Form() {
  return (
    <div className="px-5 mt-6">
      <form className="flex flex-col">
        <div className="flex flex-col gap-2">
          <label className="ml-5 text-sm" htmlFor="email">
            Email<span className="text-primary-color">*</span>
          </label>
          <input
            className="border py-1 px-5 rounded-3xl text-sm"
            type="text"
            placeholder="Email or Phone Number"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="ml-5 text-sm" htmlFor="email">
            Password<span className="text-primary-color">*</span>
          </label>
          <input
            className="border py-1 px-5 rounded-3xl text-sm"
            type="password"
            placeholder="Password"
          />
        </div>
      </form>
    </div>
  );
}
