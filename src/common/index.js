import './Loading.css';
import React from 'react';

export const Loading = () => (<div className="loader">Loading...</div>);
export const ErrorMessage = ({message}) => (<p className="error_msg">{message}</p>);

export const optional = (value, feedback) => value || feedback;