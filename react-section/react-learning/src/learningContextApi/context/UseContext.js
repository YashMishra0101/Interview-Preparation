import React from "react";

// 1. Create a Context object using React.createContext()
//    - Think of Context as a "global storage box" for your app.
//    - It helps share data across multiple components without passing props manually at every level (avoids prop drilling).
// 2. Passing `null` as the default value here, so if no Provider is used, consumers of this context will get `null` by default.

const UserContext = React.createContext(null);

// 3. Exporting this context so it can be imported and used in other components (via Provider and Consumer/useContext).

export default UserContext;
