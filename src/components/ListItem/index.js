import React from 'react';

import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';

const LINK_REL = 'noopener noreferrer nofollow';

const ListItem = () => {
  return (
    <Item>
      <ExternalLink>
        <Title>This is an example post <Host>(by this person)</Host>
        </Title>
      </ExternalLink>
      <Description>
        X points by {' '}  
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          Test User {' '}
        </CommentLink>
        1 Hour Ago {' | '}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          X comments
        </CommentLink>
      </Description>
    </Item>
  )
};

export default ListItem;
