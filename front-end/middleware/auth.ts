import * as jose from "jose";
import { useUserStore } from "@/store/user";

export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const runtimeConfig = useRuntimeConfig();
  const userStore = useUserStore();

  if (userStore.jwt) {
    try {
      const jwtCheck = await jose.jwtVerify(
        userStore.jwt,
        new TextEncoder().encode(runtimeConfig.jwtSecretkey)
      );

      if (!jwtCheck) return navigateTo({ name: "login" });
    } catch {
      return navigateTo({ name: "login" });
    }
  } else {
    return navigateTo({ name: "login" });
  }
});
