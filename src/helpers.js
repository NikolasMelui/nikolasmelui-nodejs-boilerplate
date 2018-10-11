export const getClientHost = req => req.headers.host.split(':')[0];
export const getClientPort = req => req.headers.host.split(':').pop();
