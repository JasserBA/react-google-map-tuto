import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export default function Overlay() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* Open Button */}
      <button className="btn btn-primary m-3" onClick={() => setIsOpen(true)}>
        ☰ Open Sidebar
      </button>

      {/* Bootstrap Offcanvas Sidebar */}
      <Offcanvas
        show={isOpen}
        onHide={() => setIsOpen(false)}
        backdrop={true}
        className="bg-light text-danger"
      >
        <Offcanvas.Header closeButton closeLabel="sqsdqsdqsdqsdqsd">
          <Offcanvas.Title>Sidebar Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-white d-block py-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white d-block py-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white d-block py-2">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white d-block py-2">
                Contact
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
