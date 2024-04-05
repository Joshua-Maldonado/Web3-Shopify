
import {  useSendTransaction, useSwitchChain, useChainId } from 'wagmi';
import ProductFormBurn from './ProductFormBurn'

import { useEffect, useMemo } from 'react'


export default function ProductPage3Burn(props) {  
  const { data: hash, sendTransactionAsync: sendTransaction, isPending } = useSendTransaction() 
  const {switchChainAsync} = useSwitchChain()
  const chainId = useChainId()
  console.log({ chainId})
  useEffect(()=> {
    // DONT FORGET TO SWITCH CHAIN!!!
    switchChainAsync({chainId: 43113})
  },[

  ])
  console.log({hash, isPending})

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
        <ProductFormBurn  sendTransaction={sendTransaction} success={props.success} burning={props.burning} wallet={props.wallet} tokenid={props.tokenid} sizeChart={toggleSizeChart} connector={props.connector} error={props.error}></ProductFormBurn> 

         
        
      </div>
   </div>
  )
}