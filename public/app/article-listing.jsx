import './article-listing.css!';
import React from 'react';

import AuthorThumbnail from './author-thumbnail.jsx!';
import PostThumbnail from './post-thumbnail.jsx!';

export default React.createClass({
  render: function() {
    let thumb = this.props.thumb;

    return (
      <div className="article-listing">
        <div id="post-wrapper">
          <PostThumbnail
            thumb={thumb.thumb}
            title={thumb.title}
            id={thumb.id} />
        </div>

        <div id="author-wrapper">
          <AuthorThumbnail
            author={thumb.author}
            author_img={thumb.author_img}
            date={thumb.date} />
        </div>
      </div>
    );
  }
})