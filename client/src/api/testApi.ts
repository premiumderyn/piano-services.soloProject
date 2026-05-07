export async function getServices(){
    const response = await fetch('/api/services');
    if (!response.ok) {
        console.log('Error fetching data:', response.statusText);
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}