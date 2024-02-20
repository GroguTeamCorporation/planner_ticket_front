import { mount } from "@vue/test-utils";
import LoginComponent from "@/views/LoginView.vue";
import axios from "axios";
import flushPromises from "flush-promises";
import { expect } from "./expect.1";
import { describe, it } from "node:test";

describe("LoginComponent", () => {
  it("renders the login form", () => {
    const wrapper = mount(LoginComponent);
    expect(wrapper.find("form").exists()).toBe(true);
    expect(wrapper.find(".logo").exists()).toBe(true);
  });

  it("calls login method on form submission and handles successful login", async () => {
    const wrapper = mount(LoginComponent);

    await wrapper.setData({ email: "pepe@ejemplo.com", password: "pepe" });

    await wrapper.find(".login-form").trigger("submit.prevent");

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8080/api/v1/login",
      {
        email: "pepe@ejemplo.com",
        password: "pepe",
      }
    );
    await flushPromises();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isSubmitting).toBe(false);
  });

  it("handles error during login", async () => {
    const wrapper = mount(LoginComponent);
    await wrapper.setData({ email: "pepe@example.com", password: "pepe" });
    await wrapper.find(".login-form").trigger("submit.prevent");
    await flushPromises();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isSubmitting).toBe(false);
    expect(wrapper.vm.isSubmitting).toBe(false);
  });
});
