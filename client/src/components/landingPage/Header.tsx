import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed z-10 top-0 left-0 w-full backdrop-blur-lg border-b border-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6 text-white">
        <div>
          <h3 className="font-bold text-2xl tracking-wider">
            CertiLedger
          </h3>
        </div>
        <div>
          <ul className="flex items-center font-medium space-x-8">
            <li>
              <a href="#" className="pointer">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="pointer">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="pointer">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="pointer">
                Register
              </a>
            </li>
            <li>
              <NavLink
                to={'/'}
                className="pointer block bg-[#9C3DF3] px-8 py-2 rounded-md font-semibold"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
