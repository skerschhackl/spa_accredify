import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import UserDocumentList from '../UserDocumentList.vue'

describe('UserDocumentList', () => {
  it('shows the document list', () => {

    const wrapper = mount(UserDocumentList)

    expect(wrapper.find('h4').text()).toContain('Recent Documents')
  })
})
