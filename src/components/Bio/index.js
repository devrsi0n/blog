import React from 'react';

import { sansSerifFontFamilies } from 'typography-theme-pottery/src';
import Card from '../Card';
import profilePic from '../../assets/img/icons/default.jpg';
import { rhythm } from '../../utils/typography';
import Link from '../Link';
import './index.scss';

const textFontFamily = sansSerifFontFamilies.join(',');

function Bio() {
  return (
    <Card
      style={{
        marginBottom: rhythm(2.5),
      }}
      className="bio"
      borderRadius={15}
    >
      <Link
        href="https://weibo.com/qianmofeiyu"
        style={{
          borderRadius: rhythm(1.25),
          width: rhythm(2.5),
          height: rhythm(2.5),
        }}
        className="bio__avatar-wrap"
      >
        <img
          src={profilePic}
          alt="Devrsi0n"
          style={{
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
      </Link>
      <section className="bio__text-wrap">
        <p className="bio__first-row" style={{ fontFamily: textFontFamily }}>
          Devrsi0n&nbsp;的个人博客
        </p>
        <p className="bio__second-row" style={{ fontFamily: textFontFamily }}>
          软件手艺人
        </p>
      </section>
    </Card>
  );
}

export default Bio;
