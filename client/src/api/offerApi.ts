export async function getOffers(){
    const response = await fetch('/api/offers');
    if (!response.ok) {
        console.log('Error fetching data:', response.statusText);
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}