// список всех кинотеатров

var allCinemas =
[
	["350", "Иллюзион", "Котельническая наб., 1/15", "55.747955461031", "37.6449154100646"],
	["363", "Олимп-Кинодом", "Латвийская, 19, КСК «Олимп»", "56.788664", "60.775361"],
	["65588", "Летний кинотеатр на ВДНХ", "просп. Мира, 119, ВДНХ, за павильоном 62", "55.835204", "37.6276800000001"],
	["2889", "Музеон", "Крымский Вал, 2, парк искусств «Музеон»", "55.73722469", "37.60979449"],
	["328", "Формула Кино Европа", "пл. Киевского Вокзала, 2, ТРЦ «Европейский»", "55.7446", "37.566102"],
	["2828", "Формула Кино Чертаново", "мкр. Северное Чертаново, 1а, стр. 2", "55.6357361790542", "37.5982618331909"],
	["5450", "Формула Кино Oz", "Крылатая, 2, ТЦ «Oz-молл»", "45.0105989854218", "39.121925"],
	["568", "Формула Кино Заневский Каскад", "Заневский просп., 67, корп. 2, ТЦ «Заневский Каскад»", "59.9328578652274", "30.4377339183814"],
	["405", "Формула Кино Академ Парк", "Гражданский просп., 41, ТК «Академ Парк»", "60.011519", "30.3980329999999"],
	["918", "Кронверк Синема Лефортово", "ш. Энтузиастов, 12, корп. 2, ТК «Город Лефортово»", "55.747409", "37.70713"],
	["385", "Формула Кино Меркурий", "Савушкина, 141", "59.9918826509127", "30.2062439918518"],
	["2824", "Формула Кино Аура", "Военная, 5", "55.0286318", "82.9399059"],
	["13812", "Формула Кино Виктория плаза", "Первомайский просп., 70, корп. 1, ТРЦ «Виктория плаза»", "54.6302849524325", "39.7105303042297"],
	["44184", "Формула Кино IMAX", "ДОЗ, 10а, ТРЦ «Планета»", "53.7829275296905", "87.1295281994751"],
	["286", "5 звезд на Павелецкой", "Бахрушина, 25", "55.7329938540724", "37.637381583481"],
	["13835", "5 звезд Кострома", "пос. Караваево, Красносельское ш., 1, ТРЦ «Коллаж»", "57.7358429225705", "41.0719866455078"],
	["13808", "5 звезд Рязань", "Московское ш., 65а, ТРЦ «M5-молл»", "54.650588439873", "39.6364151268918"],
	["909", "Люксор (Балашиха)", "просп. Ленина, 25", "55.7977951229544", "37.9384928047977"],
	["1874", "Люксор Vegas", "24-й км МКАД, пересечение с Каширским ш., ТРЦ Vegas", "55.584973", "37.724218"],
	["795", "Люксор (Воскресенск)", "пл. Ленина, 5, «Воскресенск»", "55.3165941976", "38.6835050582885"],
	["900", "Люксор (Клин)", "Советская пл., 5/7", "56.3355252195405", "36.7341613769531"],
	["227", "Люксор в Митино", "Дубравная, 34/29, ТРЦ «Ладья»", "55.84641", "37.35785"],
	["579", "Люксор (Сергиев Посад)", "Вознесенская, 32а, ТРЦ «Счастливая семья»", "56.303786", "38.133152"],
	["890", "Люксор Центр", "просп. Мира, 211, ТРЦ «Золотой Вавилон»", "55.845401280037", "37.6670734497681"],
	["353", "Люксор в Отрадном", "Декабристов, 12, «Золотой Вавилон»", "55.8631785280202", "37.6019206345366"],
	["13810", "Люксор Барс", "Московское ш., 5а, ТЦ «Барс»", "54.6318847521243", "39.6983425423279"],
	["13811", "Люксор Круиз", "Солотчинское ш., 11, ТЦ «Круиз»", "54.6329399958356", "39.773161"],
	["17028", "Люксор Континент", "Бухарестская, 30/32, ТРК «Континент»", "59.8830695425025", "30.3704595565795"],
	["17344", "Люксор Европа", "Студенческая, 1, ТРЦ «Европа»", "51.741683", "36.145765"],
	["17618", "Люксор Аэропарк", "Объездная, 30", "53.275579", "34.316833"],
	["39835", "Люксор Весна", "84-й км МКАД, пересечение с Алтуфьевским ш., ТРЦ «Весна»", "55.9128641444399", "37.5856764259338"],
	["55839", "Люксор Галерея Новосибирск", "Гоголя, 13, ТРЦ «Галерея Новосибирск»", "55.0438593281389", "82.9217019619018"],
	["903", "Киносити Новосибирск", "Фрунзе, 238, ТЦ «Сибирский молл»", "55.0392129960987", "82.960746"],
	["2843", "Большой", "Красноармейская, 105, ТЦ «Вавилон»", "47.2314848066407", "39.7261700928719"],
	["1821", "Синема Стар Рио на Академической", "Б.Черемушкинская, 1, ТРЦ «Рио»", "55.6903729982473", "37.601738"],
	["13745", "Киносити Тула", "Советская, 47, ТЦ «Гостиный Двор»", "54.1920414638747", "37.6191339791107"],
	["393", "Мори Синема", "Индустриальный просп., 24, литера А, ТРЦ «Июнь»", "59.946232770043", "30.4742420017254"],
	["14146", "Мори Синема", "Партизана Железняка, 23, ТРЦ «Июнь»", "56.037251097801", "92.9351304920654"],
	["359", "Высота", "Юных Ленинцев, 52", "55.699789", "37.765485"],
	["572", "Монитор Европа", "Красных Партизан, 4/1", "45.0690741", "38.9057816"],
	["459", "Монитор на Красной площади", "Дзержинского, 100, ТРЦ «Красная площадь», восточное крыло", "45.101865", "38.983595"],
	["458", "Монитор СБС", "Уральская, 79/1, ТРК SBS Megamall", "45.033483", "39.05025"],
	["17020", "Великан Парк", "Александровский парк, 4/3", "59.9556", "30.312403"],
	["361", "Титаник Синема", "8 Марта, 46, ТРЦ «Гринвич»", "56.8290309903338", "60.5990282857056"],
	["593", "Кино на Алтуфьевском", "Алтуфьевское ш., 8, ТРЦ «Алтуфьевский»", "55.8529850301203", "37.5856299698636"],
	["41174", "Каро Vegas 22", "66-й км МКАД, пересечение с Волоколамским ш., ТРЦ «Vegas Крокус-сити»", "55.8211471442678", "37.3874569153443"],
	["809", "Каро 7 Атмосфера", "Комендантская пл., 1, ТРК «Атмосфера»", "60.0076211119492", "30.2597725688923"],
	["384", "Каро 9 Варшавский экспресс", "наб. Обводного канала, 118, РТК «Варшавский экспресс»", "59.9074554408048", "30.3072620714417"],
	["407", "Каро 7 на Стачек", "просп. Стачек, 99а, ТРК «Континент»", "59.858765516871", "30.2482151985168"],
	["282", "Каро 7 Киргизия", "Зеленый просп., 81", "55.751789", "37.820391"],
	["264", "Каро 8 на Вернадского", "просп. Вернадского, 6, ТЦ «Капитолий Вернадского»", "55.6918487176225", "37.5281341374198"],
	["1907", "Каро 11 Октябрь", "Н.Арбат, 24", "55.7530988415255", "37.5874672830388"],
	["292", "Каро 10 Щука", "Щукинская, 42, ТРК «Щука»", "55.809544", "37.464749"],
	["298", "Каро 9 Атриум", "Земляной Вал, 33, ТРК «Атриум»", "55.757223", "37.658958"],
	["44397", "Каро Sky 17 Авиапарк", "Ходынский б-р, 4, ТРЦ «Авиапарк»", "55.7903499123085", "37.5310685423278"],
	["366", "Салют", "Толмачева, 12", "56.838258", "60.61024"],
	["18161", "Киномакс–Акварель", "Студенецкая наб., 20а, ТРЦ «Акварель»", "52.7282177079656", "41.4420432595246"],
	["17592", "Мори Синема", "Ярцевская, 19, МФК «Кунцево-плаза»", "55.7384768", "37.4106011"],
	["59020", "Киноквартал", "Новоясеневский просп., 7, ТЦ «Калита»", "55.6074369", "37.5326"],
	["874", "Звездный", "Декабрьских Событий, 102, «Звездный»", "52.279925", "104.313934"],
	["17206", "Киноквартал", "3 июля, 25", "52.2724267", "104.2901871"],
	["14196", "Россия", "Карла Маркса, 242", "56.8517879683107", "53.2053094920654"],
	["64496", "Prada 3D Академический", "Краснолесья, 133, ТРЦ «Академический», 4 этаж", "56.7931406942178", "60.5207741260528"],
	["921", "Prada 3D Фанфан", "Ясная, 2, ТРЦ «Фанфан»", "56.8162499773868", "60.5860539656067"],
	["66218", "Cinema De Lux (Нягань)", "Ленина, 28, ТЦ Oasis Plaza", "62.148332", "65.4351"],
	["233", "Родина", "Семеновская пл., 5", "55.781585", "37.717861"],
	["56600", "Космик Сергиев-Посад", "Новоугличское ш., 85, ТЦ «Капитолий»", "56.339816", "38.124635"],
	["15737", "Синема 5", "Кольцевая, 65/1, ТЦ «Меркурий»", "54.822265", "56.08548"],
	["46122", "Летний Пионер в Парке Сокольники", "Митьковский пр., 10", "55.797827", "37.669405"],
	["44494", "Кино Max", "просп. Карла Маркса, 47–49, ТЦ «Европейский»", "45.0504576702716", "41.9859910693115"],
	["17663", "Олимпик Синема", "5-я Кабельная, 2, стр. 1, ТРК «Спорт Ex»", "55.737717", "37.716944"],
	["2876", "Вавилон", "Лермонтова, 2", "54.981061", "73.371536"],
	["445", "Grand Cinema", "Спартаковская, 6, ТРЦ Suvar Plaza", "55.778593", "49.129411"],
	["5457", "Кинофрэш", "Шарлыкское ш., 1, ТРК «Армада»", "51.8436111930027", "55.1174171693115"],
	["17699", "Космик Аннино", "Варшавское ш., 160, ТРЦ «Галерея Атлантис»", "55.5830121280226", "37.5953712042298"],
	["18037", "Империя грез Сигма", "Широкий пер., 53, ТЦ «Сигма»", "56.8580698", "53.2110198"],
	["17561", "Мори Синема", "Землячки, 110б, ТРЦ «Комсомолл»", "48.743869", "44.519543"],
	["17444", "Волжский", "просп. Максима Горького, 10, стр. 1, ТРЦ «Волжский»", "56.14973", "47.197322"],
	["2907", "Монитор на Красной площади (Анапа)", "Астраханская, 99, ТРЦ «Красная площадь»", "44.8846432547912", "37.3231554329651"],
	["14066", "Мори Синема (Мытищи)", "Мира, 51, ТРЦ «Июнь»", "55.9199092952377", "37.7084542380982"],
	["2879", "Мори Синема (Красногорск)", "Знаменская, 5, ТРЦ «Июнь»", "55.8187803655971", "37.3474262058993"],
	["14265", "Мори Синема (Череповец)", "Годовикова, 37, ТРЦ «Июнь»", "59.0940826292176", "37.9236427962952"],
	["5377", "Балтика", "Сходненская, 56, ТРЦ «Калейдоскоп»", "55.850661", "37.444295"],
	["13749", "Чарли Россия", "просп. Ленина, 25, ТРК «Россия»", "44.2233523219961", "42.0474494166413"],
	["63674", "Синема Парк Ривьера", "Автозаводская, 18, ТРЦ «Ривьера»", "55.705072", "37.639383"],
	["244", "Алмаз Синема Алмаз", "Шаболовка, 56", "55.7123179965074", "37.605862"],
	["509", "Чарли Вавилон", "просп. Космонавтов, 2/2, «Вавилон»", "47.2812254438946", "39.7180089709168"],
	["15793", "Синема Парк Европа", "Профессора Баранова, 40", "54.718657", "20.498988"],
	["51301", "Синема Парк Галерея Енисей", "Дубровинского, 1г, стр. 2, ТРЦ «Галерея Енисей»", "56.009325", "92.888962"],
	["59426", "Синема Парк Тау-галерея", "просп. 50 Лет Октября, 89в, ТРЦ «Тау-галерея»", "51.5753303", "45.9749534"],
	["59591", "Синема Парк Космос", "Доваторцев, 75а, ТРЦ «Космос»", "44.997445", "41.92309"],
	["14189", "Кронверк Синема Макси", "Октябрьский просп., 141, ТРЦ «Макси»", "61.7178923112156", "50.7929459030459"],
	["17340", "Формула Кино Жемчужина", "Петергофское ш., 51, ТРЦ «Жемчужная плаза»", "59.8470586", "30.1412911"],
	["17635", "Формула Кино Лондон-молл", "Коллонтай, 3, ТРЦ «Лондон-молл»", "59.912895", "30.44679"],
	["5465", "Киномакс", "Холмогорова, 11", "56.8760167652535", "53.2093578766917"],
	["5466", "Киномакс", "Горького, 5а, ТРЦ Jam Moll", "58.5985530017117", "49.6478353386231"],
	["5467", "Киномакс–Планета", "9 Мая, 77, ТРК «Планета»", "56.0505398648758", "92.9031259090537"],
	["834", "Киномакс 3D–Мегаполис", "8 Марта, 149, «Мегаполис»", "56.8068932747025", "60.6122706613769"],
	["511", "Киномакс–Дон", "просп. Михаила Нагибина, 32/2", "47.2598566934089", "39.7201533703614"],
	["5470", "Киномакс IMAX", "Московское ш., 21, ТРЦ «Премьер»", "54.6343483205835", "39.6888794605107"],
	["13903", "Киномакс (Волжский)", "Александрова, 18а, «Волга-молл»", "48.7718306671321", "44.7997937501519"],
	["17772", "Киномакс", "Энтузиастов, 20, ТРЦ «Планета»", "54.7580975961617", "56.0359259617462"],
	["40061", "Киномакс–Аура", "Свободы, 46а, ТРЦ «Аура»", "57.627768001608", "39.8709836513428"],
	["801", "Кронверк Синема Мегаплекс", "Троллейная 130а, «Континент-3»", "54.966267", "82.85293"],
	["411", "Формула Кино Норд", "просп. Просвещения, 19", "60.0525027691509", "30.3318786621093"],
	["2840", "Кронверк Синема Семеновский", "Семеновская пл., 1, ТРЦ «Семеновский»", "55.782142", "37.716304"],
	["1909", "Кронверк Синема Вэйпарк", "71-й км МКАД, ТРЦ «Вэйпарк»", "55.858706998296", "37.397397"],
	["247", "Формула Кино Горизонт", "Комсомольский просп., 21/10", "55.728277", "37.584486"],
	["1881", "Формула Кино Галерея", "Лиговский просп., 30а, «Галерея»", "59.9276032041383", "30.3596019744873"],
	["289", "Формула Кино на Можайке", "53-й км МКАД, напротив гипермаркета «Ашан Марфино»", "55.7058041577479", "37.3888743651123"],
	["46104", "Киномакс-Мозаика", "7-я Кожуховская, 9, ТРК «Мозаика»", "55.710639", "37.674466"],
	["1859", "Синема Парк Галерея Арт", "Чернышевского, 75, «Галерея Арт»", "54.7293237413855", "55.9464342894383"],
	["1828", "Синема Парк на Калужской", "Профсоюзная, 61а, «Калужский»", "55.65596684085", "37.5414486229698"],
	["1822", "Синема Парк на Октябрьском Поле", "Маршала Бирюзова, 32, ТРЦ «Пятая авеню»", "55.799847586129", "37.4830365479264"],
	["1808", "Синема Парк Гранд Каньон", "просп. Энгельса, 154, «Гранд Каньон»", "60.0580871652568", "30.3342328369137"],
	["1838", "Синема Парк", "Артиллерийская, 136, ТРЦ «Горки»", "55.1633884707768", "61.4303114715028"],
	["1827", "Синема Парк на Южной", "Кировоградская, 14, ТЦ «Глобал-сити»", "55.6226598024446", "37.6060147583769"],
	["793", "Синема Парк Ройял Парк", "Красный просп., 101", "55.0556016761838", "82.9118659799384"],
	["1854", "Синема Парк", "Революции, 13", "58.0072468077479", "56.2609114947183"],
	["1858", "Синема Парк Семья", "просп. Октября, 34, «Семья»", "54.7496648504845", "56.0001814665629"],
	["1861", "Синема Парк", "просп. имени В.И.Ленина, 54б, ТЦ «Европа Сити Молл»", "48.7257222739197", "44.5412760079922"],
	["858", "Синема Парк Фантастика", "Родионова, 187, ТЦ «Фантастика»", "56.3079349241295", "44.073509484626"],
	["1862", "Синема Парк Филион", "Багратионовский пр., 5, ТРЦ «Филион»", "55.743996", "37.508179"],
	["1869", "Синема Парк Старлайт", "Малышева, 5, «Алатырь»", "56.8323239146968", "60.5824630561192"],
	["2728", "Синема Парк Сан Сити", "Карла Маркса, 7", "54.9804050336873", "82.8978863065527"],
	["1884", "Синема Парк", "Кольцовская, 35, «Галерея Чижова»", "51.66593651418", "39.1916165650343"],
	["14097", "Синема Парк Гудвин", "Максима Горького, 70, ТРК «Гудвин»", "57.1489170047585", "65.5604687632294"],
	["13869", "Синема Парк", "просп. Мира, 3, ТРК «Торговый квартал»", "55.7247580427722", "52.381209661262"],
	["13815", "Синема Парк Мармелад", "Пошехонское ш., 22, ТРЦ «Мармелад»", "59.1970426719488", "39.8593389153442"],
	["2817", "Синема Парк Белгородский", "пос. Дубовое, Щорса, 64, МТРК «Сити-молл Белгородский»", "50.5524051919696", "36.5688730336516"],
	["13820", "Синема Парк Триумф", "Зарубина, 167, ТРК «Триумф-молл»", "51.5422649933967", "46.014303"],
	["413", "Синема Парк Радуга", "просп. Космонавтов, 14, «Питер-Радуга»", "59.869875904474", "30.3487704097746"],
	["1860", "Kinostar Дыбенко", "12-й км Мурманского ш., «Мега»", "59.8856417968827", "30.4943564235701"],
	["334", "Kinostar De Lux Теплый Стан", "41-й км МКАД, пересечение с Калужским ш., ТРК «Мега»", "55.606482441909", "37.4898321926866"],
	["863", "Синема Парк De Lux Метрополис", "Ленинградское ш., 16а, стр. 4, ТЦ «Метрополис»", "55.8232147685953", "37.4976663887774"],
	["295", "Kinostar De Lux (Химки)", "24-й км Ленинградского ш., ТРК «Мега»", "55.9106932139238", "37.396628648069"],
	["800", "Kinostar New York", "14-й км МКАД, пересечение с ул. Верхние Поля, ТЦ «Мега Белая Дача»", "55.6542748798214", "37.8448880017114"],
	["2868", "Синема Парк Седьмое небо", "Бетанкура, 1, ТРК «Седьмое небо»", "56.3380909672388", "43.9549043477535"],
	["5384", "Синема Парк Аквамолл", "Московское ш., 108, ТРЦ «Аквамолл»", "54.3057551638753", "48.3545527033151"],
	["5385", "Синема Парк Сити-молл", "Югорский тракт, 38, ТРЦ «Сити-молл»", "61.2547086439669", "73.3940202752077"],
	["43518", "Киномакс–Водный", "Головинское ш., 5, ТЦ «Водный»", "55.8401810925009", "37.4915099143981"],
	["1908", "Формула Кино на Рублевке", "Рублевское ш., 62, «Европарк»", "55.766737", "37.381029"],
	["256", "Формула Кино Витязь", "Миклухо-Маклая, 27а", "55.6474544207534", "37.5169139206685"],
	["14081", "Формула Кино Питерлэнд", "Приморский просп., 72, ТРЦ «Питерлэнд»", "59.9825621741446", "30.2201495656942"],
	["2858", "Формула Кино Сити-молл", "Коломяжский просп., 17, корп. 1, ТРК «Сити-молл»", "60.0049454035678", "30.3010753105895"],
	["792", "Кронверк Синема Облака", "Ореховый б-р, 22а, ТРК «Облака»", "55.6120821717267", "37.7325641492126"],
	["544", "Кронверк Синема Форум", "Кольский просп., 134", "68.9211149999143", "33.115531"],
	["2825", "Киномакс–Родник", "Труда, 203", "55.171051", "61.355985"],
	["451", "Киномакс–Тандем", "просп. Ибрагимова, 56", "55.821285", "49.09337"],
	["54351", "Формула Кино на Лубянке", "Театральный пр., 5/1, Центральный детский магазин", "55.7601567", "37.6246119"],
	["4073", "Люксор IMAX", "Новая Заря, 7, ТРЦ «Море-молл»", "43.6063709217965", "39.7323584855112"],
	["290", "Киносфера (Москва)", "Правобережная, 1б, ТЦ «Капитолий Ленинградский»", "55.881176", "37.450145"],
	["239", "5 звезд Бирюлево", "Бирюлевская, 17", "55.595521", "37.664182"],
	["263", "5 звезд (Щелково)", "пл. Ленина, 2а", "55.9213879949415", "37.991838"],
	["3967", "Рай Парк", "Красноармейская, 100, ТЦ «Мельница»", "53.2402849907755", "34.3466201190491"],
	["2847", "Киносити Оренбург", "Новая, 4, ТРК «Гулливер»", "51.8103925752647", "55.0925270343933"],
	["13959", "Чарли Боше (Старый Оскол)", "Микрорайон Ольминского, 17, ТРК «Боше»", "51.313232", "37.876883"],
	["17560", "Монитор на Красной площади (Армавир)", "Воровского, 69, МЦ «Красная площадь»", "44.9938068", "41.0776931"],
	["17436", "Мори Синема", "Октябрьский просп., 131/3, ТРЦ «Июнь»", "61.718579", "50.791756"],
	["1910", "Щелково (Щелково)", "Пролетарский просп., 10, «Щелково»", "55.9240629949437", "38.001333"],
	["2810", "Летний Пионер в Парке Горького", "Крымский Вал, 9", "55.7314060982593", "37.6034067"],
	["443", "3D Port Cinema", "просп. Фатыха Амирхана, 1, ГРК «Ривьера»", "55.8153372158467", "49.1273422883605"],
	["495", "Октябрь", "просп. Карла Маркса, 62", "45.0483609782188", "41.982091"],
	["2826", "Бульвар", "б-р Дмитрия Донского, 1, ТЦ «Северное сияние»", "55.5747420253393", "37.5798296928405"],
	["39916", "Чарли Мармелад (Таганрог)", "пл. Мира, 7, ТРЦ «Мармелад»", "47.2175314", "38.8993371"],
	["41132", "Мори Синема (Тольятти)", "Автозаводское ш., 6, ТЦ «Парк-хаус»", "53.541892", "49.390626"],
	["14848", "Каро 8 Аура", "Нефтеюганское ш., 1, ТРЦ «Аура»", "61.2772718873744", "73.3650745455551"],
	["14753", "Каро 9 на Звездной", "Звездная, 1, ТРК «Континент»", "59.8322320840307", "30.3472479153443"],
	["383", "Каро 5 на Дыбенко", "просп. Большевиков, 18, ТРК «Невский»", "59.9083457979987", "30.4825115925903"],
	["5458", "Роликс", "Автозаводская, 3а, ТРК «Столица»", "56.8733844294345", "53.2779001735357"],
	["1833", "Корстон", "Николая Ершова, 1а, Korston Club Hotel", "55.793905", "49.14938"],
	["844", "Чарли Сокол", "просп. Стачки, 25, «Сокол»", "47.210547", "39.672343"],
	["2729", "Формула Кино Сити", "Пресненская наб., 2, ТЦ «Афимолл-сити»", "55.7490729983334", "37.5396351878358"],
	["333", "Формула Кино на Мичуринском", "Мичуринский просп., Олимпийская деревня, 3, корп. 1, ТРЦ «Фестиваль»", "55.678102", "37.466997"],
	["46105", "Киномакс-Пражская", "Кировоградская, 13а, ТЦ Columbus", "55.611079", "37.606815"],
	["406", "Формула Кино Родео Драйв", "просп. Культуры, 1", "60.0363347001002", "30.3681206703186"],
	["307", "Алмаз Синема Солнцево", "Богданова, 19", "55.65279", "37.393314"],
	["13814", "Малина", "Соборная, 15а", "54.6301961677024", "39.7398631190491"],
	["1850", "Центрфильм на Щелковской", "Щелковское ш., 100, ТЦ «Щелково»", "55.8115250758912", "37.8306912883606"],
	["1903", "Центрфильм (Мытищи)", "Селезнева, 33, «Перловский»", "55.8920279949164", "37.727587"],
	["13798", "Корстон (Серпухов)", "Борисовское ш., 1", "54.9174637103098", "37.4259530978699"],
	["14297", "Россия", "Черняховского, 66", "58.5244056918028", "31.2613821029663"],
	["43664", "Киноформат (Орск)", "просп. Мира, 15г, ТРК «Европейский»", "51.230205", "58.490735"],
	["43281", "Центрфильм в Братеево", "Борисовские Пруды, влад. 26, корп. 2, ТРЦ «Браво»", "55.639037", "37.75918"],
	["1814", "Каро 4 Звездный", "просп. Вернадского, 14", "55.6769460340639", "37.5047548048935"],
	["518", "Седьмое небо", "Дуси Ковальчук, 179/4, «Калина центр»", "55.0604989037171", "82.9141941373634"],
	["519", "Аврора", "просп. Карла Маркса, 49", "54.9910982781003", "82.9083018605994"],
	["40754", "Монитор Максимум (Шахты)", "Красный Шахтер, 78, ТРЦ «Максимум»", "47.7068527524346", "40.2159099772461"],
	["59232", "Мадагаскар", "Волгоградская, 71, ТРЦ «Сити-парк»", "54.186143017019", "45.2173160692474"],
	["2884", "Кинополис", "г. Всеволожск, Октябрьский просп., 85", "60.0192117877619", "30.6477294265776"],
	["567", "Пик", "Ефимова, 2, ТРЦ «Пик»", "59.9263393381981", "30.3208063571472"],
	["245", "Формула Кино Прага", "Ниж.Масловка, 10", "55.792685", "37.577998"],
	["13870", "Иллюзиум", "просп. Хасана Туфана, 14", "55.7418197157617", "52.4141817977939"],
	["456", "Монитор Болгария", "Ставропольская, 236а", "45.017034", "39.036632"],
	["16713", "Монитор на Красной площади (Туапсе)", "Сочинская, 2, ТРЦ «Красная площадь»", "44.1009455909308", "39.0924619153443"],
	["16678", "Монитор на Красной площади (Новороссийск)", "Анапское ш., 2, ТРК «Красная площадь»", "44.7253023222389", "37.7629367547531"],
	["274", "Формула Кино Ладога", "Широкая, 12", "55.886585", "37.659464"],
	["16807", "Galaxy Star", "Чапаева, 27", "60.938913", "76.594784"],
	["404", "Формула Кино Нео", "Большой просп. В.О., 68, «Балтийский»", "59.9315813196196", "30.2593946456909"],
	["40039", "Кинополис Румба", "Васи Алексеева, 6, ТК «Румба»", "59.879881", "30.2656919999999"],
	["311", "Пионер", "Кутузовский проспект, 21", "55.7451258529324", "37.5499906428528"],
	["14170", "Надежда", "Северная, 39, гостиница «Надежда»", "60.9513479980366", "76.614744"],
	["268", "Каро 4 (Подольск)", "Б.Серпуховская, 45, ТЦ «Капитолий Подольск»", "55.420130313237", "37.5477830661316"],
	["2862", "Космос", "Парковый просп., 5а", "51.7705615534102", "55.0925262037048"],
	["17547", "Мир (Орск)", "просп. Ленина, 54", "51.238713", "58.471477"],
	["2796", "Галакс (Долгопрудный)", "Лихачевский просп., 64, ТДЦ «Конфитюр»", "55.9304055023097", "37.4942782223498"],
	["826", "Юность", "Комиссаржевской, 7", "51.670361", "39.204949"],
	["1883", "Максимир", "Ленинский просп., 174п", "51.697175", "39.272593"],
	["14177", "Cinema Club", "Красноармейская, 71, ТРЦ «Тимошковых»", "53.2398149971333", "34.345284"],
	["831", "Флинт", "Студеновская, 124а, «Липецк»", "52.626191", "39.642653"],
	["1915", "Октябрь", "Красноармейский просп., 14", "54.1977049955395", "37.6024"],
	["4154", "Октябрь (Руза)", "Гладышева, 12", "55.7029214", "36.2044805"],
	["14241", "Югра Cinema", "Ленина, 15/п", "60.940040998032", "76.546286"],
	["14181", "Русич", "просп. Ватутина, 8", "50.574437334838", "36.5823328650818"],
	["42799", "Планета кино", "Коммунистический просп., 11, ТРЦ «Панорама»", "51.958362", "85.959285"],
	["520", "Горизонт", "Бориса Богаткова, 266", "55.0423948851606", "82.9862575834091"],
	["14149", "Эпицентр", "просп. им. Газеты «Красноярский Рабочий», 173б", "55.9911890610672", "92.8956124576972"],
	["398", "Подвиг (Колпино)", "Павловская, 34", "59.7472433974891", "30.5817919"],
	["17011", "Комсомолец", "Сахалинская, 52", "46.964637", "142.728902"],
	["45583", "Кинопарк (Клинцы)", "Октябрьская, 5, ТРЦ «Московский»", "52.746409", "32.23712"],
	["574", "ДК «Россия» (Искитим)", "Юбилейный просп., 15", "54.6252232097923", "83.3013077085345"],
	["517", "Пионер", "Максима Горького, 52", "55.0266395742815", "82.91861441782"],
	["526", "Орион (Бердск)", "Островского, 69", "55.0519850215268", "82.9431405370524"],
	["42800", "Планета кино (Бийск)", "Советская, 205/2, ТРЦ «Ривьера»", "52.5129723", "85.175211"],
	["2838", "Космос (Новочеркасск)", "Баклановский просп., 120", "47.4223130477452", "40.0682416223754"],
	["17608", "Ретро (Лесной)", "Ленина, 41", "58.6347803715536", "59.783514427098"],
	["856", "Премьер-зал Заря", "Баумана, 2", "56.887187", "60.615072"],
	["830", "Малина-Москва", "Титова, 10, ТРЦ «Москва»", "52.617044", "39.556721"],
	["1842", "Империя грез Сормовский", "Коминтерна, 105", "56.3477989984316", "43.870934"],
	["43202", "Дея", "Кирова, 320, ТРЦ «Дея»", "43.502433", "43.620785"],
	["65187", "Ракета (Новоалтайск)", "Октябрьская, 36", "53.3975536", "83.9299774"],
	["285", "Баку", "Усиевича, 12/14", "55.806268", "37.528236"],
	["41034", "Премьер-зал Парк-хаус", "Сулимова, 50, молл «Парк-хаус»", "56.863556", "60.630858"],
	["2841", "Каро 8 Южное Бутово", "Веневская, 6, ТРЦ «Витте-молл»", "55.5479240689838", "37.5432014465332"],
	["49508", "Pushka", "Староватутинский пр., 14, ТРЦ «Клен»", "55.8754829225591", "37.6656718412475"],
	["911", "Малина-Водопьянова", "Водопьянова, 17а", "52.591252", "39.544117"],
	["17341", "Премьер-зал Гранат", "Амундсена, 63, эко-молл «Гранат»", "56.8063727", "60.5913724"],
	["5369", "Октябрь (Люберцы)", "Октябрьский просп., 198", "55.6771718543225", "37.8953371346312"],
	["14171", "Мир", "Мира, 76/1", "60.9348446036081", "76.606246767212"],
	["39754", "Кинотеатр им. Шевченко", "Горького, 5", "44.950032", "34.09835"],
	["453", "Сувар", "Хусаина Мавлютова, 45, ТК «Сити-центр»", "55.7444994784239", "49.1930286613769"],
	["1844", "Империя грез Октябрь", "Б.Покровская, 51а", "56.317223", "43.993922"],
	["1846", "Империя грез Электрон", "просп. Гагарина, 98", "56.274424", "43.978866"],
	["1843", "Империя грез Мир", "Героя Смирнова, 14а", "56.235355", "43.852357"],
	["56070", "Пассаж Синема", "Вайнера, 9а, ЦУ «Пассаж»", "56.8362864", "60.5951419"],
	["365", "Премьер-зал Юго-Западный", "Академика Бардина, 28, Дом науки и техники", "56.803859", "60.566045"],
	["14180", "Победа", "50-летия Белгородской области, 8б", "50.598648044682", "36.5864147460327"],
	["1917", "Азовский", "Азовская, 24, стр. 3, ТРЦ «Азовский»", "55.6474689817815", "37.5954833329008"],
	["1801", "Премьер-зал Знамя", "Кировградская, 11", "56.8917839985729", "60.592651"],
	["2732", "Люксор", "б-р Победы, 23б", "51.710833", "39.159854"],
	["937", "Люксор Капитолий (Орехово-Зуево)", "Якова Флиера, 4, ТЦ «Капитолий Орехово-Зуево»", "55.8046457291543", "38.9742565155029"],
	["1877", "Люксор (Жуковский)", "Баженова, 2а, ТРЦ «Авиатор»", "55.6045829740945", "38.0813215077258"],
	["54646", "Мега Синема (Ангарск)", "13-й микрорайон, 33, ТЦ «Мега»", "52.519881", "103.864201"],
	["17010", "Октябрь", "Коммунистический просп., 45", "46.957922", "142.732934"],
	["13930", "Пилот (Гатчина)", "Генерала Кныша, 2а, ТК «Пилот»", "59.563582", "30.093125"],
	["329", "Люксор в Ясенево", "Новоясеневский просп., 11, «Золотой Вавилон»", "55.606554", "37.535906"],
	["45299", "Олимп (Кириши)", "просп. Героев, 33, ТРЦ «Кириши-плаза»", "59.444464228157", "32.0387077331542"],
	["522", "Рассвет", "Рихарда Зорге, 47/2", "54.9348669980162", "82.9138"],
	["44601", "Cinema Public (Кольцово)", "пос. Кольцово, 19", "54.940604192262", "83.1876566680146"],
	["17377", "Verba Cinema (Октябрьский)", "г. Октябрьский, Ленина, 59/1", "54.4666667", "53.4666667"],
	["13752", "Синема Компани Весна (Лыткарино)", "Парковая, 2, ТРЦ «Весна»", "55.582497035965", "37.9121621666564"],
	["13952", "Stars Cinema", "Интернациональная, 73, ТЦ «Подсолнух»", "60.9442739986892", "76.634506"],
	["15138", "Синема Компани Гагарин (Ивантеевка)", "Советский просп., 2а, ТРЦ «Гагарин»", "55.9745078902116", "37.9105285034603"],
	["14157", "Крылья", "40 лет Победы, 15", "54.3697388083928", "48.5864214980762"],
	["322", "35ММ", "Покровка, 47/24", "55.7636039965372", "37.653912"],
	["13859", "5 звезд Пенза", "просп. Строителей, 1б, ТРЦ «Коллаж»", "53.2198579028807", "44.9463634074097"],
	["867", "5 звезд Волгоград", "Рабоче-Крестьянская, 9, ТЦ «Ворошиловский»", "48.6975479952046", "44.501659"],
	["2899", "Кино Тихвин", "г. Тихвин, Карла Маркса, 30", "59.6418699991453", "33.510671"],
	["2837", "Победа (Новомосковск)", "Октябрьская, 23", "54.0100230890126", "38.2907633730164"],
	["4078", "Киномакс–Буревестник", "просп. Ленина, 29", "56.1192986646921", "40.3661480846558"],
	["61231", "Синема 5", "просп. Чулман, 89/57, ТРЦ «Сити-молл»", "55.74524", "52.379659"],
	["63834", "Киноленд-Марио", "ул. Ленина 11, театр Эстрады «Янтарь Холл»", "54.9445022803049", "20.1557155"],
	["61421", "Нагаевский", "Новая, 31/10", "59.5591501137622", "150.791722718375"],
	["59043", "Апельсин", "Героев Сталинграда, 27, ТРЦ «Апельсин»", "44.5845873677276", "33.4378226317383"],
	["14223", "Гигант", "Муравьева-Амурского, 19", "48.4763299549267", "135.063523437824"],
	["44994", "Металлург (Белорецк)", "Карла Маркса, 70а", "53.9673743", "58.4088626"],
	["45577", "Мадагаскар (Бугульма)", "Гафиатуллина, 48", "54.530835", "52.802655"],
	["13826", "Синема 5", "Ново-Астраханское ш., 80, ТРЦ «Сити-молл»", "51.4940758320183", "45.9200708306885"],
	["43665", "Аврора (Спасск-Дальний)", "Борисова, 23", "44.598054", "132.816518"],
	["43123", "Орск", "Краматорская, 8б", "51.22283", "58.4904571"],
	["51121", "Киномания (Колпашево)", "Лазо, 10/1, стр. 1, ТЦ «Омега»", "58.318389", "82.927356"],
	["17181", "Синема 5", "просп. Дзержинского, 23, ТРЦ «Север»", "51.834181", "55.130075"],
	["397", "Родина", "Караванная, 12", "59.93624", "30.342184"],
	["58832", "Муссон", "Вакуленчука, 29, ТРЦ «Муссон»", "44.5890289739937", "33.4891547962952"],
	["58919", "Синема 5 (Старый Оскол)", "Молодежный просп., 10, ТЦ «Маскарад»", "51.3225685315276", "37.9027320268559"],
	["52011", "Ленфильм", "Каменноостровский просп., 10", "59.9582680770004", "30.3168690687867"],
	["811", "Киноленд", "Киевская, 71", "54.681373", "20.482882"],
	["42758", "Берлин Синема", "просп. Строителей, 152б, ТРЦ «Берлин»", "53.221182", "44.8884439999999"],
	["440", "Каро 6", "Петербургская, 1, ТЦ «Кольцо»", "55.7860973293402", "49.1250059904165"],
	["45909", "Синема 5", "просп. Химиков, 18, корп. 2", "55.620526", "51.790441"],
	["420", "Формула Кино Балканский", "Балканская пл., 5, литера И, ТРК «Балканский-1»", "59.82879", "30.38024"],
	["846", "Спутник (Волжский)", "Свердлова, 3", "48.7993108551125", "44.7573272987001"],
	["5372", "Синема Рио", "Московское ш., 12, ТЦ «Рио»", "56.3180206750568", "43.925443271058"],
	["39619", "Киномакс–Плаза", "Коммунистический просп., 30", "47.208703", "39.631499"],
	["14232", "Вершина", "Генерала Иванова, 1, ТРЦ «Вершина»", "61.2564589711788", "73.4315807460327"],
	["1871", "Сенеж (Солнечногорск)", "Почтовая, 17/8", "56.1849438316312", "36.9770818054895"],
	["39796", "Синема Стар Принц плаза", "Профсоюзная, 129а, ТЦ «Принц плаза»", "55.6179243", "37.5078083999999"],
	["59329", "Синема Стар Юго-Западная", "просп. Вернадского, 86а, ТЦ Avenue South West", "55.663449", "37.481432"],
	["912", "5 звезд Самара", "просп. Кирова, 147, ТРК «Вива лэнд»", "53.2205729948199", "50.262941"],
	["2820", "5 звезд Курск", "Ленина, 30, ТЦ «Пушкинский»", "51.7378676897993", "36.1924056496876"],
	["1875", "Синема Стар (Реутов)", "2-й км МКАД, ТК «Шоколад»", "55.764529", "37.844902"],
	["871", "Светофор (Балашиха)", "ш. Энтузиастов, 1б, ТК «Светофор»", "55.7942122594991", "37.9267897904238"],
	["2881", "Синема Стар Рио", "Фучика, 2, ТРЦ «Рио»", "59.8731362697012", "30.3540253936766"],
	["1879", "Синема Стар Рио", "Пролетарская, 22а, ТРЦ «Рио»", "54.1991949977703", "37.63688"],
	["16810", "Синема Стар Рио на Ленинском", "Ленинский просп., 109, ТРЦ «Рио Ленинский»", "55.663738", "37.511125"],
	["17136", "Синема Стар Марьина Роща", "Шереметьевская, 6, корп. 1, ТРЦ «Райкин-плаза»", "55.795433", "37.617023"],
	["2859", "Синема Стар Рио", "Окружное ш., 12, ТРЦ «Рио»", "59.2102255518397", "39.8138335135349"],
	["14186", "Три пингвина", "Ленинского Комсомола, 21а, ТРЦ «Мадагаскар»", "56.1075747465428", "47.2808833174438"],
	["3533", "Час кино Свиблово", "Снежная, 27, ТК «Свиблово»", "55.8561476664361", "37.6538138687901"],
	["57992", "Кинополис (Гатчина)", "Пушкинское ш., 15, ТРК «Кубус»", "59.582163", "30.146275"],
	["261", "Час кино Алтуфьево", "87-й км МКАД, «Час пик»", "55.8986440064901", "37.6289658844758"],
	["43655", "Киноформат", "просп. Машиностроителей, 30/18", "57.645008", "39.954741"],
	["1819", "Синема Стар Ереван-плаза", "Б.Тульская, 13, ТРЦ «Ереван-плаза»", "55.708822", "37.622076"],
	["813", "Эпицентр", "Профессора Баранова, 30/2", "54.721312", "20.510802"],
	["14185", "Синема 5", "просп. Яковлева, 4б, ТРЦ МТВ", "56.1019445991894", "47.2651329937482"],
	["42894", "Киносфера (Калининград)", "Челнокова, 11", "54.737639", "20.485334"],
	["55825", "Киноцентр", "Лопарева, 4", "61.005234", "69.0302729"],
	["502", "Каро 8", "18-й км Московского ш., 25в", "53.2762128627877", "50.2716553214264"],
	["804", "Каро 7", "Ленинский просп., 30, ТРЦ «Калининград-плаза»", "54.7112652656669", "20.5082935092621"],
	["2812", "Каро 7 на Лиговском", "Лиговский просп., 153, ТРК «Лигов»", "59.9148807849603", "30.3488516807556"],
	["14236", "Синема Стар Рио", "Кирова, 19, ТРЦ «Рио»", "54.5150161054433", "36.2524382934213"],
	["791", "Синема Стар Рио на Московском проспекте", "Московский просп., 108, ТРЦ «Рио»", "57.5767039987368", "39.84305"],
	["2804", "Синема Стар Рио на Тутаевском шоссе", "Тутаевское ш., 1, ТРЦ «Рио»", "57.6705599987581", "39.838199"],
	["2866", "Синема Стар Рио", "просп. Михаила Нагибина, 17, ТРЦ «Рио»", "47.2467181802691", "39.7122011483222"],
	["839", "Синема Стар Рио (Коломна)", "Октябрьской Революции, 362, ТРЦ «Рио»", "55.0843919903179", "38.8004907288361"],
	["14237", "Синема Стар Рио", "Московское ш., 175, ТРЦ «Рио»", "53.016464770049", "36.1604790825412"],
	["14235", "Синема Стар Рио", "просп. Богдана Хмельницкого, 164, ТРЦ «Рио»", "50.6420004203567", "36.5720949267569"],
	["5459", "Синема Стар Рио", "Советская, 55, ТРЦ «Рио»", "54.1820996788395", "45.1806657825141"],
	["40009", "Синема Стар Рио", "Советская, 99а, ТРЦ «Рио»", "52.724218", "41.457166"],
	["17650", "Синема Стар Рио", "Магистральная, 20, ТРЦ «Рио»", "57.7432426", "40.9228439999999"],
	["14233", "Мир", "Ленина, 43, ТРЦ «Сити-центр»", "61.2548999976885", "73.3842"],
	["13829", "Премьер", "50 лет ВЛКСМ, 63, ТРЦ «Премьер»", "57.1334289676941", "65.561467661377"],
	["16714", "Монитор Goodzone (Новороссийск)", "Героев-Десантников, 2, ТК «Южный пассаж»", "44.6877582", "37.7902634"],
	["463", "Монитор Сити", "Индустриальная, 2, ТРК «Сити-центр»", "45.00146", "38.961955"],
	["58209", "Синема Стар Рио Румянцево", "23-й км Киевского ш., 8, стр. 1, ТРЦ «Рио»", "55.6298909774058", "37.4245923042297"],
	["53330", "Синема Стар Рио", "пл. Гагарина, 5, ТРЦ «Рио»", "56.846711", "35.944424"],
	["39038", "Люксор Good Zone", "Каширское ш., 14, ТЦ «Гудзон»", "55.66442", "37.628051"],
	["889", "Люксор", "Малиновского, 25, «Золотой Вавилон»", "47.227934", "39.613854"],
	["4129", "Империя грез Восторг (Кстово)", "Зеленая, 24", "56.1470559935079", "44.179022"],
	["857", "Синема Стар Рио Дмитровка", "Дмитровское ш., 163а, ТРЦ «Рио Дмитровка»", "55.9091224012844", "37.5403476587219"],
	["2836", "Кинозал ГУМа", "Красная пл., 3, ГУМ", "55.754697098266", "37.6215214"],
	["872", "Светофор (Люберцы)", "Побратимов, 7, ТК «Светофор»", "55.6917614877318", "37.893886595996"],
	["14141", "Синема Стар XXI век", "Кирова, 1, ТРЦ «Калуга XXI век»", "54.5161987661225", "36.246833"],
	["360", "Киномакс–XL", "Дмитровское ш., 89, XL", "55.8637022297167", "37.5461135208885"],
	["230", "Киномакс–Солярис", "Перерва, 43, корп. 1", "55.6597371", "37.7496898"],
	["5464", "Киномакс IMAX", "пл. Вокзальная, 13, ТРЦ «Ярмарка»", "46.3596944016799", "48.0556186716381"],
	["379", "Киномакс", "Рабоче-Крестьянская, 10", "48.697780976414", "44.4998294576721"],
	["848", "Киномакс–Альтаир", "Ленинградский просп., 123, ТРК «Альтаир»", "57.697846", "39.7581319999999"],
	["5468", "Киномакс", "Головатого, 313, ТРК «Галерея Краснодар»", "45.0394950853986", "38.9742868245077"],
	["476", "Киномакс–Урал", "Воровского, 6", "55.157428", "61.394918"],
	["436", "Киномакс", "Мира, 41", "57.9764508958641", "56.1873264047547"],
	["17818", "Киномакс", "Дмитрия Менделеева, 1", "57.117609", "65.548935"],
	["41261", "Киномакс", "Аэродромная, 47а, ТРЦ «Аврора-молл»", "53.191197", "50.1888300000001"],
	["14224", "Голливуд", "Тургенева, 46", "48.4688129802433", "135.063812"],
	["14225", "Оскар", "Восточное ш., 41", "48.4765308494911", "135.133974830688"],
	["43663", "Октябрь (Озерск)", "г. Озерск, просп. Карла Маркса, 30", "55.757894", "60.699649"],
	["571", "Каро 5 на Байконурской", "Байконурская, 14а, ТРК «Континент»", "60.00206", "30.2727179999999"],
	["575", "Каро 6 на Севастопольском", "Севастопольский просп., 11е, ТЦ «Капитолий Севастопольский»", "55.6873469977976", "37.6038408279418"],
	["939", "Каро 3 Алтуфьево", "Алтуфьевское ш., 70, ТДК «Маркос-молл»", "55.8882852681907", "37.5885200500488"],
	["348", "Каро 4 на Шереметьевской", "Шереметьевская, 20а, ТЦ «Капитолий Марьина Роща»", "55.803517", "37.618938"],
	["40038", "Каро 10 (Реутов)", "Носовихинское ш., 45, ТРЦ «Реутов-парк»", "55.752286", "37.887485"],
	["869", "Каро 8 Теплый Стан", "Новоясеневский просп., 1, ТРЦ «Спектр»", "55.61954216856", "37.5092979497375"],
	["14137", "Планета кино Променад-2", "просп. Химиков, 39, ТРЦ «Променад-2»", "55.3388595545117", "86.160082989441"],
	["5440", "Каро 10 Радуга Парк", "Репина, 94, ТРЦ «Радуга-парк»", "56.8169765276223", "60.5376206584289"],
	["54645", "Иллизиум (Новомосковск)", "Березовая, 7в, ТРЦ «Пассаж»", "54.010628", "38.28476"],
	["266", "Костино (Королев)", "Дзержинского, 26, ДиКЦ «Костино»", "55.9152009949362", "37.855175"],
	["38875", "Мори Синема Лабиринт (Жуковка)", "дер. Жуковка, 57, ТРЦ «Лабиринт»", "55.7333447", "37.2508620999999"],
	["18261", "Азов", "Петровский б-р, 7", "47.110376", "39.4216848999999"],
	["15738", "Империя грез Индиго", "Казанское ш., 11, ТРК «Индиго Life»", "56.2907515018606", "44.0742945671081"],
	["2813", "Киномакс–Club", "просп. Победы, 91", "55.7694424594588", "49.2170014680939"],
	["14172", "Удокан", "Ленина, 79", "52.0308097551804", "113.506085322754"],
	["13799", "Юность (Ступино)", "Тимирязева, 17", "54.8912469920086", "38.079619"],
	["58957", "Радуга кино", "Пролетарская, 66, ТЦ «Идея»", "59.5570971", "150.8244331"],
	["14138", "Планета кино Променад-3", "просп. Ленина, 59а, ТРК «Променад-3», уровень Е", "55.3438445131598", "86.0990604682312"],
	["868", "Победа (Гатчина)", "просп. 25 Октября, 5", "59.5638972955364", "30.1375579833984"],
	["1856", "Каро 4 Иридиум (Зеленоград)", "Крюковская пл., 1, ТРЦ «Иридиум»", "55.982752", "37.174835"],
	["782", "Времена года", "Кутузовский просп., 48, «Времена года»", "55.7319673774324", "37.4880123138427"],
	["280", "Ролан", "Чистопрудный б-р, 12а", "55.76052", "37.643681"],
	["296", "5 звезд на Новокузнецкой", "Б.Овчинниковский пер., 16, ТЦ «Аркадия»", "55.7446273284548", "37.6298260688781"],
	["514", "ККК им. Маяковского", "Красный просп., 15", "55.024843", "82.920412"],
	["2808", "Star & Mlad", "Парковая, 3, ТЦ «Сити-парк Град»", "51.787435", "39.204554"],
	["40027", "Cinema Grand Palace", "Итальянская, 15, ТЦ Grand Palace", "59.936212", "30.333714"],
	["14179", "Радуга", "Шершнева, 6", "50.6158700739083", "36.5838298650818"],
	["17420", "Cinema 51", "Подстаницкого, 8а", "68.996908", "33.106623"],
	["540", "Орленок", "Б.Покровская, 39а", "56.3186609952714", "43.995979"],
	["43155", "Кристалл Синема (Ревда)", "Клубная, 8, РЦ «Кин-дза-дза»", "56.8059066", "59.9359374000001"],
	["39113", "Кинокомплекс Улица (Сызрань)", "Советская, 80", "53.1538067", "48.4700983"],
	["229", "Nescafe IMAX", "Правобережная, 1б, ТЦ «Капитолий Ленинградский»", "55.881176", "37.450124"],
	["59885", "ДКЖ-кино", "Демонстрации, 134, ДК железнодорожников", "54.191281", "37.582548"],
	["2890", "Горизонт (Коломна)", "пл. Советская, 6", "55.0927576941986", "38.7665636"],
	["14068", "Angleterre Cinema Lounge", "М.Морская, 24, отель «Англетер»", "59.9339089935493", "30.30878"],
	["337", "Киноклуб «Фитиль»", "Фрунзенская наб., 12", "55.732074", "37.594049"]

	]