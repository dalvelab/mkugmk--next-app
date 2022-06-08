if (typeof window === "undefined") {
  const { server } = require("./server");
  server.listen();
} else {
  const { worker } = require("./browser");
  worker.start();
}

const IS_BROWSER = typeof window !== "undefined";

export const setup = async () => {
  if (IS_BROWSER) {
    const { worker } = await import("./browser");
    worker.stop();
  } else {
    const { server } = await import("./server");
    server.listen();
  }
};
