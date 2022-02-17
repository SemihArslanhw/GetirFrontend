import { API } from "..";

export const getProductsByCategoryId = (id) => API.get("/products/getByCategoryId?categoryId="+id)
export const getProductsByCategoryName = (name) => API.get("/products/getByCategoryName?categoryName="+name)