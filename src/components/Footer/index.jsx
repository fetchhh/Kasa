// Styles
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <svg
        className="footer-logo"
        viewBox="0 0 122 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6445 20.0984L5.12785 26.762V36.1125H0V0H5.12785V20.2058L24.5709 0H30.4466L15.1699 16.2292L31.5149 36.1125H25.5324L11.6445 20.0984Z"
          fill="white"
        />
        <path
          d="M68.9054 33.2107L70.9352 29.3415C73.2855 30.9537 76.9177 32.136 80.4431 32.136C85.0368 32.136 86.8529 30.7388 86.8529 28.3742C86.8529 22.248 69.6532 27.5144 69.6532 16.6592C69.6532 11.7152 74.0333 8.49084 80.9772 8.49084C84.5026 8.49084 88.5622 9.45814 90.9124 10.9628L88.7758 14.832C86.3187 13.2199 83.648 12.6825 80.9772 12.6825C76.704 12.6825 74.5674 14.2946 74.5674 16.4442C74.5674 22.8929 91.7671 17.6265 91.7671 28.2668C91.7671 33.2107 87.2802 36.3276 80.0158 36.3276C75.6357 36.4351 71.1489 35.0379 68.9054 33.2107Z"
          fill="white"
        />
        <path
          d="M122 19.5609V36.1125H117.299V32.4582C115.697 34.9302 112.599 36.3274 108.326 36.3274C102.13 36.3274 98.2837 32.9956 98.2837 28.2666C98.2837 23.86 101.061 20.3132 109.18 20.3132H116.979V19.3459C116.979 15.1543 114.522 12.7898 109.715 12.7898C106.51 12.7898 103.198 13.972 101.061 15.6917L99.0315 11.9299C101.809 9.67291 105.869 8.38318 110.249 8.38318C117.834 8.49066 122 12.1449 122 19.5609ZM117.086 27.7292V23.86H109.501C104.587 23.86 103.198 25.7946 103.198 28.0516C103.198 30.7386 105.441 32.4582 109.18 32.4582C112.919 32.5657 115.911 30.9535 117.086 27.7292Z"
          fill="white"
        />
        <path
          d="M53.0946 28.9118V36.2203L56.1927 34.3932V27.0847L53.0946 28.9118Z"
          fill="white"
        />
        <path
          d="M61.641 19.991L48.9282 12.575L41.8774 8.49084L34.9335 20.6358L35.0403 32.0285L47.6462 39.4445L48.9282 38.6921V27.9443L54.5902 17.9489L60.359 21.2807V32.0285L61.641 31.2761V19.991Z"
          fill="white"
        />
      </svg>

      <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
