//rfc , rfce , rafce

import ProductHeader from "./../components/ProductHeader"
import Footer from "./../components/Footer"

export default function Computer() {
  return (
    <>
    <a href="/product" style={{textDecoration:"none"}}>
      <ProductHeader />
      </a>
        <h2 style={{textAlign:"center", color:"#3142de"}}>Computer Page</h2>
        <p style={{textAlign:"center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ea officia ad doloremque dicta blanditiis accusantium nostrum cumque minima praesentium doloribus molestiae maiores ab tempore quam ipsum, dolorem, autem perferendis?
        </p>
      <Footer />
    </>
  )
}