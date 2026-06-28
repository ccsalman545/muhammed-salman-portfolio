/** @vitest-environment jsdom */

import { render } from '@testing-library/react'
import axe from 'axe-core'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio accessibility', () => {
  it('has no automatically detectable accessibility violations', async () => {
    const { container } = render(<App />)
    const results = await axe.run(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    })

    expect(
      results.violations.map(({ id, help, nodes }) => ({
        id,
        help,
        targets: nodes.map((node) => node.target),
      })),
    ).toEqual([])
  })
})
