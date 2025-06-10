import { FaCopy } from 'react-icons/fa6'

const Table = ({ passArr }) => {
  const copytext = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to Clipboard');
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center w-[90%] md:w-[70%]">
      <p className="text-md text-white sm:text-lg font-semibold font-sans">
        Your Passwords
      </p>

      <div className="w-full bg-white rounded-lg shadow-md overflow-x-auto">
        {passArr?.length > 0 ? (
          <table className="table-auto w-full">
            <thead align="left" className="bg-green-600">
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
                  <td className="px-2 break-all border-b border-gray-500">
                    <a href={pass.website} target="_blank">{pass.website}</a>
                  </td>
                  <td className="break-all border-b border-gray-500">
                    <div className='flex items-center justify-around'>
                      <span>{pass.username}</span>
                      <div className='cursor-pointer p-2' onClick={()=>copytext(pass.username)}>
                        <FaCopy/>
                      </div>
                    </div>
                  </td>
                  <td className="break-all border-b border-gray-500">
                    <div className='flex items-center justify-around'>
                      <span>{pass.pass}</span>
                      <div className='cursor-pointer p-2' onClick={()=>copytext(pass.pass)}>
                        <FaCopy/>
                      </div>
                    </div>
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
  );
};

export default Table;