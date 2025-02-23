// import axios from "axios";

// const API_URL = 'https://h8-phase2-gc.vercel.app/apis/pub/branded-things/products';

// export const fetchProducts = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         // console.log("Cek data dari api:", response.data);
//         // console.log("Cek data dari api:", response.data.data.query);

        
//         // optional chaining >> .? << digunakan jika data setelah optional chaining tidak valid atau undefined dll maka kondisi if akan false dan lgsg menuju
//         if (response.data?.data?.query) {
//             return response.data.data.query; 
//         } else {
//             console.log('Cek api.js');
//         }
//     } catch (error) {
//         console.log("error di api fetching products:", error);
//     }
// };
