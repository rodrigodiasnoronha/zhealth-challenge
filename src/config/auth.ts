interface Config {
    jwt: {
        secret: string;
        expiresIn: string | number;
    };
}

export default {
    jwt: {
        secret: '0800fc577294c34e0b28ad2839435945',
        expiresIn: '10d'
    },
} as Config;
