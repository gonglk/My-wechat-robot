import { PuppetPadlocal } from "wechaty-puppet-padlocal";
import { Contact, log, Message, ScanStatus, Wechaty, UrlLink } from "wechaty";


// 去掉注释，可以完全打开调试日志
// log.level("silly");


let car_list = ['丰田','大众','奥迪','奔驰','宝马','本田','保时捷','标志','别克','宾利','比亚迪','东风','道奇','福特','法拉利','菲亚特','哈弗','海格','捷豹','金杯','凯迪拉克','克莱斯勒','雷克萨斯','雷诺','林肯','路虎','领克','玛莎拉蒂','马自达','名爵','讴歌','起亚','日产','三菱','斯巴鲁','斯柯达','特斯拉','沃尔沃','现代','雪佛兰','雪铁龙','英菲尼迪','toyota','holden', 'ford', 'nissan', 'bmw', 'mazda', 'mercedes-benz', 'benz', 'mercedes', 'volkswagen', 'audi', 'kia', 'peugeot', 'hyundai', 'land rover', 'citroen', 'cadillac','dodge', 'fiat', 'geely', 'infiniti', 'isuzu', 'jaguar', 
'jeep', 'lexus', 'lotus', 'mini', 'mitsubishi','porsche', 'range rover', 'renault', 'skoda', 'subaru', 'suzuki', 'volvo', 'q7', 'q5', 'q3', '高尔夫','golf']
let time_list = ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021', '00年','00款','01年','01款','02年','02款','03年','03款','04年','04款', '05年','05款','06年','06款','07年','07款','08年','08款','09年','09款','10年','10款','11年','11款','12年','12款','13年','13款','14年','14款','15年','15款','16年','16款','17年','17款','18年','18款','19年','19款','20年','20款','21年','21款','my00','my01','my02','my03','my04','my05','my06','my07','my08','my09','my10','my11','my12','my13','my14','my15','my16','my17','my18','my19','my20','my21']




