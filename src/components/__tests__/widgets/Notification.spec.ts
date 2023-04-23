import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Notification from '@/components/widgets/Notification.vue';

describe('Notification', () => {
  it('renders message passed in props', () => {
    const msg = 'Test notification'
    const wrapper = mount(Notification, { props: { msg } })
    expect(wrapper.text()).toContain(msg)
  })

  it('renders an error notification', () => {
    const wrapper = mount(Notification, { props: { msg: 'This is an error message' } })
    expect(wrapper.classes()).toContain('notification--wrapper--error')
  })

  it('renders a success notification when type prop is set to "success"', () => {
    const wrapper = mount(Notification, {
      props: {
        msg: 'This is a success message',
        type: 'success'
      }
    })

    expect(wrapper.classes()).toContain('notification--wrapper--success')
  })
})
