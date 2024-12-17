//////////////////////////// with Responsivnes /////////////////////////////////////

const Header = () => {
    return (
      <div className="flex flex-wrap justify-between items-center px-4 py-2 shadow-md bg-gray-300 text-black">
        {/* Logo */}
        <div className="text-lg font-bold">LOGO</div>
  
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4">
          <div className="cursor-pointer hover:text-blue-500">Home</div>
          <div className="cursor-pointer hover:text-blue-500">About</div>
          <div className="cursor-pointer hover:text-blue-500">Services</div>
          <div className="cursor-pointer hover:text-blue-500">Contact Us</div>
        </div>
      </div>
    );
  };
  
  export default Header;
  