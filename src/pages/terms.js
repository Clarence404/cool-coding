import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './publisher.module.css';

export default function TermsPage() {
  return (
    <Layout
      title="使用条款"
      description="代码酷的内容使用、免责声明、外部链接、广告和联系说明。">
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <p className={styles.eyebrow}>Terms</p>
            <Heading as="h1">使用条款</Heading>
            <p className={styles.lead}>
              使用代码酷即表示你理解并接受以下说明。最后更新：2026 年 6 月 3 日。
            </p>

            <Heading as="h2">内容用途</Heading>
            <p>
              代码酷提供编程与计算机技术学习资料，适合自学、复习和项目查阅。本站内容不构成专业法律、财务、安全审计或生产系统上线建议。你在项目中使用示例代码或配置前，应结合自己的环境进行测试。
            </p>

            <Heading as="h2">准确性与更新</Heading>
            <p>
              我们会努力保持内容准确，但技术版本、依赖、工具行为和最佳实践会变化。本站不保证所有页面在任何时间都完全适用于最新版本。如果你发现错误，请通过<Link to="/contact">联系我们</Link>页面反馈。
            </p>

            <Heading as="h2">外部链接</Heading>
            <p>
              代码酷可能链接到 GitHub、官方文档、工具站点或其他第三方资源。外部网站由对应运营方负责，我们无法控制其内容、隐私政策或可用性。
            </p>

            <Heading as="h2">广告</Heading>
            <p>
              本站可能展示第三方广告。广告内容由广告服务和广告主提供，不代表代码酷对相关产品或服务的推荐。广告与数据处理说明请查看<Link to="/privacy">隐私政策</Link>。
            </p>

            <Heading as="h2">禁止行为</Heading>
            <ul>
              <li>不得通过自动化请求影响站点稳定运行。</li>
              <li>不得利用本站内容进行误导、侵权、恶意软件传播或其他违法行为。</li>
              <li>不得冒充代码酷或维护者发布虚假声明。</li>
            </ul>
          </article>
        </div>
      </main>
    </Layout>
  );
}
