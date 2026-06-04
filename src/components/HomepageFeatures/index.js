import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link'; // Import Link for navigation
import styles from './styles.module.css';

function HomepageImage({src, alt}) {
    return (
        <img
            className={styles.featureImage}
            src={src}
            alt={alt}
            width={100}
            height={100}
            loading="lazy"
            decoding="async"
        />
    );
}

const fundamentalsList = [
    {
        title: '八股面试宝典',
        image: '/img/homepage-icons/fundamentals-logo-interview_logo.webp',
        url: "/docs/fundamental/interview",
        description: <>八股面试宝典是一份全面的技术面试指南，包括常见问题、算法题、系统设计、行为面试等内容。</>,
    },
    {
        title: '数据结构与算法',
        image: '/img/homepage-icons/fundamentals-logo-dsa_logo.webp',
        url: "/docs/fundamental/algorithm",
        description: <>数据结构与算法是计算机科学的基础，用于解决问题和优化性能，广泛应用于软件开发和系统设计。</>,
    },
    {
        title: '计算机网络',
        image: '/img/homepage-icons/fundamentals-logo-network_logo.webp',
        url: "/docs/fundamental/network",
        description: <>计算机网络是计算机系统之间相互连接的通信系统，用于数据传输、资源共享和远程访问。</>,
    },
    {
        title: '数据库与信息系统',
        image: '/img/homepage-icons/fundamentals-logo-database_logo.webp',
        url: "/docs/fundamental/database",
        description: <>数据库与信息系统是用于存储、管理和检索数据的软件系统，广泛应用于企业信息化和数据分析。</>,
    },
    {
        title: '操作系统',
        image: '/img/homepage-icons/fundamentals-logo-os_logo.webp',
        url: "/docs/fundamental/os",
        description: <>操作系统是计算机系统的核心软件，用于管理硬件资源、提供服务和运行应用程序。</>,
    },
    {
        title: '程序设计与验证 (Lean)',
        image: '/img/homepage-icons/fundamentals-logo-lean_logo.webp',
        url: "/docs/fundamental/lean",
        description: <>程序设计与验证是一种系统化的软件开发方法，用于构建高质量、高效率的软件系统。</>,
    },
    {
        title: 'PRISM概率模型检测器',
        image: '/img/homepage-icons/fundamentals-logo-prism_logo.webp',
        url: "/docs/fundamental/prism",
        description: <>PRISM是一种用于建模和分析随机系统的工具，广泛应用于概率模型检测、性能评估和可靠性分析。</>,
    },

];

const programmingLanguagesList = [
    {
        title: 'Python 3',
        image: '/img/homepage-icons/language-logo-python-logo-only.webp',
        url: "/docs/language/python",
        description: <>Python 3 是一种现代、简洁、易读的高级编程语言，支持面向对象、函数式和脚本编程，广泛应用于数据分析、人工智能、Web
            开发和自动化任务。</>,
    },
    {
        title: 'Java',
        image: '/img/homepage-icons/language-logo-java-logo.webp',
        url: "/docs/language/java",
        description: <>Java
            是一种面向对象的跨平台编程语言，具有强类型、安全性高、支持多线程和自动内存管理（GC）等特性，广泛用于企业级应用、移动开发（Android）和大数据处理。</>,
    },
    {
        title: 'C',
        image: '/img/homepage-icons/language-logo-c_logo.webp',
        url: "/docs/language/c",
        description: <>C
            是一种通用的过程式编程语言，具有高效的系统编程能力，广泛用于操作系统、嵌入式系统、编译器和游戏开发。</>,
    },
    {
        title: 'C++',
        image: '/img/homepage-icons/language-logo-cpp_logo.webp',
        url: "/docs/language/cpp",
        description: <>C++
            是一种高性能、通用的编程语言，支持面向对象、泛型和过程式编程，广泛应用于游戏开发、系统编程、嵌入式开发和高性能计算。</>,
    },
    {
        title: 'C#',
        image: '/img/homepage-icons/language-logo-csharp_logo.webp',
        url: "/docs/language/csharp",
        description: <>C# 是一种面向对象的编程语言，由微软开发，广泛用于 Windows 应用程序、游戏开发、Web
            开发和移动应用开发。</>,
    },
    {
        title: 'JavaScript',
        image: '/img/homepage-icons/language-logo-javascript-logo.webp',
        url: "/docs/language/javascript",
        description: <>JavaScript
            是一种高级、解释型、动态类型的编程语言，广泛用于网页开发、服务器端开发、移动应用开发和物联网应用开发。</>,
    },
    {
        title: 'TypeScript',
        image: '/img/homepage-icons/language-logo-typescript_logo.webp',
        url: "/docs/language/typescript",
        description: <>TypeScript 是 JavaScript 的超集，支持静态类型、面向对象和模块化编程，广泛用于大型 Web
            应用开发。</>,
    },
    {
        title: 'Go',
        image: '/img/homepage-icons/language-logo-go_logo.webp',
        url: "/docs/language/go",
        description: <>Go
            是一种静态类型、编译型、并发安全的编程语言，具有高效的并发编程模型和内置的网络编程库，广泛用于云原生应用开发。</>,
    },
    {
        title: 'Swift',
        image: '/img/homepage-icons/language-logo-swift_logo.webp',
        url: "/docs/language/swift",
        description: <>Swift 是一种现代、安全、快速的编程语言，广泛用于 iOS、macOS、watchOS 和 tvOS 应用开发。</>,
    },
    {
        title: 'PHP',
        image: '/img/homepage-icons/language-logo-php_logo.webp',
        url: "/docs/language/php",
        description: <>PHP 是一种通用的服务器端脚本语言，广泛用于 Web 开发和构建动态网页。</>,
    },
];

