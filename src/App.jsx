import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";
import FadeInSection from "./components/FadeInSection";
import { toast, Slide } from "react-toastify";

function App() {
  const [pass, setPass] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("passwords") || "[]");
    setPass(stored);
  }, []);

  const handleDelete = (id) => {
    if (confirm("Think again, really want to delete.")) {
      const updated = pass.filter((item) => item.id !== id);
      setPass(updated);
      localStorage.setItem("passwords", JSON.stringify(updated));
      toast.success("Deleted password", {
        position: "top-right",
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };

  return (
    <div className="relative h-screen w-full bg-slate-950">
      <FadeInSection>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <Navbar />
          <div className="flex items-center justify-center h-[30vh] p-8 sm:p-0 my-17">
            <Form pass={pass} />
          </div>
          <div className="flex items-center justify-center">
            <Table passArr={pass} handleDelete={handleDelete} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default App;
