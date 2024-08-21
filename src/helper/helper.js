import { data } from "autoprefixer";

export const getStorageData = async (key) => {};

export const setDatainLoaclstorage = async (key, data) => {
  try {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
    console.log(`Data stored successfully under`);
  } catch (error) {
    console.error("Error storing data in localStorage:", error);
  }
};
