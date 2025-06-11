import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ pass }) => {
  const [show, setShow] = useState(false);
  const [form, setform] = useState({ website: "", username: "", pass: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // checking if all fields are filled properly
    if (Object.values(form).some((value) => value.trim() === "")) {
      alert("Please fill in all fields.");
      return;
    }

    const newpassArr = [...(pass || []), {...form, id: uuidv4()}];
    localStorage.setItem("passwords", JSON.stringify(newpassArr));
    setform({ website: "", username: "", pass: "" });
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-around w-full md:w-[60%]">
      <div className="mb-3 text-white">
        <p className="text-lg sm:text-3xl">PPM - Personal Password Manager</p>
      </div>
      <div className="bg-slate-800 border-2 border-green-500 rounded-lg shadow-xl text-white w-[90%]">
        <form className="flex flex-col p-3 items-center justify-center gap-5">
          <div className="flex p-2 w-full items-center justify-center border-2 rounded-md">
            <input
              value={form.website}
              placeholder="website url"
              type="text"
              name="website"
              id="website"
              onChange={handleChange}
              className="outline-none flex-1"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full sm:flex-row gap-3">
            <div className="flex p-2 w-full items-center rounded-md justify-center border-2">
              <input
                value={form.username}
                placeholder="username"
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                className="outline-none flex-1"
              />
            </div>
            <div className="flex p-2 w-full items-center rounded-md justify-center border-2 relative">
              <input
                value={form.pass}
                placeholder="password"
                type={show ? "text" : "password"}
                name="pass"
                id="pass"
                onChange={handleChange}
                className="outline-none flex-1"
              />
              <div className="absolute right-3" onClick={() => setShow(!show)}>
                {show ? <FaRegEyeSlash/> : <FaRegEye/> } 
              </div>
            </div>
          </div>
          <button
            className="bg-green-700 text-black flex items-center gap-2 my-2 px-5 py-2 rounded-md shadow-sm active:scale-95 cursor-pointer transition-all"
            onClick={handleSubmit}
            type="submit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/gzqofmcx.json"
              trigger="hover"
              className="w-6"
            ></lord-icon>
            <span>Save</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
