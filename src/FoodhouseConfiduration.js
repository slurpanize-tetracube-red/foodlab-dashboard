import { createTheme } from "@mui/material";

export const foodhouseProperties = {
    apiProtocol: 'http',
    authManagerServiceBaseUrl: '192.168.1.187:8090',
    foodhouseServiceBaseUrl: '192.168.1.187:8081'
};

export const foodhouseConfiguration = {
    apiBaseUrl: `${foodhouseProperties.apiProtocol}://${foodhouseProperties.foodhouseServiceBaseUrl}`
};

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Quicksand'
        ].join(','),
    },
});