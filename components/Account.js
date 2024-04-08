
import { useEffect, useState } from 'react';
// import ProductPage3Burn from './ProductPage3Burn'
import ProductPage2Burn from './ProductPage2Burn'
import ProductPageBurn from './ProductPageBurn'
import DisplayToBurn  from './DisplayToBurn'
import { useAuth } from "@opensea/wallet"
import { Connector, useConnect } from 'wagmi'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'



import React from 'react'


export default function Account() {
  const [ status, setStatus ] = useState("")
  const [ logged, setLogged ] = useState("")
  const { ready, user, login, logout } = useAuth()

  
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

   
  const { address } = useAccount();
  const { connector } = useAccount()

  console.log(pendingConnector)
 
  const activeAddress = user.addresses[0]
  useEffect(() => {
      if (activeAddress) {
        console.log('new account', activeAddress)
        setLogged(activeAddress)
        home();
      } else if (chain) {
        console.log('new chain', chain)
      }
  
   
    
   

      const loadData = async () => {
      
       console.log("HAPPENED");
      
       
        const homeBtn = document.getElementById("home-button")
        if(homeBtn){
          homeBtn.addEventListener("click", home);
          console.log("HAPPENED");
        }
        
        
  
      };
  
      loadData();
      
  
    return () => { }}, [activeAddress])

  
    function ProductPage1toBurn(tokenid){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      console.log("Page 1 Token ID Clicked: "+tokenid)
      setStatus(
        <div>
          <ProductPageBurn nextpage={ProductPage2toBurn} burning={burning} success={successBurn} tokenid={tokenid} error={errorBurn} wallet={user}></ProductPageBurn>
        </div>
      );
    }
    function ProductPage2toBurn(tokenid){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      console.log("Page 2 Token ID Clicked: "+tokenid)
      setStatus(
        <div>
          <ProductPage2Burn burning={burning} success={successBurn} tokenid={tokenid} error={errorBurn} wallet={user} connector={activeAddress} ></ProductPage2Burn>
        </div>
      );
    }



 
function burning(){
  setStatus(
    <div className="redirect-section">
          <h1 className="heading mobile">Burning Tokens</h1>
          <p className="paragraph">Do not refresh this page!</p>      
      </div>
  );
}

function successBurn () {
  setStatus(
    <div className="redirect-section">
          <h1 className="heading mobile">Your order has been placed!</h1>
          <p className="paragraph">You will receive a order confirmation email shortly.</p>
          <button className='cta button big-btn' onClick={home}>Return Home</button> 
      </div>
  );
}
function errorBurn () {
  setStatus(
    <div className="redirect-section">
          <h1 data-w-id="aa3fb2eb-a63f-4694-1b36-4534ed4f5a82" className="heading mobile">Error!</h1>
          <p className="paragraph">There was an error burning this token please try again</p>
          <button className='cta button big-btn' onClick={home}>Return Home</button> 
      </div>
  );
}

  function errorFunction(){
    setStatus(
      <div className="redirect-section">
            <h1 data-w-id="aa3fb2eb-a63f-4694-1b36-4534ed4f5a82" className="heading mobile">Error!</h1>
            <p className="paragraph">There was an error verifying that you own this token</p>      
        </div>
    );
  }

  

  function home() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setStatus(
      <div>
                 <DisplayToBurn productPage={ProductPage2toBurn} error={errorFunction} account={ user } ></DisplayToBurn> 
        </div>
    );
  }

  

  return (
    <div className='page-section'>
    { status }
    </div>
  )
}

