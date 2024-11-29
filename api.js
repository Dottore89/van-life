import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjgA6DvGCziSdiPsGLhQgU0u_Cu_Bu2hk",
  authDomain: "vanlife-f463a.firebaseapp.com",
  projectId: "vanlife-f463a",
  storageBucket: "vanlife-f463a.firebasestorage.app",
  messagingSenderId: "252691451153",
  appId: "1:252691451153:web:6a4e73d17cd8aa630b50b0"
};

const app = initializeApp(firebaseConfig);









export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}