const webList = [
    {
        title: "微信小程序",
        image: '/img/homepage-icons/framework-logo-wechatminiprogram_logo.webp',
        url: "/docs/framework/wechatminiprogram",
        description: <>微信小程序是一种轻量级的应用程序，广泛用于微信生态系统和移动应用开发。</>,
    },
    {
        title: "CSS",
        image: '/img/homepage-icons/web-logo-css_logo.webp',
        url: "/docs/web/css",
        description: <>CSS 是一种用于定义网页样式的样式表语言，广泛用于网页设计和开发。</>,
    },
    {
        title: "HTML",
        image: '/img/homepage-icons/web-logo-html_logo.webp',
        url: "/docs/web/html",
        description: <>HTML 是一种用于创建网页的标记语言，广泛用于网页设计和开发。</>,
    },
    {
        title: 'JavaScript',
        image: '/img/homepage-icons/language-logo-javascript-logo.webp',
        url: "/docs/language/javascript",
        description: <>JavaScript
            是一种高级、解释型、动态类型的编程语言，广泛用于网页开发、服务器端开发、移动应用开发和物联网应用开发。</>,
    },
    {
        title: "Android (Java)",
        image: '/img/homepage-icons/framework-logo-android_logo.webp',
        url: "/docs/framework/android_java",
        description: <>Android 是一个开源的移动操作系统，广泛用于智能手机、平板电脑和可穿戴设备。</>,
    },
    {
        title: "Android (Kotlin)",
        image: '/img/homepage-icons/framework-logo-android_logo.webp',
        url: "/docs/framework/android_kotlin",
        description: <>Android 是一个开源的移动操作系统，广泛用于智能手机、平板电脑和可穿戴设备。</>,
    },
    {
        title: "Next.js",
        image: '/img/homepage-icons/framework-logo-nextjs_logo.webp',
        url: "/docs/framework/nextjs",
        description: <>Next.js 是一个基于 React 的 Web 开发框架，广泛用于构建静态网站和单页面应用。</>,
    },
    {
        title: "React",
        image: '/img/homepage-icons/framework-logo-react_logo.webp',
        url: "/docs/framework/react",
        description: <>React 是一个用于构建用户界面的 JavaScript 库，广泛用于单页面应用和大型 Web 应用开发。</>,
    },
    {
        title: "Vue.js",
        image: '/img/homepage-icons/framework-logo-vue_logo.webp',
        url: "/docs/framework/vue",
        description: <>Vue.js 是一个渐进式 JavaScript 框架，广泛用于构建交互式的 Web 界面。</>,
    },
];


