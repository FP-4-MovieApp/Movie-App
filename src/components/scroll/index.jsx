import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MovieCard from "../../components/moviecard";

const ScrollableCard = ({ data }) => {
  const scrollRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const scrollStep = 200; // Adjust this value as needed

  const scrollLeft = () => {
    if (scrollRef.current) {
      setLeftClicked(true);
      setTimeout(() => setLeftClicked(false), 300);
      scrollRef.current.scrollLeft -= scrollStep;
      setScrollPos(scrollRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      setRightClicked(true);
      setTimeout(() => setRightClicked(false), 300);
      scrollRef.current.scrollLeft += scrollStep;
      setScrollPos(scrollRef.current.scrollLeft);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center relative">
        <button
          onClick={scrollLeft}
          className={`text-3xl absolute z-10 left-2 ${
            leftClicked
              ? "bg-slate-500 bg-opacity-20 rounded-full p-2"
              : "rounded-full p-2"
          } transition-all duration-300 ease-in-out hover:bg-slate-500`}
        >
          <FiChevronLeft className="text-white hover:text-black" />
        </button>
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide flex-grow relative"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth", scrollLeft: scrollPos }}
        >
          {data.map((result) => (
            <MovieCard key={result.id} movie={result} />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className={`text-3xl absolute z-10 right-2 ${
            rightClicked
              ? "bg-slate-500 bg-opacity-20 rounded-full p-2"
              : "rounded-full p-2"
          } transition-all duration-300 ease-in-out hover:bg-slate-500`}
        >
          <FiChevronRight className="text-white hover:text-black" />
        </button>
      </div>
    </div>
  );
};

ScrollableCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ScrollableCard;
