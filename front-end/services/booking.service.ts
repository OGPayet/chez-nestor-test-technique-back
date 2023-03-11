import { IBooking, IApartmentFormData } from "@/types";

const apiBaseUrl: string = "http://localhost:4000";

export default {
  async create(jwt: string, body: IBooking): Promise<IBooking> {
    return await $fetch("/booking", {
      method: "POST",
      baseURL: apiBaseUrl,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body,
    });
  },

  async update(jwt: string, body: IBooking): Promise<IBooking> {
    return await $fetch("/booking", {
      method: "PUT",
      baseURL: apiBaseUrl,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body,
    });
  },

  async delete(jwt: string, bookingId: number): Promise<any> {
    return await $fetch(`/booking/${bookingId}`, {
      method: "DELETE",
      baseURL: apiBaseUrl,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  },

  async getByUserId(jwt: string, userId: number): Promise<IBooking> {
    return await await $fetch(`/booking/getBookingByUserId/${userId}`, {
      method: "GET",
      baseURL: apiBaseUrl,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  },
};
