
export default function ProductPageBurn(props) {

    console.log("Token ID Clicked: "+props.tokenid)

    function thisNextPage() {
      props.nextpage(props.tokenid);
    }

return (
  <div  >
      
      <div className="product-container burn-container">
          <div className="product-page-top">
              <h1 className="product-page-heading">In your bundle</h1>
              <h5>PRODUCT <span>1</span> OF <span>3</span></h5>
          </div>
          <div className="split-parent">
              <div className="split-child">
                  <img src="coachella-_0001_Esperience_Jesse Fulton_Coachella_G0006424.jpg"  />
              </div>
              <div className="split-child">
                  <h1  className="heading mobile product title-product third">Coachella 2024 VIP Tote Bag</h1>
                  <h5 className='title-subheading'>BURN TO REDEEM</h5>
                  <p className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac felis id interdum.</p>
                  <p className="sub-heading">• Lorem ipsum dolor sit amet<br></br>• Lorem ipsum dolor sit amet<br></br>• Lorem ipsum dolor sit amet<br></br>• Lorem ipsum dolor sit amet</p>
                  <div className="product-form">
                      <button className='cta button big-btn' onClick={thisNextPage}>Next Product</button>         
                  </div>
              </div>
          </div> 
      </div>
 </div>
)
}