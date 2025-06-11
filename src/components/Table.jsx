import FadeInSection from "./FadeInSection";
import { FaCopy } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast, Slide } from 'react-toastify';

const Table = ({ passArr, handleDelete }) => {
  const copytext = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard", {
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
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={600}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
      <div className="flex flex-col gap-5 items-center justify-center w-[90%] md:w-[70%]">
        <FadeInSection>
          <p className="text-md text-white sm:text-lg font-semibold font-sans">
            Your Passwords
          </p>
        </FadeInSection>

        <div className="w-full bg-white rounded-lg shadow-md overflow-x-auto">
          {passArr?.length > 0 ? (
            <table className="table-auto w-full">
              <thead align="center" className="bg-green-600">
                <tr>
                  <th className="px-3 py-1">WebSite</th>
                  <th className="px-3 py-1">Username</th>
                  <th className="px-3 py-1">Password</th>
                  <th className="px-3 py-1"></th>
                </tr>
              </thead>
              <tbody>
                {passArr.map((pass, idx) => (
                  <tr key={idx}>
                    <td className="px-2 max-w-60 break-all border-b border-gray-500">
                      <FadeInSection>
                        <a href={pass.website} target="_blank">
                          {pass.website}
                        </a>
                      </FadeInSection>
                    </td>
                    <td className="break-all border-b border-gray-500">
                      <FadeInSection>
                        <div className="flex items-center justify-center gap-2">
                          <span>{pass.username}</span>
                          <div
                            className="cursor-pointer py-2"
                            onClick={() => copytext(pass.username)}
                          >
                            <FaCopy />
                          </div>
                        </div>
                      </FadeInSection>
                    </td>
                    <td className="break-all border-b border-gray-500">
                      <FadeInSection>
                        <div className="flex items-center justify-center gap-2">
                          <span>{pass.pass}</span>
                          <div
                            className="cursor-pointer py-2"
                            onClick={() => copytext(pass.pass)}
                          >
                            <FaCopy />
                          </div>
                        </div>
                      </FadeInSection>
                    </td>
                    <td className="break-all border-b border-gray-500">
                      <FadeInSection>
                        <div className="flex cursor-pointer" onClick={()=>handleDelete(pass.id)}>
                          <MdDelete />
                        </div>
                      </FadeInSection>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-4 text-center">No passwords</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
