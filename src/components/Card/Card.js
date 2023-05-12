import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Card = ({ quiz }) => {
  const { name, logo, id } = quiz;
  return (
    <div
      className="overflow-hidden bg-gray-200 rounded-3xl
    hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <img src={logo} alt={name} />
      <div className="flex justify-between items-center">
        <div className="mb-3 mx-7">
          <h2 className="text-2xl font-semibold">{name}</h2>
        </div>
        <div className="flex justify-end mx-7 my-4">
          <Link
            to={`quiz-start/${id}`}
            className="bg-gray-300 rounded-lg px-2 py-1"
          >
            <ArrowRightIcon className="h-6 w-6 text-purple-700"></ArrowRightIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
