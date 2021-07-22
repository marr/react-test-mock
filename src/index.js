import React from 'react';
import { isMobile } from './utils';

export default function() {
    return isMobile ? <p>I am mobile.</p> : <p>I am not mobile.</p>
}