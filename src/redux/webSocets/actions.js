import io from "socket.io-client";

/** Set up socket listeners **/
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";

/** Set up socket emitters **/
export const NEXT = "NEXT";
export const RELOAD = "RELOAD";

const messageTypes = [].reduce((accum, msg) => {
  accum[msg] = msg;
  return accum;
}, {});

/** Set the socket instance on APP load. **/
export const token = localStorage.getItem("token");
export const socket = io(process.env.REACT_APP_API_SERVER, {
  transports: ["websocket"],
  query: { token },
});

/** Method to apply socket.ON from the APP wide listeners **/
export const init = (store) => {
  Object.keys(messageTypes).forEach((type) =>
    socket.on(type, (payload) => store.dispatch({ type, payload }))
  );
};

/** Method to apply socket.EMIT as middleware - this gets used on the store page as a extra middware in thunk - not currently using it */
export const emit = (type, payload) => socket.emit(type, payload);