let old_data_zhaopin = {
    id: 213714,
  maintype: 1,
  main_type_name: '求职招聘',
  subtype: 2,
  sub_type_name: '招聘',
  nickname: '华隆超级市场-Hualong supermarket',
  title: '北区-Harrison-华隆超级市场',
  content: '北区-Harrison-华隆超级市场<br><br>Harrison亚超招聘收银员和理货员。<br><br>待遇优厚！员工专属福利！工作氛围愉快！欢迎您的加入！<br><br>交通便利：<br>门口有轻轨站和公交车站！<br>地下停车场有大量专属员工停车位！<br><br>超市地址：Unit 84 ，70 Nullarbor Avenue HARRISON ACT 2914 （Franklin Woolworths斜对角）<br><br>有意者请联系吴先生：<br>0402 426 568<br><br>',
  tel: '0402 426 568',
  weixin: '',
  clickCount: 141,
  openid: '1603072897296',
  headnav: 'https://app-upload.canberraport.com/user_post/UploadPublishImg20210101/1609499638_18795_1609499638.jpeg',
  date: '2021-08-19 09:56:02'
};
let old_data_zulin = {
    id: 213722,
  maintype: 1,
  main_type_name: '求职招聘',
  subtype: 2,
  sub_type_name: '招聘',
  nickname: '华隆超级市场-Hualong supermarket',
  title: '北区-Harrison-华隆超级市场',
  content: '北区-Harrison-华隆超级市场<br><br>Harrison亚超招聘收银员和理货员。<br><br>待遇优厚！员工专属福利！工作氛围愉快！欢迎您的加入！<br><br>交通便利：<br>门口有轻轨站和公交车站！<br>地下停车场有大量专属员工停车位！<br><br>超市地址：Unit 84 ，70 Nullarbor Avenue HARRISON ACT 2914 （Franklin Woolworths斜对角）<br><br>有意者请联系吴先生：<br>0402 426 568<br><br>',
  tel: '0402 426 568',
  weixin: '',
  clickCount: 141,
  openid: '1603072897296',
  headnav: 'https://app-upload.canberraport.com/user_post/UploadPublishImg20210101/1609499638_18795_1609499638.jpeg',
  date: '2021-08-19 09:56:02'
};
let old_data_car = {
    id: 213692,
  maintype: 1,
  main_type_name: '求职招聘',
  subtype: 2,
  sub_type_name: '招聘',
  nickname: '华隆超级市场-Hualong supermarket',
  title: '北区-Harrison-华隆超级市场',
  content: '北区-Harrison-华隆超级市场<br><br>Harrison亚超招聘收银员和理货员。<br><br>待遇优厚！员工专属福利！工作氛围愉快！欢迎您的加入！<br><br>交通便利：<br>门口有轻轨站和公交车站！<br>地下停车场有大量专属员工停车位！<br><br>超市地址：Unit 84 ，70 Nullarbor Avenue HARRISON ACT 2914 （Franklin Woolworths斜对角）<br><br>有意者请联系吴先生：<br>0402 426 568<br><br>',
  tel: '0402 426 568',
  weixin: '',
  clickCount: 141,
  openid: '1603072897296',
  headnav: 'https://app-upload.canberraport.com/user_post/UploadPublishImg20210101/1609499638_18795_1609499638.jpeg',
  date: '2021-08-19 09:56:02'
};
let old_data_busi = {
    id: 213794,
  maintype: 1,
  main_type_name: '求职招聘',
  subtype: 2,
  sub_type_name: '招聘',
  nickname: '华隆超级市场-Hualong supermarket',
  title: '北区-Harrison-华隆超级市场',
  content: '北区-Harrison-华隆超级市场<br><br>Harrison亚超招聘收银员和理货员。<br><br>待遇优厚！员工专属福利！工作氛围愉快！欢迎您的加入！<br><br>交通便利：<br>门口有轻轨站和公交车站！<br>地下停车场有大量专属员工停车位！<br><br>超市地址：Unit 84 ，70 Nullarbor Avenue HARRISON ACT 2914 （Franklin Woolworths斜对角）<br><br>有意者请联系吴先生：<br>0402 426 568<br><br>',
  tel: '0402 426 568',
  weixin: '',
  clickCount: 141,
  openid: '1603072897296',
  headnav: 'https://app-upload.canberraport.com/user_post/UploadPublishImg20210101/1609499638_18795_1609499638.jpeg',
  date: '2021-08-19 09:56:02'
};
let old_data_pinche = {
    id: 213695,
  maintype: 1,
  main_type_name: '求职招聘',
  subtype: 2,
  sub_type_name: '招聘',
  nickname: '华隆超级市场-Hualong supermarket',
  title: '北区-Harrison-华隆超级市场',
  content: '北区-Harrison-华隆超级市场<br><br>Harrison亚超招聘收银员和理货员。<br><br>待遇优厚！员工专属福利！工作氛围愉快！欢迎您的加入！<br><br>交通便利：<br>门口有轻轨站和公交车站！<br>地下停车场有大量专属员工停车位！<br><br>超市地址：Unit 84 ，70 Nullarbor Avenue HARRISON ACT 2914 （Franklin Woolworths斜对角）<br><br>有意者请联系吴先生：<br>0402 426 568<br><br>',
  tel: '0402 426 568',
  weixin: '',
  clickCount: 141,
  openid: '1603072897296',
  headnav: 'https://app-upload.canberraport.com/user_post/UploadPublishImg20210101/1609499638_18795_1609499638.jpeg',
  date: '2021-08-19 09:56:02'
};
let old_data_ershou = {
  id: 213720,
  maintype: 1,
  main_type_name: '求职招聘',
  subtype: 2,
  sub_type_name: '招聘',
  nickname: '华隆超级市场-Hualong supermarket',
  title: '北区-Harrison-华隆超级市场',
  content: '北区-Harrison-华隆超级市场<br><br>Harrison亚超招聘收银员和理货员。<br><br>待遇优厚！员工专属福利！工作氛围愉快！欢迎您的加入！<br><br>交通便利：<br>门口有轻轨站和公交车站！<br>地下停车场有大量专属员工停车位！<br><br>超市地址：Unit 84 ，70 Nullarbor Avenue HARRISON ACT 2914 （Franklin Woolworths斜对角）<br><br>有意者请联系吴先生：<br>0402 426 568<br><br>',
  tel: '0402 426 568',
  weixin: '',
  clickCount: 141,
  openid: '1603072897296',
  headnav: 'https://app-upload.canberraport.com/user_post/UploadPublishImg20210101/1609499638_18795_1609499638.jpeg',
  date: '2021-08-19 09:56:02'
};
let old_data_exchange = {
  id: 213675,
  maintype: 1,
  main_type_name: '求职招聘',
  subtype: 2,
  sub_type_name: '招聘',
  nickname: '华隆超级市场-Hualong supermarket',
  title: '北区-Harrison-华隆超级市场',
  content: '北区-Harrison-华隆超级市场<br><br>Harrison亚超招聘收银员和理货员。<br><br>待遇优厚！员工专属福利！工作氛围愉快！欢迎您的加入！<br><br>交通便利：<br>门口有轻轨站和公交车站！<br>地下停车场有大量专属员工停车位！<br><br>超市地址：Unit 84 ，70 Nullarbor Avenue HARRISON ACT 2914 （Franklin Woolworths斜对角）<br><br>有意者请联系吴先生：<br>0402 426 568<br><br>',
  tel: '0402 426 568',
  weixin: '',
  clickCount: 141,
  openid: '1603072897296',
  headnav: 'https://app-upload.canberraport.com/user_post/UploadPublishImg20210101/1609499638_18795_1609499638.jpeg',
  date: '2021-08-19 09:56:02'
};

let old_news = { 
    news_id: 25564,
    news_title: '截至31日10:00｜堪培拉今日【招聘】【租房】【转让】【卖车】信息汇总',
    news_category_id: 1,
    news_category_name: '堪闻',
    news_author: 'CBRLife堪生活',
    news_comments_count: 0,
    news_source: 1,
    news_source_url: '25495',
    news_type: null,
    news_logo_img_count: 1,
    news_copyrights: '自编辑整理：本文系本站编译和整理自英文来源，未获本站书面授权严禁转载！本站保留追究法律责任的权利。',
    setTop: 0,
    setTop_start: null,
    setTop_end: null
};


var roommsg_zhaopin;
var roommsg_zulin;
var roommsg_car;
var roommsg_busi;
var roommsg_pinche;
var roommsg_ershou;
var roommsg_exchange;

