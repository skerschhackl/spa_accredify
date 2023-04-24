import { describe, it, expect } from 'vitest'
import { mount, flushPromises, shallowMount } from '@vue/test-utils';
import User from '@/types/User';
import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue';
import Notification from '@/components/widgets/Notification.vue';
import App from '@/App.vue';
import NavBar from '@/components/NavBar.vue';
import UtilityNavBar from '@/components/UtilityNavBar.vue';
import UserView from '@/views/user/UserView.vue';

describe('UserCareerGoal', () => {
  it('renders the page and shows a section headline', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(NavBar).exists()).toBe(true);
  })

  describe('behaviour of isLoading', () => {
    it('should show loading spinner when isLoading is true', async () => {
      const wrapper = mount(App);
      expect(wrapper.vm.isLoading).toBe(true);
  
      expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(true);
    })

    it('should not show loading spinner when isLoading is false', async () => {
      const wrapper = mount(App);
      expect(wrapper.vm.isLoading).toBe(true);
      wrapper.vm.isLoading = false;
  
      await flushPromises();
      expect(wrapper.vm.isLoading).toBe(false);
      expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(false);
    })
  })

  describe('behaviour of hasError', () => {
    it('should show an error message if hasError is true', async () => {
      const wrapper = mount(App);
      expect(wrapper.vm.hasError).toBe(false);
      wrapper.vm.hasError = true;
      
      await flushPromises();
      expect(wrapper.findComponent(Notification).exists()).toBe(true);
    })

    it('should not show an error message if hasError is false', async () => {
      const wrapper = shallowMount(App);
      expect(wrapper.vm.hasError).toBe(false);
      
      expect(wrapper.findComponent(Notification).exists()).toBe(false);
    })
  })

  describe('behaviour of hasData', () => {
    it('should show an error message if hasData is false', async () => {
      const wrapper = shallowMount(App);
      await flushPromises();

      expect(wrapper.vm.hasData).toBe(false);
      expect(wrapper.find('.page-content--error').exists()).toBe(true);
    })

    it('should show the user document list if hasData is true', async () => {
      const wrapper = shallowMount(App);
      wrapper.vm.hasData = true
      const mockData =
        {
          id: 1,
          name: 'Mickey Mouse',
          current_organisation: {
            is_personal: false
          }
        };
      wrapper.vm.person = new User()
      // Note: we're only mocking the data we need right now
      // @ts-ignore
      wrapper.vm.person.data = mockData
      
      await flushPromises();

      expect(wrapper.findComponent(UtilityNavBar).exists()).toBe(true);
      expect(wrapper.findComponent(UserView).exists()).toBe(true);
    })
  })
})