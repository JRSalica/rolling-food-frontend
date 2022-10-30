import axios from 'axios';

const useDelete = async (URL) => {
  const { data: { deletedProduct } } = await axios.delete(URL);
  return deletedProduct;
};

export default useDelete;
