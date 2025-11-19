import { io } from "socket.io-client";

const URL = import.meta.env.VITE_BACKEND_WS || "http://localhost:3000";

export const socket = io(URL, {
  transports: ["websocket"],
});