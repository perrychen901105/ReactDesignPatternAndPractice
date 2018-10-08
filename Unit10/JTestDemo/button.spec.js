import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Button from './button'

test('works', () => {
    expect(true).toBe(true)
})

test('renders with text', () => {
    const text = 'text'

    const renderer = TestUtils.createRenderer()
    renderer.render(<Button text={text} />)
    const button = renderer.getRenderOutput()

    expect(button.type).toBe('button')
    expect(button.props.children).toBe(text)
})
