import React from 'react';
import Helmet from 'react-helmet';

const Title = () => {
  const title = "King of Coins";

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default Title;

