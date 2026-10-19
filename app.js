(function () {
    "use strict";

    const translations = {
        ky: {
            languageName: "Кыргызча",
            languageLabel: "Тил",
            mainNavigation: "Негизги навигация",
            homeTitle: "Билим жана мүмкүнчүлүк",
            metaDescription: "«Из Калтыр» — жаштардын билим алуусун жана өнүгүүсүн колдогон стипендиялык демилге.",
            skipLink: "Негизги мазмунга өтүү",
            home: "Башкы бет",
            about: "Биз жөнүндө",
            scholarship: "Стипендия",
            team: "Команда",
            scholars: "Стипендиаттар",
            volunteers: "Ыктыярчылар",
            sponsors: "Өнөктөштөр",
            news: "Жаңылыктар",
            contact: "Байланыш",
            apply: "Стипендияга тапшыруу",
            demoBanner: "Демо режим: бардык көрсөткүчтөр жана маалыматтар үлгү катары гана берилген. Расмий маалыматтар азырынча кошула элек.",
            heroEyebrow: "Билим. Өнүгүү. Коомго салым.",
            heroTitle: "Бүгүнкү мүмкүнчүлүк — эртеңки чоң из.",
            heroText: "Из Калтыр — жаштардын билим алуусуна, өнүгүүсүнө жана коомго салым кошуусуна жол ачкан стипендиялык демилге.",
            learnScholarship: "Стипендия жөнүндө",
            ourImpact: "Биздин таасирибиз",
            photoNote: "Иллюстрациялык сүрөт · уюмдун расмий сүрөтү эмес",
            photoAlt: "Окуу жайында бирге иштеп жаткан студенттер. Иллюстрациялык сүрөт, уюмга тиешеси жок.",
            statsEyebrow: "Биздин көрсөткүчтөр",
            statsTitle: "Ар бир мүмкүнчүлүк маанилүү",
            statsNote: "Стипендиаттар жана иш-чаралар жарыяланган жазуулардан, өнөктөштөр көрүнүктүү жазуулардан, ыктыярчылар активдүү жазуулардан эсептелет. Азырынча расмий маалымат жок.",
            statScholars: "Стипендиаттар",
            statSponsors: "Өнөктөштөр",
            statVolunteers: "Ыктыярчылар",
            statEvents: "Иш-чаралар",
            aboutEyebrow: "Биз жөнүндө",
            aboutTitle: "Билим аркылуу жаңы мүмкүнчүлүктөрдү ачабыз",
            aboutText: "«Из Калтыр» жаштарга билим алып, жөндөмүн өнүктүрүп, коомго оң салым кошууга көмөк көрсөтүүнү көздөгөн стипендиялык демилге. Расмий миссия, тарых жана программалар уюм тарабынан ырасталгандан кийин бул жерде жарыяланат.",
            missionLabel: "Миссия",
            missionDraft: "Расмий миссиянын тексти такталууда.",
            visionLabel: "Көз караш",
            visionDraft: "Уюмдун көз карашы расмий бекитилгенден кийин жарыяланат.",
            historyLabel: "Тарыхы",
            historyPending: "Уюмдун расмий тарыхы берилгенден кийин кошулат.",
            valuesLabel: "Баалуулуктар",
            valuesText: "Билим · мүмкүнчүлүк · жоопкерчилик · коомчулук",
            readAbout: "Демилге жөнүндө",
            scholarshipEyebrow: "Стипендиялык демилге",
            scholarshipTitle: "Кийинки кадамды билим менен жасаңыз",
            scholarshipText: "Программанын расмий шарттары жана кабыл алуу мөөнөттөрү азырынча берилген эмес. Ырасталбаган талаптарды же мөөнөттөрдү жарыялабайбыз.",
            statusLabel: "Кабыл алуу статусу",
            statusUnconfirmed: "Маалымат такталууда",
            deadlineLabel: "Арыз берүү мөөнөтү",
            deadlinePending: "Расмий дата жарыялана элек",
            benefitsLabel: "Программанын артыкчылыктары",
            benefitsPending: "Программанын артыкчылыктары уюм тарабынан ырасталгандан кийин кошулат.",
            eligibilityLabel: "Катышуу шарттары",
            eligibilityPending: "Катышуу шарттары азырынча ырасталган эмес.",
            stagesLabel: "Арыз берүү баскычтары",
            stagesPending: "Арыз берүү баскычтары расмий тартип ырасталгандан кийин жарыяланат.",
            documentsLabel: "Керектүү документтер",
            documentsPending: "Документтердин тизмеси азырынча ырасталган эмес.",
            noApplication: "Расмий арыз берүү шилтемеси азырынча жок.",
            details: "Толук маалымат",
            readStory: "Окуяны окуу",
            directorPlaceholder: "[Директордун аты-жөнү]",
            directorPending: "Директордун расмий өмүр баяны жана сүрөтү берилгенден кийин кошулат.",
            scholarsEyebrow: "Биздин коомчулук",
            scholarsTitle: "Стипендиаттар",
            scholarsText: "Стипендиаттар тууралуу маалымат алгач алардын уруксаты жана уюмдун ырастоосу менен жарыяланат.",
            allScholars: "Бардык стипендиаттар",
            storiesEyebrow: "Окуялар",
            storiesTitle: "Маанилүү өзгөрүүлөр адамдан башталат",
            storiesText: "Чыныгы окуялар каармандардын уруксаты менен кошулат. Азырынча жарыялоого даяр окуялар жок.",
            sponsorsEyebrow: "Өнөктөштүк",
            sponsorsTitle: "Билимге бирге жол ачалы",
            sponsorsText: "Расмий өнөктөштөр тууралуу маалымат ырасталгандан кийин жарыяланат.",
            becomePartner: "Өнөктөш болуу",
            volunteerEyebrow: "Коомчулукка кошулуңуз",
            volunteerTitle: "Убактыңызды жана жөндөмүңүздү бөлүшүңүз",
            volunteerText: "Ыктыярчылык мүмкүнчүлүктөрү тууралуу маалымат уюм тарабынан ырасталгандан кийин жарыяланат.",
            becomeVolunteer: "Ыктыярчы болуу",
            newsEyebrow: "Жаңылыктар жана иш-чаралар",
            newsTitle: "Акыркы жаңылыктар",
            newsText: "Расмий жарыялар даяр болгондо бул жерде бөлүшүлөт.",
            allNews: "Бардык жаңылыктар",
            faqEyebrow: "Көп берилүүчү суроолор",
            faqTitle: "Сурооңуз барбы?",
            faqDraft: "Төмөнкү жооптор — расмий маалымат менен толтурула турган долбоордук белгилер.",
            faqQ1: "Стипендияга ким тапшыра алат?",
            faqA1: "Катышуу талаптары уюм тарабынан ырасталгандан кийин жарыяланат.",
            faqQ2: "Кантип жана качан арыз берсем болот?",
            faqA2: "Арыз берүү тартиби жана мөөнөтү азырынча ырасталган эмес.",
            faqQ3: "Ыктыярчы катары кантип кошулсам болот?",
            faqA3: "Мүмкүнчүлүктөр жарыяланганда ыктыярчы формасы аркылуу кызыгууңузду билдире аласыз.",
            faqQ4: "Өнөктөштүк тууралуу кимге кайрылсам болот?",
            faqA4: "Өнөктөштүк боюнча суроолорду байланыш формасы аркылуу жөнөтсөңүз болот.",
            contactEyebrow: "Байланыш",
            contactTitle: "Биз менен байланышта болуңуз",
            contactText: "Расмий байланыш маалыматтары уюм тарабынан берилгенден кийин бул жерге кошулат.",
            emailLabel: "Электрондук почта",
            emailPlaceholder: "[Расмий электрондук почта]",
            phoneLabel: "Телефон",
            phonePlaceholder: "[Телефон номери]",
            addressLabel: "Дарек",
            addressPlaceholder: "[Кеңсенин дареги]",
            socialPlaceholder: "Расмий социалдык шилтемелер кийин кошулат.",
            contactFormTitle: "Бизге жазыңыз",
            nameLabel: "Атыңыз",
            emailField: "Электрондук почта",
            messageLabel: "Билдирүү",
            sendMessage: "Билдирүү жөнөтүү",
            volunteerFormTitle: "Ыктыярчы болууга кызыгуум бар",
            partnerFormTitle: "Өнөктөштүк тууралуу сүйлөшөлү",
            organizationLabel: "Уюм / компания",
            interestLabel: "Кызыгууңуз тууралуу кыскача",
            submitInterest: "Кызыгууну билдирүү",
            formDemoNotice: "Демо форма: маалымат текшерилди, бирок эч жакка жөнөтүлгөн же сакталган жок. Чыныгы жөнөтүү үчүн сервердик кызмат туташтырылышы керек.",
            emptyScholars: "Азырынча жарыяланган стипендиаттар жок.",
            emptySponsors: "Расмий өнөктөштөр азырынча жарыялана элек.",
            emptyTeam: "Команда мүчөлөрү тууралуу текшерилген маалымат азырынча жок.",
            emptyNews: "Азырынча жарыяланган жаңылыктар жок.",
            emptyStories: "Азырынча жарыяланган окуялар жок.",
            emptyEvents: "Иш-чаралар кийин жарыяланат.",
            searchLabel: "Издөө",
            searchPlaceholder: "Аты же ачкыч сөз боюнча издөө",
            yearFilter: "Стипендия алган жыл",
            universityFilter: "ЖОЖ",
            fieldFilter: "Окуу багыты",
            allOptions: "Баары",
            noResults: "Бул издөө боюнча маалымат табылган жок.",
            categoryFilter: "Бөлүм",
            datePending: "Жарыяланган күнү көрсөтүлө элек",
            articleMissing: "Бул материал азырынча жарыяланган эмес.",
            backToNews: "Жаңылыктарга кайтуу",
            adminTitle: "Административдик панель",
            adminUnavailable: "Админ-панель коопсуз сервердик аутентификациясыз иштетилбейт. Бул статикалык демо сайтта кирүү же түзөтүү функциялары жок. Маалыматтарды коргоо үчүн сервердик кызмат жана уруксаттарды серверде текшерүү зарыл.",
            adminCounts: "Көрсөткүчтөр жалпы демо маалымат топтомунан эсептелет.",
            legalDraft: "Бул баракча долбоордук үлгү гана; юрист тарабынан каралган эмес. Расмий саясат жарыяланганга чейин бул текстти колдонбоңуз.",
            privacyTitle: "Купуялык саясаты",
            termsTitle: "Колдонуу шарттары",
            footerDescription: "Билим алууга, өнүгүүгө жана коомго салым кошууга көмөк көрсөткөн стипендиялык демилге.",
            privacy: "Купуялык саясаты",
            terms: "Колдонуу шарттары",
            copyright: "Бардык укуктар корголгон.",
            notFoundTitle: "Барак табылган жок",
            notFoundText: "Сиз издеген барак жок же азырынча жарыяланган эмес.",
            backHome: "Башкы бетке кайтуу",
            menuOpen: "Менюну ачуу",
            menuClose: "Менюну жабуу",
            formNameRequired: "Атыңызды киргизиңиз.",
            formEmailRequired: "Туура электрондук почта дарегин киргизиңиз.",
            formMessageRequired: "Билдирүүңүздү киргизиңиз.",
            formOrganizationRequired: "Уюмдун атын киргизиңиз.",
            formInterestRequired: "Кызыгууңузду кыскача жазыңыз.",
            formSubmissionBlocked: "Форма текшерүүдөн өтпөдү. Маалымат жөнөтүлгөн жок.",
            honeypotLabel: "Бул талааны бош калтырыңыз"
        },
        ru: {
            languageName: "Русский",
            languageLabel: "Язык",
            mainNavigation: "Основная навигация",
            homeTitle: "Образование и возможности",
            metaDescription: "«Из Калтыр» — стипендиальная инициатива, поддерживающая образование и развитие молодёжи.",
            skipLink: "Перейти к основному содержимому",
            home: "Главная",
            about: "О нас",
            scholarship: "Стипендия",
            team: "Команда",
            scholars: "Стипендиаты",
            volunteers: "Волонтёры",
            sponsors: "Партнёры",
            news: "Новости",
            contact: "Контакты",
            apply: "Подать заявку",
            demoBanner: "Демо-режим: все показатели и данные приведены только для примера. Проверенная официальная информация пока не добавлена.",
            heroEyebrow: "Образование. Развитие. Вклад в общество.",
            heroTitle: "Возможность сегодня — большой след завтра.",
            heroText: "«Из Калтыр» — стипендиальная инициатива, которая помогает молодёжи получать образование, развиваться и вносить вклад в общество.",
            learnScholarship: "О стипендии",
            ourImpact: "Наш вклад",
            photoNote: "Иллюстративное фото · не официальное фото организации",
            photoAlt: "Студенты вместе занимаются в учебном пространстве. Иллюстративное фото, не связанное с организацией.",
            statsEyebrow: "Наши показатели",
            statsTitle: "Каждая возможность важна",
            statsNote: "Стипендиаты и мероприятия считаются по опубликованным записям, партнёры — по видимым, волонтёры — по активным записям. Проверенных данных пока нет.",
            statScholars: "Стипендиаты",
            statSponsors: "Партнёры",
            statVolunteers: "Волонтёры",
            statEvents: "Мероприятия",
            aboutEyebrow: "О нас",
            aboutTitle: "Открываем новые возможности через образование",
            aboutText: "«Из Калтыр» — стипендиальная инициатива, цель которой — помогать молодёжи получать образование, развивать навыки и приносить пользу обществу. Официальные миссия, история и программы появятся после подтверждения организацией.",
            missionLabel: "Миссия",
            missionDraft: "Официальная формулировка миссии уточняется.",
            visionLabel: "Видение",
            visionDraft: "Видение будет опубликовано после официального утверждения.",
            historyLabel: "История",
            historyPending: "Официальная история организации будет добавлена после предоставления.",
            valuesLabel: "Ценности",
            valuesText: "Образование · возможности · ответственность · сообщество",
            readAbout: "О нашей инициативе",
            scholarshipEyebrow: "Стипендиальная инициатива",
            scholarshipTitle: "Сделайте следующий шаг с помощью образования",
            scholarshipText: "Официальные условия программы и сроки приёма пока не предоставлены. Мы не публикуем неподтверждённые требования и даты.",
            statusLabel: "Статус приёма",
            statusUnconfirmed: "Информация уточняется",
            deadlineLabel: "Срок подачи",
            deadlinePending: "Официальная дата не объявлена",
            benefitsLabel: "Преимущества программы",
            benefitsPending: "Описание преимуществ появится после подтверждения организацией.",
            eligibilityLabel: "Условия участия",
            eligibilityPending: "Условия участия пока не подтверждены.",
            stagesLabel: "Этапы подачи заявки",
            stagesPending: "Этапы будут опубликованы после подтверждения официального порядка подачи.",
            documentsLabel: "Необходимые документы",
            documentsPending: "Список документов пока не подтверждён.",
            noApplication: "Официальная ссылка для подачи заявки пока не предоставлена.",
            details: "Подробнее",
            readStory: "Читать историю",
            directorPlaceholder: "[ФИО директора]",
            directorPending: "Официальная биография и фотография директора появятся после предоставления.",
            scholarsEyebrow: "Наше сообщество",
            scholarsTitle: "Стипендиаты",
            scholarsText: "Информация о стипендиатах будет опубликована с их согласия и после подтверждения организацией.",
            allScholars: "Все стипендиаты",
            storiesEyebrow: "Истории",
            storiesTitle: "Важные перемены начинаются с людей",
            storiesText: "Реальные истории будут опубликованы с согласия героев. Готовых к публикации материалов пока нет.",
            sponsorsEyebrow: "Партнёрство",
            sponsorsTitle: "Вместе откроем путь к знаниям",
            sponsorsText: "Информация об официальных партнёрах появится после подтверждения.",
            becomePartner: "Стать партнёром",
            volunteerEyebrow: "Присоединяйтесь к сообществу",
            volunteerTitle: "Делитесь временем и навыками",
            volunteerText: "Информация о волонтёрских возможностях будет опубликована после подтверждения организацией.",
            becomeVolunteer: "Стать волонтёром",
            newsEyebrow: "Новости и события",
            newsTitle: "Последние новости",
            newsText: "Официальные объявления появятся здесь, когда будут готовы.",
            allNews: "Все новости",
            faqEyebrow: "Частые вопросы",
            faqTitle: "Остались вопросы?",
            faqDraft: "Ответы ниже — черновые пометки, которые будут заменены подтверждённой информацией.",
            faqQ1: "Кто может подать заявку на стипендию?",
            faqA1: "Требования к участникам будут опубликованы после подтверждения организацией.",
            faqQ2: "Как и когда можно подать заявку?",
            faqA2: "Порядок подачи и сроки пока не подтверждены.",
            faqQ3: "Как присоединиться в качестве волонтёра?",
            faqA3: "Когда появятся возможности, вы сможете сообщить о своём интересе через форму волонтёра.",
            faqQ4: "К кому обратиться по вопросам партнёрства?",
            faqA4: "Вопросы о партнёрстве можно отправить через контактную форму.",
            contactEyebrow: "Контакты",
            contactTitle: "Будьте на связи",
            contactText: "Официальные контактные данные будут добавлены после их предоставления организацией.",
            emailLabel: "Электронная почта",
            emailPlaceholder: "[Официальная электронная почта]",
            phoneLabel: "Телефон",
            phonePlaceholder: "[Номер телефона]",
            addressLabel: "Адрес",
            addressPlaceholder: "[Адрес офиса]",
            socialPlaceholder: "Официальные ссылки на соцсети появятся позже.",
            contactFormTitle: "Напишите нам",
            nameLabel: "Ваше имя",
            emailField: "Электронная почта",
            messageLabel: "Сообщение",
            sendMessage: "Отправить сообщение",
            volunteerFormTitle: "Хочу стать волонтёром",
            partnerFormTitle: "Обсудим партнёрство",
            organizationLabel: "Организация / компания",
            interestLabel: "Кратко расскажите о своём интересе",
            submitInterest: "Отправить запрос",
            formDemoNotice: "Демо-форма: данные проверены, но не отправлены и не сохранены. Для настоящей отправки необходимо подключить серверный сервис.",
            emptyScholars: "Опубликованных профилей стипендиатов пока нет.",
            emptySponsors: "Официальные партнёры пока не представлены.",
            emptyTeam: "Проверенная информация о команде пока не добавлена.",
            emptyNews: "Опубликованных новостей пока нет.",
            emptyStories: "Опубликованных историй пока нет.",
            emptyEvents: "Информация о мероприятиях появится позже.",
            searchLabel: "Поиск",
            searchPlaceholder: "Поиск по имени или ключевому слову",
            yearFilter: "Год стипендии",
            universityFilter: "Вуз",
            fieldFilter: "Направление обучения",
            allOptions: "Все",
            noResults: "По вашему запросу ничего не найдено.",
            categoryFilter: "Категория",
            datePending: "Дата публикации не указана",
            articleMissing: "Этот материал пока не опубликован.",
            backToNews: "Вернуться к новостям",
            adminTitle: "Панель администратора",
            adminUnavailable: "Панель администратора не включена без безопасной серверной аутентификации. В этой статической демоверсии нет функций входа и редактирования. Для защиты данных необходимы серверная часть и авторизация на сервере.",
            adminCounts: "Показатели рассчитываются по общему демо-набору данных.",
            legalDraft: "Это только черновой шаблон, не проверенный юристом. Не используйте его до публикации официальной политики.",
            privacyTitle: "Политика конфиденциальности",
            termsTitle: "Условия использования",
            footerDescription: "Стипендиальная инициатива, поддерживающая образование, развитие и вклад в общество.",
            privacy: "Конфиденциальность",
            terms: "Условия использования",
            copyright: "Все права защищены.",
            notFoundTitle: "Страница не найдена",
            notFoundText: "Такой страницы нет или она ещё не опубликована.",
            backHome: "На главную",
            menuOpen: "Открыть меню",
            menuClose: "Закрыть меню",
            formNameRequired: "Укажите ваше имя.",
            formEmailRequired: "Укажите корректный адрес электронной почты.",
            formMessageRequired: "Введите сообщение.",
            formOrganizationRequired: "Укажите название организации.",
            formInterestRequired: "Кратко опишите ваш интерес.",
            formSubmissionBlocked: "Проверка формы не пройдена. Данные не отправлены.",
            honeypotLabel: "Оставьте это поле пустым"
        },
        en: {
            languageName: "English",
            languageLabel: "Language",
            mainNavigation: "Main navigation",
            homeTitle: "Education and opportunity",
            metaDescription: "Iz Kaltyr is a scholarship initiative supporting education and youth development.",
            skipLink: "Skip to main content",
            home: "Home",
            about: "About Us",
            scholarship: "Scholarship",
            team: "Our Team",
            scholars: "Scholars",
            volunteers: "Volunteers",
            sponsors: "Partners",
            news: "News",
            contact: "Contact",
            apply: "Apply for Scholarship",
            demoBanner: "Demo mode: all figures and records are illustrative only. Verified official information has not been added.",
            heroEyebrow: "Education. Growth. Community impact.",
            heroTitle: "Today's opportunity — tomorrow's lasting impact.",
            heroText: "Iz Kaltyr is a scholarship initiative that supports young people in learning, growing, and contributing to their communities.",
            learnScholarship: "About the scholarship",
            ourImpact: "Our impact",
            photoNote: "Illustrative photo · not an official organization photo",
            photoAlt: "Students working together in a study space. Illustrative photo, not affiliated with the organization.",
            statsEyebrow: "Our impact",
            statsTitle: "Every opportunity matters",
            statsNote: "Scholars and events count published records, partners count visible records, and volunteers count active records. No verified records have been added yet.",
            statScholars: "Scholarship recipients",
            statSponsors: "Partners",
            statVolunteers: "Volunteers",
            statEvents: "Events",
            aboutEyebrow: "About us",
            aboutTitle: "Opening new opportunities through education",
            aboutText: "Iz Kaltyr is a scholarship initiative aiming to help young people access education, develop their skills, and contribute to their communities. The official mission, history, and programs will be published once confirmed by the organization.",
            missionLabel: "Mission",
            missionDraft: "The official mission statement is awaiting confirmation.",
            visionLabel: "Vision",
            visionDraft: "The vision will be published after official approval.",
            historyLabel: "History",
            historyPending: "The organization's official history will be added when provided.",
            valuesLabel: "Values",
            valuesText: "Education · opportunity · responsibility · community",
            readAbout: "About the initiative",
            scholarshipEyebrow: "Scholarship initiative",
            scholarshipTitle: "Take your next step through education",
            scholarshipText: "Official program terms and application dates have not been provided. Unverified requirements and deadlines are not published.",
            statusLabel: "Application status",
            statusUnconfirmed: "Details to be confirmed",
            deadlineLabel: "Application deadline",
            deadlinePending: "No official date announced",
            benefitsLabel: "Program benefits",
            benefitsPending: "Program benefits will be added once confirmed by the organization.",
            eligibilityLabel: "Eligibility",
            eligibilityPending: "Eligibility requirements have not yet been confirmed.",
            stagesLabel: "Application stages",
            stagesPending: "Application stages will be published once the official process is confirmed.",
            documentsLabel: "Required documents",
            documentsPending: "The required document list has not yet been confirmed.",
            noApplication: "An official application link is not available yet.",
            details: "Learn more",
            readStory: "Read story",
            directorPlaceholder: "[Director's Full Name]",
            directorPending: "The director's official biography and photo will be added when provided.",
            scholarsEyebrow: "Our community",
            scholarsTitle: "Scholars",
            scholarsText: "Scholar profiles will be published with their consent and after verification by the organization.",
            allScholars: "All scholars",
            storiesEyebrow: "Stories",
            storiesTitle: "Meaningful change starts with people",
            storiesText: "Real stories will be shared with the subjects' consent. No stories are ready for publication yet.",
            sponsorsEyebrow: "Partnership",
            sponsorsTitle: "Opening doors to learning, together",
            sponsorsText: "Official partner information will be published once verified.",
            becomePartner: "Become a partner",
            volunteerEyebrow: "Join the community",
            volunteerTitle: "Share your time and skills",
            volunteerText: "Volunteer opportunities will be listed once confirmed by the organization.",
            becomeVolunteer: "Become a volunteer",
            newsEyebrow: "News and events",
            newsTitle: "Latest updates",
            newsText: "Official announcements will be shared here when available.",
            allNews: "All news",
            faqEyebrow: "Frequently asked questions",
            faqTitle: "Have a question?",
            faqDraft: "The answers below are draft placeholders for information awaiting official confirmation.",
            faqQ1: "Who can apply for a scholarship?",
            faqA1: "Eligibility requirements will be published once confirmed by the organization.",
            faqQ2: "How and when can I apply?",
            faqA2: "The application process and dates have not yet been confirmed.",
            faqQ3: "How can I volunteer?",
            faqA3: "When opportunities are announced, you can register your interest using the volunteer form.",
            faqQ4: "Who can I contact about a partnership?",
            faqA4: "You can send partnership inquiries through the contact form.",
            contactEyebrow: "Contact",
            contactTitle: "Get in touch",
            contactText: "Official contact details will be added when provided by the organization.",
            emailLabel: "Email",
            emailPlaceholder: "[Official email]",
            phoneLabel: "Phone",
            phonePlaceholder: "[Phone number]",
            addressLabel: "Address",
            addressPlaceholder: "[Office address]",
            socialPlaceholder: "Official social links will be added later.",
            contactFormTitle: "Send us a message",
            nameLabel: "Your name",
            emailField: "Email address",
            messageLabel: "Message",
            sendMessage: "Send message",
            volunteerFormTitle: "I'm interested in volunteering",
            partnerFormTitle: "Let's discuss a partnership",
            organizationLabel: "Organization / company",
            interestLabel: "Briefly describe your interest",
            submitInterest: "Submit inquiry",
            formDemoNotice: "Demo form: your input was validated but was not sent or saved. A backend service is required for real submissions.",
            emptyScholars: "No scholar profiles have been published yet.",
            emptySponsors: "No official partners have been listed yet.",
            emptyTeam: "Verified team information has not been added yet.",
            emptyNews: "No news articles have been published yet.",
            emptyStories: "No stories have been published yet.",
            emptyEvents: "Event details will be shared later.",
            searchLabel: "Search",
            searchPlaceholder: "Search by name or keyword",
            yearFilter: "Scholarship year",
            universityFilter: "University",
            fieldFilter: "Field of study",
            allOptions: "All",
            noResults: "No results match your search.",
            categoryFilter: "Category",
            datePending: "Publication date not provided",
            articleMissing: "This article has not been published.",
            backToNews: "Back to news",
            adminTitle: "Admin dashboard",
            adminUnavailable: "The admin dashboard is disabled without secure server-side authentication. This static demo has no login or editing features. A backend and server-enforced authorization are required to protect data.",
            adminCounts: "Statistics are calculated from the shared demo data set.",
            legalDraft: "This is a draft template only and has not been reviewed by a lawyer. Do not use it as an official policy.",
            privacyTitle: "Privacy Policy",
            termsTitle: "Terms of Use",
            footerDescription: "A scholarship initiative supporting education, growth, and community contribution.",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
            copyright: "All rights reserved.",
            notFoundTitle: "Page not found",
            notFoundText: "This page does not exist or has not been published yet.",
            backHome: "Back to home",
            menuOpen: "Open menu",
            menuClose: "Close menu",
            formNameRequired: "Please enter your name.",
            formEmailRequired: "Please enter a valid email address.",
            formMessageRequired: "Please enter a message.",
            formOrganizationRequired: "Please enter your organization name.",
            formInterestRequired: "Please briefly describe your interest.",
            formSubmissionBlocked: "Form validation failed. Your information was not submitted.",
            honeypotLabel: "Leave this field empty"
        }
    };

    const data = window.SITE_DATA;
    const app = document.getElementById("app");
    const navKeys = ["home", "about", "scholarship", "team", "scholars", "volunteers", "sponsors", "news", "contact"];
    const statKeys = ["scholars", "sponsors", "volunteers", "events"];
    const state = {
        language: localStorage.getItem("iz-kaltyr-language") || "ky",
        menuOpen: false,
        scholarQuery: "",
        scholarYear: "",
        scholarUniversity: "",
        scholarField: "",
        newsQuery: "",
        newsCategory: ""
    };

    if (!translations[state.language]) {
        state.language = "ky";
    }

    function t(key) {
        return translations[state.language][key] || translations.ky[key] || key;
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;",
            "'": "&#39;"
        })[character]);
    }

    function recordText(record, key) {
        const value = record[key];
        if (value && typeof value === "object") {
            return value[state.language] || value.ky || "";
        }
        return value || "";
    }

    function externalUrl(value) {
        if (!value) return "";
        try {
            const url = new URL(value, window.location.href);
            if (url.protocol === "https:" || url.protocol === "http:" || url.protocol === "file:") {
                return url.href;
            }
        } catch (error) {
            if (!(error instanceof TypeError)) throw error;
            console.error("Ignoring an invalid URL in the local site data.", error);
            return "";
        }
        console.error("Ignoring a URL with an unsupported protocol in the local site data.");
        return "";
    }

    function link(route, label, className) {
        return `<a${className ? ` class="${className}"` : ""} href="#${route}">${label}</a>`;
    }

    function header() {
        const navItems = navKeys.map((key) => `<a href="#${key}"${getRoute() === key ? ' aria-current="page"' : ""}>${t(key)}</a>`).join("");
        return `
            <div class="demo-banner" role="note">${t("demoBanner")}</div>
            <header class="site-header">
              <div class="container header-inner">
                ${link("home", '<span class="brand-mark" aria-hidden="true">И</span><span>Из Калтыр</span>', "brand")}
                <button class="menu-toggle" type="button" aria-expanded="${state.menuOpen}" aria-controls="primary-navigation" aria-label="${state.menuOpen ? t("menuClose") : t("menuOpen")}">
                  <span></span><span></span><span></span>
                </button>
                <nav id="primary-navigation" class="primary-navigation${state.menuOpen ? " is-open" : ""}" aria-label="${t("mainNavigation")}">
                  ${navItems}
                  <label class="language-picker">
                    <span class="visually-hidden">${t("languageLabel")}</span>
                    <select id="language-select" aria-label="${t("languageLabel")}">
                      ${["ky", "ru", "en"].map((language) => `<option value="${language}"${state.language === language ? " selected" : ""}>${translations[language].languageName}</option>`).join("")}
                    </select>
                  </label>
                  ${link("scholarship", t("apply"), "button button-small button-orange")}
                </nav>
              </div>
            </header>`;
    }

    function footer() {
        return `
          <footer class="site-footer">
            <div class="container footer-grid">
              <div class="footer-brand">
                ${link("home", '<span class="brand-mark" aria-hidden="true">И</span><span>Из Калтыр</span>', "brand brand-light")}
                <p>${t("footerDescription")}</p>
              </div>
              <div><h2>${t("about")}</h2><ul>
                <li>${link("about", t("about"))}</li>
                <li>${link("team", t("team"))}</li>
                <li>${link("scholars", t("scholars"))}</li>
              </ul></div>
              <div><h2>${t("scholarship")}</h2><ul>
                <li>${link("scholarship", t("details"))}</li>
                <li>${link("volunteers", t("volunteers"))}</li>
                <li>${link("sponsors", t("sponsors"))}</li>
              </ul></div>
              <div><h2>${t("contact")}</h2><ul>
                <li>${link("contact", t("contact"))}</li>
                <li>${link("privacy", t("privacy"))}</li>
                <li>${link("terms", t("terms"))}</li>
              </ul></div>
            </div>
            <div class="container footer-bottom">
              <span>© ${new Date().getFullYear()} Из Калтыр. ${t("copyright")}</span>
              <span>${t("socialPlaceholder")}</span>
              <label class="footer-language"><span class="visually-hidden">${t("languageLabel")}</span><select id="footer-language-select" aria-label="${t("languageLabel")}">
                ${["ky", "ru", "en"].map((language) => `<option value="${language}"${state.language === language ? " selected" : ""}>${translations[language].languageName}</option>`).join("")}
              </select></label>
            </div>
          </footer>`;
    }

    function shell(content) {
        return `${header()}<main id="main-content" tabindex="-1">${content}</main>${footer()}`;
    }

    function pageIntro(eyebrow, title, description) {
        return `<section class="page-intro"><div class="container">
          <p class="eyebrow">${t(eyebrow)}</p><h1>${t(title)}</h1><p class="lead">${t(description)}</p>
        </div></section>`;
    }

    function emptyState(messageKey, icon) {
        return `<div class="empty-state"><span class="empty-icon" aria-hidden="true">${icon || "—"}</span><p>${t(messageKey)}</p></div>`;
    }

    function homePage() {
        const statistics = data.statistics();
        return `
          <section class="hero">
            <div class="container hero-grid">
              <div class="hero-copy">
                <p class="eyebrow eyebrow-light">${t("heroEyebrow")}</p>
                <h1>${t("heroTitle")}</h1>
                <p class="hero-lead">${t("heroText")}</p>
                <div class="hero-actions">${link("scholarship", t("learnScholarship"), "button button-orange")}${link("home#impact", t("ourImpact"), "button button-ghost")}</div>
              </div>
              <figure class="hero-visual">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=85" alt="${t("photoAlt")}" fetchpriority="high">
                <figcaption>${t("photoNote")}</figcaption>
                <span class="hero-accent" aria-hidden="true"></span>
              </figure>
            </div>
          </section>
          <section class="stats-section" id="impact">
            <div class="container">
              <div class="section-heading section-heading-row"><div><p class="eyebrow">${t("statsEyebrow")}</p><h2>${t("statsTitle")}</h2></div><p>${t("statsNote")}</p></div>
              <div class="stats-grid">${statKeys.map((key) => `<article class="stat-card"><span class="stat-number" data-stat="${key}" data-target="${statistics[key]}">0</span><h3>${t(`stat${key[0].toUpperCase()}${key.slice(1)}`)}</h3></article>`).join("")}</div>
            </div>
          </section>
          ${aboutPreview()}
          ${scholarshipPreview()}
          ${scholarsPreview()}
          ${storiesSection()}
          ${sponsorsSection()}
          ${volunteerCallout()}
          ${newsPreview()}
          ${faqSection()}
          ${contactSection()}`;
    }

    function aboutPreview() {
        return `<section class="section"><div class="container about-grid">
          <div class="about-visual"><div class="about-visual-inner"><span class="visual-letter" aria-hidden="true">И</span><span class="visual-caption">${t("valuesText")}</span></div></div>
          <div class="about-copy"><p class="eyebrow">${t("aboutEyebrow")}</p><h2>${t("aboutTitle")}</h2><p class="lead">${t("aboutText")}</p>
            <div class="values-grid">
              <div><h3>${t("missionLabel")}</h3><p>${t("missionDraft")}</p></div>
              <div><h3>${t("visionLabel")}</h3><p>${t("visionDraft")}</p></div>
            </div>${link("about", `${t("readAbout")} <span aria-hidden="true">↗</span>`, "text-link")}
          </div>
        </div></section>`;
    }

    function scholarshipPreview() {
        return `<section class="section section-muted"><div class="container scholarship-panel">
          <div><p class="eyebrow">${t("scholarshipEyebrow")}</p><h2>${t("scholarshipTitle")}</h2><p class="lead">${t("scholarshipText")}</p></div>
          <div class="program-card">
            <div class="program-status"><span class="status-dot"></span>${t("statusUnconfirmed")}</div>
            <div class="program-detail"><h3>${t("statusLabel")}</h3><p>${t("statusUnconfirmed")}</p></div>
            <div class="program-detail"><h3>${t("deadlineLabel")}</h3><p>${t("deadlinePending")}</p></div>
            <div class="program-detail"><h3>${t("eligibilityLabel")}</h3><p>${t("eligibilityPending")}</p></div>
            ${link("scholarship", t("details"), "button button-navy")}
          </div>
        </div></section>`;
    }

    function scholarsPreview() {
        return `<section class="section"><div class="container">
          <div class="section-heading section-heading-row"><div><p class="eyebrow">${t("scholarsEyebrow")}</p><h2>${t("scholarsTitle")}</h2></div><p>${t("scholarsText")}</p></div>
          ${scholarsMarkup(data.records.scholars.filter((record) => record.published && !record.deleted), false)}${link("scholars", t("allScholars"), "button button-outline")}
        </div></section>`;
    }

    function storiesSection() {
        const stories = data.records.stories.filter((story) => story.published && !story.deleted);
        const cards = stories.length
            ? `<div class="card-grid">${stories.map((story) => {
                const image = externalUrl(story.image);
                const title = recordText(story, "title");
                return `<article class="news-card">${image ? `<img class="card-image" src="${escapeHtml(image)}" alt="${escapeHtml(recordText(story, "imageAlt") || title)}" loading="lazy">` : ""}<p class="eyebrow">${escapeHtml(recordText(story, "category"))}</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(recordText(story, "excerpt"))}</p></article>`;
            }).join("")}</div>`
            : emptyState("emptyStories", "✳");
        return `<section class="section section-muted"><div class="container">
          <div class="section-heading"><p class="eyebrow">${t("storiesEyebrow")}</p><h2>${t("storiesTitle")}</h2><p class="lead">${t("storiesText")}</p></div>
          ${cards}
        </div></section>`;
    }

    function sponsorCards() {
        const sponsors = data.records.sponsors.filter((sponsor) => sponsor.visible && !sponsor.deleted);
        if (!sponsors.length) return emptyState("emptySponsors", "✳");
        return `<div class="card-grid">${sponsors.map((sponsor) => {
            const logo = externalUrl(sponsor.logo);
            const website = externalUrl(sponsor.website);
            const name = recordText(sponsor, "name");
            const displayWebsite = website ? new URL(website).host : "";
            return `<article class="partner-card">${logo ? `<img src="${escapeHtml(logo)}" alt="${escapeHtml(name)} logo" loading="lazy">` : `<div class="partner-placeholder" aria-hidden="true">${escapeHtml(name.slice(0, 1))}</div>`}<h3>${escapeHtml(name)}</h3><p>${escapeHtml(recordText(sponsor, "description"))}</p>${website ? `<a class="text-link" href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(displayWebsite)} <span aria-hidden="true">↗</span></a>` : ""}</article>`;
        }).join("")}</div>`;
    }

    function sponsorsSection() {
        return `<section class="section"><div class="container">
          <div class="section-heading section-heading-row"><div><p class="eyebrow">${t("sponsorsEyebrow")}</p><h2>${t("sponsorsTitle")}</h2></div><p>${t("sponsorsText")}</p></div>
          ${sponsorCards()}${link("sponsors#partner-form-section", t("becomePartner"), "button button-outline")}
        </div></section>`;
    }

    function eventsList() {
        const events = data.records.events.filter((event) => event.published && !event.deleted);
        if (!events.length) return emptyState("emptyEvents", "✳");
        return `<div class="card-grid">${events.map((event) => `<article class="news-card"><p class="eyebrow">${escapeHtml(recordText(event, "date") || t("datePending"))}</p><h3>${escapeHtml(recordText(event, "title"))}</h3><p>${escapeHtml(recordText(event, "description"))}</p></article>`).join("")}</div>`;
    }

    function volunteerCallout() {
        return `<section class="callout"><div class="container callout-inner">
          <div><p class="eyebrow eyebrow-light">${t("volunteerEyebrow")}</p><h2>${t("volunteerTitle")}</h2><p>${t("volunteerText")}</p></div>
          ${link("volunteers#volunteer-form-section", t("becomeVolunteer"), "button button-orange")}
        </div></section>`;
    }

    function newsPreview() {
        return `<section class="section section-muted"><div class="container">
          <div class="section-heading section-heading-row"><div><p class="eyebrow">${t("newsEyebrow")}</p><h2>${t("newsTitle")}</h2></div><p>${t("newsText")}</p></div>
          ${newsMarkup(data.records.articles.filter((article) => article.published && !article.deleted), false)}${link("news", t("allNews"), "button button-outline")}
        </div></section>`;
    }

    function faqSection() {
        return `<section class="section" id="faq"><div class="container faq-layout">
          <div><p class="eyebrow">${t("faqEyebrow")}</p><h2>${t("faqTitle")}</h2><p class="muted-text">${t("faqDraft")}</p></div>
          <div class="faq-list">${[1, 2, 3, 4].map((number) => `<details class="faq-item"><summary>${t(`faqQ${number}`)}</summary><p>${t(`faqA${number}`)}</p></details>`).join("")}</div>
        </div></section>`;
    }

    function contactDetails() {
        return `<div class="contact-details">
          <div><span class="detail-label">${t("emailLabel")}</span><p>${t("emailPlaceholder")}</p></div>
          <div><span class="detail-label">${t("phoneLabel")}</span><p>${t("phonePlaceholder")}</p></div>
          <div><span class="detail-label">${t("addressLabel")}</span><p>${t("addressPlaceholder")}</p></div>
          <p class="muted-text">${t("socialPlaceholder")}</p>
        </div>`;
    }

    function contactForm(type, titleKey) {
        const partnerFields = type === "partner";
        const volunteerForm = type === "volunteer";
        const submitKey = partnerFields || volunteerForm ? "submitInterest" : "sendMessage";
        const formId = `${type}-form`;
        return `<form class="site-form" id="${formId}" data-demo-form="${type}" novalidate>
          <h2>${t(titleKey)}</h2>
          <label>${t("nameLabel")}<input name="name" type="text" autocomplete="name" required aria-describedby="${formId}-name-error"><span class="field-error" id="${formId}-name-error" data-error-for="name"></span></label>
          <label>${t("emailField")}<input name="email" type="email" autocomplete="email" required aria-describedby="${formId}-email-error"><span class="field-error" id="${formId}-email-error" data-error-for="email"></span></label>
          ${partnerFields ? `<label>${t("organizationLabel")}<input name="organization" type="text" required aria-describedby="${formId}-organization-error"><span class="field-error" id="${formId}-organization-error" data-error-for="organization"></span></label>` : ""}
          <label>${t(partnerFields || volunteerForm ? "interestLabel" : "messageLabel")}<textarea name="message" rows="4" required aria-describedby="${formId}-message-error"></textarea><span class="field-error" id="${formId}-message-error" data-error-for="message"></span></label>
          <label class="honeypot" aria-hidden="true">${t("honeypotLabel")}<input name="website" type="text" tabindex="-1" autocomplete="off"></label>
          <button class="button button-orange" type="submit">${t(submitKey)}</button>
          <p class="form-status" role="status" aria-live="polite">${t("formDemoNotice")}</p>
        </form>`;
    }

    function contactSection() {
        return `<section class="section section-muted"><div class="container contact-layout">
          <div><p class="eyebrow">${t("contactEyebrow")}</p><h2>${t("contactTitle")}</h2><p class="lead">${t("contactText")}</p>${contactDetails()}</div>
          ${contactForm("contact", "contactFormTitle")}
        </div></section>`;
    }

    function aboutPage() {
        return `${pageIntro("aboutEyebrow", "aboutTitle", "aboutText")}${aboutPreview()}<section class="section section-muted"><div class="container"><p class="eyebrow">${t("historyLabel")}</p><h2>${t("historyLabel")}</h2><p class="lead">${t("historyPending")}</p></div></section>${storiesSection()}${teamSection()}`;
    }

    function scholarshipPage() {
        return `${pageIntro("scholarshipEyebrow", "scholarshipTitle", "scholarshipText")}
          <section class="section"><div class="container scholarship-detail-layout">
            <article class="program-card program-card-large">
              <div class="program-status"><span class="status-dot"></span>${t("statusUnconfirmed")}</div>
              <h2>${t("statusLabel")}</h2><p>${t("statusUnconfirmed")}</p>
              <h3>${t("deadlineLabel")}</h3><p>${t("deadlinePending")}</p>
              <h3>${t("benefitsLabel")}</h3><p>${t("benefitsPending")}</p>
              <h3>${t("eligibilityLabel")}</h3><p>${t("eligibilityPending")}</p>
              <h3>${t("stagesLabel")}</h3><p>${t("stagesPending")}</p>
              <h3>${t("documentsLabel")}</h3><p>${t("documentsPending")}</p>
              <p class="notice-box">${t("noApplication")}</p>
            </article>
            <aside class="side-note"><h2>${t("faqTitle")}</h2><p>${t("faqDraft")}</p><a href="#home#faq" class="text-link">${t("details")} <span aria-hidden="true">↗</span></a></aside>
          </div></section>${faqSection()}`;
    }

    function teamSection() {
        const members = data.records.team.filter((member) => member.published && !member.deleted);
        const profiles = members.length
            ? `<div class="card-grid">${members.map((member) => {
                const photo = externalUrl(member.photo);
                const name = recordText(member, "name");
                return `<article class="person-card">${photo ? `<img class="profile-image" src="${escapeHtml(photo)}" alt="${escapeHtml(recordText(member, "photoAlt") || `${name} — ${recordText(member, "position")}`)}" loading="lazy">` : `<div class="person-placeholder" aria-hidden="true">И</div>`}<h3>${escapeHtml(name)}</h3><p class="eyebrow">${escapeHtml(recordText(member, "position"))}</p><p>${escapeHtml(recordText(member, "biography"))}</p></article>`;
            }).join("")}</div>`
            : emptyState("emptyTeam", "✳");
        const hasDirector = members.some((member) => member.role === "director");
        const director = hasDirector ? "" : `<article class="director-placeholder"><h3>${t("directorPlaceholder")}</h3><p>${t("directorPending")}</p></article>`;
        return `<section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">${t("team")}</p><h2>${t("team")}</h2></div>${director}${profiles}</div></section>`;
    }

    function directoryPage() {
        const scholars = data.records.scholars.filter((record) => record.published && !record.deleted);
        const options = (field) => [...new Set(scholars.map((record) => field === "year" ? record.year : recordText(record, field)).filter(Boolean))]
            .sort((left, right) => String(left).localeCompare(String(right), undefined, { numeric: true }));
        return `${pageIntro("scholarsEyebrow", "scholarsTitle", "scholarsText")}
          <section class="section"><div class="container">
            <div class="filter-bar">
              <label>${t("searchLabel")}<input id="scholar-search" type="search" placeholder="${t("searchPlaceholder")}" value="${escapeHtml(state.scholarQuery)}"></label>
              ${filterSelect("scholar-year", "yearFilter", options("year"), state.scholarYear)}
              ${filterSelect("scholar-university", "universityFilter", options("university"), state.scholarUniversity)}
              ${filterSelect("scholar-field", "fieldFilter", options("field"), state.scholarField)}
            </div>
            <div id="directory-results">${scholarsMarkup(scholars)}</div>
          </div></section>`;
    }

    function filterSelect(id, labelKey, values, selected) {
        return `<label>${t(labelKey)}<select id="${id}"><option value="">${t("allOptions")}</option>${values.map((value) => `<option value="${escapeHtml(value)}"${selected === value ? " selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select></label>`;
    }

    function scholarsMarkup(scholars, useFilters = true) {
        const query = useFilters ? state.scholarQuery.trim().toLocaleLowerCase() : "";
        const filtered = scholars.filter((scholar) => {
            const searchable = `${recordText(scholar, "name")} ${recordText(scholar, "university")} ${recordText(scholar, "field")}`.toLocaleLowerCase();
            return (!query || searchable.includes(query))
                && (!useFilters || !state.scholarYear || String(scholar.year) === state.scholarYear)
                && (!useFilters || !state.scholarUniversity || recordText(scholar, "university") === state.scholarUniversity)
                && (!useFilters || !state.scholarField || recordText(scholar, "field") === state.scholarField);
        });
        if (!filtered.length) {
            return emptyState(scholars.length ? "noResults" : "emptyScholars", "✳");
        }
        return `<div class="card-grid">${filtered.map((scholar) => {
            const photo = externalUrl(scholar.photo);
            const name = recordText(scholar, "name");
            const image = photo
                ? `<img class="profile-image" src="${escapeHtml(photo)}" alt="${escapeHtml(recordText(scholar, "photoAlt") || name)}" loading="lazy">`
                : `<div class="person-placeholder" aria-hidden="true">И</div>`;
            return `<article class="person-card">${image}<p class="eyebrow">${escapeHtml(String(scholar.year || ""))}</p><h2>${escapeHtml(name)}</h2><p>${escapeHtml(recordText(scholar, "university"))}</p><p>${escapeHtml(recordText(scholar, "field"))}</p>${link(`scholar/${encodeURIComponent(scholar.id)}`, t("readStory"), "text-link")}</article>`;
        }).join("")}</div>`;
    }

    function newsPage() {
        const articles = data.records.articles.filter((article) => article.published && !article.deleted);
        const categories = [...new Set(articles.map((article) => recordText(article, "category")).filter(Boolean))].sort();
        return `${pageIntro("newsEyebrow", "newsTitle", "newsText")}
          <section class="section"><div class="container">
            <div class="filter-bar">
              <label>${t("searchLabel")}<input id="news-search" type="search" placeholder="${t("searchPlaceholder")}" value="${escapeHtml(state.newsQuery)}"></label>
              ${filterSelect("news-category", "categoryFilter", categories, state.newsCategory)}
            </div><div id="news-results">${newsMarkup(articles)}</div>
          </div></section>`;
    }

    function newsMarkup(articles, useFilters = true) {
        const query = useFilters ? state.newsQuery.trim().toLocaleLowerCase() : "";
        const filtered = articles.filter((article) => {
            const text = `${recordText(article, "title")} ${recordText(article, "excerpt")} ${recordText(article, "category")}`.toLocaleLowerCase();
            return (!query || text.includes(query)) && (!useFilters || !state.newsCategory || recordText(article, "category") === state.newsCategory);
        });
        if (!filtered.length) {
            return emptyState(articles.length ? "noResults" : "emptyNews", "✳");
        }
        return `<div class="card-grid">${filtered.map((article) => {
            const image = externalUrl(article.image);
            const title = recordText(article, "title");
            return `<article class="news-card">${image ? `<img class="card-image" src="${escapeHtml(image)}" alt="${escapeHtml(recordText(article, "imageAlt") || title)}" loading="lazy">` : ""}<p class="eyebrow">${escapeHtml(recordText(article, "category"))}</p><h2>${link(`article/${encodeURIComponent(article.id)}`, escapeHtml(title))}</h2><p>${escapeHtml(recordText(article, "excerpt"))}</p><span>${escapeHtml(recordText(article, "date") || t("datePending"))}</span></article>`;
        }).join("")}</div>`;
    }

    function volunteersPage() {
        return `${pageIntro("volunteerEyebrow", "volunteerTitle", "volunteerText")}
          <section class="section section-muted"><div class="container split-layout">
            <div><h2>${t("volunteers")}</h2>${eventsList()}</div>
            <div id="volunteer-form-section">${contactForm("volunteer", "volunteerFormTitle")}</div>
          </div></section>`;
    }

    function sponsorsPage() {
        return `${pageIntro("sponsorsEyebrow", "sponsorsTitle", "sponsorsText")}
          <section class="section"><div class="container"><h2>${t("sponsors")}</h2>${sponsorCards()}</div></section>
          <section class="section section-muted"><div class="container contact-layout"><div><p class="eyebrow">${t("becomePartner")}</p><h2>${t("partnerFormTitle")}</h2><p class="lead">${t("sponsorsText")}</p></div><div id="partner-form-section">${contactForm("partner", "partnerFormTitle")}</div></div></section>`;
    }

    function contactPage() {
        return `${pageIntro("contactEyebrow", "contactTitle", "contactText")}
          <section class="section section-muted"><div class="container contact-layout">${contactDetails()}${contactForm("contact", "contactFormTitle")}</div></section>
          <section class="section"><div class="container"><h2>${t("addressLabel")}</h2><div class="map-placeholder">${t("addressPlaceholder")}</div></div></section>`;
    }

    function legalPage(titleKey) {
        return `${pageIntro(titleKey, titleKey, "legalDraft")}<section class="section"><div class="container legal-draft"><p>${t("legalDraft")}</p></div></section>`;
    }

    function adminPage() {
        return `${pageIntro("adminTitle", "adminTitle", "adminUnavailable")}
          <section class="section"><div class="container admin-notice"><span class="notice-icon" aria-hidden="true">!</span><div><h2>${t("adminTitle")}</h2><p>${t("adminUnavailable")}</p><p class="muted-text">${t("adminCounts")}</p></div></div></section>`;
    }
    function routeContent(route) {
        if (route === "home") return homePage();
        if (route === "about") return aboutPage();
        if (route === "scholarship") return scholarshipPage();
        if (route === "team") return `${pageIntro("team", "team", "emptyTeam")}${teamSection()}`;
        if (route === "scholars") return directoryPage();
        if (route === "volunteers") return volunteersPage();
        if (route === "sponsors") return sponsorsPage();
        if (route === "sponsors#partner-form") return sponsorsPage();
        if (route === "news") return newsPage();
        if (route === "contact") return contactPage();
        if (route.startsWith("scholar/")) {
            const id = route.slice("scholar/".length);
            const scholar = data.records.scholars.find((record) => record.id === id && record.published && !record.deleted);
            if (scholar) {
                const photo = externalUrl(scholar.photo);
                const name = recordText(scholar, "name");
                return `${pageIntro("scholarsEyebrow", "scholarsTitle", "scholarsText")}<section class="section"><article class="container article-body"><p class="eyebrow">${escapeHtml(String(scholar.year || ""))}</p><h1>${escapeHtml(name)}</h1><p>${escapeHtml(recordText(scholar, "university"))}</p><p>${escapeHtml(recordText(scholar, "field"))}</p>${photo ? `<img class="article-image" src="${escapeHtml(photo)}" alt="${escapeHtml(recordText(scholar, "photoAlt") || name)}">` : ""}<p>${escapeHtml(recordText(scholar, "story"))}</p>${link("scholars", t("allScholars"), "text-link")}</article></section>`;
            }
            return `<section class="not-found"><div class="container"><h1>${t("notFoundTitle")}</h1><p>${t("articleMissing")}</p>${link("scholars", t("allScholars"), "button button-outline")}</div></section>`;
        }
        if (route === "privacy") return legalPage("privacyTitle");
        if (route === "terms") return legalPage("termsTitle");
        if (route === "admin") return adminPage();
        if (route.startsWith("article/")) {
            const id = route.slice("article/".length);
            const article = data.records.articles.find((record) => record.id === id && record.published && !record.deleted);
            if (article) {
                const image = externalUrl(article.image);
                const title = recordText(article, "title");
                return `${pageIntro("newsEyebrow", "newsTitle", "datePending")}<section class="section"><article class="container article-body"><p class="eyebrow">${escapeHtml(recordText(article, "category"))}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(recordText(article, "date") || t("datePending"))}</p>${image ? `<img class="article-image" src="${escapeHtml(image)}" alt="${escapeHtml(recordText(article, "imageAlt") || title)}">` : ""}<p>${escapeHtml(recordText(article, "body") || recordText(article, "excerpt"))}</p>${link("news", t("backToNews"), "text-link")}</article></section>`;
            }
            return `${pageIntro("newsEyebrow", "articleMissing", "articleMissing")}<section class="section"><div class="container">${link("news", t("backToNews"), "button button-outline")}</div></section>`;
        }
        return `<section class="not-found"><div class="container"><p class="eyebrow">404</p><h1>${t("notFoundTitle")}</h1><p>${t("notFoundText")}</p>${link("home", t("backHome"), "button button-orange")}</div></section>`;
    }

    function getRoute() {
        const hash = window.location.hash.replace(/^#\/?/, "");
        return (hash.split("?")[0] || "home").split("#")[0];
    }

    function render() {
        const route = getRoute();
        app.innerHTML = shell(routeContent(route));
        document.documentElement.lang = state.language;
        document.querySelector(".skip-link").textContent = t("skipLink");
        document.title = `${route === "home" ? t("homeTitle") : t(navKeys.includes(route) ? route : "notFoundTitle")} — Из Калтыр`;
        document.querySelector('meta[name="description"]').content = t("metaDescription");
        document.querySelector('meta[property="og:description"]').content = t("metaDescription");
        document.querySelector('meta[property="og:title"]').content = `${t("homeTitle")} — Из Калтыр`;
        document.querySelector('meta[property="og:locale"]').content = { ky: "ky_KG", ru: "ru_RU", en: "en_US" }[state.language];
        bindControls();
        animateStatistics();
    }

    function animateStatistics() {
        const counters = [...document.querySelectorAll("[data-stat]")];
        if (!("IntersectionObserver" in window)) {
            counters.forEach((counter) => { counter.textContent = counter.dataset.target; });
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const counter = entry.target;
                observer.unobserve(counter);
                const target = Number(counter.dataset.target);
                const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                if (reducedMotion || target === 0) {
                    counter.textContent = String(target);
                    return;
                }
                const start = performance.now();
                const duration = 750;
                const update = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    counter.textContent = String(Math.round(target * progress));
                    if (progress < 1) window.requestAnimationFrame(update);
                };
                window.requestAnimationFrame(update);
            });
        }, { threshold: 0.4 });
        counters.forEach((counter) => observer.observe(counter));
    }

    function setLanguage(language) {
        if (!translations[language]) return;
        const scrollPosition = window.scrollY;
        state.language = language;
        try {
            localStorage.setItem("iz-kaltyr-language", language);
        } catch (error) {
            if (!(error instanceof DOMException)) throw error;
            console.error("Could not save the selected language in local storage.", error);
        }
        render();
        window.scrollTo(0, scrollPosition);
    }

    function bindControls() {
        const languageSelect = document.getElementById("language-select");
        languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));
        document.getElementById("footer-language-select").addEventListener("change", (event) => setLanguage(event.target.value));

        const menuToggle = document.querySelector(".menu-toggle");
        menuToggle.addEventListener("click", () => {
            state.menuOpen = !state.menuOpen;
            const navigation = document.getElementById("primary-navigation");
            navigation.classList.toggle("is-open", state.menuOpen);
            menuToggle.setAttribute("aria-expanded", String(state.menuOpen));
            menuToggle.setAttribute("aria-label", state.menuOpen ? t("menuClose") : t("menuOpen"));
        });

        document.querySelectorAll(".primary-navigation a").forEach((anchor) => {
            anchor.addEventListener("click", (event) => {
                state.menuOpen = false;
                const targetSeparator = anchor.hash.indexOf("#", 1);
                if (targetSeparator >= 0) {
                    event.preventDefault();
                    window.location.hash = anchor.hash.slice(1);
                }
            });
        });

        const scholarSearch = document.getElementById("scholar-search");
        if (scholarSearch) {
            scholarSearch.addEventListener("input", (event) => {
                state.scholarQuery = event.target.value;
                document.getElementById("directory-results").innerHTML = scholarsMarkup(data.records.scholars.filter((record) => record.published && !record.deleted));
            });
            [["scholar-year", "scholarYear"], ["scholar-university", "scholarUniversity"], ["scholar-field", "scholarField"]].forEach(([elementId, stateKey]) => {
                document.getElementById(elementId).addEventListener("change", (event) => {
                    state[stateKey] = event.target.value;
                    document.getElementById("directory-results").innerHTML = scholarsMarkup(data.records.scholars.filter((record) => record.published && !record.deleted));
                });
            });
        }

        const newsSearch = document.getElementById("news-search");
        if (newsSearch) {
            newsSearch.addEventListener("input", (event) => {
                state.newsQuery = event.target.value;
                document.getElementById("news-results").innerHTML = newsMarkup(data.records.articles.filter((record) => record.published && !record.deleted));
            });
            document.getElementById("news-category").addEventListener("change", (event) => {
                state.newsCategory = event.target.value;
                document.getElementById("news-results").innerHTML = newsMarkup(data.records.articles.filter((record) => record.published && !record.deleted));
            });
        }

        document.querySelectorAll("[data-demo-form]").forEach((form) => {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                validateDemoForm(form);
            });
            form.querySelectorAll("input, textarea").forEach((field) => {
                field.addEventListener("input", () => {
                    const error = form.querySelector(`[data-error-for="${field.name}"]`);
                    if (error) error.textContent = "";
                });
            });
        });
    }

    function validateDemoForm(form) {
        const formData = new FormData(form);
        const values = Object.fromEntries(formData.entries());
        const errors = {};
        const status = form.querySelector(".form-status");
        if (String(values.website || "").trim()) {
            status.textContent = t("formSubmissionBlocked");
            return;
        }
        if (!String(values.name || "").trim()) errors.name = t("formNameRequired");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(values.email || "").trim())) errors.email = t("formEmailRequired");
        if (!String(values.message || "").trim()) errors.message = form.dataset.demoForm === "partner" || form.dataset.demoForm === "volunteer" ? t("formInterestRequired") : t("formMessageRequired");
        if (form.dataset.demoForm === "partner" && !String(values.organization || "").trim()) errors.organization = t("formOrganizationRequired");

        Object.entries(errors).forEach(([fieldName, message]) => {
            const error = form.querySelector(`[data-error-for="${fieldName}"]`);
            if (error) error.textContent = message;
        });
        if (Object.keys(errors).length) {
            status.textContent = Object.values(errors)[0];
            const firstInvalid = form.querySelector(`[name="${Object.keys(errors)[0]}"]`);
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        status.textContent = t("formDemoNotice");
        form.reset();
    }

    window.addEventListener("hashchange", () => {
        state.menuOpen = false;
        render();
        const targetId = window.location.hash.split("#").slice(2).join("#");
        if (targetId) {
            const target = document.getElementById(decodeURIComponent(targetId));
            if (target) target.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    });

    render();
}());
