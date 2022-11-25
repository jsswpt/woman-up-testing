export const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Key ${key} is not required`);
  }
  return process.env[key] || "";
};
