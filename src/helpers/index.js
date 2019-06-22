export const getServerHost = req => req.headers.host.split(':')[0];
export const getServerPort = req => req.headers.host.split(':').pop();
