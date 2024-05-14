import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [
      { numberX: 1, numberY: 2, addingResult: 3, multiplyingResult: 2 },
      { numberX: 3, numberY: 4, addingResult: 7, multiplyingResult: 12 },
    ],
    mailAddress: "user4@gmail.com",
  }),

  getters: {
    userType() {
      const domain = this.mailAddress.split("@")[0];
      if (domain === "user1") {
        return "user1";
      } else if (domain === "user2") {
        return "user2";
      } else if (domain === "user3") {
        return "user3";
      } else if (domain === "user4") {
        return "user4";
      } else {
        return "standard";
      }
    },
  },

  actions: {
    updateMailAddress(newAddress) {
      this.mailAddress = newAddress;
    },
  },
});
