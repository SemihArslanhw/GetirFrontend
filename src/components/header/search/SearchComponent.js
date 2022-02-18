import React from 'react'

function SearchComponent() {
  return (
    <div className='flex w-96'>
        <div className='w-8 rounded-l-lg items-center flex pl-3 bg-white'>
        <svg className='w-5 h-5' data-testid="icon" name="search" size="22" color="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="style__Icon-sc-__sc-hqksj3-1 cbMeXC"><path d="M14.414 28.788c3.408 0 6.511-1.184 8.975-3.152l5.887 5.887c0.624 0.624 1.632 0.624 2.256 0s0.624-1.632 0-2.256l-5.887-5.887c1.968-2.464 3.152-5.583 3.152-8.975 0-7.951-6.447-14.398-14.398-14.398s-14.398 6.447-14.398 14.398c0 7.951 6.463 14.382 14.414 14.382zM14.414 3.192c6.191 0 11.199 5.007 11.199 11.199 0 3.072-1.232 5.855-3.232 7.871-0.016 0.016-0.032 0.016-0.048 0.032s-0.016 0.032-0.032 0.048c-2.016 2-4.799 3.232-7.871 3.232-6.191 0-11.199-5.007-11.199-11.199s4.991-11.183 11.183-11.183z" class="style__Path-sc-__sc-hqksj3-2 kqvXtw"></path></svg>
        
        </div>
        <div className=''>
        <input className='outline-none  p-3 rounded-r-3xl' placeholder='Ürün ara ' type="search"></input>
    </div></div>
  )
}

export default SearchComponent