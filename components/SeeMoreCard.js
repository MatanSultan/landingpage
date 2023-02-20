import Link from "next/link";

const SeeMoreCard = () => {
  return (
    <div className="mt-6 flex justify-center ">
      <div className="w-full md:w-64 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
        <h3 className="text-lg font-medium text-center">want to See More </h3>
        <p className="text-gray-600 mt-4 text-center">
          you can enter our website and see more
        </p>
        {/* space  */}
        <div className="mt-4"></div>
        <Link
          href="https://traibo-website.vercel.app/"
          className="text-center items-center justify-center  bg-indigo-500 text-white px-6  py-4 mt-4 rounded-full hover:bg-indigo-600"
        >
          go to our website
        </Link>
      </div>
    </div>
  );
};

export default SeeMoreCard;