const frameworkList = [
    {
        title: "Spring",
        image: '/img/homepage-icons/framework-logo-spring_logo.webp',
        url: "/docs/framework/spring",
        description: <>Spring 是一个轻量级的开源框架，广泛用于企业级 Java
            应用开发，提供了依赖注入、AOP、事务管理、数据访问等功能。</>,
    },
    {
        title: "Spring Cloud Alibaba",
        image: '/img/homepage-icons/framework-logo-spring_cloud_logo.webp',
        url: "/docs/framework/springcloud_alibaba",
        description: <>Spring Cloud Alibaba 是一个基于 Spring Cloud 的微服务框架，广泛用于分布式系统开发和云原生应用开发。</>,
    },
    {
        title: "Django",
        image: '/img/homepage-icons/framework-logo-django_logo.webp',
        url: "/docs/framework/django",
        description: <>Django 是一个开源的 Web 框架，广泛用于快速开发安全、可扩展的 Web 应用程序。</>,
    },
    {
        title: "Gin",
        image: '/img/homepage-icons/framework-logo-gin_logo.webp',
        url: "/docs/framework/gin",
        description: <>Gin 是一个轻量级的 Web 框架，基于 Go 语言，广泛用于构建高性能的 Web 服务。</>,
    },
];

const observabilityList = [
    {
        title: "Alloy",
        image: '/img/homepage-icons/observability-logo-alloy_logo.webp',
        url: "/docs/observability/alloy",
        description: <>Alloy 是一个开源的分布式追踪系统，广泛用于监控、调试和优化分布式系统。</>,
    },
    {
        title: "Prometheus",
        image: '/img/homepage-icons/observability-logo-prometheus_logo.webp',
        url: "/docs/observability/prometheus",
        description: <>Prometheus 是一个开源的监控系统，广泛用于收集、存储和查询时间序列数据。</>,
    },
    {
        title: "Loki",
        image: '/img/homepage-icons/observability-logo-loki_logo.webp',
        url: "/docs/observability/loki",
        description: <>Loki 是一个开源的日志聚合系统，广泛用于收集、存储和查询日志数据。</>,
    },
    {
        title: "Grafana",
        image: '/img/homepage-icons/observability-logo-grafana_logo.webp',
        url: "/docs/observability/grafana",
        description: <>Grafana 是一个开源的数据可视化工具，广泛用于监控、报警和分析数据。</>,
    },
    {
        title: "Jaeger",
        image: '/img/homepage-icons/observability-logo-jaeger_logo.webp',
        url: "/docs/observability/jaeger",
        description: <>Jaeger 是一个开源的分布式追踪系统，广泛用于监控、调试和优化分布式系统。</>,
    },
    {
        title: "OpenTelemetry",
        image: '/img/homepage-icons/observability-logo-opentelemetry_logo.webp',
        url: "/docs/observability/opentelemetry",
        description: <>OpenTelemetry 是一个开源的可观测性框架，提供了一套标准化的 API 和工具，用于收集、处理和导出遥测数据（traces, metrics, logs）。</>,
    },
    {
        title: "skywalking",
        image: '/img/homepage-icons/observability-logo-skywalking_logo.webp',
        url: "/docs/observability/skywalking",
        description: <>SkyWalking 是一个开源的分布式应用性能监控（APM）系统，广泛用于监控、追踪和诊断微服务、云原生和容器化应用。</>,
    },
    {
        title: "zipkin",
        image: '/img/homepage-icons/observability-logo-zipkin_logo.webp',
        url: "/docs/observability/zipkin",
        description: <>Zipkin 是一个开源的分布式追踪系统，帮助收集和查询分布式系统中的遥测数据，用于监控、调试和优化应用性能。</>,
    },

];


