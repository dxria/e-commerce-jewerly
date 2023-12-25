export default async function getAddresses() {
    const response = await fetch('http://localhost:3000/api/addresses', {
      method: 'GET'
    })
    return response.json();
}
  
 
  