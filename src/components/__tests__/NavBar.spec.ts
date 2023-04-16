import { describe, it, expect, test, vi } from 'vitest';

import { mount } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import router from '@/router'

function mountNavBar() {
  const wrapper = mount(NavBar, {
    global: {
      plugins: [router]
    }
  })
  return wrapper
}

describe('The Router', () => {
  it('mounts properly', () => {
    const nav = mountNavBar()
    expect(nav.find('img'))
  })

  test('click the links', async () => {
    const push = vi.spyOn(router, 'push')

    await mountNavBar().find('a').trigger('click')

    expect(push).toHaveBeenCalledOnce()
    expect(push).toHaveBeenCalledWith('/')

  })
})