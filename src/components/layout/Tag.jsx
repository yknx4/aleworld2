import React from 'react';

export default function(Tag, baseClass) {
    return ({children, className}) => <Tag className={`${baseClass} ${className}`}>{children}</Tag>
}