import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import UserGreeting from '../UserGreeting.vue'
import UserUtils from '@/utils/UserUtils'

describe('UserGreeting', () => {
  it('shows the user initials next to the username', () => {
    const push = vi.spyOn(UserUtils, 'getUserName').mockReturnValue('Mickey Mouse')

    const wrapper = mount(UserGreeting)

    expect(wrapper.find('h2').text()).toContain('Hi, Mickey Mouse 👋')
  })
})
