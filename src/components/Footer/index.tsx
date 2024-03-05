const Footer = () => {
  return (
    <footer className="bottom-0">
      <hr className="border-gray-300" />
      <div className="p-3">
        <p className="font-roboto font-light">{new Date().getFullYear()}</p>
        <nav></nav>
      </div>
    </footer>
  );
};

export default Footer;
