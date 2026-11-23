
export default function Productlink({url, title, bgcolor}) {
  const a_link = {
    color: "white",
    textDecoration: "none",
    backgroundColor: bgcolor,
    padding: "6px 10px",
    borderRadius: "5px"
  };
  return (
    <>
        <a href={url} style={a_link}>
            {title}
        </a>
    </>
  )
}