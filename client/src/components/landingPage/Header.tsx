import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed left-0 top-0 z-10 w-full border-b border-white backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-white">
        <div>
          <h3 className="text-2xl font-bold tracking-wider">
            CertiLedger
          </h3>
        </div>
        <div>
          <ul className="flex items-center space-x-8 font-medium">
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
                className="pointer block rounded-md bg-[#9C3DF3] px-8 py-2 font-semibold"
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
