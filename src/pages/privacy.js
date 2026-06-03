import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './publisher.module.css';

export default function PrivacyPage() {
  return (
    <Layout
      title="隐私政策"
      description="代码酷关于 Cookie、Google AdSense、统计服务、第三方广告和用户选择的隐私说明。">
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <p className={styles.eyebrow}>Privacy Policy</p>
            <Heading as="h1">隐私政策</Heading>
            <p className={styles.lead}>
              本页面说明代码酷在访问统计、广告展示和站点运行中可能涉及的数据处理方式。最后更新：2026 年 6 月 3 日。
            </p>

            <Heading as="h2">我们可能收集的信息</Heading>
            <p>
              当你访问代码酷时，浏览器、服务器、统计服务或广告服务可能记录常见的技术信息，例如访问页面、访问时间、设备与浏览器类型、来源页面、IP 地址、Cookie 或类似标识符。这些信息用于站点统计、问题排查、内容改进和广告展示。
            </p>

            <Heading as="h2">Google 广告 Cookie</Heading>
            <p>
              第三方供应商（包括 Google）会使用 Cookie 根据用户此前访问代码酷或其他网站的情况投放广告。Google 使用广告 Cookie 后，Google 及其合作伙伴可以根据用户访问本站或互联网上其他网站的情况展示广告。
            </p>
            <p>
              你可以访问 <a href="https://www.google.com/settings/ads">Google 广告设置</a> 选择退出个性化广告。你也可以访问 <a href="https://www.aboutads.info">aboutads.info</a> 了解部分第三方供应商的个性化广告退出方式。
            </p>

            <Heading as="h2">第三方服务</Heading>
            <p>
              本站可能使用 Google AdSense、Google Analytics、Baidu Analytics、搜索服务和托管相关服务。这些服务可能通过 Cookie、网络信标、IP 地址或其他标识符收集和处理信息。你可以阅读 Google 的说明了解
              {' '}<a href="https://policies.google.com/technologies/partner-sites">Google 如何使用合作伙伴网站或应用中的数据</a>。
            </p>

            <Heading as="h2">我们如何使用信息</Heading>
            <ul>
              <li>了解哪些教程更常被访问，从而安排内容维护。</li>
              <li>排查页面加载、搜索、链接或兼容性问题。</li>
              <li>展示、衡量和改进广告服务。</li>
              <li>防止滥用、垃圾请求或影响站点稳定性的访问行为。</li>
            </ul>

            <Heading as="h2">你的选择</Heading>
            <p>
              你可以在浏览器中删除或限制 Cookie，也可以使用浏览器隐私设置、广告偏好设置或第三方退出工具管理个性化广告。限制 Cookie 后，部分功能、统计或广告展示可能无法按预期工作。
            </p>

            <Heading as="h2">联系我们</Heading>
            <p>
              如果你对本隐私政策有疑问，请发送邮件到 <a href="mailto:feedback@echo.cool">feedback@echo.cool</a>。
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
