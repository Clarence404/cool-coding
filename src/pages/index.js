import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const learningPaths = [
  {
    title: '第一次系统学编程',
    description: '先用 Python 建立语法、函数、模块和面向对象的手感，再补上数据结构与算法。',
    links: [
      {label: 'Python 教程', to: '/docs/language/python'},
      {label: '数据结构与算法', to: '/docs/fundamental/algorithm'},
    ],
  },
  {
    title: '准备技术面试',
    description: '把网络、操作系统、数据库和常见面试题串起来，方便查缺补漏。',
    links: [
      {label: '八股面试宝典', to: '/docs/fundamental/interview'},
      {label: '计算机网络', to: '/docs/fundamental/network'},
    ],
  },
  {
    title: '搭后端与云原生项目',
    description: '从 Java/Spring、数据库、中间件到 Docker/Kubernetes，按项目会遇到的问题往下学。',
    links: [
      {label: 'Spring 教程', to: '/docs/framework/spring'},
      {label: 'Kubernetes 教程', to: '/docs/devops/kubernetes'},
    ],
  },
];

const publisherLinks = [
  {
    title: '关于代码酷',
    description: '了解这个站点为什么存在、面向谁，以及内容覆盖到什么深度。',
    to: '/about',
  },
  {
    title: '编辑说明',
    description: '查看教程的编写、校对、更新和纠错流程。',
    to: '/editorial-policy',
  },
  {
    title: '联系我们',
    description: '发现错误、版权问题或合作事项，可以从这里联系维护者。',
    to: '/contact',
  },
  {
    title: '隐私政策',
    description: '说明 Google AdSense、统计脚本和 Cookie 的使用方式。',
    to: '/privacy',
  },
  {
    title: '使用条款',
    description: '阅读内容使用、免责声明和站点访问规则。',
    to: '/terms',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/*<p className={styles.heroEyebrow}>面向中文开发者的开源编程教程</p>*/}
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          面向中文开发者的开源编程教程
        </p>
        <div className={styles.heroStats} aria-label="站点内容概览">
          <span>19000+ 篇教程页</span>
          <span>70+ 个技术专题</span>
          <span>持续维护的开源内容</span>
        </div>
        {/*<div className={styles.buttons}>*/}
        {/*  <Link*/}
        {/*      className={clsx('button button--secondary button--lg', styles.heroButton)}*/}
        {/*      to="/docs/language/python">*/}
        {/*    从 Python 开始*/}
        {/*  </Link>*/}
        {/*  /!*<Link*!/*/}
        {/*  /!*  className={clsx('button button--outline button--secondary button--lg', styles.heroButton)}*!/*/}
        {/*  /!*  to="#learning-paths">*!/*/}
        {/*  /!*  选择学习路线*!/*/}
        {/*  /!*</Link>*!/*/}
        {/*</div>*/}
      </div>
    </header>
  );
}

function LearningPaths() {
  return (
    <section id="learning-paths" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">新读者可以这样开始</Heading>
          <p>
            如果你只是想找一条路，不必先翻完整个目录。下面三条路径覆盖入门、面试和项目实践，读完一组再回到目录扩展就好。
          </p>
        </div>
        <div className={styles.pathGrid}>
          {learningPaths.map((path) => (
            <article className={styles.pathCard} key={path.title}>
              <Heading as="h3">{path.title}</Heading>
              <p>{path.description}</p>
              <div className={styles.inlineLinks}>
                {path.links.map((link) => (
                  <Link key={link.to} to={link.to}>{link.label}</Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="代码酷：面向中文开发者的开源编程教程"
      description="代码酷提供中文编程教程、计算机基础、框架、数据库、中间件、云原生和数据技术学习资料，适合自学、复习和项目查阅。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
