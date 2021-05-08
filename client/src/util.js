export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const comparePwd = (pwd, confirmPwd) => {
  return pwd === confirmPwd;
};

export const chainOR = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (args[i]) return true;
  }

  return false;
};
