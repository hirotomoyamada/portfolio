// DOM読み込み後実行
window.addEventListener('DOMContentLoaded', ()=> {
  
  const keyName = 'visited';
  const keyValue = true;

  if (!sessionStorage.getItem(keyName)) {
    //sessionStorageにキーと値を追加
    sessionStorage.setItem(keyName, keyValue);

    //初回アクセス時処理
    window.addEventListener('load', load)
  } else {
    // 通常アクセス時処理
    stopLoadAnimation();
    already();
  }
  return false;
});

// ロード後実行
window.addEventListener('load', ()=> {
  createContent(historys_01);
  createContent(historys_02);
  createContent(historys_03);
  createContent(achievements);
  createContent(clients);
  createContent(favorites_01);
  createContent(favorites_02);

  createSpan();

  timelineAnimation();
})

// リサイズ時実行
window.addEventListener('resize', ()=> {
  setFillHeight();
});

// コンテンツの内容を格納
const historys_01 = {
  category: 'history_01',
  tag: {
    '2008年': [
      'アメリカ カリフォルニア州サンフランシスコから帰国後、兄弟ともに情報専門学校に進路を決め、ゲーム制作の道へ。',
    ],
     '2011年　”　情報専門学校デザイン科　”': [
      '17歳 ナガシマスパーランド「ポケモンサーチャーBW（ビーダブリュー）トレーニングセンター」のキャストとして評価を得て、エンターテインメントの道を考え始める。',
      '数々のプロモーションイベントのキャストを経験し、専門学校を中退することを決意する。',
    ],
    '2012年　”　情報専門学校デザイン科中退　”': [
      '18歳 プロモーション企画・制作会社に就職。',
      '東京ディズニーシー「ダッフィーのふわふわジャーニー」や「モンスターハンター頂上決戦 狩王決定戦」など、様々な企画に携わる。',
      'また、同会社にて飲食店フランチャイズを企画・開業し、コンセプト・メニューなどのデザインに携わる。',
    ],
    '2013年': [
      '19歳 「EXILE LIVE TOUR 2013 EXILE PRIDE」「TREASURE05X 2013 10th Anniversary」「TOKAI SUMMIT’13」など、ドームツアーや野外ロックフェスに携わる。',
    ]
  }
}
const historys_02 = {
  category: 'history_02',
  tag: {
    '2013年': [
      '19歳 東京都渋谷区 プロモーション企画・制作会社「株式会社ALL AROUND」を設立 代表取締役に就任。',
    ],
    '2015年': [
      '名古屋支社を設立。従業員数は8千人を超え、「マイナビバイト愛知県」にて月別応募者数 県内1位を記録する。',
      '公益社団法人名古屋青年会議所内から推薦を受け、最年少で入会する。',
    ],
    '2019年': [
      '「なにか、新しい発見をしたい」と度々思うようになり「株式会社ALL AROUND」代表取締役を辞任する。',
      '約1年間、ニート生活(ゲーム三昧)へ。',
    ],
    '2020年': [
      '弟がゲーム制作会社から独立、ゲーム制作会社を設立。',
      '兄弟の将来の夢「ゲームクリエイター」のことを思い出すようになる。',
      '前職のプロモーション企画・制作のノウハウを活かし、現代の広告塔であるWEBサイトやWEBアプリケーションに興味を持ち始める。',
    ]
  }
}
const historys_03 = {
  category: 'history_03',
  tag: {
    '2021年5月': [
      'WEBエンジニア・デザイナーになるべく勉強を始める。',
    ]
  }
}
const achievements = {
  category: 'achievement',
  tag: {
    '2008年': [
      'Halo 3 Japan Championship 個人・チーム戦 決勝大会進出',
      'ロストプラネット 雪賊日本一決定トーナメント 個人 決勝戦進出',
    ],
     '2009年': [
      '機動戦士ガンダム 戦場の絆ポータブル アンオフィシャル全国大会 優勝'
    ],
    '2010年': [
      '機動戦士ガンダム 戦場の絆 オフィシャル全国大会 決勝大会進出',
      'ロストプラネット2 最強雪賊決定戦 チーム戦 決勝戦進出',
    ],
    '2011年': [
      'モンスターハンターポータブル 3rd MHP3rd狩王決定戦決勝大会 決勝大会進出'
    ],
    '2019年': [
      'FINAL FANTASY XIV 希望の園エデン零式 覚醒編 2層/4層 ナイト aDPSランキング 世界1位',
      'FINAL FANTASY XIV 禁断の地エウレカ バルデシオンアーセナル 日本初突破',
    ],
  }
}
const clients = {
  category: 'client',
  value: [
    '愛知県',
    'アマゾンジャパン合同会社',
    'アリナミン製薬株式会社',
    'ウエルシア薬局株式会社',
    '株式会社ウェルネスフロンティア',
    '株式会社オリエンタルランド',
    '株式会社カプコン',
    '岐阜県',
    '株式会社Cygames',
    'サムスン電子株式会社',
    '株式会社セブン‐イレブン・ジャパン',
    'ソフトバンク株式会社',
    '株式会社タカラトミー',
    '中京テレビ放送株式会社',
    '株式会社帝国データバンク',
    '株式会社テレビ東京',
    '株式会社電通',
    '東京ディズニーリゾート',
    '東海市',
    '東海テレビ放送株式会社',
    '東邦ガス株式会社',
    '株式会社NTTドコモ',  
    '凸版印刷株式会社',
    '豊田市',
    'トヨタ自動車株式会社',
    '株式会社博報堂',
    'パナソニック株式会社',
    'P&Gプレステージ合同会社',
    '株式会社フジテレビジョン',
    'ペットライン株式会社',
    '株式会社ポケモン',
    '株式会社ナイアンティック',
    '長島観光開発株式会社',
    '長島スパーランドランド',
    '名古屋空港ビルディング',
    '名古屋市',
    '名古屋テレビ放送株式会社',
    '名古屋地下街株式会社',
    '日本ドリコム',
    '株式会社マイナビ',
    '株式会社メニコン',
    'レッドブル・ジャパン株式会社',
    'etc.'
  ]
}
const favorites_01 = {
  category: 'favorite_01',
  tag: {
    Film: [
      'アベンジャーズ - 2012 ~ 2919 -',
      'アバター  - 2009 -',
      'アルマゲドン - 1998 -',
      '硫黄島からの手紙 - 2006 -',
      'インターステラー - 2014 - ',
      'インセプション - 2010 -',
      'エヴァンゲリオン新劇場版 - 2007 ~ 2021 -',
      '男たちの大和 - 2005 -',
      'ゴジラ - 1954 ~ 2021 -',
      'ジュラシック・パーク - 1993 ~ 2001',
      'スター・ウォーズ - 1977 ~ 2019 -',
      'スタートレック - 1966 ~ 2020 -',
      '千と千尋の神隠し - 2001 -',
      'ターミネーター - 1985 ~ 2019 -',
      'タイタニック  - 1997 -',
      'TENET - 2020 -',
      'トランスフォーマー - 1989 ~ 2017 -',
      '日本沈没 - 2006 - ',
      'ハウルの動く城 - 2004 -',
      'バック・トゥ・ザ・フューチャー  - 1985 ~ 1990 -',
      'メン・イン・ブラック - 1997 ~ 2019 -',
      '黄泉がえり  - 2003 -',
      'ライオン・キング - 1994 -',
      'ロード・オブ・ザ・リング - 2001 ~ 2003 -',
      'ワイルド・スピード - 2001 ~ 2021 -',
    ],
    Anime: [
      'いちご100% - 2005 -',
      'ヴァイオレット・エヴァーガーデン - 2018 -',
      '宇宙戦艦ヤマト - 1974 -',
      '機動戦士ガンダム - 1979 ~ 2021 -',
      '新世紀エヴァンゲリオン - 1995 ~ 2021 -',
      'スラムダンク - 1993 ~ 1996',
      '創聖のアクエリオン - 2005 ~ 2015 -',
      'ソードアート・オンライン - 2012 ~ 2021 -',
      '天元突破グレンラガン - 2007 -',
      'ドラゴンボール - 1986 ~ 2018',
      '北斗の拳 - 1984 ~ 1988',
      'マクロスF - 2008 -',
    ],
    Drama: [
      'SUITS - 2012 ~ -',
      'プリズン・ブレイク - 2005 ~ 2017 -',
      'ロスト・イン・スペース - 2018 ~ -',
      'LOST - 2004 ~ 2010 -',
      'ロング・ラブレター〜漂流教室〜 - 2002 -',
    ],
  }
}
const favorites_02 = {
  category: 'favorite_02',
  tag: {
    Music: [
      'Avicii',
      'ウルフルズ',
      'Aerosmith',
      'WALK THE MOON',
      'Ed Sheeran',
      'Olly Murs',
      'Galantis',
      'kygo',
      'Queen',
      'サカナクション',
      'Journey',
      'Justin Timberlake',
      'スピッツ',
      'Zedd',
      '玉置浩二',
      'BUMP OF CHICKEN',
      'DEEN',
      'Van Halen',
      '平井大',
      'Backstreet Boys',
      'Bruno Mars',
      'Bon Jovi',
      'MichaelJackson',
      'Marron 5',
      '三浦大知',
    ],
    Novel: [
      '1Q84 - 2009 ~ 2010 -',
      '永遠を旅する者 千年の夢 - 2007 -',
      'コンビニ人間 - 2016 -',
      '王とサーカス - 2016 -',
      '52ヘルツのクジラたち - 2021 -',
      '鹿の王 - 2015 -',
      '下町ロケット - 2011 -',
      '戦場のコックたち - 2016 -',
      '博士の愛した数式 - 2004 -',
      '裸の王様 - 1957 -',
      '火花 - 2015 -',
      '夢をかなえるゾウ - 2007 ~ 2020 -',

    ],
    FashioBrand: [
      'adidas',
      'New Balance',
      'CHAOPANIC TYPY',
      'UNIQLO',
      'LONG CHAMP',
    ],
    Game: [
      'Gears of War - 2006 ~ 2019 -',
      '機動戦士ガンダム 戦場の絆',
      'キングダムハーツ - 2002 ~ 2019 -',
      'コール オブ デューティ - 2003 ~ 2020 -',
      'テイルズ オブ - 1995 ~ 2020 -',
      'ドラゴンクエスト - 1986 ~ 2017 -',
      'バトルフィールド - 2002 ~ 2018 -',
      'Final Fantasy - 1987 ~ 2021 -',
      'Halo - 2001 ~ 2010 -',
      'ポケットモンスター - 1996 ~ 2019 -',
      'ロストオデッセイ - 2008 -',
    ],
    Perfume: [
      'EGOISE - CHANEL -',
      'CK ONE - Calvin Klein -',
      'BLACK - BVLGARI -',
    ],
  }
}

