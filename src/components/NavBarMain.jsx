
export default function NavBarMain() {
  const a_Style = {
    color: "white",
    textDecoration: "none"
  };
  const div_Style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b238d",
    padding: "15px",
    marginBottom: "50px",
    gap: "5px"
  };
  return (
    <>
    <div style={div_Style}>
      <a href="/" style={a_Style}>Home</a>
      <a href="/about" style={a_Style}>About</a>
      <a href="/contact" style={a_Style}>Contact</a>
      <a href="/product" style={a_Style}>Product</a>
    </div>
    </>
  )
}