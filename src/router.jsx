/**
 * 定义应用路由
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BlankLayout from './layouts/BlankLayout';

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={BlankLayout} />
      </Switch>
    </BrowserRouter>
  );
};

export default router();