// 上記配列をHTMLに反映 & アニメーション用span生成
const createContent = (target)=> {
  const category = target.category;
  const tags = target.tag
  const values = target.value
  const el = document.querySelector(`.${category}_contents`);

  if (tags == undefined) {
    values.forEach(value => {
      el.insertAdjacentHTML('beforeend',
        `<li class="${category}_content">
          <p class="${category}_value createSpan">${value}</p>
        </li>`
      )
    })
  } else {
    for (key in tags) {
      el.insertAdjacentHTML('beforeend',
        `<li class="${category}_content ${category}_${key}">
          <p class="${category}_tag tag createSpan">${key}</p>
        </li>`
      )
    }
    Object.keys(tags).forEach(key => {
      const target = document.querySelector(`.${category}_${key}`);
      tags[key].forEach(value => {
        target.insertAdjacentHTML('beforeend',
        `<p class="${category}_value createSpan">${value}</p>`
        )
      })
    })
  }
}

// アニメーション用span生成
const createSpan = () => {
  const el = document.querySelectorAll('.createSpan');

  el.forEach(value => {
    value.innerHTML = value.textContent.replace(/\S/g, "<span>$&</span>");
  })

  const span = document.querySelectorAll('.createSpan span');
  span.forEach((value, index) => {
    value.dataset.scrollNum = index;
  })
}

// 要素を表示
const showElement = (el)=> {
  const target = document.querySelector(el);
  target.style.opacity = 1;
}

// 要素を非表示
const hiddenElement = (el)=> {
  const target = document.querySelector(el);
  target.style.opacity = 0;
}

// 要素を表示
const blockElement = (el)=> {
  const target = document.querySelector(el);
  target.style.display = 'block';
}

// 要素を非表示
const noneElement = (el)=> {
  const target = document.querySelector(el);
  target.style.display = 'none';
}

// 要素のzindexを操作
const zIndex = (el, value)=> {
  const target = document.querySelector(el);
  target.style.zIndex = value;
}

// bodyのbgを変更
const bodyBgChange= (clr)=> {
  document.body.style.backgroundColor = clr;
}

// 100vhをCSSに反映
const setFillHeight = ()=> {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// 実行
setFillHeight();
