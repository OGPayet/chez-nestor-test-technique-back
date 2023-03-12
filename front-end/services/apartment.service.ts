import { IApartment } from "@/types";

const apiBaseUrl: string = "/back-end-api";

export default {
  async getAll(jwt: string): Promise<IApartment[]> {
    return await $fetch("/apartment", {
      method: "GET",
      baseURL: apiBaseUrl,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  },

  async update(jwt: string, body: IApartment): Promise<IApartment[]> {
    return await $fetch("/apartment", {
      method: "PUT",
      baseURL: apiBaseUrl,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body,
    });
  },
};
