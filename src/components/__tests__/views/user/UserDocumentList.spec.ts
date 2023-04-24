import { describe, it, expect } from 'vitest'
import { mount, flushPromises, shallowMount } from '@vue/test-utils';
import Document from '@/types/Document';
import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue';
import Notification from '@/components/widgets/Notification.vue';
import UserDocumentList from '@/views/user/UserDocumentList.vue';

describe('UserDocumentList', () => {
  it('renders the page and shows a section headline', () => {
    const wrapper = shallowMount(UserDocumentList);
    expect(wrapper.find('h4').text()).toContain('Recent Documents')
  })

  describe('behaviour of isLoading', () => {
    it('should show loading spinner when isLoading is true', async () => {
      const wrapper = mount(UserDocumentList);
      expect(wrapper.vm.isLoading).toBe(true);
  
      expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(true);
    })

    it('should not show loading spinner when isLoading is false', async () => {
      const wrapper = mount(UserDocumentList);
      expect(wrapper.vm.isLoading).toBe(true);
      wrapper.vm.isLoading = false;
  
      await flushPromises();
      expect(wrapper.vm.isLoading).toBe(false);
      expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(false);
    })
  })

  describe('behaviour of error', () => {
    it('should show an error message if error is not an empty string', async () => {
      const wrapper = mount(UserDocumentList);
      expect(wrapper.vm.error).toBe('');
      wrapper.vm.error = 'I am an error message';
      
      await flushPromises();
      expect(wrapper.findComponent(Notification).exists()).toBe(true);
      expect(wrapper.findComponent(Notification).text()).toEqual(wrapper.vm.error);
    })

    it('should not show an error message if error a string', async () => {
      const wrapper = shallowMount(UserDocumentList);
      expect(wrapper.vm.error).toBe('');
      
      expect(wrapper.findComponent(Notification).exists()).toBe(false);
    })
  })

  describe('behaviour of hasData', () => {
    it('should show an error message if hasData is false', async () => {
      const wrapper = shallowMount(UserDocumentList);
      expect(wrapper.vm.hasData).toBe(false);
      expect(wrapper.find('.document-list--error').exists()).toBe(true);
    })
    
    it('should show the user document list if hasData is true', async () => {
      const wrapper = shallowMount(UserDocumentList);
      wrapper.vm.hasData = true
      const mockData = [
        {
          id: 1,
          document_name: 'Document 1',
          received_on: '2022-05-01T10:00:00.000Z'
        },
        {
          id: 2,
          document_name: 'Document 2',
          received_on: '2022-05-02T10:00:00.000Z'
        }
        ]
      ;
      wrapper.vm.documents = new Document()
      wrapper.vm.documents.data.data = mockData
      
      await flushPromises();

      expect(wrapper.find('.document-list--header').exists()).toBe(true);
      expect(wrapper.find('.document-list--row').exists()).toBe(true);

      const documentRows = wrapper.findAll('.document-list--row');

      expect(documentRows.length).toBe(3) // including header row
      expect(documentRows[1].find('.document-list--document-name').text()).toEqual(mockData[0].document_name)
    })
  })
});