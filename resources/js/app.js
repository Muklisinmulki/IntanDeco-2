// Import CSS dan library tambahan
import '../css/app.css';
import './bootstrap';
import 'flowbite';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Vue dan Inertia
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Import ZiggyVue untuk route helper di frontend
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

// Ambil nama aplikasi dari .env
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Inisialisasi Inertia App
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue) // Pakai ZiggyVue
            .mount(el);
    },
    progress: {
        color: '#4B5563', // Warna progress bar saat loading page
    },
});
