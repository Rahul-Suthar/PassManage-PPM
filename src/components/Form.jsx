import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Form = ({ pass }) => {
  const [show, setShow] = useState(false);
  const [form, setform] = useState({ website: "", username: "", pass: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (Object.values(form).some((value) => value.trim() === "")) {
      alert("Please fill in all fields.");
      return;
    }

    const newpassArr = [...(pass || []), form];
    localStorage.setItem("passwords", JSON.stringify(newpassArr));
    setform({ website: "", username: "", pass: "" });
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-around w-full md:w-[60%] h-full">
      <div className="my-3 text-white">
        <p className="text-lg sm:text-3xl">PPM - Personal Password Manager</p>
      </div>
      <div className="bg-slate-800 border-2 border-green-500 rounded-lg shadow-xl text-white w-[90%]">
        <form className="flex flex-col items-center justify-around h-full">
          <div className="flex p-3 w-full items-center justify-between">
            <label className="hidden sm:block" htmlFor="website">
              WebSite URL
            </label>
            <input
              value={form.website}
              placeholder="website url"
              type="text"
              name="website"
              id="website"
              onChange={handleChange}
              className="outline-none rounded-md border-2 px-2 p-1 ml-2 flex-1"
            />
          </div>
          <div className="flex flex-col sm:flex-row w-full">
            <div className="flex p-3 w-full items-center justify-between">
              <label className="hidden sm:block" htmlFor="username">
                Username
              </label>
              <input
                value={form.username}
                placeholder="username"
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                className="outline-none rounded-md border-2 px-2 p-1 ml-2 flex-1"
              />
            </div>
            <div className="flex p-3 w-full items-center justify-between relative">
              <label className="hidden sm:block" htmlFor="pass">
                Password
              </label>
              <input
                value={form.pass}
                placeholder="password"
                type={show ? "text" : "password"}
                name="pass"
                id="pass"
                onChange={handleChange}
                className="outline-none rounded-md border-2 px-2 pr-8 p-1 ml-2 flex-1"
              />
              <div className="absolute right-5" onClick={() => setShow(!show)}>
                {show ? <FaRegEyeSlash/> : <FaRegEye/> } 
              </div>
            </div>
          </div>
          <button
            className="bg-green-700 text-black flex items-center gap-2 mb-2 px-5 py-2 rounded-md shadow-sm active:scale-95 cursor-pointer transition-all"
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
