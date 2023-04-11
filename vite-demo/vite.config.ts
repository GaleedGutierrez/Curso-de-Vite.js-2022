import { UserConfigExport, defineConfig, loadEnv } from "vite";
import { resolve } from 'path'
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
    const port = 8080

    if (mode === 'development') {
        console.log('Modo Desarrollo');
        return {
            server: {
                port
            }
        }
    } else {
        console.log('Modo Producción');
        return {
            build: {
                lib: {
                    entry: resolve(__dirname,'./lib/', 'main.js'),
                    name: 'demo',
                    fileName: (format) => `demo.${format}.js`
                }
            }
        }
    }
})