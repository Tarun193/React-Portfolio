import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import programmer from "../../assets/images/programmer.svg";
import { handleExternalLink } from "../../utils/externalLinks";

const Header = ({
  skillRef,
  projectRef,
  expRef,
  eduRef,
  contactRef,
  handleScroll,
}) => {
  const [open, setOpen] = useState(false);
  const blogLink = "https://blog.tarunchawla.tech";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gray-950/95 backdrop-blur">
      <section className="max-w-7xl m-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={programmer} alt="Developer avatar" width={52} />
            <div className="text-lg font-bold leading-tight sm:text-xl">
              <span className="block">Tarun</span>
              <span className="block text-teal-200">Chawla</span>
            </div>
          </div>
          <nav>
            <ul className="hidden gap-2 text-md md:flex sm:text-lg">
              <li className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-teal-200">
                <a
                  href={blogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => handleExternalLink(event, blogLink)}
                >
                  Blog
                </a>
              </li>
              <li
                onClick={() => {
                  handleScroll(skillRef);
                }}
                className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-teal-200 hover:cursor-pointer"
              >
                Skills
              </li>
              <li
                onClick={() => {
                  handleScroll(projectRef);
                }}
                className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-teal-200 hover:cursor-pointer"
              >
                Projects
              </li>
              <li
                onClick={() => {
                  handleScroll(expRef);
                }}
                className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-teal-200 hover:cursor-pointer"
              >
                Experience
              </li>
              <li
                onClick={() => {
                  handleScroll(eduRef);
                }}
                className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-teal-200 hover:cursor-pointer"
              >
                Education
              </li>
              <li
                onClick={() => {
                  handleScroll(contactRef);
                }}
                className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-teal-200 hover:cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className={`rounded-md border border-white/10 p-2 text-3xl ${
              open ? "hidden" : "block"
            }  md:hidden text-teal-200 focus:outline-none`}
          >
            <GiHamburgerMenu size={35} />
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <nav
              className={`px-4 ${
                open ? "block" : "hidden"
              } md:hidden h-[100vh] opacity-100 absolute w-full top-0 left-0 z-30 bg-black/90`}
              aria-label="secandary"
            >
              <motion.ul
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  staggerChildren: 0.2,
                  delayChildren: 0.1,
                }}
                exit={{ scale: 0, opacity: 0 }}
                className="text-2xl flex-col flex items-center py-4 pt-12 relative h-[90vh]"
              >
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="absolute top-2 right-[-1rem]"
                  onClick={() => setOpen(false)}
                >
                  <AiOutlineClose className="text-teal-200" size={35} />
                </button>
                <li className="hover:text-teal-200 flex-1  grid place-content-center">
                  <a
                    href={blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      setOpen(false);
                      handleExternalLink(event, blogLink);
                    }}
                  >
                    Blog
                  </a>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    handleScroll(skillRef);
                  }}
                  className="hover:text-teal-200 flex-1  grid place-content-center"
                >
                  Skills
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    handleScroll(projectRef);
                  }}
                  className="hover:text-teal-200 flex-1  grid place-content-center"
                >
                  Projects
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    handleScroll(expRef);
                  }}
                  className="hover:text-teal-200 flex-1  grid place-content-center"
                >
                  Experience
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    handleScroll(eduRef);
                  }}
                  className="hover:text-teal-200 flex-1  grid place-content-center"
                >
                  Education
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    handleScroll(contactRef);
                  }}
                  className="hover:text-teal-200 flex-1  grid place-content-center"
                >
                  Contact
                </li>
              </motion.ul>
            </nav>
          )}
        </AnimatePresence>
      </section>
    </header>
  );
};

export default Header;
