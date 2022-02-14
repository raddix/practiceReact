import React from "react";

export default function Child({ handleSelectedValue }) {
  function handleChange(event) {
    handleSelectedValue(event.target.value);
  }
  return (
    <div>
      <h1 className="font-bold">Register</h1>
      <div>
        <label for="email" className="block mb-1 mt-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 p-2 w-full"
        />
      </div>
      <div>
        <label for="options" className="block mb-1 mt-1">
          Sign in options
        </label>
        <select id="options" className="px-2 py-2" onChange={handleChange}>
          <option value="email">Email</option>
          <option value="facebook">Facebook</option>
          <option value="google">Google</option>
          <option value="twitter">Twitter</option>
          <option value="phone">Phone</option>
        </select>
      </div>
    </div>
  );
}
