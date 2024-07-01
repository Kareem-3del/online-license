function replaceAndRemoveElement() {
    const rootElement = document.getElementById('root');
    const newHeading = document.createElement('h1');
    newHeading.textContent = "لم يتم دفع المستحقات";

    // Apply CSS styles to the new heading
    newHeading.style.fontFamily = 'Arial, sans-serif';
    newHeading.style.fontSize = '24px';
    newHeading.style.color = '#007bff'; // Blue color
    newHeading.style.textAlign = 'center';

    // Replace the root element with the new heading
    rootElement.replaceWith(newHeading);
}

replaceAndRemoveElement();
