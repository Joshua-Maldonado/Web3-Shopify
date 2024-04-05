'use client'

//import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useAuth } from "@opensea/wallet"
import "@opensea/wallet/style.css"
// import  Account  from '../components/Account'
import Page from './index'
//const { ready, user, login, logout } = useAuth()

function App() {
  //const account = useAccount()
  //const { connectors, connect, status, error } = useConnect()
  //const { disconnect } = useDisconnect()

  //console.log(user)
  return <><Page></Page></>
//   if (!ready) {
//     return <><div><h1>MOUNTING</h1></div></>
//   }
//   if (!user) {
//     return <>
//     <div className='body-section'>
//       <div className='page-header'>
//         <div className='header-content'>
//           <div className='logo-content'>
//             <img src="coachella-logo.png" className='logo-img'/> 
//           </div>
//         </div>
//       </div>
//       <div className='main-content'>
//         <div className='index-section'>
//         <div className="product-container burn-container">
//             <div className="split-parent">
//                 <div className="split-child img-split">
//                     <img src="65c27bea440ff1e38cec8388_Coachella2019_W1_300118-p-1600.jpg"  /> 
//                 </div>
//                 <div className="split-child connect-pg">
//                   <h2 className='heading-text h2'>Connect Wallet</h2>
//                   <p className='paragraph welcome'>Only owners of a Top Drawer Merch Club NFT are allowed to access the Top Drawer Shop. Please connect your wallet now to verify NFT owenership.</p>
//                   <button className="cta button" onClick={login}>Login</button>
//                 </div>
//             </div> 
//         </div>
          
//          </div>
//        </div>
//        <div className='footer'>
//          <p className='footer-text'>Web3 & verification by Top Drawer Merch</p>
//        </div>
//      </div>
//    </>
//   }
//   return (
//     <>
//        <div className='body-section'>
//       <div className='page-header'>
//         <div className='header-content'>
//           <div id="home-button" className='home-button-parent'>
//             <div className='png-wrapper'>
//               <img src="back1.png" className='home-btn'/>
//             </div>
            
//           </div>
//           <div className='logo-content'>
//             <img src="coachella-logo.png" className='logo-img'/>
//           </div>
//           <div className='wallet-button connected'><button className="cta button" onClick={logout}>Logout Up</button></div>
//         </div>
//       </div>
//       <div className='main-content'>
//         {/* <Account address={ user.addresses[0] } connected={ user } ></Account> */}
//       </div>
//       <div className='footer'>
//         <p className='footer-text'>Web3 & verification by Top Drawer Merch</p>
//       </div>
//     </div>
//     </>
//   )
 }

export default App
