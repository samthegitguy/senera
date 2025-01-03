"use client";

import { FormEvent } from "react";

function handleSubmit(e: FormEvent) {
  e.stopPropagation();
  e.preventDefault();

  // console.log(e);

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  // console.log(Object.fromEntries(formData.entries()).messageContent); // Submit data to API
}

export default function Dashboard() {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="shadow-2xl p-2 m-6 max-w-screen bg-zinc-500 rounded-xl"
      >
        <label htmlFor="messageBox" className="hidden"></label>
        <div className="flex rounded-md p-2 w-full bg-zinc-600 text-white">
          {/* Input box */}
          <input
            id="messageBox"
            className="border-none bg-inherit flex-1 outline-none"
            name="messageContent"
            placeholder="Message @self"
          />
          <button type="submit" className="fill p-1 border-solid">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
