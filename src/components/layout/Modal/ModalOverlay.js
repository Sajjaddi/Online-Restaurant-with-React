import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const ModalOverlay = (props) => {
  const portalLocation = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalLocation
      )}
      {ReactDOM.createPortal(
        <Modal>{props.children}</Modal>,
        portalLocation
      )}
    </>
  );
};

export default ModalOverlay;
