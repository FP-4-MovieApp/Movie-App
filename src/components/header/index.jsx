import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [isDropdownShow, setIsDropdownShow] = useState(false);

  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search?q=${searchQuery}`);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-between">
      <Link to="/" className="flex gap-4 pt-4">
        <img className="w-16 h-16" src={Logo} />
        <h1 className="font-bold">
          The <br />
          Movie
          <br />
          Tracker
        </h1>
      </Link>
      <div className="text-xl cursor-pointer flex ">
        <input
          className="rounded-full h-16 border-slate-600"
          type="text"
          placeholder="Type to search a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={handleKeyPress}
        ></input>
      </div>
    </div>
  );
};
export default Header;
