<Router>
  <Switch>
    {/* <Route path="/" component={ LoginForm }/>  */}
    <Route path="/create" component={LoginCreate} />
  </Switch>
  <Route path="reset" component={ResetAccount} />
  <Route path="redefined" component={RedefinedAccount} />

</Router>;
