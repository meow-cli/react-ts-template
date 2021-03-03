import React from 'react';

const { Redirect, Route, Router, Switch } = require('dva').router;
const dynamic = require('dva').dynamic;
const globalRoute = [
  {
    id: 'index',
    pid: 0,
    name: '首页',
    path: '/',
    component: () => import('@/pages'),
  },
];

function RouterConfig({ history, app }: any) {
  return (
    <Router history={history}>
      <Switch>
        {globalRoute.map(({ path, ...dynamics }, index) => (
          <Route key={index} path={path} exact component={(dynamic as any)({ app, ...dynamics })} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
