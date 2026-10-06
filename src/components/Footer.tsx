import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-100 text-base-content border-t border-base-300 mt-6 p-5">
  <aside>
    <p>Copyright © {new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })} - All right reserved by Bangla News 24</p>
  </aside>
</footer>
    );
};

export default Footer;