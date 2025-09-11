const API_URL = process.env.REACT_APP_API_URL;

// Login
export async function loginUser(credentials) {
    const res = await fetch(`${API_URL}/login`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(credentials),
    });
    if (!res.ok){
        const errorData = await res.json();
        throw new Error(errorData.message || 'Login failed');
    }
    return res.json();
}

// Register
export async function registerUser(userData) {
    const res = await fetch(`${API_URL}/register`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData),
    });
    if (!res.ok){
        const errorData = await res.json();
        throw new Error(errorData.message || 'Registration failed');
    }
    return res.json();
}

//  Get User Profile
export async function getProfile(token) {
    const res = await fetch(`${API_URL}/profile`, {
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`,
        },
    });
    if (!res.ok){
        throw new Error('Failed to fetch profile');
    }
    return res.json();
}

//  Logout
export async function logoutUser(token) {
    const res = await fetch(`${API_URL}/logout`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`,
        }, 
    });
    if (!res.ok){
        throw new Error('Logout failed');
    }
    return res.json();
}

// Forgot password
export async function sendForgotPasswordCode(email) {
    const res = await fetch(`${API_URL}/forgot-password`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email}),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to send code");
    return data;
}

export async function verefyForgotPasswordCode(email,code) {
    const res = await fetch(`${API_URL}/verify-code`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,code}),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Code verification failed");
    return data;
}