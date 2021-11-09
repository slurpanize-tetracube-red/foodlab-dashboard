export const foodhouseProperties = {
    api: {
        httpProtocol: 'http',
        websocketProtocol: 'ws',
        baseUrl: 'localhost:8081'
    },
}

export const foodhouseConfiguration = {
    apiBaseUrl: `${foodhouseProperties.api.httpProtocol}://${foodhouseProperties.api.baseUrl}`,
    websocketBaseUrl: `${foodhouseProperties.api.websocketProtocol}://${foodhouseProperties.api.baseUrl}`
}