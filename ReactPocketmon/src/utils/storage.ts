const storage = {
    set: (key: string, value: any) => {
        localStorage.setItem(key,JSON.stringify(value));
    },

    get: <T>(key: string, defaultValuie?: T): T => {
        const value= localStorage.getItem(key);
        return (value ? JSON.parse(value) : defaultValuie) as T;
    },

    remove: (key: string) => {
        localStorage.removeItem(key)
    }
}

export default storage;