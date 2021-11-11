import { createTheme } from "@mui/material";

export const foodhouseProperties = {
    apiProtocol: 'http',
    baseUrl: '192.168.1.187:8081'
};

export const foodhouseConfiguration = {
    apiBaseUrl: `${foodhouseProperties.apiProtocol}://${foodhouseProperties.baseUrl}`
};

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Quicksand'
        ].join(','),
    },
});