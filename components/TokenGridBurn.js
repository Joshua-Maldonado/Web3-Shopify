
import { useAccount } from 'wagmi'
import getTokensBurn from '../api/getTokensBurn'
import { useAuth } from "@opensea/wallet"



async function GetTokenBurnData(productPage) {
    const { ready, user, login, logout } = useAuth()

  const address = user.addresses[0];
    console.log(address)
  const waitingParent = document.createElement("div");
  waitingParent.classList.add('waiting-parent');
  const waitingText = document.createElement("h2");
  waitingText.innerText = "Reading wallet..."
  waitingParent.appendChild(waitingText);
    
    const data = await getTokensBurn(address)
    console.log("DATA CAME HERE: "+ JSON.stringify(data))
    if(data){
      if(data.length >= 1){
        const list = document.createElement("div");
        list.classList.add('nfts-parent');   
    for (const nft of data) {

            let tokenName = nft;
            console.log("This NFT: ++ " + JSON.stringify(nft));

            let childSuper = document.createElement("div");
            childSuper.classList.add('nft-superchild');
            let child = document.createElement("div");
            child.classList.add('nft-child');
            let imageParent = document.createElement("div");
            imageParent.classList.add('imageParent');
            let image = document.createElement("img");
            let customName = tokenName.id;
            let type = "";
            
             
              image.src = "Charles Reagan Hackleman_Coachella_D004165.jpg";
            
            

            image.classList.add('nft-image');
            imageParent.appendChild(image);
            let title = document.createElement("h3");
            title.classList.add('nft-title');
            
            title.innerText = "TDM GV Token #"+customName;
            
            let buttonParent = document.createElement("div");
            buttonParent.classList.add('buttonParent');
            let button = document.createElement("button");
            button.classList.add('cta');
            button.classList.add('button');
            button.classList.add('nft-button');
             


            button.innerText = "BEGIN BURN"
            button.addEventListener("click", function () {
              console.log("clicked this button"+ nft.tokenId)
              productPage(nft.tokenId)
            });

            

           
            buttonParent.appendChild(button);
            child.appendChild(imageParent);
            child.appendChild(title);
            
            child.appendChild(buttonParent);
            childSuper.appendChild(child)
            list.appendChild(childSuper);

        


      }

          const sectionHeadingParent = document.createElement("div");
          sectionHeadingParent.classList.add('section-heading-parent');
          const headingText = document.createElement("h2");
          headingText.classList.add('heading-text');
          headingText.classList.add('h2');
          headingText.classList.add('section-heading-text');
          headingText.innerText = "Select Token"
          const headingParagraph = document.createElement("p");
          headingParagraph.classList.add('paragraph');
          headingParagraph.classList.add('section-paragraph');
          headingParagraph.innerText = "Select a claimable token below to begin the claim process for your free Coachella x Opensea VIP Merch Bundle."
          sectionHeadingParent.appendChild(headingText);
          sectionHeadingParent.appendChild(headingParagraph);

          
            let parent = document.getElementById("nfts-container");
            if(parent){
                parent.innerHTML = "";
                parent.appendChild(sectionHeadingParent);
                parent.appendChild(list);
            }
           
    }
    else{
      const list = document.createElement("div");
        list.classList.add('nfts-parent');   
        list.classList.add('no-tokens');  
      let noTokens = document.createElement("h1");
      noTokens.classList.add('no-token-text');
            
      noTokens.innerText = "NO TOKENS FOUND";
            let noTp = document.createElement("p");
            noTp.classList.add('no-token-p');
            
            noTp.innerText = "Try connecting a different wallet";

        list.appendChild(noTokens)
        list.appendChild(noTp)

        let parent = document.getElementById("nfts-container");
        if(parent){
          parent.innerHTML = "";
          parent.appendChild(list);
        }
         
    }
    }
}

export default function TokenGridBurn(props) {
    
     GetTokenBurnData(props.productPage)


return (
            <div>
               
            </div>
          )
}