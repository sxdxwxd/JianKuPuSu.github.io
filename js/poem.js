const poems = [
    {
        year: "1910年",
        title: "七绝·改诗赠父亲",
        content: "孩儿立志出乡关，学不成名誓不还。 埋骨何须桑梓地，人生无处不青山。",
        analysis: "这首诗是少年毛泽东走出乡关、奔向外面世界的宣言书，从中表明了他胸怀天下、志在四方的远大抱负。",
        audio: './scr/audio/七绝.mp3',
        bg: "1910年秋天，毛泽东离开家乡韶山，走向外面更广阔的世界。这是他人生历程中的第一个转折。怀着激动心情，临行前他写下这首诗，夹在父亲每天必看的帐簿里，以作告别。"
    },
    {
        year: "1925年",
        title: "沁园春·长沙",
        content: "独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？ 携来百侣曾游，忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。指点江山，激扬文字，粪土当年万户侯。曾记否，到中流击水，浪遏飞舟？",
        analysis: "该词通过对长沙秋景的描绘和对青年时代革命斗争生活的回忆，抒写出革命青年对国家命运的感慨和以天下为己任，蔑视反动统治者，改造旧中国的豪情壮志。全词在片语之间，融情入理，情景交融。",
        audio: './scr/audio/沁园春长沙.mp3',
        bg: "《沁园春·长沙》是毛泽东1925年晚秋所作。当时毛泽东离开故乡韶山，去广州主持农民运动讲习，途经长沙，重游了橘子洲。作者面对湘江上美丽动人的自然秋景，联想起当时的革命形势，写下了这首词。"
    },
    {
        year: "1935年",
        title: "七律·长征",
        content: "红军不怕远征难，万水千山只等闲。 五岭逶迤腾细浪，乌蒙磅礴走泥丸。 金沙水拍云崖暖，大渡桥横铁索寒。 更喜岷山千里雪，三军过后尽开颜。",
        analysis: "这是一首记叙二万五千里长征这一震惊全球的历史事件的革命史诗。它不仅以精炼之笔高度地概括了红军夺关杀敌的战斗历程，而且用革命的激情艺术地、形象地表现了红军战士不屈不挠、英勇顽强的大无畏气概和革命乐观主义精神。",
        audio: './scr/audio/七律长征.mp3',
        bg: "《七律·长征》写于1935年9月下旬，10月定稿。这首七律是作于红军战士越过岷山后，长征即将胜利结束前不久的途中。作为红军的领导人，毛泽东在经受了无数次考验后，如今，曙光在前，胜利在望，他心潮澎湃，满怀豪情地写下了这首壮丽的诗篇。"
    },
    {
        year: "1949年",
        title: "七律·人民解放军占领南京",
        content: "钟山风雨起苍黄，百万雄师过大江。 虎踞龙盘今胜昔，天翻地覆慨而慷。 宜将剩勇追穷寇，不可沽名学霸王。 天若有情天亦老，人间正道是沧桑。",
        analysis: "本诗风格豪放，笔意雄奇，在艺术上值得称道的有两点：一是叙事与议论、诗情与哲理的完美结合，是政治家、思想家、军事家与诗人的多方智慧相结合的艺术结晶；二是典故运用生动贴切、深刻到位，使历史典故和现实斗争结合得恰到好处。全诗运用了七个典故，这首诗也是毛泽东诗词中运用典故最为绵密的诗作之一。",
        audio: './scr/audio/七律人民解放军占领南京.mp3',
        bg:"1949年4月21日，毛泽东主席和朱德总司令发出《向全国进军的命令》，号令全军坚决、彻底、干净、全部地歼灭中国境内一切敢于抵抗的国民党反动派，解放全中国。中国人民解放军百万大军于4月23日占领国民党反动政府的“首都”南京。毛泽东同志在北平香山双清别墅得到占领南京的捷报，心情振奋，写下了这首诗。"
    },
    {
        year: "1954年",
        title: "浪淘沙·北戴河",
        content: "大雨落幽燕，白浪滔天，秦皇岛外打鱼船。一片汪洋都不见，知向谁边？ 往事越千年，魏武挥鞭，东临碣石有遗篇。萧瑟秋风今又是，换了人间。",
        analysis: "这首词的机杼在结尾。“换了人间”，是议论，是感慨，也是描写，极大地表现了诗人与时代的胜概豪情，而且意味深长，余韵悠远，将读者引向一个无限性的时空，去寻味那无穷的言外之意。",
        audio: './scr/audio/浪淘沙北戴河.mp3',
        bg: "新中国成立以后，提前完成第一个五年计划，国家实力增强，农村的合作化运动已有较大的进展，对工商业的改造也开始着手，建设一个工业化的强国的伟大目标也开始提出。1954年夏毛泽东到北戴河住过一些日子，在此填了这首词。"
    },
    {
        year: "1961年",
        title: "卜算子·咏梅",
        content: "风雨送春归，飞雪迎春到。已是悬崖百丈冰，犹有花枝俏。 俏也不争春，只把春来报。待到山花烂漫时，她在丛中笑。",
        analysis: "此词塑造了梅花俊美而坚韧不拔的形象，鼓励人们要有威武不屈的精神和革命到底的乐观主义精神。上阕主要写梅花傲寒开放的美好身姿，描绘梅花的美丽、积极与坚贞；下阕主要写梅花的精神风貌，表现了梅花坚强不屈、不畏寒冷，对春天充满信心和谦虚的风格。",
        audio: './scr/audio/卜算子咏梅.mp3',
        bg: "1960年6月，在罗马尼亚首都布加勒斯特召开共产党和工人党代表会议，苏共代表团和中共代表团发生激烈争论。会后，苏联撤走在华的全部专家，撕毁几百个协定和合同，停止供应重要设备。当时，以美国为首的西方国家一直对华经济封锁。苏联的严重措施，实际上断绝了中国从国外获取先进技术装备的正常渠道。与此同时，中国正处在三年困难时期，正经历着前所未有的严峻考验。在严重困难面前，毛泽东始终保持着中华民族大无畏的气概顶住了大国沙文主义的压カ。中国人民独立自主、自力更生的精神、赢得了普遍的赞誉。1961年12月，毛泽东在广州，为即将召开的中共中央扩大的工作会议做准备。他读了陆游的《卜算子·咏梅》，感到文辞好；但意志消沉，只可借其形，不可用其义，于是他再续一首与陆游的词风格不同的咏梅词，目的主要是鼓励大家蔑视困难，敢于战胜困难。此词最早发表于1963年12月人民文学出版社出版的《毛主席诗词》。"
    }
];

