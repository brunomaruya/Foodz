import { Checkbox } from '@mui/material';
import { Eye } from 'phosphor-react';
import React from 'react';

export default function Form() {
  return (
    <div className="px-5 mt-6">
      <form className="flex flex-col gap-3">
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
            <input type="password" placeholder="Password" />
            <Eye className="text-lg" />
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
      </form>
    </div>
  );
}
