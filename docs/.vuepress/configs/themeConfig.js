module.exports = {

    repo: 'Roy-Kid/lammpscn',

    docsDir: 'docs',

    logo: {
        text: 'LAMMPS',
        subText: 'tutorial',
        image: '/icons/favicon.ico',
    },

    alert: [{
        id: '2020-7-8',
        title: '文档公告',
        content: '教程和翻译的工作仍在进行中。如果您对某一领域的模拟有所深入，恳请您向本站的<a href="https://github.com/Roy-Kid/lammpscn">repo</a>贡献翻译和教程'
    }],
    editLinks: true,


    locales: {
        '/': {

            selectText: '选择语言',
            label: '简体中文',
            editLinkText: '在 GitHub 上编辑此页',
            
            nav: require('../nav/zh.js'),
            sidebar: {
                '/zh/tutorial/': require('../sidebar/tutorial_zh')(),
                '/zh/command/': require('../sidebar/command_zh')(),
                '/zh/tools/': require('../sidebar/tools_zh')(),
                '/zh/column/': require('../sidebar/column_zh')(),
            },

        },

        '/en/': {

            selectText: 'Language',
            label: 'English',
            editLinkText: 'Edit on GitHub',



            nav: require('../nav/en.js'),
            sidebar: {
                '/en/tutorial/': require('../sidebar/tutorial_en')(),
                '/en/command/': require('../sidebar/command_en')(),
                '/en/tools/': require('../sidebar/tools_en')(),
                '/en/column/': require('../sidebar/column_en')(),
            },

        },

    }



}