// 生成诗词和赏析的HTML内容
const poemsContainer = document.getElementById("poemsContainer");
poems.forEach((poem, index) => {
    // 将诗词内容按空格分割
    const poemContent = poem.content.split(" ").filter(word => word.trim() !== "");
    
   // 生成每个单词的 HTML，并每隔一个单词添加一个段落
    let poemContentHtml = "";
    poemContent.forEach(word => {
       poemContentHtml += `<p>${word}</p>`;
    });

    const poemAnalysis = poem.analysis.split(" ").filter(word => word.trim() !== "");
    
    // 生成每个单词的 HTML，并每隔一个单词添加一个段落
     let poemAnalysisHtml = "";
     poemAnalysis.forEach((word, index) => {
        poemAnalysisHtml += `<p>${word}</p>`;
        if (index % 2 === 1) {
            poemAnalysisHtml += "<br>";
        }
    });

    const poemHtml = `
        <div class="container ${index % 2 === 0 ? 'left' : 'right'}">
            <h2>${poem.year}</h2>
            <div class="poem poem-${index}">
                <h3>${poem.title}</h3>
                <p>${poemContentHtml}</p>
                <div class="button-container">
                    <button class="play-button" onclick="playAudio('audio${index}')">播放朗诵</button>
                    <audio id="audio${index}" src=${poem.audio}></audio>
                    <button class="pause-button" onclick="pauseAudio('audio${index}')">暂停播放</button>
                </div>
            </div>

            <button onclick="showPoemAnalysis('bg${index}')">创作背景</button>
            <button onclick="showPoemAnalysis('analysis${index}')">查看赏析</button>
          
        </div>
        <div id="analysis${index}" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal('analysis${index}')">&times;</span>
                <h2>${poem.title}赏析</h2>
                <p>${poem.analysis}</p>
            </div>
        </div>
        <div id="bg${index}" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal('bg${index}')">&times;</span>
                <h2>创作背景</h2>
                <p>${poem.bg}</p>
            </div>
        </div>
    `;
    poemsContainer.innerHTML += poemHtml;
});