let zhaopin_ad = "【发帖指南】 \n \n 还在为找不到工作而焦虑吗？\n 还在为招不到人而头疼吗？\n 快来下载CBRLife App发帖，让我们为你解忧！\n 你的帖子会推送到全堪培拉的多个微信求职招聘群，\n 以及CBRLife的所有客服朋友圈，打造全方位覆盖！\n 精准投放，不浪费一分一秒！\n \n 点击即可下载app --> https://go.canberraport.com/app_download/index.html"
let zulin_ad = "【发帖指南】 \n \n 还在为找不到房子而焦虑吗？\n 还在为招不到租客而头疼吗？ \n 快来下载CBRLife App发帖，让我们为你解忧！\n 你的帖子会推送到全堪培拉的多个微信房屋租赁群，\n 以及CBRLife的所有客服朋友圈，打造全方位覆盖！\n 精准投放，不浪费一分一秒！\n \n 点击即可下载app --> https://go.canberraport.com/app_download/index.html"
let car_ad = "【发帖指南】 \n \n 还在为转手车子而焦虑吗？\n 还在为购置车子而烦恼吗？  \n 快来下载CBRLife App发帖，让我们为你解忧！\n 你的帖子会推送到全堪培拉的多个微信汽车交易群，\n 以及CBRLife的所有客服朋友圈，打造全方位覆盖！\n 精准投放，不浪费一分一秒！\n \n 点击即可下载app --> https://go.canberraport.com/app_download/index.html"
let busi_ad = "【发帖指南】 \n \n 还在为转手生意而焦虑吗？\n 还在苦苦寻觅理想的生意去接手吗？ \n 快来下载CBRLife App发帖，让我们为你解忧！\n 你的帖子会推送到全堪培拉的多个微信生意转让群，\n 以及CBRLife的所有客服朋友圈，打造全方位覆盖！\n 精准投放，不浪费一分一秒！\n \n 点击即可下载app --> https://go.canberraport.com/app_download/index.html"
let pinche_ad = "【发帖指南】 \n \n 你是否因为无车而被限制了出行？\n 你是否想利用自己的小车赚点外快？\n 快来下载CBRLife App发帖，让我们为你解忧！\n 你的帖子会推送到全堪培拉的多个微信拼车群，\n 以及CBRLife的所有客服朋友圈，打造全方位覆盖！\n 精准投放，不浪费一分一秒！\n \n 点击即可下载app --> https://go.canberraport.com/app_download/index.html"
let ershou_ad = "【发帖指南】 \n \n 你是否在默默寻觅一些特殊的物品呢？\n 你是否为日益增加的闲置物品而烦恼呢？\n 快来下载CBRLife App发帖，让我们为你解忧！\n 你的帖子会推送到全堪培拉的多个微信二手群，\n 以及CBRLife的所有客服朋友圈，打造全方位覆盖！\n 精准投放，不浪费一分一秒！\n \n 点击即可下载app --> https://go.canberraport.com/app_download/index.html"
let exchange_ad = "【发帖指南】 \n \n 还在为凑钱而焦虑吗？ \n 还在为兑换货币而头疼吗？\n 快来下载CBRLife App发帖，让我们为你解忧！\n 你的帖子会推送到全堪培拉的多个微信换汇群，\n 以及CBRLife的所有客服朋友圈，打造全方位覆盖！\n 精准投放，不浪费一分一秒！\n \n 点击即可下载app --> https://go.canberraport.com/app_download/index.html"


const fetch = require('node-fetch')
const cron = require("node-cron")

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

const puppet = new PuppetPadlocal({
    token: "puppet_padlocal_26c3cfe1b06446e5bf5229e1efdaadf1"
})

