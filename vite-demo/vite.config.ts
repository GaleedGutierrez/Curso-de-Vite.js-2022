import { UserConfigExport, defineConfig, loadEnv } from "vite";

// const config: UserConfigExport = {
//     server: {
//         port: 8080
//     }
// }

export default defineConfig(({command, mode})=>{
    console.log(command);
    console.log(mode);

    const ENV = loadEnv(mode, process.cwd())
    console.log(ENV.VITE_NAME);
    if (mode === 'development') {
        console.log('Modo Desarrollo');
    } else {
        console.log('Modo Producción');
    }

    const port = 8080
    return {
        server: {
            port
        }
    }
})