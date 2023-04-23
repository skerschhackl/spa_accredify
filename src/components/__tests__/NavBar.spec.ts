import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import NavBar from '../NavBar.vue';

describe('NavBar', () => {
  it('mounts properly', () => {
    const nav = mount(NavBar);
    expect(nav.find('img'))
    expect(nav.findAll('svg')).toHaveLength(5)
  })
})