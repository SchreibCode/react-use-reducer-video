export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "Marvin" && password === "123456") {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
};
