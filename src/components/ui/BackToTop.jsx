import { FaArrowUp } from 'react-icons/fa';
import { smoothScroll } from '../../utils/scroll';

const BackToTop = ({ visible }) => (
  <button
    className={`fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer ${
      visible ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
    onClick={() => smoothScroll('#home')}
    aria-label="Back to top"
  >
    <FaArrowUp />
  </button>
);

export default BackToTop;