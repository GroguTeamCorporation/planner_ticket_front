import type { ILoggedInUser } from "@/models/ILoggedInUser"
import { defineStore } from "pinia"
import { reactive } from "vue"



export const useAuthStore = defineStore('auth', () => {

    const username: ILoggedInUser= reactive({
        username: '',
        role: '',
        isAuthenticated: false
    })
    
    return { username }
})