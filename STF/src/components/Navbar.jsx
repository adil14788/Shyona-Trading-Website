// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { TiLocationArrow } from "react-icons/ti";
// import clsx from "clsx";
// import gsap from "gsap";

// const navItems = ["Nexus", "ShyonaPedia", "Mentor", "About", "Contact"];

// const NavbarT = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isNavVisible, setIsNavVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const navContainerRef = useRef(null);

//   // Handle scroll to show/hide nav
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY) {
//         setIsNavVisible(false); // Hide nav when scrolling down
//       } else {
//         setIsNavVisible(true); // Show nav when scrolling up
//       }
//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);





  
//   // GSAP animation for nav visibility
//   useEffect(() => {
//     gsap.to(navContainerRef.current, {
//       y: isNavVisible ? 0 : -100,
//       opacity: isNavVisible ? 1 : 0,
//       duration: 0.3,
//     });
//   }, [isNavVisible]);

//   // GSAP animation for sidebar
//   useEffect(() => {
//     gsap.to(".sidebar", {
//       x: isSidebarOpen ? 0 : "-100%",
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   }, [isSidebarOpen]);

//   return (
//     <>
//       {/* Main NavBar */}
//       <div
//         ref={navContainerRef}
//         className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
//       >
//         <header className="absolute top-1/2 w-full -translate-y-1/2">
//           <nav className="flex size-full items-center justify-between p-4">
//             {/* Logo and Product Button */}
//             <div className="flex items-center gap-7">
//               <img src="/img/logo.png" alt="logo" className="w-10" />
//               <Link
//                 id="product-button"
//                 to="/courses"
//                 className="hidden md:flex bg-blue-50 items-center gap-1"
//               >
//                 Courses <TiLocationArrow />
//               </Link>
//             </div>

//             {/* Desktop Navigation Links */}
//             <div className="hidden md:flex h-full items-center">
//               {navItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={`/${item.toLowerCase()}`}
//                   className="nav-hover-btn"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>

//             {/* Hamburger Button for Mobile */}
//             <button
//               className="block md:hidden"
//               onClick={() => setIsSidebarOpen(true)}
//             >
//               <div className="space-y-1">
//                 <span className="block w-6 h-0.5 bg-gray-800"></span>
//                 <span className="block w-6 h-0.5 bg-gray-800"></span>
//                 <span className="block w-6 h-0.5 bg-gray-800"></span>
//               </div>
//             </button>
//           </nav>
//         </header>
//       </div>

//       {/* Sidebar for Mobile */}
//       <div className={clsx("sidebar fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg")}>
//         <div className="flex items-center justify-between px-4 py-4 border-b">
//           <img src="/img/logo.png" alt="logo" className="w-10" />
//           <button
//             className="text-2xl"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             &times;
//           </button>
//         </div>
//         <div className="flex flex-col p-4">
//           {navItems.map((item, index) => (
//             <Link
//               key={index}
//               to={`/${item.toLowerCase()}`}
//               className="py-2 text-lg"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Overlay for Sidebar */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// };

// export default NavbarT;





//new 

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";
import clsx from "clsx";
import gsap from "gsap";

const navItems = ["Courses", "ShyonaPedia", "Mentor", "Contact"];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(false); // To track scroll direction
  const navContainerRef = useRef(null);

  // Handle scroll to show/hide nav and apply styling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsNavVisible(false); // Hide nav when scrolling down
        setIsScrolledUp(false);
      } else {
        setIsNavVisible(true); // Show nav when scrolling up
        setIsScrolledUp(true); // Apply background and radius
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // GSAP animation for nav visibility
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
    });
  }, [isNavVisible]);

  // GSAP animation for sidebar
  useEffect(() => {
    gsap.to(".sidebar", {
      x: isSidebarOpen ? 0 : "-100%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isSidebarOpen]);

  return (
    <>
      {/* Main NavBar */}
      <div
        ref={navContainerRef}
        className={clsx(
          "fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6",
          isScrolledUp && "bg-black rounded-[20px]"
        )}
        style={{ transition: "background-color 0.3s, border-radius 0.3s" }}
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            {/* Logo and Product Button */}
            <div className="flex items-center gap-7">
              <img src="/img/logo.png" alt="logo" className="w-10" />
              {/* <Link
                id="product-button"
                to="/courses"
                className="hidden md:flex text-white items-center gap-1"
              >
                Courses <TiLocationArrow />
              </Link> */}
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex h-full items-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Hamburger Button for Mobile */}
            <button
              className="block md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
              </div>
            </button>
          </nav>
        </header>
      </div>

      {/* Sidebar for Mobile */}
      <div className={clsx("sidebar fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg")}>
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <img src="/img/logo.png" alt="logo" className="w-10" />
          <button
            className="text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col p-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="py-2 text-lg"
              onClick={() => setIsSidebarOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;

