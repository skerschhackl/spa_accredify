import { describe, it, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserView from '@/views/user/UserView.vue';

describe('UserManagedViewVue', () => {

  const wrapper = mount(UserView, { props: { name: 'Mickey Mouse', isPersonal: true } });

  it('renders properly', () => {
    expect(wrapper.find('h2').text()).toContain('Hi, Mickey Mouse 👋');
  })
  
  test ('it renders a "Manage your documents." message if the user is personal', () => {
    expect(wrapper.find('div.greeting--sub-headline').text()).toBe('Manage your documents.');
  })

  test ('it renders a "Manage your documents issued by SMU Academy or track your career goal." message if the user is managed',async  () => {
    await wrapper.setProps({ isPersonal: false });

    expect(wrapper.find('div.greeting--sub-headline').text()).toBe('Manage your documents issued by SMU Academy or track your career goal.');
  })
  
})
