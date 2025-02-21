

const Footer = () => {
    return (
        <footer className="footer dark:bg-black dark:text-white  footer-center bg-[#dedcff] text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    );
};

export default Footer;