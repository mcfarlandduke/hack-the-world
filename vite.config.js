import { log } from 'console';
import { request } from 'http';
import {resolve} from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                login: resolve(root, 'login', 'index.html'),
                resources: resolve(root, 'resources', 'index.html'),
                stats: resolve(root, 'stats', 'index.html'),
                recievers : resolve(root, 'recievers', 'index.html'),
                requests : resolve(root, 'requests', 'index.html')
            },
        }
    }
});
