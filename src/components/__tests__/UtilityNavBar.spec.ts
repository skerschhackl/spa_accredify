import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UtilityNavBar from '../UtilityNavBar.vue'

const props = { firstName: 'Mickey', lastName: 'Mouse' }

describe('UtilityNavBar', () => {
  it('shows the user initials next to the username', () => {
    const wrapper = mount(UtilityNavBar, { props })

    expect(wrapper.find('div.utility-nav-bar--initials').text()).toContain('MM')
    expect(wrapper.find('div.utility-nav-bar--username').text()).toContain('Mickey Mouse')
  })
})
