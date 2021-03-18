import react from 'react'
import axios from 'axios'

export default {
    getUsers: async function(){
        try {
            const { data } = await axios.get("https://randomuser.me/api/")

            console.log(`data: `, data)

            return data;

        } catch (error) {
            console.log(error)
            
        }

        }
    }