const data_ai_List = [
    {
        title: "R Language",
        image: '/img/homepage-icons/data-logo-r_logo.webp',
        url: "/docs/data/r",
        description: <>R 语言是一种用于数据分析和统计计算的编程语言，广泛用于数据可视化、机器学习和数据挖掘。</>,
    },
    {
        title: "Airflow",
        image: '/img/homepage-icons/data-logo-airflow_logo.webp',
        url: "/docs/data/airflow",
        description: <>Airflow 是一个开源的工作流自动化和调度系统，广泛用于数据处理、ETL 和任务调度。</>,
    },
    {
        title: "Drill",
        image: '/img/homepage-icons/data-logo-drill_logo.webp',
        url: "/docs/data/drill",
        description: <>Drill 是一个开源的分布式 SQL 查询引擎，广泛用于大数据查询和分析。</>,
    },
    {
        title: "Hadoop",
        image: '/img/homepage-icons/data-logo-hadoop_logo.webp',
        url: "/docs/data/hadoop",
        description: <>Hadoop 是一个开源的分布式计算框架，广泛用于大数据处理和分析。</>,
    },
    {
        title: "Spark",
        image: '/img/homepage-icons/data-logo-spark_logo.webp',
        url: "/docs/data/spark",
        description: <>Spark 是一个开源的分布式计算框架，广泛用于大数据处理和机器学习。</>,
    },
    {
        title: "Pandas",
        image: '/img/homepage-icons/library-logo-pandas_logo.webp',
        url: "/docs/data/pandas",
        description: <>Pandas 是一个开源的数据分析库，广泛用于数据处理、数据清洗和数据可视化。</>,
    },
    {
        title: "PyTorch",
        image: '/img/homepage-icons/library-logo-pytorch_logo.webp',
        url: "/docs/ai/pytorch",
        description: <>PyTorch 是一个开源的深度学习框架，广泛用于构建神经网络、训练模型和部署应用。</>,
    },
    {
        title: "TensorFlow",
        image: '/img/homepage-icons/library-logo-tensorflow_logo.webp',
        url: "/docs/ai/tensorflow",
        description: <>TensorFlow 是一个开源的机器学习框架，广泛用于构建神经网络、训练模型和部署应用。</>,
    },
];

const middlewareList = [
    {
        title: "Nginx",
        image: '/img/homepage-icons/middleware-logo-nginx_logo.webp',
        url: "/docs/middleware/nginx",
        description: <>Nginx 是一个高性能的 Web 服务器和反向代理服务器，广泛用于负载均衡、缓存和网关等场景。</>,
    },
    {
        title: "Redis",
        image: '/img/homepage-icons/middleware-logo-redis_logo.webp',
        url: "/docs/middleware/redis",
        description: <>Redis
            是一个高性能的键值存储系统，支持多种数据结构和持久化方式，广泛用于缓存、消息队列和会话管理等场景。</>,
    },
    {
        title: "Kafka",
        image: '/img/homepage-icons/middleware-logo-kafka_logo.webp',
        url: "/docs/middleware/kafka",
        description: <>Kafka 是一个高吞吐量的分布式消息系统，广泛用于日志收集、事件处理和流处理等场景。</>,
    },
    {
        title: "RocketMQ",
        image: '/img/homepage-icons/middleware-logo-rocketmq_logo.webp',
        url: "/docs/middleware/rocketmq",
        description: <>RocketMQ 是一个开源的分布式消息中间件，广泛用于异步通信、事件驱动和流处理等场景。</>,
    },
    {
        title: "RabbitMQ",
        image: '/img/homepage-icons/middleware-logo-rabbitmq_logo.webp',
        url: "/docs/middleware/rabbitmq",
        description: <>RabbitMQ 是一个开源的消息队列系统，广泛用于消息传递、事件驱动和任务队列等场景。</>,
    },
    {
        title: "Nacos",
        image: '/img/homepage-icons/middleware-logo-nacos_logo.webp',
        url: "/docs/middleware/nacos",
        description: <>Nacos 是一个动态服务发现、配置管理和服务管理平台，广泛用于微服务架构和云原生应用开发。</>,
    },
    {
        title: "Seata",
        image: '/img/homepage-icons/middleware-logo-seata_logo.webp',
        url: "/docs/middleware/seata",
        description: <>Seata 是一个开源的分布式事务解决方案，广泛用于微服务架构和分布式系统开发。</>,
    },
    {
        title: "Sentinel",
        image: '/img/homepage-icons/middleware-logo-sentinel_logo.webp',
        url: "/docs/middleware/sentinel",
        description: <>Sentinel 是一个轻量级的流量控制和熔断降级框架，广泛用于微服务架构和分布式系统开发。</>,
    },
    {
        title: "Zookeeper",
        image: '/img/homepage-icons/middleware-logo-zookeeper_logo.webp',
        url: "/docs/middleware/zookeeper",
        description: <>Zookeeper 是一个开源的分布式协调服务，广泛用于分布式应用、集群管理和配置中心等场景。</>,
    },

];

