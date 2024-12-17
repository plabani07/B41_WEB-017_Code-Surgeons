const products = [
    { name: 'Phone', price: 800, category: 'electronics' },
    { name: 'Laptop', price: 1500, category: 'electronics' },
    { name: 'Tablet', price: 400, category: 'electronics' },
    { name: 'Chair', price: 200, category: 'furniture' },
    { name: 'Sofa', price: 700, category: 'furniture' },
    { name: 'Desk', price: 300, category: 'furniture' },
    { name: 'Monitor', price: 300, category: 'electronics' },
    { name: 'Mouse', price: 50, category: 'electronics' },
    { name: 'Keyboard', price: 100, category: 'electronics' },
    { name: 'Bed', price: 1000, category: 'furniture' },
    { name: 'Wardrobe', price: 1200, category: 'furniture' },
    { name: 'Dining Table', price: 900, category: 'furniture' },
    { name: 'Headphones', price: 150, category: 'electronics' },
    { name: 'Bookshelf', price: 400, category: 'furniture' },
    { name: 'Gaming Console', price: 500, category: 'electronics' },
    { name: 'Refrigerator', price: 1800, category: 'appliances' },
    { name: 'Washing Machine', price: 1500, category: 'appliances' },
    { name: 'Microwave', price: 300, category: 'appliances' },
    { name: 'Air Conditioner', price: 2500, category: 'appliances' },
    { name: 'Blender', price: 100, category: 'appliances' }
  ];
  
  let currentPage = 1;
  const itemsPerPage = 3;
  
  const categorySelect = document.getElementById('category-select');
  const sortSelect = document.getElementById('sort-select');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const pageNumber = document.getElementById('page-number');
  const productList = document.getElementById('product-list');
  
  // Function to filter products by category
  function filterProducts() {
    const selectedCategory = categorySelect.value;
    return products.filter(product => 
      selectedCategory === '' || product.category === selectedCategory
    );
  }
  
  // Function to sort products
  function sortProducts(filteredProducts) {
    const sortValue = sortSelect.value;
    if (sortValue === 'price-asc') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name-asc') {
      return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'name-desc') {
      return filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return filteredProducts;
  }
  
  // Function to paginate and display the products
  function displayProducts() {
    const filteredProducts = filterProducts();
    const sortedProducts = sortProducts(filteredProducts);
  
    // Get the products for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const pageProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);
  
    // Render the products
    productList.innerHTML = '';
    pageProducts.forEach(product => {
      const listItem = document.createElement('li');
      listItem.textContent = `${product.name} - $${product.price}`;
      productList.appendChild(listItem);
    });
  
    // Update the pagination buttons
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }
  
  // Event listeners for filtering, sorting, and pagination
  categorySelect.addEventListener('change', () => {
    currentPage = 1;  // Reset to the first page
    displayProducts();
  });
  
  sortSelect.addEventListener('change', () => {
    currentPage = 1;  // Reset to the first page
    displayProducts();
  });
  
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts();
    }
  });
  
  nextButton.addEventListener('click', () => {
    const filteredProducts = filterProducts();
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts();
    }
  });
  
  // Initial render
  displayProducts();
  