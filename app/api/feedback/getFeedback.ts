export default async function getFeedback() {
    const response = await fetch('http://localhost:3000/feedback', {
      method: 'GET'
    })
    return response.json();
}
  
 
  