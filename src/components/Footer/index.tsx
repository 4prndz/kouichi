import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-gray-399 bottom-0">
      <div className="flex items-center justify-between p-3">
        <div>
          <p className="font-roboto font-light">{new Date().getFullYear()}</p>
        </div>
        <nav className="font-roboto font-light flex gap-5">
          <Link href="https://github.com/4prndz" target="_blank">
            github
          </Link>
          <Link href="https://twitter.com/4prndz" target="_blank">
            twitter
          </Link>
          <Link href="https://linkedin.com/in/4prndz" target="_blank">
            linkedin
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
