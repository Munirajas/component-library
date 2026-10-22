
export default function healthCheckPlugin() {
  return {
    name: 'health-check',
    configureServer(server) {
      server.middlewares.use('/health', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          status: 'ok',
          timestamp: new Date().toISOString(),
        }));
      });
    },
  };
}