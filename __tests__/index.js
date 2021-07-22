import React from 'react';
import App from '../src';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    test('renders', () => {
        render(<App />);
        expect(screen.getByText('I am not mobile.')).toBeInTheDocument();
    })
    describe('Mobile', () => {
        beforeEach(() => {
            jest.mock('../src/utils', () => ({
                isMobile: true
            }));
        });
        test('renders', () => {
            render(<App />);
            expect(screen.getByText('I am mobile.')).toBeInTheDocument();
        })
    });
})