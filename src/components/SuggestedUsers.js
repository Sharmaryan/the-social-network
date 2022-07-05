import React from 'react'

export const SuggestedUsers = () => {
  return (
    <div className="col-span-1 justify-self-start w-60 bg-slate-900 py-2 h-60 sticky top-[5rem]">
      <h2 className="text-white text-center capitalize">people you may know</h2>
      <div className="flex mt-4">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="avatar"
          className=" rounded-full h-14 w-14 ml-4 "
        />
        <div className="ml-4 text-white">
          <p>xyz sharma</p>
          <p>@user_name</p>
        </div>
      </div>
    </div>
  );
}
