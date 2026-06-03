import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './publisher.module.css';

export default function EditorialPolicyPage() {
  return (
    <Layout
      title="编辑说明"
      description="代码酷的内容编写、审核、更新、纠错和广告独立性说明。">
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <p className={styles.eyebrow}>Editorial Policy</p>
            <Heading as="h1">编辑说明</Heading>
            <p className={styles.lead}>
              代码酷的目标不是制造看起来热闹的内容，而是把技术主题拆清楚。本站会优先维护结构完整、能帮助读者继续深入学习的教程。
            </p>

            <Heading as="h2">内容来源与写作方式</Heading>
            <p>
              教程内容主要来自维护者的技术整理、公开文档学习、工程经验归纳和示例代码编写。涉及具体技术时，我们会尽量使用清晰的中文解释，并鼓励读者继续阅读对应项目的官方文档。
            </p>
            <p>
              自动化工具可能用于辅助整理初稿、检查表达或生成草稿结构，但发布前会经过人工阅读和调整。我们不会把未经检查的自动生成文本当作最终教程发布。
            </p>

            <Heading as="h2">质量标准</Heading>
            <ul>
              <li>页面应该有明确主题，避免只有空泛定义。</li>
              <li>概念说明尽量配合语法、命令、示例或使用场景。</li>
              <li>同一主题下的章节要保持顺序，方便从基础读到进阶。</li>
              <li>发现明显错误、过时版本或失效链接后，会优先修订影响较大的页面。</li>
            </ul>

            <Heading as="h2">广告与编辑独立性</Heading>
            <p>
              代码酷可能使用 Google AdSense 等广告服务来支持站点运行。广告展示不会决定教程观点、技术排序或内容结论。广告与隐私相关说明见<Link to="/privacy">隐私政策</Link>。
            </p>

            <Heading as="h2">纠错流程</Heading>
            <p>
              读者可以通过<Link to="/contact">联系我们</Link>页面提交问题。维护者会根据问题影响范围、内容难度和时间安排处理；涉及安全、版权、隐私或明显误导的问题会优先查看。
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
