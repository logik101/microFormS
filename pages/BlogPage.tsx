import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(
      'https://microfinance-blog-895917400056.us-west1.run.app/',
      '_blank',
      'noopener,noreferrer'
    );

    // send the current tab somewhere sensible
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
};

export default BlogPage;
