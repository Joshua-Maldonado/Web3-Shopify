
async function fetchTokensBurn(address) {
    const result = fetch('/gettokendata/'+address).then(function(response) {
      console.log("RES STATUS: "+response.status )
      return response.json();
      
    }).then(function(jsonData) {
      console.log("RES DATA: "+ jsonData )
      return {
          jsonData
      }
    })
    console.log(result)
    return (result)
  }
  
  export default async function getTokensBurn(address) {
      const tokens = await fetchTokensBurn(address)
      const resData = tokens.jsonData;
      return(resData)
    }