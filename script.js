/* Show the current page URL and its last-modified date in the footer. */
window.onload = function () {
  var locationElement = document.getElementById("page-location");
  var modifiedElement = document.getElementById("last-modified");
  if (locationElement) {
    locationElement.appendChild(document.createTextNode("Page location: " + window.location.href));
  }
  if (modifiedElement) {
    var modifiedDate = new Date(document.lastModified);
    modifiedElement.appendChild(document.createTextNode("Last modified: " + modifiedDate.toLocaleString()));
  }
};
