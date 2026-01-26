"use server"
const delay = (d) => {
  return new Promise((resolve) => setTimeout(resolve, d*1000));
}
export const Login_Function = async (data) => {
  await delay(2);
  console.log(data);
}

