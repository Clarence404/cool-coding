import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './publisher.module.css';

export default function ContactPage() {
  return (
    <Layout
      title="联系我们"
      description="联系代码酷维护者，反馈教程错误、版权问题、隐私问题或合作事项。">
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <p className={styles.eyebrow}>Contact</p>
            <Heading as="h1">联系我们</Heading>
            <p className={styles.lead}>
              如果你发现教程错误、链接失效、版权问题，或者想提出改进建议，可以通过下面的方式联系维护者。
            </p>

            <Heading as="h2">邮箱</Heading>
            <p>
              反馈邮箱：<a href="mailto:feedback@echo.cool">feedback@echo.cool</a>
            </p>

            <Heading as="h2">反馈时请尽量包含</Heading>
            <ul>
              <li>出现问题的页面地址。</li>
              <li>你看到的错误内容或需要补充的上下文。</li>
              <li>如果是版权或引用问题，请说明涉及的材料和你的联系方式。</li>
              <li>如果是隐私、广告或数据处理问题，请说明你访问的大致时间和浏览器环境。</li>
            </ul>

            <Heading as="h2">GitHub</Heading>
            <p>
              代码酷也维护在 GitHub 上，适合提交技术内容修正、页面结构建议或代码层面的反馈：
              {' '}<a href="https://github.com/echo-cool-coding/cool-coding">echo-cool-coding/cool-coding</a>
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
