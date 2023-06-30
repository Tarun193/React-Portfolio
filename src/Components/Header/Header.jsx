const Header = () => {
  return (
    <header>
      <section className="max-w-7xl m-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="./src/assets/images/programmer.svg"
            alt="progarmmer svg"
            width={60}
          />
          <div className="text-lg sm:text-xl">
            <span className="block">Tarun</span>
            <span className="block text-teal-200">Chawla</span>
          </div>
        </div>
        <nav>
          <ul className="flex gap-8 text-md sm:text-lg">
            <li className="hover:text-teal-200">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-teal-200">
              <a href="#">projects</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
