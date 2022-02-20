export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "info@schreibcode.de" && password === "123456") {
                resolve();
            } else {
                reject("Falsche Email und Passwort");
            }
        }, 1000);
    });
};

export const logout = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                reject("Server Error");
            } else {
                resolve();
            }
        }, 1000);
    });
};
