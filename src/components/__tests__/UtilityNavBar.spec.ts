import { describe, it, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UtilityNavBar from '../UtilityNavBar.vue'

describe('UtilityNavBar', () => {
  
  const wrapper = mount(UtilityNavBar, { props: { name: 'Mickey Mouse' } });
  
  it('renders the user name next to their initials', () => {
    expect(wrapper.find('div.utility-nav-bar--initials').text()).toContain('MM')
    expect(wrapper.find('div.utility-nav-bar--username').text()).toContain('Mickey Mouse')
  })

  test ('it renders no initials and no username if name is not given',async  () => {
    await wrapper.setProps({ name: undefined });
    
    expect(wrapper.find('div.utility-nav-bar--initials').exists()).toBe(false); 
    expect(wrapper.find('div.utility-nav-bar--username').exists()).toBe(false);
  })
  
})

