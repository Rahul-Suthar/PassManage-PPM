import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Navbar = (props) => {
  const [loginForm, setloginForm] = useState(false);
  const [show, setShow] = useState(false);
  const [form, setform] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.pass) {
      alert("Please fill in all fields.");
      return;
    }

    // Demo credentials
    if (form.username === "admin" && form.pass === "admin123") {
      alert("Login successful!");
      setloginForm(false);
      setform({ username: "", pass: "" });
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <>
      {loginForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-20">
          <div className="bg-slate-800 border-2 border-green-500 rounded-xl shadow-2xl text-white w-[90vw] max-w-md p-8">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="username"
                  className="text-green-400 font-semibold"
                >
                  Username
                </label>
                <input
                  value={form.username}
                  placeholder="username"
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleChange}
                  className="outline-none rounded-md border-2 border-green-400 bg-slate-900 px-3 py-2 text-white"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="pass" className="text-green-400 font-semibold">
                  Password
                </label>
                <input
                  value={form.pass}
                  placeholder="password"
                  type={show ? "text" : "password"}
                  name="pass"
                  id="pass"
                  onChange={handleChange}
                  className="outline-none rounded-md border-2 border-green-400 bg-slate-900 px-3 py-2 pr-10 text-white"
                />
                <div
                  className="absolute right-3 top-12 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <FaRegEyeSlash className={show ? "block" : "hidden"} />
                  <FaRegEye className={show ? "hidden" : "block"} />
                </div>
              </div>
              <button
                className="bg-green-500 hover:bg-green-600 text-black flex items-center justify-center gap-2 mt-2 p-2 rounded-md shadow-sm active:scale-95 cursor-pointer transition-all font-semibold"
                onClick={handleSubmit}
                type="submit"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/gzqofmcx.json"
                  trigger="hover"
                  className="w-6"
                ></lord-icon>
                <span>Sign In</span>
              </button>
              <button
                type="button"
                className="rounded-md bg-slate-700 p-2 text-gray-400 hover:text-white mt-2 cursor-pointer"
                onClick={() => setloginForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      <div
        className={`flex items-center justify-between p-3 px-6 bg-slate-950`}
      >
        <div className="text-lg font-semibold text-white">PassManage</div>
        <div className="text-lg font-semibold font-sans">
          <button
            onClick={() => setloginForm(true)}
            className="hover:scale-105 active:scale-95 cursor-pointer transition-all text-white"
          >
            Sign-In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