const databaseList = [
    {
        title: "SQL",
        image: '/img/homepage-icons/language-logo-sql_logo.webp',
        url: "/docs/database/sql",
        description: <>SQL 是一种结构化查询语言，用于数据库管理和数据操作，广泛用于关系型数据库（MySQL、PostgreSQL、SQL
            Server）。</>,
    },
    {
        title: "MySQL",
        image: '/img/homepage-icons/database-logo-mysql_logo.webp',
        url: "/docs/database/mysql",
        description: <>MySQL 是一个开源的关系型数据库管理系统，广泛用于 Web
            应用开发、数据分析和数据仓库。</>,
    },
    {
        title: "PostgreSQL",
        image: '/img/homepage-icons/database-logo-postgresql_logo.webp',
        url: "/docs/database/postgresql",
        description: <>PostgreSQL 是一个强大的开源对象关系型数据库系统，广泛用于复杂的数据处理和高性能应用。</>,
    },
    {
        title: "Elasticsearch",
        image: '/img/homepage-icons/database-logo-elasticsearch_logo.webp',
        url: "/docs/database/elasticsearch",
        description: <>Elasticsearch 是一个分布式的搜索和分析引擎，广泛用于全文搜索、日志分析和数据可视化。</>,
    },
    {
        title: "Cassandra",
        image: '/img/homepage-icons/database-logo-cassandra_logo.webp',
        url: "/docs/database/cassandra",
        description: <>Cassandra 是一个高性能的分布式 NoSQL 数据库，广泛用于大数据处理和实时数据分析。</>,
    },
    {
        title: "HBase",
        image: '/img/homepage-icons/database-logo-hbase_logo.webp',
        url: "/docs/database/hbase",
        description: <>HBase 是一个开源的分布式列式数据库，广泛用于大数据存储和实时查询。</>,
    },
    {
        title: "Hive",
        image: '/img/homepage-icons/database-logo-hive_logo.webp',
        url: "/docs/database/hive",
        description: <>Hive 是一个开源的数据仓库工具，广泛用于大数据分析和数据仓库。</>,
    },
];

const osList = [
    {
        title: "Ubuntu",
        image: '/img/homepage-icons/os-logo-ubuntu_logo.webp',
        url: "/docs/os/ubuntu",
        description: <>Ubuntu 是一个基于 Debian 的开源 Linux 操作系统，以稳定性、安全性和用户友好性著称，广泛用于服务器、云计算和桌面环境。</>
    },
    {
        title: "Debian",
        image: '/img/homepage-icons/os-logo-debian_logo.webp',
        url: "/docs/os/debian",
        description: <>Debian 是一个开源的 Linux 发行版，以稳定性、安全性和自由软件著称，广泛用于服务器、桌面环境和嵌入式设备。</>
    },
    {
        title: "CentOS",
        image: '/img/homepage-icons/os-logo-centos_logo.webp',
        url: "/docs/os/centos",
        description: <>CentOS 是一个基于 Red Hat Enterprise Linux 的开源 Linux
            发行版，以稳定性、安全性和企业级支持著称，广泛用于服务器和云计算。</>
    },
]

const devopsList = [
    {
        title: "Docker",
        image: '/img/homepage-icons/devops-logo-docker_logo.webp',
        url: "/docs/devops/docker",
        description: <>Docker 是一个开源的容器化平台，用于构建、打包、发布和运行应用程序，广泛用于微服务架构和持续集成部署。</>,
    },

    {
        title: "Kubernetes (k8s)",
        image: '/img/homepage-icons/devops-logo-kubernetes_logo.webp',
        url: "/docs/devops/kubernetes",
        description: <>Kubernetes
            是一个开源的容器编排引擎，用于自动化部署、扩展和管理容器化应用程序，广泛用于云原生应用开发。</>,
    },
    {
        title: "Git",
        image: '/img/homepage-icons/devops-logo-git_logo.webp',
        url: "/docs/devops/git",
        description: <>Kubernetes
            是一个开源的容器编排引擎，用于自动化部署、扩展和管理容器化应用程序，广泛用于云原生应用开发。</>,
    },
    {
        title: "Jenkins",
        image: '/img/homepage-icons/devops-logo-jenkins_logo.webp',
        url: "/docs/devops/jenkins",
        description: <>Jenkins 是一个开源的自动化服务器，用于构建、测试和部署软件项目，广泛用于持续集成和持续交付。</>,
    },

]

