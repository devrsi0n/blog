import React, { useState, useCallback } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useColorMode } from 'theme-ui';
import Link from 'next/link';
import styled from '@emotion/styled';

import Image from '../../components/Image';
import mediaqueries from '../../styles/media';
import { IconToggleOpen, IconToggleClose } from '../../components/Icons';
import { IAuthor } from '../../types';

const disableAuthorLink = true;
const Wrapper = disableAuthorLink ? 'div' : Link;

/**
 * This blog supports multiple authors and therefore we need to ensure
 * we render the right UI when there are varying amount of authors.
 */
function ArticleAuthors({ authors }: { authors: Array<IAuthor> }) {
  const hasCoAuthors = authors.length > 1;

  // Special dropdown UI for multiple authors
  if (hasCoAuthors) {
    return <CoAuthors authors={authors} />;
  }
  return (
    <Wrapper href={authors[0].slug}>
      <AuthorLink as={disableAuthorLink ? 'div' : 'a'}>
        <AuthorAvatar>
          <RoundedImage src={authors[0].avatar} />
        </AuthorAvatar>
        <strong>{authors[0].name}&nbsp;</strong>
        <HideOnMobile>▴&nbsp;</HideOnMobile>
      </AuthorLink>
    </Wrapper>
  );
}

export default React.memo(ArticleAuthors);

/**
 * When generating the author names we're also checking to see how long the
 * number of authors are. If it's only 2 authors we'll show the fullnames.
 * Otherwise it'll only preview the first names of each author.
 */
function generateAuthorNames(authors: IAuthor[]) {
  return authors
    .map(author => {
      if (authors.length > 2) {
        return author.name.split(' ')[0];
      }
      return author.name;
    })
    .join(', ');
}

function CoAuthors({ authors }: { authors: IAuthor[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [colorMode] = useColorMode();
  const names = generateAuthorNames(authors);

  const fill = colorMode === 'dark' ? '#fff' : '#000';
  const listWidth = { width: `${10 + authors.length * 15}px` };
  const handleClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <CoAuthorsContainer onClick={handleClick} isOpen={isOpen}>
      <CoAuthorsList style={listWidth}>
        {authors.map((author, index) => (
          <CoAuthorAvatar style={{ left: `${index * 15}px` }} key={author.name}>
            <RoundedImage src={author.avatar} />
          </CoAuthorAvatar>
        ))}
      </CoAuthorsList>
      <NameContainer>{names}</NameContainer>
      <IconContainer>
        <IconToggleOpen fill={fill} />
      </IconContainer>

      {isOpen && (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(!isOpen)}>
          <CoAuthorsListOpen>
            <IconOpenContainer>
              <IconToggleClose fill={fill} />
            </IconOpenContainer>
            {authors.map(author => (
              <CoAuthorsListItemOpen key={author.name}>
                <Link href={author.slug}>
                  <AuthorLink>
                    <CoAuthorAvatarOpen>
                      <RoundedImage src={author.avatar} />
                    </CoAuthorAvatarOpen>
                    <AuthorNameOpen>{author.name}</AuthorNameOpen>
                  </AuthorLink>
                </Link>
              </CoAuthorsListItemOpen>
            ))}
          </CoAuthorsListOpen>
        </OutsideClickHandler>
      )}
    </CoAuthorsContainer>
  );
}

const AuthorAvatar = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 14px;
  background: ${p => p.theme.colors.gray};
  overflow: hidden;

  .gatsby-image-wrapper > div {
    padding-bottom: 100% !important;
  }

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

const AuthorLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;

  strong {
    transition: ${p => p.theme.colorModeTransition};
  }

  &:hover strong {
    color: ${p => p.theme.colors.primary};
  }
`;

const CoAuthorsList = styled.div`
  position: relative;
  height: 25px;
  margin-right: 15px;

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const CoAuthorsListOpen = styled.ul`
  position: absolute;
  z-index: 2;
  left: -21px;
  right: -21px;
  top: -19px;
  padding: 21px;
  background: ${p => p.theme.colors.card};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  list-style: none;
  transform: translateY(-2px);
`;

const CoAuthorsListItemOpen = styled.li`
  a {
    width: 100%;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const CoAuthorAvatarOpen = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 15px;
  background: ${p => p.theme.colors.grey};
  overflow: hidden;
  pointer-events: none;

  .gatsby-image-wrapper > div {
    padding-bottom: 100% !important;
    overflow: hidden;
  }
`;

const CoAuthorAvatar = styled.div`
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  z-index: 1;
  background: ${p => p.theme.colors.grey};
  box-shadow: 0 0 0 2px ${p => p.theme.colors.background};
  transition: box-shadow 0.25s ease;
  overflow: hidden;
  pointer-events: none;

  .gatsby-image-wrapper > div {
    padding-bottom: 100% !important;
    overflow: hidden;
  }

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const NameContainer = styled.strong`
  position: relative;
  max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  cursor: pointer;

  ${mediaqueries.desktop`
    max-width: 120px;
  `}

  ${mediaqueries.phablet`
    max-width: 200px;
  `}
`;

const AuthorNameOpen = styled.strong`
  position: relative;
  cursor: pointer;
  color: ${p => p.theme.colors.secondary};
  font-weight: 600;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 10px;

  ${mediaqueries.phablet`
    position: absolute;
    right: 0;
    bottom: 0;
    top: 10px;
    height: 100%;
  `}
`;

const IconOpenContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 21px;
`;

const CoAuthorsContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${p => p.theme.colors.grey};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    right: -20px;
    top: -16px;
    bottom: -16px;
    background: ${p => p.theme.colors.card};
    box-shadow: ${p =>
      p.isOpen ? 'none' : ' 0px 0px 15px rgba(0, 0, 0, 0.1)'};
    border-radius: 5px;
    z-index: 0;
    transition: opacity 0.3s;
    cursor: pointer;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  ${mediaqueries.phablet`
    font-size: 14px;
    align-items: center;

    &::before {
      box-shadow: none;
      bottom: -30px;
      background: transparent;
    }


    strong {
      display: block;
      font-weight: semi-bold;
      margin-bottom: 5px;
    }
  `}
`;

const HideOnMobile = styled.span`
  ${mediaqueries.phablet`
    display: none;
  `}
`;
