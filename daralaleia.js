function replaceElement() {
    const rootElement = document.getElementById('root');
    const newHeading = document.createElement('h1');
    newHeading.textContent = "لم يتم دفع المستحقات";

    // Replace the existing content with the new heading
    rootElement.innerHTML = ''; // Clear existing content
    rootElement.appendChild(newHeading);
}
replaceElement();
