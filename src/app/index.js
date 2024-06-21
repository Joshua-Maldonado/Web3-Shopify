
//import { ConnectKitButton } from 'connectkit'
//import { useAccount } from 'wagmi'
import  Account  from '../../components/Account'
import { useAccount, useConnectFlow, useDisconnect } from "@opensea/wallet"
import "@opensea/wallet/style.css"
//import { useEthersSigner } from '../../components/ethers'




function Page() {
  //const { account, isConnected } = useAccount()
  const { ready, address } = useAccount()
  const login = useConnectFlow()
  const logout = useDisconnect()
  

  //logout()

  if (!ready) {
       return <><div className='body-section'>
                    <div className='page-header'>
                        <div className='header-content'>
                        <div className='logo-content'>
                            <img src="coachella-logo.png" className='logo-img'/> 
                        </div>
                        </div>
                    </div>
                    <div className='main-content'>
                        <div className='index-section'>
                        <div className="product-container burn-container">
                            <div className="split-parent">
                                
                                
                                <h2 className='loading-text h2'>Loading...</h2>
                                
                            </div> 
                        </div>
                        
                        </div>
                    </div>
                    <div className='footer'>
                        <p className='footer-text'>Web3 & verification by Top Drawer Merch</p>
                    </div>
                    </div></>
     }
  if (!address) {
    return <>
    <div className='body-section'>
      <div className='page-header'>
        <div className='header-content'>
          <div className='logo-content'>
            <img src="coachella-logo.png" className='logo-img'/> 
          </div>
        </div>
      </div>
      <div className='main-content'>
        <div className='index-section'>
        <div className="product-container burn-container">
            <div className="split-parent">
                <div className="split-child img-split">
                    <img src="65c27bea440ff1e38cec8388_Coachella2019_W1_300118-p-1600.jpg"  /> 
                </div>
                <div className="split-child connect-pg">
                  <h2 className='heading-text h2'>Coachella Throwback Merchandise Trunk</h2>
                  <p className='paragraph welcome'>Hold a Coachella Throwback Merchandise Trunk NFT? Connect your wallet below to begin redemption.</p>
                  <p className='paragraph welcome'>Note: Please ensure that the wallet which contains your Coachella Throwback Merchandise token has enough AVAX to complete your burn.</p>
                  <p className='paragraph welcome last'>The last day to redeem is June 28th.</p>
                  <button className="cta button login-button" onClick={login}>Login</button>
                </div>
            </div> 
        </div>
          
        </div>
      </div>
      <div className='footer'>
        <p className='footer-text'>Web3 & verification by Top Drawer Merch</p>
      </div>
    </div>
  </>
  
  
  }
  return <>
       <div className='body-section'>
      <div className='page-header'>
        <div className='header-content'>
          <div id="home-button" className='home-button-parent'>
            <div className='png-wrapper'>
              <img src="back1.png" className='home-btn'/>
            </div>
            
          </div>
          <div className='logo-content'>
            <img src="coachella-logo.png" className='logo-img'/>
          </div>
          <div className='wallet-button connected'><button className="cta button" onClick={logout}>Logout</button></div>
        </div>
      </div>
      <div className='main-content'>
         <Account address={ address } connected={ address }></Account> 
      </div>
      <div className='footer'>
        <p className='footer-text'>Web3 & verification by Top Drawer Merch</p>
      </div>
    </div>
    </>
  
    

}

export default Page



