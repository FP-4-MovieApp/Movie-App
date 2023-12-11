const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; 2023 MovieApp. All rights reserved.</p>
        <div className="flex justify-center mt-2">
          <a href="#" className="mx-2 hover:text-gray-400">
            Terms of Service
          </a>
          <span>|</span>
          <a href="#" className="mx-2 hover:text-gray-400">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="mx-2 hover:text-gray-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
