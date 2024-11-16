import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/icons/logo.png'
import './nav.css'
import { FaBars, FaSearch } from 'react-icons/fa';
const Nav = () => {
      const { pathname } = useLocation()


      return (
            <div className=' container mx-auto'>
                  <div className=' w-11/12 mx-auto md:w-full'>
                        <div className={`navbar bg-transparent ${pathname.includes('/home') ? 'text-white' : "text-black"}`}>
                              <div className="navbar-start">
                                    <div className="dropdown">
                                          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                                <FaBars className=' text-2xl'></FaBars>
                                          </div>
                                          <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-white text-black rounded   z-[1] mt-3 w-52 p-2 shadow">
                                                <NavLink to={'/news'}>News</NavLink>
                                                <NavLink to={'/destination'}>Destination</NavLink>
                                                <NavLink to={'/blog'}>Blog</NavLink>
                                                <NavLink to={'/content'}>Contact</NavLink>
                                          </ul>
                                    </div>
                                    <Link to={'/home'}>
                                          <img className='w-28 hidden sm:block' id={`${pathname.includes('/home') && 'logo'}`} src={logo} alt="" />
                                    </Link>
                              </div>
                              <div className=" navbar-center">
                                    <div className=' relative w-fit h-fit '>
                                          <FaSearch className=' absolute top-1/4 left-2 cursor-pointer'></FaSearch>
                                          <input
                                                placeholder='Search your Destination...'
                                                type="text" className={`input  input-sm  w-36 xl:w-96 px-8 md:px-10 bg-white bg-opacity-15 ${pathname.includes('/home')?'border-white':'border-black'} border-white rounded border focus:border-white `} name="" id="" />
                                    </div>
                              </div>

                              <div className="navbar-end">
                                    <div className="navbar-center hidden lg:flex">
                                          <ul className="menu menu-horizontal px-1 gap-3 xl:gap-8 mr-8">
                                                <NavLink to={'/news'}>News</NavLink>
                                                <NavLink to={'/destination'}>Destination</NavLink>
                                                <NavLink to={'/blog'}>Blog</NavLink>
                                                <NavLink to={'/content'}>Contact</NavLink>
                                          </ul>
                                    </div>
                                    <Link to={'/login'} className="btn btn-sm md:btn-md bg-[#F9A51A] text-black hover:bg-[#da8e16] border-none rounded md:px-8">Login</Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Nav;