const bot = new Wechaty({
    name: "TestBot",
    puppet,
})

    .on("scan", (qrcode: string, status: ScanStatus) => {
        if (status === ScanStatus.Waiting && qrcode) {
            const qrcodeImageUrl = [
                'https://wechaty.js.org/qrcode/',
                encodeURIComponent(qrcode),
            ].join('')

            log.info("TestBot", `onScan: ${ScanStatus[status]}(${status}) - ${qrcodeImageUrl}`);

            require('qrcode-terminal').generate(qrcode, { small: true })  // show qrcode on console
        } else {
            log.info("TestBot", `onScan: ${ScanStatus[status]}(${status})`);
        }
    })

    .on("login", async (user: Contact) => {
        log.info("TestBot", `${user} login`);
        const roomList_zhaopin_1 = await bot.Room.find({id:"292451796@chatroom"});
        const roomList_zhaopin_2 = await bot.Room.find({id:"579490894@chatroom"});
        const roomList_zhaopin_3 = await bot.Room.find({id:"2446448612@chatroom"});
        const roomList_zhaopin_4 = await bot.Room.find({id:"22103058466@chatroom"});
        const roomList_zhaopin_5 = await bot.Room.find({id:"2460142747@chatroom"});
        const roomList_zhaopin_6 = await bot.Room.find({id:"66473393@chatroom"});
        const roomList_zhaopin_7 = await bot.Room.find({id:"27850016342@chatroom"});
        const roomList_pinche_1 = await bot.Room.find({id:"2464136516@chatroom"});
        const roomList_pinche_2 = await bot.Room.find({id:"6099969813@chatroom"});
        const roomList_pinche_3 = await bot.Room.find({id:"24243661065@chatroom"});
        const roomList_zulin_1 = await bot.Room.find({id:"2470134362@chatroom"});
        const roomList_zulin_2 = await bot.Room.find({id:"2441201256@chatroom"});
        const roomList_zulin_3 = await bot.Room.find({id:"2413369543@chatroom"});
        const roomList_zulin_4 = await bot.Room.find({id:"2474474773@chatroom"});
        const roomList_zulin_5 = await bot.Room.find({id:"2438412675@chatroom"});
        const roomList_zulin_6 = await bot.Room.find({id:"4682879193@chatroom"});
        const roomList_zulin_7 = await bot.Room.find({id:"21541458514@chatroom"});
        const roomList_zulin_8 = await bot.Room.find({id:"1859999@chatroom"});
        const roomList_zulin_9 = await bot.Room.find({id:"23012172349@chatroom"});
        const roomList_zulin_10 = await bot.Room.find({id:"403455290@chatroom"});
        const roomList_zulin_11 = await bot.Room.find({id:"2474563912@chatroom"});
        const roomList_zulin_12 = await bot.Room.find({id:"409452497@chatroom"});
        const roomList_zulin_13 = await bot.Room.find({id:"6267051841@chatroom"});
        const roomList_zulin_14 = await bot.Room.find({id:"2415144033@chatroom"});
        const roomList_zulin_15 = await bot.Room.find({id:"2417383708@chatroom"});
        const roomList_zulin_16 = await bot.Room.find({id:"2412318928@chatroom"});
        const roomList_zulin_17 = await bot.Room.find({id:"2463144537@chatroom"});
        const roomList_zulin_18 = await bot.Room.find({id:"2432144983@chatroom"});
        const roomList_zulin_19 = await bot.Room.find({id:"6249120503@chatroom"});
        const roomList_ershou_1 = await bot.Room.find({id:"36448088@chatroom"});
        const roomList_ershou_2 = await bot.Room.find({id:"2421195276@chatroom"});
        const roomList_ershou_3 = await bot.Room.find({id:"2460382827@chatroom"});
        const roomList_ershou_4 = await bot.Room.find({id:"2464570441@chatroom"});
        const roomList_ershou_5 = await bot.Room.find({id:"22246372031@chatroom"});
        const roomList_ershou_6 = await bot.Room.find({id:"21841881931@chatroom"});
        const roomList_ershou_7 = await bot.Room.find({id:"344576593@chatroom"});
        const roomList_ershou_8 = await bot.Room.find({id:"26380107196@chatroom"});
        const roomList_ershou_9 = await bot.Room.find({id:"2408156750@chatroom"});
        const roomList_ershou_10 = await bot.Room.find({id:"2466137732@chatroom"});
        const roomList_ershou_11 = await bot.Room.find({id:"410449686@chatroom"});
        const roomList_ershou_12 = await bot.Room.find({id:"380466188@chatroom"});
        const roomList_busi = await bot.Room.find({id:"437456196@chatroom"});
        const roomList_busi_2 = await bot.Room.find({id:"5914194113@chatroom"});
        const roomList_exchange_1 = await bot.Room.find({id:"2432465130@chatroom"});
        const roomList_exchange_3 = await bot.Room.find({id:"23868164749@chatroom"});
        const roomList_exchange_4 = await bot.Room.find({id:"2431501934@chatroom"});
        const roomList_car_1 = await bot.Room.find({id:"130452586@chatroom"});
        const roomList_car_2 = await bot.Room.find({id:"2432426243@chatroom"});
        const roomList_car_3 = await bot.Room.find({id:"304456996@chatroom"});
        const roomList_car_4 = await bot.Room.find({id:"6147029778@chatroom"});
        const roomList_car_5 = await bot.Room.find({id:"6107174197@chatroom"});
        const roomList_test = await bot.Room.find({id:"27257909530@chatroom"})


        await new Promise(r => setTimeout(r, 5000))
        
        cron.schedule("*/20 * * * * *", ()=>{
            let car = '';
            let time = '';
         fetch('https://api.canberraport.com/LocalService/postInfos/GetListFenlei', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category_id: 1, //求职招聘
                sub_type: 0, //全部消息
                area: 'fenlei',
                page: 1,
                keywords: '',
                zufang_canshu: [{
                    main_area: 'all',
                    sub_area: 'all',
                    house_type: 'all',
                    method_type: 'all'
                }],
                car_canshu: [{
                    car_brand: 'all'
                }]
            })
        })
        .then(res => res.json())
        .then(async res => {
            //返回的json
             //return_data_zhaopin = res.message[0]
             if(old_data_zhaopin.id != res.message[0].id){
                old_data_zhaopin = res.message[0];
                let clean_zhaopin = res.message[0].content.replace(res.message[0].weixin, " ").replace(res.message[0].tel, " ").replace(/(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}/, '').replace("<br>", "\n")
                roommsg_zhaopin = `【${res.message[0].title}】 \n ${clean_zhaopin} \n \n 获取联系方式： https://www.canberraport.com/#!/details/${res.message[0].id}/1/cbrlife \n \n 在CBRLife APP（安卓&IOS) 上发帖会被同时转发到多个本地群和朋友圈哦，堪培拉本地华人都能看到`;
                const urlLink_zhaopin = new UrlLink({
                    title: res.message[0].title,
                    description: clean_zhaopin,
                    thumbnailUrl: res.message[0].headnav,
                    url: `https://www.canberraport.com/#!/details/${res.message[0].id}/1/cbrlife`,
                  });
                await new Promise(r => setTimeout(r, 2000))

                await roomList_zhaopin_1.say(urlLink_zhaopin)
                await roomList_zhaopin_2.say(urlLink_zhaopin)
                await roomList_zhaopin_3.say(urlLink_zhaopin)
                await roomList_zhaopin_4.say(urlLink_zhaopin)
                await roomList_zhaopin_5.say(urlLink_zhaopin)
                await roomList_zhaopin_6.say(urlLink_zhaopin)
                await roomList_zhaopin_7.say(urlLink_zhaopin)
              }
          
              else if(old_data_zhaopin.id == res.message[0].id){
                const date = new Date()
                log.info(`${date} 招聘更新`)
              }
      }).catch(error => console.log(error));

       fetch('https://api.canberraport.com/LocalService/postInfos/GetListFenlei', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category_id: 2, //房屋租赁
                sub_type: 0, //全部消息
                area: 'fenlei',
                page: 1,
                keywords: '',
                zufang_canshu: [{
                    main_area: 'all',
                    sub_area: 'all',
                    house_type: 'all',
                    method_type: 'all'
                }],
                car_canshu: [{
                    car_brand: 'all'
                }]
            })
        })
        .then(res => res.json())
        .then(async res => {
            //返回的json
             //return_data_zhaopin = res.message[0]
             if(old_data_zulin.id != res.message[0].id){
                old_data_zulin = res.message[0];
                let clean_zulin = res.message[0].content.replace(res.message[0].weixin, " ").replace(res.message[0].tel, " ").replace(/(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}/, '').replace("<br>", "\n")
                roommsg_zulin = `【${res.message[0].title}】 \n ${clean_zulin} \n \n 获取联系方式： https://www.canberraport.com/#!/details/${res.message[0].id}/2/cbrlife \n \n 在CBRLife APP（安卓&IOS) 上发帖会被同时转发到多个本地群和朋友圈哦，堪培拉本地华人都能看到`;
                const urlLink_zulin = new UrlLink({
                    title: res.message[0].title,
                    description: clean_zulin,
                    thumbnailUrl: res.message[0].headnav,
                    url: `https://www.canberraport.com/#!/details/${res.message[0].id}/2/cbrlife`,
                  });
                await new Promise(r => setTimeout(r, 2000))
                await roomList_zulin_1.say(urlLink_zulin)
                await roomList_zulin_2.say(urlLink_zulin)
                await roomList_zulin_3.say(urlLink_zulin)
                await roomList_zulin_4.say(urlLink_zulin)
                await roomList_zulin_5.say(urlLink_zulin)
                await roomList_zulin_6.say(urlLink_zulin)
                await roomList_zulin_7.say(urlLink_zulin)
                await roomList_zulin_8.say(urlLink_zulin)
                await roomList_zulin_9.say(urlLink_zulin)
                await roomList_zulin_10.say(urlLink_zulin)
                await roomList_zulin_11.say(urlLink_zulin)
                await roomList_zulin_12.say(urlLink_zulin)
                await roomList_zulin_13.say(urlLink_zulin)
                await roomList_zulin_14.say(urlLink_zulin)
                await roomList_zulin_15.say(urlLink_zulin)
                await roomList_zulin_16.say(urlLink_zulin)
                await roomList_zulin_17.say(urlLink_zulin)
                await roomList_zulin_18.say(urlLink_zulin)
                await roomList_zulin_19.say(urlLink_zulin)
              }
          
              else if(old_data_zulin.id == res.message[0].id){
                const date = new Date()
                log.info(`${date} 租赁更新`)
              }
      }).catch(error => console.log(error));

       fetch('https://api.canberraport.com/LocalService/postInfos/GetListFenlei', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category_id: 3, //汽车交易
                sub_type: 0, //全部消息
                area: 'fenlei',
                page: 1,
                keywords: '',
                zufang_canshu: [{
                    main_area: 'all',
                    sub_area: 'all',
                    house_type: 'all',
                    method_type: 'all'
                }],
                car_canshu: [{
                    car_brand: 'all'
                }]
            })
        })
        .then(res => res.json())
        .then(async res => {
            //返回的json
             //return_data_zhaopin = res.message[0]
             if(old_data_car.id != res.message[0].id){
                old_data_car = res.message[0];
                if(res.message[0].subtype==2){
                    let clean_car = res.message[0].content.replace(res.message[0].weixin, " ").replace(res.message[0].tel, " ").replace(/(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}/, '').replace("<br>", "\n")
                    for(let i = 0; i<car_list.length;i++){
                        if(res.message[0].content.toLowerCase().includes(car_list[i])){
                            car = car_list[i]
                        }
                    }
                    for(let i = 0; i<time_list.length;i++){
                        if(res.message[0].content.toLowerCase().includes(time_list[i])){
                            time = time_list[i]
                        }
                    }
                    if(car==''&&time ==''){
                        time = res.message[0].content
                    }

                    const urlLink_car = new UrlLink({
                        title: `${time} ${car}`,
                        description: clean_car,
                        thumbnailUrl: res.message[0].headnav,
                        url: `https://www.canberraport.com/#!/details/${res.message[0].id}/3/cbrlife`,
                      });
                       await new Promise(r => setTimeout(r, 2000))
                       await roomList_car_1.say(urlLink_car)
                       await roomList_car_2.say(urlLink_car)
                       await roomList_car_3.say(urlLink_car)
                       await roomList_car_4.say(urlLink_car)
                       await roomList_car_5.say(urlLink_car)
                //    await roomList_test.say(urlLink_car)
                }

                else if(res.message[0].subtype==1){
                    let clean_car = res.message[0].content.replace(res.message[0].weixin, " ").replace(res.message[0].tel, " ").replace(/(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}/, '').replace("<br>", "\n")
                    const urlLink_car = new UrlLink({
                        title: clean_car,
                        description: '',
                        thumbnailUrl: res.message[0].headnav,
                        url: `https://www.canberraport.com/#!/details/${res.message[0].id}/3/cbrlife`,
                      });
                       await new Promise(r => setTimeout(r, 2000))
                       await roomList_car_1.say(urlLink_car)
                       await roomList_car_2.say(urlLink_car)
                       await roomList_car_3.say(urlLink_car)
                       await roomList_car_4.say(urlLink_car)
                       await roomList_car_5.say(urlLink_car)
                    // await roomList_test.say(urlLink_car)
                }

              }
          
              else if(old_data_car.id == res.message[0].id){
                const date = new Date()
                log.info(`${date} 汽车更新`)
              }
      }).catch(error => console.log(error));

       fetch('https://api.canberraport.com/LocalService/postInfos/GetListFenlei', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category_id: 10, //生意
                sub_type: 0, //全部消息
                area: 'fenlei',
                page: 1,
                keywords: '',
                zufang_canshu: [{
                    main_area: 'all',
                    sub_area: 'all',
                    house_type: 'all',
                    method_type: 'all'
                }],
                car_canshu: [{
                    car_brand: 'all'
                }]
            })
        })
        .then(res => res.json())
        .then(async res => {
            //返回的json
             //return_data_zhaopin = res.message[0]
             if(old_data_busi.id != res.message[0].id){
                old_data_busi = res.message[0];
                let clean_busi = res.message[0].content.replace(res.message[0].weixin, " ").replace(res.message[0].tel, " ").replace(/(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}/, '').replace("<br>", "\n")
                roommsg_busi = `【${res.message[0].title}】 \n ${clean_busi} \n \n 获取联系方式： https://www.canberraport.com/#!/details/${res.message[0].id}/10/cbrlife \n \n 在CBRLife APP（安卓&IOS) 上发帖会被同时转发到多个本地群和朋友圈哦，堪培拉本地华人都能看到`;
                const urlLink_busi = new UrlLink({
                    title: res.message[0].title,
                    description: clean_busi,
                    thumbnailUrl: res.message[0].headnav,
                    url: `https://www.canberraport.com/#!/details/${res.message[0].id}/10/cbrlife`,
                  });
                await new Promise(r => setTimeout(r, 2000))
                await roomList_busi.say(urlLink_busi)
                await roomList_busi_2.say(urlLink_busi)
              }
          
              else if(old_data_busi.id == res.message[0].id){
                const date = new Date()
                log.info(`${date} 生意更新`)
              }
      }).catch(error => console.log(error));

       fetch('https://api.canberraport.com/LocalService/postInfos/GetListFenlei', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category_id: 5, //拼车
                sub_type: 0, //全部消息
                area: 'fenlei',
                page: 1,
                keywords: '',
                zufang_canshu: [{
                    main_area: 'all',
                    sub_area: 'all',
                    house_type: 'all',
                    method_type: 'all'
                }],
                car_canshu: [{
                    car_brand: 'all'
                }]
            })
        })
        .then(res => res.json())
        .then(async res => {
            //返回的json
             //return_data_zhaopin = res.message[0]
             if(old_data_pinche.id != res.message[0].id){
                old_data_pinche = res.message[0];
                let clean_pinche = res.message[0].content.replace(res.message[0].weixin, " ").replace(res.message[0].tel, " ").replace(/(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}/, '').replace("<br>", "\n")
                roommsg_pinche = `【${res.message[0].title}】 \n ${clean_pinche} \n \n 获取联系方式： https://www.canberraport.com/#!/details/${res.message[0].id}/5/cbrlife \n \n 在CBRLife APP（安卓&IOS) 上发帖会被同时转发到多个本地群和朋友圈哦，堪培拉本地华人都能看到`;
                const urlLink_pinche = new UrlLink({
                    title: res.message[0].main_type_name,
                    description: clean_pinche,
                    thumbnailUrl: res.message[0].headnav,
                    url: `https://www.canberraport.com/#!/details/${res.message[0].id}/5/cbrlife`,
                  });
                await new Promise(r => setTimeout(r, 2000))
                await roomList_pinche_1.say(urlLink_pinche)
                await roomList_pinche_2.say(urlLink_pinche)
                await roomList_pinche_3.say(urlLink_pinche)

              }
          
              else if(old_data_pinche.id == res.message[0].id){
                const date = new Date()
                log.info(`${date} 拼车更新`)
              }
      }).catch(error => console.log(error));

       fetch('https://api.canberraport.com/LocalService/postInfos/GetListFenlei', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category_id: 6, //二手
                sub_type: 0, //全部消息
                area: 'fenlei',
                page: 1,
                keywords: '',
                zufang_canshu: [{
                    main_area: 'all',
                    sub_area: 'all',
                    house_type: 'all',
                    method_type: 'all'
                }],
                car_canshu: [{
                    car_brand: 'all'
                }]
            })
        })
        .then(res => res.json())
        .then(async res => {
            //返回的json
             //return_data_zhaopin = res.message[0]
             if(old_data_ershou.id != res.message[0].id){
                old_data_ershou = res.message[0];
                let clean_ershou = res.message[0].content.replace(res.message[0].weixin, " ").replace(res.message[0].tel, " ").replace(/(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}/, '').replace("<br>", "\n")
                roommsg_ershou = `【${res.message[0].title}】 \n ${clean_ershou} \n \n 获取联系方式： https://www.canberraport.com/#!/details/${res.message[0].id}/6/cbrlife \n \n 在CBRLife APP（安卓&IOS) 上发帖会被同时转发到多个本地群和朋友圈哦，堪培拉本地华人都能看到`;
                const urlLink_ershou = new UrlLink({
                    title: res.message[0].title,
                    description: clean_ershou,
                    thumbnailUrl: res.message[0].headnav,
                    url: `https://www.canberraport.com/#!/details/${res.message[0].id}/6/cbrlife`,
                  });
                await new Promise(r => setTimeout(r, 2000))
                await roomList_ershou_1.say(urlLink_ershou)
                await roomList_ershou_2.say(urlLink_ershou)
                await roomList_ershou_3.say(urlLink_ershou)
                await roomList_ershou_4.say(urlLink_ershou)
                await roomList_ershou_5.say(urlLink_ershou)
                await roomList_ershou_6.say(urlLink_ershou)
                await roomList_ershou_7.say(urlLink_ershou)
                await roomList_ershou_8.say(urlLink_ershou)
                await roomList_ershou_9.say(urlLink_ershou)
                await roomList_ershou_10.say(urlLink_ershou)
                await roomList_ershou_11.say(urlLink_ershou)
                await roomList_ershou_12.say(urlLink_ershou)
              }
          
              else if(old_data_ershou.id == res.message[0].id){
                const date = new Date()
                log.info(`${date} 二手更新`)
              }
      }).catch(error => console.log(error));

      fetch('https://api.canberraport.com/LocalService/postInfos/GetListFenlei', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category_id: 7, //二手
                sub_type: 0, //全部消息
                area: 'fenlei',
                page: 1,
                keywords: '',
                zufang_canshu: [{
                    main_area: 'all',
                    sub_area: 'all',
                    house_type: 'all',
                    method_type: 'all'
                }],
                car_canshu: [{
                    car_brand: 'all'
                }]
            })
        })
        .then(res => res.json())
        .then(async res => {
            //返回的json
             //return_data_zhaopin = res.message[0]
             if(old_data_exchange.id != res.message[0].id){
                old_data_exchange = res.message[0];
                let clean_exchange = res.message[0].content.replace(res.message[0].weixin, " ").replace(res.message[0].tel, " ").replace(/(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}/, '').replace("<br>", "\n")
                roommsg_ershou = `【${res.message[0].title}】 \n ${clean_exchange} \n \n 获取联系方式： https://www.canberraport.com/#!/details/${res.message[0].id}/7/cbrlife \n \n 在CBRLife APP（安卓&IOS) 上发帖会被同时转发到多个本地群和朋友圈哦，堪培拉本地华人都能看到`;
                const urlLink_exchange = new UrlLink({
                    title: res.message[0].title,
                    description: clean_exchange,
                    thumbnailUrl: res.message[0].headnav,
                    url: `https://www.canberraport.com/#!/details/${res.message[0].id}/7/cbrlife`,
                  });
                await new Promise(r => setTimeout(r, 2000))
                await roomList_exchange_1.say(urlLink_exchange)
                await roomList_exchange_3.say(urlLink_exchange)
                await roomList_exchange_4.say(urlLink_exchange)
              }
          
              else if(old_data_exchange.id == res.message[0].id){
                const date = new Date()
                log.info(`${date} 换汇更新`)
              }
      }).catch(error => console.log(error));
      
    })
    cron.schedule("*/30 * * * * *", async ()=>{


        await fetch('https://api.canberraport.com/News/NewsList/Get', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                news_category_id: 1, 
                page: 1,
                number:5,
            })
        })
        .then(res => res.json())
        .then(async res => {
            
            if(res.message[0].news_title.includes("信息汇总")&&old_news.news_id != res.message[0].news_id){
                const urlLink_news = new UrlLink({
                    title: res.message[0].news_title,
                    description: "今日信息汇总",
                    thumbnailUrl: "cbrlife.png",
                    url: `https://www.canberraport.com/?apicloud=yes#!/news_details/${res.message[0].news_id}/1`,
                });

                old_news = res.message[0];
                
                  await new Promise(r => setTimeout(r, 2000))

                  await roomList_zhaopin_1.say(urlLink_news)
                  await roomList_zhaopin_2.say(urlLink_news)
                  await roomList_zhaopin_3.say(urlLink_news)
                  await roomList_zhaopin_4.say(urlLink_news)
                  await roomList_zhaopin_5.say(urlLink_news)
                  await roomList_zhaopin_6.say(urlLink_news)
                  await roomList_zhaopin_7.say(urlLink_news)
                  await roomList_zulin_1.say(urlLink_news)
                  await roomList_zulin_2.say(urlLink_news)
                  await roomList_zulin_3.say(urlLink_news)
                  await roomList_zulin_4.say(urlLink_news)
                  await roomList_zulin_5.say(urlLink_news)
                  await roomList_zulin_6.say(urlLink_news)
                  await roomList_zulin_7.say(urlLink_news)
                  await roomList_zulin_8.say(urlLink_news)
                  await roomList_zulin_9.say(urlLink_news)
                  await roomList_zulin_10.say(urlLink_news)
                  await roomList_zulin_11.say(urlLink_news)
                  await roomList_zulin_12.say(urlLink_news)
                  await roomList_zulin_13.say(urlLink_news)
                  await roomList_zulin_14.say(urlLink_news)
                  await roomList_zulin_15.say(urlLink_news)
                  await roomList_zulin_16.say(urlLink_news)
                  await roomList_zulin_17.say(urlLink_news)
                  await roomList_zulin_18.say(urlLink_news)
                  await roomList_zulin_19.say(urlLink_news)
                  await roomList_car_1.say(urlLink_news)
                  await roomList_car_2.say(urlLink_news)
                  await roomList_car_3.say(urlLink_news)
                  await roomList_car_4.say(urlLink_news)
                  await roomList_car_5.say(urlLink_news)
                  await roomList_busi.say(urlLink_news)
                  await roomList_busi_2.say(urlLink_news)
                  await roomList_pinche_1.say(urlLink_news)
                  await roomList_pinche_2.say(urlLink_news)
                  await roomList_pinche_3.say(urlLink_news)
                  await roomList_ershou_1.say(urlLink_news)
                  await roomList_ershou_2.say(urlLink_news)
                  await roomList_ershou_3.say(urlLink_news)
                  await roomList_ershou_4.say(urlLink_news)
                  await roomList_ershou_5.say(urlLink_news)
                  await roomList_ershou_6.say(urlLink_news)
                  await roomList_ershou_7.say(urlLink_news)
                  await roomList_ershou_8.say(urlLink_news)
                  await roomList_ershou_9.say(urlLink_news)
                  await roomList_ershou_10.say(urlLink_news)
                  await roomList_ershou_11.say(urlLink_news)
                  await roomList_ershou_12.say(urlLink_news)
                  await roomList_exchange_1.say(urlLink_news)
                  await roomList_exchange_3.say(urlLink_news)
                  await roomList_exchange_4.say(urlLink_news)
                
            }

            else{
                const date = new Date()
                log.info(`${date} 新闻更新`)
            }
            

            
      }).catch(error => console.log(error));

    })



    cron.schedule("1 1 */6 * * *", async ()=>{
        await roomList_zhaopin_1.say(zhaopin_ad)
        await roomList_zhaopin_2.say(zhaopin_ad)
        await roomList_zhaopin_3.say(zhaopin_ad)
        await roomList_zhaopin_4.say(zhaopin_ad)
        await roomList_zhaopin_5.say(zhaopin_ad)
        await roomList_zhaopin_6.say(zhaopin_ad)
        await roomList_zhaopin_7.say(zhaopin_ad)
        await roomList_zulin_1.say(zulin_ad)
        await roomList_zulin_2.say(zulin_ad)
        await roomList_zulin_3.say(zulin_ad)
        await roomList_zulin_4.say(zulin_ad)
        await roomList_zulin_5.say(zulin_ad)
        await roomList_zulin_6.say(zulin_ad)
        await roomList_zulin_7.say(zulin_ad)
        await roomList_zulin_8.say(zulin_ad)
        await roomList_zulin_9.say(zulin_ad)
        await roomList_zulin_10.say(zulin_ad)
        await roomList_zulin_11.say(zulin_ad)
        await roomList_zulin_12.say(zulin_ad)
        await roomList_zulin_13.say(zulin_ad)
        await roomList_zulin_14.say(zulin_ad)
        await roomList_zulin_15.say(zulin_ad)
        await roomList_zulin_16.say(zulin_ad)
        await roomList_zulin_17.say(zulin_ad)
        await roomList_zulin_18.say(zulin_ad)
        await roomList_zulin_19.say(zulin_ad)
        await roomList_car_1.say(car_ad)
        await roomList_car_2.say(car_ad)
        await roomList_car_3.say(car_ad)
        await roomList_car_4.say(car_ad)
        await roomList_car_5.say(car_ad)
        await roomList_busi.say(busi_ad)
        await roomList_busi_2.say(busi_ad)
        await roomList_pinche_1.say(pinche_ad)
        await roomList_pinche_2.say(pinche_ad)
        await roomList_pinche_3.say(pinche_ad)
        await roomList_ershou_1.say(ershou_ad)
        await roomList_ershou_2.say(ershou_ad)
        await roomList_ershou_3.say(ershou_ad)
        await roomList_ershou_4.say(ershou_ad)
        await roomList_ershou_5.say(ershou_ad)
        await roomList_ershou_6.say(ershou_ad)
        await roomList_ershou_7.say(ershou_ad)
        await roomList_ershou_8.say(ershou_ad)
        await roomList_ershou_9.say(ershou_ad)
        await roomList_ershou_10.say(ershou_ad)
        await roomList_ershou_11.say(ershou_ad)
        await roomList_ershou_12.say(ershou_ad)
        await roomList_exchange_1.say(exchange_ad)
        await roomList_exchange_3.say(exchange_ad)
        await roomList_exchange_4.say(exchange_ad)

    })
        

    })

    .on("logout", (user: Contact, reason: string) => {
        log.info("TestBot", `${user} logout, reason: ${reason}`);
    })

    .on("message", async (message: Message) => {
        log.info("TestBot", `on message: ${message.toString()}`);

        // ding-dong bot
        // if (message.text().indexOf("ding") !== -1) {
        //     await message.talker().say(message.text().replace("ding", "dong"));
        // }
        // log.info(message.talker().title())

    })


    .on("error", (error) => {
        log.error("TestBot", 'on error: ', error.stack);
    })


bot.start().then(() => {
    log.info("TestBot", "started.");
});

