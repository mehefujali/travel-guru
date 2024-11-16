import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/icons/logo.png'
import './nav.css'
const Nav = () => {
      const {pathname} = useLocation()
  
      
      return (
            <div className=' container mx-auto'>
                  <div className={`navbar bg-transparent ${pathname.includes('/home')?'text-white':"text-black"}`}>
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
                                          <NavLink to={'/news'}>News</NavLink>
                                         <NavLink to={'/destination'}>Destination</NavLink>
                                         <NavLink to={'/blog'}>Blog</NavLink>
                                         <NavLink to={'/content'}>Contact</NavLink>
                                    </ul>
                              </div>
                              <Link to={'/home'}>
                              <img  className='w-28' id={`${pathname.includes('/home')&&'logo'}`} src={logo} alt="" />
                              </Link>
                        </div>

                        <div className="navbar-end">
                              <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1 gap-8 mr-8">
                                         <NavLink to={'/news'}>News</NavLink>
                                         <NavLink to={'/destination'}>Destination</NavLink>
                                         <NavLink to={'/blog'}>Blog</NavLink>
                                         <NavLink to={'/content'}>Contact</NavLink>
                                    </ul>
                              </div>
                              <a className="btn btn-sm md:btn-md bg-[#F9A51A] text-black hover:bg-[#da8e16] border-none rounded md:px-8">Login</a>
                        </div>
                  </div>
            </div>
      );
};

export default Nav;