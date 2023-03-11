import { IUser } from "@/types";

export default {
  async update(jwt: string, body: IUser): Promise<IUser> {
    return await $fetch("/user", {
      method: "PUT",
      baseURL: "http://localhost:4000",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body,
    });
  },
};
