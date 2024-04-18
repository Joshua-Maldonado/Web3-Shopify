
//import { ConnectKitButton } from 'connectkit'
//import { useAccount } from 'wagmi'
//import  Account  from '../../components/Account'
import { useAuth } from "@opensea/wallet"
import "@opensea/wallet/style.css"
//import { useEthersSigner } from '../../components/ethers'




function Page() {
  //const { account, isConnected } = useAccount()
  const { ready, user, login, logout } = useAuth()
  
  
  console.log(user)
  //logout()

  
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
                  <img src="Coachella-Trunk.jpg"  /> 
              </div>
              <div className="split-child connect-pg">
                <h2 className='heading-text h2'>Looking to redeem your Coachella Throwback Merchandise Trunk?</h2>
                <p className='paragraph welcome'>Check back here on April 25th at 10am PST when the redemption portal goes live.</p>
                <h2 className='heading-text h2 below'>Redemption for VIP Pass + Oasis Lounge Keepsake has closed.</h2>
                <p className='paragraph welcome'>Please reach out via innovation@coachella.com for any questions or concerns.</p>
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

export default Page



