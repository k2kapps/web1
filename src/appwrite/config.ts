import conf from "@/conf/config";
import {Client, Account, ID, Databases} from 'appwrite'
import { use } from "react";

type CreateUserAccount = {
    email: string,
    password: string,
    name: string,
}

type LoginUserAccount = {
    email: string,
    password: string,
}

type listdocs = {
    database_id: string,
    collection_id: string
}

type addlist = {
    generator: string,
    origin: string,
    destination: string,
}


const appwriteClient = new Client()

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient)

const db = new Databases(appwriteClient);

export class AppwriteService {
    //create a new record of user inside appwrite
    async createUserAccount({email, password, name}: CreateUserAccount) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }    
        } catch (error:any) {
            throw error
        }
    }

    async login( { email, password }: LoginUserAccount) {
       try {
            return await account.createEmailSession(email, password)
       } catch (error:any) {
         throw error
       }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data)
        } catch (error) {}

        return false
    }

    async getCurrentUser() {
        try {
            return account.get()
        } catch (error) {
            console.log("getcurrentUser error: " + error)
            
        }

        return null
    }

    async logout() {
        try {
            return await account.deleteSession("current")
        } catch (error) {
            console.log("logout error: " + error)
        }
    }

    //Get records
    async getdata() {
        try {
            const userdata = await db.listDocuments("64b4260506f0b6c083c2","64b816f75cb5c44c53cf")
            console.log(userdata)
            return userdata
        } catch (error:any) {
            throw error
        }
    }

    //Put records
    async putdata({origin,destination,generator}: addlist) {
        console.log("Creating Document.......")
        try {
            const userdata = await db.createDocument("64b4260506f0b6c083c2","64b816f75cb5c44c53cf",ID.unique(),{"generator":generator,"origin":origin,"destination":destination,"user_id":this.getCurrentUser})
            console.log(userdata)
        } catch (error:any) {
            throw error
        }
    }


    
}



const appwriteService = new AppwriteService()

export default appwriteService