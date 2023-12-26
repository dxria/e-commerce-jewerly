export default async function getAddresses() {
    const response = await fetch('http://localhost:3000/addresses', {
      method: 'GET'
    })
    const addresses = await response.json()
    return addresses;
}
  
 
  