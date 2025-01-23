import { IconError404 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomDidYouKnow } from "../../utils/resources.ts";

function Error() {
  const [message, setMessage] = useState("😑");

  useEffect(() => {
    setMessage(getRandomDidYouKnow);
  }, []);
  return (
    <div className="h-screen flex items-center flex-col justify-center bg-gradient-to-b to-[#2e342e] from-[#89D3DC] px-2">
      <IconError404 size={44} color="#7FC786" />
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-[30px] w-[30px] ml-4" />
        <h1 className="font-titles font-bold text-white text-2xl ml-2">
          <span className="text-[#7FC786]">The</span>
          Chama
          <span className="text-[#7FC786]">DAO</span>
        </h1>
      </div>
      <p className="text-sm font-titles text-gray-200 leading-relaxed text-center">
        Seems like the page you{"'"}re looking for hasn{"'"}t be spawned yet.
      </p>
      <p className="text-base font-bold mt-4 font-titles text-[#7FC786]">
        Did You Know?
      </p>
      <p className="text-sm font-titles text-gray-200 leading-relaxed mb-2 px-2 md:text-center text-center">
        {message}
      </p>
      <Link
        to="/"
        className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-8 mt-8 py-2 rounded-md mr-4"
      >
        Home
      </Link>
    </div>
  );
}

export default Error;
