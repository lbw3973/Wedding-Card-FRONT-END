import crypto from "crypto-js";

export const encrypt = (payload: string) => {
  try {
    const secret_key = import.meta.env.VITE_CRYPTO_SECRET_KEY;
    const encrypted = crypto.AES.encrypt(payload, secret_key).toString();
    return encrypted;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const decrypt = (encrypted: string) => {
  try {
    const secret_key = import.meta.env.VITE_CRYPTO_SECRET_KEY;
    const decrypted_bytes = crypto.AES.decrypt(encrypted, secret_key);
    const decrypted = decrypted_bytes.toString(crypto.enc.Utf8);
    return decrypted;
  } catch (error) {
    console.error(error);
    return null;
  }
};
