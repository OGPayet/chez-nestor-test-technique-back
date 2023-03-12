import { IUser } from "@/types";

const apiBaseUrl: string = "/back-end-api";

export default {
  async update(jwt: string, body: IUser): Promise<IUser> {
    return await $fetch("/user", {
      method: "PUT",
      baseURL: apiBaseUrl,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body,
    });
  },
};
