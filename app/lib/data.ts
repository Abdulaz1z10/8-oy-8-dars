import { IProductsPromise, IUserPromise } from "../types/users"
import {Product, User} from "./models"
import {connectToDB} from "./utils"


export const fetchUsers = async(q:string,page: number):Promise<IUserPromise | undefined>=>{
    const regex = new RegExp(q, "i")
    const ITEM_PER_PAGE = 2
    try{
        connectToDB()
        const count = await User.find({username: {$regex: regex}}).countDocuments()
        const users = await User.find({username: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))
        return {count, users}
    }catch(error){
        console.log(error)
    }
}

export const fetchProducts = async(q:string, page:number):Promise<IProductsPromise | undefined>=>{
    const regex = new RegExp(q, "i")
    const ITEM_PER_PAGE = 2
    try{
        connectToDB()
        const count = await Product.find({title: {$regex: regex}}).countDocuments()
        const products = await Product.find({title: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))
        return {count, products}
    }catch(error){
        console.log(error)
    }
}