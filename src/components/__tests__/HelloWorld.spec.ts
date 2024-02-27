import { VueWrapper, flushPromises, mount } from "@vue/test-utils";
import LoginComponent from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import axios from "axios";
import { expect } from "chai";
import sinon from "sinon";
import { afterEach, beforeEach, describe, it } from "node:test";

const mockRouterLink = {
  template: '<div</div>',
};
const mockRouter = {
  push: sinon.stub(),
};

const mockApp = {
  component: () => {},
  use: () => {},
};

describe("LoginComponent", () => {
  it("renders the login form", () => {
    const wrapper = mount(LoginComponent);
    expect(wrapper.find("form").exists()).to.be.true;
    expect(wrapper.find(".logo").exists()).to.be.true;
  });

  it("calls login method on form submission and handles successful login", async () => {
    const wrapper = mount(LoginComponent);

    await wrapper.setData({ email: "pepe@ejemplo.com", password: "pepe" });

    const axiosPostStub = sinon.stub(axios, "post").resolves({});

    await wrapper.find(".login-form").trigger("submit.prevent");

    await flushPromises();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isSubmitting).to.be.false;

    axiosPostStub.restore();
  });
});

describe("RegisterView", () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(RegisterView);
  });

  afterEach(() => {
    sinon.restore();
    wrapper.unmount();
  });

  it("calls registerUser method on form submission and handles successful registration", async () => {
    const axiosPostStub = sinon.stub(axios, "post").resolves({ data: "User registered successfully" });

    const newData = {
      ...wrapper.vm.$data,
      nombre: "John",
      email: "john@example.com",
      password: "password123",
    };

    await wrapper.setData(newData);

    await wrapper.find(".register-form").trigger("submit.prevent");
    await flushPromises();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isSubmitting).to.be.false;

    axiosPostStub.restore();
  });

  it("handles registration error", async () => {
    const axiosPostStub = sinon.stub(axios, "post").rejects(new Error("Registration error"));

    const newData = {
      ...wrapper.vm.$data,
      nombre: "Pepe",
      email: "pepe@example.com",
      password: "password123",
    };

    await wrapper.setData(newData);

    await wrapper.find(".register-form").trigger("submit.prevent");
    await flushPromises();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isSubmitting).to.be.false;

    axiosPostStub.restore();
  });
});