
import {  useSendTransaction, useSwitchChain, useChainId } from 'wagmi';
import ProductFormBurn from './ProductFormBurn'
import newABI from '../src/newABI.json';

import { useEffect, useMemo } from 'react'


export default function ProductPage3Burn(props) {  
  const { data: hash, sendTransactionAsync: sendTransaction, isLoading, isSuccess, status } = useSendTransaction() 
  const {switchChainAsync} = useSwitchChain()
  const chainId = useChainId()
  console.log({ chainId})
  useEffect(()=> {
    // DONT FORGET TO SWITCH CHAIN!!!
    // Fuji id: 43113     Main-net id: 43114
    switchChainAsync({chainId: 43114})
  },[

  ])
 

  console.log({hash, isLoading, status, isSuccess })
  
  
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
                    
                </div>
        <ProductFormBurn  sendTransaction={sendTransaction} success={props.success} burning={props.burning} wallet={props.wallet} tokenid={props.tokenid} sizeChart={toggleSizeChart} connector={props.connector} error={props.error} isSuccess={isSuccess} stats={status}></ProductFormBurn> 

         
        
      </div>
   </div>
  )
}