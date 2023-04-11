import { UserConfigExport, defineConfig } from "vite";


// const config: UserConfigExport = {
//     server: {
//         port: 8080
//     }
// }

export default defineConfig(()=>{
    const port = 8080
    return {
        server: {
            port
        }
    }
})