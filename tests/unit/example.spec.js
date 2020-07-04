import { shallowMount } from "@vue/test-utils";
import FormTabs from "@/components/FormTabs.vue";

describe("FormTabs.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(FormTabs, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
