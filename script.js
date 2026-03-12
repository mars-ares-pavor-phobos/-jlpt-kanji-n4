"use strict";

const kanjiData = [
  {
    char: "不",
    onyomi: "フ, ブ",
    kunyomi: "-",
    meanings: {
      ru: "отрицание, не-",
      uz: "inkor, emaslik",
    },
    words: [
      {
        kanji: "不便",
        kana: "ふべん",
        mean_ru: "неудобный",
        mean_uz: "noqulay",
      },
      {
        kanji: "不安",
        kana: "ふあん",
        mean_ru: "тревога, беспокойство",
        mean_uz: "xavotir",
      },
      {
        kanji: "不足",
        kana: "ふそく",
        mean_ru: "недостаток, нехватка",
        mean_uz: "yetishmovchilik",
      },
    ],
    sentence: {
      jp: "このアプリは便利ですが、インターネットがないと使えないので不便です。",
      rubyData: [
        {
          text: "このアプリは",
        },
        {
          kanji: "便利",
          reading: "べんり",
        },
        {
          text: "ですが、インターネットがないと",
        },
        {
          kanji: "使",
          reading: "つか",
        },
        {
          text: "えないので",
        },
        {
          kanji: "不便",
          reading: "ふべん",
        },
        {
          text: "です。",
        },
      ],
      translation: {
        ru: "Это приложение удобное, но так как без интернета оно не работает, это доставляет неудобства.",
        uz: "Bu ilova qulay, lekin internetsiz ishlatib bo'lmagani uchun noqulaylik tug'diradi.",
      },
      grammarPoint: {
        ru: "～ので мягко и объективно объясняет причину. В отличие от резкого «から», эта форма звучит вежливо и естественно для повседневных объяснений на работе или в сервисе. <ruby>使<rt>つか</rt></ruby>えないので = «так как невозможно использовать».",
        uz: "～ので sababni yumshoq va xolis tushuntirish uchun ishlatiladi. Ish joyida yoki xizmat ko'rsatishda holatni tushuntirish uchun juda mos. <ruby>使<rt>つか</rt></ruby>えないので = «ishlatib bo'lmagani sababli».",
      },
    },
  },
  {
    char: "世",
    onyomi: "セイ, セ",
    kunyomi: "よ",
    meanings: {
      ru: "мир, общество",
      uz: "dunyo, jamiyat",
    },
    words: [
      {
        kanji: "世界",
        kana: "せかい",
        mean_ru: "мир (планета)",
        mean_uz: "dunyo, olam",
      },
      {
        kanji: "世話",
        kana: "せわ",
        mean_ru: "забота, уход",
        mean_uz: "g'amxo'rlik",
      },
      {
        kanji: "世の中",
        kana: "よのなか",
        mean_ru: "общество, современный мир",
        mean_uz: "jamiyat, hozirgi zamon",
      },
    ],
    sentence: {
      jp: "日本にいる間、田中さんには本当にお世話になりました。",
      rubyData: [
        {
          kanji: "日本",
          reading: "にほん",
        },
        {
          text: "にいる",
        },
        {
          kanji: "間",
          reading: "あいだ",
        },
        {
          text: "、",
        },
        {
          kanji: "田中",
          reading: "たなか",
        },
        {
          text: "さんには",
        },
        {
          kanji: "本当",
          reading: "ほんとう",
        },
        {
          text: "にお",
        },
        {
          kanji: "世話",
          reading: "せわ",
        },
        {
          text: "になりました。",
        },
      ],
      translation: {
        ru: "Во время моего пребывания в Японии господин Танака очень обо мне позаботился.",
        uz: "Yaponiyada bo'lgan vaqtimda Tanaka san menga juda katta g'amxo'rlik qildi.",
      },
      grammarPoint: {
        ru: "«お世話になりました» — важнейшая фраза благодарности. Так говорят, когда прощаются с коллегами, выезжают из отеля или благодарят за помощь в течение долгого времени.",
        uz: "«お世話になりました» — minnatdorchilik bildirishning muhim iborasi. Hamkasblar bilan xayrlashganda yoki uzoq vaqt yordam bergan insonlarga nisbatan aytiladi.",
      },
    },
  },
  {
    char: "主",
    onyomi: "シュ",
    kunyomi: "ぬし, おも",
    meanings: {
      ru: "главный, хозяин",
      uz: "asosiy, xo'jayin",
    },
    words: [
      {
        kanji: "主人",
        kana: "しゅじん",
        mean_ru: "муж, хозяин",
        mean_uz: "er, xo'jayin",
      },
      {
        kanji: "主な",
        kana: "おもな",
        mean_ru: "главный, основной",
        mean_uz: "asosiy",
      },
      {
        kanji: "持ち主",
        kana: "もちぬし",
        mean_ru: "владелец",
        mean_uz: "ega, mulkdor",
      },
    ],
    sentence: {
      jp: "このカバンの持ち主が見つからないので、交番に届けましょう。",
      rubyData: [
        {
          text: "このカバンの",
        },
        {
          kanji: "持",
          reading: "も",
        },
        {
          text: "ち",
        },
        {
          kanji: "主",
          reading: "ぬし",
        },
        {
          text: "が",
        },
        {
          kanji: "見",
          reading: "み",
        },
        {
          text: "つからないので、",
        },
        {
          kanji: "交番",
          reading: "こうばん",
        },
        {
          text: "に",
        },
        {
          kanji: "届",
          reading: "とど",
        },
        {
          text: "けましょう。",
        },
      ],
      translation: {
        ru: "Так как владелец этой сумки не находится, давайте отнесем её в полицейский участок.",
        uz: "Bu sumkaning egasi topilmayapti, shuning uchun uni politsiya uchastkasiga topshiraylik.",
      },
      grammarPoint: {
        ru: "～ましょう — форма приглашения к совместному действию или принятия решения. В таких ситуациях она звучит как конструктивное предложение: <ruby>届<rt>とど</rt></ruby>けましょう = «давайте отнесем / заявим».",
        uz: "～ましょう — birgalikda harakat qilishga chorlash yoki qaror qabul qilish formasi. Amaliy vaziyatlarda yechim taklif qilish uchun ishlatiladi: <ruby>届<rt>とど</rt></ruby>けましょう = «keltirib beraylik / topshiraylik».",
      },
    },
  },
  {
    char: "事",
    onyomi: "ジ",
    kunyomi: "こと",
    meanings: {
      ru: "дело, обстоятельство",
      uz: "ish, hodisa",
    },
    words: [
      {
        kanji: "仕事",
        kana: "しごと",
        mean_ru: "работа",
        mean_uz: "ish",
      },
      {
        kanji: "食事",
        kana: "しょくじ",
        mean_ru: "прием пищи",
        mean_uz: "ovqatlanish",
      },
      {
        kanji: "用事",
        kana: "ようじ",
        mean_ru: "дело (которое нужно сделать)",
        mean_uz: "yumush, ish",
      },
    ],
    sentence: {
      jp: "今日は用事があるので、パーティーには行けないかもしれません。",
      rubyData: [
        {
          kanji: "今日",
          reading: "きょう",
        },
        {
          text: "は",
        },
        {
          kanji: "用事",
          reading: "ようじ",
        },
        {
          text: "があるので、パーティーには",
        },
        {
          kanji: "行",
          reading: "い",
        },
        {
          text: "けないかもしれません。",
        },
      ],
      translation: {
        ru: "У меня сегодня дела, поэтому, возможно, я не смогу пойти на вечеринку.",
        uz: "Bugun ishim borligi sababli, bazmga bora olmasligim mumkin.",
      },
      grammarPoint: {
        ru: "～かもしれない указывает на 50% вероятность. В Японии так говорят, чтобы не отказывать слишком резко, оставляя мягкую неуверенность. <ruby>行<rt>い</rt></ruby>けないかもしれない = «возможно, не смогу пойти».",
        uz: "～かもしれない 50% ehtimolni bildiradi. Yaponlar rad javobini keskin bermaslik uchun shu shakldan foydalanadilar. <ruby>行<rt>い</rt></ruby>けないかもしれない = «bora olmasligim mumkin».",
      },
    },
  },
  {
    char: "京",
    onyomi: "キョウ, ケイ",
    kunyomi: "-",
    meanings: {
      ru: "столица",
      uz: "poytaxt",
    },
    words: [
      {
        kanji: "東京",
        kana: "とうきょう",
        mean_ru: "Токио",
        mean_uz: "Tokio",
      },
      {
        kanji: "京都",
        kana: "きょうと",
        mean_ru: "Киото",
        mean_uz: "Kioto",
      },
      {
        kanji: "上京する",
        kana: "じょうきょうする",
        mean_ru: "переезжать в столицу",
        mean_uz: "poytaxtga ko'chib o'tmoq",
      },
    ],
    sentence: {
      jp: "来年、大学に入るために東京へ引っ越すつもりです。",
      rubyData: [
        {
          kanji: "来年",
          reading: "らいねん",
        },
        {
          text: "、",
        },
        {
          kanji: "大学",
          reading: "だいがく",
        },
        {
          text: "に",
        },
        {
          kanji: "入",
          reading: "はい",
        },
        {
          text: "るために",
        },
        {
          kanji: "東京",
          reading: "とうきょう",
        },
        {
          text: "へ",
        },
        {
          kanji: "引",
          reading: "ひ",
        },
        {
          text: "っ",
        },
        {
          kanji: "越",
          reading: "こ",
        },
        {
          text: "すつもりです。",
        },
      ],
      translation: {
        ru: "В следующем году я собираюсь переехать в Токио, чтобы поступить в университет.",
        uz: "Kelgusi yili universitetga kirish uchun Tokioga ko'chib o'tish niyatidaman.",
      },
      grammarPoint: {
        ru: "～つもりです — это не просто мысли о будущем, а твердое личное намерение или план. <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>すつもり = «я уже решил/планирую переехать».",
        uz: "～つもりです — shunchaki kelajak haqidagi o'y emas, balki oldindan tuzilgan qat'iy reja yoki niyatni bildiradi. <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>すつもり = «ko'chib o'tishni reja qilib qo'yganman».",
      },
    },
  },
  {
    char: "仕",
    onyomi: "シ, ジ",
    kunyomi: "つか.える",
    meanings: {
      ru: "служить, делать",
      uz: "xizmat qilmoq, qilmoq",
    },
    words: [
      {
        kanji: "仕事",
        kana: "しごと",
        mean_ru: "работа",
        mean_uz: "ish",
      },
      {
        kanji: "仕方",
        kana: "しかた",
        mean_ru: "способ, метод",
        mean_uz: "usul, yo'l",
      },
      {
        kanji: "仕上げる",
        kana: "しあげる",
        mean_ru: "завершать, доделывать",
        mean_uz: "yakunlamoq, tugatmoq",
      },
    ],
    sentence: {
      jp: "どんな仕事を選ぶべきか、先輩に相談してみました。",
      rubyData: [
        {
          text: "どんな",
        },
        {
          kanji: "仕事",
          reading: "しごと",
        },
        {
          text: "を",
        },
        {
          kanji: "選",
          reading: "えら",
        },
        {
          text: "ぶべきか、",
        },
        {
          kanji: "先輩",
          reading: "せんぱい",
        },
        {
          text: "に",
        },
        {
          kanji: "相談",
          reading: "そうだん",
        },
        {
          text: "してみました。",
        },
      ],
      translation: {
        ru: "Я решил посоветоваться со старшим коллегой о том, какую работу мне стоит выбрать.",
        uz: "Qanday ish tanlashim kerakligi haqida tajribali xodimdan (sempaydan) maslahat so'rab ko'rdim.",
      },
      grammarPoint: {
        ru: "～てみる означает «сделать что-то на пробу, чтобы посмотреть на результат». Это очень жизненная форма для ситуаций, когда вы ищете совета.",
        uz: "～てみる «natijasi qanday bo'lishini ko'rish uchun biror narsa qilib ko'rmoq» degan ma'noni anglatadi. Maslahat so'rashda ko'p ishlatiladi.",
      },
    },
  },
  {
    char: "代",
    onyomi: "ダイ, タイ",
    kunyomi: "か.わる, か.える",
    meanings: {
      ru: "замена, плата, поколение",
      uz: "to'lov, o'rin, avlod",
    },
    words: [
      {
        kanji: "時代",
        kana: "じだい",
        mean_ru: "эпоха, время",
        mean_uz: "davr, zamon",
      },
      {
        kanji: "代わり",
        kana: "かわり",
        mean_ru: "вместо, замена",
        mean_uz: "o'rniga, badaliga",
      },
      {
        kanji: "ガス代",
        kana: "ガスだい",
        mean_ru: "плата за газ",
        mean_uz: "gaz to'lovi",
      },
    ],
    sentence: {
      jp: "私の代わりに、明日の会議に出席してくれませんか。",
      rubyData: [
        {
          kanji: "私",
          reading: "わたし",
        },
        {
          text: "の",
        },
        {
          kanji: "代",
          reading: "か",
        },
        {
          text: "わりに、",
        },
        {
          kanji: "明日",
          reading: "あした",
        },
        {
          text: "の",
        },
        {
          kanji: "会議",
          reading: "かいぎ",
        },
        {
          text: "に",
        },
        {
          kanji: "出席",
          reading: "しゅっせき",
        },
        {
          text: "してくれませんか。",
        },
      ],
      translation: {
        ru: "Не могли бы вы присутствовать на завтрашнем собрании вместо меня?",
        uz: "Mening o'rnimga ertangi majlisda qatnashib bera olmaysizmi?",
      },
      grammarPoint: {
        ru: "～代わりに (вместо) идеально сочетается с вежливой просьбой ～てくれませんか. Это классический рабочий паттерн, когда нужно попросить коллегу подменить вас.",
        uz: "～代わりに (o'rniga) asosan ～てくれませんか kabi xushmuomala iltimos bilan birga keladi. Bu ishxonada hamkasbdan yordam so'rashning eng odatiy usulidir.",
      },
    },
  },
  {
    char: "以",
    onyomi: "イ",
    kunyomi: "-",
    meanings: {
      ru: "начиная с, свыше",
      uz: "-dan boshlab, undan tashqari",
    },
    words: [
      {
        kanji: "以上",
        kana: "いじょう",
        mean_ru: "свыше, более",
        mean_uz: "-dan ko'p, yuqori",
      },
      {
        kanji: "以下",
        kana: "いか",
        mean_ru: "менее, ниже",
        mean_uz: "-dan kam, past",
      },
      {
        kanji: "以外",
        kana: "いがい",
        mean_ru: "кроме, за исключением",
        mean_uz: "-dan tashqari",
      },
    ],
    sentence: {
      jp: "ここから先は、関係者以外入ってはいけません。",
      rubyData: [
        {
          text: "ここから",
        },
        {
          kanji: "先",
          reading: "さき",
        },
        {
          text: "は、",
        },
        {
          kanji: "関係者",
          reading: "かんけいしゃ",
        },
        {
          kanji: "以外",
          reading: "いがい",
        },
        {
          kanji: "入",
          reading: "はい",
        },
        {
          text: "ってはいけません。",
        },
      ],
      translation: {
        ru: "С этого места посторонним (всем, кроме персонала) вход воспрещен.",
        uz: "Bu yerdan uyog'iga xodimlardan tashqari shaxslar kirishi qat'iyan man etiladi.",
      },
      grammarPoint: {
        ru: "～てはいけません — строгий запрет. Вы часто увидите такую формулировку на табличках в Японии. <ruby>入<rt>はい</rt></ruby>ってはいけません = «входить нельзя».",
        uz: "～てはいけません — qat'iy taqiq. Yaponiyada bunday yozuvlarni do'konlar va ofislarda ko'p uchratasiz. <ruby>入<rt>はい</rt></ruby>ってはいけません = «kirish mumkin emas».",
      },
    },
  },
  {
    char: "会",
    onyomi: "カイ, エ",
    kunyomi: "あ.う",
    meanings: {
      ru: "встреча, общество",
      uz: "uchrashuv, jamiyat",
    },
    words: [
      {
        kanji: "会社",
        kana: "かいしゃ",
        mean_ru: "компания, фирма",
        mean_uz: "kompaniya, korxona",
      },
      {
        kanji: "会議",
        kana: "かいぎ",
        mean_ru: "собрание, совещание",
        mean_uz: "majlis, yig'ilish",
      },
      {
        kanji: "会話",
        kana: "かいわ",
        mean_ru: "диалог, беседа",
        mean_uz: "suhbat, muloqot",
      },
    ],
    sentence: {
      jp: "今日の会議は長くなりそうなので、先にお昼ご飯を食べておきましょう。",
      rubyData: [
        {
          kanji: "今日",
          reading: "きょう",
        },
        {
          text: "の",
        },
        {
          kanji: "会議",
          reading: "かいぎ",
        },
        {
          text: "は",
        },
        {
          kanji: "長",
          reading: "なが",
        },
        {
          text: "くなりそうなので、",
        },
        {
          kanji: "先",
          reading: "さき",
        },
        {
          text: "にお",
        },
        {
          kanji: "昼",
          reading: "ひる",
        },
        {
          text: "ご",
        },
        {
          kanji: "飯",
          reading: "はん",
        },
        {
          text: "を",
        },
        {
          kanji: "食",
          reading: "た",
        },
        {
          text: "べておきましょう。",
        },
      ],
      translation: {
        ru: "Похоже, сегодняшнее собрание затянется, поэтому давайте пообедаем заранее.",
        uz: "Bugungi majlis cho'ziladiganga o'xshaydi, shuning uchun oldindan tushlik qilib olaylik.",
      },
      grammarPoint: {
        ru: "～ておく означает сделать что-то заранее, подготовиться. Это невероятно полезная форма для работы и планов. <ruby>食<rt>た</rt></ruby>べておく = «поесть заранее».",
        uz: "～ておく biror narsani oldindan, tayyorgarlik sifatida qilib qo'yishni bildiradi. <ruby>食<rt>た</rt></ruby>べておく = «oldindan yeb olmoq».",
      },
    },
  },
  {
    char: "住",
    onyomi: "ジュウ",
    kunyomi: "す.む",
    meanings: {
      ru: "жить, проживать",
      uz: "yashamoq",
    },
    words: [
      {
        kanji: "住所",
        kana: "じゅうしょ",
        mean_ru: "адрес",
        mean_uz: "manzil",
      },
      {
        kanji: "住む",
        kana: "すむ",
        mean_ru: "жить",
        mean_uz: "yashamoq",
      },
      {
        kanji: "住宅",
        kana: "じゅうたく",
        mean_ru: "жилье, дом",
        mean_uz: "turar joy",
      },
    ],
    sentence: {
      jp: "荷物を送りたいので、新しい住所を教えてもらえませんか。",
      rubyData: [
        {
          kanji: "荷物",
          reading: "にもつ",
        },
        {
          text: "を",
        },
        {
          kanji: "送",
          reading: "おく",
        },
        {
          text: "りたいので、",
        },
        {
          kanji: "新",
          reading: "あたら",
        },
        {
          text: "しい",
        },
        {
          kanji: "住所",
          reading: "じゅうしょ",
        },
        {
          text: "を",
        },
        {
          kanji: "教",
          reading: "おし",
        },
        {
          text: "えてもらえませんか。",
        },
      ],
      translation: {
        ru: "Я хочу отправить посылку, не могли бы вы дать мне свой новый адрес?",
        uz: "Posilka jo'natmoqchi edim, yangi manzilingizni aytib yubora olmaysizmi?",
      },
      grammarPoint: {
        ru: "～てもらえる — вежливый запрос услуги, буквально «могу ли я получить от вас действие». Звучит мягче, чем прямое «скажите мне».",
        uz: "～てもらえる — xizmat ko'rsatishni so'rashning xushmuomala usuli, ya'ni «sizdan shu harakatni ola olamanmi» degani.",
      },
    },
  },
  {
    char: "体",
    onyomi: "タイ, テイ",
    kunyomi: "からだ",
    meanings: {
      ru: "тело",
      uz: "tana, gavda",
    },
    words: [
      {
        kanji: "体",
        kana: "からだ",
        mean_ru: "тело, здоровье",
        mean_uz: "tana",
      },
      {
        kanji: "体育",
        kana: "たいいく",
        mean_ru: "физкультура",
        mean_uz: "jismoniy tarbiya",
      },
      {
        kanji: "体重",
        kana: "たいじゅう",
        mean_ru: "вес тела",
        mean_uz: "tana vazni",
      },
    ],
    sentence: {
      jp: "最近疲れやすいので、体を休めるために温泉に行きたいです。",
      rubyData: [
        {
          kanji: "最近",
          reading: "さいきん",
        },
        {
          kanji: "疲",
          reading: "つか",
        },
        {
          text: "れやすいので、",
        },
        {
          kanji: "体",
          reading: "からだ",
        },
        {
          text: "を",
        },
        {
          kanji: "休",
          reading: "やす",
        },
        {
          text: "めるために",
        },
        {
          kanji: "温泉",
          reading: "おんせん",
        },
        {
          text: "に",
        },
        {
          kanji: "行",
          reading: "い",
        },
        {
          text: "きたいです。",
        },
      ],
      translation: {
        ru: "В последнее время я легко устаю, поэтому хочу поехать на горячие источники, чтобы отдохнуть.",
        uz: "So'nggi paytlarda tez charchab qolyapman, shuning uchun dam olish maqsadida issiq buloqqa (onsenga) bormoqchiman.",
      },
      grammarPoint: {
        ru: "Основа глагола + やすい означает склонность или легкость действия («легко устаю»). ～ために показывает цель.",
        uz: "Fe'l asosi + やすい biror narsaga moyillikni bildiradi («tez charchayman»). ～ために esa maqsadni ko'rsatadi («dam berish uchun»).",
      },
    },
  },
  {
    char: "作",
    onyomi: "サク, サ",
    kunyomi: "つく.る",
    meanings: {
      ru: "делать, производить",
      uz: "yasamoq, yaratmoq",
    },
    words: [
      {
        kanji: "作る",
        kana: "つくる",
        mean_ru: "делать, готовить",
        mean_uz: "tayyorlamoq, pishirmoq",
      },
      {
        kanji: "作文",
        kana: "さくぶん",
        mean_ru: "сочинение",
        mean_uz: "insho",
      },
      {
        kanji: "手作り",
        kana: "てづくり",
        mean_ru: "ручная работа",
        mean_uz: "qo'lda yasalgan",
      },
    ],
    sentence: {
      jp: "週末は時間があるので、晩ご飯は私が作ることにしました。",
      rubyData: [
        {
          kanji: "週末",
          reading: "しゅうまつ",
        },
        {
          text: "は",
        },
        {
          kanji: "時間",
          reading: "じかん",
        },
        {
          text: "があるので、",
        },
        {
          kanji: "晩",
          reading: "ばん",
        },
        {
          text: "ご",
        },
        {
          kanji: "飯",
          reading: "はん",
        },
        {
          text: "は",
        },
        {
          kanji: "私",
          reading: "わたし",
        },
        {
          text: "が",
        },
        {
          kanji: "作",
          reading: "つく",
        },
        {
          text: "ることにしました。",
        },
      ],
      translation: {
        ru: "На выходных есть время, поэтому я решил, что ужин приготовлю сам.",
        uz: "Dam olish kunlari vaqtim bor, shuning uchun kechki ovqatni o'zim tayyorlashga qaror qildim.",
      },
      grammarPoint: {
        ru: "～ことにする показывает личное осознанное решение. В быту это отличный способ заявить о своих намерениях.",
        uz: "～ことにする shaxsiy ongli qarorni ko'rsatadi. Kundalik hayotda niyatlarni aytish uchun juda qulay shakl.",
      },
    },
  },
  {
    char: "使",
    onyomi: "シ",
    kunyomi: "つか.う",
    meanings: {
      ru: "использовать",
      uz: "ishlatmoq, foydalanmoq",
    },
    words: [
      {
        kanji: "使う",
        kana: "つかう",
        mean_ru: "использовать",
        mean_uz: "ishlatmoq",
      },
      {
        kanji: "使い方",
        kana: "つかいかた",
        mean_ru: "способ использования",
        mean_uz: "ishlatish usuli",
      },
      {
        kanji: "大使館",
        kana: "たいしかん",
        mean_ru: "посольство",
        mean_uz: "elchixona",
      },
    ],
    sentence: {
      jp: "この洗濯機の使い方が分からないんですが、教えてくれませんか。",
      rubyData: [
        {
          text: "この",
        },
        {
          kanji: "洗濯機",
          reading: "せんたくき",
        },
        {
          text: "の",
        },
        {
          kanji: "使",
          reading: "つか",
        },
        {
          text: "い",
        },
        {
          kanji: "方",
          reading: "かた",
        },
        {
          text: "が",
        },
        {
          kanji: "分",
          reading: "わ",
        },
        {
          text: "からないんですが、",
        },
        {
          kanji: "教",
          reading: "おし",
        },
        {
          text: "えてくれませんか。",
        },
      ],
      translation: {
        ru: "Я не понимаю, как пользоваться этой стиральной машиной, вы не подскажете?",
        uz: "Bu kir yuvish mashinasini qanday ishlatishni tushunmayapman, o'rgatib yubora olmaysizmi?",
      },
      grammarPoint: {
        ru: "Основа глагола + 方 (かた) образует существительное «способ действия». ～んですが мягко вводит контекст проблемы перед просьбой.",
        uz: "Fe'l asosi + 方 (かた) «harakat usuli» ma'nosidagi otni yasaydi. ～んですが savol yoki iltimosdan oldin muammoni yumshoq tushuntirish uchun xizmat qiladi.",
      },
    },
  },
  {
    char: "借",
    onyomi: "シャク",
    kunyomi: "か.りる",
    meanings: {
      ru: "брать в долг, арендовать",
      uz: "qarzga olmoq, ijaraga olmoq",
    },
    words: [
      {
        kanji: "借りる",
        kana: "かりる",
        mean_ru: "одалживать, брать взаймы",
        mean_uz: "qarzga olmoq",
      },
      {
        kanji: "借金",
        kana: "しゃっきん",
        mean_ru: "долг, заем",
        mean_uz: "qarz",
      },
      {
        kanji: "借家",
        kana: "しゃくや",
        mean_ru: "арендованный дом",
        mean_uz: "ijaraga olingan uy",
      },
    ],
    sentence: {
      jp: "図書館で借りた本を、明日までに返さなければなりません。",
      rubyData: [
        {
          kanji: "図書館",
          reading: "としょかん",
        },
        {
          text: "で",
        },
        {
          kanji: "借",
          reading: "か",
        },
        {
          text: "りた",
        },
        {
          kanji: "本",
          reading: "ほん",
        },
        {
          text: "を、",
        },
        {
          kanji: "明日",
          reading: "あした",
        },
        {
          text: "までに",
        },
        {
          kanji: "返",
          reading: "かえ",
        },
        {
          text: "さなければなりません。",
        },
      ],
      translation: {
        ru: "Я должен вернуть книгу, которую взял в библиотеке, до завтра.",
        uz: "Kutubxonadan olgan kitobimni ertagacha qaytarishim kerak.",
      },
      grammarPoint: {
        ru: "～までに указывает жесткий дедлайн. Форма ～なければならない выражает строгую обязанность по правилам.",
        uz: "～までに qat'iy muddatni (dedlaynni) ko'rsatadi. ～なければならない formasi esa qoida bo'yicha majburiyatni anglatadi.",
      },
    },
  },
  {
    char: "元",
    onyomi: "ゲン, ガン",
    kunyomi: "もと",
    meanings: {
      ru: "начало, основа",
      uz: "asos, boshlanish",
    },
    words: [
      {
        kanji: "元気",
        kana: "げんき",
        mean_ru: "бодрый, здоровый",
        mean_uz: "sog'lom, tetik",
      },
      {
        kanji: "元日",
        kana: "がんじつ",
        mean_ru: "первый день Нового года",
        mean_uz: "yangi yilning birinchi kuni",
      },
      {
        kanji: "地元",
        kana: "じもと",
        mean_ru: "местный, родной город",
        mean_uz: "mahalliy, tug'ilgan joy",
      },
    ],
    sentence: {
      jp: "久しぶりに地元に帰ったら、町がすっかり変わっていました。",
      rubyData: [
        {
          kanji: "久",
          reading: "ひさ",
        },
        {
          text: "しぶりに",
        },
        {
          kanji: "地元",
          reading: "じもと",
        },
        {
          text: "に",
        },
        {
          kanji: "帰",
          reading: "かえ",
        },
        {
          text: "ったら、",
        },
        {
          kanji: "町",
          reading: "まち",
        },
        {
          text: "がすっかり",
        },
        {
          kanji: "変",
          reading: "か",
        },
        {
          text: "わっていました。",
        },
      ],
      translation: {
        ru: "Когда я вернулся в родной город спустя долгое время, оказалось, что он полностью изменился.",
        uz: "Uzoq vaqtdan so'ng tug'ilib o'sgan shahrimga qaytsam, u butunlay o'zgarib ketibdi.",
      },
      grammarPoint: {
        ru: "～たら здесь используется не как условие «если», а как «когда я это сделал, то обнаружил, что...». Это частая конструкция для выражения удивления.",
        uz: "～たら bu yerda shart («agar») emas, balki «...qilganimda shuni bildimki» degan ma'noni bildiradi. Yangi holatdan ajablanishni ifodalashda juda faol.",
      },
    },
  },
  {
    char: "兄",
    onyomi: "キョウ, ケイ",
    kunyomi: "あに",
    meanings: {
      ru: "старший брат",
      uz: "aka",
    },
    words: [
      {
        kanji: "兄",
        kana: "あに",
        mean_ru: "мой старший брат",
        mean_uz: "akam",
      },
      {
        kanji: "お兄さん",
        kana: "おにいさん",
        mean_ru: "старший брат (чужой)",
        mean_uz: "aka (boshqaning)",
      },
      {
        kanji: "兄弟",
        kana: "きょうだい",
        mean_ru: "братья и сестры",
        mean_uz: "aka-ukalar, opa-singillar",
      },
    ],
    sentence: {
      jp: "兄は私と違って、スポーツもできるし、頭もいいです。",
      rubyData: [
        {
          kanji: "兄",
          reading: "あに",
        },
        {
          text: "は",
        },
        {
          kanji: "私",
          reading: "わたし",
        },
        {
          text: "と",
        },
        {
          kanji: "違",
          reading: "ちが",
        },
        {
          text: "って、スポーツもできるし、",
        },
        {
          kanji: "頭",
          reading: "あたま",
        },
        {
          text: "もいいです。",
        },
      ],
      translation: {
        ru: "В отличие от меня, мой старший брат и в спорте хорош, и умный.",
        uz: "Mendan farqli o'laroq, akam sportga ham usta, ham juda aqlli.",
      },
      grammarPoint: {
        ru: "～し、～し используется для перечисления нескольких фактов или причин подряд. Это делает фразу более эмоциональной и обоснованной.",
        uz: "～し、～し bir nechta dalil yoki sabablarni ketma-ket sanash uchun ishlatiladi. Bu ibora gapga ko'proq ishonch beradi.",
      },
    },
  },
  {
    char: "公",
    onyomi: "コウ",
    kunyomi: "おおやけ",
    meanings: {
      ru: "публичный, общественный",
      uz: "ommaviy, jamoat",
    },
    words: [
      {
        kanji: "公園",
        kana: "こうえん",
        mean_ru: "парк",
        mean_uz: "istirohat bog'i",
      },
      {
        kanji: "公務員",
        kana: "こうむいん",
        mean_ru: "госслужащий",
        mean_uz: "davlat xizmatchisi",
      },
      {
        kanji: "公共",
        kana: "こうきょう",
        mean_ru: "общественный",
        mean_uz: "jamoat (transporti va hokazo)",
      },
    ],
    sentence: {
      jp: "子どもたちが安全に遊べるように、新しい公園が作られました。",
      rubyData: [
        {
          kanji: "子",
          reading: "こ",
        },
        {
          text: "どもたちが",
        },
        {
          kanji: "安全",
          reading: "あんぜん",
        },
        {
          text: "に",
        },
        {
          kanji: "遊",
          reading: "あそ",
        },
        {
          text: "べるように、",
        },
        {
          kanji: "新",
          reading: "あたら",
        },
        {
          text: "しい",
        },
        {
          kanji: "公園",
          reading: "こうえん",
        },
        {
          text: "が",
        },
        {
          kanji: "作",
          reading: "つく",
        },
        {
          text: "られました。",
        },
      ],
      translation: {
        ru: "Был построен новый парк, чтобы дети могли безопасно играть.",
        uz: "Bolalar xavfsiz o'ynay olishi uchun yangi istirohat bog'i qurildi.",
      },
      grammarPoint: {
        ru: "～ように с потенциальным глаголом (遊べる) выражает цель: «так, чтобы это стало возможным». <ruby>作<rt>つく</rt></ruby>られました — это страдательный залог (парк был построен).",
        uz: "～ように potensial fe'l (遊べる) bilan maqsadni bildiradi: «shunday qila olishi uchun». <ruby>作<rt>つく</rt></ruby>られました — majhul nisbat formasi (park qurildi).",
      },
    },
  },
  {
    char: "写",
    onyomi: "シャ",
    kunyomi: "うつ.す, うつ.る",
    meanings: {
      ru: "копировать, снимать",
      uz: "ko'chirmoq, rasmga olmoq",
    },
    words: [
      {
        kanji: "写真",
        kana: "しゃしん",
        mean_ru: "фотография",
        mean_uz: "rasm, surat",
      },
      {
        kanji: "写す",
        kana: "うつす",
        mean_ru: "копировать, фотографировать",
        mean_uz: "ko'chirmoq, suratga tushirmoq",
      },
      {
        kanji: "写る",
        kana: "うつる",
        mean_ru: "получаться на фото",
        mean_uz: "rasmda chiqmoq",
      },
    ],
    sentence: {
      jp: "暗い場所でもきれいに写るカメラを探しています。",
      rubyData: [
        {
          kanji: "暗",
          reading: "くら",
        },
        {
          text: "い",
        },
        {
          kanji: "場所",
          reading: "ばしょ",
        },
        {
          text: "でもきれいに",
        },
        {
          kanji: "写",
          reading: "うつ",
        },
        {
          text: "るカメラを",
        },
        {
          kanji: "探",
          reading: "さが",
        },
        {
          text: "しています。",
        },
      ],
      translation: {
        ru: "Я ищу камеру, которая хорошо снимает (на которой фото получаются красивыми) даже в темных местах.",
        uz: "Qorong'i joylarda ham chiroyli rasm oladigan (rasmda yaxshi chiqadigan) kamera qidiryapman.",
      },
      grammarPoint: {
        ru: "Глагол в словарной форме (写る) здесь выступает как определение к существительному (カメラ). <ruby>写<rt>うつ</rt></ruby>るカメラ = «камера, которая (хорошо) фиксирует кадр».",
        uz: "Lug'at formasidagi fe'l (写る) bu yerda otga (カメラ) nisbatan aniqlovchi vazifasida kelmoqda. <ruby>写<rt>うつ</rt></ruby>るカメラ = «rasmga tushiradigan kamera».",
      },
    },
  },
  {
    char: "冬",
    onyomi: "トウ",
    kunyomi: "ふゆ",
    meanings: {
      ru: "зима",
      uz: "qish",
    },
    words: [
      {
        kanji: "冬",
        kana: "ふゆ",
        mean_ru: "зима",
        mean_uz: "qish",
      },
      {
        kanji: "冬休み",
        kana: "ふゆやすみ",
        mean_ru: "зимние каникулы",
        mean_uz: "qishki ta'til",
      },
      {
        kanji: "真冬",
        kana: "まふゆ",
        mean_ru: "середина зимы",
        mean_uz: "ayni qish chilla",
      },
    ],
    sentence: {
      jp: "今年の冬休みは、北海道へスキーをしに行く予定です。",
      rubyData: [
        {
          kanji: "今年",
          reading: "ことし",
        },
        {
          text: "の",
        },
        {
          kanji: "冬休",
          reading: "ふゆやす",
        },
        {
          text: "みは、",
        },
        {
          kanji: "北海道",
          reading: "ほっかいどう",
        },
        {
          text: "へスキーをしに",
        },
        {
          kanji: "行",
          reading: "い",
        },
        {
          text: "く",
        },
        {
          kanji: "予定",
          reading: "よてい",
        },
        {
          text: "です。",
        },
      ],
      translation: {
        ru: "На этих зимних каникулах я планирую поехать на Хоккайдо кататься на лыжах.",
        uz: "Bu yilgi qishki ta'tilda Xokkaydoga chang'i uchishga borishni rejalashtirganman.",
      },
      grammarPoint: {
        ru: "Основа глагола + に行く (しに行く) обозначает цель перемещения — «поехать, чтобы сделать». ～予定です в конце звучит как уже составленный график или план.",
        uz: "Fe'l asosi + に行く (しに行く) harakatlanishdan maqsadni bildiradi — «qilishga bormoq». ～予定です jumla oxirida allaqachon tuzilgan jiddiy reja yoki jadvalni ko'rsatadi.",
      },
    },
  },
  {
    char: "切",
    onyomi: "セツ, サイ",
    kunyomi: "き.る, き.れる",
    meanings: {
      ru: "резать, прерывать",
      uz: "kesmoq, uzmoq",
    },
    words: [
      {
        kanji: "切る",
        kana: "きる",
        mean_ru: "резать",
        mean_uz: "kesmoq",
      },
      {
        kanji: "切符",
        kana: "きっぷ",
        mean_ru: "билет",
        mean_uz: "chipta",
      },
      {
        kanji: "大切",
        kana: "たいせつ",
        mean_ru: "важный, ценный",
        mean_uz: "muhim, qadrli",
      },
    ],
    sentence: {
      jp: "大切な書類なので、絶対に無くさないようにしてください。",
      rubyData: [
        {
          kanji: "大切",
          reading: "たいせつ",
        },
        {
          text: "な",
        },
        {
          kanji: "書類",
          reading: "しょるい",
        },
        {
          text: "なので、",
        },
        {
          kanji: "絶対",
          reading: "ぜったい",
        },
        {
          text: "に",
        },
        {
          kanji: "無",
          reading: "な",
        },
        {
          text: "くさないようにしてください。",
        },
      ],
      translation: {
        ru: "Это важные документы, поэтому, пожалуйста, постарайтесь ни в коем случае их не потерять.",
        uz: "Bu muhim hujjat, shuning uchun iltimos, uni aslo yo'qotmaslikka harakat qiling.",
      },
      grammarPoint: {
        ru: "～ないようにする означает «постараться не допустить чего-то». В виде просьбы (～ようにしてください) это звучит как вежливое, но твердое наставление.",
        uz: "～ないようにする «biror narsaning oldini olishga harakat qilish» degani. Iltimos shaklida (～ようにしてください) bu rasmiy joyda xushmuomala, ammo qat'iy ko'rsatma bo'lib yangraydi.",
      },
    },
  },
  {
    char: "別",
    onyomi: "ベツ",
    kunyomi: "わか.れる",
    meanings: {
      ru: "другой, отдельный",
      uz: "boshqa, alohida",
    },
    words: [
      {
        kanji: "特別",
        kana: "とくべつ",
        mean_ru: "особенный",
        mean_uz: "maxsus, alohida",
      },
      {
        kanji: "別れる",
        kana: "わかれる",
        mean_ru: "расставаться",
        mean_uz: "ajrashmoq, xayrlashmoq",
      },
      {
        kanji: "別の",
        kana: "べつの",
        mean_ru: "другой, иной",
        mean_uz: "boshqa",
      },
    ],
    sentence: {
      jp: "予定が合わないなら、別の日に変えても構いませんよ。",
      rubyData: [
        {
          kanji: "予定",
          reading: "よてい",
        },
        {
          text: "が",
        },
        {
          kanji: "合",
          reading: "あ",
        },
        {
          text: "わないなら、",
        },
        {
          kanji: "別",
          reading: "べつ",
        },
        {
          text: "の",
        },
        {
          kanji: "日",
          reading: "ひ",
        },
        {
          text: "に",
        },
        {
          kanji: "変",
          reading: "か",
        },
        {
          text: "えても",
        },
        {
          kanji: "構",
          reading: "かま",
        },
        {
          text: "いませんよ。",
        },
      ],
      translation: {
        ru: "Если планы не совпадают, нет никаких проблем перенести это на другой день.",
        uz: "Agar rejalarimiz to'g'ri kelmasa, uni boshqa kunga o'zgartirsak ham hechqisi yo'q.",
      },
      grammarPoint: {
        ru: "～ても構いません — вежливая форма разрешения («я не против», «ничего страшного, если...»). Часто используется в переписке или при договоренностях.",
        uz: "～ても構いません — ruxsat berishning xushmuomala shakli («qarshiligim yo'q», «hechqisi yo'q»). Yozishmalarda yoki kelishuvlarda ko'p ishlatiladi.",
      },
    },
  },
  {
    char: "力",
    onyomi: "リョク, リキ",
    kunyomi: "ちから",
    meanings: {
      ru: "сила",
      uz: "kuch, quvvat",
    },
    words: [
      {
        kanji: "力",
        kana: "ちから",
        mean_ru: "сила",
        mean_uz: "kuch",
      },
      {
        kanji: "努力",
        kana: "どりょく",
        mean_ru: "усилия, старания",
        mean_uz: "harakat, intilish",
      },
      {
        kanji: "協力",
        kana: "きょうりょく",
        mean_ru: "сотрудничество",
        mean_uz: "hamkorlik",
      },
    ],
    sentence: {
      jp: "みんなで協力すれば、どんな難しい仕事でも終わるはずです。",
      rubyData: [
        {
          text: "みんなで",
        },
        {
          kanji: "協力",
          reading: "きょうりょく",
        },
        {
          text: "すれば、どんな",
        },
        {
          kanji: "難",
          reading: "むずか",
        },
        {
          text: "しい",
        },
        {
          kanji: "仕事",
          reading: "しごと",
        },
        {
          text: "でも",
        },
        {
          kanji: "終",
          reading: "お",
        },
        {
          text: "わるはずです。",
        },
      ],
      translation: {
        ru: "Если мы все будем сотрудничать, даже самая сложная работа должна быть завершена.",
        uz: "Agar barchamiz hamkorlik qilsak, har qanday qiyin ish ham albatta tugashi kerak.",
      },
      grammarPoint: {
        ru: "～ば — условная форма «если». ～はずです в конце выражает высокую степень уверенности, основанную на логике или ожидании.",
        uz: "～ば — «agar» degan shart formasi. Gap oxiridagi ～はずです mantiq yoki kutilmaga asoslangan kuchli ishonchni bildiradi.",
      },
    },
  },
  {
    char: "勉",
    onyomi: "ベン",
    kunyomi: "つと.める",
    meanings: {
      ru: "стараться",
      uz: "harakat qilmoq",
    },
    words: [
      {
        kanji: "勉強",
        kana: "べんきょう",
        mean_ru: "учеба, изучение",
        mean_uz: "o'qish, o'rganish",
      },
      {
        kanji: "勉強不足",
        kana: "べんきょうぶそく",
        mean_ru: "недостаток знаний/подготовки",
        mean_uz: "bilim/tayyorgarlik yetishmasligi",
      },
      {
        kanji: "勉強会",
        kana: "べんきょうかい",
        mean_ru: "учебная группа/семинар",
        mean_uz: "o'quv guruhi, seminar",
      },
    ],
    sentence: {
      jp: "失敗しても、それが良い勉強になったと考えればいいんです。",
      rubyData: [
        {
          kanji: "失敗",
          reading: "しっぱい",
        },
        {
          text: "しても、それが",
        },
        {
          kanji: "良",
          reading: "よ",
        },
        {
          text: "い",
        },
        {
          kanji: "勉強",
          reading: "べんきょう",
        },
        {
          text: "になったと",
        },
        {
          kanji: "考",
          reading: "かんが",
        },
        {
          text: "えればいいんです。",
        },
      ],
      translation: {
        ru: "Даже если вы потерпите неудачу, вам стоит просто расценивать это как хороший урок (полезный опыт).",
        uz: "Xato qilsangiz ham, buni o'zingiz uchun yaxshi saboq (tajriba) bo'ldi deb hisoblasangiz kifoya.",
      },
      grammarPoint: {
        ru: "Фраза 勉強になった (букв. «стало учебой») означает «это стало хорошим уроком / полезным опытом». Конструкция ～ばいい дает мягкий совет.",
        uz: "勉強になった — Yaponiyada ko'p ishlatiladigan ibora bo'lib, «yaxshi saboq / tajriba bo'ldi» degan ma'noni beradi. ～ばいい formasi yumshoq maslahat beradi.",
      },
    },
  },
  {
    char: "動",
    onyomi: "ドウ",
    kunyomi: "うご.く, うご.かす",
    meanings: {
      ru: "двигаться",
      uz: "harakatlanmoq",
    },
    words: [
      {
        kanji: "動く",
        kana: "うごく",
        mean_ru: "двигаться, работать (о механизме)",
        mean_uz: "harakatlanmoq, ishlamoq",
      },
      {
        kanji: "運動",
        kana: "うんどう",
        mean_ru: "физические упражнения",
        mean_uz: "jismoniy mashq, sport",
      },
      {
        kanji: "動物",
        kana: "どうぶつ",
        mean_ru: "животное",
        mean_uz: "hayvon",
      },
    ],
    sentence: {
      jp: "毎日運動したほうがいいと分かっているのに、ついサボってしまいます。",
      rubyData: [
        {
          kanji: "毎日",
          reading: "まいにち",
        },
        {
          kanji: "運動",
          reading: "うんどう",
        },
        {
          text: "したほうがいいと",
        },
        {
          kanji: "分",
          reading: "わ",
        },
        {
          text: "かっているのに、ついサボってしまいます。",
        },
      ],
      translation: {
        ru: "Хотя я и понимаю, что лучше заниматься спортом каждый день, я невольно ленюсь и пропускаю занятия.",
        uz: "Har kuni mashq qilgan ma'qul ekanini bilsam ham, beixtiyor erinib, uni o'tkazib yuboraman.",
      },
      grammarPoint: {
        ru: "～のに выражает контраст и разочарование: «хотя знаю, но...». Наречие つい с формой ～てしまう показывает невольное действие, о котором сожалеют.",
        uz: "～のに qarama-qarshilik va afsuslanishni bildiradi: «bilsam ham...». つい so'zi va ～てしまう formasi birgalikda beixtiyor qilib qo'yilgan harakatni bildiradi.",
      },
    },
  },
  {
    char: "医",
    onyomi: "イ",
    kunyomi: "-",
    meanings: {
      ru: "медицина, врач",
      uz: "tibbiyot, shifokor",
    },
    words: [
      {
        kanji: "医者",
        kana: "いしゃ",
        mean_ru: "врач",
        mean_uz: "shifokor, vrach",
      },
      {
        kanji: "医学",
        kana: "いがく",
        mean_ru: "медицина (наука)",
        mean_uz: "tibbiyot (ilm)",
      },
      {
        kanji: "医院",
        kana: "いいん",
        mean_ru: "клиника",
        mean_uz: "klinika, shifoxona",
      },
    ],
    sentence: {
      jp: "熱が下がらないなら、無理をしないで医者に診てもらいなさい。",
      rubyData: [
        {
          kanji: "熱",
          reading: "ねつ",
        },
        {
          text: "が",
        },
        {
          kanji: "下",
          reading: "さ",
        },
        {
          text: "がらないなら、",
        },
        {
          kanji: "無理",
          reading: "むり",
        },
        {
          text: "をしないで",
        },
        {
          kanji: "医者",
          reading: "いしゃ",
        },
        {
          text: "に",
        },
        {
          kanji: "診",
          reading: "み",
        },
        {
          text: "てもらいなさい。",
        },
      ],
      translation: {
        ru: "Если температура не спадает, не перенапрягайся и сходи, чтобы тебя осмотрел врач.",
        uz: "Agar isitma tushmasa, o'zingni qiynamasdan shifokorga ko'rin.",
      },
      grammarPoint: {
        ru: "医者に診てもらう — стандартная японская фраза «сходить к врачу» (букв. «получить осмотр от врача»). ～なさい — наставление.",
        uz: "医者に診てもらう — «shifokorga ko'rinish» ning yaponcha odatiy ifodasi (so'zma-so'z: «shifokor ko'rigini olmoq»). ～なさい — ko'rsatma.",
      },
    },
  },
  {
    char: "去",
    onyomi: "キョ, コ",
    kunyomi: "さ.る",
    meanings: {
      ru: "уходить, прошлое",
      uz: "ketmoq, o'tmish",
    },
    words: [
      {
        kanji: "去年",
        kana: "きょねん",
        mean_ru: "прошлый год",
        mean_uz: "o'tgan yil",
      },
      {
        kanji: "過去",
        kana: "かこ",
        mean_ru: "прошлое",
        mean_uz: "o'tmish",
      },
      {
        kanji: "去る",
        kana: "さる",
        mean_ru: "покидать, уходить",
        mean_uz: "tark etmoq, ketmoq",
      },
    ],
    sentence: {
      jp: "去年買ったパソコンがもう壊れてしまったので、修理に出します。",
      rubyData: [
        {
          kanji: "去年",
          reading: "きょねん",
        },
        {
          kanji: "買",
          reading: "か",
        },
        {
          text: "ったパソコンがもう",
        },
        {
          kanji: "壊",
          reading: "こわ",
        },
        {
          text: "れてしまったので、",
        },
        {
          kanji: "修理",
          reading: "しゅうり",
        },
        {
          text: "に",
        },
        {
          kanji: "出",
          reading: "だ",
        },
        {
          text: "します。",
        },
      ],
      translation: {
        ru: "Ноутбук, который я купил в прошлом году, уже сломался, поэтому я сдаю его в ремонт.",
        uz: "O'tgan yili sotib olgan kompyuterim allaqachon buzilib qoldi, shuning uchun uni ta'mirga beryapman.",
      },
      grammarPoint: {
        ru: "«去年買った» — это придаточное предложение, определяющее существительное パソコン (компьютер, который я купил). ～てしまう здесь подчеркивает сожаление.",
        uz: "«去年買った» — otni aniqlab kelayotgan ergash gap (o'tgan yili olingan kompyuter). ～てしまう esa bu yerda afsuslanishni kuchaytirib beryapti.",
      },
    },
  },
  {
    char: "口",
    onyomi: "コウ, ク",
    kunyomi: "くち",
    meanings: {
      ru: "рот, вход",
      uz: "og'iz, kirish",
    },
    words: [
      {
        kanji: "口",
        kana: "くち",
        mean_ru: "рот",
        mean_uz: "og'iz",
      },
      {
        kanji: "出口",
        kana: "でぐち",
        mean_ru: "выход",
        mean_uz: "chiqish joyi",
      },
      {
        kanji: "人口",
        kana: "じんこう",
        mean_ru: "население",
        mean_uz: "aholi",
      },
    ],
    sentence: {
      jp: "改札を出たら、北口の前に集まってください。",
      rubyData: [
        {
          kanji: "改札",
          reading: "かいさつ",
        },
        {
          text: "を",
        },
        {
          kanji: "出",
          reading: "で",
        },
        {
          text: "たら、",
        },
        {
          kanji: "北口",
          reading: "きたぐち",
        },
        {
          text: "の",
        },
        {
          kanji: "前",
          reading: "まえ",
        },
        {
          text: "に",
        },
        {
          kanji: "集",
          reading: "あつ",
        },
        {
          text: "まってください。",
        },
      ],
      translation: {
        ru: "Когда выйдете через турникеты, пожалуйста, соберитесь перед северным выходом.",
        uz: "Turniketdan chiqqach, iltimos, shimoliy chiqish yo'li oldida yig'iling.",
      },
      grammarPoint: {
        ru: "～たら в данном случае означает последовательность действий в будущем: «как только выйдете -> сделайте это». Это стандартный способ давать инструкции.",
        uz: "～たら bu yerda kelajakdagi harakatlar ketma-ketligini bildiradi: «chiqqaningizdan keyin -> shunday qiling». Uchrashuvda ko'rsatma berishning odatiy usuli.",
      },
    },
  },
  {
    char: "古",
    onyomi: "コ",
    kunyomi: "ふる.い",
    meanings: {
      ru: "старый",
      uz: "eski",
    },
    words: [
      {
        kanji: "古い",
        kana: "ふるい",
        mean_ru: "старый",
        mean_uz: "eski",
      },
      {
        kanji: "中古",
        kana: "ちゅうこ",
        mean_ru: "подержанный (б/у)",
        mean_uz: "ishlatilgan (b/u)",
      },
      {
        kanji: "古本",
        kana: "ふるほん",
        mean_ru: "старая книга",
        mean_uz: "eski kitob",
      },
    ],
    sentence: {
      jp: "このカメラは中古ですが、新品と同じくらいきれいです。",
      rubyData: [
        {
          text: "このカメラは",
        },
        {
          kanji: "中古",
          reading: "ちゅうこ",
        },
        {
          text: "ですが、",
        },
        {
          kanji: "新品",
          reading: "しんぴん",
        },
        {
          text: "と",
        },
        {
          kanji: "同",
          reading: "おな",
        },
        {
          text: "じくらいきれいです。",
        },
      ],
      translation: {
        ru: "Эта камера подержанная, но она почти такая же чистая (в хорошем состоянии), как новая.",
        uz: "Bu kamera ishlatilgan bo'lsa-da, u xuddi yangisidek toza (yaxshi holatda).",
      },
      grammarPoint: {
        ru: "～と同じくらい используется для сравнения и означает «примерно на таком же уровне, как и...». Очень полезно для оценки качества в повседневной речи.",
        uz: "～と同じくらい taqqoslash uchun ishlatilib, «taxminan... bilan bir xil darajada» degan ma'noni anglatadi. Sifatni baholash uchun juda qulay.",
      },
    },
  },
  {
    char: "台",
    onyomi: "ダイ, タイ",
    kunyomi: "-",
    meanings: {
      ru: "подставка, счетный суффикс",
      uz: "taglik, mashinalar uchun sanoq",
    },
    words: [
      {
        kanji: "台風",
        kana: "たいふう",
        mean_ru: "тайфун",
        mean_uz: "to'fon, tayfun",
      },
      {
        kanji: "台所",
        kana: "だいどころ",
        mean_ru: "кухня",
        mean_uz: "oshxona",
      },
      {
        kanji: "～台",
        kana: "～だい",
        mean_ru: "счетный суффикс для машин",
        mean_uz: "mashina/texnika uchun sanoq so'z",
      },
    ],
    sentence: {
      jp: "台風が近づいているので、明日のフライトはキャンセルされるかもしれません。",
      rubyData: [
        {
          kanji: "台風",
          reading: "たいふう",
        },
        {
          text: "が",
        },
        {
          kanji: "近",
          reading: "ちか",
        },
        {
          text: "づいているので、",
        },
        {
          kanji: "明日",
          reading: "あした",
        },
        {
          text: "のフライトはキャンセルされるかもしれません。",
        },
      ],
      translation: {
        ru: "Так как приближается тайфун, завтрашний рейс может быть отменен.",
        uz: "To'fon yaqinlashayotgani sababli, ertangi reys bekor qilinishi mumkin.",
      },
      grammarPoint: {
        ru: "キャンセルされる — форма страдательного залога («быть отмененным»). В сочетании с ～かもしれません («возможно») это идеальный способ передать прогноз.",
        uz: "キャンセルされる — majhul nisbat («bekor qilinmoq»). U ～かもしれません («mumkin») bilan birgalikda tashqi omillarga bog'liq ehtimolni bildirish uchun juda mos keladi.",
      },
    },
  },
  {
    char: "同",
    onyomi: "ドウ",
    kunyomi: "おな.じ",
    meanings: {
      ru: "одинаковый",
      uz: "bir xil",
    },
    words: [
      {
        kanji: "同じ",
        kana: "おなじ",
        mean_ru: "одинаковый",
        mean_uz: "bir xil",
      },
      {
        kanji: "同時",
        kana: "どうじ",
        mean_ru: "одновременно",
        mean_uz: "bir vaqtda",
      },
      {
        kanji: "同僚",
        kana: "どうりょう",
        mean_ru: "коллега",
        mean_uz: "hamkasb",
      },
    ],
    sentence: {
      jp: "会社の同僚と一緒に、週末バーベキューをすることになりました。",
      rubyData: [
        {
          kanji: "会社",
          reading: "かいしゃ",
        },
        {
          text: "の",
        },
        {
          kanji: "同僚",
          reading: "どうりょう",
        },
        {
          text: "と",
        },
        {
          kanji: "一緒",
          reading: "いっしょ",
        },
        {
          text: "に、",
        },
        {
          kanji: "週末",
          reading: "しゅうまつ",
        },
        {
          text: "バーベキューをすることになりました。",
        },
      ],
      translation: {
        ru: "Мы решили (так было решено), что на выходных вместе с коллегами по работе устроим барбекю.",
        uz: "Dam olish kunlari ishxonadagi hamkasblar bilan birgalikda barbekyu qiladigan bo'ldik (shunday qarorga kelindi).",
      },
      grammarPoint: {
        ru: "～ことになった используется, когда решение принято группой или сложилось само собой. Звучит очень естественно при рассказе о планах с друзьями или коллегами.",
        uz: "～ことになった qaror guruh tomonidan qabul qilinganda yoki holat o'z-o'zidan shunga olib kelganda ishlatiladi. Do'stlar bilan rejalar haqida gapirganda juda tabiiy eshitiladi.",
      },
    },
  },
  {
    char: "味",
    onyomi: "ミ",
    kunyomi: "あじ, あじ.わう",
    meanings: {
      ru: "вкус",
      uz: "ta'm",
    },
    words: [
      {
        kanji: "味",
        kana: "あじ",
        mean_ru: "вкус",
        mean_uz: "ta'm",
      },
      {
        kanji: "意味",
        kana: "いみ",
        mean_ru: "смысл, значение",
        mean_uz: "ma'no",
      },
      {
        kanji: "興味",
        kana: "きょうみ",
        mean_ru: "интерес",
        mean_uz: "qiziqish",
      },
    ],
    sentence: {
      jp: "日本の文化に興味があるので、将来は京都に住みたいと考えています。",
      rubyData: [
        {
          kanji: "日本",
          reading: "にほん",
        },
        {
          text: "の",
        },
        {
          kanji: "文化",
          reading: "ぶんか",
        },
        {
          text: "に",
        },
        {
          kanji: "興味",
          reading: "きょうみ",
        },
        {
          text: "があるので、",
        },
        {
          kanji: "将来",
          reading: "しょうらい",
        },
        {
          text: "は",
        },
        {
          kanji: "京都",
          reading: "きょうと",
        },
        {
          text: "に",
        },
        {
          kanji: "住",
          reading: "す",
        },
        {
          text: "みたいと",
        },
        {
          kanji: "考",
          reading: "かんが",
        },
        {
          text: "えています。",
        },
      ],
      translation: {
        ru: "Поскольку я интересуюсь японской культурой, в будущем я подумываю о том, чтобы жить в Киото.",
        uz: "Yapon madaniyatiga qiziqishim borligi uchun, kelajakda Kiotoda yashashni o'ylab yuribman.",
      },
      grammarPoint: {
        ru: "～たいと考えている («я подумываю о том, чтобы...») — это более зрелая и вежливая форма выражения своих планов, чем просто ～たいです.",
        uz: "～たいと考えている («...qilishni o'ylab yuribman») — o'z rejalarini oddiygina ～たいです deyishdan ko'ra salmoqliroq va xushmuomalalik bilan aytish shakli.",
      },
    },
  },
  {
    char: "品",
    onyomi: "ヒン",
    kunyomi: "しな",
    meanings: {
      ru: "товар, качество",
      uz: "mol, sifat, tovar",
    },
    words: [
      {
        kanji: "商品",
        kana: "しょうひん",
        mean_ru: "товар",
        mean_uz: "tovar, mahsulot",
      },
      {
        kanji: "作品",
        kana: "さくひん",
        mean_ru: "произведение (искусства)",
        mean_uz: "asar",
      },
      {
        kanji: "品物",
        kana: "しなもの",
        mean_ru: "вещь, товар (физический)",
        mean_uz: "narsa, buyum",
      },
    ],
    sentence: {
      jp: "注文した商品がまだ届かないんですが、確認していただけませんか。",
      rubyData: [
        {
          kanji: "注文",
          reading: "ちゅうもん",
        },
        {
          text: "した",
        },
        {
          kanji: "商品",
          reading: "しょうひん",
        },
        {
          text: "がまだ",
        },
        {
          kanji: "届",
          reading: "とど",
        },
        {
          text: "かないんですが、",
        },
        {
          kanji: "確認",
          reading: "かくにん",
        },
        {
          text: "していただけませんか。",
        },
      ],
      translation: {
        ru: "Товар, который я заказал, всё еще не пришел. Не могли бы вы проверить?",
        uz: "Men buyurtma qilgan mahsulot hali ham kelmadi. Iltimos, tekshirib bera olmaysizmi?",
      },
      grammarPoint: {
        ru: "～ていただけませんか — крайне вежливая просьба, незаменимая при общении с поддержкой. ～んですが перед ней служит для плавного объяснения проблемы.",
        uz: "～ていただけませんか — mijozlarni qo'llab-quvvatlash xizmati bilan gaplashganda o'ta xushmuomala iltimos. ～んですが muammoni silliq tushuntirish uchun xizmat qiladi.",
      },
    },
  },
  {
    char: "員",
    onyomi: "イン",
    kunyomi: "-",
    meanings: {
      ru: "сотрудник, член (группы)",
      uz: "xodim, a'zo",
    },
    words: [
      {
        kanji: "会社員",
        kana: "かいしゃいん",
        mean_ru: "сотрудник компании",
        mean_uz: "kompaniya xodimi",
      },
      {
        kanji: "店員",
        kana: "てんいん",
        mean_ru: "продавец, сотрудник магазина",
        mean_uz: "sotuvchi",
      },
      {
        kanji: "会員",
        kana: "かいいん",
        mean_ru: "член, участник (клуба)",
        mean_uz: "a'zo (klub/sayt a'zosi)",
      },
    ],
    sentence: {
      jp: "このサイトは会員にならないと、サービスを利用することができません。",
      rubyData: [
        {
          text: "このサイトは",
        },
        {
          kanji: "会員",
          reading: "かいいん",
        },
        {
          text: "にならないと、サービスを",
        },
        {
          kanji: "利用",
          reading: "りよう",
        },
        {
          text: "することができません。",
        },
      ],
      translation: {
        ru: "Если не стать участником (зарегистрированным пользователем) этого сайта, вы не сможете пользоваться его услугами.",
        uz: "Agar bu saytga a'zo bo'lmasangiz, uning xizmatlaridan foydalana olmaysiz.",
      },
      grammarPoint: {
        ru: "Конструкция ～と (если не...) выражает неизбежное логическое следствие. Это стандартный шаблон для сайтов и приложений: «нет регистрации -> нет доступа».",
        uz: "～と (agar... bo'lmasa) konstruksiyasi muqarrar mantiqiy oqibatni bildiradi. Saytlar va ilovalar uchun standart qoida: «a'zo bo'lmasangiz -> foydalana olmaysiz».",
      },
    },
  },
  {
    char: "問",
    onyomi: "モン",
    kunyomi: "と.う, と.い",
    meanings: {
      ru: "вопрос, спрашивать",
      uz: "savol, so'ramoq",
    },
    words: [
      {
        kanji: "質問",
        kana: "しつもん",
        mean_ru: "вопрос",
        mean_uz: "savol",
      },
      {
        kanji: "問題",
        kana: "もんだい",
        mean_ru: "проблема, задача",
        mean_uz: "muammo, masala",
      },
      {
        kanji: "問い合わせ",
        kana: "といあわせ",
        mean_ru: "запрос, справка",
        mean_uz: "so'rov, murojaat",
      },
    ],
    sentence: {
      jp: "テストの問題が難しすぎて、半分も答えられませんでした。",
      rubyData: [
        {
          text: "テストの",
        },
        {
          kanji: "問題",
          reading: "もんだい",
        },
        {
          text: "が",
        },
        {
          kanji: "難",
          reading: "むずか",
        },
        {
          text: "しすぎて、",
        },
        {
          kanji: "半分",
          reading: "はんぶん",
        },
        {
          text: "も",
        },
        {
          kanji: "答",
          reading: "こた",
        },
        {
          text: "えられませんでした。",
        },
      ],
      translation: {
        ru: "Вопросы в тесте были слишком сложными, и я не смог ответить даже на половину.",
        uz: "Test savollari haddan tashqari qiyin edi va men hatto yarimiga ham javob bera olmadim.",
      },
      grammarPoint: {
        ru: "～すぎる означает чрезмерность («слишком сложно»). Частица も после «половины» акцентирует крайность: «даже этого не смог».",
        uz: "～すぎる me'yordan ortiqlikni bildiradi («o'ta qiyin»). «Yarmi» so'zidan keyingi も yuklamasi holatning jiddiyligini ta'kidlaydi: «hatto shuni ham uddalay olmadim».",
      },
    },
  },
  {
    char: "図",
    onyomi: "ズ, ト",
    kunyomi: "はか.る",
    meanings: {
      ru: "чертеж, план",
      uz: "chizma, reja",
    },
    words: [
      {
        kanji: "地図",
        kana: "ちず",
        mean_ru: "карта",
        mean_uz: "xarita",
      },
      {
        kanji: "図書館",
        kana: "としょかん",
        mean_ru: "библиотека",
        mean_uz: "kutubxona",
      },
      {
        kanji: "合図",
        kana: "あいず",
        mean_ru: "знак, сигнал",
        mean_uz: "ishora, belgi",
      },
    ],
    sentence: {
      jp: "スマホの地図アプリを見ながら歩いていたので、道に迷いませんでした。",
      rubyData: [
        {
          text: "スマホの",
        },
        {
          kanji: "地図",
          reading: "ちず",
        },
        {
          text: "アプリを",
        },
        {
          kanji: "見",
          reading: "み",
        },
        {
          text: "ながら",
        },
        {
          kanji: "歩",
          reading: "ある",
        },
        {
          text: "いていたので、",
        },
        {
          kanji: "道",
          reading: "みち",
        },
        {
          text: "に",
        },
        {
          kanji: "迷",
          reading: "まよ",
        },
        {
          text: "いませんでした。",
        },
      ],
      translation: {
        ru: "Я шел, посматривая в приложение с картами на телефоне, поэтому не заблудился.",
        uz: "Telefonimdagi xarita ilovasiga qarab yurganim uchun, yo'ldan adashmadim.",
      },
      grammarPoint: {
        ru: "～ながら объединяет два одновременных действия: «смотреть в телефон» и «идти». 道に迷う (заблудиться) — полезное устойчивое выражение для ситуаций в пути.",
        uz: "～ながら ikkita bir vaqtda bajarilayotgan harakatni bog'laydi: «telefonga qarash» va «yurish». 道に迷う (yo'ldan adashmoq) — yo'lda yurish bilan bog'liq juda muhim ibora.",
      },
    },
  },
  {
    char: "地",
    onyomi: "チ, ジ",
    kunyomi: "-",
    meanings: {
      ru: "земля, местность",
      uz: "yer, hudud",
    },
    words: [
      {
        kanji: "地下鉄",
        kana: "ちかてつ",
        mean_ru: "метро",
        mean_uz: "metro",
      },
      {
        kanji: "地震",
        kana: "じしん",
        mean_ru: "землетрясение",
        mean_uz: "zilzila",
      },
      {
        kanji: "土地",
        kana: "とち",
        mean_ru: "земля, участок",
        mean_uz: "yer, uchastka",
      },
    ],
    sentence: {
      jp: "地震が起きたときは、慌てずに机の下に隠れてください。",
      rubyData: [
        {
          kanji: "地震",
          reading: "じしん",
        },
        {
          text: "が",
        },
        {
          kanji: "起",
          reading: "お",
        },
        {
          text: "きたときは、",
        },
        {
          kanji: "慌",
          reading: "あわ",
        },
        {
          text: "てずに",
        },
        {
          kanji: "机",
          reading: "つくえ",
        },
        {
          text: "の",
        },
        {
          kanji: "下",
          reading: "した",
        },
        {
          text: "に",
        },
        {
          kanji: "隠",
          reading: "かく",
        },
        {
          text: "れてください。",
        },
      ],
      translation: {
        ru: "Когда происходит землетрясение, пожалуйста, не паникуйте и прячьтесь под стол.",
        uz: "Zilzila sodir bo'lganda, vahimaga tushmasdan stol tagiga yashirining.",
      },
      grammarPoint: {
        ru: "～ずに (от 慌てずに) — это более формальный вариант ～ないで («не делая чего-то»). Часто используется в инструкциях по безопасности. <ruby>慌<rt>あわ</rt></ruby>てずに = «без паники».",
        uz: "～ずに (慌てずに so'zida) — bu ～ないで («qilmasdan») ning rasmiyroq shakli. Xavfsizlik ko'rsatmalarida juda ko'p ishlatiladi. <ruby>慌<rt>あわ</rt></ruby>てずに = «vahimasiz».",
      },
    },
  },
  {
    char: "堂",
    onyomi: "ドウ",
    kunyomi: "-",
    meanings: {
      ru: "зал, храм",
      uz: "zal, ibodatxona",
    },
    words: [
      {
        kanji: "食堂",
        kana: "しょくどう",
        mean_ru: "столовая",
        mean_uz: "oshxona",
      },
      {
        kanji: "本堂",
        kana: "ほんどう",
        mean_ru: "главный зал храма",
        mean_uz: "ibodatxonaning asosiy zali",
      },
      {
        kanji: "講堂",
        kana: "こうどう",
        mean_ru: "аудитория, актовый зал",
        mean_uz: "auditoriya, majlislar zali",
      },
    ],
    sentence: {
      jp: "会社の食堂は安くて美味しいので、毎日利用しています。",
      rubyData: [
        {
          kanji: "会社",
          reading: "かいしゃ",
        },
        {
          text: "の",
        },
        {
          kanji: "食堂",
          reading: "しょくどう",
        },
        {
          text: "は",
        },
        {
          kanji: "安",
          reading: "やす",
        },
        {
          text: "くて",
        },
        {
          kanji: "美味",
          reading: "おい",
        },
        {
          text: "しいので、",
        },
        {
          kanji: "毎日",
          reading: "まいにち",
        },
        {
          kanji: "利用",
          reading: "りよう",
        },
        {
          text: "しています。",
        },
      ],
      translation: {
        ru: "Столовая в компании дешевая и вкусная, поэтому я пользуюсь ей каждый день.",
        uz: "Kompaniya oshxonasi arzon va mazali bo'lgani uchun, undan har kuni foydalanaman.",
      },
      grammarPoint: {
        ru: "Форма на ～くて (安くて) связывает прилагательные: «дешево И вкусно». ～ている (利用している) здесь показывает регулярную привычку.",
        uz: "～くて (安くて) shakli sifatlarni bog'laydi: «arzon VA mazali». ～ている (利用している) bu yerda muntazam odatni ko'rsatadi.",
      },
    },
  },
  {
    char: "場",
    onyomi: "ジョウ",
    kunyomi: "ば",
    meanings: {
      ru: "место, площадка",
      uz: "joy, maydon",
    },
    words: [
      {
        kanji: "場所",
        kana: "ばしょ",
        mean_ru: "место",
        mean_uz: "joy",
      },
      {
        kanji: "工場",
        kana: "こうじょう",
        mean_ru: "завод, фабрика",
        mean_uz: "zavod, fabrika",
      },
      {
        kanji: "駐車場",
        kana: "ちゅうしゃじょう",
        mean_ru: "парковка",
        mean_uz: "avtoturargoh",
      },
    ],
    sentence: {
      jp: "近くに駐車場が見つからないので、電車で行くことにしましょう。",
      rubyData: [
        {
          kanji: "近",
          reading: "ちか",
        },
        {
          text: "くに",
        },
        {
          kanji: "駐車場",
          reading: "ちゅうしゃじょう",
        },
        {
          text: "が",
        },
        {
          kanji: "見",
          reading: "み",
        },
        {
          text: "つからないので、",
        },
        {
          kanji: "電車",
          reading: "でんしゃ",
        },
        {
          text: "で",
        },
        {
          kanji: "行",
          reading: "い",
        },
        {
          text: "くことにしましょう。",
        },
      ],
      translation: {
        ru: "Поблизости не удается найти парковку, так что давайте решим поехать на поезде.",
        uz: "Yaqin atrofda avtoturargoh topilmayapti, shuning uchun poyezdda borishga qaror qilaylik.",
      },
      grammarPoint: {
        ru: "見つからない (от 見つかる) означает «не находится». ～ことにしましょう — активное предложение изменить план и принять новое решение вместе.",
        uz: "見つからない (見つかる fe'lidan) «topilmayapti» degan ma'noni beradi. ～ことにしましょう — rejani o'zgartirib, birgalikda yangi qaror qabul qilishni taklif qilish.",
      },
    },
  },
  {
    char: "売",
    onyomi: "バイ",
    kunyomi: "う.る, う.れる",
    meanings: {
      ru: "продавать",
      uz: "sotmoq",
    },
    words: [
      {
        kanji: "売る",
        kana: "うる",
        mean_ru: "продавать",
        mean_uz: "sotmoq",
      },
      {
        kanji: "売り場",
        kana: "うりば",
        mean_ru: "отдел (в магазине)",
        mean_uz: "sotuv bo'limi",
      },
      {
        kanji: "発売",
        kana: "はつばい",
        mean_ru: "старт продаж",
        mean_uz: "sotuvga chiqish",
      },
    ],
    sentence: {
      jp: "コンサートのチケットは、発売されてすぐに売り切れてしまったそうです。",
      rubyData: [
        {
          text: "コンサートのチケットは、",
        },
        {
          kanji: "発売",
          reading: "はつばい",
        },
        {
          text: "されてすぐに",
        },
        {
          kanji: "売",
          reading: "う",
        },
        {
          text: "り",
        },
        {
          kanji: "切",
          reading: "き",
        },
        {
          text: "れてしまったそうです。",
        },
      ],
      translation: {
        ru: "Говорят, что билеты на концерт распродались (закончились) сразу же, как только поступили в продажу.",
        uz: "Aytishlaricha, konsert chiptalari sotuvga chiqishi bilanoq darhol tugab qolibdi.",
      },
      grammarPoint: {
        ru: "～てすぐに означает «сразу после того, как...». Суффикс ～そうです в конце предложения передает чужие слова или слухи: «я слышал, что билеты распроданы».",
        uz: "～てすぐに «shunday qilingach, darhol...» degan ma'noni anglatadi. Gap oxiridagi ～そうです boshqalarning gapi yoki mish-mishlarni yetkazadi.",
      },
    },
  },
  {
    char: "夏",
    onyomi: "カ, ゲ",
    kunyomi: "なつ",
    meanings: {
      ru: "лето",
      uz: "yoz",
    },
    words: [
      {
        kanji: "夏",
        kana: "なつ",
        mean_ru: "лето",
        mean_uz: "yoz",
      },
      {
        kanji: "夏休み",
        kana: "なつやすみ",
        mean_ru: "летние каникулы",
        mean_uz: "yozgi ta'til",
      },
      {
        kanji: "真夏",
        kana: "まなつ",
        mean_ru: "середина лета, разгар",
        mean_uz: "ayni yoz chilla",
      },
    ],
    sentence: {
      jp: "夏休みが終わる前に、どうしても友達と海へ行っておきたいです。",
      rubyData: [
        {
          kanji: "夏休",
          reading: "なつやす",
        },
        {
          text: "みが",
        },
        {
          kanji: "終",
          reading: "お",
        },
        {
          text: "わる",
        },
        {
          kanji: "前",
          reading: "まえ",
        },
        {
          text: "に、どうしても",
        },
        {
          kanji: "友達",
          reading: "ともだち",
        },
        {
          text: "と",
        },
        {
          kanji: "海",
          reading: "うみ",
        },
        {
          text: "へ",
        },
        {
          kanji: "行",
          reading: "い",
        },
        {
          text: "っておきたいです。",
        },
      ],
      translation: {
        ru: "До того как закончатся летние каникулы, я во что бы то ни стало хочу съездить с друзьями на море.",
        uz: "Yozgi ta'til tugashidan oldin, nima qilib bo'lsa ham do'stlarim bilan dengizga borib kelmoqchiman.",
      },
      grammarPoint: {
        ru: "～ておきたい — сочетание «сделать заранее» (ておく) и «хочу» (たい). Здесь оно передает желание создать воспоминание. どうしても = «во что бы то ни стало».",
        uz: "～ておきたい — «oldindan qilib qo'yish» (ておく) va «xohlamoq» (たい) shakllarining birlashmasi. どうしても = «nima qilib bo'lsa ham».",
      },
    },
  },
  {
      char: "夕",
      onyomi: "セキ",
      kunyomi: "ゆう",
      meanings: {
        ru: "вечер",
        uz: "kechqurun",
      },
      words: [
        {
          kanji: "夕方",
          kana: "ゆうがた",
          mean_ru: "вечер",
          mean_uz: "kechqurun",
        },
        {
          kanji: "夕食",
          kana: "ゆうしょく",
          mean_ru: "ужин",
          mean_uz: "kechki ovqat",
        },
        {
          kanji: "夕日",
          kana: "ゆうひ",
          mean_ru: "заходящее солнце",
          mean_uz: "botayotgan quyosh",
        },
      ],
      sentence: {
        jp: "夕方から雨が降るそうなので、傘を持っていきます。",
        rubyData: [
          {
            kanji: "夕方",
            reading: "ゆうがた",
          },
          {
            text: "から",
          },
          {
            kanji: "雨",
            reading: "あめ",
          },
          {
            text: "が",
          },
          {
            kanji: "降",
            reading: "ふ",
          },
          {
            text: "るそうなので、",
          },
          {
            kanji: "傘",
            reading: "かさ",
          },
          {
            text: "を",
          },
          {
            kanji: "持",
            reading: "も",
          },
          {
            text: "っていきます。",
          },
        ],
        translation: {
          ru: "По прогнозу с вечера пойдёт дождь, поэтому я беру с собой зонт.",
          uz: "Ob-havo ma'lumotiga ko'ra kechqurundan yomg'ir yog'ar ekan, shuning uchun soyabon olib ketyapman.",
        },
        grammarPoint: {
          ru: "～そうなので объединяет информацию из чужих слов (здесь — прогноз погоды) и мягкую причину (～ので). Это идеальная и очень частая конструкция для объяснения своих повседневных решений.",
          uz: "～そうなので biror xabar yoki prognozga (～そう) asoslangan sababni (～ので) ifodalaydi. Bu ob-havo kabi eshitgan ma'lumot asosida harakat qilganda ko'p ishlatiladi.",
        },
      },
    },
    {
      char: "多",
      onyomi: "タ",
      kunyomi: "おお.い",
      meanings: {
        ru: "много",
        uz: "ko'p",
      },
      words: [
        {
          kanji: "多い",
          kana: "おおい",
          mean_ru: "многочисленный",
          mean_uz: "ko'p (miqdor jihatdan)",
        },
        {
          kanji: "多分",
          kana: "たぶん",
          mean_ru: "наверное",
          mean_uz: "ehtimol, balki",
        },
        {
          kanji: "多数",
          kana: "たすう",
          mean_ru: "большинство",
          mean_uz: "ko'pchilik",
        },
      ],
      sentence: {
        jp: "最近、日本へ旅行に行く人が多くなりましたね。",
        rubyData: [
          {
            kanji: "最近",
            reading: "さいきん",
          },
          {
            text: "、",
          },
          {
            kanji: "日本",
            reading: "にほん",
          },
          {
            text: "へ",
          },
          {
            kanji: "旅行",
            reading: "りょこう",
          },
          {
            text: "に",
          },
          {
            kanji: "行",
            reading: "い",
          },
          {
            text: "く",
          },
          {
            kanji: "人",
            reading: "ひと",
          },
          {
            text: "が",
          },
          {
            kanji: "多",
            reading: "おお",
          },
          {
            text: "くなりましたね。",
          },
        ],
        translation: {
          ru: "В последнее время стало много людей, которые едут путешествовать в Японию, правда?",
          uz: "So'nggi paytlarda Yaponiyaga sayohatga boradiganlar ko'payib qoldi, shunday emasmi?",
        },
        grammarPoint: {
          ru: "～くなりました показывает изменение, которое уже произошло. Это частый и естественный шаблон для светской беседы, когда вы делитесь наблюдениями о том, как изменилась ситуация.",
          uz: "～くなりました sodir bo'lgan o'zgarishni ko'rsatadi. Bu suhbatdosh bilan hayotdagi yoki odamlardagi o'zgarishlarni bo'lishganda ishlatiladigan tabiiy ifoda.",
        },
      },
    },
    {
      char: "夜",
      onyomi: "ヤ",
      kunyomi: "よる, よ",
      meanings: {
        ru: "ночь",
        uz: "tun",
      },
      words: [
        {
          kanji: "夜",
          kana: "よる",
          mean_ru: "ночь",
          mean_uz: "tun, kecha",
        },
        {
          kanji: "今夜",
          kana: "こんや",
          mean_ru: "сегодня ночью",
          mean_uz: "bugun tunda",
        },
        {
          kanji: "夜中",
          kana: "よなか",
          mean_ru: "глубокая ночь",
          mean_uz: "yarim tun",
        },
      ],
      sentence: {
        jp: "今夜は少し冷えるので、暖かくして寝てくださいね。",
        rubyData: [
          {
            kanji: "今夜",
            reading: "こんや",
          },
          {
            text: "は",
          },
          {
            kanji: "少",
            reading: "すこ",
          },
          {
            text: "し",
          },
          {
            kanji: "冷",
            reading: "ひ",
          },
          {
            text: "えるので、",
          },
          {
            kanji: "暖",
            reading: "あたた",
          },
          {
            text: "かくして",
          },
          {
            kanji: "寝",
            reading: "ね",
          },
          {
            text: "てくださいね。",
          },
        ],
        translation: {
          ru: "Сегодня ночью будет прохладно, поэтому, пожалуйста, спите в тепле.",
          uz: "Bugun tunda biroz sovuq bo'ladi, shuning uchun issiqroq yopinib uxlang.",
        },
        grammarPoint: {
          ru: "～くして + глагол — это указание на то, в каком состоянии нужно выполнить действие. <ruby>暖<rt>あたた</rt></ruby>かくして<ruby>寝<rt>ね</rt></ruby>る означает «согреться и лечь спать». Очень частая и естественная фраза заботы.",
          uz: "～くして + fe'l biror narsani qanday holatda qilish kerakligini ko'rsatadi. <ruby>暖<rt>あたた</rt></ruby>かくして<ruby>寝<rt>ね</rt></ruby>る sovuq kunlarda «issiq yopinib uxlash» degan ma'noni berib, g'amxo'rlikni ifodalaydi.",
        },
      },
    },
    {
      char: "妹",
      onyomi: "マイ",
      kunyomi: "いもうと",
      meanings: {
        ru: "младшая сестра",
        uz: "singil",
      },
      words: [
        {
          kanji: "妹",
          kana: "いもうと",
          mean_ru: "младшая сестра",
          mean_uz: "singil",
        },
        {
          kanji: "姉妹",
          kana: "しまい",
          mean_ru: "сёстры",
          mean_uz: "opa-singillar",
        },
        {
          kanji: "妹さん",
          kana: "いもうとさん",
          mean_ru: "младшая сестра (чужая)",
          mean_uz: "singil (boshqa odamniki)",
        },
      ],
      sentence: {
        jp: "妹は来年から東京の大学に通う予定です。",
        rubyData: [
          {
            kanji: "妹",
            reading: "いもうと",
          },
          {
            text: "は",
          },
          {
            kanji: "来年",
            reading: "らいねん",
          },
          {
            text: "から",
          },
          {
            kanji: "東京",
            reading: "とうきょう",
          },
          {
            text: "の",
          },
          {
            kanji: "大学",
            reading: "だいがく",
          },
          {
            text: "に",
          },
          {
            kanji: "通",
            reading: "かよ",
          },
          {
            text: "う",
          },
          {
            kanji: "予定",
            reading: "よてい",
          },
          {
            text: "です。",
          },
        ],
        translation: {
          ru: "Моя младшая сестра планирует со следующего года ходить в университет в Токио.",
          uz: "Singlim kelasi yildan Tokiodagi universitetga qatnashni rejalashtirmoqda.",
        },
        grammarPoint: {
          ru: "～予定です показывает твёрдый, уже определённый план или расписание. Так говорят о том, что уже решено на практике (поступление, переезд, встреча), а не просто о мечтах.",
          uz: "～予定です qat'iy va belgilangan reja yoki jadvalni bildiradi. Bu shunchaki orzu emas, balki aniq hal qilingan ishlar (o'qishga kirish, ko'chish, majlis) haqida gapirilganda ishlatiladi.",
        },
      },
    },
    {
      char: "姉",
      onyomi: "シ",
      kunyomi: "あね",
      meanings: {
        ru: "старшая сестра",
        uz: "opa",
      },
      words: [
        {
          kanji: "姉",
          kana: "あね",
          mean_ru: "старшая сестра",
          mean_uz: "opa",
        },
        {
          kanji: "お姉さん",
          kana: "おねえさん",
          mean_ru: "старшая сестра (вежливо)",
          mean_uz: "opa (boshqa odamniki)",
        },
        {
          kanji: "姉妹",
          kana: "しまい",
          mean_ru: "сёстры",
          mean_uz: "opa-singillar",
        },
      ],
      sentence: {
        jp: "姉が作ったケーキは、お店のより美味しいと思います。",
        rubyData: [
          {
            kanji: "姉",
            reading: "あね",
          },
          {
            text: "が",
          },
          {
            kanji: "作",
            reading: "つく",
          },
          {
            text: "ったケーキは、お",
          },
          {
            kanji: "店",
            reading: "みせ",
          },
          {
            text: "のより",
          },
          {
            kanji: "美味",
            reading: "おい",
          },
          {
            text: "しいと",
          },
          {
            kanji: "思",
            reading: "おも",
          },
          {
            text: "います。",
          },
        ],
        translation: {
          ru: "Я думаю, торт, который испекла старшая сестра, вкуснее магазинного.",
          uz: "Opam pishirgan tort do'kondaginikiga qaraganda mazaliroq deb o'ylayman.",
        },
        grammarPoint: {
          ru: "～より... と思います — классическое, но живое выражение мнения через сравнение. В разговорной речи часто опускают существительное: お<ruby>店<rt>みせ</rt></ruby>の означает «тот, что из магазина».",
          uz: "～より... と思います qiyoslash orqali o'z fikrini ifodalashning eng tabiiy usulidir. Kundalik nutqda ot tushirib qoldirilishi mumkin: お<ruby>店<rt>みせ</rt></ruby>の «do'kondagi» degan ma'noni beradi.",
        },
      },
    },
    {
      char: "始",
      onyomi: "シ",
      kunyomi: "はじ.める, はじ.まる",
      meanings: {
        ru: "начинать",
        uz: "boshlamoq",
      },
      words: [
        {
          kanji: "始める",
          kana: "はじめる",
          mean_ru: "начинать (что-то)",
          mean_uz: "boshlamoq",
        },
        {
          kanji: "始まる",
          kana: "はじまる",
          mean_ru: "начинаться",
          mean_uz: "boshlanmoq",
        },
        {
          kanji: "開始",
          kana: "かいし",
          mean_ru: "начало",
          mean_uz: "boshlanish",
        },
      ],
      sentence: {
        jp: "会議が始まる前に、この資料を読んでおいてください。",
        rubyData: [
          {
            kanji: "会議",
            reading: "かいぎ",
          },
          {
            text: "が",
          },
          {
            kanji: "始",
            reading: "はじ",
          },
          {
            text: "まる",
          },
          {
            kanji: "前",
            reading: "まえ",
          },
          {
            text: "に、この",
          },
          {
            kanji: "資料",
            reading: "しりょう",
          },
          {
            text: "を",
          },
          {
            kanji: "読",
            reading: "よ",
          },
          {
            text: "んでおいてください。",
          },
        ],
        translation: {
          ru: "Пожалуйста, прочитайте эти материалы заранее, до начала собрания.",
          uz: "Majlis boshlanishidan oldin, iltimos, ushbu hujjatlarni oldindan o'qib chiqing.",
        },
        grammarPoint: {
          ru: "～ておく показывает действие, которое мы делаем «впрок» или для подготовки к чему-то в будущем. Это очень полезная офисная и бытовая форма: <ruby>読<rt>よ</rt></ruby>んでおく = «прочитать заранее».",
          uz: "～ておく kelajakdagi biror vaziyatga tayyorgarlik ko'rish uchun oldindan qilinadigan harakatni bildiradi. Ofis va kundalik hayotda ko'p ishlatiladi: <ruby>読<rt>よ</rt></ruby>んでおく = «oldindan o'qib qo'yish».",
        },
      },
    },
    {
      char: "字",
      onyomi: "ジ",
      kunyomi: "",
      meanings: {
        ru: "иероглиф, знак",
        uz: "harf, iyeroglif",
      },
      words: [
        {
          kanji: "漢字",
          kana: "かんじ",
          mean_ru: "иероглиф",
          mean_uz: "kanji, iyeroglif",
        },
        {
          kanji: "文字",
          kana: "もじ",
          mean_ru: "буква, символ",
          mean_uz: "harf, belgi",
        },
        {
          kanji: "数字",
          kana: "すうじ",
          mean_ru: "цифра, число",
          mean_uz: "raqam, son",
        },
      ],
      sentence: {
        jp: "遠くて字がよく見えないので、もう少し前に行きましょう。",
        rubyData: [
          {
            kanji: "遠",
            reading: "とお",
          },
          {
            text: "くて",
          },
          {
            kanji: "字",
            reading: "じ",
          },
          {
            text: "がよく",
          },
          {
            kanji: "見",
            reading: "み",
          },
          {
            text: "えないので、もう",
          },
          {
            kanji: "少",
            reading: "すこ",
          },
          {
            text: "し",
          },
          {
            kanji: "前",
            reading: "まえ",
          },
          {
            text: "に",
          },
          {
            kanji: "行",
            reading: "い",
          },
          {
            text: "きましょう。",
          },
        ],
        translation: {
          ru: "Далеко, и символы плохо видно, поэтому давайте подойдём чуть поближе.",
          uz: "Uzoqroq va yozuvlar yaxshi ko'rinmayapti, shuning uchun keling, biroz oldinroqqa o'tamiz.",
        },
        grammarPoint: {
          ru: "Глагол <ruby>見<rt>み</rt></ruby>えない — это отрицательная форма потенциального залога («не мочь рассмотреть»). Вместе с ～ので она создаёт вежливое и логичное объяснение, почему вы предлагаете переместиться.",
          uz: "<ruby>見<rt>み</rt></ruby>えない fe'li inkor ma'nosidagi potensial shakl («ko'ra olmaslik»). ～ので bilan birga nima uchun biror narsa taklif qilayotganingizni mantiqiy va xushmuomala tushuntiradi.",
        },
      },
    },
    {
      char: "安",
      onyomi: "アン",
      kunyomi: "やす.い",
      meanings: {
        ru: "дешёвый, безопасный",
        uz: "arzon, xavfsiz",
      },
      words: [
        {
          kanji: "安い",
          kana: "やすい",
          mean_ru: "дешёвый",
          mean_uz: "arzon",
        },
        {
          kanji: "安全",
          kana: "あんぜん",
          mean_ru: "безопасность",
          mean_uz: "xavfsizlik",
        },
        {
          kanji: "安心",
          kana: "あんしん",
          mean_ru: "спокойствие, облегчение",
          mean_uz: "xotirjamlik",
        },
      ],
      sentence: {
        jp: "このアプリを使うと、もっと安くチケットが買えますよ。",
        rubyData: [
          {
            text: "このアプリを",
          },
          {
            kanji: "使",
            reading: "つか",
          },
          {
            text: "うと、もっと",
          },
          {
            kanji: "安",
            reading: "やす",
          },
          {
            text: "くチケットが",
          },
          {
            kanji: "買",
            reading: "か",
          },
          {
            text: "えますよ。",
          },
        ],
        translation: {
          ru: "Если использовать это приложение, билеты можно будет купить ещё дешевле.",
          uz: "Bu ilovadan foydalansangiz, chiptalarni yanada arzonroq sotib olishingiz mumkin.",
        },
        grammarPoint: {
          ru: "Условие ～と здесь показывает неизбежный, логичный результат (используешь = получаешь выгоду). А <ruby>買<rt>か</rt></ruby>えます (мочь купить) подчёркивает саму возможность.",
          uz: "Bu yerdagi ～と sharti tabiiy va mantiqiy natijani (ilovadan foydalanish = foyda olish) ko'rsatadi. <ruby>買<rt>か</rt></ruby>えます (sotib ololmoq) esa mavjud imkoniyatni ta'kidlaydi.",
        },
      },
    },
    {
      char: "室",
      onyomi: "シツ",
      kunyomi: "むろ",
      meanings: {
        ru: "комната",
        uz: "xona",
      },
      words: [
        {
          kanji: "教室",
          kana: "きょうしつ",
          mean_ru: "аудитория, класс",
          mean_uz: "sinf xonasi",
        },
        {
          kanji: "会議室",
          kana: "かいぎしつ",
          mean_ru: "переговорная",
          mean_uz: "majlislar zali",
        },
        {
          kanji: "待合室",
          kana: "まちあいしつ",
          mean_ru: "зал ожидания",
          mean_uz: "kutish zali",
        },
      ],
      sentence: {
        jp: "面接の順番が来るまで、待合室でお待ちください。",
        rubyData: [
          {
            kanji: "面接",
            reading: "めんせつ",
          },
          {
            text: "の",
          },
          {
            kanji: "順番",
            reading: "じゅんばん",
          },
          {
            text: "が",
          },
          {
            kanji: "来",
            reading: "く",
          },
          {
            text: "るまで、",
          },
          {
            kanji: "待合室",
            reading: "まちあいしつ",
          },
          {
            text: "でお",
          },
          {
            kanji: "待",
            reading: "ま",
          },
          {
            text: "ちください。",
          },
        ],
        translation: {
          ru: "Пожалуйста, подождите в зале ожидания, пока не подойдёт ваша очередь на собеседование.",
          uz: "Suhbat navbatingiz kelguniga qadar, iltimos, kutish zalida kutib turing.",
        },
        grammarPoint: {
          ru: "～まで означает предел ожидания («до тех пор, пока не»). Форма お + основа глагола + ください — это мягкий, вежливый способ попросить, который вы услышите в любой клинике или офисе в Японии.",
          uz: "～まで biror harakatning tugash nuqtasini bildirib («-gacha»), お + fe'l o'zagi + ください shakli shifoxona va ofislarda ko'p eshitiladigan muloyim iltimosni anglatadi.",
        },
      },
    },
    {
      char: "家",
      onyomi: "カ, ケ",
      kunyomi: "いえ, うち",
      meanings: {
        ru: "дом, семья",
        uz: "uy, oila",
      },
      words: [
        {
          kanji: "家",
          kana: "いえ",
          mean_ru: "дом",
          mean_uz: "uy",
        },
        {
          kanji: "家族",
          kana: "かぞく",
          mean_ru: "семья",
          mean_uz: "oila",
        },
        {
          kanji: "家賃",
          kana: "やちん",
          mean_ru: "арендная плата",
          mean_uz: "ijara haqi",
        },
      ],
      sentence: {
        jp: "家に帰ったら、すぐにお風呂に入って休みたいです。",
        rubyData: [
          {
            kanji: "家",
            reading: "いえ",
          },
          {
            text: "に",
          },
          {
            kanji: "帰",
            reading: "かえ",
          },
          {
            text: "ったら、すぐにお",
          },
          {
            kanji: "風呂",
            reading: "ふろ",
          },
          {
            text: "に",
          },
          {
            kanji: "入",
            reading: "はい",
          },
          {
            text: "って",
          },
          {
            kanji: "休",
            reading: "やす",
          },
          {
            text: "みたいです。",
          },
        ],
        translation: {
          ru: "Когда вернусь домой, хочу сразу принять ванну и отдохнуть.",
          uz: "Uyga qaytgach, darhol vannaga tushib dam olishni xohlayman.",
        },
        grammarPoint: {
          ru: "～たら здесь показывает действие, которое случится строго после завершения другого («как только вернусь»). Это самый популярный способ строить планы на вечер после работы.",
          uz: "Bu yerdagi ～たら bir harakat to'liq tugaganidan keyin sodir bo'ladigan holatni («qaytgach») bildiradi. Bu ishdan keyin kechki rejalarni aytishning eng mashhur usuli.",
        },
      },
    },
    {
      char: "少",
      onyomi: "ショウ",
      kunyomi: "すこ.し, すく.ない",
      meanings: {
        ru: "мало, немного",
        uz: "kam, biroz",
      },
      words: [
        {
          kanji: "少し",
          kana: "すこし",
          mean_ru: "немного",
          mean_uz: "biroz",
        },
        {
          kanji: "少ない",
          kana: "すくない",
          mean_ru: "мало (о количестве)",
          mean_uz: "kam (miqdor jihatdan)",
        },
        {
          kanji: "少年",
          kana: "しょうねん",
          mean_ru: "мальчик, юноша",
          mean_uz: "o'smir bola",
        },
      ],
      sentence: {
        jp: "今月は残業が少なかったので、給料がちょっと心配です。",
        rubyData: [
          {
            kanji: "今月",
            reading: "こんげつ",
          },
          {
            text: "は",
          },
          {
            kanji: "残業",
            reading: "ざんぎょう",
          },
          {
            text: "が",
          },
          {
            kanji: "少",
            reading: "すく",
          },
          {
            text: "なかったので、",
          },
          {
            kanji: "給料",
            reading: "きゅうりょう",
          },
          {
            text: "がちょっと",
          },
          {
            kanji: "心配",
            reading: "しんぱい",
          },
          {
            text: "です。",
          },
        ],
        translation: {
          ru: "В этом месяце было мало переработок, поэтому я немного переживаю из-за зарплаты.",
          uz: "Bu oyda qo'shimcha ish kam bo'lgani uchun, oylik haqida biroz xavotirdaman.",
        },
        grammarPoint: {
          ru: "В японском языке <ruby>少<rt>すく</rt></ruby>ない (мало) часто выступает как прилагательное, описывая существительное: «переработки были малочисленными». Это очень естественный способ говорить о количестве.",
          uz: "Yapon tilida <ruby>少<rt>すく</rt></ruby>ない (kam) ko'pincha miqdorni tasvirlovchi sifat kabi ishlaydi: «qo'shimcha ishlar kam sonli edi». Bu miqdor haqida gapirishning tabiiy usulidir.",
        },
      },
    },
    {
      char: "屋",
      onyomi: "オク",
      kunyomi: "や",
      meanings: {
        ru: "дом, магазин, крыша",
        uz: "uy, do'kon, tom",
      },
      words: [
        {
          kanji: "部屋",
          kana: "へや",
          mean_ru: "комната",
          mean_uz: "xona",
        },
        {
          kanji: "本屋",
          kana: "ほんや",
          mean_ru: "книжный магазин",
          mean_uz: "kitob do'koni",
        },
        {
          kanji: "屋上",
          kana: "おくじょう",
          mean_ru: "крыша",
          mean_uz: "tom qismi",
        },
      ],
      sentence: {
        jp: "帰りに本屋へ寄って、新しい雑誌を買うつもりです。",
        rubyData: [
          {
            kanji: "帰",
            reading: "かえ",
          },
          {
            text: "りに",
          },
          {
            kanji: "本屋",
            reading: "ほんや",
          },
          {
            text: "へ",
          },
          {
            kanji: "寄",
            reading: "よ",
          },
          {
            text: "って、",
          },
          {
            kanji: "新",
            reading: "あたら",
          },
          {
            text: "しい",
          },
          {
            kanji: "雑誌",
            reading: "ざっし",
          },
          {
            text: "を",
          },
          {
            kanji: "買",
            reading: "か",
          },
          {
            text: "うつもりです。",
          },
        ],
        translation: {
          ru: "По пути домой я планирую зайти в книжный и купить новый журнал.",
          uz: "Qaytishda kitob do'koniga kirib o'tib, yangi jurnal sotib olish niyatidaman.",
        },
        grammarPoint: {
          ru: "<ruby>帰<rt>かえ</rt></ruby>りに — отличное разговорное выражение, означающее «по пути домой». ～つもりです добавляет осознанности: это не просто идея, а чёткий план на ближайшее время.",
          uz: "<ruby>帰<rt>かえ</rt></ruby>りに — «qaytishda / yo'l-yo'lakay» degan ajoyib so'zlashuv ifodasi. ～つもりです esa aniq va ongli rejani anglatadi.",
        },
      },
    },
    {
      char: "工",
      onyomi: "コウ, ク",
      kunyomi: "",
      meanings: {
        ru: "работа, мастерство",
        uz: "ish, hunar",
      },
      words: [
        {
          kanji: "工場",
          kana: "こうじょう",
          mean_ru: "завод, фабрика",
          mean_uz: "zavod, fabrika",
        },
        {
          kanji: "工事",
          kana: "こうじ",
          mean_ru: "строительные работы",
          mean_uz: "qurilish ishlari",
        },
        {
          kanji: "人工",
          kana: "じんこう",
          mean_ru: "искусственный",
          mean_uz: "sun'iy",
        },
      ],
      sentence: {
        jp: "道の工事をしていて、車が通れないみたいです。",
        rubyData: [
          {
            kanji: "道",
            reading: "みち",
          },
          {
            text: "の",
          },
          {
            kanji: "工事",
            reading: "こうじ",
          },
          {
            text: "をしていて、",
          },
          {
            kanji: "車",
            reading: "くるま",
          },
          {
            text: "が",
          },
          {
            kanji: "通",
            reading: "とお",
          },
          {
            text: "れないみたいです。",
          },
        ],
        translation: {
          ru: "Там ведутся дорожные работы, и, похоже, машины проехать не могут.",
          uz: "Yo'lda qurilish ishlari ketyapti va aftidan u yerdan mashinalar o'ta olmaydi.",
        },
        grammarPoint: {
          ru: "～みたいです показывает вывод на основе того, что человек видит или слышит («похоже, что»). В сочетании с отрицательной потенциальной формой (<ruby>通<rt>とお</rt></ruby>れない) это звучит максимально живо.",
          uz: "～みたいです inson ko'rgan yoki eshitgan narsasi asosidagi xulosani («aftidan») bildiradi. Buni salbiy potensial shakl (<ruby>通<rt>とお</rt></ruby>れない - o'tolmaslik) bilan ishlatish judayam tabiiy eshitiladi.",
        },
      },
    },
    {
      char: "帰",
      onyomi: "キ",
      kunyomi: "かえ.る",
      meanings: {
        ru: "возвращаться",
        uz: "qaytmoq",
      },
      words: [
        {
          kanji: "帰る",
          kana: "かえる",
          mean_ru: "возвращаться",
          mean_uz: "qaytmoq",
        },
        {
          kanji: "帰国",
          kana: "きこく",
          mean_ru: "возвращение на родину",
          mean_uz: "vataniga qaytish",
        },
        {
          kanji: "日帰り",
          kana: "ひがえり",
          mean_ru: "поездка одним днём",
          mean_uz: "bir kunlik sayohat",
        },
      ],
      sentence: {
        jp: "暗くならないうちに、早くホテルへ帰りましょう。",
        rubyData: [
          {
            kanji: "暗",
            reading: "くら",
          },
          {
            text: "くならないうちに、",
          },
          {
            kanji: "早",
            reading: "はや",
          },
          {
            text: "くホテルへ",
          },
          {
            kanji: "帰",
            reading: "かえ",
          },
          {
            text: "りましょう。",
          },
        ],
        translation: {
          ru: "Давайте скорее вернёмся в отель, пока не стемнело.",
          uz: "Qorong'i tushmasdan oldin, tezroq mehmonxonaga qaytaylik.",
        },
        grammarPoint: {
          ru: "～ないうちに — прекрасная грамматика N4, означающая «пока ситуация не изменилась». Она подталкивает к действию до того, как станет поздно, темно или пойдёт дождь.",
          uz: "～ないうちに — «vaziyat o'zgarmasidan oldin» degan ma'noni beruvchi ajoyib N4 grammatikasi. Bu biror narsani kech tushmasdan yoki yomg'ir yog'masdan oldin qilishga undaydi.",
        },
      },
    },
    {
      char: "広",
      onyomi: "コウ",
      kunyomi: "ひろ.い",
      meanings: {
        ru: "широкий, просторный",
        uz: "keng",
      },
      words: [
        {
          kanji: "広い",
          kana: "ひろい",
          mean_ru: "просторный, широкий",
          mean_uz: "keng",
        },
        {
          kanji: "広場",
          kana: "ひろば",
          mean_ru: "площадь",
          mean_uz: "maydon",
        },
        {
          kanji: "広告",
          kana: "こうこく",
          mean_ru: "реклама",
          mean_uz: "reklama",
        },
      ],
      sentence: {
        jp: "この部屋は広くて明るいので、とても仕事がしやすいです。",
        rubyData: [
          {
            text: "この",
          },
          {
            kanji: "部屋",
            reading: "へや",
          },
          {
            text: "は",
          },
          {
            kanji: "広",
            reading: "ひろ",
          },
          {
            text: "くて",
          },
          {
            kanji: "明",
            reading: "あか",
          },
          {
            text: "るいので、とても",
          },
          {
            kanji: "仕事",
            reading: "しごと",
          },
          {
            text: "がしやすいです。",
          },
        ],
        translation: {
          ru: "Эта комната просторная и светлая, поэтому в ней очень легко работать.",
          uz: "Bu xona keng va yorug' bo'lgani uchun unda ishlash juda qulay.",
        },
        grammarPoint: {
          ru: "Глагол + やすい означает, что действие выполнять легко или комфортно. <ruby>仕事<rt>しごと</rt></ruby>がしやすい = буквально «легко делать работу». Очень популярный оборот при оценке мест или вещей.",
          uz: "Fe'l + やすい bu harakatni bajarish oson va qulayligini bildiradi. <ruby>仕事<rt>しごと</rt></ruby>がしやすい = «ishlash oson». Joylar va narsalarni baholashda juda ko'p ishlatiladi.",
        },
      },
    },
    {
      char: "店",
      onyomi: "テン",
      kunyomi: "みせ",
      meanings: {
        ru: "магазин, заведение",
        uz: "do'kon",
      },
      words: [
        {
          kanji: "店",
          kana: "みせ",
          mean_ru: "магазин, ресторан",
          mean_uz: "do'kon, restoran",
        },
        {
          kanji: "店長",
          kana: "てんちょう",
          mean_ru: "управляющий магазином",
          mean_uz: "do'kon mudiri",
        },
        {
          kanji: "飲食店",
          kana: "いんしょくてん",
          mean_ru: "заведение общепита",
          mean_uz: "ovqatlanish joyi, restoran",
        },
      ],
      sentence: {
        jp: "あの店はいつも混んでいるから、予約したほうがいいですよ。",
        rubyData: [
          {
            text: "あの",
          },
          {
            kanji: "店",
            reading: "みせ",
          },
          {
            text: "はいつも",
          },
          {
            kanji: "混",
            reading: "こ",
          },
          {
            text: "んでいるから、",
          },
          {
            kanji: "予約",
            reading: "よやく",
          },
          {
            text: "したほうがいいですよ。",
          },
        ],
        translation: {
          ru: "В том заведении всегда толпа, так что лучше забронировать столик заранее.",
          uz: "U restoranda doim odam ko'p bo'ladi, shuning uchun oldindan band qilib qo'yganingiz ma'qul.",
        },
        grammarPoint: {
          ru: "～たほうがいい — это сильный, но заботливый совет («лучше сделать так, иначе будут проблемы»). Отлично подходит для житейских рекомендаций друзьям или коллегам.",
          uz: "～たほうがいい kuchli, ammo g'amxo'r maslahat («shunday qilgan yaxshi, aks holda qiyin bo'ladi»). Do'stlarga va kasbdoshlarga amaliy tavsiyalar berishda juda mos keladi.",
        },
      },
    },
    {
      char: "度",
      onyomi: "ド, ト",
      kunyomi: "たび",
      meanings: {
        ru: "раз, степень",
        uz: "marta, daraja",
      },
      words: [
        {
          kanji: "今度",
          kana: "こんど",
          mean_ru: "в следующий раз, в этот раз",
          mean_uz: "kelgusi safar, bu safar",
        },
        {
          kanji: "温度",
          kana: "おんど",
          mean_ru: "температура",
          mean_uz: "harorat",
        },
        {
          kanji: "一度",
          kana: "いちど",
          mean_ru: "один раз",
          mean_uz: "bir marta",
        },
      ],
      sentence: {
        jp: "今度の日曜日、一緒に映画でも見に行きませんか。",
        rubyData: [
          {
            kanji: "今度",
            reading: "こんど",
          },
          {
            text: "の",
          },
          {
            kanji: "日曜日",
            reading: "にちようび",
          },
          {
            text: "、",
          },
          {
            kanji: "一緒",
            reading: "いっしょ",
          },
          {
            text: "に",
          },
          {
            kanji: "映画",
            reading: "えいが",
          },
          {
            text: "でも",
          },
          {
            kanji: "見",
            reading: "み",
          },
          {
            text: "に",
          },
          {
            kanji: "行",
            reading: "い",
          },
          {
            text: "きませんか。",
          },
        ],
        translation: {
          ru: "В следующее воскресенье не хотите ли сходить вместе в кино или куда-нибудь ещё?",
          uz: "Kelasi yakshanba birgalikda kino yoki shunga o'xshash biror narsa ko'rgani bormaymizmi?",
        },
        grammarPoint: {
          ru: "Частица でも после существительного («кино и т.п.») делает предложение менее категоричным. Это смягчает приглашение: вы предлагаете кино, но открыты к другим идеям.",
          uz: "Otdan keyingi でも yuklamasi («kino va hokazo») gapni yumshoqroq qiladi. Taklifingiz kino bo'lsa-da, boshqa g'oyalarga ham ochiq ekanligingizni bildiradi.",
        },
      },
    },
    {
      char: "建",
      onyomi: "ケン, コン",
      kunyomi: "た.てる, た.つ",
      meanings: {
        ru: "строить",
        uz: "qurmoq",
      },
      words: [
        {
          kanji: "建てる",
          kana: "たてる",
          mean_ru: "строить",
          mean_uz: "qurmoq",
        },
        {
          kanji: "建物",
          kana: "たてもの",
          mean_ru: "здание",
          mean_uz: "bino",
        },
        {
          kanji: "建設",
          kana: "けんせつ",
          mean_ru: "строительство",
          mean_uz: "qurilish",
        },
      ],
      sentence: {
        jp: "駅の前に、新しいホテルが建てられるそうです。",
        rubyData: [
          {
            kanji: "駅",
            reading: "えき",
          },
          {
            text: "の",
          },
          {
            kanji: "前",
            reading: "まえ",
          },
          {
            text: "に、",
          },
          {
            kanji: "新",
            reading: "あたら",
          },
          {
            text: "しいホテルが",
          },
          {
            kanji: "建",
            reading: "た",
          },
          {
            text: "てられるそうです。",
          },
        ],
        translation: {
          ru: "Говорят, перед станцией построят новый отель.",
          uz: "Aytishlaricha, bekat oldida yangi mehmonxona qurilarkan.",
        },
        grammarPoint: {
          ru: "Пассивный залог (<ruby>建<rt>た</rt></ruby>てられる) здесь скрывает деятеля (неважно, кто строит), а ～そうです (передача слуха) показывает, что вы узнали об этом из новостей или от других людей.",
          uz: "Majhul nisbat (<ruby>建<rt>た</rt></ruby>てられる) harakat bajaruvchisini yashiradi (kim qurishi muhim emas), ～そうです esa ma'lumotni yangiliklardan yoki boshqalardan eshitganingizni bildiradi.",
        },
      },
    },
    {
      char: "弟",
      onyomi: "テイ, ダイ",
      kunyomi: "おとうと",
      meanings: {
        ru: "младший брат",
        uz: "uka",
      },
      words: [
        {
          kanji: "弟",
          kana: "おとうと",
          mean_ru: "младший брат",
          mean_uz: "uka",
        },
        {
          kanji: "兄弟",
          kana: "きょうだい",
          mean_ru: "братья и сёстры",
          mean_uz: "aka-uka, opa-singillar",
        },
        {
          kanji: "弟さん",
          kana: "おとうとさん",
          mean_ru: "младший брат (чужой)",
          mean_uz: "uka (boshqa odamniki)",
        },
      ],
      sentence: {
        jp: "弟はゲームをしてばかりいて、全然勉強しようとしません。",
        rubyData: [
          {
            kanji: "弟",
            reading: "おとうと",
          },
          {
            text: "はゲームをしてばかりいて、",
          },
          {
            kanji: "全然",
            reading: "ぜんぜん",
          },
          {
            kanji: "勉強",
            reading: "べんきょう",
          },
          {
            text: "しようとしません。",
          },
        ],
        translation: {
          ru: "Младший брат только и делает, что играет в игры, и совершенно не собирается учиться.",
          uz: "Ukam faqat o'yin o'ynash bilan band va umuman o'qishni xohlamaydi.",
        },
        grammarPoint: {
          ru: "Форма ～てばかりいる означает раздражение от того, что человек постоянно делает одно и то же. А ～ようとしない показывает полное отсутствие попыток или воли с его стороны.",
          uz: "～てばかりいる shakli kishining doimo bir xil narsani qilishidan jahl chiqishini anglatadi. ～ようとしない esa ushbu harakatni qilishga zarracha harakat yoki iroda yo'qligini bildiradi.",
        },
      },
    },
    {
      char: "強",
      onyomi: "キョウ, ゴウ",
      kunyomi: "つよ.い",
      meanings: {
        ru: "сильный",
        uz: "kuchli",
      },
      words: [
        {
          kanji: "強い",
          kana: "つよい",
          mean_ru: "сильный",
          mean_uz: "kuchli",
        },
        {
          kanji: "勉強",
          kana: "べんきょう",
          mean_ru: "учёба",
          mean_uz: "o'qish",
        },
        {
          kanji: "強風",
          kana: "きょうふう",
          mean_ru: "сильный ветер",
          mean_uz: "kuchli shamol",
        },
      ],
      sentence: {
        jp: "今日は風が強くて寒いので、外に出たくないです。",
        rubyData: [
          {
            kanji: "今日",
            reading: "きょう",
          },
          {
            text: "は",
          },
          {
            kanji: "風",
            reading: "かぜ",
          },
          {
            text: "が",
          },
          {
            kanji: "強",
            reading: "つよ",
          },
          {
            text: "くて",
          },
          {
            kanji: "寒",
            reading: "さむ",
          },
          {
            text: "いので、",
          },
          {
            kanji: "外",
            reading: "そと",
          },
          {
            text: "に",
          },
          {
            kanji: "出",
            reading: "で",
          },
          {
            text: "たくないです。",
          },
        ],
        translation: {
          ru: "Сегодня дует сильный ветер и холодно, поэтому я не хочу выходить на улицу.",
          uz: "Bugun shamol kuchli va sovuq bo'lgani uchun, tashqariga chiqishni xohlamayman.",
        },
        grammarPoint: {
          ru: "Окончание ～くて связывает два прилагательных (сильный ветер И холодно). Это очень плавный способ нанизывать причины перед тем, как сказать о своём нежелании что-то делать.",
          uz: "～くて qo'shimchasi ikkita sifatni birlashtiradi (shamol kuchli VA sovuq). Bu o'z xohishsizligini tushuntirishdan oldin sabablarni ketma-ket aytishning eng tabiiy usulidir.",
        },
      },
    },
    {
      char: "待",
      onyomi: "タイ",
      kunyomi: "ま.つ",
      meanings: {
        ru: "ждать",
        uz: "kutmoq",
      },
      words: [
        {
          kanji: "待つ",
          kana: "まつ",
          mean_ru: "ждать",
          mean_uz: "kutmoq",
        },
        {
          kanji: "招待",
          kana: "しょうたい",
          mean_ru: "приглашение",
          mean_uz: "taklifnoma, taklif etish",
        },
        {
          kanji: "期待",
          kana: "きたい",
          mean_ru: "ожидания, надежды",
          mean_uz: "umid, kutilma",
        },
      ],
      sentence: {
        jp: "もう30分も待っているのに、彼から連絡が来ません。",
        rubyData: [
          {
            text: "もう30",
          },
          {
            kanji: "分",
            reading: "ぷん",
          },
          {
            text: "も",
          },
          {
            kanji: "待",
            reading: "ま",
          },
          {
            text: "っているのに、",
          },
          {
            kanji: "彼",
            reading: "かれ",
          },
          {
            text: "から",
          },
          {
            kanji: "連絡",
            reading: "れんらく",
          },
          {
            text: "が",
          },
          {
            kanji: "来",
            reading: "き",
          },
          {
            text: "ません。",
          },
        ],
        translation: {
          ru: "Я жду уже целых 30 минут, а от него всё нет никаких вестей.",
          uz: "Mana 30 daqiqadan beri kutyapman, lekin undan hech qanday xabar yo'q.",
        },
        grammarPoint: {
          ru: "Частица も после времени подчёркивает, что это слишком долго. А союз ～のに (хотя/несмотря на) передаёт разочарование или недоумение от ситуации.",
          uz: "Vaqtdan keyingi も yuklamasi kutilgan vaqtning juda ko'pligini ta'kidlaydi. ～のに (-ga qaramay) esa vaziyatdan xafsalasi pir bo'lishini bildiradi.",
        },
      },
    },
    {
      char: "心",
      onyomi: "シン",
      kunyomi: "こころ",
      meanings: {
        ru: "сердце, душа",
        uz: "qalb, yurak",
      },
      words: [
        {
          kanji: "心",
          kana: "こころ",
          mean_ru: "сердце, душа",
          mean_uz: "qalb, yurak",
        },
        {
          kanji: "心配",
          kana: "しんぱい",
          mean_ru: "беспокойство",
          mean_uz: "tashvish, xavotir",
        },
        {
          kanji: "安心",
          kana: "あんしん",
          mean_ru: "спокойствие, облегчение",
          mean_uz: "xotirjamlik",
        },
      ],
      sentence: {
        jp: "親に心配をかけないように、週に一度は電話をしています。",
        rubyData: [
          {
            kanji: "親",
            reading: "おや",
          },
          {
            text: "に",
          },
          {
            kanji: "心配",
            reading: "しんぱい",
          },
          {
            text: "をかけないように、",
          },
          {
            kanji: "週",
            reading: "しゅう",
          },
          {
            text: "に",
          },
          {
            kanji: "一度",
            reading: "いちど",
          },
          {
            text: "は",
          },
          {
            kanji: "電話",
            reading: "でんわ",
          },
          {
            text: "をしています。",
          },
        ],
        translation: {
          ru: "Чтобы родители не переживали, я звоню им хотя бы раз в неделю.",
          uz: "Ota-onamni xavotirga qo'ymaslik uchun, haftada kamida bir marta qo'ng'iroq qilib turaman.",
        },
        grammarPoint: {
          ru: "～ないように используется для указания цели-предотвращения («чтобы не...»). Это очень жизненная конструкция, описывающая привычки и заботу о других людях.",
          uz: "～ないように oldini olish maqsadida («...maslik uchun») ishlatiladi. Bu odatlar va boshqa odamlarga bo'lgan g'amxo'rlikni tasvirlaydigan hayotiy konstruksiyadir.",
        },
      },
    },
    {
      char: "思",
      onyomi: "シ",
      kunyomi: "おも.う",
      meanings: {
        ru: "думать",
        uz: "o'ylamoq",
      },
      words: [
        {
          kanji: "思う",
          kana: "おもう",
          mean_ru: "думать",
          mean_uz: "o'ylamoq",
        },
        {
          kanji: "思い出す",
          kana: "おもいだす",
          mean_ru: "вспоминать",
          mean_uz: "eslamoq",
        },
        {
          kanji: "不思議",
          kana: "ふしぎ",
          mean_ru: "странный, удивительный",
          mean_uz: "g'alati, ajoyib",
        },
      ],
      sentence: {
        jp: "携帯が見つからないんですが、どこに置いたか全然思い出せません。",
        rubyData: [
          {
            kanji: "携帯",
            reading: "けいたい",
          },
          {
            text: "が",
          },
          {
            kanji: "見",
            reading: "み",
          },
          {
            text: "つからないんですが、どこに",
          },
          {
            kanji: "置",
            reading: "お",
          },
          {
            text: "いたか",
          },
          {
            kanji: "全然",
            reading: "ぜんぜん",
          },
          {
            kanji: "思",
            reading: "おも",
          },
          {
            text: "い",
          },
          {
            kanji: "出",
            reading: "だ",
          },
          {
            text: "せません。",
          },
        ],
        translation: {
          ru: "Я не могу найти телефон и вообще не помню, куда его положил.",
          uz: "Telefonimni topolmayapman va uni qayerga qo'yganimni umuman eslolmayapman.",
        },
        grammarPoint: {
          ru: "Частица か в середине встраивает вопрос в предложение («не помню, куда положил»). А <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>せません — это отрицание потенциального залога: вы физически не можете вспомнить.",
          uz: "O'rtadagi か yuklamasi gapning ichiga savolni kiritadi («qayerga qo'yganimni eslolmayman»). <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>せません esa potensial shaklning inkoridir: eplay olmaslikni, umuman esga kela olmasligini bildiradi.",
        },
      },
    },
    {
      char: "急",
      onyomi: "キュウ",
      kunyomi: "いそ.ぐ",
      meanings: {
        ru: "спешить, внезапный",
        uz: "shoshilmoq, to'satdan",
      },
      words: [
        {
          kanji: "急ぐ",
          kana: "いそぐ",
          mean_ru: "спешить",
          mean_uz: "shoshilmoq",
        },
        {
          kanji: "急に",
          kana: "きゅうに",
          mean_ru: "внезапно",
          mean_uz: "to'satdan",
        },
        {
          kanji: "特急",
          kana: "とっきゅう",
          mean_ru: "экспресс (поезд)",
          mean_uz: "tezyurar poyezd",
        },
      ],
      sentence: {
        jp: "急いで駅に向かえば、まだ最終電車に間に合うかもしれません。",
        rubyData: [
          {
            kanji: "急",
            reading: "いそ",
          },
          {
            text: "いで",
          },
          {
            kanji: "駅",
            reading: "えき",
          },
          {
            text: "に",
          },
          {
            kanji: "向",
            reading: "む",
          },
          {
            text: "かえば、まだ",
          },
          {
            kanji: "最終電車",
            reading: "さいしゅうでんしゃ",
          },
          {
            text: "に",
          },
          {
            kanji: "間",
            reading: "ま",
          },
          {
            text: "に",
          },
          {
            kanji: "合",
            reading: "あ",
          },
          {
            text: "うかもしれません。",
          },
        ],
        translation: {
          ru: "Если мы поспешим к станции, возможно, ещё успеем на последний поезд.",
          uz: "Agar bekatga shoshilsak, ehtimol, oxirgi poyezdga ulgurarimiz.",
        },
        grammarPoint: {
          ru: "～ば — это условие, дающее шанс или надежду. В связке с ～かもしれない (возможно) это идеальный и очень живой способ сказать, что ещё не всё потеряно, если поторопиться.",
          uz: "～ば — imkoniyat yoki umid beradigan shart shakli. ～かもしれない (ehtimol) bilan birgalikda, shoshilsa hali ham kech emasligini aytishning juda tabiiy va jonli usulidir.",
        },
      },
    },
    {
      char: "悪",
      onyomi: "アク, オ",
      kunyomi: "わる.い",
      meanings: {
        ru: "плохой",
        uz: "yomon",
      },
      words: [
        {
          kanji: "悪い",
          kana: "わるい",
          mean_ru: "плохой",
          mean_uz: "yomon",
        },
        {
          kanji: "最悪",
          kana: "さいあく",
          mean_ru: "худший",
          mean_uz: "eng yomon",
        },
        {
          kanji: "悪口",
          kana: "わるぐち",
          mean_ru: "злословие, оскорбление",
          mean_uz: "g'iybat, yomon so'z",
        },
      ],
      sentence: {
        jp: "気分が悪いなら、無理しないで家で休んでください。",
        rubyData: [
          {
            kanji: "気分",
            reading: "きぶん",
          },
          {
            text: "が",
          },
          {
            kanji: "悪",
            reading: "わる",
          },
          {
            text: "いなら、",
          },
          {
            kanji: "無理",
            reading: "むり",
          },
          {
            text: "しないで",
          },
          {
            kanji: "家",
            reading: "いえ",
          },
          {
            text: "で",
          },
          {
            kanji: "休",
            reading: "やす",
          },
          {
            text: "んでください。",
          },
        ],
        translation: {
          ru: "Раз тебе нездоровится, не перенапрягайся и отдохни дома.",
          uz: "Agar tobingiz qochayotgan bo'lsa, o'zingizni zo'riqtirmay, uyda dam oling.",
        },
        grammarPoint: {
          ru: "Условие ～なら берет за основу текущую ситуацию собеседника («раз уж тебе плохо»). А <ruby>無理<rt>むり</rt></ruby>しないで (не перенапрягаясь) — это самая частая и заботливая просьба поберечь себя в Японии.",
          uz: "～なら sharti suhbatdoshning hozirgi holatini asos qilib oladi («tobingiz qochayotgan bo'lsa»). <ruby>無理<rt>むり</rt></ruby>しないで (o'zingizni zo'riqtirmasdan) esa Yaponiyada o'zini ehtiyot qilishni so'rashning eng ko'p ishlatiladigan g'amxo'r usulidir.",
        },
      },
    },
    {
      char: "意",
      onyomi: "イ",
      kunyomi: "",
      meanings: {
        ru: "мысль, смысл",
        uz: "g'oya, ma'no",
      },
      words: [
        {
          kanji: "意味",
          kana: "いみ",
          mean_ru: "значение, смысл",
          mean_uz: "ma'no",
        },
        {
          kanji: "意見",
          kana: "いけん",
          mean_ru: "мнение",
          mean_uz: "fikr",
        },
        {
          kanji: "注意",
          kana: "ちゅうい",
          mean_ru: "внимание, осторожность",
          mean_uz: "diqqat, ogohlantirish",
        },
      ],
      sentence: {
        jp: "この言葉の意味が分からないので、辞書で調べてみます。",
        rubyData: [
          {
            text: "この",
          },
          {
            kanji: "言葉",
            reading: "ことば",
          },
          {
            text: "の",
          },
          {
            kanji: "意味",
            reading: "いみ",
          },
          {
            text: "が",
          },
          {
            kanji: "分",
            reading: "わ",
          },
          {
            text: "からないので、",
          },
          {
            kanji: "辞書",
            reading: "じしょ",
          },
          {
            text: "で",
          },
          {
            kanji: "調",
            reading: "しら",
          },
          {
            text: "べてみます。",
          },
        ],
        translation: {
          ru: "Я не знаю значения этого слова, поэтому попробую поискать в словаре.",
          uz: "Bu so'zning ma'nosini bilmaganim uchun, lug'atdan qidirib ko'raman.",
        },
        grammarPoint: {
          ru: "Форма ～てみる означает «сделать что-то на пробу, чтобы узнать результат». Здесь она показывает лёгкое, естественное действие — «возьму и проверю».",
          uz: "～てみる shakli «natijasini ko'rish uchun biror narsani qilib ko'rish» degan ma'noni anglatadi. Bu yerda u «qidirib ko'raman» kabi oddiy, tabiiy harakatni ko'rsatadi.",
        },
      },
    },
    {
      char: "手",
      onyomi: "シュ",
      kunyomi: "て",
      meanings: {
        ru: "рука",
        uz: "qo'l",
      },
      words: [
        {
          kanji: "手",
          kana: "て",
          mean_ru: "рука",
          mean_uz: "qo'l",
        },
        {
          kanji: "手紙",
          kana: "てがみ",
          mean_ru: "письмо",
          mean_uz: "xat",
        },
        {
          kanji: "苦手",
          kana: "にがて",
          mean_ru: "слабая сторона",
          mean_uz: "yomon bajaradigan, o'xshatolmaydigan ish",
        },
      ],
      sentence: {
        jp: "私は英語を話すのが苦手なので、もっと練習しなければなりません。",
        rubyData: [
          {
            kanji: "私",
            reading: "わたし",
          },
          {
            text: "は",
          },
          {
            kanji: "英語",
            reading: "えいご",
          },
          {
            text: "を",
          },
          {
            kanji: "話",
            reading: "はな",
          },
          {
            text: "すのが",
          },
          {
            kanji: "苦手",
            reading: "にがて",
          },
          {
            text: "なので、もっと",
          },
          {
            kanji: "練習",
            reading: "れんしゅう",
          },
          {
            text: "しなければなりません。",
          },
        ],
        translation: {
          ru: "Мне тяжело даётся разговорный английский, поэтому я должен больше тренироваться.",
          uz: "Men ingliz tilida gapirishga qiynalaman, shuning uchun ko'proq mashq qilishim kerak.",
        },
        grammarPoint: {
          ru: "Конструкция ～のが<ruby>苦手<rt>にがて</rt></ruby> превращает действие (разговор) в существительное, чтобы сказать «я плох в этом». ～なければならない выражает объективную необходимость (я должен).",
          uz: "～のが<ruby>苦手<rt>にがて</rt></ruby> konstruksiyasi harakatni (gapirishni) otga aylantirib, «bunda yomonman» deyish imkonini beradi. ～なければならない esa majburiyatni (kerakligini) bildiradi.",
        },
      },
    },
    {
      char: "持",
      onyomi: "ジ",
      kunyomi: "も.つ",
      meanings: {
        ru: "держать, иметь",
        uz: "ushlamoq, ega bo'lmoq",
      },
      words: [
        {
          kanji: "持つ",
          kana: "もつ",
          mean_ru: "держать, иметь",
          mean_uz: "ushlamoq, ega bo'lmoq",
        },
        {
          kanji: "気持ち",
          kana: "きもち",
          mean_ru: "чувство, настроение",
          mean_uz: "kayfiyat, tuyg'u",
        },
        {
          kanji: "お金持ち",
          kana: "おかねもち",
          mean_ru: "богач",
          mean_uz: "boy (odam)",
        },
      ],
      sentence: {
        jp: "パスポートを持っていないと、飛行機に乗ることができません。",
        rubyData: [
          {
            text: "パスポートを",
          },
          {
            kanji: "持",
            reading: "も",
          },
          {
            text: "っていないと、",
          },
          {
            kanji: "飛行機",
            reading: "ひこうき",
          },
          {
            text: "に",
          },
          {
            kanji: "乗",
            reading: "の",
          },
          {
            text: "ることができません。",
          },
        ],
        translation: {
          ru: "Если у вас нет с собой паспорта, вы не сможете сесть на самолёт.",
          uz: "Agar yoningizda pasportingiz bo'lmasa, samolyotga o'tira olmaysiz.",
        },
        grammarPoint: {
          ru: "Здесь ～と указывает на жёсткое правило или неизбежное последствие (нет документа = нет полёта). Форма ～ことができない звучит более формально и официально, чем просто 乗れません.",
          uz: "Bu yerda ～と qat'iy qoida yoki muqarrar oqibatni ko'rsatadi (hujjat yo'q = parvoz yo'q). ～ことができない shakli 乗れません ga qaraganda rasmiyroq jaranglaydi.",
        },
      },
    },
    {
      char: "教",
      onyomi: "キョウ",
      kunyomi: "おし.える",
      meanings: {
        ru: "учить, объяснять",
        uz: "o'rgatmoq, tushuntirmoq",
      },
      words: [
        {
          kanji: "教える",
          kana: "おしえる",
          mean_ru: "учить, объяснять",
          mean_uz: "o'rgatmoq, tushuntirmoq",
        },
        {
          kanji: "教室",
          kana: "きょうしつ",
          mean_ru: "аудитория, класс",
          mean_uz: "sinf xonasi",
        },
        {
          kanji: "教科書",
          kana: "きょうかしょ",
          mean_ru: "учебник",
          mean_uz: "darslik",
        },
      ],
      sentence: {
        jp: "すみません、市役所へ行く道を教えていただけませんか。",
        rubyData: [
          {
            text: "すみません、",
          },
          {
            kanji: "市役所",
            reading: "しやくしょ",
          },
          {
            text: "へ",
          },
          {
            kanji: "行",
            reading: "い",
          },
          {
            text: "く",
          },
          {
            kanji: "道",
            reading: "みち",
          },
          {
            text: "を",
          },
          {
            kanji: "教",
            reading: "おし",
          },
          {
            text: "えていただけませんか。",
          },
        ],
        translation: {
          ru: "Извините, не могли бы вы подсказать мне дорогу к мэрии?",
          uz: "Kechirasiz, shahar hokimiyatiga boradigan yo'lni ko'rsatib yubora olmaysizmi?",
        },
        grammarPoint: {
          ru: "～ていただけませんか — это очень мягкая и уважительная просьба. Вы буквально спрашиваете: «Не могли бы вы оказать мне услугу и объяснить?». Это лучший способ обращаться к незнакомцам на улице.",
          uz: "～ていただけませんか — bu juda muloyim va xushmuomala iltimos shakli. Ayniqsa ko'chada notanish odamlardan yordam yoki yo'l so'rashda eng yaxshi va hurmatli usul hisoblanadi.",
        },
      },
    },
    {
      char: "文",
      onyomi: "ブン, モン",
      kunyomi: "ふみ",
      meanings: {
        ru: "предложение, литература",
        uz: "gap, yozuv, adabiyot",
      },
      words: [
        {
          kanji: "文化",
          kana: "ぶんか",
          mean_ru: "культура",
          mean_uz: "madaniyat",
        },
        {
          kanji: "作文",
          kana: "さくぶん",
          mean_ru: "сочинение",
          mean_uz: "insho",
        },
        {
          kanji: "文学",
          kana: "ぶんがく",
          mean_ru: "литература",
          mean_uz: "adabiyot",
        },
      ],
      sentence: {
        jp: "日本の文化に興味があるので、いつか京都へ行ってみたいです。",
        rubyData: [
          {
            kanji: "日本",
            reading: "にほん",
          },
          {
            text: "の",
          },
          {
            kanji: "文化",
            reading: "ぶんか",
          },
          {
            text: "に",
          },
          {
            kanji: "興味",
            reading: "きょうみ",
          },
          {
            text: "があるので、いつか",
          },
          {
            kanji: "京都",
            reading: "きょうと",
          },
          {
            text: "へ",
          },
          {
            kanji: "行",
            reading: "い",
          },
          {
            text: "ってみたいです。",
          },
        ],
        translation: {
          ru: "Я интересуюсь японской культурой, поэтому когда-нибудь хочу побывать в Киото.",
          uz: "Yapon madaniyatiga qiziqaman, shuning uchun qachondir Kiotoga borib ko'rmoqchiman.",
        },
        grammarPoint: {
          ru: "Сочетание ～てみる (попробовать) и ～たい (хотеть) рождает форму ～てみたい («хочу попробовать испытать это»). Идеально подходит для выражения желаний и планов на путешествия.",
          uz: "～てみる (qilib ko'rish) va ～たい (xohlash) birikib, ～てみたい («bajarib ko'rmoqchiman») shaklini hosil qiladi. Sayohat rejalari va xohishlarini bildirish uchun ideal.",
        },
      },
    },
    {
      char: "料",
      onyomi: "リョウ",
      kunyomi: "",
      meanings: {
        ru: "плата, материалы",
        uz: "to'lov, material",
      },
      words: [
        {
          kanji: "料理",
          kana: "りょうり",
          mean_ru: "блюдо, готовка",
          mean_uz: "taom, pishirish",
        },
        {
          kanji: "料金",
          kana: "りょうきん",
          mean_ru: "плата, тариф",
          mean_uz: "to'lov, narx",
        },
        {
          kanji: "無料",
          kana: "むりょう",
          mean_ru: "бесплатно",
          mean_uz: "bepul",
        },
      ],
      sentence: {
        jp: "このアプリは無料でダウンロードできるので、とても便利です。",
        rubyData: [
          {
            text: "このアプリは",
          },
          {
            kanji: "無料",
            reading: "むりょう",
          },
          {
            text: "でダウンロードできるので、とても",
          },
          {
            kanji: "便利",
            reading: "べんり",
          },
          {
            text: "です。",
          },
        ],
        translation: {
          ru: "Это приложение можно скачать бесплатно, что очень удобно.",
          uz: "Bu ilovani bepul yuklab olish mumkin, shuning uchun juda qulay.",
        },
        grammarPoint: {
          ru: "<ruby>無料<rt>むりょう</rt></ruby>で (бесплатно) выступает здесь как обстоятельство образа действия. Глагол できる (мочь) в связке с ので (потому что) чётко объясняет причину, по которой приложение так полезно.",
          uz: "<ruby>無料<rt>むりょう</rt></ruby>で (bepul) qanday usulda ekanligini bildiradi. できる (qila olmoq) fe'li va ので (chunki) bog'lamasi ilova nega qulay ekanligini aniq tushuntiradi.",
        },
      },
    },
    {
      char: "新",
      onyomi: "シン",
      kunyomi: "あたら.しい",
      meanings: {
        ru: "новый",
        uz: "yangi",
      },
      words: [
        {
          kanji: "新しい",
          kana: "あたらしい",
          mean_ru: "новый",
          mean_uz: "yangi",
        },
        {
          kanji: "新聞",
          kana: "しんぶん",
          mean_ru: "газета",
          mean_uz: "gazeta",
        },
        {
          kanji: "新幹線",
          kana: "しんかんせん",
          mean_ru: "синкансэн",
          mean_uz: "tezyurar poyezd (shinkansen)",
        },
      ],
      sentence: {
        jp: "新幹線に乗れば、東京から大阪まであっという間に着きます。",
        rubyData: [
          {
            kanji: "新幹線",
            reading: "しんかんせん",
          },
          {
            text: "に",
          },
          {
            kanji: "乗",
            reading: "の",
          },
          {
            text: "れば、",
          },
          {
            kanji: "東京",
            reading: "とうきょう",
          },
          {
            text: "から",
          },
          {
            kanji: "大阪",
            reading: "おおさか",
          },
          {
            text: "まであっという",
          },
          {
            kanji: "間",
            reading: "ま",
          },
          {
            text: "に",
          },
          {
            kanji: "着",
            reading: "つ",
          },
          {
            text: "きます。",
          },
        ],
        translation: {
          ru: "Если сесть на синкансэн, то путь от Токио до Осаки пролетит в мгновение ока.",
          uz: "Sinkansenga o'tirsangiz, Tokiodan Osakagacha ko'z ochib yumguncha yetib borasiz.",
        },
        grammarPoint: {
          ru: "Условие ～ば — это классическое «если сделаешь А, случится Б». Фраза あっという<ruby>間<rt>ま</rt></ruby>に (в мгновение ока) делает речь очень естественной и не академичной.",
          uz: "～ば shakli «A qilsang, B sodir bo'ladi» degan klassik shartdir. あっという<ruby>間<rt>ま</rt></ruby>に (ko'z ochib yumguncha) iborasi esa nutqni kitobiy emas, juda tabiiy va jonli qiladi.",
        },
      },
    },
    {
      char: "方",
      onyomi: "ホウ",
      kunyomi: "かた",
      meanings: {
        ru: "направление, способ",
        uz: "tomon, usul",
      },
      words: [
        {
          kanji: "方法",
          kana: "ほうほう",
          mean_ru: "метод, способ",
          mean_uz: "usul, metod",
        },
        {
          kanji: "使い方",
          kana: "つかいかた",
          mean_ru: "способ использования",
          mean_uz: "ishlatish usuli",
        },
        {
          kanji: "夕方",
          kana: "ゆうがた",
          mean_ru: "вечер",
          mean_uz: "kechqurun",
        },
      ],
      sentence: {
        jp: "パソコンの使い方が分からない場合は、私に聞いてください。",
        rubyData: [
          {
            text: "パソコンの",
          },
          {
            kanji: "使",
            reading: "つか",
          },
          {
            text: "い",
          },
          {
            kanji: "方",
            reading: "かた",
          },
          {
            text: "が",
          },
          {
            kanji: "分",
            reading: "わ",
          },
          {
            text: "からない",
          },
          {
            kanji: "場合",
            reading: "ばあい",
          },
          {
            text: "は、",
          },
          {
            kanji: "私",
            reading: "わたし",
          },
          {
            text: "に",
          },
          {
            kanji: "聞",
            reading: "き",
          },
          {
            text: "いてください。",
          },
        ],
        translation: {
          ru: "В случае, если вы не понимаете, как пользоваться компьютером, обращайтесь ко мне.",
          uz: "Kompyuterdan qanday foydalanishni bilmagan taqdiringizda, mendan so'rang.",
        },
        grammarPoint: {
          ru: "Словосочетание Глагол + <ruby>方<rt>かた</rt></ruby> означает «способ делать что-то». А конструкция ～<ruby>場合<rt>ばあい</rt></ruby>は («в случае, если») звучит профессиональнее, чем простое «если», и отлично подходит для рабочих инструкций.",
          uz: "Fe'l o'zagi + <ruby>方<rt>かた</rt></ruby> «biror narsani qilish usuli» degan ma'noni beradi. ～<ruby>場合<rt>ばあい</rt></ruby>は («shunday holat yuz bersa») oddiy shartdan ko'ra professionalroq eshitiladi va ish joyidagi yo'riqnomalarga juda mos keladi.",
        },
      },
    },
    {
      char: "旅",
      onyomi: "リョ",
      kunyomi: "たび",
      meanings: {
        ru: "путешествие",
        uz: "sayohat",
      },
      words: [
        {
          kanji: "旅行",
          kana: "りょこう",
          mean_ru: "путешествие",
          mean_uz: "sayohat",
        },
        {
          kanji: "旅",
          kana: "たび",
          mean_ru: "поездка, странствие",
          mean_uz: "safar, sayohat",
        },
        {
          kanji: "旅館",
          kana: "りょかん",
          mean_ru: "рёкан (яп. гостиница)",
          mean_uz: "ryokan (yapon mehmonxonasi)",
        },
      ],
      sentence: {
        jp: "次の旅行では、静かな旅館に泊まってゆっくり温泉に入りたいです。",
        rubyData: [
          {
            kanji: "次",
            reading: "つぎ",
          },
          {
            text: "の",
          },
          {
            kanji: "旅行",
            reading: "りょこう",
          },
          {
            text: "では、",
          },
          {
            kanji: "静",
            reading: "しず",
          },
          {
            text: "かな",
          },
          {
            kanji: "旅館",
            reading: "りょかん",
          },
          {
            text: "に",
          },
          {
            kanji: "泊",
            reading: "と",
          },
          {
            text: "まってゆっくり",
          },
          {
            kanji: "温泉",
            reading: "おんせん",
          },
          {
            text: "に",
          },
          {
            kanji: "入",
            reading: "はい",
          },
          {
            text: "りたいです。",
          },
        ],
        translation: {
          ru: "В следующем путешествии я хочу остановиться в тихом рёкане и неспеша насладиться горячими источниками.",
          uz: "Keyingi sayohatimda tinchroq ryokanda to'xtab, bamaylixotir qaynoq buloqlarda cho'milmoqchiman.",
        },
        grammarPoint: {
          ru: "Форма на ～て используется для перечисления действий по порядку (сначала остановиться, потом искупаться). Слово ゆっくり передаёт настроение «без спешки, с комфортом».",
          uz: "～て shakli harakatlarni ketma-ket sanash uchun ishlatiladi (oldin to'xtash, keyin cho'milish). ゆっくり so'zi esa harakatni «shoshilmasdan, rohatlanib va xotirjam» bajarish kayfiyatini beradi.",
        },
      },
    },
    {
      char: "族",
      onyomi: "ゾク",
      kunyomi: "",
      meanings: {
        ru: "семья, племя",
        uz: "oila, qabila",
      },
      words: [
        {
          kanji: "家族",
          kana: "かぞく",
          mean_ru: "семья",
          mean_uz: "oila",
        },
        {
          kanji: "民族",
          kana: "みんぞく",
          mean_ru: "народ, нация",
          mean_uz: "millat, xalq",
        },
        {
          kanji: "水族館",
          kana: "すいぞくかん",
          mean_ru: "океанариум",
          mean_uz: "okeanarium",
        },
      ],
      sentence: {
        jp: "週末は家族と一緒に、新しくできた水族館へ行く予定です。",
        rubyData: [
          {
            kanji: "週末",
            reading: "しゅうまつ",
          },
          {
            text: "は",
          },
          {
            kanji: "家族",
            reading: "かぞく",
          },
          {
            text: "と",
          },
          {
            kanji: "一緒",
            reading: "いっしょ",
          },
          {
            text: "に、",
          },
          {
            kanji: "新",
            reading: "あたら",
          },
          {
            text: "しくできた",
          },
          {
            kanji: "水族館",
            reading: "すいぞくかん",
          },
          {
            text: "へ",
          },
          {
            kanji: "行",
            reading: "い",
          },
          {
            text: "く",
          },
          {
            kanji: "予定",
            reading: "よてい",
          },
          {
            text: "です。",
          },
        ],
        translation: {
          ru: "На выходных я планирую пойти с семьёй в недавно открывшийся океанариум.",
          uz: "Dam olish kunlari oilam bilan birga yangi ochilgan okeanariumga borishni rejalashtiryapman.",
        },
        grammarPoint: {
          ru: "<ruby>新<rt>あたら</rt></ruby>しくできた означает «недавно появившийся или построенный». Вместе с ～<ruby>予定<rt>よてい</rt></ruby>です (план, расписание) это отличная живая фраза для разговора о планах на выходные.",
          uz: "<ruby>新<rt>あたら</rt></ruby>しくできた «yangi paydo bo'lgan yoki qurilgan» degan ma'noni anglatadi. ～<ruby>予定<rt>よてい</rt></ruby>です (qat'iy reja) bilan birga dam olish kunlaridagi rejalar haqida gapirishda juda mos keladi.",
        },
      },
    },
    {
      char: "早",
      onyomi: "ソウ",
      kunyomi: "はや.い",
      meanings: {
        ru: "ранний, быстрый",
        uz: "erta, tez",
      },
      words: [
        {
          kanji: "早い",
          kana: "はやい",
          mean_ru: "ранний",
          mean_uz: "erta",
        },
        {
          kanji: "早く",
          kana: "はやく",
          mean_ru: "рано, быстро",
          mean_uz: "erta, tez",
        },
        {
          kanji: "早起き",
          kana: "はやおき",
          mean_ru: "раннее пробуждение",
          mean_uz: "erta turish",
        },
      ],
      sentence: {
        jp: "明日は朝早くから会議があるので、遅れないようにします。",
        rubyData: [
          {
            kanji: "明日",
            reading: "あした",
          },
          {
            text: "は",
          },
          {
            kanji: "朝",
            reading: "あさ",
          },
          {
            kanji: "早",
            reading: "はや",
          },
          {
            text: "くから",
          },
          {
            kanji: "会議",
            reading: "かいぎ",
          },
          {
            text: "があるので、",
          },
          {
            kanji: "遅",
            reading: "おく",
          },
          {
            text: "れないようにします。",
          },
        ],
        translation: {
          ru: "Завтра с самого раннего утра собрание, поэтому я постараюсь не опоздать.",
          uz: "Ertaga tong sahardan majlis bo'lgani uchun, kechikmaslikka harakat qilaman.",
        },
        grammarPoint: {
          ru: "Форма ～ようにする означает сознательное усилие, старание («буду следить за тем, чтобы не...»). Это очень ответственная и частотная фраза в рабочей среде Японии.",
          uz: "～ようにする shakli ongli harakat va intilishni («shunday qilmaslikka harakat qilaman») anglatadi. Bu Yaponiyaning ish joylarida mas'uliyatni ko'rsatuvchi juda ko'p ishlatiladigan iboradir.",
        },
      },
    },
    {
      char: "明",
      onyomi: "メイ, ミョウ",
      kunyomi: "あか.るい, あ.ける",
      meanings: {
        ru: "светлый, ясный",
        uz: "yorug', ochiq",
      },
      words: [
        {
          kanji: "明るい",
          kana: "あかるい",
          mean_ru: "светлый, жизнерадостный",
          mean_uz: "yorug', quvnoq",
        },
        {
          kanji: "明日",
          kana: "あした",
          mean_ru: "завтра",
          mean_uz: "ertaga",
        },
        {
          kanji: "説明",
          kana: "せつめい",
          mean_ru: "объяснение",
          mean_uz: "tushuntirish",
        },
      ],
      sentence: {
        jp: "会議の前に、この書類について簡単に説明しておきます。",
        rubyData: [
          {
            kanji: "会議",
            reading: "かいぎ",
          },
          {
            text: "の",
          },
          {
            kanji: "前",
            reading: "まえ",
          },
          {
            text: "に、この",
          },
          {
            kanji: "書類",
            reading: "しょるい",
          },
          {
            text: "について",
          },
          {
            kanji: "簡単",
            reading: "かんたん",
          },
          {
            text: "に",
          },
          {
            kanji: "説明",
            reading: "せつめい",
          },
          {
            text: "しておきます。",
          },
        ],
        translation: {
          ru: "Перед собранием я вкратце объясню суть этих документов заранее.",
          uz: "Majlisdan oldin ushbu hujjatlar haqida qisqacha tushuntirib o'taman.",
        },
        grammarPoint: {
          ru: "～ておく здесь означает действие, сделанное заранее для подготовки (объяснить до начала). ～について («о чём-то») связывает объяснение с конкретными бумагами. Звучит очень по-деловому.",
          uz: "～ておく bu yerda tayyorgarlik uchun oldindan qilingan harakatni bildiradi. ～について («...haqida») esa tushuntirishni muayyan hujjatlar bilan bog'laydi. Juda rasmiy va tabiiy eshitiladi.",
        },
      },
    },
    {
      char: "映",
      onyomi: "エイ",
      kunyomi: "うつ.る, うつ.す",
      meanings: {
        ru: "отражать, проецировать",
        uz: "aks etmoq, ko'rsatmoq",
      },
      words: [
        {
          kanji: "映画",
          kana: "えいが",
          mean_ru: "фильм",
          mean_uz: "film, kino",
        },
        {
          kanji: "映画館",
          kana: "えいがかん",
          mean_ru: "кинотеатр",
          mean_uz: "kinoteatr",
        },
        {
          kanji: "映像",
          kana: "えいぞう",
          mean_ru: "видео, изображение",
          mean_uz: "video, tasvir",
        },
      ],
      sentence: {
        jp: "この映画はとても感動するので、ぜひ見てみてください。",
        rubyData: [
          {
            text: "この",
          },
          {
            kanji: "映画",
            reading: "えいが",
          },
          {
            text: "はとても",
          },
          {
            kanji: "感動",
            reading: "かんどう",
          },
          {
            text: "するので、ぜひ",
          },
          {
            kanji: "見",
            reading: "み",
          },
          {
            text: "てみてください。",
          },
        ],
        translation: {
          ru: "Этот фильм очень трогательный, поэтому обязательно посмотрите его.",
          uz: "Bu film juda ta'sirli, shuning uchun uni albatta ko'rib chiqing.",
        },
        grammarPoint: {
          ru: "<ruby>感動<rt>かんどう</rt></ruby>する значит «вызывать сильные эмоции, трогать до глубины души». А конструкция ～てみてください — это дружеский и настойчивый совет: «попробуйте сделать это, вы не пожалеете».",
          uz: "<ruby>感動<rt>かんどう</rt></ruby>する «hissiyotga berilish, ta'sirlanish» deganidir. ～てみてください esa do'stona va qat'iy maslahat bo'lib, «buni albatta qilib ko'ring, afsuslanmaysiz» degan ma'noni beradi.",
        },
      },
    },
    {
      char: "春",
      onyomi: "シュン",
      kunyomi: "はる",
      meanings: {
        ru: "весна",
        uz: "bahor",
      },
      words: [
        {
          kanji: "春",
          kana: "はる",
          mean_ru: "весна",
          mean_uz: "bahor",
        },
        {
          kanji: "青春",
          kana: "せいしゅん",
          mean_ru: "молодость, юность",
          mean_uz: "yoshlik",
        },
        {
          kanji: "春休み",
          kana: "はるやすみ",
          mean_ru: "весенние каникулы",
          mean_uz: "bahorgi ta'til",
        },
      ],
      sentence: {
        jp: "春休みになったら、友達と一緒にお花見をするつもりです。",
        rubyData: [
          {
            kanji: "春休み",
            reading: "はるやすみ",
          },
          {
            text: "になったら、",
          },
          {
            kanji: "友達",
            reading: "ともだち",
          },
          {
            text: "と",
          },
          {
            kanji: "一緒",
            reading: "いっしょ",
          },
          {
            text: "にお",
          },
          {
            kanji: "花見",
            reading: "はなみ",
          },
          {
            text: "をするつもりです。",
          },
        ],
        translation: {
          ru: "Когда начнутся весенние каникулы, я планирую пойти смотреть на сакуру вместе с друзьями.",
          uz: "Bahorgi ta'til boshlangach, do'stlarim bilan birga sakurani tomosha qilgani borish niyatidaman.",
        },
        grammarPoint: {
          ru: "～たら означает условие во времени: «когда наступит». Вместе с ～つもりです (собираюсь) это стандартная и очень естественная формула для описания будущих планов после какого-то события.",
          uz: "～たら vaqtga oid shartni («boshlangach») anglatadi. ～つもりです (niyatidaman) bilan birga u kelajakdagi rejalarni tasvirlashning eng standart va tabiiy formulasidir.",
        },
      },
    },
    {
      char: "昼",
      onyomi: "チュウ",
      kunyomi: "ひる",
      meanings: {
        ru: "день, полдень",
        uz: "kun, tush payti",
      },
      words: [
        {
          kanji: "昼",
          kana: "ひる",
          mean_ru: "день, полдень",
          mean_uz: "kun, tush payti",
        },
        {
          kanji: "昼休み",
          kana: "ひるやすみ",
          mean_ru: "обеденный перерыв",
          mean_uz: "tushki tanaffus",
        },
        {
          kanji: "昼食",
          kana: "ちゅうしょく",
          mean_ru: "обед",
          mean_uz: "tushki ovqat",
        },
      ],
      sentence: {
        jp: "昼休みが終わるまでに、このメールに返信しなければなりません。",
        rubyData: [
          {
            kanji: "昼休み",
            reading: "ひるやすみ",
          },
          {
            text: "が",
          },
          {
            kanji: "終",
            reading: "お",
          },
          {
            text: "わるまでに、このメールに",
          },
          {
            kanji: "返信",
            reading: "へんしん",
          },
          {
            text: "しなければなりません。",
          },
        ],
        translation: {
          ru: "Я должен ответить на это электронное письмо до того, как закончится обеденный перерыв.",
          uz: "Tushki tanaffus tugaguniga qadar ushbu elektron pochtaga javob yozishim kerak.",
        },
        grammarPoint: {
          ru: "Важно отличать まで (просто процесс) от ～までに (дедлайн, «до того момента как»). Эта фраза показывает жёсткие временные рамки для выполнения задачи в офисе.",
          uz: "まで (jarayon, «-gacha») va ～までに (dedlayn, «...gacha bo'lgan muddatda») farqini bilish muhim. Bu ibora ofisda vazifani bajarishning qat'iy vaqt chegarasini aniq ko'rsatadi.",
        },
      },
    },
  {
      char: "曜",
      onyomi: "ヨウ",
      kunyomi: "-",
      meanings: {
        ru: "день недели",
        uz: "hafta kuni",
      },
      words: [
        {
          kanji: "曜日",
          kana: "ようび",
          mean_ru: "день недели",
          mean_uz: "hafta kuni",
        },
        {
          kanji: "月曜",
          kana: "げつよう",
          mean_ru: "понедельник",
          mean_uz: "dushanba",
        },
        {
          kanji: "何曜日",
          kana: "なんようび",
          mean_ru: "какой день недели",
          mean_uz: "qaysi kun",
        },
      ],
      sentence: {
        jp: "来週の打ち合わせですが、何曜日ならご都合がいいですか。",
        rubyData: [
          { kanji: "来週", reading: "らいしゅう" },
          { text: "の" },
          { kanji: "打", reading: "う" },
          { text: "ち" },
          { kanji: "合", reading: "あ" },
          { text: "わせですが、" },
          { kanji: "何曜日", reading: "なんようび" },
          { text: "ならご" },
          { kanji: "都合", reading: "つごう" },
          { text: "がいいですか。" },
        ],
        translation: {
          ru: "Насчёт встречи на следующей неделе: какой день недели вам больше подходит?",
          uz: "Kelasi haftadagi uchrashuv haqida gaplashsak, haftaning qaysi kuni sizga qulayroq bo'ladi?",
        },
        grammarPoint: {
          ru: "～なら используется для выдвижения темы в качестве предложения. Так говорят, когда подстраиваются под собеседника, предлагая выбрать удобный вариант. <ruby>何曜日<rt>なんようび</rt></ruby>なら = «если говорить о днях недели, какой удобнее?»",
          uz: "～なら — shart mayli bo'lib, suhbat mavzusini ajratib ko'rsatish va unga moslashishda ishlatiladi. <ruby>何曜日<rt>なんようび</rt></ruby>なら = «hafta kunlari haqida gapiradigan bo'lsak, qaysi biri...».",
        },
      },
    },
    {
      char: "有",
      onyomi: "ユウ, ウ",
      kunyomi: "あ.る",
      meanings: {
        ru: "существовать, иметь",
        uz: "bor bo'lmoq, mavjud",
      },
      words: [
        {
          kanji: "有名",
          kana: "ゆうめい",
          mean_ru: "известный",
          mean_uz: "mashhur",
        },
        {
          kanji: "有料",
          kana: "ゆうりょう",
          mean_ru: "платный",
          mean_uz: "pullik",
        },
        {
          kanji: "有る",
          kana: "ある",
          mean_ru: "быть, существовать",
          mean_uz: "bor bo'lmoq",
        },
      ],
      sentence: {
        jp: "このアプリの基本的な機能は無料ですが、一部は有料です。",
        rubyData: [
          { text: "このアプリの" },
          { kanji: "基本的", reading: "きほんてき" },
          { text: "な" },
          { kanji: "機能", reading: "きのう" },
          { text: "は" },
          { kanji: "無料", reading: "むりょう" },
          { text: "ですが、" },
          { kanji: "一部", reading: "いちぶ" },
          { text: "は" },
          { kanji: "有料", reading: "ゆうりょう" },
          { text: "です。" },
        ],
        translation: {
          ru: "Базовые функции этого приложения бесплатны, но некоторые возможности платные.",
          uz: "Bu dasturning asosiy funksiyalari bepul, biroq ayrim qismlari pullik.",
        },
        grammarPoint: {
          ru: "～が мягко противопоставляет две части. Слово <ruby>一部<rt>いちぶ</rt></ruby> (часть/некоторые) часто используется в сервисах для объяснения условий. <ruby>無料<rt>むりょう</rt></ruby>ですが = «бесплатно, но».",
          uz: "～が ziddiyatni bildiradi. <ruby>一部<rt>いちぶ</rt></ruby> (ba'zi qismi) so'zi xizmatlar yoki shartlarni tushuntirishda ko'p ishlatiladi. <ruby>無料<rt>むりょう</rt></ruby>ですが = «bepul, lekin».",
        },
      },
    },
    {
      char: "服",
      onyomi: "フク",
      kunyomi: "-",
      meanings: {
        ru: "одежда",
        uz: "kiyim",
      },
      words: [
        {
          kanji: "服",
          kana: "ふく",
          mean_ru: "одежда",
          mean_uz: "kiyim",
        },
        {
          kanji: "洋服",
          kana: "ようふく",
          mean_ru: "европейская одежда",
          mean_uz: "yevropacha kiyim",
        },
        {
          kanji: "制服",
          kana: "せいふく",
          mean_ru: "униформа",
          mean_uz: "maxsus kiyim (forma)",
        },
      ],
      sentence: {
        jp: "面接の時は、どんな服を着て行けばいいですか。",
        rubyData: [
          { kanji: "面接", reading: "めんせつ" },
          { text: "の" },
          { kanji: "時", reading: "とき" },
          { text: "は、どんな" },
          { kanji: "服", reading: "ふく" },
          { text: "を" },
          { kanji: "着", reading: "き" },
          { text: "て" },
          { kanji: "行", reading: "い" },
          { text: "けばいいですか。" },
        ],
        translation: {
          ru: "Какую одежду мне лучше надеть на собеседование?",
          uz: "Suhbatga qanday kiyim kiyib borsam yaxshi bo'ladi?",
        },
        grammarPoint: {
          ru: "～ばいいですか — это запрос совета. Так говорят, когда не уверены, как лучше поступить в новой ситуации (например, перед собеседованием). <ruby>着<rt>き</rt></ruby>て<ruby>行<rt>い</rt></ruby>けばいいですか = «что лучше надеть? / в чём пойти?».",
          uz: "～ばいいですか — maslahat so'rash shakli. Yangi vaziyatda nima qilishni bilmaganda (masalan, suhbatdan oldin) ishlatiladi. <ruby>着<rt>き</rt></ruby>て<ruby>行<rt>い</rt></ruby>けばいいですか = «nima kiyib borsam yaxshi bo'ladi?».",
        },
      },
    },
    {
      char: "朝",
      onyomi: "チョウ",
      kunyomi: "あさ",
      meanings: {
        ru: "утро",
        uz: "tong, ertalab",
      },
      words: [
        {
          kanji: "朝",
          kana: "あさ",
          mean_ru: "утро",
          mean_uz: "tong",
        },
        {
          kanji: "今朝",
          kana: "けさ",
          mean_ru: "сегодня утром",
          mean_uz: "bugun ertalab",
        },
        {
          kanji: "朝食",
          kana: "ちょうしょく",
          mean_ru: "завтрак",
          mean_uz: "nonushta",
        },
      ],
      sentence: {
        jp: "毎朝コーヒーを飲まないと、目が覚めないんです。",
        rubyData: [
          { kanji: "毎朝", reading: "まいあさ" },
          { text: "コーヒーを" },
          { kanji: "飲", reading: "の" },
          { text: "まないと、" },
          { kanji: "目", reading: "め" },
          { text: "が" },
          { kanji: "覚", reading: "さ" },
          { text: "めないんです。" },
        ],
        translation: {
          ru: "Если каждое утро не пью кофе, я просто не могу проснуться.",
          uz: "Har tong kofe ichmasam, umuman uyg'ona olmayman.",
        },
        grammarPoint: {
          ru: "～ないと означает условие «если не...». В повседневной речи так часто описывают свои привычки или естественные реакции организма. <ruby>飲<rt>の</rt></ruby>まないと = «если не выпью».",
          uz: "～ないと «agar ...masa» degan shartni anglatadi. Kundalik nutqda inson o'z odatlari yoki organizmning tabiiy reaksiyalarini tushuntirishda ko'p ishlatiladi. <ruby>飲<rt>の</rt></ruby>まないと = «ichmasam».",
        },
      },
    },
    {
      char: "業",
      onyomi: "ギョウ",
      kunyomi: "わざ",
      meanings: {
        ru: "дело, занятие",
        uz: "ish, mashg'ulot",
      },
      words: [
        {
          kanji: "授業",
          kana: "じゅぎょう",
          mean_ru: "урок, занятие",
          mean_uz: "dars",
        },
        {
          kanji: "卒業",
          kana: "そつぎょう",
          mean_ru: "выпуск (из учебного заведения)",
          mean_uz: "bitiruv",
        },
        {
          kanji: "残業",
          kana: "ざんぎょう",
          mean_ru: "сверхурочные",
          mean_uz: "qo'shimcha ish",
        },
      ],
      sentence: {
        jp: "今日は残業があるので、先に帰ってください。",
        rubyData: [
          { kanji: "今日", reading: "きょう" },
          { text: "は" },
          { kanji: "残業", reading: "ざんぎょう" },
          { text: "があるので、" },
          { kanji: "先", reading: "さき" },
          { text: "に" },
          { kanji: "帰", reading: "かえ" },
          { text: "ってください。" },
        ],
        translation: {
          ru: "У меня сегодня переработка, поэтому идите домой первыми.",
          uz: "Bugun qo'shimcha ishim bor, shuning uchun mendan oldin ketavering.",
        },
        grammarPoint: {
          ru: "～ので используется для объяснения объективной причины без резкости. Это идеальная форма для работы, чтобы вежливо предупредить коллег или семью о задержке. <ruby>残業<rt>ざんぎょう</rt></ruby>があるので = «так как есть переработка».",
          uz: "～ので sababni xotirjam va muloyim tushuntirish uchun ishlatiladi. Ishda hamkasblarni yoki oilani kechikish haqida ogohlantirish uchun ideal shakl. <ruby>残業<rt>ざんぎょう</rt></ruby>があるので = «qo'shimcha ishim borligi sababli».",
        },
      },
    },
    {
      char: "楽",
      onyomi: "ガク, ラク",
      kunyomi: "たの.しい, たの.しむ",
      meanings: {
        ru: "музыка, удовольствие",
        uz: "musiqa, qiziqarli",
      },
      words: [
        {
          kanji: "楽しい",
          kana: "たのしい",
          mean_ru: "веселый, радостный",
          mean_uz: "qiziqarli, quvnoq",
        },
        {
          kanji: "音楽",
          kana: "おんがく",
          mean_ru: "музыка",
          mean_uz: "musiqa",
        },
        {
          kanji: "楽な",
          kana: "らくな",
          mean_ru: "легкий, комфортный",
          mean_uz: "oson, qulay",
        },
      ],
      sentence: {
        jp: "荷物が多いなら、タクシーで行ったほうが楽ですよ。",
        rubyData: [
          { kanji: "荷物", reading: "にもつ" },
          { text: "が" },
          { kanji: "多", reading: "おお" },
          { text: "いなら、タクシーで" },
          { kanji: "行", reading: "い" },
          { text: "ったほうが" },
          { kanji: "楽", reading: "らく" },
          { text: "ですよ。" },
        ],
        translation: {
          ru: "Если вещей много, то поехать на такси будет намного проще.",
          uz: "Agar yumingiz ko'p bo'lsa, taksida borganingiz qulayroq bo'ladi.",
        },
        grammarPoint: {
          ru: "～たほうがいい используется для житейских советов или рекомендаций. Это звучит так, будто вы предлагаете лучший вариант на основе логики. <ruby>行<rt>い</rt></ruby>ったほうが<ruby>楽<rt>らく</rt></ruby> = «лучше/легче поехать».",
          uz: "～たほうがいい maslahat yoki tavsiya berish uchun ishlatiladi. Bu o'z tajribangizdan kelib chiqib yaxshiroq variantni taklif qilayotgandek yangraydi. <ruby>行<rt>い</rt></ruby>ったほうが<ruby>楽<rt>らく</rt></ruby> = «borsangiz osonroq/qulayroq bo'ladi».",
        },
      },
    },
    {
      char: "歌",
      onyomi: "カ",
      kunyomi: "うた, うた.う",
      meanings: {
        ru: "песня, петь",
        uz: "qo'shiq, kuylamoq",
      },
      words: [
        {
          kanji: "歌",
          kana: "うた",
          mean_ru: "песня",
          mean_uz: "qo'shiq",
        },
        {
          kanji: "歌う",
          kana: "うたう",
          mean_ru: "петь",
          mean_uz: "kuylamoq",
        },
        {
          kanji: "歌手",
          kana: "かしゅ",
          mean_ru: "певец, певица",
          mean_uz: "xonanda",
        },
      ],
      sentence: {
        jp: "恥ずかしいから、カラオケではあまり歌いたくないんです。",
        rubyData: [
          { kanji: "恥", reading: "はず" },
          { text: "かしいから、カラオケではあまり" },
          { kanji: "歌", reading: "うた" },
          { text: "いたくないんです。" },
        ],
        translation: {
          ru: "Мне стыдно, поэтому я не очень-то хочу петь в караоке.",
          uz: "Uyalaman, shuning uchun karaokeda uncha kuylagim kelmaydi.",
        },
        grammarPoint: {
          ru: "～たくないんです смягчает отказ и добавляет ему оттенок искреннего объяснения своих чувств. Это звучит не как сухой отказ, а как объяснение из-за смущения. <ruby>歌<rt>うた</rt></ruby>いたくないんです = «не хочу петь (поймите меня)».",
          uz: "～たくないんです rad etishni yumshatib, his-tuyg'ularni samimiy tushuntirish ohangini beradi. Quruq rad javobi emas, balki vaziyatni izohlash uchun xizmat qiladi. <ruby>歌<rt>うた</rt></ruby>いたくないんです = «kuylashni xohlamayman».",
        },
      },
    },
    {
      char: "止",
      onyomi: "シ",
      kunyomi: "と.まる, と.める",
      meanings: {
        ru: "останавливать(ся)",
        uz: "to'xtamoq, to'xtatmoq",
      },
      words: [
        {
          kanji: "止まる",
          kana: "とまる",
          mean_ru: "останавливаться",
          mean_uz: "to'xtamoq",
        },
        {
          kanji: "止める",
          kana: "とめる",
          mean_ru: "останавливать (что-то)",
          mean_uz: "to'xtatmoq",
        },
        {
          kanji: "中止",
          kana: "ちゅうし",
          mean_ru: "отмена",
          mean_uz: "bekor qilish",
        },
      ],
      sentence: {
        jp: "急に電車が止まったので、会社に遅れてしまいました。",
        rubyData: [
          { kanji: "急", reading: "きゅう" },
          { text: "に" },
          { kanji: "電車", reading: "でんしゃ" },
          { text: "が" },
          { kanji: "止", reading: "と" },
          { text: "まったので、" },
          { kanji: "会社", reading: "かいしゃ" },
          { text: "に" },
          { kanji: "遅", reading: "おく" },
          { text: "れてしまいました。" },
        ],
        translation: {
          ru: "Поезд внезапно остановился, из-за чего я опоздал на работу.",
          uz: "Poyezd to'satdan to'xtab qolgani sababli ishga kechikib qoldim.",
        },
        grammarPoint: {
          ru: "～てしまう передаёт чувство сожаления из-за неприятной или незапланированной ситуации. Это стандартная форма для объяснения случайных проблем на работе. <ruby>遅<rt>おく</rt></ruby>れてしまいました = «к сожалению, опоздал».",
          uz: "～てしまう kutilmagan yoki noxush vaziyat yuz bergandagi afsuslanish hissini bildiradi. Tasodifiy muammolarni tushuntirish uchun standart shakl. <ruby>遅<rt>おく</rt></ruby>れてしまいました = «kechikib qoldim (afsuski)».",
        },
      },
    },
    {
      char: "正",
      onyomi: "セイ, ショウ",
      kunyomi: "ただ.しい",
      meanings: {
        ru: "правильный",
        uz: "to'g'ri",
      },
      words: [
        {
          kanji: "正しい",
          kana: "ただしい",
          mean_ru: "правильный, верный",
          mean_uz: "to'g'ri",
        },
        {
          kanji: "お正月",
          kana: "おしょうがつ",
          mean_ru: "Новый год",
          mean_uz: "Yangi yil",
        },
        {
          kanji: "正直",
          kana: "しょうじき",
          mean_ru: "честный",
          mean_uz: "halol",
        },
      ],
      sentence: {
        jp: "答えが正しいかどうか、もう一度確認してください。",
        rubyData: [
          { kanji: "答", reading: "こた" },
          { text: "えが" },
          { kanji: "正", reading: "ただ" },
          { text: "しいかどうか、もう" },
          { kanji: "一度", reading: "いちど" },
          { kanji: "確認", reading: "かくにん" },
          { text: "してください。" },
        ],
        translation: {
          ru: "Пожалуйста, проверьте ещё раз, правильный ли это ответ.",
          uz: "Javob to'g'rimi yoki yo'qmi, iltimos yana bir marta tekshiring.",
        },
        grammarPoint: {
          ru: "～かどうか означает «ли / или нет». Эта конструкция встроена в предложение для передачи сомнения или необходимости проверки, что постоянно нужно в учёбе. <ruby>正<rt>ただ</rt></ruby>しいかどうか = «правильный ли (ответ) или нет».",
          uz: "～かどうか «...mi yoki yo'qmi» degan ma'noni anglatadi. Bu qurilma shubha yoki tekshirish zaruratini ifodalash uchun ishlatiladi. <ruby>正<rt>ただ</rt></ruby>しいかどうか = «to'g'rimi yoki yo'qmi».",
        },
      },
    },
    {
      char: "歩",
      onyomi: "ホ, ポ",
      kunyomi: "ある.く",
      meanings: {
        ru: "шаг, идти пешком",
        uz: "qadam, piyoda yurmoq",
      },
      words: [
        {
          kanji: "歩く",
          kana: "あるく",
          mean_ru: "идти пешком",
          mean_uz: "piyoda yurmoq",
        },
        {
          kanji: "散歩",
          kana: "さんぽ",
          mean_ru: "прогулка",
          mean_uz: "sayr",
        },
        {
          kanji: "徒歩",
          kana: "とほ",
          mean_ru: "пешком",
          mean_uz: "piyoda",
        },
      ],
      sentence: {
        jp: "駅から家まで歩くのに、１５分くらいかかります。",
        rubyData: [
          { kanji: "駅", reading: "えき" },
          { text: "から" },
          { kanji: "家", reading: "いえ" },
          { text: "まで" },
          { kanji: "歩", reading: "ある" },
          { text: "くのに、１５" },
          { kanji: "分", reading: "ふん" },
          { text: "くらいかかります。" },
        ],
        translation: {
          ru: "Чтобы дойти от станции до дома, требуется около 15 минут.",
          uz: "Bekatdan uygacha piyoda yurish uchun taxminan 15 daqiqa vaqt ketadi.",
        },
        grammarPoint: {
          ru: "～のに используется для выражения цели, на которую затрачивается время или усилия. Это частый способ описать дорогу или стоимость. <ruby>歩<rt>ある</rt></ruby>くのに = «на то, чтобы дойти пешком».",
          uz: "～のに vaqt yoki kuch sarflanadigan maqsadni bildirish uchun ishlatiladi. Yo'lga qancha ketishini tushuntirish uchun qulay usul. <ruby>歩<rt>ある</rt></ruby>くのに = «piyoda borish uchun».",
        },
      },
    },
    {
      char: "死",
      onyomi: "シ",
      kunyomi: "し.ぬ",
      meanings: {
        ru: "смерть, умирать",
        uz: "o'lim, o'lmoq",
      },
      words: [
        {
          kanji: "死ぬ",
          kana: "しぬ",
          mean_ru: "умирать",
          mean_uz: "o'lmoq",
        },
        {
          kanji: "死亡",
          kana: "しぼう",
          mean_ru: "смерть (офиц.)",
          mean_uz: "o'lim, vafot etish",
        },
        {
          kanji: "必死",
          kana: "ひっし",
          mean_ru: "отчаянно, изо всех сил",
          mean_uz: "jon holatda, qattiq",
        },
      ],
      sentence: {
        jp: "今日は忙しすぎて、死ぬほど疲れました。",
        rubyData: [
          { kanji: "今日", reading: "きょう" },
          { text: "は" },
          { kanji: "忙", reading: "いそが" },
          { text: "しすぎて、" },
          { kanji: "死", reading: "し" },
          { text: "ぬほど" },
          { kanji: "疲", reading: "つか" },
          { text: "れました。" },
        ],
        translation: {
          ru: "Сегодня было так много работы, что я устал до смерти.",
          uz: "Bugun ish juda ko'pligidan o'lgudek charchadim.",
        },
        grammarPoint: {
          ru: "～ほど показывает крайнюю степень (до такой степени, что...). Фраза <ruby>死<rt>し</rt></ruby>ぬほど (до смерти) часто используется в разговорной речи для преувеличения усталости или боли.",
          uz: "～ほど darajani ko'rsatadi (shu darajadaki...). <ruby>死<rt>し</rt></ruby>ぬほど (o'lgudek) iborasi so'zlashuvda kuchli his-tuyg'ularni yoki charchoqni bo'rttirib ifodalash uchun ko'p ishlatiladi.",
        },
      },
    },
    {
      char: "注",
      onyomi: "チュウ",
      kunyomi: "そそ.ぐ",
      meanings: {
        ru: "наливать, внимание",
        uz: "quymoq, diqqat",
      },
      words: [
        {
          kanji: "注意",
          kana: "ちゅうい",
          mean_ru: "внимание, осторожность",
          mean_uz: "diqqat, ehtiyotkorlik",
        },
        {
          kanji: "注文",
          kana: "ちゅうもん",
          mean_ru: "заказ",
          mean_uz: "buyurtma",
        },
        {
          kanji: "注ぐ",
          kana: "そそぐ",
          mean_ru: "наливать",
          mean_uz: "quymoq",
        },
      ],
      sentence: {
        jp: "ネットで新しいスマホを注文したところです。",
        rubyData: [
          { text: "ネットで" },
          { kanji: "新", reading: "あたら" },
          { text: "しいスマホを" },
          { kanji: "注文", reading: "ちゅうもん" },
          { text: "したところです。" },
        ],
        translation: {
          ru: "Я как раз только что заказал в интернете новый смартфон.",
          uz: "Internetdan yangi smartfon buyurtma berib turgan edim.",
        },
        grammarPoint: {
          ru: "～たところです означает, что действие завершилось буквально только что. Это очень полезная фраза в быту, чтобы объяснить свой текущий статус или успехи. <ruby>注文<rt>ちゅうもん</rt></ruby>したところです = «только что заказал».",
          uz: "～たところです harakatning hozirgina tugaganini anglatadi. Kundalik hayotda hozirgi holatni tushuntirish uchun juda foydali. <ruby>注文<rt>ちゅうもん</rt></ruby>したところです = «hozirgina buyurtma qildim».",
        },
      },
    },
    {
      char: "洋",
      onyomi: "ヨウ",
      kunyomi: "-",
      meanings: {
        ru: "западный, океан",
        uz: "G'arb(ga oid), okean",
      },
      words: [
        {
          kanji: "洋服",
          kana: "ようふく",
          mean_ru: "европейская одежда",
          mean_uz: "yevropacha kiyim",
        },
        {
          kanji: "西洋",
          kana: "せいよう",
          mean_ru: "Запад (страны)",
          mean_uz: "G'arb",
        },
        {
          kanji: "洋食",
          kana: "ようしょく",
          mean_ru: "европейская еда",
          mean_uz: "g'arb taomlari",
        },
      ],
      sentence: {
        jp: "和食より洋食のほうが作りやすいと思います。",
        rubyData: [
          { kanji: "和食", reading: "わしょく" },
          { text: "より" },
          { kanji: "洋食", reading: "ようしょく" },
          { text: "のほうが" },
          { kanji: "作", reading: "つく" },
          { text: "りやすいと" },
          { kanji: "思", reading: "おも" },
          { text: "います。" },
        ],
        translation: {
          ru: "Я думаю, что европейскую еду готовить легче, чем японскую.",
          uz: "Mening fikrimcha, yapon taomlaridan ko'ra g'arb taomlarini tayyorlash osonroq.",
        },
        grammarPoint: {
          ru: "～より～のほうが используется для сравнения двух вещей. А суффикс ～やすい прикрепляется к основе глагола и означает, что действие делать легко. <ruby>作<rt>つく</rt></ruby>りやすい = «легко готовить».",
          uz: "～より～のほうが ikkita narsani solishtirish uchun ishlatiladi. ～やすい qo'shimchasi esa fe'lning o'zagiga qo'shilib, «bajarish oson» degan ma'noni beradi. <ruby>作<rt>つく</rt></ruby>りやすい = «tayyorlash oson».",
        },
      },
    },
    {
      char: "海",
      onyomi: "カイ",
      kunyomi: "うみ",
      meanings: {
        ru: "море",
        uz: "dengiz",
      },
      words: [
        {
          kanji: "海",
          kana: "うみ",
          mean_ru: "море",
          mean_uz: "dengiz",
        },
        {
          kanji: "海外",
          kana: "かいがい",
          mean_ru: "заграница",
          mean_uz: "chet el",
        },
        {
          kanji: "海岸",
          kana: "かいがん",
          mean_ru: "побережье",
          mean_uz: "qirg'oq",
        },
      ],
      sentence: {
        jp: "将来、海外で働くために英語を勉強しています。",
        rubyData: [
          { kanji: "将来", reading: "しょうらい" },
          { text: "、" },
          { kanji: "海外", reading: "かいがい" },
          { text: "で" },
          { kanji: "働", reading: "はたら" },
          { text: "くために" },
          { kanji: "英語", reading: "えいご" },
          { text: "を" },
          { kanji: "勉強", reading: "べんきょう" },
          { text: "しています。" },
        ],
        translation: {
          ru: "Я изучаю английский, чтобы в будущем работать за границей.",
          uz: "Kelajakda chet elda ishlash maqsadida ingliz tilini o'rganyapman.",
        },
        grammarPoint: {
          ru: "～ために показывает четкую цель («ради того, чтобы»). В отличие от мягкого «чтобы», эта форма звучит как осознанное усилие и план на будущее. <ruby>働<rt>はたら</rt></ruby>くために = «ради того, чтобы работать».",
          uz: "～ために aniq maqsadni («uchun / maqsadida») ko'rsatadi. Bu shakl maqsadga erishish uchun qilinayotgan ongli harakat va rejani bildiradi. <ruby>働<rt>はたら</rt></ruby>くために = «ishlash maqsadida».",
        },
      },
    },
    {
      char: "漢",
      onyomi: "カン",
      kunyomi: "-",
      meanings: {
        ru: "Китай, китайский",
        uz: "Xitoy(ga oid)",
      },
      words: [
        {
          kanji: "漢字",
          kana: "かんじ",
          mean_ru: "иероглиф (кандзи)",
          mean_uz: "kanji (iyeroglif)",
        },
        {
          kanji: "漢方薬",
          kana: "かんぽうやく",
          mean_ru: "китайская медицина",
          mean_uz: "sharq tabobati dorisi",
        },
        {
          kanji: "漢語",
          kana: "かんご",
          mean_ru: "слово китайского происхождения",
          mean_uz: "xitoycha o'zakli so'z",
        },
      ],
      sentence: {
        jp: "この漢字の読み方が分からないので、教えてくれませんか。",
        rubyData: [
          { text: "この" },
          { kanji: "漢字", reading: "かんじ" },
          { text: "の" },
          { kanji: "読", reading: "よ" },
          { text: "み" },
          { kanji: "方", reading: "かた" },
          { text: "が" },
          { kanji: "分", reading: "わ" },
          { text: "からないので、" },
          { kanji: "教", reading: "おし" },
          { text: "えてくれませんか。" },
        ],
        translation: {
          ru: "Я не знаю, как читается этот кандзи, не могли бы вы мне подсказать?",
          uz: "Bu kanjining o'qilishini bilmayman, o'rgatib yubora olmaysizmi?",
        },
        grammarPoint: {
          ru: "～てくれませんか — мягкий и естественный способ попросить помощи у знакомых. Это вежливее, чем просто てください, и идеально для повседневных просьб. <ruby>教<rt>おし</rt></ruby>えてくれませんか = «не объясните ли мне?».",
          uz: "～てくれませんか — tanishlardan yordam so'rashning yumshoq va tabiiy usuli. Bu てください dan ko'ra xushmuomalaroq va kundalik iltimoslar uchun mos. <ruby>教<rt>おし</rt></ruby>えてくれませんか = «o'rgatib yubora olmaysizmi?».",
        },
      },
    },
    {
      char: "牛",
      onyomi: "ギュウ",
      kunyomi: "うし",
      meanings: {
        ru: "корова, бык",
        uz: "sigir, buqa",
      },
      words: [
        {
          kanji: "牛",
          kana: "うし",
          mean_ru: "корова",
          mean_uz: "sigir",
        },
        {
          kanji: "牛肉",
          kana: "ぎゅうにく",
          mean_ru: "говядина",
          mean_uz: "mol go'shti",
        },
        {
          kanji: "牛乳",
          kana: "ぎゅうにゅう",
          mean_ru: "молоко",
          mean_uz: "sigir suti",
        },
      ],
      sentence: {
        jp: "冷たい牛乳を飲んだら、お腹が痛くなってしまいました。",
        rubyData: [
          { kanji: "冷", reading: "つめ" },
          { text: "たい" },
          { kanji: "牛乳", reading: "ぎゅうにゅう" },
          { text: "を" },
          { kanji: "飲", reading: "の" },
          { text: "んだら、お" },
          { kanji: "腹", reading: "なか" },
          { text: "が" },
          { kanji: "痛", reading: "いた" },
          { text: "くなってしまいました。" },
        ],
        translation: {
          ru: "Я выпил холодное молоко, и у меня неожиданно заболел живот.",
          uz: "Sovuq sut ichgan edim, kutilmaganda qornim og'rib qoldi.",
        },
        grammarPoint: {
          ru: "～てしまう передаёт чувство сожаления о том, что произошло нечто нежелательное. Часто используется в рассказах о мелких неудачах или здоровье. <ruby>痛<rt>いた</rt></ruby>くなってしまいました = «к сожалению, заболел».",
          uz: "～てしまう kutilmagan yoki istalmagan voqea yuz bergandagi afsuslanish hissini bildiradi. Ko'pincha kichik muammolar haqida gapirganda ishlatiladi. <ruby>痛<rt>いた</rt></ruby>くなってしまいました = «kutilmaganda og'rib qoldi».",
        },
      },
    },
    {
      char: "物",
      onyomi: "ブツ, モツ",
      kunyomi: "もの",
      meanings: {
        ru: "вещь, предмет",
        uz: "narsa, buyum",
      },
      words: [
        {
          kanji: "買い物",
          kana: "かいもの",
          mean_ru: "покупки",
          mean_uz: "xarid",
        },
        {
          kanji: "荷物",
          kana: "にもつ",
          mean_ru: "багаж, посылка",
          mean_uz: "yuk, posilka",
        },
        {
          kanji: "動物",
          kana: "どうぶつ",
          mean_ru: "животное",
          mean_uz: "hayvon",
        },
      ],
      sentence: {
        jp: "買い物に行くなら、卵を買ってきてくれませんか。",
        rubyData: [
          { kanji: "買", reading: "か" },
          { text: "い" },
          { kanji: "物", reading: "もの" },
          { text: "に" },
          { kanji: "行", reading: "い" },
          { text: "くなら、" },
          { kanji: "卵", reading: "たまご" },
          { text: "を" },
          { kanji: "買", reading: "か" },
          { text: "ってきてくれませんか。" },
        ],
        translation: {
          ru: "Если пойдешь в магазин, не мог бы ты по пути купить яиц?",
          uz: "Agar xaridga boradigan bo'lsang, tuxum ham olib kelib bera olmaysanmi?",
        },
        grammarPoint: {
          ru: "～てきてくれませんか — это вежливая просьба пойти, сделать что-то и вернуться с результатом. Это очень естественная форма в семье или с друзьями. <ruby>買<rt>か</rt></ruby>ってきて = «сходи купи и принеси».",
          uz: "～てきてくれませんか — bu borib, biror narsa qilib, natijasi bilan qaytib kelishni muloyim so'rash shakli. Oila va do'stlar orasida juda tabiiy yangraydi. <ruby>買<rt>か</rt></ruby>ってきて = «sotib olib kel (borib kel)».",
        },
      },
    },
    {
      char: "特",
      onyomi: "トク",
      kunyomi: "-",
      meanings: {
        ru: "особый, специальный",
        uz: "maxsus, alohida",
      },
      words: [
        {
          kanji: "特別",
          kana: "とくべつ",
          mean_ru: "особенный",
          mean_uz: "maxsus",
        },
        {
          kanji: "特に",
          kana: "とくに",
          mean_ru: "в частности, особенно",
          mean_uz: "ayniqsa",
        },
        {
          kanji: "特急",
          kana: "とっきゅう",
          mean_ru: "экспресс (поезд)",
          mean_uz: "tezyurar poyezd",
        },
      ],
      sentence: {
        jp: "特急電車に乗れば、会議に間に合うはずです。",
        rubyData: [
          { kanji: "特急電車", reading: "とっきゅうでんしゃ" },
          { text: "に" },
          { kanji: "乗", reading: "の" },
          { text: "れば、" },
          { kanji: "会議", reading: "かいぎ" },
          { text: "に" },
          { kanji: "間", reading: "ま" },
          { text: "に" },
          { kanji: "合", reading: "あ" },
          { text: "うはずです。" },
        ],
        translation: {
          ru: "Если сесть на экспресс, то мы должны успеть на собрание.",
          uz: "Agar tezyurar poyezdga chiqsak, majlisga ulgurishimiz aniq.",
        },
        grammarPoint: {
          ru: "～はずです выражает сильную уверенность или логическое ожидание. Вы сделали расчет и пришли к выводу: «по идее, так и должно быть». <ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うはずです = «должны успеть (по расчётам)».",
          uz: "～はずです kuchli ishonch yoki mantiqiy kutishni ifodalaydi. Fikran hisob-kitob qilib, shunday xulosaga kelganingizni bildiradi. <ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うはずです = «ulgurishimiz aniq/kerak».",
        },
      },
    },
    {
      char: "犬",
      onyomi: "ケン",
      kunyomi: "いぬ",
      meanings: {
        ru: "собака",
        uz: "it",
      },
      words: [
        {
          kanji: "犬",
          kana: "いぬ",
          mean_ru: "собака",
          mean_uz: "it",
        },
        {
          kanji: "子犬",
          kana: "こいぬ",
          mean_ru: "щенок",
          mean_uz: "kuchukcha",
        },
        {
          kanji: "野良犬",
          kana: "のらいぬ",
          mean_ru: "бродячая собака",
          mean_uz: "daydi it",
        },
      ],
      sentence: {
        jp: "うちの犬は、私が帰るといつも嬉しそうに走ってきます。",
        rubyData: [
          { text: "うちの" },
          { kanji: "犬", reading: "いぬ" },
          { text: "は、" },
          { kanji: "私", reading: "わたし" },
          { text: "が" },
          { kanji: "帰", reading: "かえ" },
          { text: "るといつも" },
          { kanji: "嬉", reading: "うれ" },
          { text: "しそうに" },
          { kanji: "走", reading: "はし" },
          { text: "ってきます。" },
        ],
        translation: {
          ru: "Когда я возвращаюсь, моя собака всегда радостно бежит ко мне.",
          uz: "Men qaytganimda, itimiz har doim xursand bo'lib yugurib keladi.",
        },
        grammarPoint: {
          ru: "～そう (к основе прилагательного) описывает, как что-то выглядит со стороны. Суффикс ～てくる показывает, что действие приближается к вам. <ruby>走<rt>はし</rt></ruby>ってきます = «прибегает (ко мне)».",
          uz: "～そう (sifat o'zagiga) biror narsaning tashqaridan qanday ko'rinishini tasvirlaydi. ～てくる esa harakat siz tomonga yaqinlashayotganini ko'rsatadi. <ruby>走<rt>はし</rt></ruby>ってきます = «yugurib keladi».",
        },
      },
    },
    {
      char: "理",
      onyomi: "リ",
      kunyomi: "-",
      meanings: {
        ru: "логика, причина",
        uz: "mantiq, sabab",
      },
      words: [
        {
          kanji: "理由",
          kana: "りゆう",
          mean_ru: "причина",
          mean_uz: "sabab",
        },
        {
          kanji: "無理",
          kana: "むり",
          mean_ru: "невозможное, перенапряжение",
          mean_uz: "imkonsiz, o'zini majburlash",
        },
        {
          kanji: "料理",
          kana: "りょうり",
          mean_ru: "кухня, блюдо",
          mean_uz: "taom, pishirish",
        },
      ],
      sentence: {
        jp: "熱があるなら、無理をしないで休んだほうがいいですよ。",
        rubyData: [
          { kanji: "熱", reading: "ねつ" },
          { text: "があるなら、" },
          { kanji: "無理", reading: "むり" },
          { text: "をしないで" },
          { kanji: "休", reading: "やす" },
          { text: "んだほうがいいですよ。" },
        ],
        translation: {
          ru: "Если у тебя температура, лучше не перенапрягайся и отдохни.",
          uz: "Agar isitang bo'lsa, o'zingni majburlamasdan dam olganing yaxshi.",
        },
        grammarPoint: {
          ru: "～ないで означает «не делая чего-то» и часто используется как призыв к заботе о ком-то или совет. <ruby>無理<rt>むり</rt></ruby>をしないで = «не заставляй себя / не перетруждайся».",
          uz: "～ないで «biror ishni qilmasdan» degan ma'noni beradi va ko'pincha birovga g'amxo'rlik qilishda yoki maslahatda ishlatiladi. <ruby>無理<rt>むり</rt></ruby>をしないで = «o'zingni majburlama / toliqma».",
        },
      },
    },
    {
      char: "用",
      onyomi: "ヨウ",
      kunyomi: "もち.いる",
      meanings: {
        ru: "дело, использование",
        uz: "yumush, foydalanish",
      },
      words: [
        {
          kanji: "用事",
          kana: "ようじ",
          mean_ru: "дело, поручение",
          mean_uz: "yumush, ish",
        },
        {
          kanji: "用意",
          kana: "ようい",
          mean_ru: "подготовка",
          mean_uz: "tayyorgarlik",
        },
        {
          kanji: "利用",
          kana: "りよう",
          mean_ru: "использование",
          mean_uz: "foydalanish",
        },
      ],
      sentence: {
        jp: "急な用事ができたので、今日の飲み会には行けなくなりました。",
        rubyData: [
          { kanji: "急", reading: "きゅう" },
          { text: "な" },
          { kanji: "用事", reading: "ようじ" },
          { text: "ができたので、" },
          { kanji: "今日", reading: "きょう" },
          { text: "の" },
          { kanji: "飲", reading: "の" },
          { text: "み" },
          { kanji: "会", reading: "かい" },
          { text: "には" },
          { kanji: "行", reading: "い" },
          { text: "けなくなりました。" },
        ],
        translation: {
          ru: "У меня появились срочные дела, поэтому я не смогу пойти на сегодняшнюю вечеринку.",
          uz: "Shoshilinch ishim chiqib qoldi, shuning uchun bugungi o'tirishga bora olmaydigan bo'ldim.",
        },
        grammarPoint: {
          ru: "～なくなる указывает на изменение состояния (от возможности к невозможности). Это самая частая формула для вежливой отмены планов. <ruby>行<rt>い</rt></ruby>けなくなりました = «стало невозможно пойти».",
          uz: "～なくなる holatning o'zgarganini (imkoni borlikdan imkonsizlikka) bildiradi. Rejalarni bekor qilish uchun eng ko'p ishlatiladigan shakl. <ruby>行<rt>い</rt></ruby>けなくなりました = «bora olmaydigan bo'ldim».",
        },
      },
    },
    {
      char: "田",
      onyomi: "デン",
      kunyomi: "た, だ",
      meanings: {
        ru: "рисовое поле",
        uz: "sholi dalasi",
      },
      words: [
        {
          kanji: "田んぼ",
          kana: "たんぼ",
          mean_ru: "рисовое поле",
          mean_uz: "sholi dalasi",
        },
        {
          kanji: "田舎",
          kana: "いなか",
          mean_ru: "деревня, провинция",
          mean_uz: "qishloq",
        },
        {
          kanji: "水田",
          kana: "すいでん",
          mean_ru: "заливное поле",
          mean_uz: "suvli sholi dalasi",
        },
      ],
      sentence: {
        jp: "お盆休みは、田舎に帰る人が多いです。",
        rubyData: [
          { text: "お" },
          { kanji: "盆休", reading: "ぼんやす" },
          { text: "みは、" },
          { kanji: "田舎", reading: "いなか" },
          { text: "に" },
          { kanji: "帰", reading: "かえ" },
          { text: "る" },
          { kanji: "人", reading: "ひと" },
          { text: "が" },
          { kanji: "多", reading: "おお" },
          { text: "いです。" },
        ],
        translation: {
          ru: "Во время каникул Обон очень много людей возвращаются в родные края.",
          uz: "Obon bayrami ta'tilida qishlog'iga qaytadigan odamlar ko'p bo'ladi.",
        },
        grammarPoint: {
          ru: "«Существительное + が多い» — естественный способ сказать, что какое-то явление часто встречается. Это звучит лучше, чем прямой перевод «многие люди возвращаются». <ruby>帰<rt>かえ</rt></ruby>る<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いです = «много людей, которые возвращаются».",
          uz: "«Ot + が多い» — qandaydir holat ko'p uchrashini aytishning tabiiy usuli. Bu «ko'p odamlar qaytadi» deb to'g'ridan-to'g'ri tarjima qilishdan ko'ra yaxshiroq. <ruby>帰<rt>かえ</rt></ruby>る<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いです = «qaytadigan odamlar ko'p».",
        },
      },
    },
    {
      char: "町",
      onyomi: "チョウ",
      kunyomi: "まち",
      meanings: {
        ru: "город, район",
        uz: "shahar, tuman",
      },
      words: [
        {
          kanji: "町",
          kana: "まち",
          mean_ru: "городок, район",
          mean_uz: "kichik shahar, mahalla",
        },
        {
          kanji: "下町",
          kana: "したまち",
          mean_ru: "старый район",
          mean_uz: "eski shahar qismi",
        },
        {
          kanji: "町長",
          kana: "ちょうちょう",
          mean_ru: "мэр города",
          mean_uz: "shahar hokimi",
        },
      ],
      sentence: {
        jp: "この町は静かで安全なので、とても住みやすいです。",
        rubyData: [
          { text: "この" },
          { kanji: "町", reading: "まち" },
          { text: "は" },
          { kanji: "静", reading: "しず" },
          { text: "かで" },
          { kanji: "安全", reading: "あんぜん" },
          { text: "なので、とても" },
          { kanji: "住", reading: "す" },
          { text: "みやすいです。" },
        ],
        translation: {
          ru: "Этот город тихий и безопасный, поэтому здесь очень комфортно жить.",
          uz: "Bu shahar tinch va xavfsiz bo'lgani uchun yashashga juda qulay.",
        },
        grammarPoint: {
          ru: "～なので используется для чёткого и вежливого объяснения причины, которая является фактом. Звучит мягче, чем だから, поэтому часто используется для рекомендаций.",
          uz: "～なので aniq faktlarga asoslangan sababni silliq tushuntirishda ishlatiladi. だから dan ko'ra yumshoqroq bo'lgani uchun tavsiyalarda ko'p qo'llaniladi.",
        },
      },
    },
    {
      char: "画",
      onyomi: "ガ, カク",
      kunyomi: "-",
      meanings: {
        ru: "картина, черта",
        uz: "rasm, chiziq",
      },
      words: [
        {
          kanji: "映画",
          kana: "えいが",
          mean_ru: "фильм",
          mean_uz: "kino",
        },
        {
          kanji: "計画",
          kana: "けいかく",
          mean_ru: "план",
          mean_uz: "reja",
        },
        {
          kanji: "画面",
          kana: "がめん",
          mean_ru: "экран",
          mean_uz: "ekran",
        },
      ],
      sentence: {
        jp: "週末は、友達と一緒に映画を見に行く予定です。",
        rubyData: [
          { kanji: "週末", reading: "しゅうまつ" },
          { text: "は、" },
          { kanji: "友達", reading: "ともだち" },
          { text: "と" },
          { kanji: "一緒", reading: "いっしょ" },
          { text: "に" },
          { kanji: "映画", reading: "えいが" },
          { text: "を" },
          { kanji: "見", reading: "み" },
          { text: "に" },
          { kanji: "行", reading: "い" },
          { text: "く" },
          { kanji: "予定", reading: "よてい" },
          { text: "です。" },
        ],
        translation: {
          ru: "В эти выходные я планирую пойти с друзьями в кино.",
          uz: "Bu dam olish kunlarida do'stlarim bilan kino ko'rgani borishni rejalashtiryapman.",
        },
        grammarPoint: {
          ru: "～予定です выражает чёткий план. Это не просто «я хочу», а уже намеченное действие на будущее, о котором вы договорились с другими. <ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby> = «планирую пойти».",
          uz: "～予定です aniq reja yoki jadvalni ifodalaydi. Bu shunchaki xohish emas, balki kelishib qo'yilgan yoki belgilangan harakatdir. <ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby> = «borishni rejalashtirganman».",
        },
      },
    },
    {
      char: "界",
      onyomi: "カイ",
      kunyomi: "-",
      meanings: {
        ru: "мир, граница",
        uz: "dunyo, chegara",
      },
      words: [
        {
          kanji: "世界",
          kana: "せかい",
          mean_ru: "мир (планета)",
          mean_uz: "dunyo",
        },
        {
          kanji: "限界",
          kana: "げんかい",
          mean_ru: "предел",
          mean_uz: "chegara, limit",
        },
        {
          kanji: "業界",
          kana: "ぎょうかい",
          mean_ru: "отрасль, индустрия",
          mean_uz: "soha, industriya",
        },
      ],
      sentence: {
        jp: "インターネットのおかげで、世界中のニュースがすぐに分かります。",
        rubyData: [
          { text: "インターネットのおかげで、" },
          { kanji: "世界中", reading: "せかいじゅう" },
          { text: "のニュースがすぐに" },
          { kanji: "分", reading: "わ" },
          { text: "かります。" },
        ],
        translation: {
          ru: "Благодаря интернету можно мгновенно узнавать новости со всего мира.",
          uz: "Internet sharofati bilan butun dunyo yangiliklarini darhol bilib olish mumkin.",
        },
        grammarPoint: {
          ru: "～のおかげで используется для выражения благодарности за положительный результат («благодаря тому, что...»). Одно из самых полезных выражений для N4.",
          uz: "～のおかげで ijobiy natija uchun minnatdorchilik bildirganda ishlatiladi («...ning sharofati bilan/tufayli»). N4 darajasining eng foydali iboralaridan biri.",
        },
      },
    },
    {
      char: "病",
      onyomi: "ビョウ, ヘイ",
      kunyomi: "やまい, や.む",
      meanings: {
        ru: "болезнь",
        uz: "kasallik",
      },
      words: [
        {
          kanji: "病気",
          kana: "びょうき",
          mean_ru: "болезнь",
          mean_uz: "kasallik",
        },
        {
          kanji: "病院",
          kana: "びょういん",
          mean_ru: "больница",
          mean_uz: "kasalxona",
        },
        {
          kanji: "看病",
          kana: "かんびょう",
          mean_ru: "уход за больным",
          mean_uz: "kasalga qarash",
        },
      ],
      sentence: {
        jp: "病気が早く治るように、薬を飲んで寝ています。",
        rubyData: [
          { kanji: "病気", reading: "びょうき" },
          { text: "が" },
          { kanji: "早", reading: "はや" },
          { text: "く" },
          { kanji: "治", reading: "なお" },
          { text: "るように、" },
          { kanji: "薬", reading: "くすり" },
          { text: "を" },
          { kanji: "飲", reading: "の" },
          { text: "んで" },
          { kanji: "寝", reading: "ね" },
          { text: "ています。" },
        ],
        translation: {
          ru: "Чтобы поскорее выздороветь, я пью лекарства и лежу в постели.",
          uz: "Kasallik tezroq tuzalishi uchun, dori ichib yotibman.",
        },
        grammarPoint: {
          ru: "～ように используется для выражения надежды или цели, которая не зависит напрямую от нашей воли (как, например, «выздороветь»). <ruby>治<rt>なお</rt></ruby>るように = «чтобы выздороветь (надеясь на это)».",
          uz: "～ように to'g'ridan-to'g'ri irodamizga bog'liq bo'lmagan umid yoki maqsadni (masalan, tuzalishni) bildirish uchun ishlatiladi. <ruby>治<rt>なお</rt></ruby>るように = «tuzalib ketish maqsadi bilan».",
        },
      },
    },
    {
      char: "発",
      onyomi: "ハツ, ホツ",
      kunyomi: "-",
      meanings: {
        ru: "отправление, выпуск",
        uz: "jo'nash, chiqarish",
      },
      words: [
        {
          kanji: "出発",
          kana: "しゅっぱつ",
          mean_ru: "отправление",
          mean_uz: "jo'nash",
        },
        {
          kanji: "発見",
          kana: "はっけん",
          mean_ru: "открытие (находка)",
          mean_uz: "kashfiyot",
        },
        {
          kanji: "発音",
          kana: "はつおん",
          mean_ru: "произношение",
          mean_uz: "talaffuz",
        },
      ],
      sentence: {
        jp: "電車が出発する前に、お弁当を買っておきましょう。",
        rubyData: [
          { kanji: "電車", reading: "でんしゃ" },
          { text: "が" },
          { kanji: "出発", reading: "しゅっぱつ" },
          { text: "する" },
          { kanji: "前", reading: "まえ" },
          { text: "に、お" },
          { kanji: "弁当", reading: "べんとう" },
          { text: "を" },
          { kanji: "買", reading: "か" },
          { text: "っておきましょう。" },
        ],
        translation: {
          ru: "Давайте купим бенто заранее, до того как поезд отправится.",
          uz: "Poyezd jo'nashidan oldin, bento (tushlik) ni oldindan sotib olib qo'yaylik.",
        },
        grammarPoint: {
          ru: "～ておく означает подготовку к будущему действию. Вы делаете что-то заранее, чтобы потом было удобно. <ruby>買<rt>か</rt></ruby>っておきましょう = «давайте купим заранее / подготовим».",
          uz: "～ておく kelajakdagi harakat uchun tayyorgarlikni anglatadi. Keyinroq qulay bo'lishi uchun biror narsani oldindan qilib qo'yish. <ruby>買<rt>か</rt></ruby>っておきましょう = «oldindan sotib olib qo'yaylik».",
        },
      },
    },
    {
      char: "的",
      onyomi: "テキ",
      kunyomi: "まと",
      meanings: {
        ru: "мишень, суффикс прилагательных",
        uz: "maqsad, nishon",
      },
      words: [
        {
          kanji: "目的",
          kana: "もくてき",
          mean_ru: "цель",
          mean_uz: "maqsad",
        },
        {
          kanji: "具体的",
          kana: "ぐたいてき",
          mean_ru: "конкретный",
          mean_uz: "aniq, konkret",
        },
        {
          kanji: "個人的",
          kana: "こじんてき",
          mean_ru: "личный",
          mean_uz: "shaxsiy",
        },
      ],
      sentence: {
        jp: "日本に来た目的は、アニメの仕事をすることです。",
        rubyData: [
          { kanji: "日本", reading: "にほん" },
          { text: "に" },
          { kanji: "来", reading: "き" },
          { text: "た" },
          { kanji: "目的", reading: "もくてき" },
          { text: "は、アニメの" },
          { kanji: "仕事", reading: "しごと" },
          { text: "をすることです。" },
        ],
        translation: {
          ru: "Цель моего приезда в Японию — работать в сфере аниме.",
          uz: "Yaponiyaga kelishimdagi maqsadim — anime sohasida ishlashdir.",
        },
        grammarPoint: {
          ru: "В конце предложения используется ～ことです (номинализация). Это превращает действие в существительное, чтобы можно было сказать «моя цель — это работа». <ruby>仕事<rt>しごと</rt></ruby>をすることです = «это делать работу».",
          uz: "Gap oxirida ～ことです (otlashuv) ishlatiladi. Bu harakatni otga aylantirib, «mening maqsadim — ishlashdir» deb aytish imkonini beradi. <ruby>仕事<rt>しごと</rt></ruby>をすることです = «ishlashdir».",
        },
      },
    },
    {
      char: "目",
      onyomi: "モク, ボク",
      kunyomi: "め",
      meanings: {
        ru: "глаз",
        uz: "ko'z",
      },
      words: [
        {
          kanji: "目",
          kana: "め",
          mean_ru: "глаз",
          mean_uz: "ko'z",
        },
        {
          kanji: "目覚まし時計",
          kana: "めざましどけい",
          mean_ru: "будильник",
          mean_uz: "budilnik",
        },
        {
          kanji: "目立つ",
          kana: "めだつ",
          mean_ru: "выделяться, бросаться в глаза",
          mean_uz: "ko'zga tashlanmoq",
        },
      ],
      sentence: {
        jp: "パソコンを使いすぎて、目が痛くなってしまいました。",
        rubyData: [
          { text: "パソコンを" },
          { kanji: "使", reading: "つか" },
          { text: "いすぎて、" },
          { kanji: "目", reading: "め" },
          { text: "が" },
          { kanji: "痛", reading: "いた" },
          { text: "くなってしまいました。" },
        ],
        translation: {
          ru: "Я слишком много сидел за компьютером, и у меня разболелись глаза.",
          uz: "Kompyuterdan haddan tashqari ko'p foydalandim va ko'zlarim og'rib qoldi.",
        },
        grammarPoint: {
          ru: "～すぎて (от すぎる) означает чрезмерное действие. Часто используется для жалоб на то, что вы сделали чего-то слишком много и это привело к плохим последствиям. <ruby>使<rt>つか</rt></ruby>いすぎて = «использовал слишком много».",
          uz: "～すぎて (すぎる dan) harakatning me'yordan ortib ketganini bildiradi. Biror narsani haddan tashqari ko'p qilib yuborganlik va uning salbiy oqibatlaridan nolishda ishlatiladi. <ruby>使<rt>つか</rt></ruby>いすぎて = «haddan tashqari ko'p ishlatib».",
        },
      },
    },
    {
      char: "真",
      onyomi: "シン",
      kunyomi: "ま",
      meanings: {
        ru: "истинный, настоящий",
        uz: "haqiqiy, chin",
      },
      words: [
        {
          kanji: "写真",
          kana: "しゃしん",
          mean_ru: "фотография",
          mean_uz: "rasm, foto",
        },
        {
          kanji: "真ん中",
          kana: "まんなか",
          mean_ru: "самый центр",
          mean_uz: "qoq markaz",
        },
        {
          kanji: "真面目",
          kana: "まじめ",
          mean_ru: "серьезный, добросовестный",
          mean_uz: "jiddiy, mas'uliyatli",
        },
      ],
      sentence: {
        jp: "彼はとても真面目で、誰にでも親切な人です。",
        rubyData: [
          { kanji: "彼", reading: "かれ" },
          { text: "はとても" },
          { kanji: "真面目", reading: "まじめ" },
          { text: "で、" },
          { kanji: "誰", reading: "だれ" },
          { text: "にでも" },
          { kanji: "親切", reading: "しんせつ" },
          { text: "な" },
          { kanji: "人", reading: "ひと" },
          { text: "です。" },
        ],
        translation: {
          ru: "Он очень серьезный и добр абсолютно ко всем.",
          uz: "U juda jiddiy va hammaga birdek mehribon inson.",
        },
        grammarPoint: {
          ru: "Вопросительное слово + でも (здесь 誰にでも) означает «к кому угодно / ко всем без исключения». Это подчеркивает абсолютность качества человека или предмета.",
          uz: "So'roq so'zi + でも (bu yerda 誰にでも) «kim bo'lishidan qat'i nazar / hammaga» degan ma'noni anglatadi. Bu inson yoki narsaning mutlaq xususiyatini ta'kidlaydi.",
        },
      },
    },
    {
      char: "着",
      onyomi: "チャク, ジャク",
      kunyomi: "き.る, つ.く",
      meanings: {
        ru: "надевать, прибывать",
        uz: "kiymoq, yetib kelmoq",
      },
      words: [
        {
          kanji: "着る",
          kana: "きる",
          mean_ru: "надевать (на верхнюю часть тела)",
          mean_uz: "kiymoq",
        },
        {
          kanji: "到着",
          kana: "とうちゃく",
          mean_ru: "прибытие",
          mean_uz: "yetib kelish",
        },
        {
          kanji: "下着",
          kana: "したぎ",
          mean_ru: "нижнее белье",
          mean_uz: "ichki kiyim",
        },
      ],
      sentence: {
        jp: "駅に着いたら、すぐにメッセージを送ってください。",
        rubyData: [
          { kanji: "駅", reading: "えき" },
          { text: "に" },
          { kanji: "着", reading: "つ" },
          { text: "いたら、すぐにメッセージを" },
          { kanji: "送", reading: "おく" },
          { text: "ってください。" },
        ],
        translation: {
          ru: "Как только приедешь на станцию, сразу отправь мне сообщение.",
          uz: "Bekatga yetib borganingda, darhol menga xabar yubor.",
        },
        grammarPoint: {
          ru: "～たら выражает условие «когда это произойдёт». Это самая частая форма для описания того, что нужно сделать сразу после завершения какого-то действия в будущем. <ruby>着<rt>つ</rt></ruby>いたら = «когда прибудешь».",
          uz: "～たら «qachon shunday bo'lsa» degan shartni ifodalaydi. Kelajakda biror harakat tugagandan so'ng darhol nima qilish kerakligini tushuntirish uchun ko'p ishlatiladi. <ruby>着<rt>つ</rt></ruby>いたら = «yetib borganingda».",
        },
      },
    },
    {
      char: "知",
      onyomi: "チ",
      kunyomi: "し.る",
      meanings: {
        ru: "знать",
        uz: "bilmoq",
      },
      words: [
        {
          kanji: "知る",
          kana: "しる",
          mean_ru: "знать",
          mean_uz: "bilmoq",
        },
        {
          kanji: "お知らせ",
          kana: "おしらせ",
          mean_ru: "уведомление, объявление",
          mean_uz: "e'lon, xabar",
        },
        {
          kanji: "知識",
          kana: "ちしき",
          mean_ru: "знания",
          mean_uz: "bilim",
        },
      ],
      sentence: {
        jp: "その話は、山田さんから聞いて初めて知りました。",
        rubyData: [
          { text: "その" },
          { kanji: "話", reading: "はなし" },
          { text: "は、" },
          { kanji: "山田", reading: "やまだ" },
          { text: "さんから" },
          { kanji: "聞", reading: "き" },
          { text: "いて" },
          { kanji: "初", reading: "はじ" },
          { text: "めて" },
          { kanji: "知", reading: "し" },
          { text: "りました。" },
        ],
        translation: {
          ru: "Эту историю я узнал впервые только когда услышал от Ямады.",
          uz: "Bu gapni Yamada-sandan eshitib birinchi marta bildim.",
        },
        grammarPoint: {
          ru: "Форма ～て初めて (услышав, впервые...) подчеркивает, что до этого момента вы ничего не знали или не осознавали. <ruby>聞<rt>き</rt></ruby>いて<ruby>初<rt>はじ</rt></ruby>めて<ruby>知<rt>し</rt></ruby>りました = «узнал только когда услышал».",
          uz: "～て初めて (qilib, birinchi marta...) shakli shu paytgacha hech narsani bilmagan yoki anglamaganligingizni ta'kidlaydi. <ruby>聞<rt>き</rt></ruby>いて<ruby>初<rt>はじ</rt></ruby>めて<ruby>知<rt>し</rt></ruby>りました = «eshitganimda birinchi bor bildim».",
        },
      },
    },
    {
      char: "研",
      onyomi: "ケン",
      kunyomi: "と.ぐ",
      meanings: {
        ru: "точить, исследовать",
        uz: "charxlamoq, tadqiq qilmoq",
      },
      words: [
        {
          kanji: "研究",
          kana: "けんきゅう",
          mean_ru: "исследование",
          mean_uz: "tadqiqot",
        },
        {
          kanji: "研修",
          kana: "けんしゅう",
          mean_ru: "стажировка, обучение",
          mean_uz: "malaka oshirish, o'quv",
        },
        {
          kanji: "研究室",
          kana: "けんきゅうしつ",
          mean_ru: "лаборатория, кабинет",
          mean_uz: "laboratoriya, xona",
        },
      ],
      sentence: {
        jp: "来月から新しいシステムについての研修が始まります。",
        rubyData: [
          { kanji: "来月", reading: "らいげつ" },
          { text: "から" },
          { kanji: "新", reading: "あたら" },
          { text: "しいシステムについての" },
          { kanji: "研修", reading: "けんしゅう" },
          { text: "が" },
          { kanji: "始", reading: "はじ" },
          { text: "まります。" },
        ],
        translation: {
          ru: "Со следующего месяца начинается обучение по новой системе.",
          uz: "Kelasi oydan yangi tizim haqidagi o'quv (malaka oshirish) boshlanadi.",
        },
        grammarPoint: {
          ru: "～についての — это способ соединить тему с существительным («о чём-то»). Часто используется в рабочей и учебной среде. システムについての<ruby>研修<rt>けんしゅう</rt></ruby> = «обучение касательно системы».",
          uz: "～についての — mavzuni ot bilan bog'lash usuli («nima haqida»). Ko'pincha ish va o'quv muhitida ishlatiladi. システムについての<ruby>研修<rt>けんしゅう</rt></ruby> = «tizim haqidagi malaka oshirish».",
        },
      },
    },
    {
      char: "社",
      onyomi: "シャ",
      kunyomi: "やしろ",
      meanings: {
        ru: "компания, святилище",
        uz: "kompaniya, ziyoratgoh",
      },
      words: [
        {
          kanji: "会社",
          kana: "かいしゃ",
          mean_ru: "компания",
          mean_uz: "kompaniya",
        },
        {
          kanji: "社会",
          kana: "しゃかい",
          mean_ru: "общество",
          mean_uz: "jamiyat",
        },
        {
          kanji: "神社",
          kana: "じんじゃ",
          mean_ru: "синтоистский храм",
          mean_uz: "sinto ibodatxonasi",
        },
      ],
      sentence: {
        jp: "会社の帰りに、スーパーに寄っていくつもりです。",
        rubyData: [
          { kanji: "会社", reading: "かいしゃ" },
          { text: "の" },
          { kanji: "帰", reading: "かえ" },
          { text: "りに、スーパーに" },
          { kanji: "寄", reading: "よ" },
          { text: "っていくつもりです。" },
        ],
        translation: {
          ru: "По пути с работы я планирую зайти в супермаркет.",
          uz: "Ishdan qaytishda supermarketga kirib o'tmoqchiman.",
        },
        grammarPoint: {
          ru: "～帰りに означает «по пути обратно», а ～つもりです выражает осознанное намерение. Это стандартная фраза для описания своих планов на вечер. <ruby>寄<rt>よ</rt></ruby>っていくつもり = «намереваюсь зайти по пути».",
          uz: "～帰りに «qaytishda / yo'l-yo'lakay» degan ma'noni, ～つもりです esa ongli niyatni ifodalaydi. Bu kechki rejalarni tasvirlash uchun standart iboradir. <ruby>寄<rt>よ</rt></ruby>っていくつもり = «kirib o'tishni maqsad qilganman».",
        },
      },
    },
    {
      char: "私",
      onyomi: "シ",
      kunyomi: "わたし, わたくし",
      meanings: {
        ru: "я, частный",
        uz: "men, shaxsiy",
      },
      words: [
        {
          kanji: "私",
          kana: "わたし",
          mean_ru: "я",
          mean_uz: "men",
        },
        {
          kanji: "私服",
          kana: "しふく",
          mean_ru: "повседневная одежда",
          mean_uz: "shaxsiy kiyim",
        },
        {
          kanji: "私生活",
          kana: "しせいかつ",
          mean_ru: "личная жизнь",
          mean_uz: "shaxsiy hayot",
        },
      ],
      sentence: {
        jp: "私は週末、家でゴロゴロしていることが多いです。",
        rubyData: [
          { kanji: "私", reading: "わたし" },
          { text: "は" },
          { kanji: "週末", reading: "しゅうまつ" },
          { text: "、" },
          { kanji: "家", reading: "いえ" },
          { text: "でゴロゴロしていることが" },
          { kanji: "多", reading: "おお" },
          { text: "いです。" },
        ],
        translation: {
          ru: "По выходным я часто просто валяюсь дома без дела.",
          uz: "Dam olish kunlarida uyda bekorchilik qilib yotib vaqt o'tkazishim ko'p uchraydi.",
        },
        grammarPoint: {
          ru: "～ことが多い показывает, что какая-то ситуация происходит довольно часто. Это отличный способ рассказать о привычках, не говоря скучное «всегда». していることが<ruby>多<rt>おお</rt></ruby>い = «часто так делаю».",
          uz: "～ことが多い qandaydir holat tez-tez sodir bo'lib turishini ko'rsatadi. Bu bo'sh vaqtdagi odatlar haqida qiziqarliroq aytib berishning usulidir. していることが<ruby>多<rt>おお</rt></ruby>い = «shunday qilishim ko'p uchraydi».",
        },
      },
    },
    {
      char: "秋",
      onyomi: "シュウ",
      kunyomi: "あき",
      meanings: {
        ru: "осень",
        uz: "kuz",
      },
      words: [
        {
          kanji: "秋",
          kana: "あき",
          mean_ru: "осень",
          mean_uz: "kuz",
        },
        {
          kanji: "秋冬",
          kana: "あきふゆ",
          mean_ru: "осень и зима",
          mean_uz: "kuz va qish",
        },
        {
          kanji: "秋休み",
          kana: "あきやすみ",
          mean_ru: "осенние каникулы",
          mean_uz: "kuzgi ta'til",
        },
      ],
      sentence: {
        jp: "秋になると、葉の色が変わって景色がきれいです。",
        rubyData: [
          { kanji: "秋", reading: "あき" },
          { text: "になると、" },
          { kanji: "葉", reading: "は" },
          { text: "の" },
          { kanji: "色", reading: "いろ" },
          { text: "が" },
          { kanji: "変", reading: "か" },
          { text: "わって" },
          { kanji: "景色", reading: "けしき" },
          { text: "がきれいです。" },
        ],
        translation: {
          ru: "Когда наступает осень, цвет листьев меняется и пейзаж становится красивым.",
          uz: "Kuz kelishi bilan, barglarning rangi o'zgarib manzara chiroyli bo'ladi.",
        },
        grammarPoint: {
          ru: "Условие ～と используется для естественных последствий: если происходит А, неизбежно наступает Б. Это идеальная грамматика для описания законов природы. <ruby>秋<rt>あき</rt></ruby>になると = «с наступлением осени».",
          uz: "～と sharti tabiiy oqibatlar uchun ishlatiladi: agar A sodir bo'lsa, albatta B ham bo'ladi. Bu tabiat qonunlari yoki odatlarni tasvirlash uchun ideal. <ruby>秋<rt>あき</rt></ruby>になると = «kuz kelishi bilan».",
        },
      },
    },
    {
      char: "究",
      onyomi: "キュウ",
      kunyomi: "きわ.める",
      meanings: {
        ru: "исследовать, изучать",
        uz: "tadqiqot, o'rganmoq",
      },
      words: [
        {
          kanji: "研究",
          kana: "けんきゅう",
          mean_ru: "исследование",
          mean_uz: "tadqiqot",
        },
        {
          kanji: "探究",
          kana: "たんきゅう",
          mean_ru: "поиск, исследование",
          mean_uz: "chuqur izlanish",
        },
        {
          kanji: "研究者",
          kana: "けんきゅうしゃ",
          mean_ru: "исследователь",
          mean_uz: "tadqiqotchi",
        },
      ],
      sentence: {
        jp: "大学を卒業したら、日本の文化について研究したいです。",
        rubyData: [
          { kanji: "大学", reading: "だいがく" },
          { text: "を" },
          { kanji: "卒業", reading: "そつぎょう" },
          { text: "したら、" },
          { kanji: "日本", reading: "にほん" },
          { text: "の" },
          { kanji: "文化", reading: "ぶんか" },
          { text: "について" },
          { kanji: "研究", reading: "けんきゅう" },
          { text: "したいです。" },
        ],
        translation: {
          ru: "После окончания университета я хочу исследовать японскую культуру.",
          uz: "Universitetni bitirgach, yapon madaniyatini tadqiq qilmoqchiman.",
        },
        grammarPoint: {
          ru: "～たら указывает на действие, которое произойдет после завершения другого. А ～たい выражает ваше личное желание на будущее. <ruby>卒業<rt>そつぎょう</rt></ruby>したら = «после того как выпущусь».",
          uz: "～たら boshqa bir harakat tugagandan keyin sodir bo'ladigan holatni ko'rsatadi. ～たい esa kelajakdagi shaxsiy xohishni bildiradi. <ruby>卒業<rt>そつぎょう</rt></ruby>したら = «bitirganimdan keyin».",
        },
      },
    },
    {
      char: "空",
      onyomi: "クウ",
      kunyomi: "そら, あ.く, から",
      meanings: {
        ru: "небо, пустой",
        uz: "osmon, bo'sh",
      },
      words: [
        {
          kanji: "空",
          kana: "そら",
          mean_ru: "небо",
          mean_uz: "osmon",
        },
        {
          kanji: "空気",
          kana: "くうき",
          mean_ru: "воздух",
          mean_uz: "havo, muhit",
        },
        {
          kanji: "空く",
          kana: "あく",
          mean_ru: "быть пустым",
          mean_uz: "bo'shamoq",
        },
      ],
      sentence: {
        jp: "席が空いているので、荷物を置いてもいいですよ。",
        rubyData: [
          { kanji: "席", reading: "せき" },
          { text: "が" },
          { kanji: "空", reading: "あ" },
          { text: "いているので、" },
          { kanji: "荷物", reading: "にもつ" },
          { text: "を" },
          { kanji: "置", reading: "お" },
          { text: "いてもいいですよ。" },
        ],
        translation: {
          ru: "Место свободно, так что можете положить туда свои вещи.",
          uz: "Joy bo'sh, shuning uchun yumingizni qo'ysangiz ham bo'ladi.",
        },
        grammarPoint: {
          ru: "～てもいいです — это разрешение сделать что-либо. Вы используете эту конструкцию, чтобы предложить человеку комфортное решение. <ruby>置<rt>お</rt></ruby>いてもいい = «можете положить (разрешаю/предлагаю)».",
          uz: "～てもいいです — biror ishni qilishga ruxsat berish yoki ijozat shakli. Siz insonga qulaylik yaratish maqsadida bu qurilmadan foydalanasiz. <ruby>置<rt>お</rt></ruby>いてもいい = «qo'ysangiz ham bo'ladi».",
        },
      },
    },
    {
      char: "立",
      onyomi: "リツ, リュウ",
      kunyomi: "た.つ, た.てる",
      meanings: {
        ru: "стоять",
        uz: "turmoq",
      },
      words: [
        {
          kanji: "立つ",
          kana: "たつ",
          mean_ru: "стоять",
          mean_uz: "turmoq",
        },
        {
          kanji: "役に立つ",
          kana: "やくにたつ",
          mean_ru: "быть полезным",
          mean_uz: "foydali bo'lmoq",
        },
        {
          kanji: "国立",
          kana: "こくりつ",
          mean_ru: "национальный, государственный",
          mean_uz: "davlatga qarashli",
        },
      ],
      sentence: {
        jp: "この本は、日本の歴史を勉強するのに役立ちます。",
        rubyData: [
          { text: "この" },
          { kanji: "本", reading: "ほん" },
          { text: "は、" },
          { kanji: "日本", reading: "にほん" },
          { text: "の" },
          { kanji: "歴史", reading: "れきし" },
          { text: "を" },
          { kanji: "勉強", reading: "べんきょう" },
          { text: "するのに" },
          { kanji: "役立", reading: "やくだ" },
          { text: "ちます。" },
        ],
        translation: {
          ru: "Эта книга полезна для изучения истории Японии.",
          uz: "Bu kitob Yaponiya tarixini o'rganish uchun foydalidir.",
        },
        grammarPoint: {
          ru: "Конструкция ～のに (в связке с глаголами полезности/траты) переводится как «для того, чтобы». Это отличный способ порекомендовать инструмент или вещь. 勉強するのに<ruby>役立<rt>やくだ</rt></ruby>ちます = «полезно для изучения».",
          uz: "～のに (foydali bo'lish/sarflash fe'llari bilan) «uchun / maqsadida» deb tarjima qilinadi. Biror narsani tavsiya qilishning ajoyib usuli. 勉強するのに<ruby>役立<rt>やくだ</rt></ruby>ちます = «o'rganish maqsadida foydali».",
        },
      },
    },
    {
      char: "答",
      onyomi: "トウ",
      kunyomi: "こた.える, こた.え",
      meanings: {
        ru: "отвечать",
        uz: "javob bermoq",
      },
      words: [
        {
          kanji: "答える",
          kana: "こたえる",
          mean_ru: "отвечать",
          mean_uz: "javob bermoq",
        },
        {
          kanji: "答え",
          kana: "こたえ",
          mean_ru: "ответ",
          mean_uz: "javob",
        },
        {
          kanji: "解答",
          kana: "かいとう",
          mean_ru: "ответ (на задачу)",
          mean_uz: "javob (test, masalaga)",
        },
      ],
      sentence: {
        jp: "先生の質問にどう答えたらいいか分かりません。",
        rubyData: [
          { kanji: "先生", reading: "せんせい" },
          { text: "の" },
          { kanji: "質問", reading: "しつもん" },
          { text: "にどう" },
          { kanji: "答", reading: "こた" },
          { text: "えたらいいか" },
          { kanji: "分", reading: "わ" },
          { text: "かりません。" },
        ],
        translation: {
          ru: "Я не знаю, как лучше ответить на вопрос учителя.",
          uz: "O'qituvchining savoliga qanday javob bersam yaxshi bo'lishini bilmayman.",
        },
        grammarPoint: {
          ru: "～たらいいか означает «как/что мне лучше сделать?». Эта форма встроена в предложение для выражения растерянности или поиска правильного решения. どう<ruby>答<rt>こた</rt></ruby>えたらいいか = «как лучше ответить».",
          uz: "～たらいいか «qanday/nima qilsam yaxshi bo'ladi?» degan ma'noni anglatadi. Bu shakl ikkilanishni yoki to'g'ri yechim qidirishni ifodalaydi. どう<ruby>答<rt>こた</rt></ruby>えたらいいか = «qanday javob qaytarsam yaxshi bo'larkin».",
        },
      },
    },
  {
      char: "紙",
      onyomi: "シ",
      kunyomi: "かみ",
      meanings: {
        ru: "бумага",
        uz: "qog'oz",
      },
      words: [
        {
          kanji: "紙",
          kana: "かみ",
          mean_ru: "бумага",
          mean_uz: "qog'oz",
        },
        {
          kanji: "手紙",
          kana: "てがみ",
          mean_ru: "письмо",
          mean_uz: "xat",
        },
        {
          kanji: "コピー用紙",
          kana: "コピーようし",
          mean_ru: "бумага для принтера",
          mean_uz: "printer qog'ozi",
        },
      ],
      sentence: {
        jp: "会議で使うので、この資料をコピー用紙に印刷しておいてくれませんか。",
        rubyData: [
          { kanji: "会議", reading: "かいぎ" },
          { text: "で" },
          { kanji: "使", reading: "つか" },
          { text: "うので、この" },
          { kanji: "資料", reading: "しりょう" },
          { text: "をコピー" },
          { kanji: "用紙", reading: "ようし" },
          { text: "に" },
          { kanji: "印刷", reading: "いんさつ" },
          { text: "しておいてくれませんか。" },
        ],
        translation: {
          ru: "Мы будем использовать это на собрании, поэтому не могли бы вы заранее распечатать эти материалы на бумаге?",
          uz: "Majlisda foydalanishimiz sababli, bu materiallarni oldindan printer qog'oziga chiqarib qo'ya olmaysizmi?",
        },
        grammarPoint: {
          ru: "～ておく показывает действие, выполняемое заранее (подготовка к будущему). В сочетании с просьбой (～てくれませんか) это стандартный способ поручить задачу в офисе. <ruby>印刷<rt>いんさつ</rt></ruby>しておいて = «распечатайте заранее (чтобы было готово)».",
          uz: "～ておく kelajak uchun oldindan bajariladigan harakatni (tayyorgarlikni) ko'rsatadi. Iltimos shakli (～てくれませんか) bilan birgalikda bu ofisda vazifa topshirishning odatiy usulidir. <ruby>印刷<rt>いんさつ</rt></ruby>しておいて = «oldindan chop etib qo'ying».",
        },
      },
    },
    {
      char: "終",
      onyomi: "シュウ",
      kunyomi: "お.わる, お.える",
      meanings: {
        ru: "конец, заканчиваться",
        uz: "oxiri, tugamoq",
      },
      words: [
        {
          kanji: "終わる",
          kana: "おわる",
          mean_ru: "заканчиваться",
          mean_uz: "tugamoq",
        },
        {
          kanji: "終わり",
          kana: "おわり",
          mean_ru: "конец",
          mean_uz: "oxiri",
        },
        {
          kanji: "終電",
          kana: "しゅうでん",
          mean_ru: "последняя электричка",
          mean_uz: "oxirgi poyezd",
        },
      ],
      sentence: {
        jp: "残業が長引いて、終電に間に合わなくなってしまいました。",
        rubyData: [
          { kanji: "残業", reading: "ざんぎょう" },
          { text: "が" },
          { kanji: "長引", reading: "ながび" },
          { text: "いて、" },
          { kanji: "終電", reading: "しゅうでん" },
          { text: "に" },
          { kanji: "間", reading: "ま" },
          { text: "に" },
          { kanji: "合", reading: "あ" },
          { text: "わなくなってしまいました。" },
        ],
        translation: {
          ru: "Сверхурочная работа затянулась, и я, к сожалению, опоздал на последнюю электричку.",
          uz: "Qo'shimcha ish cho'zilib ketdi va afsuski, oxirgi poyezdga ulgurmay qoldim.",
        },
        grammarPoint: {
          ru: "～てしまう передаёт чувство досады или сожаления о том, что произошло что-то нежелательное. Это частая форма в рассказах о неудачах. <ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わなくなってしまった = «к сожалению, больше не смог успеть».",
          uz: "～てしまう istalmagan voqea yuz berganidan afsuslanish hissini bildiradi. Xatolar va muammolar haqida gapirganda ko'p ishlatiladi. <ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わなくなってしまった = «ming afsuski, ulgura olmadim».",
        },
      },
    },
    {
      char: "習",
      onyomi: "シュウ",
      kunyomi: "なら.う",
      meanings: {
        ru: "учить, привыкать",
        uz: "o'rganmoq, odatlanmoq",
      },
      words: [
        {
          kanji: "習う",
          kana: "ならう",
          mean_ru: "учиться (у кого-то)",
          mean_uz: "o'rganmoq (birovdan)",
        },
        {
          kanji: "練習",
          kana: "れんしゅう",
          mean_ru: "практика, тренировка",
          mean_uz: "mashq qilish",
        },
        {
          kanji: "復習",
          kana: "ふくしゅう",
          mean_ru: "повторение",
          mean_uz: "takrorlash",
        },
      ],
      sentence: {
        jp: "ピアノを習い始めたんですが、まだ全然うまく弾けません。",
        rubyData: [
          { text: "ピアノを" },
          { kanji: "習", reading: "なら" },
          { text: "い" },
          { kanji: "始", reading: "はじ" },
          { text: "めたんですが、まだ" },
          { kanji: "全然", reading: "ぜんぜん" },
          { text: "うまく" },
          { kanji: "弾", reading: "ひ" },
          { text: "けません。" },
        ],
        translation: {
          ru: "Я начал учиться играть на пианино, но пока совсем не умею.",
          uz: "Pianino chalishni o'rganishni boshladim-u, lekin hali umuman yaxshi chala olmayman.",
        },
        grammarPoint: {
          ru: "Основа глагола + 始める означает старт продолжительного действия («начал учиться»). Окончание ～んですが работает как мягкое вступление-контраст: «я начал, но...».",
          uz: "Fe'l o'zagi + 始める davomli harakatning boshlanishini bildiradi («o'rganishni boshladim»). ～んですが qo'shimchasi esa yumshoq kirish va zidlash vazifasini bajaradi: «boshladim-u, lekin...».",
        },
      },
    },
    {
      char: "考",
      onyomi: "コウ",
      kunyomi: "かんが.える",
      meanings: {
        ru: "думать, размышлять",
        uz: "o'ylamoq, fikr yuritmoq",
      },
      words: [
        {
          kanji: "考える",
          kana: "かんがえる",
          mean_ru: "размышлять, обдумывать",
          mean_uz: "o'ylamoq",
        },
        {
          kanji: "考え",
          kana: "かんがえ",
          mean_ru: "мысль, идея",
          mean_uz: "fikr, g'oya",
        },
        {
          kanji: "参考",
          kana: "さんこう",
          mean_ru: "справка, ссылка",
          mean_uz: "ma'lumot, manba",
        },
      ],
      sentence: {
        jp: "どちらのパソコンを買うか、もう少し考えてから決めようと思います。",
        rubyData: [
          { text: "どちらのパソコンを" },
          { kanji: "買", reading: "か" },
          { text: "うか、もう" },
          { kanji: "少", reading: "すこ" },
          { text: "し" },
          { kanji: "考", reading: "かんが" },
          { text: "えてから" },
          { kanji: "決", reading: "き" },
          { text: "めようと" },
          { kanji: "思", reading: "おも" },
          { text: "います。" },
        ],
        translation: {
          ru: "Я ещё немного подумаю, а затем решу, какой компьютер купить.",
          uz: "Qaysi kompyuterni sotib olishni yana biroz o'ylab ko'rib, keyin hal qilmoqchiman.",
        },
        grammarPoint: {
          ru: "Форма ～てから означает строгую последовательность: «сначала сделаю А, а только потом Б». Это логический шаг, который часто используется при принятии решений.",
          uz: "～てから shakli qat'iy ketma-ketlikni bildiradi: «avval A ni qilib, keyingina B ni qilaman». Bu qaror qabul qilishda ko'p ishlatiladigan mantiqiy qadamdir.",
        },
      },
    },
    {
      char: "者",
      onyomi: "シャ",
      kunyomi: "もの",
      meanings: {
        ru: "человек, лицо",
        uz: "shaxs, kishi",
      },
      words: [
        {
          kanji: "医者",
          kana: "いしゃ",
          mean_ru: "врач",
          mean_uz: "shifokor",
        },
        {
          kanji: "若者",
          kana: "わかもの",
          mean_ru: "молодежь",
          mean_uz: "yoshlar",
        },
        {
          kanji: "担当者",
          kana: "たんとうしゃ",
          mean_ru: "ответственное лицо",
          mean_uz: "mas'ul xodim",
        },
      ],
      sentence: {
        jp: "詳しいことについては、後で担当者から連絡させます。",
        rubyData: [
          { kanji: "詳", reading: "くわ" },
          { text: "しいことについては、" },
          { kanji: "後", reading: "あと" },
          { text: "で" },
          { kanji: "担当者", reading: "たんとうしゃ" },
          { text: "から" },
          { kanji: "連絡", reading: "れんらく" },
          { text: "させます。" },
        ],
        translation: {
          ru: "Что касается деталей, я распоряжусь, чтобы ответственный сотрудник связался с вами позже.",
          uz: "Tafsilotlar bo'yicha keyinroq mas'ul xodimimiz siz bilan bog'lanishini ta'minlayman.",
        },
        grammarPoint: {
          ru: "～させる — каузативная (побудительная) форма. В деловой речи она часто означает, что вы поручите своему подчинённому выполнить действие. <ruby>連絡<rt>れんらく</rt></ruby>させます = «сделаю так, чтобы он связался».",
          uz: "～させる — majbur qilish/qildirmoq shakli. Biznes muloqotda u rahbarning o'z xodimiga biror ishni bajarishni buyurishini anglatadi. <ruby>連絡<rt>れんらく</rt></ruby>させます = «aloqaga chiqishini ta'minlayman».",
        },
      },
    },
    {
      char: "肉",
      onyomi: "ニク",
      kunyomi: "-",
      meanings: {
        ru: "мясо",
        uz: "go'sht",
      },
      words: [
        {
          kanji: "肉",
          kana: "にく",
          mean_ru: "мясо",
          mean_uz: "go'sht",
        },
        {
          kanji: "牛肉",
          kana: "ぎゅうにく",
          mean_ru: "говядина",
          mean_uz: "mol go'shti",
        },
        {
          kanji: "豚肉",
          kana: "ぶたにく",
          mean_ru: "свинина",
          mean_uz: "cho'chqa go'shti",
        },
      ],
      sentence: {
        jp: "最近、健康のために肉より魚を食べるようにしています。",
        rubyData: [
          { kanji: "最近", reading: "さいきん" },
          { text: "、" },
          { kanji: "健康", reading: "けんこう" },
          { text: "のために" },
          { kanji: "肉", reading: "にく" },
          { text: "より" },
          { kanji: "魚", reading: "さかな" },
          { text: "を" },
          { kanji: "食", reading: "た" },
          { text: "べるようにしています。" },
        ],
        translation: {
          ru: "В последнее время ради здоровья я стараюсь есть рыбу вместо мяса.",
          uz: "So'nggi paytlarda sog'lig'im uchun go'shtdan ko'ra ko'proq baliq yeyishga harakat qilyapman.",
        },
        grammarPoint: {
          ru: "～ようにしている показывает осознанное усилие и привычку, которую человек старается поддерживать регулярно. Это образ жизни, а не одноразовое действие.",
          uz: "～ようにしている inson doimiy ravishda qo'llab-quvvatlashga urinadigan ongli harakat va odatni ko'rsatadi. Bu bir martalik harakat emas, balki turmush tarzidir.",
        },
      },
    },
    {
      char: "自",
      onyomi: "ジ, シ",
      kunyomi: "みずか.ら",
      meanings: {
        ru: "сам",
        uz: "o'zi",
      },
      words: [
        {
          kanji: "自分",
          kana: "じぶん",
          mean_ru: "сам, лично",
          mean_uz: "o'zi",
        },
        {
          kanji: "自動車",
          kana: "じどうしゃ",
          mean_ru: "автомобиль",
          mean_uz: "avtomobil",
        },
        {
          kanji: "自由",
          kana: "じゆう",
          mean_ru: "свобода",
          mean_uz: "erkinlik",
        },
      ],
      sentence: {
        jp: "自分の意見を自由に言える職場は働きやすいです。",
        rubyData: [
          { kanji: "自分", reading: "じぶん" },
          { text: "の" },
          { kanji: "意見", reading: "いけん" },
          { text: "を" },
          { kanji: "自由", reading: "じゆう" },
          { text: "に" },
          { kanji: "言", reading: "い" },
          { text: "える" },
          { kanji: "職場", reading: "しょくば" },
          { text: "は" },
          { kanji: "働", reading: "はたら" },
          { text: "きやすいです。" },
        ],
        translation: {
          ru: "На работе, где можно свободно высказывать своё мнение, легко и комфортно трудиться.",
          uz: "O'z fikrini erkin ayta oladigan ish joyida ishlash qulaydir.",
        },
        grammarPoint: {
          ru: "Основа глагола + やすい означает «легко, удобно что-то делать». Часто применяется для описания комфортных условий, инструментов или мест. <ruby>働<rt>はたら</rt></ruby>きやすい = «комфортно работать».",
          uz: "Fe'l o'zagi + やすい qurilmasi «biror ishni qilish oson, qulay» degan ma'noni bildiradi. Qulay sharoit va asboblarni tasvirlashda ko'p qo'llanadi. <ruby>働<rt>はたら</rt></ruby>きやすい = «ishlashga qulay».",
        },
      },
    },
    {
      char: "色",
      onyomi: "ショク, シキ",
      kunyomi: "いろ",
      meanings: {
        ru: "цвет",
        uz: "rang",
      },
      words: [
        {
          kanji: "色",
          kana: "いろ",
          mean_ru: "цвет",
          mean_uz: "rang",
        },
        {
          kanji: "景色",
          kana: "けしき",
          mean_ru: "пейзаж",
          mean_uz: "manzara",
        },
        {
          kanji: "色々",
          kana: "いろいろ",
          mean_ru: "различный, разный",
          mean_uz: "turli xil",
        },
      ],
      sentence: {
        jp: "この服はデザインはいいけど、色が少し派手すぎるかもしれません。",
        rubyData: [
          { text: "この" },
          { kanji: "服", reading: "ふく" },
          { text: "はデザインはいいけど、" },
          { kanji: "色", reading: "いろ" },
          { text: "が" },
          { kanji: "少", reading: "すこ" },
          { text: "し" },
          { kanji: "派手", reading: "はで" },
          { text: "すぎるかもしれません。" },
        ],
        translation: {
          ru: "У этой одежды хороший дизайн, но цвет, возможно, немного чересчур яркий.",
          uz: "Bu kiyimning dizayni yaxshi, lekin rangi biroz o'ta yorqinroq bo'lishi mumkin.",
        },
        grammarPoint: {
          ru: "～すぎる указывает на чрезмерность свойства (слишком яркий), а ～かもしれない смягчает высказывание («возможно»), чтобы критика не звучала слишком резко.",
          uz: "～すぎる xususiyatning me'yordan ortiqligini (juda yorqin), ～かもしれない esa tanqid keskin eshitilmasligi uchun fikrni yumshatishni («balki») bildiradi.",
        },
      },
    },
    {
      char: "花",
      onyomi: "カ",
      kunyomi: "はな",
      meanings: {
        ru: "цветок",
        uz: "gul",
      },
      words: [
        {
          kanji: "花",
          kana: "はな",
          mean_ru: "цветок",
          mean_uz: "gul",
        },
        {
          kanji: "花見",
          kana: "はなみ",
          mean_ru: "любование сакурой",
          mean_uz: "gullarni tomosha qilish",
        },
        {
          kanji: "花火",
          kana: "はなび",
          mean_ru: "фейерверк",
          mean_uz: "mushakbozlik",
        },
      ],
      sentence: {
        jp: "週末は天気が良さそうなので、友達とお花見に行こうと思っています。",
        rubyData: [
          { kanji: "週末", reading: "しゅうまつ" },
          { text: "は" },
          { kanji: "天気", reading: "てんき" },
          { text: "が" },
          { kanji: "良", reading: "よ" },
          { text: "さそうなので、" },
          { kanji: "友達", reading: "ともだち" },
          { text: "とお" },
          { kanji: "花見", reading: "はなみ" },
          { text: "に" },
          { kanji: "行", reading: "い" },
          { text: "こうと" },
          { kanji: "思", reading: "おも" },
          { text: "っています。" },
        ],
        translation: {
          ru: "Кажется, на выходных будет хорошая погода, поэтому я думаю пойти с друзьями любоваться сакурой.",
          uz: "Dam olish kunlarida ob-havo yaxshi bo'ladiganga o'xshaydi, shuning uchun do'stlarim bilan hanamiga borishni rejalashtiryapman.",
        },
        grammarPoint: {
          ru: "～そう («кажется») выражает визуальную догадку, а ～ようと思っている — намерение, которое человек уже обдумывает какое-то время, а не спонтанное решение.",
          uz: "～そう («o'xshaydi») vizual taxminni, ～ようと思っている esa aynan shu soniyadagi o'z-o'zidan qaror emas, balki biror vaqtdan beri o'ylab kelinayotgan niyatni bildiradi.",
        },
      },
    },
    {
      char: "英",
      onyomi: "エイ",
      kunyomi: "-",
      meanings: {
        ru: "Англия, выдающийся",
        uz: "Angliya, buyuk",
      },
      words: [
        {
          kanji: "英語",
          kana: "えいご",
          mean_ru: "английский язык",
          mean_uz: "ingliz tili",
        },
        {
          kanji: "英会話",
          kana: "えいかいわ",
          mean_ru: "разговорный английский",
          mean_uz: "so'zlashuv ingliz tili",
        },
        {
          kanji: "英国",
          kana: "えいこく",
          mean_ru: "Великобритания",
          mean_uz: "Buyuk Britaniya",
        },
      ],
      sentence: {
        jp: "将来海外で働きたいので、英会話のスクールに通い始めました。",
        rubyData: [
          { kanji: "将来海外", reading: "しょうらいかいがい" },
          { text: "で" },
          { kanji: "働", reading: "はたら" },
          { text: "きたいので、" },
          { kanji: "英会話", reading: "えいかいわ" },
          { text: "のスクールに" },
          { kanji: "通", reading: "かよ" },
          { text: "い" },
          { kanji: "始", reading: "はじ" },
          { text: "めました。" },
        ],
        translation: {
          ru: "Поскольку я хочу работать за границей в будущем, я начал посещать школу разговорного английского.",
          uz: "Kelajakda chet elda ishlashni xohlaganim uchun, ingliz tilida so'zlashuv maktabiga qatnashishni boshladim.",
        },
        grammarPoint: {
          ru: "～たいので показывает ваше желание как причину для действий. Основа глагола + 始める означает старт регулярного или долгого процесса.",
          uz: "～たいので xohishingizni harakatlar uchun sabab sifatida ko'rsatadi. Fe'l o'zagi + 始める uzoq muddatli yoki muntazam harakatning boshlanishini bildiradi.",
        },
      },
    },
    {
      char: "茶",
      onyomi: "チャ, サ",
      kunyomi: "-",
      meanings: {
        ru: "чай",
        uz: "choy",
      },
      words: [
        {
          kanji: "お茶",
          kana: "おちゃ",
          mean_ru: "чай",
          mean_uz: "choy",
        },
        {
          kanji: "紅茶",
          kana: "こうちゃ",
          mean_ru: "чёрный чай",
          mean_uz: "qora choy",
        },
        {
          kanji: "喫茶店",
          kana: "きっさてん",
          mean_ru: "кафе, кофейня",
          mean_uz: "qahvaxona",
        },
      ],
      sentence: {
        jp: "電車が来るまで、あそこの喫茶店でお茶でも飲みませんか。",
        rubyData: [
          { kanji: "電車", reading: "でんしゃ" },
          { text: "が" },
          { kanji: "来", reading: "く" },
          { text: "るまで、あそこの" },
          { kanji: "喫茶店", reading: "きっさてん" },
          { text: "でお" },
          { kanji: "茶", reading: "ちゃ" },
          { text: "でも" },
          { kanji: "飲", reading: "の" },
          { text: "みませんか。" },
        ],
        translation: {
          ru: "Пока не придёт поезд, не выпить ли нам чаю или чего-нибудь ещё вон в том кафе?",
          uz: "Poyezd kelguncha, anavi kafeda choy-poy ichib turmaymizmi?",
        },
        grammarPoint: {
          ru: "Частица でも (что-то вроде, например) делает приглашение непринуждённым. ～ませんか — вежливая форма предложения, оставляющая собеседнику возможность отказаться.",
          uz: "でも (-poy, shunga o'xshash) zarrachasi taklifni norasmiy va oson qiladi. ～ませんか — suhbatdoshga rad etish imkonini qoldiradigan xushmuomala taklif shaklidir.",
        },
      },
    },
    {
      char: "親",
      onyomi: "シン",
      kunyomi: "おや, した.しい",
      meanings: {
        ru: "родитель, близкий",
        uz: "ota-ona, yaqin",
      },
      words: [
        {
          kanji: "親",
          kana: "おや",
          mean_ru: "родитель",
          mean_uz: "ota-ona",
        },
        {
          kanji: "両親",
          kana: "りょうしん",
          mean_ru: "оба родителя",
          mean_uz: "ota-ona (ikkalasi)",
        },
        {
          kanji: "親切",
          kana: "しんせつ",
          mean_ru: "добрый, отзывчивый",
          mean_uz: "mehribon, yordamga tayyor",
        },
      ],
      sentence: {
        jp: "いつも親切にしてくれる近所の人に、旅行のお土産を渡しました。",
        rubyData: [
          { text: "いつも" },
          { kanji: "親切", reading: "しんせつ" },
          { text: "にしてくれる" },
          { kanji: "近所", reading: "きんじょ" },
          { text: "の" },
          { kanji: "人", reading: "ひと" },
          { text: "に、" },
          { kanji: "旅行", reading: "りょこう" },
          { text: "のお" },
          { kanji: "土産", reading: "みやげ" },
          { text: "を" },
          { kanji: "渡", reading: "わた" },
          { text: "しました。" },
        ],
        translation: {
          ru: "Я передал сувениры из поездки соседям, которые всегда ко мне добры.",
          uz: "Menga doim mehribonlik qiladigan qo'shnilarimga sayohatdan keltirilgan sovg'alarni berdim.",
        },
        grammarPoint: {
          ru: "～てくれる показывает, что кто-то делает добро для нас. Это выражение благодарности. Вся фраза «всегда добрые ко мне» выступает определением к существительному «соседи».",
          uz: "～てくれる kimgadir nisbatan yaxshilik qilishni bildiradi. Bu minnatdorchilik ifodasidir. «Menga doim mehribon bo'lgan» butun iborasi «qo'shnilar» otiga aniqlovchi bo'lib keladi.",
        },
      },
    },
    {
      char: "言",
      onyomi: "ゲン, ゴン",
      kunyomi: "い.う, こと",
      meanings: {
        ru: "слово, говорить",
        uz: "so'z, aytmoq",
      },
      words: [
        {
          kanji: "言う",
          kana: "いう",
          mean_ru: "говорить",
          mean_uz: "aytmoq",
        },
        {
          kanji: "言葉",
          kana: "ことば",
          mean_ru: "слово, язык",
          mean_uz: "so'z, til",
        },
        {
          kanji: "伝言",
          kana: "でんごん",
          mean_ru: "сообщение (устное)",
          mean_uz: "xabar (birov orqali)",
        },
      ],
      sentence: {
        jp: "田中さんが戻ったら、私に電話するように伝言をお願いできますか。",
        rubyData: [
          { kanji: "田中", reading: "たなか" },
          { text: "さんが" },
          { kanji: "戻", reading: "もど" },
          { text: "ったら、" },
          { kanji: "私", reading: "わたし" },
          { text: "に" },
          { kanji: "電話", reading: "でんわ" },
          { text: "するように" },
          { kanji: "伝言", reading: "でんごん" },
          { text: "をお" },
          { kanji: "願", reading: "ねが" },
          { text: "いできますか。" },
        ],
        translation: {
          ru: "Когда Танака-сан вернётся, не могли бы вы передать ему, чтобы он мне позвонил?",
          uz: "Tanaka-san qaytib kelganida, menga qo'ng'iroq qilishi uchun xabar qoldira olasizmi?",
        },
        grammarPoint: {
          ru: "～ように используется для передачи косвенной просьбы или приказа третьему лицу. Это вежливый и естественный деловой стандарт.",
          uz: "～ように bilvosita iltimos yoki buyruqni uchinchi shaxsga yetkazish uchun ishlatiladi. Bu xushmuomala va tabiiy ishbilarmonlik standartidir.",
        },
      },
    },
    {
      char: "計",
      onyomi: "ケイ",
      kunyomi: "はか.る",
      meanings: {
        ru: "план, измерять",
        uz: "reja, o'lchamoq",
      },
      words: [
        {
          kanji: "計画",
          kana: "けいかく",
          mean_ru: "план",
          mean_uz: "reja",
        },
        {
          kanji: "時計",
          kana: "とけい",
          mean_ru: "часы",
          mean_uz: "soat",
        },
        {
          kanji: "計算",
          kana: "けいさん",
          mean_ru: "вычисление",
          mean_uz: "hisob-kitob",
        },
      ],
      sentence: {
        jp: "旅行の計画を立てたのですが、ホテルがまだ予約できていません。",
        rubyData: [
          { kanji: "旅行", reading: "りょこう" },
          { text: "の" },
          { kanji: "計画", reading: "けいかく" },
          { text: "を" },
          { kanji: "立", reading: "た" },
          { text: "てたのですが、ホテルがまだ" },
          { kanji: "予約", reading: "よやく" },
          { text: "できていません。" },
        ],
        translation: {
          ru: "Я составил план поездки, но забронировать отель пока не удалось.",
          uz: "Sayohat rejasini tuzib chiqdim, lekin mehmonxonani hali band qila olmadim.",
        },
        grammarPoint: {
          ru: "～たのですが служит мягким противопоставлением. Конструкция ～できていない (от глагола できる) описывает текущее состояние невыполненной задачи («ещё не смог сделать это»).",
          uz: "～たのですが yumshoq qarama-qarshilikni bildiradi. ～できていない (できる fe'lidan) qurilmasi bajarilmagan vazifaning hozirgi holatini tasvirlaydi («hali qila olmadim»).",
        },
      },
    },
    {
      char: "試",
      onyomi: "シ",
      kunyomi: "ため.す, こころ.みる",
      meanings: {
        ru: "пробовать, испытывать",
        uz: "sinamoq, test",
      },
      words: [
        {
          kanji: "試合",
          kana: "しあい",
          mean_ru: "матч, игра",
          mean_uz: "o'yin, musobaqa",
        },
        {
          kanji: "試験",
          kana: "しけん",
          mean_ru: "экзамен",
          mean_uz: "imtihon",
        },
        {
          kanji: "試す",
          kana: "ためす",
          mean_ru: "пробовать, проверять",
          mean_uz: "sinab ko'rmoq",
        },
      ],
      sentence: {
        jp: "この服のサイズが合うかどうか、一度着てみてもいいですか。",
        rubyData: [
          { text: "この" },
          { kanji: "服", reading: "ふく" },
          { text: "のサイズが" },
          { kanji: "合", reading: "あ" },
          { text: "うかどうか、" },
          { kanji: "一度着", reading: "いちどき" },
          { text: "てみてもいいですか。" },
        ],
        translation: {
          ru: "Можно я разок примерю эту одежду, чтобы проверить, подойдёт ли размер?",
          uz: "Bu kiyimning o'lchami to'g'ri kelish-kelmasligini bilish uchun bir marta kiyib ko'rsam maylimi?",
        },
        grammarPoint: {
          ru: "～かどうか означает «так ли это или нет». Форма ～てみる показывает действие «на пробу» (примерить), а ～てもいいですか — вежливый запрос разрешения в магазине.",
          uz: "～かどうか «shundaymi yoki yo'qmi» ma'nosini bildiradi. ～てみる shakli «sinab ko'rish»ni (kiyib ko'rishni), ～てもいいですか esa do'konda muloyim ruxsat so'rashni bildiradi.",
        },
      },
    },
    {
      char: "買",
      onyomi: "バイ",
      kunyomi: "か.う",
      meanings: {
        ru: "покупать",
        uz: "sotib olmoq",
      },
      words: [
        {
          kanji: "買う",
          kana: "かう",
          mean_ru: "покупать",
          mean_uz: "sotib olmoq",
        },
        {
          kanji: "買い物",
          kana: "かいもの",
          mean_ru: "покупки",
          mean_uz: "xarid",
        },
        {
          kanji: "買い出し",
          kana: "かいだし",
          mean_ru: "закупка продуктов",
          mean_uz: "oziq-ovqat xaridi",
        },
      ],
      sentence: {
        jp: "帰りにスーパーに寄って、牛乳を買ってきてくれない？",
        rubyData: [
          { kanji: "帰", reading: "かえ" },
          { text: "りにスーパーに" },
          { kanji: "寄", reading: "よ" },
          { text: "って、" },
          { kanji: "牛乳", reading: "ぎゅうにゅう" },
          { text: "を" },
          { kanji: "買", reading: "か" },
          { text: "ってきてくれない？" },
        ],
        translation: {
          ru: "Не зайдёшь по пути домой в супермаркет, чтобы купить молока?",
          uz: "Qaytishda supermarketga kirib, sut sotib olib kelmaysanmi?",
        },
        grammarPoint: {
          ru: "～てくる (в форме ～てきて) означает: пойти в другое место, сделать там что-то и вернуться. ～くれない？ — дружеская форма просьбы к близким людям.",
          uz: "～てくる (～てきて shaklida): boshqa joyga borib, u yerda nimanidir bajarib qaytib kelishni anglatadi. ～くれない？ — yaqinlarga nisbatan do'stona iltimos shaklidir.",
        },
      },
    },
    {
      char: "貸",
      onyomi: "タイ",
      kunyomi: "か.す",
      meanings: {
        ru: "давать в долг",
        uz: "qarzga bermoq",
      },
      words: [
        {
          kanji: "貸す",
          kana: "かす",
          mean_ru: "одалживать",
          mean_uz: "qarzga bermoq",
        },
        {
          kanji: "貸し出し",
          kana: "かしだし",
          mean_ru: "выдача (инвентаря)",
          mean_uz: "berib turish (uskuna)",
        },
        {
          kanji: "貸し借り",
          kana: "かしかり",
          mean_ru: "одалживание (давать и брать)",
          mean_uz: "qarz olish va berish",
        },
      ],
      sentence: {
        jp: "すみません、手続きの間にこのペンを貸していただけませんか。",
        rubyData: [
          { text: "すみません、" },
          { kanji: "手続", reading: "てつづ" },
          { text: "きの" },
          { kanji: "間", reading: "あいだ" },
          { text: "にこのペンを" },
          { kanji: "貸", reading: "か" },
          { text: "していただけませんか。" },
        ],
        translation: {
          ru: "Извините, не могли бы вы одолжить мне ручку на время оформления документов?",
          uz: "Kechirasiz, hujjatlarni rasmiylashtirish jarayonida ruchkangizni berib tura olmaysizmi?",
        },
        grammarPoint: {
          ru: "～間に (пока длится процесс) + ～ていただけませんか (очень вежливая просьба). Идеальный шаблон для общения в госучреждениях или банках.",
          uz: "～間に (jarayon davomida) + ～ていただけませんか (juda xushmuomala iltimos). Davlat muassasalari yoki banklarda muloqot qilish uchun ajoyib andoza.",
        },
      },
    },
    {
      char: "質",
      onyomi: "シツ, シチ",
      kunyomi: "たち",
      meanings: {
        ru: "качество, суть",
        uz: "sifat, mohiyat",
      },
      words: [
        {
          kanji: "質問",
          kana: "しつもん",
          mean_ru: "вопрос",
          mean_uz: "savol",
        },
        {
          kanji: "品質",
          kana: "ひんしつ",
          mean_ru: "качество (товара)",
          mean_uz: "mahsulot sifati",
        },
        {
          kanji: "質",
          kana: "しつ",
          mean_ru: "качество",
          mean_uz: "sifat",
        },
      ],
      sentence: {
        jp: "分からないことがあったら、いつでも遠慮なく質問してください。",
        rubyData: [
          { kanji: "分", reading: "わ" },
          { text: "からないことがあったら、いつでも" },
          { kanji: "遠慮", reading: "えんりょ" },
          { text: "なく" },
          { kanji: "質問", reading: "しつもん" },
          { text: "してください。" },
        ],
        translation: {
          ru: "Если будет что-то непонятно, задавайте вопросы в любое время без стеснения.",
          uz: "Agar tushunarsiz narsa bo'lsa, istalgan vaqtda tortinmasdan savol bering.",
        },
        grammarPoint: {
          ru: "Условие ～たら работает как «в случае, если». Выражение <ruby>遠慮<rt>えんりょ</rt></ruby>なく («без стеснения») — частый и очень вежливый маркер открытости к помощи.",
          uz: "～たら sharti «agar ...bo'lsa» kabi ishlaydi. <ruby>遠慮<rt>えんりょ</rt></ruby>なく («uyalmasdan/tortinmasdan») ifodasi yordam berishga ochiqlikni bildiruvchi xushmuomala so'zdir.",
        },
      },
    },
    {
      char: "赤",
      onyomi: "セキ, シャク",
      kunyomi: "あか",
      meanings: {
        ru: "красный",
        uz: "qizil",
      },
      words: [
        {
          kanji: "赤い",
          kana: "あかい",
          mean_ru: "красный",
          mean_uz: "qizil",
        },
        {
          kanji: "赤ちゃん",
          kana: "あかちゃん",
          mean_ru: "младенец",
          mean_uz: "chaqaloq",
        },
        {
          kanji: "赤字",
          kana: "あかじ",
          mean_ru: "дефицит, убыток",
          mean_uz: "zarar, kamomad",
        },
      ],
      sentence: {
        jp: "赤ちゃんが寝ているので、もう少し静かにしてくれませんか。",
        rubyData: [
          { kanji: "赤", reading: "あか" },
          { text: "ちゃんが" },
          { kanji: "寝", reading: "ね" },
          { text: "ているので、もう" },
          { kanji: "少", reading: "すこ" },
          { text: "し" },
          { kanji: "静", reading: "しず" },
          { text: "かにしてくれませんか。" },
        ],
        translation: {
          ru: "Ребёнок спит, не могли бы вы вести себя чуточку потише?",
          uz: "Chaqaloq uxlayotgani uchun, biroz tinchroq bo'la olmaysizmi?",
        },
        grammarPoint: {
          ru: "～ので объясняет объективную причину (звучит мягче, чем から). Глагол する с прилагательными на -на (静かにする) означает «вести себя тихо / создавать тишину».",
          uz: "～ので obyektiv sababni tushuntiradi (から ga qaraganda yumshoqroq). する fe'li -na sifatlari bilan (静かにする) «tinch bo'lish / jimjitlikni saqlash» ma'nosini bildiradi.",
        },
      },
    },
    {
      char: "走",
      onyomi: "ソウ",
      kunyomi: "はし.る",
      meanings: {
        ru: "бежать",
        uz: "yugurmoq",
      },
      words: [
        {
          kanji: "走る",
          kana: "はしる",
          mean_ru: "бежать",
          mean_uz: "yugurmoq",
        },
        {
          kanji: "走り出す",
          kana: "はしりだす",
          mean_ru: "побежать",
          mean_uz: "yugurib ketmoq",
        },
        {
          kanji: "競走",
          kana: "きょうそう",
          mean_ru: "соревнование в беге",
          mean_uz: "yugurish musobaqasi",
        },
      ],
      sentence: {
        jp: "急いで駅まで走ったのに、電車に乗り遅れてしまいました。",
        rubyData: [
          { kanji: "急", reading: "いそ" },
          { text: "いで" },
          { kanji: "駅", reading: "えき" },
          { text: "まで" },
          { kanji: "走", reading: "はし" },
          { text: "ったのに、" },
          { kanji: "電車", reading: "でんしゃ" },
          { text: "に" },
          { kanji: "乗", reading: "の" },
          { text: "り" },
          { kanji: "遅", reading: "おく" },
          { text: "れてしまいました。" },
        ],
        translation: {
          ru: "Хотя я изо всех сил бежал до станции, я всё равно опоздал на поезд.",
          uz: "Shoshilib stansiyagacha yugurgan bo'lsam ham, poyezdga kechikib qoldim.",
        },
        grammarPoint: {
          ru: "～のに выражает контраст и разочарование: мы приложили усилия, но результат оказался плохим. ～てしまう усиливает досаду от опоздания.",
          uz: "～のに zidlik va hafsala pir bo'lishini ifodalaydi: biz harakat qildik, lekin natija yomon bo'ldi. ～てしまう kechikishdan bo'lgan afsusni kuchaytiradi.",
        },
      },
    },
    {
      char: "起",
      onyomi: "キ",
      kunyomi: "お.きる, お.こす",
      meanings: {
        ru: "вставать, будить",
        uz: "turmoq, uyg'otmoq",
      },
      words: [
        {
          kanji: "起きる",
          kana: "おきる",
          mean_ru: "вставать, просыпаться",
          mean_uz: "uyg'onmoq, turmoq",
        },
        {
          kanji: "起こす",
          kana: "おこす",
          mean_ru: "будить",
          mean_uz: "uyg'otmoq",
        },
        {
          kanji: "早起き",
          kana: "はやおき",
          mean_ru: "ранний подъём",
          mean_uz: "erta turish",
        },
      ],
      sentence: {
        jp: "明日は大事な会議があるので、絶対に早く起きなければなりません。",
        rubyData: [
          { kanji: "明日", reading: "あした" },
          { text: "は" },
          { kanji: "大事", reading: "だいじ" },
          { text: "な" },
          { kanji: "会議", reading: "かいぎ" },
          { text: "があるので、" },
          { kanji: "絶対", reading: "ぜったい" },
          { text: "に" },
          { kanji: "早", reading: "はや" },
          { text: "く" },
          { kanji: "起", reading: "お" },
          { text: "きなければなりません。" },
        ],
        translation: {
          ru: "Завтра важное совещание, поэтому я во что бы то ни стало должен встать пораньше.",
          uz: "Ertaga muhim majlis borligi uchun, albatta erta turishim shart.",
        },
        grammarPoint: {
          ru: "～なければならない — форма строгой необходимости («должен, обязан»). С наречием <ruby>絶対<rt>ぜったい</rt></ruby>に («абсолютно») она показывает максимальную решимость не проспать.",
          uz: "～なければならない — qat'iy zarurat shakli («shart, majburman»). <ruby>絶対<rt>ぜったい</rt></ruby>に («albatta») ravishi bilan u uxlab qolmaslik bo'yicha qat'iy qarorni ko'rsatadi.",
        },
      },
    },
    {
      char: "足",
      onyomi: "ソク",
      kunyomi: "あし, た.りる",
      meanings: {
        ru: "нога, хватать",
        uz: "oyoq, yetarli bo'lmoq",
      },
      words: [
        {
          kanji: "足",
          kana: "あし",
          mean_ru: "нога",
          mean_uz: "oyoq",
        },
        {
          kanji: "足りる",
          kana: "たりる",
          mean_ru: "хватать, быть достаточным",
          mean_uz: "yetmoq, yetarli bo'lmoq",
        },
        {
          kanji: "不足",
          kana: "ふそく",
          mean_ru: "нехватка",
          mean_uz: "yetishmovchilik",
        },
      ],
      sentence: {
        jp: "パーティーの飲み物が足りなくなりそうなので、少し買ってきます。",
        rubyData: [
          { text: "パーティーの" },
          { kanji: "飲", reading: "の" },
          { text: "み" },
          { kanji: "物", reading: "もの" },
          { text: "が" },
          { kanji: "足", reading: "た" },
          { text: "りなくなりそうなので、" },
          { kanji: "少", reading: "すこ" },
          { text: "し" },
          { kanji: "買", reading: "か" },
          { text: "ってきます。" },
        ],
        translation: {
          ru: "Похоже, что напитки на вечеринке скоро закончатся, поэтому я схожу и куплю ещё немного.",
          uz: "Bazmda ichimliklar yetmay qoladiganga o'xshaydi, shuning uchun borib biroz xarid qilib kelaman.",
        },
        grammarPoint: {
          ru: "～そう («похоже, что») указывает на прогноз развития событий. Глагол <ruby>買<rt>か</rt></ruby>ってくる означает «сходить за покупками и вернуться обратно».",
          uz: "～そう («o'xshaydi») voqealar rivoji haqidagi prognozni bildiradi. <ruby>買<rt>か</rt></ruby>ってくる fe'li «sotib olib kelishni» (borib qaytishni) anglatadi.",
        },
      },
    },
    {
      char: "転",
      onyomi: "テン",
      kunyomi: "ころ.ぶ",
      meanings: {
        ru: "катиться, падать",
        uz: "dumalamoq, yiqilmoq",
      },
      words: [
        {
          kanji: "転ぶ",
          kana: "ころぶ",
          mean_ru: "падать, споткнуться",
          mean_uz: "yiqilmoq",
        },
        {
          kanji: "自転車",
          kana: "じてんしゃ",
          mean_ru: "велосипед",
          mean_uz: "velosiped",
        },
        {
          kanji: "運転",
          kana: "うんてん",
          mean_ru: "вождение",
          mean_uz: "mashina haydash",
        },
      ],
      sentence: {
        jp: "雪の日は道が滑りやすいので、転ばないように気をつけてください。",
        rubyData: [
          { kanji: "雪", reading: "ゆき" },
          { text: "の" },
          { kanji: "日", reading: "ひ" },
          { text: "は" },
          { kanji: "道", reading: "みち" },
          { text: "が" },
          { kanji: "滑", reading: "すべ" },
          { text: "りやすいので、" },
          { kanji: "転", reading: "ころ" },
          { text: "ばないように" },
          { kanji: "気", reading: "き" },
          { text: "をつけてください。" },
        ],
        translation: {
          ru: "В снежные дни дороги скользкие, поэтому будьте осторожны, чтобы не упасть.",
          uz: "Qorli kunlarda yo'llar sirpanchiq bo'ladi, shuning uchun yiqilib tushmaslikka ehtiyot bo'ling.",
        },
        grammarPoint: {
          ru: "～やすい указывает на высокую вероятность (легко поскользнуться). Форма ～ないように («так, чтобы не...») показывает нашу цель избежать неприятности.",
          uz: "～やすい yuqori ehtimollikni ko'rsatadi (sirpanib ketish oson). ～ないように shakli («...masligi uchun») ko'ngilsizlikning oldini olish maqsadimizni bildiradi.",
        },
      },
    },
    {
      char: "近",
      onyomi: "キン",
      kunyomi: "ちか.い",
      meanings: {
        ru: "близкий",
        uz: "yaqin",
      },
      words: [
        {
          kanji: "近い",
          kana: "ちかい",
          mean_ru: "близкий (расстояние/время)",
          mean_uz: "yaqin",
        },
        {
          kanji: "近く",
          kana: "ちかく",
          mean_ru: "поблизости",
          mean_uz: "yaqinida",
        },
        {
          kanji: "最近",
          kana: "さいきん",
          mean_ru: "в последнее время",
          mean_uz: "so'nggi paytlarda",
        },
      ],
      sentence: {
        jp: "最近は忙しすぎて、ゆっくり休む時間が全然ありません。",
        rubyData: [
          { kanji: "最近", reading: "さいきん" },
          { text: "は" },
          { kanji: "忙", reading: "いそが" },
          { text: "しすぎて、ゆっくり" },
          { kanji: "休", reading: "やす" },
          { text: "む" },
          { kanji: "時間", reading: "じかん" },
          { text: "が" },
          { kanji: "全然", reading: "ぜんぜん" },
          { text: "ありません。" },
        ],
        translation: {
          ru: "В последнее время я слишком занят, и у меня вообще нет времени спокойно отдохнуть.",
          uz: "So'nggi paytlarda men haddan tashqari bandman, umuman dam olishga vaqtim yo'q.",
        },
        grammarPoint: {
          ru: "～すぎる означает «чересчур». Вместе с 全然～ない (совсем нет) это классический способ пожаловаться на свой тяжелый график.",
          uz: "～すぎる «haddan tashqari» degan ma'noni beradi. 全然～ない (umuman yo'q) bilan birgalikda, bu og'ir jadvaldan shikoyat qilishning klassik usulidir.",
        },
      },
    },
    {
      char: "送",
      onyomi: "ソウ",
      kunyomi: "おく.る",
      meanings: {
        ru: "посылать, отправлять",
        uz: "jo'natmoq, yubormoq",
      },
      words: [
        {
          kanji: "送る",
          kana: "おくる",
          mean_ru: "отправлять, провожать",
          mean_uz: "yubormoq, kuzatmoq",
        },
        {
          kanji: "送信",
          kana: "そうしん",
          mean_ru: "отправка (сообщения)",
          mean_uz: "xabar yuborish",
        },
        {
          kanji: "見送り",
          kana: "みおくり",
          mean_ru: "проводы",
          mean_uz: "kuzatish",
        },
      ],
      sentence: {
        jp: "荷物の準備ができたら、明日中に宅配便で送っておきます。",
        rubyData: [
          { kanji: "荷物", reading: "にもつ" },
          { text: "の" },
          { kanji: "準備", reading: "じゅんび" },
          { text: "ができたら、" },
          { kanji: "明日中", reading: "あしたじゅう" },
          { text: "に" },
          { kanji: "宅配便", reading: "たくはいびん" },
          { text: "で" },
          { kanji: "送", reading: "おく" },
          { text: "っておきます。" },
        ],
        translation: {
          ru: "Как только всё соберу, отправлю вещи службой доставки до конца завтрашнего дня.",
          uz: "Yuklar tayyor bo'lishi bilan, ularni ertaga kun davomida kuryer orqali jo'natib qo'yaman.",
        },
        grammarPoint: {
          ru: "Суффикс ～中 (читается как じゅう) означает «в течение (завтрашнего дня)». ～ておく здесь — действие, сделанное для решения вопроса на будущее.",
          uz: "～中 (じゅう deb o'qiladi) suffiksi «davomida (ertaga)» ma'nosini beradi. ～ておく bu yerda masala kelajak uchun hal qilib qo'yilishini bildiradi.",
        },
      },
    },
    {
      char: "通",
      onyomi: "ツウ",
      kunyomi: "とお.る, かよ.う",
      meanings: {
        ru: "проходить, посещать",
        uz: "o'tmoq, qatnamoq",
      },
      words: [
        {
          kanji: "通る",
          kana: "とおる",
          mean_ru: "проходить (по улице)",
          mean_uz: "o'tmoq",
        },
        {
          kanji: "通う",
          kana: "かよう",
          mean_ru: "регулярно посещать (учёбу/работу)",
          mean_uz: "qatnamoq",
        },
        {
          kanji: "交通",
          kana: "こうつう",
          mean_ru: "транспорт, дорожное движение",
          mean_uz: "qatnov, transport",
        },
      ],
      sentence: {
        jp: "毎朝、満員電車に乗って会社に通うのは本当に疲れます。",
        rubyData: [
          { kanji: "毎朝", reading: "まいあさ" },
          { text: "、" },
          { kanji: "満員電車", reading: "まんいんでんしゃ" },
          { text: "に" },
          { kanji: "乗", reading: "の" },
          { text: "って" },
          { kanji: "会社", reading: "かいしゃ" },
          { text: "に" },
          { kanji: "通", reading: "かよ" },
          { text: "うのは" },
          { kanji: "本当", reading: "ほんとう" },
          { text: "に" },
          { kanji: "疲", reading: "つか" },
          { text: "れます。" },
        ],
        translation: {
          ru: "Ездить каждое утро на работу в переполненном поезде — это действительно очень утомительно.",
          uz: "Har kuni ertalab tiqilinch poyezdda ishga qatnash haqiqatan ham juda charchatadi.",
        },
        grammarPoint: {
          ru: "Частица の превращает фразу с глаголом в существительное (субстантивация). <ruby>通<rt>かよ</rt></ruby>うのは = «сам факт регулярных поездок (является утомительным)».",
          uz: "の zarrachasi fe'lli gapni otga aylantiradi (otlashish). <ruby>通<rt>かよ</rt></ruby>うのは = «muntazam qatnashning o'zi (charchatadi)».",
        },
      },
    },
    {
      char: "週",
      onyomi: "シュウ",
      kunyomi: "-",
      meanings: {
        ru: "неделя",
        uz: "hafta",
      },
      words: [
        {
          kanji: "週末",
          kana: "しゅうまつ",
          mean_ru: "выходные",
          mean_uz: "dam olish kunlari",
        },
        {
          kanji: "毎週",
          kana: "まいしゅう",
          mean_ru: "каждую неделю",
          mean_uz: "har hafta",
        },
        {
          kanji: "今週",
          kana: "こんしゅう",
          mean_ru: "эта неделя",
          mean_uz: "shu hafta",
        },
      ],
      sentence: {
        jp: "今週の週末は、家でゆっくりするか、映画を見に行くつもりです。",
        rubyData: [
          { kanji: "今週", reading: "こんしゅう" },
          { text: "の" },
          { kanji: "週末", reading: "しゅうまつ" },
          { text: "は、" },
          { kanji: "家", reading: "いえ" },
          { text: "でゆっくりするか、" },
          { kanji: "映画", reading: "えいが" },
          { text: "を" },
          { kanji: "見", reading: "み" },
          { text: "に" },
          { kanji: "行", reading: "い" },
          { text: "くつもりです。" },
        ],
        translation: {
          ru: "В эти выходные я планирую либо отдохнуть дома, либо сходить в кино.",
          uz: "Shu dam olish kunlarida yo uyda xotirjam dam olishni, yoki kinoga borishni rejalashtirganman.",
        },
        grammarPoint: {
          ru: "Союз か между глаголами предлагает выбор действий («или то, или это»). ～つもりです выражает уже сформированный план на ближайшее время.",
          uz: "Fe'llar orasidagi か bog'lovchisi harakatlar tanlovini taklif qiladi («yoki u, yoki bu»). ～つもりです esa yaqin kelajak uchun tuzilgan rejani bildiradi.",
        },
      },
    },
    {
      char: "運",
      onyomi: "ウン",
      kunyomi: "はこ.ぶ",
      meanings: {
        ru: "переносить, судьба",
        uz: "tashimoq, omad",
      },
      words: [
        {
          kanji: "運ぶ",
          kana: "はこぶ",
          mean_ru: "нести, перевозить",
          mean_uz: "tashimoq, eltmoq",
        },
        {
          kanji: "運動",
          kana: "うんどう",
          mean_ru: "спорт, упражнения",
          mean_uz: "sport, mashq",
        },
        {
          kanji: "運転",
          kana: "うんてん",
          mean_ru: "вождение",
          mean_uz: "mashina haydash",
        },
      ],
      sentence: {
        jp: "健康のために、なるべく車を運転せずに歩いて買い物に行きます。",
        rubyData: [
          { kanji: "健康", reading: "けんこう" },
          { text: "のために、なるべく" },
          { kanji: "車", reading: "くるま" },
          { text: "を" },
          { kanji: "運転", reading: "うんてん" },
          { text: "せずに" },
          { kanji: "歩", reading: "ある" },
          { text: "いて" },
          { kanji: "買", reading: "か" },
          { text: "い" },
          { kanji: "物", reading: "もの" },
          { text: "に" },
          { kanji: "行", reading: "い" },
          { text: "きます。" },
        ],
        translation: {
          ru: "Ради здоровья я стараюсь по возможности не водить машину и хожу за покупками пешком.",
          uz: "Sog'lig'im uchun iloji boricha mashina haydamasdan, xaridga piyoda borishga harakat qilaman.",
        },
        grammarPoint: {
          ru: "～ずに (без ～ないで) — более формальный и красивый вариант отрицания, показывающий, как именно мы совершаем действие (идя пешком, а не управляя машиной).",
          uz: "～ずに (～ないで ning muqobili) — harakatni aynan qanday bajarayotganimizni ko'rsatuvchi biroz rasmiyroq va chiroyli inkor shakli (mashina haydamasdan, piyoda yurib).",
        },
      },
    },
    {
      char: "道",
      onyomi: "ドウ",
      kunyomi: "みち",
      meanings: {
        ru: "дорога, путь",
        uz: "yo'l",
      },
      words: [
        {
          kanji: "道",
          kana: "みち",
          mean_ru: "дорога",
          mean_uz: "yo'l",
        },
        {
          kanji: "道路",
          kana: "どうろ",
          mean_ru: "автодорога",
          mean_uz: "avtomobil yo'li",
        },
        {
          kanji: "道具",
          kana: "どうぐ",
          mean_ru: "инструмент",
          mean_uz: "asbob-uskuna",
        },
      ],
      sentence: {
        jp: "道に迷ってしまったら、スマホの地図アプリを使うと便利です。",
        rubyData: [
          { kanji: "道", reading: "みち" },
          { text: "に" },
          { kanji: "迷", reading: "まよ" },
          { text: "ってしまったら、スマホの" },
          { kanji: "地図", reading: "ちず" },
          { text: "アプリを" },
          { kanji: "使", reading: "つか" },
          { text: "うと" },
          { kanji: "便利", reading: "べんり" },
          { text: "です。" },
        ],
        translation: {
          ru: "Если вы случайно заблудитесь, удобно воспользоваться приложением с картами на смартфоне.",
          uz: "Agar adashib qolsangiz, smartfondagi xarita ilovasidan foydalanish qulay bo'ladi.",
        },
        grammarPoint: {
          ru: "Условие ～たら (если) моделирует ситуацию. Частица ～と (когда/если сделаешь) показывает закономерность: «стоит открыть карту, как сразу станет удобно».",
          uz: "～たら (agar) sharti vaziyatni modellashtiradi. ～と (qilsangiz) zarrachasi qonuniyatni ko'rsatadi: «xaritani ochsangiz, o'z-o'zidan qulay bo'ladi».",
        },
      },
    },
    {
      char: "重",
      onyomi: "ジュウ",
      kunyomi: "おも.い",
      meanings: {
        ru: "тяжёлый",
        uz: "og'ir",
      },
      words: [
        {
          kanji: "重い",
          kana: "おもい",
          mean_ru: "тяжёлый",
          mean_uz: "og'ir",
        },
        {
          kanji: "体重",
          kana: "たいじゅう",
          mean_ru: "вес (тела)",
          mean_uz: "tana vazni",
        },
        {
          kanji: "重大な",
          kana: "じゅうだいな",
          mean_ru: "важный, серьёзный",
          mean_uz: "jiddiy, muhim",
        },
      ],
      sentence: {
        jp: "荷物が重すぎる場合は、無理をせずに手伝いを頼んでください。",
        rubyData: [
          { kanji: "荷物", reading: "にもつ" },
          { text: "が" },
          { kanji: "重", reading: "おも" },
          { text: "すぎる" },
          { kanji: "場合", reading: "ばあい" },
          { text: "は、" },
          { kanji: "無理", reading: "むり" },
          { text: "をせずに" },
          { kanji: "手伝", reading: "てつだ" },
          { text: "いを" },
          { kanji: "頼", reading: "たの" },
          { text: "んでください。" },
        ],
        translation: {
          ru: "В случае, если багаж слишком тяжёлый, не перенапрягайтесь и попросите о помощи.",
          uz: "Yukingiz o'ta og'ir bo'lgan holatda, o'zingizni zo'riqtirmasdan yordam so'rang.",
        },
        grammarPoint: {
          ru: "～場合は (в случае) задаёт условие для инструкции. <ruby>無理<rt>むり</rt></ruby>をせずに означает «не делая невозможного (не надрываясь)». Это заботливый офисный стандарт.",
          uz: "～場合は (holatida) yo'riqnoma uchun shart o'rnatadi. <ruby>無理<rt>むり</rt></ruby>をせずに «o'zini zo'riqtirmasdan» degan ma'noni beradi. Bu g'amxo'r ofis standartidir.",
        },
      },
    },
    {
      char: "野",
      onyomi: "ヤ",
      kunyomi: "の",
      meanings: {
        ru: "поле, дикий",
        uz: "dala, yovvoyi",
      },
      words: [
        {
          kanji: "野菜",
          kana: "やさい",
          mean_ru: "овощи",
          mean_uz: "sabzavotlar",
        },
        {
          kanji: "野球",
          kana: "やきゅう",
          mean_ru: "бейсбол",
          mean_uz: "beysbol",
        },
        {
          kanji: "分野",
          kana: "ぶんや",
          mean_ru: "сфера, область",
          mean_uz: "soha, tarmoq",
        },
      ],
      sentence: {
        jp: "冷蔵庫に残っている野菜を使って、適当に晩ご飯を作りました。",
        rubyData: [
          { kanji: "冷蔵庫", reading: "れいぞうこ" },
          { text: "に" },
          { kanji: "残", reading: "のこ" },
          { text: "っている" },
          { kanji: "野菜", reading: "やさい" },
          { text: "を" },
          { kanji: "使", reading: "つか" },
          { text: "って、" },
          { kanji: "適当", reading: "てきとう" },
          { text: "に" },
          { kanji: "晩", reading: "ばん" },
          { text: "ご" },
          { kanji: "飯", reading: "はん" },
          { text: "を" },
          { kanji: "作", reading: "つく" },
          { text: "りました。" },
        ],
        translation: {
          ru: "Используя овощи, которые оставались в холодильнике, я на скорую руку приготовил ужин.",
          uz: "Muzlatgichda qolgan sabzavotlardan foydalanib, tezda biror narsa tayyorlab kechki ovqat qildim.",
        },
        grammarPoint: {
          ru: "Слово <ruby>適当<rt>てきとう</rt></ruby>に в быту означает не «соответствующе», а «как придётся, на скорую руку, без заморочек». Это делает фразу очень живой.",
          uz: "<ruby>適当<rt>てきとう</rt></ruby>に so'zi kundalik hayotda «mos ravishda» emas, balki «tezda, bosh qotirmasdan, boridan» degan ma'noni beradi. Bu gapni juda jonli qiladi.",
        },
      },
    },
    {
      char: "銀",
      onyomi: "ギン",
      kunyomi: "-",
      meanings: {
        ru: "серебро",
        uz: "kumush",
      },
      words: [
        {
          kanji: "銀行",
          kana: "ぎんこう",
          mean_ru: "банк",
          mean_uz: "bank",
        },
        {
          kanji: "銀色",
          kana: "ぎんいろ",
          mean_ru: "серебряный цвет",
          mean_uz: "kumush rang",
        },
        {
          kanji: "銀行員",
          kana: "ぎんこういん",
          mean_ru: "сотрудник банка",
          mean_uz: "bank xodimi",
        },
      ],
      sentence: {
        jp: "家賃を振り込むために、お昼休みに銀行へ行ってこようと思います。",
        rubyData: [
          { kanji: "家賃", reading: "やちん" },
          { text: "を" },
          { kanji: "振", reading: "ふ" },
          { text: "り" },
          { kanji: "込", reading: "こ" },
          { text: "むために、お" },
          { kanji: "昼休", reading: "ひるやす" },
          { text: "みに" },
          { kanji: "銀行", reading: "ぎんこう" },
          { text: "へ" },
          { kanji: "行", reading: "い" },
          { text: "ってこようと" },
          { kanji: "思", reading: "おも" },
          { text: "います。" },
        ],
        translation: {
          ru: "Чтобы оплатить аренду, я думаю сбегать в банк во время обеденного перерыва.",
          uz: "Ijara pulini o'tkazish uchun tushlik tanaffusida bankka borib kelmoqchiman.",
        },
        grammarPoint: {
          ru: "Форма ～てくる означает «сходить и вернуться». В волевой форме <ruby>行<rt>い</rt></ruby>ってこよう это звучит как план на короткую вылазку: «схожу-ка я».",
          uz: "～てくる shakli «borib kelish»ni bildiradi. Ixtiyor shaklidagi <ruby>行<rt>い</rt></ruby>ってこよう iborasi qisqa tanaffusdagi rejani anglatadi: «borib kelaychi».",
        },
      },
    },
    {
      char: "開",
      onyomi: "カイ",
      kunyomi: "あ.ける, あ.く, ひら.く",
      meanings: {
        ru: "открывать",
        uz: "ochmoq",
      },
      words: [
        {
          kanji: "開ける",
          kana: "あける",
          mean_ru: "открывать (что-то)",
          mean_uz: "ochmoq (nimanidir)",
        },
        {
          kanji: "開く",
          kana: "あく",
          mean_ru: "открываться (само)",
          mean_uz: "ochilmoq (o'zi)",
        },
        {
          kanji: "開始",
          kana: "かいし",
          mean_ru: "начало",
          mean_uz: "boshlanish",
        },
      ],
      sentence: {
        jp: "会議室の窓が少し開いていたので、寒くならないように閉めました。",
        rubyData: [
          { kanji: "会議室", reading: "かいぎしつ" },
          { text: "の" },
          { kanji: "窓", reading: "まど" },
          { text: "が" },
          { kanji: "少", reading: "すこ" },
          { text: "し" },
          { kanji: "開", reading: "あ" },
          { text: "いていたので、" },
          { kanji: "寒", reading: "さむ" },
          { text: "くならないように" },
          { kanji: "閉", reading: "し" },
          { text: "めました。" },
        ],
        translation: {
          ru: "Окно в переговорной было немного приоткрыто, поэтому я закрыл его, чтобы не стало холодно.",
          uz: "Majlislar zalining derazasi biroz ochiq qolgan ekan, sovuq bo'lmasligi uchun uni yopib qo'ydim.",
        },
        grammarPoint: {
          ru: "～ていた (состояние: окно было открыто) + ～ないように (цель: чтобы не). Действие (закрытие окна) делается специально для предотвращения холода.",
          uz: "～ていた (holat: deraza ochiq edi) + ～ないように (maqsad: bo'lmasligi uchun). Harakat (derazani yopish) aynan sovuqning oldini olish uchun qilingan.",
        },
      },
    },
    {
      char: "院",
      onyomi: "イン",
      kunyomi: "-",
      meanings: {
        ru: "учреждение",
        uz: "muassasa",
      },
      words: [
        {
          kanji: "病院",
          kana: "びょういん",
          mean_ru: "больница",
          mean_uz: "shifoxona",
        },
        {
          kanji: "大学院",
          kana: "だいがくいん",
          mean_ru: "магистратура (аспирантура)",
          mean_uz: "magistratura",
        },
        {
          kanji: "入院",
          kana: "にゅういん",
          mean_ru: "госпитализация",
          mean_uz: "kasalxonaga yotish",
        },
      ],
      sentence: {
        jp: "熱が三日も下がらないなら、早く病院で診てもらったほうがいいですよ。",
        rubyData: [
          { kanji: "熱", reading: "ねつ" },
          { text: "が" },
          { kanji: "三日", reading: "みっか" },
          { text: "も" },
          { kanji: "下", reading: "さ" },
          { text: "がらないなら、" },
          { kanji: "早", reading: "はや" },
          { text: "く" },
          { kanji: "病院", reading: "びょういん" },
          { text: "で" },
          { kanji: "診", reading: "み" },
          { text: "てもらったほうがいいですよ。" },
        ],
        translation: {
          ru: "Если температура не спадает уже три дня, вам лучше поскорее провериться в больнице.",
          uz: "Agar isitma uch kundan beri tushmasa, tezroq shifoxonaga borib ko'ringaningiz ma'qul.",
        },
        grammarPoint: {
          ru: "Японцы редко говорят «я иду в больницу (лечиться)». Вместо этого они используют <ruby>診<rt>み</rt></ruby>てもらう — «сделать так, чтобы врач осмотрел». Это естественный совет.",
          uz: "Yaponlar «kasalxonaga (davolangani) boraman» deb kam aytishadi. Uning o'rniga <ruby>診<rt>み</rt></ruby>てもらう — «shifokor ko'rigidan o'tish» ishlatiladi. Bu juda tabiiy maslahat.",
        },
      },
    },
    {
      char: "集",
      onyomi: "シュウ",
      kunyomi: "あつ.まる, あつ.める",
      meanings: {
        ru: "собирать(ся)",
        uz: "yig'moq, to'planmoq",
      },
      words: [
        {
          kanji: "集まる",
          kana: "あつまる",
          mean_ru: "собираться (о людях)",
          mean_uz: "yig'ilmoq",
        },
        {
          kanji: "集める",
          kana: "あつめる",
          mean_ru: "собирать (что-то)",
          mean_uz: "to'plamoq",
        },
        {
          kanji: "集中",
          kana: "しゅうちゅう",
          mean_ru: "концентрация",
          mean_uz: "diqqatni jamlash",
        },
      ],
      sentence: {
        jp: "明日は朝の八時までに、駅の前に集まることになっているので遅れないでね。",
        rubyData: [
          { kanji: "明日", reading: "あした" },
          { text: "は" },
          { kanji: "朝", reading: "あさ" },
          { text: "の" },
          { kanji: "八時", reading: "はちじ" },
          { text: "までに、" },
          { kanji: "駅", reading: "えき" },
          { text: "の" },
          { kanji: "前", reading: "まえ" },
          { text: "に" },
          { kanji: "集", reading: "あつ" },
          { text: "まることになっているので" },
          { kanji: "遅", reading: "おく" },
          { text: "れないでね。" },
        ],
        translation: {
          ru: "У нас договоренность собраться завтра перед станцией к восьми утра, так что не опаздывай.",
          uz: "Ertaga ertalab soat sakkizgacha bekat oldida yig'ilishga kelishilganmiz, shuning uchun kechikma.",
        },
        grammarPoint: {
          ru: "～ことになっている означает уже установленное расписание или правило. Это снимает личное давление и переводит просьбу в статус «мы все так договорились».",
          uz: "～ことになっている allaqachon belgilangan jadval yoki qoidani anglatadi. Bu shaxsiy bosimni kamaytirib, iltimosni «hammamiz shunday kelishganmiz» holatiga o'tkazadi.",
        },
      },
    },
    {
      char: "青",
      onyomi: "セイ",
      kunyomi: "あお",
      meanings: {
        ru: "синий",
        uz: "ko'k",
      },
      words: [
        {
          kanji: "青い",
          kana: "あおい",
          mean_ru: "синий",
          mean_uz: "ko'k",
        },
        {
          kanji: "青空",
          kana: "あおぞら",
          mean_ru: "голубое небо",
          mean_uz: "musaffo osmon",
        },
        {
          kanji: "青信号",
          kana: "あおしんごう",
          mean_ru: "зелёный свет светофора",
          mean_uz: "yashil chiroq (svetafor)",
        },
      ],
      sentence: {
        jp: "信号が青に変わってから、安全に道を渡りましょう。",
        rubyData: [
          { kanji: "信号", reading: "しんごう" },
          { text: "が" },
          { kanji: "青", reading: "あお" },
          { text: "に" },
          { kanji: "変", reading: "か" },
          { text: "わってから、" },
          { kanji: "安全", reading: "あんぜん" },
          { text: "に" },
          { kanji: "道", reading: "みち" },
          { text: "を" },
          { kanji: "渡", reading: "わた" },
          { text: "りましょう。" },
        ],
        translation: {
          ru: "Давайте переходить дорогу безопасно, только после того как загорится зелёный (синий) свет.",
          uz: "Kelinglar, yo'lni xavfsiz tarzda, svetafor yashilga (ko'k) o'zgarganidan keyingina kesib o'tamiz.",
        },
        grammarPoint: {
          ru: "～てから указывает на строгую последовательность. Мы не переходим дорогу, пока условие (смена цвета) полностью не выполнится.",
          uz: "～てから qat'iy ketma-ketlikni ko'rsatadi. Biz shart (rang o'zgarishi) to'liq bajarilmaguncha yo'ldan o'tmaymiz.",
        },
      },
    },
    {
      char: "音",
      onyomi: "オン",
      kunyomi: "おと",
      meanings: {
        ru: "звук",
        uz: "tovush",
      },
      words: [
        {
          kanji: "音",
          kana: "おと",
          mean_ru: "звук, шум",
          mean_uz: "ovoz, shovqin",
        },
        {
          kanji: "音楽",
          kana: "おんがく",
          mean_ru: "музыка",
          mean_uz: "musiqa",
        },
        {
          kanji: "発音",
          kana: "はつおん",
          mean_ru: "произношение",
          mean_uz: "talaffuz",
        },
      ],
      sentence: {
        jp: "スマホから変な音が聞こえ始めたら、修理に出したほうがいいかもしれません。",
        rubyData: [
          { text: "スマホから" },
          { kanji: "変", reading: "へん" },
          { text: "な" },
          { kanji: "音", reading: "おと" },
          { text: "が" },
          { kanji: "聞", reading: "き" },
          { text: "こえ" },
          { kanji: "始", reading: "はじ" },
          { text: "めたら、" },
          { kanji: "修理", reading: "しゅうり" },
          { text: "に" },
          { kanji: "出", reading: "だ" },
          { text: "したほうがいいかもしれません。" },
        ],
        translation: {
          ru: "Если из смартфона начали доноситься странные звуки, возможно, стоит сдать его в ремонт.",
          uz: "Agar smartfondan g'alati ovozlar eshitila boshlasa, uni ta'mirga berganingiz yaxshiroq bo'lishi mumkin.",
        },
        grammarPoint: {
          ru: "～始める показывает начало процесса (звуки стали появляться). А ～たほうがいいかもしれない — деликатный, ненавязчивый способ дать совет.",
          uz: "～始める jarayon boshlanishini ko'rsatadi (ovozlar eshitila boshladi). ～たほうがいいかもしれない esa maslahat berishning ehtiyotkor, muloyim usulidir.",
        },
      },
    },
    {
      char: "題",
      onyomi: "ダイ",
      kunyomi: "-",
      meanings: {
        ru: "тема, проблема",
        uz: "mavzu, masala",
      },
      words: [
        {
          kanji: "問題",
          kana: "もんだい",
          mean_ru: "вопрос, проблема",
          mean_uz: "muammo, masala",
        },
        {
          kanji: "宿題",
          kana: "しゅくだい",
          mean_ru: "домашнее задание",
          mean_uz: "uy vazifasi",
        },
        {
          kanji: "話題",
          kana: "わだい",
          mean_ru: "тема (для разговора)",
          mean_uz: "suhbat mavzusi",
        },
      ],
      sentence: {
        jp: "この問題は複雑すぎて、一人ではどうやって解けばいいかわかりません。",
        rubyData: [
          { text: "この" },
          { kanji: "問題", reading: "もんだい" },
          { text: "は" },
          { kanji: "複雑", reading: "ふくざつ" },
          { text: "すぎて、" },
          { kanji: "一人", reading: "ひとり" },
          { text: "ではどうやって" },
          { kanji: "解", reading: "と" },
          { text: "けばいいかわかりません。" },
        ],
        translation: {
          ru: "Эта задача слишком сложная, я даже не знаю, как мне решить её в одиночку.",
          uz: "Bu masala juda murakkab, uni bir o'zim qanday yechishimni umuman bilmayapman.",
        },
        grammarPoint: {
          ru: "Вопросительное слово + ～ばいいか (как лучше поступить) — отличная конструкция для поиска решения. <ruby>解<rt>と</rt></ruby>けばいいかわからない = «не знаю, как мне это решить».",
          uz: "So'roq so'z + ～ばいいか (qanday qilsam yaxshi) — yechim izlash uchun ajoyib qurilma. <ruby>解<rt>と</rt></ruby>けばいいかわからない = «qanday yechishni bilmayman».",
        },
      },
    },
    {
      char: "風",
      onyomi: "フウ",
      kunyomi: "かぜ",
      meanings: {
        ru: "ветер",
        uz: "shamol",
      },
      words: [
        {
          kanji: "風",
          kana: "かぜ",
          mean_ru: "ветер",
          mean_uz: "shamol",
        },
        {
          kanji: "お風呂",
          kana: "おふろ",
          mean_ru: "ванна",
          mean_uz: "vanna",
        },
        {
          kanji: "台風",
          kana: "たいふう",
          mean_ru: "тайфун",
          mean_uz: "tayfun",
        },
      ],
      sentence: {
        jp: "明日は台風が来るらしいので、外出は控えたほうがよさそうです。",
        rubyData: [
          { kanji: "明日", reading: "あした" },
          { text: "は" },
          { kanji: "台風", reading: "たいふう" },
          { text: "が" },
          { kanji: "来", reading: "く" },
          { text: "るらしいので、" },
          { kanji: "外出", reading: "がいしゅつ" },
          { text: "は" },
          { kanji: "控", reading: "ひか" },
          { text: "えたほうがよさそうです。" },
        ],
        translation: {
          ru: "Говорят, завтра будет тайфун, так что, похоже, лучше воздержаться от выхода на улицу.",
          uz: "Aytishlaricha, ertaga tayfun kelar ekan, shuning uchun ko'chaga chiqmagan ma'qul ko'rinadi.",
        },
        grammarPoint: {
          ru: "～らしい передаёт услышанную информацию (новости, слухи). А ～ほうがよさそう — это логичный вывод-оценка («выглядит так, что лучше сделать это»).",
          uz: "～らしい eshitilgan ma'lumotni (yangiliklar, mish-mish) yetkazadi. ～ほうがよさそう esa mantiqiy xulosa («shunday qilgan yaxshi ko'rinadi») hisoblanadi.",
        },
      },
    },
    {
      char: "飯",
      onyomi: "ハン",
      kunyomi: "めし",
      meanings: {
        ru: "еда, варёный рис",
        uz: "ovqat, guruch",
      },
      words: [
        {
          kanji: "ご飯",
          kana: "ごはん",
          mean_ru: "рис, еда",
          mean_uz: "guruch, ovqat",
        },
        {
          kanji: "昼飯",
          kana: "ひるめし",
          mean_ru: "обед",
          mean_uz: "tushlik",
        },
        {
          kanji: "炊飯器",
          kana: "すいはんき",
          mean_ru: "рисоварка",
          mean_uz: "guruch pishirgich",
        },
      ],
      sentence: {
        jp: "ご飯を食べ終わったら、そのままにしないで自分でお皿を洗ってください。",
        rubyData: [
          { text: "ご" },
          { kanji: "飯", reading: "はん" },
          { text: "を" },
          { kanji: "食", reading: "た" },
          { text: "べ" },
          { kanji: "終", reading: "お" },
          { text: "わったら、そのままにしないで" },
          { kanji: "自分", reading: "じぶん" },
          { text: "でお" },
          { kanji: "皿", reading: "さら" },
          { text: "を" },
          { kanji: "洗", reading: "あら" },
          { text: "ってください。" },
        ],
        translation: {
          ru: "Когда доешь, пожалуйста, не оставляй посуду так, а вымой тарелку сам.",
          uz: "Ovqatlanib bo'lganingdan keyin, shunday tashlab ketmasdan idishingni o'zing yuvgin.",
        },
        grammarPoint: {
          ru: "Глагол + ～終わる означает завершение процесса. А фраза そのままにしないで («не оставляй как есть») — очень популярное бытовое замечание-просьба.",
          uz: "Fe'l + ～終わる jarayonning tugashini bildiradi. そのままにしないで («shunday qoldirma») iborasi esa kundalik hayotda ko'p ishlatiladigan tanbeh-iltimosdir.",
        },
      },
    },
    {
      char: "飲",
      onyomi: "イン",
      kunyomi: "の.む",
      meanings: {
        ru: "пить",
        uz: "ichmoq",
      },
      words: [
        {
          kanji: "飲む",
          kana: "のむ",
          mean_ru: "пить",
          mean_uz: "ichmoq",
        },
        {
          kanji: "飲み物",
          kana: "のみもの",
          mean_ru: "напиток",
          mean_uz: "ichimlik",
        },
        {
          kanji: "飲食店",
          kana: "いんしょくてん",
          mean_ru: "кафе, ресторан",
          mean_uz: "ovqatlanish joyi",
        },
      ],
      sentence: {
        jp: "車を運転するつもりなら、絶対にお酒を飲んではいけません。",
        rubyData: [
          { kanji: "車", reading: "くるま" },
          { text: "を" },
          { kanji: "運転", reading: "うんてん" },
          { text: "するつもりなら、" },
          { kanji: "絶対", reading: "ぜったい" },
          { text: "にお" },
          { kanji: "酒", reading: "さけ" },
          { text: "を" },
          { kanji: "飲", reading: "の" },
          { text: "んではいけません。" },
        ],
        translation: {
          ru: "Если ты планируешь сесть за руль, тебе категорически нельзя пить алкоголь.",
          uz: "Agar mashina haydash niyatida bo'lsang, aslo spirtli ichimlik ichishing mumkin emas.",
        },
        grammarPoint: {
          ru: "～つもりなら («если намереваешься») задаёт условие. ～てはいけない (нельзя) со словом <ruby>絶対<rt>ぜったい</rt></ruby>に (абсолютно) превращается в железное правило.",
          uz: "～つもりなら («agar niyat qilsang») shart qo'yadi. ～てはいけない (mumkin emas) <ruby>絶対<rt>ぜったい</rt></ruby>に (mutlaqo) so'zi bilan qat'iy qoidaga aylanadi.",
        },
      },
    },
    {
      char: "館",
      onyomi: "カン",
      kunyomi: "-",
      meanings: {
        ru: "здание, учреждение",
        uz: "bino, muassasa",
      },
      words: [
        {
          kanji: "図書館",
          kana: "としょかん",
          mean_ru: "библиотека",
          mean_uz: "kutubxona",
        },
        {
          kanji: "映画館",
          kana: "えいがかん",
          mean_ru: "кинотеатр",
          mean_uz: "kinoteatr",
        },
        {
          kanji: "旅館",
          kana: "りょかん",
          mean_ru: "рёкан (традиционная гостиница)",
          mean_uz: "ryokan (yapon mehmonxonasi)",
        },
      ],
      sentence: {
        jp: "レポートを書くために、図書館で資料を探そうと思っています。",
        rubyData: [
          { text: "レポートを" },
          { kanji: "書", reading: "か" },
          { text: "くために、" },
          { kanji: "図書館", reading: "としょかん" },
          { text: "で" },
          { kanji: "資料", reading: "しりょう" },
          { text: "を" },
          { kanji: "探", reading: "さが" },
          { text: "そうと" },
          { kanji: "思", reading: "おも" },
          { text: "っています。" },
        ],
        translation: {
          ru: "Чтобы написать отчёт, я подумываю поискать нужные материалы в библиотеке.",
          uz: "Hisobot yozish maqsadida, kutubxonadan materiallar qidirishni niyat qilyapman.",
        },
        grammarPoint: {
          ru: "～ために указывает на цель. ～ようと思っている — это не мгновенное решение, а план, который человек обдумал и собирается выполнить.",
          uz: "～ために maqsadni bildiradi. ～ようと思っている — bu bir zumlik qaror emas, balki inson o'ylab ko'rgan va bajarmoqchi bo'lgan rejasidir.",
        },
      },
    },
    {
      char: "駅",
      onyomi: "エキ",
      kunyomi: "-",
      meanings: {
        ru: "станция",
        uz: "bekat",
      },
      words: [
        {
          kanji: "駅",
          kana: "えき",
          mean_ru: "станция",
          mean_uz: "bekat",
        },
        {
          kanji: "駅前",
          kana: "えきまえ",
          mean_ru: "площадь перед станцией",
          mean_uz: "bekat oldi",
        },
        {
          kanji: "駅員",
          kana: "えきいん",
          mean_ru: "работник станции",
          mean_uz: "bekat xodimi",
        },
      ],
      sentence: {
        jp: "もし駅に着いたら、迎えに行くからLINEで教えてね。",
        rubyData: [
          { text: "もし" },
          { kanji: "駅", reading: "えき" },
          { text: "に" },
          { kanji: "着", reading: "つ" },
          { text: "いたら、" },
          { kanji: "迎", reading: "むか" },
          { text: "えに" },
          { kanji: "行", reading: "い" },
          { text: "くからLINEで" },
          { kanji: "教", reading: "おし" },
          { text: "えてね。" },
        ],
        translation: {
          ru: "Как только доберёшься до станции, напиши мне в LINE, и я пойду тебя встречать.",
          uz: "Agar bekatga yetib kelsang, LINE orqali xabar ber, men seni kutib olgani chiqaman.",
        },
        grammarPoint: {
          ru: "～たら (когда/если) связывает момент прибытия с действием. Глагол <ruby>教<rt>おし</rt></ruby>える здесь значит не «учить», а «дать знать, сообщить» — очень часто в переписке.",
          uz: "～たら (qachonki/agar) yetib kelish vaqtini keyingi harakat bilan bog'laydi. <ruby>教<rt>おし</rt></ruby>える fe'li bu yerda «o'rgatish» emas, balki «xabar berish» ma'nosida keladi.",
        },
      },
    },
    {
      char: "験",
      onyomi: "ケン",
      kunyomi: "-",
      meanings: {
        ru: "испытание, тест",
        uz: "sinov, test",
      },
      words: [
        {
          kanji: "試験",
          kana: "しけん",
          mean_ru: "экзамен",
          mean_uz: "imtihon",
        },
        {
          kanji: "経験",
          kana: "けいけん",
          mean_ru: "опыт",
          mean_uz: "tajriba",
        },
        {
          kanji: "実験",
          kana: "じっけん",
          mean_ru: "эксперимент",
          mean_uz: "eksperiment, tajriba",
        },
      ],
      sentence: {
        jp: "来月の試験に合格できるように、毎日必死に勉強しています。",
        rubyData: [
          { kanji: "来月", reading: "らいげつ" },
          { text: "の" },
          { kanji: "試験", reading: "しけん" },
          { text: "に" },
          { kanji: "合格", reading: "ごうかく" },
          { text: "できるように、" },
          { kanji: "毎日", reading: "まいにち" },
          { kanji: "必死", reading: "ひっし" },
          { text: "に" },
          { kanji: "勉強", reading: "べんきょう" },
          { text: "しています。" },
        ],
        translation: {
          ru: "Я изо всех сил учусь каждый день, чтобы суметь сдать экзамен в следующем месяце.",
          uz: "Kelasi oyki imtihondan o'ta olish maqsadida, har kuni jon-jahdim bilan o'qiyapman.",
        },
        grammarPoint: {
          ru: "～ように с глаголом в потенциальной форме (<ruby>合格<rt>ごうかく</rt></ruby>できる) означает «для того, чтобы (мочь)». Это стремление к результату, ради которого человек старается.",
          uz: "Ehtimollik fe'li bilan keluvchi ～ように (<ruby>合格<rt>ごうかく</rt></ruby>できる) «(...qila olish) uchun» degan ma'noni beradi. Bu kishi intilayotgan maqsadli natijadir.",
        },
      },
    },
    {
      char: "魚",
      onyomi: "ギョ",
      kunyomi: "さかな",
      meanings: {
        ru: "рыба",
        uz: "baliq",
      },
      words: [
        {
          kanji: "魚",
          kana: "さかな",
          mean_ru: "рыба",
          mean_uz: "baliq",
        },
        {
          kanji: "焼き魚",
          kana: "やきざかな",
          mean_ru: "жареная рыба",
          mean_uz: "qovurilgan baliq",
        },
        {
          kanji: "金魚",
          kana: "きんぎょ",
          mean_ru: "золотая рыбка",
          mean_uz: "tilla baliqcha",
        },
      ],
      sentence: {
        jp: "私は肉より、新鮮な魚のほうがおいしいと思います。",
        rubyData: [
          { kanji: "私", reading: "わたし" },
          { text: "は" },
          { kanji: "肉", reading: "にく" },
          { text: "より、" },
          { kanji: "新鮮", reading: "しんせん" },
          { text: "な" },
          { kanji: "魚", reading: "さかな" },
          { text: "のほうがおいしいと" },
          { kanji: "思", reading: "おも" },
          { text: "います。" },
        ],
        translation: {
          ru: "Мне кажется, что свежая рыба гораздо вкуснее мяса.",
          uz: "Menimcha, go'shtga qaraganda yangi baliq mazaliroq.",
        },
        grammarPoint: {
          ru: "Грамматика «A より B のほうが» используется для сравнения, где B выигрывает. Это стандартный способ озвучить свои вкусы.",
          uz: "«A より B のほうが» grammatikasi solishtirishda B ustun bo'lganida ishlatiladi. Bu o'z didingizni aytishning standart usulidir.",
        },
      },
    },
    {
      char: "鳥",
      onyomi: "チョウ",
      kunyomi: "とり",
      meanings: {
        ru: "птица",
        uz: "qush",
      },
      words: [
        {
          kanji: "鳥",
          kana: "とり",
          mean_ru: "птица",
          mean_uz: "qush",
        },
        {
          kanji: "焼き鳥",
          kana: "やきとり",
          mean_ru: "якитори (шашлычки)",
          mean_uz: "yakitori (kabobcha)",
        },
        {
          kanji: "小鳥",
          kana: "ことり",
          mean_ru: "птичка",
          mean_uz: "qushcha",
        },
      ],
      sentence: {
        jp: "朝早く起きると、窓から鳥が鳴いているのが聞こえます。",
        rubyData: [
          { kanji: "朝早", reading: "あさはや" },
          { text: "く" },
          { kanji: "起", reading: "お" },
          { text: "きると、" },
          { kanji: "窓", reading: "まど" },
          { text: "から" },
          { kanji: "鳥", reading: "とり" },
          { text: "が" },
          { kanji: "鳴", reading: "な" },
          { text: "いているのが" },
          { kanji: "聞", reading: "き" },
          { text: "こえます。" },
        ],
        translation: {
          ru: "Если проснуться рано утром, из окна слышно пение птиц.",
          uz: "Ertalab barvaqt tursangiz, derazadan qushlarning sayrashi eshitiladi.",
        },
        grammarPoint: {
          ru: "Условие ～と означает «всегда, когда...». Конструкция ～のが聞こえる превращает действие (птицы поют) в объект, который мы можем услышать.",
          uz: "～と sharti «har doim ...ganda» degan ma'noni beradi. ～のが聞こえる qurilmasi esa harakatni (qushlar sayrashini) biz eshitishimiz mumkin bo'lgan obyektga aylantiradi.",
        },
      },
    },
    {
      char: "黒",
      onyomi: "コク",
      kunyomi: "くろ",
      meanings: {
        ru: "чёрный",
        uz: "qora",
      },
      words: [
        {
          kanji: "黒い",
          kana: "くろい",
          mean_ru: "чёрный",
          mean_uz: "qora",
        },
        {
          kanji: "黒板",
          kana: "こくばん",
          mean_ru: "школьная доска",
          mean_uz: "sinf doskasi",
        },
        {
          kanji: "真っ黒",
          kana: "まっくろ",
          mean_ru: "абсолютно чёрный",
          mean_uz: "tim qora",
        },
      ],
      sentence: {
        jp: "先生が黒板に書いたことを、忘れないようにノートに写した。",
        rubyData: [
          { kanji: "先生", reading: "せんせい" },
          { text: "が" },
          { kanji: "黒板", reading: "こくばん" },
          { text: "に" },
          { kanji: "書", reading: "か" },
          { text: "いたことを、" },
          { kanji: "忘", reading: "わす" },
          { text: "れないようにノートに" },
          { kanji: "写", reading: "うつ" },
          { text: "した。" },
        ],
        translation: {
          ru: "Я переписал в тетрадь то, что учитель написал на доске, чтобы не забыть.",
          uz: "O'qituvchi doskaga yozgan narsalarni esdan chiqarmaslik uchun daftarga ko'chirib yozdim.",
        },
        grammarPoint: {
          ru: "Слово こと здесь заменяет всё, что было написано. Форма ～ないように («чтобы не») выражает цель действия — предотвратить забывание.",
          uz: "こと so'zi bu yerda yozilgan hamma narsani o'rnini bosadi. ～ないように («bo'lmasligi uchun») shakli harakatning maqsadini — unutishning oldini olishni bildiradi.",
        },
      },
    },
];

const uiTexts = {
  ru: {
    appTitle: "Мастер Кандзи N4",
    welcomeTitle: "Добро Пожаловать",
    welcomeText: "Изучайте и Практикуйте Кандзи",
    refBtn: "Справочник",
    quizBtn: "Тестирование",
    backBtn: "Назад",
    exitBtn: "Выйти",
    modeSelectTitle: "Настройки Теста",
    modeTitle: "Режим",
    countTitle: "Количество Вопросов",
    modeReading: "Кандзи → Чтение",
    modeMeaning: "Кандзи → Значение",
    modeMixed: "Смешанный Режим",
    countAll: "Все",
    startBtn: "Начать Тест",
    correct: "Верно!",
    incorrect: "Неверно",
    nextBtn: "Следующий Вопрос",
    closeBtn: "Закрыть",
    restartBtn: "В Главное Меню",
    vocabTitle: "Словарь",
    grammarTitle: "Грамматика",
    meaningLabel: "Значение",
    sentenceLabel: "Пример",
    questionReading: "Выберите Чтение",
    questionMeaning: "Выберите Значение",
    questionOnyomi: "Выберите Чтение (Он)",
    questionKunyomi: "Выберите Чтение (Кун)",
    resultsLabel: "Правильных Ответов",
    excellentResult: "Превосходно! ✨",
    goodResult: "Отличный Результат!",
    okResult: "Хорошо, Продолжайте!",
    needPractice: "Нужна Практика",
    exitConfirm: "Выйти из Теста? Прогресс Будет Потерян.",
    mistakesTitle: "Работа над Ошибками",
    insufficientQuestions:
      "Не Удалось Собрать Достаточно Вопросов для Выбранного Режима.",
    onyomiLabel: "ОНЪЁМИ",
    kunyomiLabel: "КУНЪЁМИ",
  },
  uz: {
    appTitle: "Master Kanji N4",
    welcomeTitle: "Xush Kelibsiz",
    welcomeText: "Kanjilarni O'rganing va Mashq Qiling",
    refBtn: "Ma'lumotnoma",
    quizBtn: "Test Ishlash",
    backBtn: "Ortga",
    exitBtn: "Chiqish",
    modeSelectTitle: "Test Sozlamalari",
    modeTitle: "Rejim",
    countTitle: "Savollar Soni",
    modeReading: "Kanji → O'qilish",
    modeMeaning: "Kanji → Ma'no",
    modeMixed: "Aralash Rejim",
    countAll: "Barchasi",
    startBtn: "Testni Boshlash",
    correct: "To'g'ri!",
    incorrect: "Noto'g'ri",
    nextBtn: "Keyingi Savol",
    closeBtn: "Yopish",
    restartBtn: "Bosh Menyuga",
    vocabTitle: "Lug'at",
    grammarTitle: "Grammatika",
    meaningLabel: "Ma'no",
    sentenceLabel: "Misol",
    questionReading: "To'g'ri O'qilishni Tanlang",
    questionMeaning: "To'g'ri Ma'noni Tanlang",
    questionOnyomi: "O'qilishni Tanlang (On)",
    questionKunyomi: "O'qilishni Tanlang (Kun)",
    resultsLabel: "To'g'ri Javoblar",
    excellentResult: "Ajoyib! ✨",
    goodResult: "Zo'r Natija!",
    okResult: "Yaxshi, Davom Eting!",
    needPractice: "Mashq Kerak",
    exitConfirm: "Testdan Chiqasizmi? Natijalar Saqlanmaydi.",
    mistakesTitle: "Xatolar Ustida Ishlash",
    insufficientQuestions:
      "Tanlangan Rejim Uchun Yetarli Savollarni Tuzib Bo'lmadi.",
    onyomiLabel: "ONYOMI",
    kunyomiLabel: "KUNYOMI",
  },
};

function getSecureRandom() {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] / (0xffffffff + 1);
  }
  return Math.random();
}

function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(getSecureRandom() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function isValidAnswerValue(value) {
  return typeof value === "string" && value.trim() !== "" && value !== "-";
}

function getAnswerValue(kanji, subtype, language) {
  const activeLanguage = language || appState.language;
  if (subtype === "onyomi") return kanji.onyomi;
  if (subtype === "kunyomi") return kanji.kunyomi;
  return kanji.meanings?.[activeLanguage] || "";
}

function sanitizeRichText(input) {
  if (!input) return "";

  const template = document.createElement("template");
  template.innerHTML = input;
  const allowedTags = new Set(["RUBY", "RT", "RB", "RP", "BR"]);

  const sanitizeNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return document.createTextNode(node.textContent || "");
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return document.createDocumentFragment();
    }

    if (!allowedTags.has(node.tagName)) {
      const fragment = document.createDocumentFragment();
      node.childNodes.forEach((child) => {
        fragment.appendChild(sanitizeNode(child));
      });
      return fragment;
    }

    const safeElement = document.createElement(node.tagName.toLowerCase());
    node.childNodes.forEach((child) => {
      safeElement.appendChild(sanitizeNode(child));
    });
    return safeElement;
  };

  const wrapper = document.createElement("div");
  template.content.childNodes.forEach((node) => {
    wrapper.appendChild(sanitizeNode(node));
  });
  return wrapper.innerHTML;
}

function isLanguageSwitchLocked() {
  return (
    appState.currentScreen === "quiz" || appState.currentScreen === "results"
  );
}

const kanjiDataList = kanjiData.filter(
  (kanji) =>
    kanji &&
    typeof kanji.char === "string" &&
    kanji.char.trim() !== "" &&
    kanji.meanings &&
    typeof kanji.meanings === "object",
);

const kanjiIndexMap = new Map();
kanjiDataList.forEach((kanji, index) => {
  kanjiIndexMap.set(kanji.char, index);
});

const screenMap = {
  home: "homeScreen",
  reference: "referenceScreen",
  quizConfig: "quizConfigScreen",
  quiz: "quizScreen",
  results: "resultsScreen",
};

const MODAL_TRANSITION_MS = 400;

const appState = {
  currentScreen: "home",
  language: "ru",
  quizMode: "reading",
  quizCount: 15,
  currentQuestionIndex: 0,
  score: 0,
  questions: [],
  isReferenceModal: false,
  timerInterval: null,
  isAnswering: false,
  modalHideTimer: null,
  isInitialized: false,
};

const DOM = {};

const DOM_IDS = {
  langSwitch: "langSwitch",
  appTitle: "appTitle",
  progressFill: "progressFill",
  progressText: "progressText",
  scoreText: "scoreText",
  questionType: "questionType",
  questionKanji: "questionKanji",
  optionsGrid: "optionsGrid",
  detailModal: "detailModal",
  detailModalContent: "detailModalContent",
  closeModalBtn: "closeModalBtn",
  modalKanji: "modalKanji",
  modalOnyomi: "modalOnyomi",
  modalKunyomi: "modalKunyomi",
  modalMeaning: "modalMeaning",
  modalWords: "modalWords",
  modalSentenceRuby: "modalSentenceRuby",
  modalSentenceTranslation: "modalSentenceTranslation",
  modalGrammar: "modalGrammar",
  nextBtn: "nextBtn",
  closeRefBtn: "closeRefBtn",
  resultBadge: "resultBadge",
  resultBadgeText: "resultBadgeText",
  kanjiGrid: "kanjiGrid",
  countGrid: "countGrid",
  startBtn: "startBtn",
  resultsHomeBtn: "resultsHomeBtn",
  referenceBackBtn: "referenceBackBtn",
  configBackBtnTrigger: "configBackBtnTrigger",
  quizBackBtnTrigger: "quizBackBtnTrigger",
};

function cacheDomElements() {
  for (const [key, id] of Object.entries(DOM_IDS)) {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Required DOM element #${id} was not found.`);
    }
    DOM[key] = element;
  }
}

function init() {
  if (appState.isInitialized) return;
  cacheDomElements();
  appState.isInitialized = true;
  hideModal(true);
  setupEventListeners();
  updateUI();
  generateKanjiGrid();
}

function setupEventListeners() {
  DOM.langSwitch.addEventListener("click", toggleLanguage);
  DOM.startBtn.addEventListener("click", startQuiz);
  DOM.nextBtn.addEventListener("click", nextQuestion);
  DOM.closeRefBtn.addEventListener("click", () => closeModal());
  DOM.closeModalBtn.addEventListener("click", () => closeModal());
  DOM.referenceBackBtn.addEventListener("click", () => showScreen("home"));
  DOM.configBackBtnTrigger.addEventListener("click", () => showScreen("home"));
  DOM.quizBackBtnTrigger.addEventListener("click", confirmExit);
  DOM.resultsHomeBtn.addEventListener("click", returnToHome);
  document.addEventListener("click", handleDelegatedClick);

  DOM.detailModal.addEventListener("click", (e) => {
    if (e.target === DOM.detailModal && appState.isReferenceModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      DOM.detailModal.classList.contains("active") &&
      appState.isReferenceModal
    ) {
      closeModal();
      return;
    }

    if (
      DOM.detailModal.classList.contains("active") &&
      !appState.isReferenceModal
    ) {
      if (e.key === "Enter" && !DOM.nextBtn.disabled) {
        nextQuestion();
      }
    }

    if (
      appState.currentScreen === "quiz" &&
      !DOM.detailModal.classList.contains("active")
    ) {
      const keyMap = { a: 0, b: 1, c: 2, d: 3 };
      const index = keyMap[e.key.toLowerCase()];
      if (index !== undefined) {
        const buttons = DOM.optionsGrid.querySelectorAll(".option-btn");
        if (buttons[index] && !buttons[index].disabled) {
          buttons[index].click();
        }
      }
    }
  });
}

function handleDelegatedClick(event) {
  const menuCard = event.target.closest(".menu-card");
  if (menuCard) {
    showScreen(menuCard.dataset.screen);
    return;
  }

  const modeOption = event.target.closest(".mode-option");
  if (modeOption) {
    selectMode(modeOption);
    return;
  }

  const countBtn = event.target.closest(".count-btn");
  if (countBtn) {
    selectCountValue(countBtn.dataset.count);
    return;
  }

  const kanjiItem = event.target.closest(".kanji-item");
  if (kanjiItem) {
    const kanjiIndex = Number(kanjiItem.dataset.kanjiIndex);
    if (Number.isInteger(kanjiIndex)) {
      showKanjiDetail(kanjiIndex, true);
    }
    return;
  }

  const optionBtn = event.target.closest(".option-btn");
  if (optionBtn && !optionBtn.disabled) {
    const optionIndex = Number(optionBtn.dataset.optionIndex);
    const question = appState.questions[appState.currentQuestionIndex];
    const selectedOption =
      question && Number.isInteger(optionIndex)
        ? question.options[optionIndex]
        : undefined;

    if (typeof selectedOption === "string") {
      selectAnswer(selectedOption);
    }
  }
}

function toggleLanguage() {
  if (isLanguageSwitchLocked()) return;

  appState.language = appState.language === "ru" ? "uz" : "ru";
  updateUI();

  if (DOM.detailModal.classList.contains("active")) {
    const currentChar = DOM.modalKanji.textContent;
    const idx = kanjiIndexMap.get(currentChar);
    if (idx !== undefined) {
      showKanjiDetail(idx, appState.isReferenceModal);
    }
  }

  if (appState.currentScreen === "results") {
    showResults();
  }
}

function updateUI() {
  const texts = uiTexts[appState.language];
  document.title = texts.appTitle;
  DOM.langSwitch.textContent = appState.language === "ru" ? "UZ" : "RU";
  DOM.langSwitch.disabled = isLanguageSwitchLocked();

  DOM.appTitle.setAttribute("data-text", texts.appTitle);

  const ids = {
    appTitle: texts.appTitle,
    welcomeTitle: texts.welcomeTitle,
    welcomeText: texts.welcomeText,
    refBtnText: texts.refBtn,
    quizBtnText: texts.quizBtn,
    refBackBtn: texts.backBtn,
    configBackBtn: texts.backBtn,
    quizBackBtn: texts.exitBtn,
    modeTitle: texts.modeTitle,
    countTitle: texts.countTitle,
    modeReadingText: texts.modeReading,
    modeMeaningText: texts.modeMeaning,
    modeMixedText: texts.modeMixed,
    vocabLabel: texts.vocabTitle,
    grammarLabel: texts.grammarTitle,
    meaningLabel: texts.meaningLabel,
    sentenceLabel: texts.sentenceLabel,
    nextBtnText: texts.nextBtn,
    closeBtnText: texts.closeBtn,
    restartBtn: texts.restartBtn,
    resultsLabel: texts.resultsLabel,
    mistakesTitle: texts.mistakesTitle,
  };

  for (const [id, text] of Object.entries(ids)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  const startBtnSpan = DOM.startBtn.querySelector("span");
  if (startBtnSpan) startBtnSpan.textContent = texts.startBtn;

  renderCountSelector();
}

function showScreen(screenName) {
  if (appState.currentScreen === "quiz" && screenName !== "quiz") {
    clearTimer();
  }

  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.add("hidden"));

  if (screenMap[screenName]) {
    document.getElementById(screenMap[screenName]).classList.remove("hidden");
    appState.currentScreen = screenName;
    DOM.langSwitch.disabled = isLanguageSwitchLocked();
  }
}

function generateKanjiGrid() {
  const grid = DOM.kanjiGrid;
  const fragment = document.createDocumentFragment();
  grid.innerHTML = "";

  kanjiDataList.forEach((kanji, index) => {
    const item = document.createElement("button");
    item.className = "kanji-item";
    item.type = "button";
    item.dataset.kanjiIndex = String(index);
    item.setAttribute("aria-label", kanji.char);
    item.textContent = kanji.char;
    fragment.appendChild(item);
  });

  grid.appendChild(fragment);
}

function generateRubyHTML(rubyData) {
  if (!rubyData || !Array.isArray(rubyData)) return "";

  return rubyData
    .map((item) => {
      if (!item) return "";
      if (item.kanji && item.reading) {
        return `<ruby>${escapeHTML(item.kanji)}<rt>${escapeHTML(
          item.reading,
        )}</rt></ruby>`;
      }
      return escapeHTML(item.text || "");
    })
    .join("");
}

function escapeHTML(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function clearTimer() {
  if (appState.timerInterval) {
    clearInterval(appState.timerInterval);
    appState.timerInterval = null;
  }
}

function clearModalHideTimer() {
  if (appState.modalHideTimer) {
    clearTimeout(appState.modalHideTimer);
    appState.modalHideTimer = null;
  }
}

function openModal() {
  clearModalHideTimer();
  const modal = DOM.detailModal;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");

  requestAnimationFrame(() => {
    modal.classList.add("active");
  });
}

function hideModal(immediate = false) {
  clearModalHideTimer();

  const modal = DOM.detailModal;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");

  if (immediate) {
    modal.hidden = true;
    return;
  }

  appState.modalHideTimer = window.setTimeout(() => {
    if (!modal.classList.contains("active")) {
      modal.hidden = true;
    }
    appState.modalHideTimer = null;
  }, MODAL_TRANSITION_MS);
}

function showKanjiDetail(kanjiIndex, isReference = false) {
  const kanji = kanjiDataList[kanjiIndex];
  if (!kanji) return;

  const lang = appState.language;
  const modalContent = DOM.detailModalContent;
  appState.isReferenceModal = isReference;

  DOM.modalKanji.textContent = kanji.char;
  DOM.modalOnyomi.textContent = kanji.onyomi || "—";
  DOM.modalKunyomi.textContent = kanji.kunyomi || "—";
  DOM.modalMeaning.textContent = kanji.meanings[lang] || "";

  const wordsContainer = DOM.modalWords;
  wordsContainer.innerHTML = "";

  if (kanji.words && kanji.words.length > 0) {
    const fragment = document.createDocumentFragment();
    kanji.words.forEach((word) => {
      const chip = document.createElement("div");
      chip.className = "word-chip";
      const meaning = lang === "ru" ? word.mean_ru : word.mean_uz;
      chip.innerHTML = `<span class="word-kanji"><ruby>${escapeHTML(
        word.kanji,
      )}<rt>${escapeHTML(
        word.kana,
      )}</rt></ruby></span><span class="word-meaning">${escapeHTML(
        meaning,
      )}</span>`;
      fragment.appendChild(chip);
    });
    wordsContainer.appendChild(fragment);
  } else {
    wordsContainer.innerHTML = `<div style="color:var(--ink-light); font-size:0.9rem;">—</div>`;
  }

  if (kanji.sentence) {
    DOM.modalSentenceRuby.innerHTML = generateRubyHTML(kanji.sentence.rubyData);
    DOM.modalSentenceTranslation.textContent =
      kanji.sentence.translation?.[lang] || "";

    const grammarCard = DOM.modalGrammar.closest(".grammar-card");
    if (kanji.sentence.grammarPoint?.[lang]) {
      DOM.modalGrammar.innerHTML = sanitizeRichText(
        kanji.sentence.grammarPoint[lang],
      );
      grammarCard.classList.remove("hidden");
    } else {
      grammarCard.classList.add("hidden");
    }
  } else {
    DOM.modalSentenceRuby.innerHTML = "";
    DOM.modalSentenceTranslation.textContent = "";
    DOM.modalGrammar.closest(".grammar-card").classList.add("hidden");
  }

  const badge = DOM.resultBadge;
  const nextBtn = DOM.nextBtn;
  const closeBtn = DOM.closeRefBtn;
  const closeModalBtn = DOM.closeModalBtn;

  if (isReference) {
    badge.classList.add("hidden");
    nextBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    closeModalBtn.classList.remove("hidden");
    closeModalBtn.disabled = false;
    clearTimer();
    nextBtn.disabled = false;
  } else {
    badge.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
    closeModalBtn.classList.add("hidden");
    closeModalBtn.disabled = true;

    clearTimer();
    nextBtn.disabled = true;
    let timeLeft = 3;
    const originalText = uiTexts[appState.language].nextBtn;
    const nextBtnSpan = nextBtn.querySelector("span");

    nextBtnSpan.textContent = `${originalText} (${timeLeft})`;

    appState.timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft > 0) {
        nextBtnSpan.textContent = `${originalText} (${timeLeft})`;
      } else {
        clearTimer();
        nextBtn.disabled = false;
        nextBtnSpan.textContent = originalText;
      }
    }, 1000);
  }

  modalContent.scrollTop = 0;
  openModal();
  requestAnimationFrame(() => {
    modalContent.scrollTop = 0;
  });
}

function closeModal(force = false) {
  if (!appState.isReferenceModal && !force) return;

  hideModal(force);
  clearTimer();
  appState.isAnswering = false;
  appState.isReferenceModal = false;
}

function selectMode(element) {
  document.querySelectorAll(".mode-option").forEach((opt) => {
    opt.classList.remove("selected");
    opt.setAttribute("aria-pressed", "false");
  });
  element.classList.add("selected");
  element.setAttribute("aria-pressed", "true");
  appState.quizMode = element.dataset.mode;
}

function renderCountSelector() {
  const container = DOM.countGrid;
  container.innerHTML = "";
  const counts = [15, 30, 60, "all"];
  const texts = uiTexts[appState.language];

  const fragment = document.createDocumentFragment();

  counts.forEach((count) => {
    const btn = document.createElement("button");
    btn.className = "count-btn";
    btn.type = "button";
    btn.dataset.count = String(count);

    if (count === "all") {
      btn.textContent = texts.countAll;
    } else {
      btn.textContent = count;
    }

    if (String(count) === String(appState.quizCount)) {
      btn.classList.add("selected");
      btn.setAttribute("aria-pressed", "true");
    } else {
      btn.setAttribute("aria-pressed", "false");
    }

    fragment.appendChild(btn);
  });

  container.appendChild(fragment);
}

function selectCountValue(value) {
  const normalizedValue = value === "all" ? "all" : Number(value);
  if (normalizedValue !== "all" && !Number.isFinite(normalizedValue)) return;

  appState.quizCount = normalizedValue;

  document.querySelectorAll(".count-btn").forEach((btn) => {
    const isSelected = btn.dataset.count === String(value);
    btn.classList.toggle("selected", isSelected);
    btn.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });
}

function startQuiz() {
  appState.currentQuestionIndex = 0;
  appState.score = 0;
  appState.isAnswering = false;
  appState.questions = generateQuestions();

  if (appState.questions.length === 0) {
    alert(uiTexts[appState.language].insufficientQuestions);
    return;
  }

  showScreen("quiz");
  showQuestion();
}

function generateQuestions() {
  const questions = [];
  const shuffledKanji = fisherYatesShuffle(kanjiDataList);
  const maxCount =
    appState.quizCount === "all"
      ? shuffledKanji.length
      : Math.min(appState.quizCount, shuffledKanji.length);

  for (const kanji of shuffledKanji) {
    if (questions.length >= maxCount) break;

    let targetType = appState.quizMode;

    if (targetType === "mixed") {
      targetType = getSecureRandom() < 0.5 ? "reading" : "meaning";
    }

    let questionSubtype = "meaning";
    let answerVal = "";

    if (targetType === "reading") {
      const hasOn = isValidAnswerValue(kanji.onyomi);
      const hasKun = isValidAnswerValue(kanji.kunyomi);

      if (hasOn && hasKun) {
        questionSubtype = getSecureRandom() < 0.5 ? "onyomi" : "kunyomi";
      } else if (hasOn) {
        questionSubtype = "onyomi";
      } else if (hasKun) {
        questionSubtype = "kunyomi";
      } else {
        targetType = "meaning";
        questionSubtype = "meaning";
      }

      if (targetType === "reading") {
        answerVal = getAnswerValue(kanji, questionSubtype);
      }
    }

    if (targetType === "meaning" || questionSubtype === "meaning") {
      questionSubtype = "meaning";
      answerVal = getAnswerValue(kanji, questionSubtype);
    }

    if (!isValidAnswerValue(answerVal)) continue;

    const options = generateOptions(kanji, questionSubtype);

    if (options.length < 2) continue;

    questions.push({
      kanji,
      kanjiIndex: kanjiIndexMap.get(kanji.char),
      type: targetType,
      subtype: questionSubtype,
      options,
      correctAnswer: answerVal,
      userAnswer: null,
      isCorrect: false,
    });
  }

  return questions;
}

function generateOptions(correctKanji, subtype) {
  const options = new Set();
  const lang = appState.language;

  const correctVal = getAnswerValue(correctKanji, subtype, lang);

  if (!isValidAnswerValue(correctVal)) return [];

  options.add(correctVal);

  const otherKanji = kanjiDataList.filter((k) => k.char !== correctKanji.char);
  const shuffledOthers = fisherYatesShuffle(otherKanji);

  for (const distractorKanji of shuffledOthers) {
    if (options.size >= 4) break;

    let distractorVal = "";

    if (subtype === "onyomi") {
      distractorVal = distractorKanji.onyomi;
    } else if (subtype === "kunyomi") {
      distractorVal = distractorKanji.kunyomi;
    } else {
      distractorVal = distractorKanji.meanings[lang];
    }

    if (isValidAnswerValue(distractorVal) && !options.has(distractorVal)) {
      options.add(distractorVal);
    }
  }

  return fisherYatesShuffle([...options]);
}

function showQuestion() {
  const question = appState.questions[appState.currentQuestionIndex];
  if (!question) {
    showResults();
    return;
  }

  const texts = uiTexts[appState.language];
  const progress =
    ((appState.currentQuestionIndex + 1) / appState.questions.length) * 100;

  DOM.progressFill.style.width = `${progress}%`;
  DOM.progressText.textContent = `${
    appState.currentQuestionIndex + 1
  } / ${appState.questions.length}`;
  DOM.scoreText.textContent = appState.score;

  let typeLabel = "";
  if (question.subtype === "onyomi") {
    typeLabel = texts.questionOnyomi;
  } else if (question.subtype === "kunyomi") {
    typeLabel = texts.questionKunyomi;
  } else {
    typeLabel = texts.questionMeaning;
  }

  DOM.questionType.textContent = typeLabel;
  DOM.questionKanji.textContent = question.kanji.char;

  const optionsGrid = DOM.optionsGrid;
  optionsGrid.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  const fragment = document.createDocumentFragment();

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.dataset.optionIndex = String(index);
    btn.innerHTML = `<span class="option-letter">${
      letters[index]
    }</span><span>${escapeHTML(option)}</span>`;
    fragment.appendChild(btn);
  });

  optionsGrid.appendChild(fragment);
  appState.isAnswering = false;
}

function selectAnswer(selectedOption) {
  if (appState.isAnswering) return;
  appState.isAnswering = true;

  const buttons = DOM.optionsGrid.querySelectorAll(".option-btn");
  buttons.forEach((btn) => (btn.disabled = true));

  const question = appState.questions[appState.currentQuestionIndex];
  const isCorrect = selectedOption === question.correctAnswer;
  const texts = uiTexts[appState.language];

  question.userAnswer = selectedOption;
  question.isCorrect = isCorrect;

  if (isCorrect) appState.score++;

  const badge = DOM.resultBadge;
  const badgeText = DOM.resultBadgeText;
  const badgeIcon = badge.querySelector("i");

  badge.className = `result-badge ${isCorrect ? "correct" : "incorrect"}`;
  badgeText.textContent = isCorrect ? texts.correct : texts.incorrect;
  badgeIcon.className = isCorrect ? "fas fa-check" : "fas fa-times";

  showKanjiDetail(question.kanjiIndex, false);
}

function nextQuestion() {
  closeModal(true);
  appState.currentQuestionIndex++;

  if (appState.currentQuestionIndex >= appState.questions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  const texts = uiTexts[appState.language];
  const total = appState.questions.length;
  const correct = appState.score;
  const percentage = total > 0 ? (correct / total) * 100 : 0;

  document.getElementById("correctCount").textContent = correct;
  document.getElementById("totalCount").textContent = total;

  let emoji, message;
  if (percentage >= 90) {
    emoji = "🏆";
    message = texts.excellentResult;
  } else if (percentage >= 70) {
    emoji = "🎉";
    message = texts.goodResult;
  } else if (percentage >= 50) {
    emoji = "👍";
    message = texts.okResult;
  } else {
    emoji = "📚";
    message = texts.needPractice;
  }

  document.getElementById("resultsEmoji").textContent = emoji;
  document.getElementById("resultsMessage").textContent = message;
  document.getElementById("resultsLabel").textContent = texts.resultsLabel;

  const mistakesContainer = document.getElementById("mistakesList");
  const mistakesTitle = document.getElementById("mistakesTitle");
  mistakesContainer.innerHTML = "";

  const incorrectQuestions = appState.questions.filter((q) => !q.isCorrect);

  if (incorrectQuestions.length > 0) {
    mistakesTitle.textContent = texts.mistakesTitle;
    mistakesTitle.classList.remove("hidden");
    mistakesContainer.classList.remove("hidden");

    const fragment = document.createDocumentFragment();

    incorrectQuestions.forEach((q) => {
      const item = document.createElement("div");
      item.className = "mistake-item";

      let typeLabel = "";
      if (q.subtype === "onyomi") typeLabel = texts.onyomiLabel;
      else if (q.subtype === "kunyomi") typeLabel = texts.kunyomiLabel;
      else typeLabel = texts.meaningLabel.toUpperCase();

      item.innerHTML = `
              <div class="mistake-kanji">${escapeHTML(q.kanji.char)}</div>
              <div class="mistake-details">
                <div class="mistake-label">${escapeHTML(typeLabel)}</div>
                <div class="mistake-row">
                  <span class="val-incorrect">${escapeHTML(q.userAnswer)}</span>
                  <span class="val-correct">${escapeHTML(
                    q.correctAnswer,
                  )}</span>
                </div>
              </div>
            `;
      fragment.appendChild(item);
    });

    mistakesContainer.appendChild(fragment);
  } else {
    mistakesTitle.classList.add("hidden");
    mistakesContainer.classList.add("hidden");
  }

  showScreen("results");
}

function resetQuizState() {
  clearTimer();
  clearModalHideTimer();
  appState.currentQuestionIndex = 0;
  appState.score = 0;
  appState.questions = [];
  appState.isAnswering = false;
  appState.isReferenceModal = false;
}

function returnToHome() {
  closeModal(true);
  resetQuizState();
  showScreen("home");
}

function confirmExit() {
  const texts = uiTexts[appState.language];
  if (confirm(texts.exitConfirm)) {
    returnToHome();
  }
}

window.addEventListener("beforeunload", () => {
  clearTimer();
  clearModalHideTimer();
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
