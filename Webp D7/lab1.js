function addNewElement(p1) {
    let parentTag = p1.nextElementSibling;
    let existingValue = parentTag.innerHTML;
  
    let message = document.querySelector("#messageId").value;
  
    let newValue = `<div
                        style="
                          font-size: 28px;
                          margin-top: 8px;
                          display: flex;
                          text-align: center;
                          justify-content: space-between;
                        "
                      >
                        <div>${message}</div>
                        <input type="button" value="Delete" onclick="deleteTheMessage(this)" />
                      </div>`;
  
    parentTag.innerHTML = newValue + existingValue;
  
    p1.previousElementSibling.value = "";
  }
  
  function deleteTheMessage(p1) {
    p1.parentElement.remove();
  }