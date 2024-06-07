import ReactDOM from 'react-dom';

export default function ScreenPortal({ children }) {
  const modalElement = document.querySelector('#screen');

  return modalElement ? ReactDOM.createPortal(children, modalElement) : null;
}
