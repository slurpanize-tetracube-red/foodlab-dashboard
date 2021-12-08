import { createTheme } from "@mui/material";

export const foodlabProperties = {
    apiProtocol: 'http',
    foodlabServiceBaseUrl: '192.168.1.187:8090'
};

export const foodlabConfiguration = {
    apiBaseUrl: `${foodlabProperties.apiProtocol}://${foodlabProperties.foodlabServiceBaseUrl}`
};

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Quicksand'
        ].join(','),
    },
});
