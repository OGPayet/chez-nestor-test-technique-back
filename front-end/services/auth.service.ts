import { ILoginFormData, IRegisterFormData, IToken } from "@/types";

export default {
  async login(body: ILoginFormData): Promise<IToken> {
    return await $fetch("/auth/login", {
      method: "POST",
      baseURL: "http://localhost:4000",
      body,
    });
  },

  async register(body: IRegisterFormData): Promise<IToken> {
    return await $fetch("/auth/register", {
      method: "POST",
      baseURL: "http://localhost:4000",
      body,
    });
  },
};