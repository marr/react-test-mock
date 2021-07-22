import React from 'react';
import matchMediaPolyfill from 'mq-polyfill';
import App from '../src';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    beforeAll(() => {
        matchMediaPolyfill(window)
        window.resizeTo = function resizeTo(width, height) {
          Object.assign(this, {
            innerWidth: width,
            innerHeight: height,
            outerWidth: width,
            outerHeight: height,
          }).dispatchEvent(new this.Event('resize'))
        }
    })
    test('renders', () => {
        render(<App />);
        expect(screen.getByText('I am not mobile.')).toBeInTheDocument();
    })
    describe('Mobile', () => {
        beforeEach(() => {
            window.resizeTo(500, 700);
        });
        test('renders', () => {
            render(<App />);
            expect(screen.getByText('I am mobile.')).toBeInTheDocument();
        })
    });
})