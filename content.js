// Select the parent div (replace with your specific selector)
const parentDiv = document.getElementsByClassName('message-date-group')?.[0];

// Create a MutationObserver to detect changes
const observer = new MutationObserver((mutationsList, observer) => {
  // Loop through the mutations that occurred
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // When child elements are added or removed
      console.log("mutation",mutation)
      console.log('A child node has been added or removed');
    }
    if (mutation.type === 'attributes') {
      // When an attribute of the parent div changes
      console.log('An attribute was changed');
    }
    if (mutation.type === 'subtree') {
      // When changes occur to the subtree (children of children, etc.)
      console.log('Subtree of the parent div was modified');
    }
  }
});

// Specify what to observe on the parent div
const config = {
  childList: true,   // Observe added or removed child nodes
  subtree: true,     // Observe changes to the entire subtree (not just direct children)
  attributes: true,  // Observe changes to attributes
  characterData: true,  // Observe changes to text content
};

// Start observing the parent div
observer.observe(parentDiv, config);

// To stop observing (when needed)
function stopObserving() {
  observer.disconnect();
}
