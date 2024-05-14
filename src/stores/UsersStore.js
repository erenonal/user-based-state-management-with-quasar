import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [
      { numberX: 1, numberY: 2, addingResult: 3, multiplyingResult: 2 },
      { numberX: 3, numberY: 4, addingResult: 7, multiplyingResult: 12 },
    ],
    mailAddress: localStorage.getItem("mailAddress") || "", // Retrieve mail address from local storage
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
        console.log("sicansi");
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
