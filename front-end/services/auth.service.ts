import { ILoginFormData, IRegisterFormData, IToken } from "@/types";

const apiBaseUrl: string = "http://localhost:4000";

export default {
  async login(body: ILoginFormData): Promise<IToken> {
    return await $fetch("/auth/login", {
      method: "POST",
      baseURL: apiBaseUrl,
      body,
    });
  },

  async register(body: IRegisterFormData): Promise<IToken> {
    return await $fetch("/auth/register", {
      method: "POST",
      baseURL: apiBaseUrl,
      body,
    });
  },
};
