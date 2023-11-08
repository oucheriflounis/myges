const getElementForm = getElementType == “id” ? “getElementById” : “getElementByName”;
const priceTagValue = eval(“document.”+getElementForm+”(“+elementId+”).value”)