const iotList = [
    {
        title: "Arduino",
        image: '/img/homepage-icons/iot-logo-arduino_logo.webp',
        url: "/docs/iot/arduino",
        description: <>Arduino 是一个开源的硬件和软件平台，用于构建电子原型和交互式项目，广泛用于物联网应用开发。</>,
    },
    {
        title: "STM32",
        image: '/img/homepage-icons/iot-logo-stm32_logo.webp',
        url: "/docs/iot/stm32",
        description: <>STM32 是一种基于 ARM Cortex-M 内核的微控制器，广泛用于嵌入式系统开发和物联网应用开发。</>,
    },
    {
        title: "51 单片机",
        image: '/img/homepage-icons/iot-logo-51_logo.webp',
        url: "/docs/iot/51",
        description: <>51 单片机是一种基于 8051 内核的单片机，广泛用于嵌入式系统开发和物联网应用开发。</>,
    },

];


function IndexPageItem({image, title, description, url}) {
    return (
        <div className={clsx('col col--3')} style={{marginBottom: "1rem", marginTop: "1rem"}}>
            <Link to={url} className={styles.cardLink} style={{textDecoration: 'none'}}>
                <div className={clsx('card', styles.featureCard)}>
                    <div className={styles.icon_image}>
                        <HomepageImage src={image} alt={title} />
                    </div>
                    <div>
                        <div className="card__body text--center padding-horiz--md">
                            <Heading as="h3" className="index_page_item_title">{title}</Heading>
                            <p>{description}</p>
                        </div>
                        <div className="card__footer text--center">
                            <div className="button button--primary">
                                开始学习
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default function HomepageFeatures() {
    // // Define structured data
    // const combinedList = [
    //     ...programmingLanguagesList,
    //     ...frameworkList,
    //     ...data_ai_List,
    //     ...middlewareList,
    //     ...databaseList,
    //     ...devopsList,
    //     ...iotList
    // ];
    //
    // const structuredData = {
    //     "@context": "https://schema.org",
    //     "@type": "ItemList",
    //     "name": "Programming Languages, Frameworks, Libraries, Middleware",
    //     "description": "A collection of programming languages, frameworks, libraries, and middleware with descriptions and learning resources.",
    //     "itemListElement": combinedList.map((item, index) => ({
    //         "@type": "ListItem",
    //         "position": index + 1,
    //         "name": item.title,
    //         "url": `https://www.compilenrun.com${item.url}`,
    //         "description": item.description.props.children
    //     }))
    // };

    return (
        <section className={styles.features}>
            {/* Add the structured data component */}
            {/*<Head>*/}
            {/*    <script type="application/ld+json">*/}
            {/*        {JSON.stringify(structuredData)}*/}
            {/*    </script>*/}
            {/*</Head>*/}
            <div className="container">

                {/* Fundamentals Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>计算机科学基础知识</h2>
                </div>
                <div className="row">
                    {fundamentalsList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* Programming Languages Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>编程语言</h2>
                </div>
                <div className="row">
                    {programmingLanguagesList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* 前端开发 Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>前端开发</h2>
                </div>
                <div className="row">
                    {webList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* 后端开发 Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>后端开发</h2>
                </div>
                <div className="row">
                    {frameworkList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* 监控与分析 Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>监控与分析</h2>
                </div>
                <div className="row">
                    {observabilityList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>


                 {/*数据科学与人工智能 Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>数据科学与人工智能</h2>
                </div>
                <div className="row">
                    {data_ai_List.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* Middleware Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>中间件</h2>
                </div>
                <div className="row">
                    {middlewareList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                 {/*Database Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>数据库</h2>
                </div>
                <div className="row">
                    {databaseList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* OS Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>操作系统</h2>
                </div>
                <div className="row">
                    {osList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* DevOps Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>集成部署</h2>
                </div>
                <div className="row">
                    {devopsList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>
                 {/*IoT Section*/}
                <div style={{marginTop: "2rem"}}>
                    <h2>物联网 (IoT)</h2>
                </div>
                <div className="row">
                    {iotList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>
            </div>
            <br/>
        </section>
    );
}
