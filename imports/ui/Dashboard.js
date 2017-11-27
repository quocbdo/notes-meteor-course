import React from 'react';

import PrivateHeader from './PrivateHeader';

// Link.js is "dumb" component, convert to
// Stateless functional Component
export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        Dashboard page content.
      </div>
    </div>
  );
};

// export default class Link extends React.Component {
//   render() {
//     return (
//       <div>
//         <PrivateHeader title="Dashboard"/>
//         <LinksList/>
//         <AddLink/>
//       </div>
//     );
//   }
// };

