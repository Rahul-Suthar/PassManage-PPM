import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [pass, setPass] = useState([]);

  useEffect(() => {
    let pass = localStorage.getItem("passwords");
    setPass(pass ? JSON.parse(pass) : []);
  }, []);

  return (
    <div className="relative h-screen w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <Navbar />
        <div className="flex items-center justify-center h-[30vh]">
          <Form pass={pass} />
        </div>
        <div className="flex items-center justify-center mt-10">
          <Table passArr={pass} />
        </div>
      </div>
    </div>
  );
}

export default App;
