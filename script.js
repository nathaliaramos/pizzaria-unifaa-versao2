function showPizzaDetails(pizzaName) {
    console.log("Detalhes da pizza: " + pizzaName);
  }
  
  function addToCart(pizzaName) {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerText = pizzaName;
    cartItemsDiv.appendChild(cartItem);
    document.getElementById('cart-section').style.display = 'flex';
  }
  
  function checkout() {
    // Implemente a lógica para finalizar o pedido se necessário
    alert("Pedido finalizado! Obrigado por escolher a Pizzaria UNIFAA.");
    // Limpa o carrinho após o checkout
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('cart-section').style.display = 'none';
  }