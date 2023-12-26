export default async function getJewels() {
    const response = await fetch('http://localhost:3000/jewels', {
      method: 'GET'
    })
    return response.json();
}
  
 
  