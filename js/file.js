// 初始化地图
var map = L.map('map', {
    center: [35.8617, 104.1954],
    zoom: 5,
    minZoom: 4,
    maxZoom: 20,
    maxBounds: [
        [15.775, 73.441], // 西南角坐标
        [53.560, 135.095] // 东北角坐标
    ]
});
// 添加地图图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
}).addTo(map);

// 地点坐标数据
const coordinates = {
    "环县（延安大礼堂）": [35.7611, 107.6447],
    "吴起": [37.9922, 108.1969],
    "志丹": [36.8229, 108.7682],
    "延安": [36.5965, 109.4891],
    "保定（西柏坡毛泽东旧居）": [38.8739, 115.4646],
    "北京": [39.9042, 116.4074],
    "秦皇岛北戴河": [39.8353, 119.5160],
    "徐州": [34.2058, 117.2841],
    "蚌埠": [32.9397, 117.3845],
    "南京": [32.0603, 118.7969],
    "上海": [31.2304, 121.4737],
    "嘉兴": [30.7450, 120.7555],
    "绍兴": [30.0303, 120.5802],
    "富春江": [29.6000, 119.9500],
    "古田镇": [26.5800, 116.6333],
    "大柏地": [26.8700, 116.6500],
    "井冈山": [26.5800, 114.1700],
    "韶山": [27.9100, 112.5200],
    "长沙": [28.2282, 112.9388],
    "武汉": [30.5928, 114.3055]
};

// 线路数据
const routes = [
    {
        route: "环县-吴起-志丹-延安",
        stops: [
            { location: "环县（延安大礼堂）", poems: [], img: "img/huanxian.jpg", description: "环县大礼堂是毛泽东曾经居住和工作的地方。" },
            { location: "吴起", poems: ["24六言诗·给彭德怀同志"], img: "img/wuqi.jpg", description: "吴起是毛泽东长征的落脚点之一。" },
            { location: "志丹", poems: ["26临江仙·给丁玲同志", "27五律·挽戴安澜将军"], img: "img/zhidan.jpg", description: "志丹是革命根据地的重要城市。" },
            { location: "延安", poems: ["延安毛泽东旧居"], img: "img/yanan.jpg", description: "延安是中国革命的圣地。" }
        ]
    },
    {
        route: "保定-北京-秦皇岛北戴河",
        stops: [
            { location: "保定（西柏坡毛泽东旧居）", poems: [], img: "img/baoding.jpg", description: "西柏坡是毛泽东指挥解放战争的地方。" },
            { location: "北京", poems: ["54卜算子·咏梅", "58七律·吊罗荣桓同志", "62念奴娇·鸟儿问答"], img: "img/beijing.jpg", description: "北京是中华人民共和国的首都。" },
            { location: "秦皇岛北戴河", poems: ["35浪淘沙·北戴河"], img: "img/beidaihe.jpg", description: "北戴河是著名的避暑胜地。" }
        ]
    },
    {
        route: "徐州-蚌埠-南京",
        stops: [
            { location: "徐州", poems: ["59贺新郎·读史"] },
            { location: "蚌埠", poems: [] },
            { location: "南京", poems: ["31七律·人民解放军占领南京"] }
        ]
    },
    {
        route: "上海-嘉兴-绍兴-富春江",
        stops: [
            { location: "上海", poems: ["55七律·冬云 ", "57杂言诗·八连颂"], img: "./scr/travel/11.jpg",description: "中共一大,上海毛泽东旧居位于茂名北路120弄7号（原慕尔鸣路甲秀里318号），是一幢石库门房子，有天井、客堂、前楼和厢房等。1924年毛泽东来沪，除继续担任中共中央局秘书、协助陈独秀处理中共中央的日常工作外，还参与领导国民党上海执行部的工作，为维护国共合作作出了重要贡献。当年的6月至12月，毛泽东同夫人杨开慧，两个孩子毛岸英、毛岸青以及岳母向振熙老人一家五口寓居于此。甲秀里是毛泽东在上海居住时间最长的一处。《七律·冬云》雪压冬云白絮飞，万花纷谢一时稀。高天滚滚寒流急，大地微微暖气吹。独有英雄驱虎豹，更无豪杰怕熊罴。梅花欢喜漫天雪，冻死苍蝇未足奇。1962年12月26日"  },
            { location: "嘉兴", poems: ["42七绝·观潮"] },
            { location: "绍兴", poems: ["50七绝二首·纪念鲁迅八十寿辰"] },
            { location: "富春江", poems: ["36五律·看山", "37七绝·莫干山", "38七绝·五云山", "56七律·和郭沫若同志"] }
        ]
    },
    {
        route: "古田镇-大柏地-井冈山",
        stops: [
            { location: "古田镇", poems: ["10清平乐·蒋桂战争", "11采桑子·重阳", "12如梦令·元旦"] },
            { location: "大柏地", poems: ["17菩萨蛮·大柏地", "18清平乐·会昌"] },
            { location: "井冈山", poems: ["9西江月·井冈山", "60水调歌头·重上井冈山", "61念奴娇·井冈山"] }
        ]
    },
    {
        route: "韶山-长沙-武汉",
        stops: [
            { location: "韶山", poems: ["1七绝·改诗赠父亲", "46七律·到韶山"] },
            { location: "长沙", poems: [] },
            { location: "武汉", poems: ["7菩萨蛮·黄鹤楼", "40水调歌头·游泳"] }
        ]
    }
];


let currentRouteIndex = 0;
let markers = [];
let polyline = null;

// 添加线路和节点到地图
// 添加线路和节点到地图
function displayRoute(routeIndex) {
    // 清除现有标记和线路
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    if (polyline) {
        map.removeLayer(polyline);
    }

    const route = routes[routeIndex];
    const bounds = [];
    const latlngs = [];

    route.stops.forEach(stop => {
        const marker = L.marker(coordinates[stop.location]).addTo(map);
        marker.on('click', () => {
            showStopInfo(stop);
            map.setView(coordinates[stop.location], 10); // 点击时放大到该地标
        });
        markers.push(marker);
        bounds.push(coordinates[stop.location]);
        latlngs.push(coordinates[stop.location]);
    });

    // 创建红色发光线条
    polyline = L.polyline(latlngs, {
        color: 'red',
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round',
        className: 'glowing-line'
    }).addTo(map);

    // 调整地图视野到新路线
    if (bounds.length > 0) {
        const routeBounds = L.latLngBounds(bounds);
        map.fitBounds(routeBounds);
    }
}

// 显示节点信息
function showStopInfo(stop) {
    document.getElementById('info-title').innerText = stop.location;
    document.getElementById('info-poem').innerText = stop.poems.length > 0 ? stop.poems.join(', ') : '没有诗词';
    document.getElementById('info-img').src = stop.img;
    document.getElementById('info-description').innerText = stop.description;
    document.getElementById('info-box').style.display = 'block';
    // 保存当前音频路径
    window.currentAudio = stop.audio || '';
}

// 播放语音
function playAudio1() {
    if (window.currentAudio) {
        const audio = new Audio(window.currentAudio);
        audio.play();
    } else {
        alert("没有音频文件可播放");
    }
}

// 切换路线
function switchRoute() {
    currentRouteIndex = (currentRouteIndex + 1) % routes.length;
    displayRoute(currentRouteIndex);
}

// 初始化显示第一条路线
displayRoute(currentRouteIndex);

// 绑定按钮事件
document.getElementById('switch-route').addEventListener('click', switchRoute);


