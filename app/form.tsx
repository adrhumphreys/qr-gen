"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function Form() {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <label
          htmlFor="text"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Text
        </label>
        <div className="mt-2">
          <input
            id="text"
            name="text"
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="h-auto w-full">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={text}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}
