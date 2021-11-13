import { createTheme } from "@mui/material";

export const foodhouseProperties = {
    apiProtocol: 'http',
    foodhouseServiceBaseUrl: '192.168.1.187:8090'
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
