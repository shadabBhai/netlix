export const checkForm = (email, password) => {
  const isMailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isMailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
