import { describe, it, expect } from 'vitest'
import { mount, flushPromises, shallowMount } from '@vue/test-utils';
import CareerGoal from '@/types/CareerGoal';
import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue';
import Notification from '@/components/widgets/Notification.vue';
import UserCareerGoal from '@/views/user/UserCareerGoals.vue';

describe('UserCareerGoal', () => {
  it('renders the page and shows a section headline', () => {
    const wrapper = shallowMount(UserCareerGoal);
    expect(wrapper.find('h4').text()).toEqual('Career Goal')
  })

  describe('behaviour of isLoading', () => {
    it('should show loading spinner when isLoading is true', async () => {
      const wrapper = mount(UserCareerGoal);
      expect(wrapper.vm.isLoading).toBe(true);
  
      expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(true);
    })

    it('should not show loading spinner when isLoading is false', async () => {
      const wrapper = mount(UserCareerGoal);
      expect(wrapper.vm.isLoading).toBe(true);
      wrapper.vm.isLoading = false;
  
      await flushPromises();
      expect(wrapper.vm.isLoading).toBe(false);
      expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(false);
    })
  })

  describe('behaviour of error', () => {
    it('should show an error message if error is not an empty string', async () => {
      const wrapper = mount(UserCareerGoal);
      expect(wrapper.vm.error).toBe('');
      wrapper.vm.error = 'I am an error message';
      
      await flushPromises();
      expect(wrapper.findComponent(Notification).exists()).toBe(true);
      expect(wrapper.findComponent(Notification).text()).toEqual(wrapper.vm.error);
    })

    it('should not show an error message if error a string', async () => {
      const wrapper = shallowMount(UserCareerGoal);
      expect(wrapper.vm.error).toBe('');
      
      expect(wrapper.findComponent(Notification).exists()).toBe(false);
    })
  })

  describe('behaviour of hasData', () => {
    it('should show an error message if hasData is false', async () => {
      const wrapper = shallowMount(UserCareerGoal);
      await flushPromises();

      expect(wrapper.vm.hasData).toBe(false);
      expect(wrapper.find('.career-goal--error').exists()).toBe(true);
    })
    
    it('should show the user document list if hasData is true', async () => {
      const wrapper = shallowMount(UserCareerGoal);
      wrapper.vm.hasData = true
      const mockData =
        {
          id: 1,
          name: 'Team Lead',
          description: '',
          category: '',
          type: '',
          progress: 45
        };
      wrapper.vm.latestCareerGoal = new CareerGoal()
      wrapper.vm.latestCareerGoal.data = mockData
      
      await flushPromises();

      expect(wrapper.find('.career-goal--header').exists()).toBe(true);
      expect(wrapper.find('.career-goal--header').text()).toEqual('Your Progress');
      expect(wrapper.find('.career-goal--donut').exists()).toBe(true);
      expect(wrapper.find('.career-goal--donut-text').exists()).toBe(true);
      expect(wrapper.find('.career-goal--name').exists()).toBe(true);
      expect(wrapper.find('.career-goal--name').text()).toEqual(mockData.name);

      describe('behaviour of getProgress', () => {
        it('should render percentage if latestCareerGoal.percentage is given', async () => {
          await wrapper.vm.$nextTick();

          const progressText = mockData.progress + '%'
          expect(wrapper.vm.getProgress).toMatch(progressText);
          expect(wrapper.find('.career-goal--donut-text').text()).toMatch(progressText);
        })
      })
    })
  })
})