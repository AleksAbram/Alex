const React = require('react');
const Layout = require('./Layout')

module.exports = function Home() {
  return (
    <Layout title="Page title">
   <h1>Registrate</h1>
   <form  name='addUserForm'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Мы не будем подписывать нюдсы твоим именем</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </Layout>
  );
};