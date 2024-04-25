export default async function isApproved(address) {
    console.log("ORDER TO SEND: ",address);
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        params:  address ,
        body: JSON.stringify( address )  
    };
   

    const result = await fetch('/isapproved/'+address).then(function(response) {
        console.log("RES APPROVAL: "+response )
        return response.json();
        
      }).then(function(jsonData) {
        console.log("RES APPROVAL DATA: "+ JSON.stringify(jsonData) )
        return {
            jsonData
        }
      })
      return (result)
  }