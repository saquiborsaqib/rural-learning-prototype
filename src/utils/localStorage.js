import localforage from "localforage";

export const saveOfflineData = async (key, data) => await localforage.setItem(key, data);
export const getOfflineData = async (key) => await localforage.getItem(key);
