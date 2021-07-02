import * as React from "react";
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Resource, ListGuesser } from 'react-admin';

const dataProvider = jsonServerProvider('https://arabtools.techtsy.tech/api/v1/product/product/1/');
//const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="users" list={ListGuesser} />
      </Admin>
  );
export default App;
