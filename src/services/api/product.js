import axios from 'axios';
import endPoints from '../../services/api/index';


const addProduct = async (body) =>{
    const config = {
        headers:{
            accept:'*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.products.addProducts, body, config);
    return response.data;
};

const deleteProduct = async (id) => {
const response = await axios.delete(endPoints.products.deleteProduct(id));
return response.data;
};

const updateProducts = async (id, body) => {
    const config = {
        headers:{
            accept:'*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.put(endPoints.products.updateProducts(id), body, config);
    return response.data;
};
const uploadImage = async (image) => {
    const body = {
      file: image,
    };
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: '*/*',
      },
    };
    const response  = await axios.post(endPoints.files.addImage, body, config);
    return response.data;
  };


export { addProduct, deleteProduct, updateProducts, uploadImage};