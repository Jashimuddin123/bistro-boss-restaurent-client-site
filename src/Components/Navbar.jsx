import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = (
        <>
          <li className="mr-2 font-semibold text-md">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mr-2 font-semibold text-md">
            <NavLink to="/allTouristSpot">CONTACT us</NavLink>
          </li>
          <li className="mr-2 font-semibold text-md">
            <NavLink to="/register">DASHBOARD</NavLink>
          </li>
          <li className="mr-2 font-semibold text-md">
            <NavLink to="/addTourist">Our Shop</NavLink>
          </li>
          <li className="mr-2 font-semibold text-md">
            <NavLink to="/mylist">SIGN OUT</NavLink>
          </li>
        </>
      );
    return (
        <div>
            <div className="navbar text-white border z-10 bg-black border-red-700 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {navLinks}
      </ul>
    </div>
       <div className="flex flex-col justify-center items-center m-0 p-0">
       <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
       <span>Restaurant</span>
       </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;