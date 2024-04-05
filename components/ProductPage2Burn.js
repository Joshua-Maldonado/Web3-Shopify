
import ProductFormBurn from './ProductFormBurn'


export default function ProductPage3Burn(props) {
    function toggleSizeChart() {
        var target = document.getElementById("size-chart-target");
        //console.log("Target: "+target.classList.contains("hidden"));
        if(target.classList.contains("hidden")){
          target.classList.remove("hidden");
        }
     }

     function closeSizeChart() {
        var target = document.getElementById("size-chart-target");
        //console.log("Target: "+target.classList.contains("hidden"));
        if(target.classList.contains("hidden")){
          
        }
        else{
          target.classList.add("hidden");
        }
      }

      function runError() {
        props.error()
      }
      
      console.log("Token ID Clicked: "+props.tokenid)
      console.log(props.signer)
      

  return (
    <div  className="verified-parent">
     <div className="redirect-section">
     <div className="product-page-top">
                    <h1 className="product-page-heading">In your bundle</h1>
                    <h5>PRODUCT <span>3</span> OF <span>3</span></h5>
                </div>
        <ProductFormBurn success={props.success} burning={props.burning} wallet={props.wallet} tokenid={props.tokenid} sizeChart={toggleSizeChart} connector={props.connector} error={props.error}></ProductFormBurn> 

         
        
      </div>
   </div>
  )
}