
import getTokensBurn from '../api/getTokensBurn'
import { useAccount, useConnectFlow, useDisconnect } from "@opensea/wallet"



async function GetTokenBurnData(productPage) {
    const { address } = useAccount()

  
    console.log(address)
  const waitingParent = document.createElement("div");
  waitingParent.classList.add('waiting-parent');
  const waitingText = document.createElement("h2");
  waitingText.innerText = "Reading wallet..."
  waitingParent.appendChild(waitingText);
    
  const redeemedList = document.createElement("div");
  redeemedList.classList.add('nfts-parent'); 
  redeemedList.classList.add('redeemed-parent'); 
    const data = await getTokensBurn(address)
    console.log("DATA CAME HERE: "+ JSON.stringify(data))
    if(data.redeemedData){
        if(data.redeemedData.length >= 1){
            
            for (const redeemedNft of data.redeemedData) {
                let tokenName = redeemedNft;
                console.log("This NFT: ++ " + JSON.stringify(redeemedNft));

                let redeemedChildSuper = document.createElement("div");
                redeemedChildSuper.classList.add('nft-superchild');
                let Redeemedchild = document.createElement("div");
                Redeemedchild.classList.add('nft-child');
                let imageParent = document.createElement("div");
                imageParent.classList.add('imageParent');
                let image = document.createElement("img");
                let customName = tokenName.id;
                let type = "";
                
                if(customName==1){
                    image.src = "Coachella_W1_Still-Redeemed.png";
                }
                else if(customName==2){
                    image.src = "Coachella_W2_Still-Redeemed.png";
                }
                else if(customName==3){
                    image.src = "Box_Redeemed.jpg";
                }
                
                image.classList.add('nft-image');
                imageParent.appendChild(image);
                let pretitle = document.createElement("h2");
                pretitle.classList.add('nft-pre-title');
                
                pretitle.innerText = "REDEEMED";
                let title = document.createElement("h3");
                title.classList.add('nft-title');
                title.classList.add('redeemed-title');
                if(customName==3){
                    title.innerText = "Coachella Throwback Merchandise Trunk";
                }
                else{
                    title.innerText = "Coachella 2024 Weekend "+customName+" VIP";
                }
                let quantity = document.createElement("p");
                quantity.classList.add('nft-quantity');
                quantity.innerText = "Quantity Owned: "+redeemedNft.qualtity;

                
                Redeemedchild.appendChild(imageParent);
                Redeemedchild.appendChild(pretitle);
                Redeemedchild.appendChild(title);
                Redeemedchild.appendChild(quantity);
                
                redeemedChildSuper.appendChild(Redeemedchild)
                redeemedList.appendChild(redeemedChildSuper);
        }
        }
        

    }



    if(data.tokenData){
      if(data.tokenData[0].length >= 1){
        const list = document.createElement("div");
        list.classList.add('nfts-parent');   
        console.log("This NFT: ---- " + JSON.stringify(data.tokenData));
        for (const nft of data.tokenData[0]) {
                let tokenName = nft;
                console.log("This NFT: ++++ " + JSON.stringify(nft));

                let childSuper = document.createElement("div");
                childSuper.classList.add('nft-superchild');
                let child = document.createElement("div");
                child.classList.add('nft-child');
                let imageParent = document.createElement("div");
                imageParent.classList.add('imageParent');
                let image = document.createElement("img");
                let customName = tokenName.id;
                let type = "";
                
                
                    image.src = "Coachella-Trunk.jpg";
                
                
                image.classList.add('nft-image');
                imageParent.appendChild(image);
                let title = document.createElement("h3");
                title.classList.add('nft-title');
                
                title.innerText = "Coachella Throwback Merchandise Trunk #"+nft.tokenId;
                
                let quantity = document.createElement("p");
                quantity.classList.add('nft-quantity');
                quantity.innerText = "Token ID: "+nft.tokenId;

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
                child.appendChild(quantity);
                
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
          headingText.innerText = "Select Trunk Token"
          const headingParagraph = document.createElement("p");
          headingParagraph.classList.add('paragraph');
          headingParagraph.classList.add('section-paragraph');
          headingParagraph.innerText = "Select a claimable trunk token below to begin the claim process for your Coachella Throwback Merchandise Trunk."
          sectionHeadingParent.appendChild(headingText);
          sectionHeadingParent.appendChild(headingParagraph);

          
          
            let parent = document.getElementById("nfts-container");
            if(parent){
                parent.innerHTML = "";
                parent.appendChild(sectionHeadingParent);
                parent.appendChild(list);
                if(data.redeemedData){
                    if(data.redeemedData.length >= 1){
                        const redeemedHeadingText = document.createElement("h2");
                        redeemedHeadingText.classList.add('heading-text');
                        redeemedHeadingText.classList.add('h2');
                        redeemedHeadingText.classList.add('section-heading-text');
                        redeemedHeadingText.classList.add('redeemed-heading');
                        redeemedHeadingText.innerText = "Redeemed Token"
                        const redeemedHeadingParagraph = document.createElement("p");
                        redeemedHeadingParagraph.classList.add('paragraph');
                        redeemedHeadingParagraph.classList.add('section-paragraph');
                        redeemedHeadingParagraph.classList.add('redeemed-text');
                        redeemedHeadingParagraph.innerText = "The tokens below have already been claimed. Check your email for an order confirmation email."
                        parent.appendChild(redeemedHeadingText);
                        parent.appendChild(redeemedHeadingParagraph);
                        parent.appendChild(redeemedList);
                        
                    }
        
                  }
            }

        
           
    }
    else{
      const list = document.createElement("div");
        list.classList.add('nfts-parent');   
        list.classList.add('no-tokens');  
      let noTokens = document.createElement("h1");
      noTokens.classList.add('no-token-text');
            
      noTokens.innerText = "NO CLAIMABLE TOKENS FOUND";
            let noTp = document.createElement("p");
            noTp.classList.add('no-token-p');
            
            noTp.innerText = "Try connecting a different wallet";

        list.appendChild(noTokens)
        list.appendChild(noTp)

        if(data.redeemedData){
            if(data.redeemedData.length >= 1){
                const redeemedHeadingText = document.createElement("h2");
                redeemedHeadingText.classList.add('heading-text');
                redeemedHeadingText.classList.add('h2');
                redeemedHeadingText.classList.add('section-heading-text');
                redeemedHeadingText.classList.add('redeemed-heading');
                redeemedHeadingText.innerText = "Redeemed Token"
                const redeemedHeadingParagraph = document.createElement("p");
                redeemedHeadingParagraph.classList.add('paragraph');
                redeemedHeadingParagraph.classList.add('section-paragraph');
                redeemedHeadingParagraph.classList.add('redeemed-text');
                redeemedHeadingParagraph.innerText = "The tokens below have already been claimed. Check your email for an order confirmation email."
                list.appendChild(redeemedHeadingText);
                list.appendChild(redeemedHeadingParagraph);
                list.appendChild(redeemedList);
                
            }

          }

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