export default async function getJewels() {
    const response = await fetch('http://localhost:3000/api/jewels', {
      method: 'GET'
    })
    return response.json();
}
  
 
  