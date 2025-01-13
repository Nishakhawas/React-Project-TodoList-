import axios from "axios"
export function getApi(){
    return new Promise((resolve,reject)=>{
        axios.get(`https://api.escuelajs.co/api/v1/products`)
        .then((res)=>{
            resolve(res.data);
        })
        .catch((err)=>{
            reject(err);

        })

    })
}
export function getCategories(){
    return new Promise((resolve,reject)=>{
        axios.get(`https://api.escuelajs.co/api/v1/categories`)
        .then((res)=>{
            resolve(res.data);
        })
        .catch((err)=>{
            reject(err);

        })

    })
}
