import React from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Row>
          <Col l="8">
            <h3 style={styles.title}>关于我们</h3>
            <div style={styles.nav}>
              <a style={styles.link}>私权政策</a>
              <a style={styles.link}>加入我们</a>
            </div>
          </Col>
          <Col l="8">
            <h3 style={styles.title}>使用帮助</h3>
            <div style={styles.nav}>
              <a style={styles.link}>联系我们</a>
              <a style={styles.link}>使用文档</a>
            </div>
          </Col>
          <Col l="8">
            <h3>公司文化</h3>
            <p>我是公司文化</p>
          </Col>
        </Row>
        <p style={styles.copyRight}>版权信息页</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 0',
    background: '#475268',
    color: '#fff',
  },
  content: {
    width: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '20px',
    fontWeight: '400',
    marginBottom: '20px',
  },
  link: {
    display: 'block',
    marginBottom: '20px',
    height: '22px',
    lineHeight: '22px',
    color: '#fff',
    cursor: 'pointer',
  },
  qrcode: {
    width: '160px',
    borderRadius: '4px',
  },
  copyRight: {
    textAlign: 'center',
  },
};

export default Footer;
