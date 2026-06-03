import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './publisher.module.css';

export default function AboutPage() {
  return (
    <Layout
      title="关于代码酷"
      description="了解代码酷的内容方向、适合读者、维护方式和站点目标。">
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <p className={styles.eyebrow}>About</p>
            <Heading as="h1">关于代码酷</Heading>
            <p className={styles.lead}>
              代码酷是一个中文编程学习站点，主要整理编程语言、计算机基础、Web 框架、数据库、中间件、云原生、数据技术和物联网相关教程。
            </p>

            <Heading as="h2">我们希望解决什么问题</Heading>
            <p>
              很多学习资料要么太碎，要么只停留在概念介绍。代码酷更像一套可以反复翻阅的技术笔记：每个主题按章节拆开，尽量把概念、语法、常见用法和实践场景放在一起，方便自学者按顺序阅读，也方便开发者在项目中快速查找。
            </p>

            <Heading as="h2">适合哪些读者</Heading>
            <ul>
              <li>正在入门 Python、Java、JavaScript、C/C++、Go、SQL 等语言的学习者。</li>
              <li>需要复习计算机网络、操作系统、数据库、数据结构与算法的学生和面试候选人。</li>
              <li>想快速查阅 Spring、Django、React、Docker、Kubernetes、Redis、Kafka 等技术主题的开发者。</li>
              <li>希望用中文材料建立技术地图，再继续阅读官方文档和工程资料的读者。</li>
            </ul>

            <Heading as="h2">内容维护</Heading>
            <p>
              本站内容由维护者持续整理、修订和发布。由于技术版本会变化，教程中可能出现过时描述或遗漏；如果你发现问题，欢迎通过
              {' '}<Link to="/contact">联系页面</Link>{' '}反馈。重要页面会优先修订，普通章节会在后续内容维护中逐步完善。
            </p>

            <Heading as="h2">更多信息</Heading>
            <p>
              你可以阅读<Link to="/editorial-policy">编辑说明</Link>了解内容处理流程，或查看<Link to="/privacy">隐私政策</Link>了解广告、统计与 Cookie 使用方式。
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
