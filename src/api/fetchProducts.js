const fetchProducts = async (query) => {
  try {
    const response = await fetch("http://localhost:5000/produtos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return []; 
  }
};
  
export default fetchProducts;
