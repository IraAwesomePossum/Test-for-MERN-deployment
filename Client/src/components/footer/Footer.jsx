import "./footer.css";

export default function Footer() {
  return (
    <div className="wrapper">
      <div className="footer">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Green Kitchen Stories </span>All rights reserved
        </h5>
      </div>
    </div>
  );
}
