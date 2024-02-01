(function () {
    // Get the meta tag with id attribute as "userId"
    const metaTag = document.querySelector('meta[id="userId"]');

    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    // set attributes
    dialog.setAttribute("header-text", "Third Party JavaScript");
    footer.setAttribute("slot", "footer");

    // Check if the meta tag with id "userId" exists
    if (metaTag) {
      // Extract the value from the content attribute
      const userId = metaTag.getAttribute('content');
      
      // Display the userId in the dynamically created div
      content.innerHTML = "User ID: " + userId;
    } else {
      // If meta tag is not found, display "User ID not found"
      content.innerHTML = "User ID not found";
    
    // content styling
    content.style.padding = "1rem";

    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Close";
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);

    // open dialog
    dialog.show();
})();
