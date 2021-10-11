module.exports = {
    title: "springleo's blog",
    head: [
        ['meta', { 'http-equiv': 'cache-control', content: 'no-cache, no-store, must-revalidate' }],
        ['meta', { 'http-equiv': 'pragma', content: 'no-cache' }],
        ['meta', { 'http-equiv': 'expires', content: '0' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        [
            'script',
            {},
            "(function(h,o,t,j,a,r){\n                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n                h._hjSettings={hjid:1650620,hjsv:6};\n                a=o.getElementsByTagName('head')[0];\n                r=o.createElement('script');r.async=1;\n                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n                a.appendChild(r);\n            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"
        ]
    ],
    base: '/blogs/',
    plugins: [
        '@vuepress/medium-zoom',
        ['code-copy', true],
        'reading-progress',
        'flowchart',
        ['@vuepress/google-analytics', { ga: 'UA-154622307-1' }]
    ],
    theme: 'vuesax',
    themeConfig: {
        backToTop: true,
        sidebarDepth: 0,
        repo: 'https://github.com/lq782655835/blogs',
        docsRepo: 'https://github.com/lq782655835/blogs',
        docsDir: 'docs',
        docsBranch: 'master',
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/team-standard/0.standard-ai-summary' },
            {
                text: '工具',
                items: [
                    { text: 'yiai-cli脚手架', link: 'https://github.com/lq782655835/yiai-cli' },
                    {
                        text: '可视化布局工具',
                        link: 'https://github.com/lq782655835/vue-layout-preview'
                    },
                    {
                        text: '缓存管理工具',
                        link: 'https://github.com/lq782655835/cache-manage-js'
                    },
                    {
                        text: '自动生成blog目录工具',
                        link: 'https://github.com/lq782655835/node-vuepress-auto-read'
                    },
                    {
                        text: 'url自动生成TypeScript类型',
                        link: 'https://github.com/lq782655835/json2ts'
                    },
                    {
                        text: '批量生成模板代码工具',
                        link: 'https://github.com/lq782655835/auto-code'
                    },
                    {
                        text: 'svg转icon webpack插件',
                        link: 'https://github.com/lq782655835/svg-icon-webpack-plugin'
                    }
                ]
            },
            {
                text: '组件库',
                items: [
                    { text: 'yi-ui基础组件库', link: 'https://github.com/lq782655835/yi-ui' },
                    { text: 'vuele业务组件库', link: 'https://github.com/lq782655835/vuele' },
                    {
                        text: '基于el-table的配置化组件',
                        link: 'https://github.com/lq782655835/el-table-plus'
                    },
                    {
                        text: '基于el-form的配置化组件',
                        link: 'https://github.com/lq782655835/el-form-plus'
                    },
                    {
                        text: 'js api解耦dialog组件',
                        link: 'https://github.com/lq782655835/el-dialog-helper'
                    },
                    {
                        text: '常用工具函数库',
                        link: 'https://github.com/lq782655835/30-seconds-of-code'
                    }
                ]
            },
            {
                text: 'vuepress插件',
                items: [
                    {
                        text: 'vuepress Vue代码预览插件',
                        link: 'https://github.com/lq782655835/vuepress-plugin-demo-block'
                    },
                    {
                        text: 'vuepress element-ui扩展插件',
                        link: 'https://github.com/lq782655835/vuepress-plugin-element-ui'
                    },
                    {
                        text: 'vuepress sax主题插件',
                        link: 'https://github.com/lq782655835/vuepress-theme-vuesax'
                    }
                ]
            },
            {
                text: '工程模板',
                items: [
                    { text: 'vue', link: 'https://github.com/lq782655835/standard-vue-project' },
                    {
                        text: 'typescript',
                        link: 'https://github.com/lq782655835/standard-vue-typescript-project'
                    },
                    {
                        text: 'official-website',
                        link: 'https://github.com/lq782655835/official-website-template'
                    },
                    {
                        text: 'electron',
                        link: 'https://github.com/lq782655835/electron-vue-template'
                    },
                    { text: 'mpvue', link: 'https://github.com/lq782655835/mpvue-project' },
                    { text: 'tool', link: 'https://github.com/lq782655835/json2ts' }
                ]
            }
        ],
        sidebar: [
            {
                key: 'team-standard',
                title: '团队规范',
                collapsable: true,
                children: [
                    'team-standard/0.standard-ai-summary.md',
                    'team-standard/1.standard-ai-css.md',
                    'team-standard/1.standard-ai-git.md',
                    'team-standard/1.standard-ai-js.md',
                    'team-standard/1.standard-ai-vue.md',
                    'team-standard/1.standard-ai-vuetool.md',
                    'team-standard/clean-code-javascript.md',
                    'team-standard/recommend-code200.md',
                    'team-standard/recommend-css-font.md',
                    'team-standard/recommend-vue-api-order.md',
                    'team-standard/recommend-vue-component.md',
                    'team-standard/recommend-vue-project-structure.md',
                    'team-standard/recommend-vuerouter.md'
                ]
            },
            {
                key: 'project',
                title: 'Project',
                collapsable: true,
                children: [
                    'project/axios-usage-theory.md',
                    'project/css-layout-skill.md',
                    'project/deep-learn-term.md',
                    'project/grow-up-front.md',
                    'project/grow-up-life-it.md',
                    'project/markdown-it-code.md',
                    'project/minipack-code-analysis.md',
                    'project/postcss.md',
                    'project/project-electron-summary.md',
                    'project/project-h5-video-summary.md',
                    'project/puppeteer.md',
                    'project/refactor-your-js-code.md',
                    'project/rxjs-introduce.md',
                    'project/think-cli-official-website.md',
                    'project/tool-stylelint.md',
                    'project/ts-in-vue-project.md',
                    'project/ts-tsconfig.md',
                    'project/ts-vue-guide.md',
                    'project/ts-vue-shortcoming.md',
                    'project/vue-dialog-solution.md',
                    'project/vue-jsx.md',
                    'project/webpack4-1.module.md',
                    'project/webpack4-2.config-setting.md',
                    'project/webpack4-2.devServer.md',
                    'project/webpack4-3.x-to-4.md'
                ]
            },
            {
                key: 'js',
                title: 'JS',
                collapsable: true,
                children: [
                    'js/canvas-base.md',
                    'js/data-structure.md',
                    'js/dfs-bfs.md',
                    'js/different-for-in-for-of.md',
                    'js/es6-1.new-feature.md',
                    'js/es6-2.destruction.md',
                    'js/es6-3.object.md',
                    'js/es6-4.module.md',
                    'js/es6-5.class.md',
                    'js/es6-latest-feature.md',
                    'js/http-base-1.url.md',
                    'js/http-base-2.browser.md',
                    'js/http-cross-domain.md',
                    'js/http2.md',
                    'js/js-base-1.prototype.md',
                    'js/js-base-2.extend.md',
                    'js/js-base-3.event-loop.md',
                    'js/js-base-4.promise.md',
                    'js/js-design-pattern.md',
                    'js/js-polyfill.md',
                    'js/js-sort.md',
                    'js/regex.md',
                    'js/think-different-MVC-MVP-MVVM.md',
                    'js/v8-array-method.md',
                    'js/v8-array-sort.md'
                ]
            },
            {
                key: 'node',
                title: 'NodeJS',
                collapsable: true,
                children: [
                    'node/koa-compose-modal.md',
                    'node/nginx.md',
                    'node/node-code-connect.md',
                    'node/node-code-express.md',
                    'node/node-module.md',
                    'node/node-mongodb.md',
                    'node/node-usage-api-summary.md',
                    'node/node-usage-tool-package.md',
                    'node/node-vscode-debug.md',
                    'node/redis.md'
                ]
            },
            {
                key: 'vue',
                title: 'Vue',
                collapsable: true,
                children: [
                    'vue/diff-vue-vs-react.md',
                    'vue/vue-api-usage.md',
                    'vue/vue-code-0.frame.md',
                    'vue/vue-code-1.how-to-mount-vue.md',
                    'vue/vue-code-2.snabbdom.md',
                    'vue/vue-code-3.vdom.md',
                    'vue/vue-code-4.event.md',
                    'vue/vue-code-5.component.md',
                    'vue/vue-code-6.nextTick.md',
                    'vue/vue-code-7.inject-provide.md',
                    'vue/vue-code-8.parseHTML.md',
                    'vue/vue-code-9.reactive.md',
                    'vue/vue-code-91.v-model.md',
                    'vue/vue-code-vue-cli3-plugin.md',
                    'vue/vue-code-vue-loader.md',
                    'vue/vue3-code-1.design-thought.md',
                    'vue/vue3-code-1.rfcs.md',
                    'vue/vue3-code-2.reactive.md',
                    'vue/vue3-code-3.api-analysis.md',
                    'vue/vue3-code-4.why-proxy-faster.md',
                    'vue/vue3-code-5.core-thought.md'
                ]
            },
            {
                key: 'react',
                title: 'React',
                collapsable: true,
                children: [
                    'react/diff-vuex-redux.md',
                    'react/function-program.md',
                    'react/react-basic.md',
                    'react/react-code-1.mount.md',
                    'react/react-code-2.component.md',
                    'react/react-code-3.setState.md',
                    'react/react-component-best.md',
                    'react/react-eslint.md',
                    'react/react-native-1.environment-mac.md',
                    'react/react-native-2.debug-skill.md',
                    'react/react-redux-1.code-analysis.md',
                    'react/react-redux-actions.md',
                    'react/react-redux-saga.md'
                ]
            },
            {
                key: 'tools',
                title: '效率工具',
                collapsable: true,
                children: [
                    'tools/0.tool-summary.md',
                    'tools/c++.md',
                    'tools/charles-tool.md',
                    'tools/docker.md',
                    'tools/git-command.md',
                    'tools/npm script.md',
                    'tools/python-grammar.md',
                    'tools/python-special-grammar.md',
                    'tools/record-solution.md',
                    'tools/shell-vim.md',
                    'tools/vscode-plugin-develop.md',
                    'tools/vscode.md',
                    'tools/yarn-vs-npm.md'
                ]
            },
            {
                key: 'read-books',
                title: '读书笔记',
                collapsable: true,
                children: [
                    'read-books/0.how-to-improve-reading.md',
                    'read-books/book-agile-software.md',
                    'read-books/book-design-for-all.md',
                    'read-books/book-head-first-design-patterns.md',
                    'read-books/book-http-diagram.md',
                    'read-books/book-js-advance-design.md',
                    'read-books/book-read-books-overview.md',
                    'read-books/book-soft-skills.md',
                    'read-books/book-you-dont-know-javascript.md'
                ]
            }
        ],
        lastUpdated: '最后更新时间'
    }
}
