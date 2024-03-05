import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0">
      <hr className="border-gray-300" />
      <div className="flex items-center justify-between p-3">
        <div>
          <p className="font-roboto font-light">{new Date().getFullYear()}</p>
        </div>
        <nav className="font-roboto font-light flex gap-5">
          <p>
            <Link href="https://github.com/4prndz" target="_blank">
              github
            </Link>
          </p>
          <p>
            <Link href="https://twitter.com/4prndz" target="_blank">
              twitter
            </Link>
          </p>
          <p>
            <Link href="https://linkedin.com/in/4prndz" target="_blank">
              linkedin
            </Link>
          </p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
