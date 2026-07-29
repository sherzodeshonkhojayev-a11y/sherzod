 
const API_URL = 'https://nestmart-api-core.lovable.app/api/public';

function initAuth() {
    console.log('[auth.js] Skript ishga tushdi');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    console.log('[auth.js] login-form topildimi:', !!loginForm);
    console.log('[auth.js] register-form topildimi:', !!registerForm);

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

async function handleRegister(e) {
    e.preventDefault();
    console.log('[auth.js] Register submit bosildi');
    const name = document.getElementById('reg-name')?.value?.trim();
    const email = document.getElementById('reg-email')?.value?.trim();
    const password = document.getElementById('reg-password')?.value;

    console.log('[auth.js] Yuborilayotgan malumot:', { name, email, password: password ? '***' : null });

    if (!name || !email || !password) {
        alert("Iltimos, barcha maydonlarni to'ldiring");
        return;
    }

    try {
        const res = await fetch("${API_URL}/auth/register" , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        console.log('[auth.js] Server javob statusi:', res.status);

        const data = await res.json().catch(() => ({}));
        console.log('[auth.js] Server javobi:', data);

        if (res.ok) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            alert("Ro'yxatdan o'tdingiz!");
            window.location.href = 'index.html';
        } else {
            alert(data.message || "Xatolik yuz berdi (status: ${res.status})");
        }
    } catch (err) {
        console.error('[auth.js] Fetch xatosi (register):', err);
        alert("Serverga ulanib bo'lmadi. Internetni yoki API manzilini tekshiring.");
    }
}

async function handleLogin(e) {
    e.preventDefault();
    console.log('[auth.js] Login submit bosildi');

    const email = document.getElementById('login-email')?.value?.trim();
    const password = document.getElementById('login-password')?.value;

    console.log('[auth.js] Yuborilayotgan malumot:', { email, password: password ? '***' : null });

    if (!email || !password) {
        alert("Iltimos, email va parolni kiriting");
        return;
    }

    try {
        const res = await fetch("${API_URL}/auth/login" , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        console.log('[auth.js] Server javob statusi:', res.status);

        const data = await res.json().catch(() => ({}));
        console.log('[auth.js] Server javobi:', data);

        if (res.ok) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('accessToken', data.accessToken || '');
            alert("Tizimga kirdingiz!");
            window.location.href = 'index.html';
        } else {
            alert(data.message || Login xatosi (status: ${res.status}));
        }
    } catch (err) {
        console.error('[auth.js] Fetch xatosi (login):', err);
        alert("Serverga ulanib bo'lmadi. Internetni yoki API manzilini tekshiring.");
    }
}

// DOM tayyor bo'lishini kutamiz
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}
