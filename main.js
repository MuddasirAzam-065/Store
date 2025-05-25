function logout() 
{
      window.location.href = "index.html"; 
    }
function details() 
    {
      window.location.href = "details.html";
    }

    function searchProducts() 
    {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.getElementsByClassName("product-card");
  for (let i = 0; i < products.length; i++) {
    let productName = products[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
  
    if (productName.includes(input)) 
    {
      products[i].style.display = "";
    } 
    else 
    {
      products[i].style.display = "none";
    }
  }
}



