const Footer = () => {
  return (
    <footer className="text-white flex items-center p-4 absolute inset-x-0 bottom-0 justify-center bg-zinc-800/60 border-t border-zinc-600">
      © {new Date().getFullYear()} Weather App
    </footer>
  );
};

export default Footer;
