/* Simplified customer catalogue, 4 November 2026. Source snapshots are in source-catalogue/.
 * Historical identifiers remain resolvable. All prices, schedules, staffing and capacity are local demo terms.
 * No network requests; this overlay is usable from a portable local folder and CommonJS.
 */
(function(root){'use strict';
const base=root.SpaCatalogue||(typeof module!=='undefined'&&module.exports?require('./catalogue-v2.js'):null);
if(!base)throw new Error('Load catalogue-v2.js before catalogue-simplified.js');
const catalogue=JSON.parse(JSON.stringify(base));
for(const key of ['services','programs','classes','packageOffers','membershipOffers','giftOffers','campaigns','loyaltyRewards','eventTypes','retailProducts','treatmentPrograms','facilities','retailCollections'])
 for(const item of catalogue[key]||[])item.active=false;
const additions={"services":[{"id":"src-traditional-turkish-bath","sourceId":"traditional-turkish-bath","name":"Geleneksel Türk hamamı","names":{"tr":"Geleneksel Türk hamamı","az":"Ənənəvi türk hamamı","ru":"Традиционный турецкий хаммам"},"description":"Kese ve köpük masajı.","descriptions":{"tr":"Kese ve köpük masajı.","az":"Kisələnmə və köpük masajı.","ru":"Кесе и пенный массаж."},"sourceNames":{"tr":"Geleneksel Türk hamamı","az":"Ənənəvi türk hamamı","ru":"Традиционный турецкий хаммам"},"sourceDescriptions":{"tr":"Kese ve köpük masajı.","az":"Kisələnmə və köpük masajı.","en":"Body exfoliation with a kese glove and foam massage."},"categoryId":"hamam","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"hamam-marble","mediaSubjectId":"hamam","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-traditional-turkish-bath-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":9000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-aromatic-foam-bath","sourceId":"aromatic-foam-bath","name":"Aromatik köpük hamamı","names":{"tr":"Aromatik köpük hamamı","az":"Ətirli köpük hamamı","ru":"Ароматный пенный хаммам"},"description":"Hamamın mermer göbek taşında aromatik köpük uygulaması.","descriptions":{"tr":"Hamamın mermer göbek taşında aromatik köpük uygulaması.","az":"Hamamın mərmər masasında ətirli köpüklə qulluq.","ru":"Ароматная пена на мраморном столе хаммама."},"sourceNames":{"tr":"Aromatik köpük hamamı","az":"Ətirli köpük hamamı","ru":"Ароматный пенный хаммам"},"sourceDescriptions":{"tr":"Hamamın mermer göbek taşında aromatik köpük uygulaması.","az":"Hamamın mərmər masasında ətirli köpüklə qulluq.","en":"Aromatic foam applied on the hamam marble table."},"categoryId":"hamam","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"hamam-marble","mediaSubjectId":"hamam","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-aromatic-foam-bath-15","label":"15 dk","labels":{"tr":"15 dakika","az":"15 dəqiqə","ru":"15 минут"},"duration":15,"priceMinor":9000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-kese-bath","sourceId":"kese-bath","name":"Kese","names":{"tr":"Kese","az":"Kisələnmə","ru":"Кесе"},"description":"Vücuda kese uygulanması.","descriptions":{"tr":"Vücuda kese uygulanması.","az":"Xüsusi kisə ilə bədənin təmizlənməsi.","ru":"Обработка тела рукавицей кесе."},"sourceNames":{"tr":"Kese","az":"Kisələnmə","ru":"Кесе"},"sourceDescriptions":{"tr":"Vücuda kese uygulanması.","az":"Xüsusi kisə ilə bədənin təmizlənməsi.","en":"Body exfoliation using a kese glove."},"categoryId":"hamam","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"hamam-marble","mediaSubjectId":"hamam","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-kese-bath-15","label":"15 dk","labels":{"tr":"15 dakika","az":"15 dəqiqə","ru":"15 минут"},"duration":15,"priceMinor":9000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-sultan-saba-ritual","sourceId":"sultan-saba-ritual","name":"Sultan Saba ritüeli","names":{"tr":"Sultan Saba ritüeli","az":"Sultan Saba ritualı","ru":"Ритуал Sultan Saba"},"description":"Siyah sabun, kese, köpük masajı ve Lokum peelingi.","descriptions":{"tr":"Siyah sabun, kese, köpük masajı ve Lokum peelingi.","az":"Qara sabun, kisələnmə, köpük masajı və Lokum skrabı.","ru":"Чёрное мыло, кесе, пенный массаж и пилинг Lokum."},"sourceNames":{"tr":"Sultan Saba ritüeli","az":"Sultan Saba ritualı","ru":"Ритуал Sultan Saba"},"sourceDescriptions":{"tr":"Siyah sabun, kese, köpük masajı ve Lokum peelingi.","az":"Qara sabun, kisələnmə, köpük masajı və Lokum skrabı.","en":"Black soap, kese exfoliation, foam massage and Lokum scrub."},"categoryId":"hamam","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"hamam-marble","mediaSubjectId":"hamam","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-sultan-saba-ritual-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":9000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-sultan-saba-peeling","sourceId":"sultan-saba-peeling","name":"Sultan Saba peelingi","names":{"tr":"Sultan Saba peelingi","az":"Sultan Saba pilinqi","ru":"Пилинг Sultan Saba"},"description":"Sultan Saba Lokum, yağ ve tuzla vücut peelingi.","descriptions":{"tr":"Sultan Saba Lokum, yağ ve tuzla vücut peelingi.","az":"Sultan Saba Lokum, yağ və duz ilə bədən pilinqi.","ru":"Пилинг Sultan Saba."},"sourceNames":{"tr":"Sultan Saba peelingi","az":"Sultan Saba pilinqi","ru":"Пилинг Sultan Saba"},"sourceDescriptions":{"tr":"Sultan Saba Lokum, yağ ve tuzla vücut peelingi.","az":"Sultan Saba Lokum, yağ və duz ilə bədən pilinqi.","en":"Body exfoliation with Sultan Saba Lokum, oil and salt."},"categoryId":"hamam","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"hamam-marble","mediaSubjectId":"hamam","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-sultan-saba-peeling-15","label":"15 dk","labels":{"tr":"15 dakika","az":"15 dəqiqə","ru":"15 минут"},"duration":15,"priceMinor":9000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-chi-yang-massage","sourceId":"chi-yang-massage","name":"Chi-Yang (İsveç) masajı","names":{"tr":"Chi-Yang (İsveç) masajı","az":"Çin-Yanq (İsveç) masajı","ru":"Массаж Чи-Ян (шведский)"},"description":"Tercihlerinize göre uyarlanan bireysel masaj.","descriptions":{"tr":"Tercihlerinize göre uyarlanan bireysel masaj.","az":"İstəyinizə uyğunlaşdırılan fərdi masaj.","ru":"Массаж Чи-Ян в шведской технике."},"sourceNames":{"tr":"Chi-Yang (İsveç) masajı","az":"Çin-Yanq (İsveç) masajı","ru":"Массаж Чи-Ян (шведский)"},"sourceDescriptions":{"tr":"Tercihlerinize göre uyarlanan bireysel masaj.","az":"İstəyinizə uyğunlaşdırılan fərdi masaj.","en":"An individual massage adapted to your preferences."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-chi-yang-massage-50","label":"50 dk","labels":{"tr":"50 dakika","az":"50 dəqiqə","ru":"50 минут"},"duration":50,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-hot-oil-massage","sourceId":"hot-oil-massage","name":"Sıcak yağlı SPA masajı","names":{"tr":"Sıcak yağlı SPA masajı","az":"İsti yağlı SPA masajı","ru":"SPA-массаж с тёплым маслом"},"description":"Sıcak yağla vücut masajı.","descriptions":{"tr":"Sıcak yağla vücut masajı.","az":"İsti yağla bədən masajı.","ru":"SPA-массаж с тёплым маслом."},"sourceNames":{"tr":"Sıcak yağlı SPA masajı","az":"İsti yağlı SPA masajı","ru":"SPA-массаж с тёплым маслом"},"sourceDescriptions":{"tr":"Sıcak yağla vücut masajı.","az":"İsti yağla bədən masajı.","en":"Body massage using warm oil."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-hot-oil-massage-50","label":"50 dk","labels":{"tr":"50 dakika","az":"50 dəqiqə","ru":"50 минут"},"duration":50,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-chakra-stone-massage","sourceId":"chakra-stone-massage","name":"Çakra taşlarıyla masaj","names":{"tr":"Çakra taşlarıyla masaj","az":"Çakra daşları ilə masaj","ru":"Массаж камнями чакр"},"description":"Isıtılmış volkanik taşlarla vücut masajı.","descriptions":{"tr":"Isıtılmış volkanik taşlarla vücut masajı.","az":"İsidilmiş vulkanik daşlarla bədən masajı.","ru":"Массаж камнями чакр."},"sourceNames":{"tr":"Çakra taşlarıyla masaj","az":"Çakra daşları ilə masaj","ru":"Массаж камнями чакр"},"sourceDescriptions":{"tr":"Isıtılmış volkanik taşlarla vücut masajı.","az":"İsidilmiş vulkanik daşlarla bədən masajı.","en":"Body massage using heated volcanic stones."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-chakra-stone-massage-70","label":"70 dk","labels":{"tr":"70 dakika","az":"70 dəqiqə","ru":"70 минут"},"duration":70,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-head-massage","sourceId":"head-massage","name":"Baş masajı","names":{"tr":"Baş masajı","az":"Baş masajı","ru":"Массаж головы"},"description":"Baş, sırt ve omuzlara hafif ve orta basınçlı masaj.","descriptions":{"tr":"Baş, sırt ve omuzlara hafif ve orta basınçlı masaj.","az":"Baş, kürək və çiyinlərə yüngül və orta təzyiqli masaj.","ru":"Массаж головы, спины и плеч с лёгким и средним давлением."},"sourceNames":{"tr":"Baş masajı","az":"Baş masajı","ru":"Массаж головы"},"sourceDescriptions":{"tr":"Baş, sırt ve omuzlara hafif ve orta basınçlı masaj.","az":"Baş, kürək və çiyinlərə yüngül və orta təzyiqli masaj.","en":"Light to medium pressure massage for your head, back and shoulders."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-head-massage-40","label":"40 dk","labels":{"tr":"40 dakika","az":"40 dəqiqə","ru":"40 минут"},"duration":40,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-indian-head-hair-mask","sourceId":"indian-head-hair-mask","name":"Hint baş masajı ve saç maskesi","names":{"tr":"Hint baş masajı ve saç maskesi","az":"Hind baş masajı və saç maskası","ru":"Индийский массаж головы и маска для волос"},"description":"Sırt, baş ve omuz masajının ardından saç maskesi.","descriptions":{"tr":"Sırt, baş ve omuz masajının ardından saç maskesi.","az":"Kürək, baş və çiyin masajından sonra saç maskası.","ru":"Индийский массаж головы и маска для волос."},"sourceNames":{"tr":"Hint baş masajı ve saç maskesi","az":"Hind baş masajı və saç maskası","ru":"Индийский массаж головы и маска для волос"},"sourceDescriptions":{"tr":"Sırt, baş ve omuz masajının ardından saç maskesi.","az":"Kürək, baş və çiyin masajından sonra saç maskası.","en":"Back, head and shoulder massage followed by a hair mask."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-indian-head-hair-mask-45","label":"45 dk","labels":{"tr":"45 dakika","az":"45 dəqiqə","ru":"45 минут"},"duration":45,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-shirodhara-massage","sourceId":"shirodhara-massage","name":"Shirodhara masajı","names":{"tr":"Shirodhara masajı","az":"Şirodhara masajı","ru":"Массаж Широдхара"},"description":"Shirodhara masajıyla kendinize zaman ayırın.","descriptions":{"tr":"Shirodhara masajıyla kendinize zaman ayırın.","az":"Şirodhara masajı ilə özünüzə vaxt ayırın.","ru":"Массаж Широдхара."},"sourceNames":{"tr":"Shirodhara masajı","az":"Şirodhara masajı","ru":"Массаж Широдхара"},"sourceDescriptions":{"tr":"Shirodhara masajıyla kendinize zaman ayırın. Uygulama ayrıntılarını uzmanla netleştirin.","az":"Şirodhara masajı ilə özünüzə vaxt ayırın. Tətbiqin detallarını mütəxəssislə dəqiqləşdirin.","en":"Make time for a Shirodhara massage. Ask the specialist about the details of the session."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shirodhara-massage-70","label":"70 dk","labels":{"tr":"70 dakika","az":"70 dəqiqə","ru":"70 минут"},"duration":70,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-lomi-lomi-massage","sourceId":"lomi-lomi-massage","name":"Lomi Lomi masajı","names":{"tr":"Lomi Lomi masajı","az":"Lomi Lomi masajı","ru":"Массаж Ломи-Ломи"},"description":"Hawaii tarzı hareketler ve dokunuşlarla vücut masajı.","descriptions":{"tr":"Hawaii tarzı hareketler ve dokunuşlarla vücut masajı.","az":"Havay üslubunda hərəkətlər və toxunuşlarla bədən masajı.","ru":"Массаж Ломи-Ломи."},"sourceNames":{"tr":"Lomi Lomi masajı","az":"Lomi Lomi masajı","ru":"Массаж Ломи-Ломи"},"sourceDescriptions":{"tr":"Hawaii tarzı hareketler ve dokunuşlarla vücut masajı.","az":"Havay üslubunda hərəkətlər və toxunuşlarla bədən masajı.","en":"Hawaiian style massage using flowing touch and stretching."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-lomi-lomi-massage-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-sultan-saba-candle-massage","sourceId":"sultan-saba-candle-massage","name":"Sultan Saba mum masajı","names":{"tr":"Sultan Saba mum masajı","az":"Sultan Saba şam masajı","ru":"Свечной массаж Sultan Saba"},"description":"Isıtılmış mum yağıyla masaj.","descriptions":{"tr":"Isıtılmış mum yağıyla masaj.","az":"İsidilmiş şam yağı ilə masaj.","ru":"Массаж с тёплым свечным маслом."},"sourceNames":{"tr":"Sultan Saba mum masajı","az":"Sultan Saba şam masajı","ru":"Свечной массаж Sultan Saba"},"sourceDescriptions":{"tr":"Isıtılmış mum yağıyla masaj. Vücut sargısının dahil olup olmadığını teyit edin.","az":"İsidilmiş şam yağı ilə masaj. Bədən bükməsinin daxil olub-olmadığını dəqiqləşdirin.","en":"Massage with warmed candle oil. Ask whether a body wrap is included."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-sultan-saba-candle-massage-70","label":"70 dk","labels":{"tr":"70 dakika","az":"70 dəqiqə","ru":"70 минут"},"duration":70,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-herbal-massage","sourceId":"herbal-massage","name":"Bitki keseleriyle masaj","names":{"tr":"Bitki keseleriyle masaj","az":"Bitki kisələri ilə masaj","ru":"Массаж травяными мешочками"},"description":"Bitkisel keselerle vücut masajı.","descriptions":{"tr":"Bitkisel keselerle vücut masajı.","az":"Bitki tərkibli xüsusi vasitələrlə bədən masajı.","ru":"Массаж травяными мешочками."},"sourceNames":{"tr":"Bitki keseleriyle masaj","az":"Bitki kisələri ilə masaj","ru":"Массаж травяными мешочками"},"sourceDescriptions":{"tr":"Bitkisel keselerle vücut masajı.","az":"Bitki tərkibli xüsusi vasitələrlə bədən masajı.","en":"Body massage using herbal compress tools."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-herbal-massage-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-local-massage","sourceId":"local-massage","name":"Bölgesel masaj","names":{"tr":"Bölgesel masaj","az":"Lokal masaj","ru":"Локальный массаж"},"description":"Seçilen vücut bölgesine yönelik masaj.","descriptions":{"tr":"Seçilen vücut bölgesine yönelik masaj.","az":"Seçilmiş bədən nahiyəsinə yönələn masaj.","ru":"Локальный массаж."},"sourceNames":{"tr":"Bölgesel masaj","az":"Lokal masaj","ru":"Локальный массаж"},"sourceDescriptions":{"tr":"Seçilen vücut bölgesine yönelik masaj.","az":"Seçilmiş bədən nahiyəsinə yönələn masaj.","en":"Massage focused on a chosen area."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-local-massage-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-foot-reflexology","sourceId":"foot-reflexology","name":"Ayak refleksolojisi","names":{"tr":"Ayak refleksolojisi","az":"Ayaq refleksologiyası","ru":"Рефлексология стоп"},"description":"Ayaktaki noktalara basınç uygulaması ve ayak masajı.","descriptions":{"tr":"Ayaktaki noktalara basınç uygulaması ve ayak masajı.","az":"Ayaqdakı nöqtələrə təzyiq və ayaq masajı.","ru":"Рефлексология стоп."},"sourceNames":{"tr":"Ayak refleksolojisi","az":"Ayaq refleksologiyası","ru":"Рефлексология стоп"},"sourceDescriptions":{"tr":"Ayaktaki noktalara basınç uygulaması ve ayak masajı.","az":"Ayaqdakı nöqtələrə təzyiq və ayaq masajı.","en":"Pressure applied to points on the feet, followed by foot massage."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-foot-reflexology-50","label":"50 dk","labels":{"tr":"50 dakika","az":"50 dəqiqə","ru":"50 минут"},"duration":50,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-foot-massage","sourceId":"foot-massage","name":"Ayak masajı","names":{"tr":"Ayak masajı","az":"Ayaq masajı","ru":"Массаж стоп"},"description":"El ve parmak basıncıyla ayak masajı.","descriptions":{"tr":"El ve parmak basıncıyla ayak masajı.","az":"Əl və barmaq təzyiqi ilə ayaq masajı.","ru":"Массаж стоп."},"sourceNames":{"tr":"Ayak masajı","az":"Ayaq masajı","ru":"Массаж стоп"},"sourceDescriptions":{"tr":"El ve parmak basıncıyla ayak masajı.","az":"Əl və barmaq təzyiqi ilə ayaq masajı.","en":"Foot massage using hand and finger pressure."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-foot-massage-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-foot-massage-sultan-mask","sourceId":"foot-massage-sultan-mask","name":"Ayak masajı ve Sultan maskesi","names":{"tr":"Ayak masajı ve Sultan maskesi","az":"Ayaq masajı və Sultan maskası","ru":"Массаж стоп и маска Sultan"},"description":"Ayak masajı ve bakım, son aşamada serinletici jel uygulaması.","descriptions":{"tr":"Ayak masajı ve bakım, son aşamada serinletici jel uygulaması.","az":"Ayaq masajı və qulluq, sonda sərinləşdirici gel tətbiqi.","ru":"Массаж стоп и маска Sultan."},"sourceNames":{"tr":"Ayak masajı ve Sultan maskesi","az":"Ayaq masajı və Sultan maskası","ru":"Массаж стоп и маска Sultan"},"sourceDescriptions":{"tr":"Ayak masajı ve bakım, son aşamada serinletici jel uygulaması.","az":"Ayaq masajı və qulluq, sonda sərinləşdirici gel tətbiqi.","en":"Foot massage and care, finished with a cooling gel."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-foot-massage-sultan-mask-40","label":"40 dk","labels":{"tr":"40 dakika","az":"40 dəqiqə","ru":"40 минут"},"duration":40,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-anti-cellulite-massage","sourceId":"anti-cellulite-massage","name":"Selülit masajı","names":{"tr":"Selülit masajı","az":"Anti-sellülit masajı","ru":"Массаж «Антицеллюлитный»"},"description":"Selülit masajı olarak sunulan vücut uygulaması.","descriptions":{"tr":"Selülit masajı olarak sunulan vücut uygulaması.","az":"Anti-sellülit adı ilə təqdim olunan bədən masajı.","ru":"Массаж «Антицеллюлитный»."},"sourceNames":{"tr":"Selülit masajı","az":"Anti-sellülit masajı","ru":"Массаж «Антицеллюлитный»"},"sourceDescriptions":{"tr":"Selülit masajı olarak sunulan vücut uygulaması.","az":"Anti-sellülit adı ilə təqdim olunan bədən masajı.","en":"A body massage offered as an anti-cellulite treatment."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-anti-cellulite-massage-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-styx-oil-gel-massage","sourceId":"styx-oil-gel-massage","name":"STYX yağ veya jel masajı","names":{"tr":"STYX yağ veya jel masajı","az":"STYX yağı və ya geli ilə masaj","ru":"Массаж с маслом или гелем STYX"},"description":"Aroma Derm vücut bakımı öncesinde STYX yağ veya jel masajı.","descriptions":{"tr":"Aroma Derm vücut bakımı öncesinde STYX yağ veya jel masajı.","az":"Aroma Derm bədən qulluğundan əvvəl STYX yağı və ya geli ilə masaj.","ru":"Массаж с маслом или гелем STYX."},"sourceNames":{"tr":"STYX yağ veya jel masajı","az":"STYX yağı və ya geli ilə masaj","ru":"Массаж с маслом или гелем STYX"},"sourceDescriptions":{"tr":"Aroma Derm vücut bakımı öncesinde STYX yağ veya jel masajı.","az":"Aroma Derm bədən qulluğundan əvvəl STYX yağı və ya geli ilə masaj.","en":"Massage with STYX oil or gel before Aroma Derm body care."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-styx-oil-gel-massage-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":12000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-classic-aroma-derm-facial","sourceId":"classic-aroma-derm-facial","name":"Aroma Derm klasik yüz bakımı","names":{"tr":"Aroma Derm klasik yüz bakımı","az":"Aroma Derm klassik üz qulluğu","ru":"Классический уход за лицом Aroma Derm"},"description":"Cilt tipine göre temizleme, maske ve kremle masaj.","descriptions":{"tr":"Cilt tipine göre temizleme, maske ve kremle masaj.","az":"Dəri tipinə uyğun təmizləmə, maska və krem ilə masaj.","ru":"Классический уход за лицом Aroma Derm."},"sourceNames":{"tr":"Aroma Derm klasik yüz bakımı","az":"Aroma Derm klassik üz qulluğu","ru":"Классический уход за лицом Aroma Derm"},"sourceDescriptions":{"tr":"Cilt tipine göre temizleme, maske ve kremle masaj.","az":"Dəri tipinə uyğun təmizləmə, maska və krem ilə masaj.","en":"Cleansing, mask and cream massage selected for the skin type."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-classic-aroma-derm-facial-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-prestige-facial","sourceId":"prestige-facial","name":"Prestij yüz bakımı","names":{"tr":"Prestij yüz bakımı","az":"Prestij üz qulluğu","ru":"Уход за лицом «Престиж»"},"description":"Prestij yüz bakımı için kendinize zaman ayırın.","descriptions":{"tr":"Prestij yüz bakımı için kendinize zaman ayırın.","az":"Prestij üz qulluğu üçün özünüzə vaxt ayırın.","ru":"Уход за лицом «Престиж»."},"sourceNames":{"tr":"Prestij yüz bakımı","az":"Prestij üz qulluğu","ru":"Уход за лицом «Престиж»"},"sourceDescriptions":{"tr":"Prestij yüz bakımı için kendinize zaman ayırın. Bakımın ayrıntılarını uzmanla netleştirin.","az":"Prestij üz qulluğu üçün özünüzə vaxt ayırın. Qulluğun detallarını mütəxəssislə dəqiqləşdirin.","en":"Make time for a Prestige facial. Ask the specialist about the details of the treatment."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-prestige-facial-70","label":"70 dk","labels":{"tr":"70 dakika","az":"70 dəqiqə","ru":"70 минут"},"duration":70,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-amethyst-facial","sourceId":"amethyst-facial","name":"Ametist taşlarıyla yüz bakımı","names":{"tr":"Ametist taşlarıyla yüz bakımı","az":"Ametist daşları ilə üz qulluğu","ru":"Уход за лицом с аметистом"},"description":"Temizleme, ampul, iki maske ve ametist taşlarıyla yüz masajı.","descriptions":{"tr":"Temizleme, ampul, iki maske ve ametist taşlarıyla yüz masajı.","az":"Təmizləmə, ampula, iki maska və ametist daşları ilə üz masajı.","ru":"Уход за лицом с аметистом."},"sourceNames":{"tr":"Ametist taşlarıyla yüz bakımı","az":"Ametist daşları ilə üz qulluğu","ru":"Уход за лицом с аметистом"},"sourceDescriptions":{"tr":"Temizleme, ampul, iki maske ve ametist taşlarıyla yüz masajı.","az":"Təmizləmə, ampula, iki maska və ametist daşları ilə üz masajı.","en":"Cleansing, ampoule, two masks and an amethyst stone facial massage."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-amethyst-facial-70","label":"70 dk","labels":{"tr":"70 dakika","az":"70 dəqiqə","ru":"70 минут"},"duration":70,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-eye-area-care","sourceId":"eye-area-care","name":"Göz çevresi bakımı","names":{"tr":"Göz çevresi bakımı","az":"Gözətrafı dəriyə qulluq","ru":"Уход за областью вокруг глаз"},"description":"Göz çevresine yönelik bakım ve masaj.","descriptions":{"tr":"Göz çevresine yönelik bakım ve masaj.","az":"Gözətrafı dəriyə qulluq və masaj.","ru":"Уход за областью вокруг глаз."},"sourceNames":{"tr":"Göz çevresi bakımı","az":"Gözətrafı dəriyə qulluq","ru":"Уход за областью вокруг глаз"},"sourceDescriptions":{"tr":"Göz çevresine yönelik bakım ve masaj.","az":"Gözətrafı dəriyə qulluq və masaj.","en":"Care and massage for the eye area."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-eye-area-care-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-express-aroma-derm-facial","sourceId":"express-aroma-derm-facial","name":"Aroma Derm ekspres yüz bakımı","names":{"tr":"Aroma Derm ekspres yüz bakımı","az":"Aroma Derm ekspress üz qulluğu","ru":"Экспресс-уход за лицом Aroma Derm"},"description":"Aroma Derm ürünleriyle kısa yüz bakımı.","descriptions":{"tr":"Aroma Derm ürünleriyle kısa yüz bakımı.","az":"Aroma Derm məhsulları ilə qısa üz qulluğu.","ru":"Экспресс-уход за лицом Aroma Derm."},"sourceNames":{"tr":"Aroma Derm ekspres yüz bakımı","az":"Aroma Derm ekspress üz qulluğu","ru":"Экспресс-уход за лицом Aroma Derm"},"sourceDescriptions":{"tr":"Aroma Derm ürünleriyle kısa yüz bakımı.","az":"Aroma Derm məhsulları ilə qısa üz qulluğu.","en":"A shorter facial using Aroma Derm products."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-express-aroma-derm-facial-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-aroma-derm-ampoule-facial","sourceId":"aroma-derm-ampoule-facial","name":"Aroma Derm ampullü yüz bakımı","names":{"tr":"Aroma Derm ampullü yüz bakımı","az":"Aroma Derm ampulaları ilə üz qulluğu","ru":"Уход за лицом с ампулами Aroma Derm"},"description":"Aroma Derm ampulüyle yüz bakımı.","descriptions":{"tr":"Aroma Derm ampulüyle yüz bakımı.","az":"Aroma Derm ampulası ilə üz qulluğu.","ru":"Уход за лицом с ампулами Aroma Derm."},"sourceNames":{"tr":"Aroma Derm ampullü yüz bakımı","az":"Aroma Derm ampulaları ilə üz qulluğu","ru":"Уход за лицом с ампулами Aroma Derm"},"sourceDescriptions":{"tr":"Aroma Derm ampulüyle yüz bakımı.","az":"Aroma Derm ampulası ilə üz qulluğu.","en":"Facial care with an Aroma Derm ampoule."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-aroma-derm-ampoule-facial-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-aroma-derm-extra-facial","sourceId":"aroma-derm-extra-facial","name":"Aroma Derm Extra yüz bakımı","names":{"tr":"Aroma Derm Extra yüz bakımı","az":"Aroma Derm Extra üz qulluğu","ru":"Уход за лицом Aroma Derm Extra"},"description":"Ampul ve konsantreyle yüz bakımı.","descriptions":{"tr":"Ampul ve konsantreyle yüz bakımı.","az":"Ampula və konsentrat ilə üz qulluğu.","ru":"Уход за лицом с ампулами и концентратом."},"sourceNames":{"tr":"Aroma Derm Extra yüz bakımı","az":"Aroma Derm Extra üz qulluğu","ru":"Уход за лицом Aroma Derm Extra"},"sourceDescriptions":{"tr":"Ampul ve konsantreyle yüz bakımı.","az":"Ampula və konsentrat ilə üz qulluğu.","en":"Facial care with an ampoule and concentrate."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-aroma-derm-extra-facial-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-lifting-vitamin-mask","sourceId":"lifting-vitamin-mask","name":"Lifting vitamin maskesi","names":{"tr":"Lifting vitamin maskesi","az":"Liftinq vitamin maskası","ru":"Витаминная лифтинг-маска"},"description":"Vitamin maskesi ve elle masaj.","descriptions":{"tr":"Vitamin maskesi ve elle masaj.","az":"Vitamin maskası və əl masajı.","ru":"Витаминная маска и ручной массаж."},"sourceNames":{"tr":"Lifting vitamin maskesi","az":"Liftinq vitamin maskası","ru":"Витаминная лифтинг-маска"},"sourceDescriptions":{"tr":"Vitamin maskesi ve elle masaj. Süre 50 veya 60 dakika; mekânla teyit edin.","az":"Vitamin maskası və əl masajı. Müddət 50 və ya 60 dəqiqədir; məkanla dəqiqləşdirin.","en":"Vitamin mask with manual massage. The duration is 50 or 60 minutes; confirm with the venue."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-lifting-vitamin-mask-50","label":"50 dk","labels":{"tr":"50 dakika","az":"50 dəqiqə","ru":"50 минут"},"duration":50,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-modelage-mask","sourceId":"modelage-mask","name":"Modelage maskesi","names":{"tr":"Modelage maskesi","az":"Modelage maskası","ru":"Маска Modelage"},"description":"Modelage yüz maskesi.","descriptions":{"tr":"Modelage yüz maskesi.","az":"Modelage üz maskası.","ru":"Маска Modelage."},"sourceNames":{"tr":"Modelage maskesi","az":"Modelage maskası","ru":"Маска Modelage"},"sourceDescriptions":{"tr":"Modelage yüz maskesi. Cildinize uygunluğunu uzmanla konuşun.","az":"Modelage üz maskası. Dərinizə uyğunluğu barədə mütəxəssislə danışın.","en":"A Modelage face mask. Discuss suitability for your skin with the specialist."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-modelage-mask-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-face-mask","sourceId":"face-mask","name":"Yüz maskesi","names":{"tr":"Yüz maskesi","az":"Üz maskası","ru":"Маска для лица"},"description":"Cilde göre seçilen yüz maskesi.","descriptions":{"tr":"Cilde göre seçilen yüz maskesi.","az":"Dəriyə uyğun üz maskası.","ru":"Маска для лица."},"sourceNames":{"tr":"Yüz maskesi","az":"Üz maskası","ru":"Маска для лица"},"sourceDescriptions":{"tr":"Cilde göre seçilen yüz maskesi.","az":"Dəriyə uyğun üz maskası.","en":"Face mask selected for the skin."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-face-mask-15","label":"15 dk","labels":{"tr":"15 dakika","az":"15 dəqiqə","ru":"15 минут"},"duration":15,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-face-massage","sourceId":"face-massage","name":"Yüz masajı","names":{"tr":"Yüz masajı","az":"Üz masajı","ru":"Массаж лица"},"description":"Temizleme, tonik, peeling ve yüz masajı.","descriptions":{"tr":"Temizleme, tonik, peeling ve yüz masajı.","az":"Təmizləmə, tonik, skrab və üz masajı.","ru":"Массаж лица."},"sourceNames":{"tr":"Yüz masajı","az":"Üz masajı","ru":"Массаж лица"},"sourceDescriptions":{"tr":"Temizleme, tonik, peeling ve yüz masajı.","az":"Təmizləmə, tonik, skrab və üz masajı.","en":"Cleansing, toning, scrub and facial massage."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-face-massage-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-express-skin-burst-up-care","sourceId":"express-skin-burst-up-care","name":"Ekspres cilt bakımı","names":{"tr":"Ekspres cilt bakımı","az":"Ekspress dəri qulluğu","ru":"Экспресс-уход за кожей"},"description":"Kısa bir cilt bakımı için ayrılan zaman.","descriptions":{"tr":"Kısa bir cilt bakımı için ayrılan zaman.","az":"Qısa dəri qulluğu üçün ayrılan vaxt.","ru":"Экспресс-уход за кожей."},"sourceNames":{"tr":"Ekspres cilt bakımı","az":"Ekspress dəri qulluğu","ru":"Экспресс-уход за кожей"},"sourceDescriptions":{"tr":"Kısa bir cilt bakımı için ayrılan zaman. Uygulama ayrıntılarını uzmanla netleştirin.","az":"Qısa dəri qulluğu üçün ayrılan vaxt. Tətbiqin detallarını mütəxəssislə dəqiqləşdirin.","en":"Time for a shorter skin care session. Ask the specialist about the treatment details."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-express-skin-burst-up-care-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":11000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-chakra-balance","sourceId":"chakra-balance","name":"Çakra dengeleme","names":{"tr":"Çakra dengeleme","az":"Çakra balansı","ru":"Баланс чакр"},"description":"Çakra dengeleme uygulaması.","descriptions":{"tr":"Çakra dengeleme uygulaması.","az":"Çakra balansı tətbiqi.","ru":"Процедура «Баланс чакр»."},"sourceNames":{"tr":"Çakra dengeleme","az":"Çakra balansı","ru":"Баланс чакр"},"sourceDescriptions":{"tr":"Çakra dengeleme uygulaması hakkında ekipten bilgi alın.","az":"Çakra balansı tətbiqi barədə komandadan məlumat alın.","en":"Ask the team about the chakra balance session."},"categoryId":"massage","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"massage-room","mediaSubjectId":"massage","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-chakra-balance-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":12000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-body-wrap","sourceId":"body-wrap","name":"Vücut sargısı","names":{"tr":"Vücut sargısı","az":"Bədən bükməsi","ru":"Обертывание тела"},"description":"Isıtıcı örtükle vücut bakımı.","descriptions":{"tr":"Isıtıcı örtükle vücut bakımı.","az":"İsidici örtük ilə bədən qulluğu.","ru":"Обертывание тела."},"sourceNames":{"tr":"Vücut sargısı","az":"Bədən bükməsi","ru":"Обертывание тела"},"sourceDescriptions":{"tr":"Isıtıcı örtükle vücut bakımı.","az":"İsidici örtük ilə bədən qulluğu.","en":"Body care using a warming blanket."},"categoryId":"body","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"body-room","mediaSubjectId":"body-care","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-body-wrap-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":10000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-aroma-derm-body-wrap","sourceId":"aroma-derm-body-wrap","name":"Aroma Derm vücut sargısı","names":{"tr":"Aroma Derm vücut sargısı","az":"Aroma Derm bədən bükməsi","ru":"Обертывание Aroma Derm"},"description":"Aroma Derm jelleriyle vücut sargısı.","descriptions":{"tr":"Aroma Derm jelleriyle vücut sargısı.","az":"Aroma Derm gelləri ilə bədən bükməsi.","ru":"Обертывание Aroma Derm."},"sourceNames":{"tr":"Aroma Derm vücut sargısı","az":"Aroma Derm bədən bükməsi","ru":"Обертывание Aroma Derm"},"sourceDescriptions":{"tr":"Aroma Derm jelleriyle vücut sargısı.","az":"Aroma Derm gelləri ilə bədən bükməsi.","en":"Body wrap using Aroma Derm gels."},"categoryId":"body","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"body-room","mediaSubjectId":"body-care","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-aroma-derm-body-wrap-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":10000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-aroma-derm-bandage","sourceId":"aroma-derm-bandage","name":"Aroma Derm bandaj sargısı","names":{"tr":"Aroma Derm bandaj sargısı","az":"Aroma Derm bandaj sarğısı","ru":"Бандажное обертывание Aroma Derm"},"description":"Yağ ve bakım ürünleriyle bandaj uygulaması.","descriptions":{"tr":"Yağ ve bakım ürünleriyle bandaj uygulaması.","az":"Yağ və qulluq məhsulları ilə bandaj tətbiqi.","ru":"Бандажное обертывание Aroma Derm."},"sourceNames":{"tr":"Aroma Derm bandaj sargısı","az":"Aroma Derm bandaj sarğısı","ru":"Бандажное обертывание Aroma Derm"},"sourceDescriptions":{"tr":"Yağ ve bakım ürünleriyle bandaj uygulaması.","az":"Yağ və qulluq məhsulları ilə bandaj tətbiqi.","en":"Bandage application with oils and body care products."},"categoryId":"body","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"body-room","mediaSubjectId":"body-care","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-aroma-derm-bandage-45","label":"45 dk","labels":{"tr":"45 dakika","az":"45 dəqiqə","ru":"45 минут"},"duration":45,"priceMinor":10000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-jet-shower","sourceId":"jet-shower","name":"Hidromasaj duşu","names":{"tr":"Hidromasaj duşu","az":"Hidromasaj duşu","ru":"Гидромассажный душ"},"description":"Seçilen vücut bölgelerine yönlendirilen su akışı.","descriptions":{"tr":"Seçilen vücut bölgelerine yönlendirilen su akışı.","az":"Seçilmiş bədən nahiyələrinə istiqamətləndirilən su axını.","ru":"Гидромассажный душ."},"sourceNames":{"tr":"Hidromasaj duşu","az":"Hidromasaj duşu","ru":"Гидромассажный душ"},"sourceDescriptions":{"tr":"Seçilen vücut bölgelerine yönlendirilen su akışı.","az":"Seçilmiş bədən nahiyələrinə istiqamətləndirilən su axını.","en":"Adjustable water jets directed to selected body areas."},"categoryId":"body","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"body-room","mediaSubjectId":"body-care","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-jet-shower-10","label":"10 dk","labels":{"tr":"10 dakika","az":"10 dəqiqə","ru":"10 минут"},"duration":10,"priceMinor":10000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-starvac-vacuum","sourceId":"starvac-vacuum","name":"Starvac vakum masajı","names":{"tr":"Starvac vakum masajı","az":"Starvac vakuum masajı","ru":"Вакуумный массаж Starvac"},"description":"Cihazla vakum masajı.","descriptions":{"tr":"Cihazla vakum masajı.","az":"Cihazla vakuum masajı.","ru":"Аппаратный вакуумный массаж."},"sourceNames":{"tr":"Starvac vakum masajı","az":"Starvac vakuum masajı","ru":"Вакуумный массаж Starvac"},"sourceDescriptions":{"tr":"Cihazla vakum masajı. 30, 40 ve 50 dakikalık seçenekleri ekiple netleştirin.","az":"Cihazla vakuum masajı. 30, 40 və 50 dəqiqəlik seçimləri komanda ilə dəqiqləşdirin.","en":"Device assisted vacuum massage. Ask the team about the 30, 40 and 50 minute options."},"categoryId":"body","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"body-room","mediaSubjectId":"body-care","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-starvac-vacuum-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":10000,"durationStatus":"source","priceStatus":"demo"},{"id":"src-starvac-vacuum-40","label":"40 dk","labels":{"tr":"40 dakika","az":"40 dəqiqə","ru":"40 минут"},"duration":40,"priceMinor":10000,"durationStatus":"source","priceStatus":"demo"},{"id":"src-starvac-vacuum-50","label":"50 dk","labels":{"tr":"50 dakika","az":"50 dəqiqə","ru":"50 минут"},"duration":50,"priceMinor":10000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-pressotherapy","sourceId":"pressotherapy","name":"Pressoterapi","names":{"tr":"Pressoterapi","az":"Pressoterapiya","ru":"Прессотерапия"},"description":"Bacaklara değişken hava basıncı uygulayan cihazla bakım.","descriptions":{"tr":"Bacaklara değişken hava basıncı uygulayan cihazla bakım.","az":"Ayaqlara dəyişən hava təzyiqi tətbiq edən cihazla qulluq.","ru":"Прессотерапия."},"sourceNames":{"tr":"Pressoterapi","az":"Pressoterapiya","ru":"Прессотерапия"},"sourceDescriptions":{"tr":"Bacaklara değişken hava basıncı uygulayan cihazla bakım.","az":"Ayaqlara dəyişən hava təzyiqi tətbiq edən cihazla qulluq.","en":"Device assisted care applying alternating air pressure to the legs."},"categoryId":"body","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"body-room","mediaSubjectId":"body-care","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-pressotherapy-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":10000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-myostimulation","sourceId":"myostimulation","name":"Miyostimülasyon","names":{"tr":"Miyostimülasyon","az":"Miostimulyasiya","ru":"Миостимуляция"},"description":"Elektrik impulslarıyla cihaz uygulaması.","descriptions":{"tr":"Elektrik impulslarıyla cihaz uygulaması.","az":"Elektrik impulsları ilə cihaz tətbiqi.","ru":"Аппаратная процедура с электрическими импульсами."},"sourceNames":{"tr":"Miyostimülasyon","az":"Miostimulyasiya","ru":"Миостимуляция"},"sourceDescriptions":{"tr":"Elektrik impulslarıyla cihaz uygulaması. Uygunluğunu uzmanla konuşun.","az":"Elektrik impulsları ilə cihaz tətbiqi. Uyğunluğu barədə mütəxəssislə danışın.","en":"A device application using electrical impulses. Discuss suitability with the specialist."},"categoryId":"body","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"body-room","mediaSubjectId":"body-care","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-myostimulation-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":10000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-vibromassage","sourceId":"vibromassage","name":"Vibrasyon masajı","names":{"tr":"Vibrasyon masajı","az":"Vibromasaj","ru":"Вибромассаж"},"description":"Cihazla vibrasyon masajı.","descriptions":{"tr":"Cihazla vibrasyon masajı.","az":"Cihazla vibrasiya masajı.","ru":"Вибромассаж."},"sourceNames":{"tr":"Vibrasyon masajı","az":"Vibromasaj","ru":"Вибромассаж"},"sourceDescriptions":{"tr":"Cihazla vibrasyon masajı.","az":"Cihazla vibrasiya masajı.","en":"Device assisted vibration massage."},"categoryId":"body","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"body-room","mediaSubjectId":"body-care","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-vibromassage-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":10000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-laser-epilation","sourceId":"laser-epilation","name":"Lazer epilasyon · ön görüşme","names":{"tr":"Lazer epilasyon · ön görüşme","az":"Lazer epilyasiyası · ilkin görüş","ru":"Лазерная эпиляция · консультация"},"description":"Lazer epilasyon için uzman ön görüşmesi.","descriptions":{"tr":"Lazer epilasyon için uzman ön görüşmesi.","az":"Lazer epilyasiyası üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Лазерная эпиляция."},"sourceNames":{"tr":"Lazer epilasyon","az":"Lazer epilyasiyası","ru":"Лазерная эпиляция"},"sourceDescriptions":{"tr":"Lazer epilasyon için uygulama bölgesini ve uygunluğunu uzmanla netleştirin.","az":"Lazer epilyasiyası üçün nahiyə və uyğunluğu mütəxəssislə dəqiqləşdirin.","en":"Discuss the treatment area and suitability for laser hair removal with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"laser-epilation","bookingKind":"consultation","treatmentNames":{"tr":"Lazer epilasyon","az":"Lazer epilyasiyası","ru":"Лазерная эпиляция"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-laser-epilation-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-laser-skin-care","sourceId":"laser-skin-care","name":"Lazerle cilt bakımı · ön görüşme","names":{"tr":"Lazerle cilt bakımı · ön görüşme","az":"Lazer ilə dəri qulluğu · ilkin görüş","ru":"Лазерный уход за кожей · консультация"},"description":"Lazerle cilt bakımı için uzman ön görüşmesi.","descriptions":{"tr":"Lazerle cilt bakımı için uzman ön görüşmesi.","az":"Lazer ilə dəri qulluğu üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Лазерный уход за кожей."},"sourceNames":{"tr":"Lazerle cilt bakımı","az":"Lazer ilə dəri qulluğu","ru":"Лазерный уход за кожей"},"sourceDescriptions":{"tr":"Lazerle cilt bakımının ayrıntılarını ve uygunluğunu uzmanla görüşün.","az":"Lazerlə dəri qulluğunun detallarını və uyğunluğunu mütəxəssislə müzakirə edin.","en":"Discuss the details and suitability of laser skin care with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"laser-skin-care","bookingKind":"consultation","treatmentNames":{"tr":"Lazerle cilt bakımı","az":"Lazer ilə dəri qulluğu","ru":"Лазерный уход за кожей"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-laser-skin-care-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-laser-acne-care","sourceId":"laser-acne-care","name":"Akneye yönelik lazer uygulaması · ön görüşme","names":{"tr":"Akneye yönelik lazer uygulaması · ön görüşme","az":"Akneyə yönəlik lazer tətbiqi · ilkin görüş","ru":"Лазерная процедура при акне · консультация"},"description":"Akneye yönelik lazer uygulaması için uzman ön görüşmesi.","descriptions":{"tr":"Akneye yönelik lazer uygulaması için uzman ön görüşmesi.","az":"Akneyə yönəlik lazer tətbiqi üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Лазерная процедура при акне."},"sourceNames":{"tr":"Akneye yönelik lazer uygulaması","az":"Akneyə yönəlik lazer tətbiqi","ru":"Лазерная процедура при акне"},"sourceDescriptions":{"tr":"Akneye yönelik lazer uygulaması hakkında uzmanla görüşün.","az":"Akneyə yönəlik lazer tətbiqi barədə mütəxəssislə danışın.","en":"Ask the specialist about laser care for acne concerns."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"laser-acne-care","bookingKind":"consultation","treatmentNames":{"tr":"Akneye yönelik lazer uygulaması","az":"Akneyə yönəlik lazer tətbiqi","ru":"Лазерная процедура при акне"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-laser-acne-care-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-laser-pigmentation","sourceId":"laser-pigmentation","name":"Pigmentasyona yönelik lazer uygulaması · ön görüşme","names":{"tr":"Pigmentasyona yönelik lazer uygulaması · ön görüşme","az":"Piqmentasiyaya yönəlik lazer tətbiqi · ilkin görüş","ru":"Лазерная процедура при пигментации · консультация"},"description":"Pigmentasyona yönelik lazer uygulaması için uzman ön görüşmesi.","descriptions":{"tr":"Pigmentasyona yönelik lazer uygulaması için uzman ön görüşmesi.","az":"Piqmentasiyaya yönəlik lazer tətbiqi üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Лазерная процедура при пигментации."},"sourceNames":{"tr":"Pigmentasyona yönelik lazer uygulaması","az":"Piqmentasiyaya yönəlik lazer tətbiqi","ru":"Лазерная процедура при пигментации"},"sourceDescriptions":{"tr":"Pigmentasyona yönelik lazer uygulaması hakkında uzmanla görüşün.","az":"Piqmentasiyaya yönəlik lazer tətbiqi barədə mütəxəssislə danışın.","en":"Ask the specialist about laser care for pigmentation concerns."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"laser-pigmentation","bookingKind":"consultation","treatmentNames":{"tr":"Pigmentasyona yönelik lazer uygulaması","az":"Piqmentasiyaya yönəlik lazer tətbiqi","ru":"Лазерная процедура при пигментации"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-laser-pigmentation-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-laser-couperose","sourceId":"laser-couperose","name":"Kuperoza yönelik lazer uygulaması · ön görüşme","names":{"tr":"Kuperoza yönelik lazer uygulaması · ön görüşme","az":"Kuperoza yönəlik lazer tətbiqi · ilkin görüş","ru":"Лазерная процедура при куперозе · консультация"},"description":"Kuperoza yönelik lazer uygulaması için uzman ön görüşmesi.","descriptions":{"tr":"Kuperoza yönelik lazer uygulaması için uzman ön görüşmesi.","az":"Kuperoza yönəlik lazer tətbiqi üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Лазерная процедура при куперозе."},"sourceNames":{"tr":"Kuperoza yönelik lazer uygulaması","az":"Kuperoza yönəlik lazer tətbiqi","ru":"Лазерная процедура при куперозе"},"sourceDescriptions":{"tr":"Kuperoza yönelik lazer uygulaması hakkında uzmanla görüşün.","az":"Kuperoza yönəlik lazer tətbiqi barədə mütəxəssislə danışın.","en":"Ask the specialist about laser care for couperose concerns."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"laser-couperose","bookingKind":"consultation","treatmentNames":{"tr":"Kuperoza yönelik lazer uygulaması","az":"Kuperoza yönəlik lazer tətbiqi","ru":"Лазерная процедура при куперозе"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-laser-couperose-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-facial-cleansing","sourceId":"facial-cleansing","name":"Yüz temizliği","names":{"tr":"Yüz temizliği","az":"Üz təmizlənməsi","ru":"Чистка лица"},"description":"Yüz temizliğine yönelik bakım.","descriptions":{"tr":"Yüz temizliğine yönelik bakım.","az":"Üzün təmizlənməsi üçün qulluq.","ru":"Чистка лица."},"sourceNames":{"tr":"Yüz temizliği","az":"Üz təmizlənməsi","ru":"Чистка лица"},"sourceDescriptions":{"tr":"Yüz temizliğine yönelik bakım. Uygulama yöntemini uzmanla netleştirin.","az":"Üzün təmizlənməsi üçün qulluq. Tətbiq üsulunu mütəxəssislə dəqiqləşdirin.","en":"A facial cleansing session. Confirm the approach with the specialist."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-facial-cleansing-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":11000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-complete-facial","sourceId":"complete-facial","name":"Tam yüz bakımı","names":{"tr":"Tam yüz bakımı","az":"Tam üz qulluğu","ru":"Комплексный уход за лицом"},"description":"Tam yüz bakımı.","descriptions":{"tr":"Tam yüz bakımı.","az":"Tam üz qulluğu.","ru":"Комплексный уход за лицом."},"sourceNames":{"tr":"Tam yüz bakımı","az":"Tam üz qulluğu","ru":"Комплексный уход за лицом"},"sourceDescriptions":{"tr":"Tam yüz bakımının aşamalarını cildinize göre uzmanla konuşun.","az":"Tam üz qulluğunun mərhələlərini dərinizə uyğun müzakirə edin.","en":"Discuss the steps of a complete facial and suitability for your skin."},"categoryId":"face","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"facial","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-complete-facial-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":11000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]}],"requiresConsultation":false},{"id":"src-chemical-peel","sourceId":"chemical-peel","name":"Kimyasal peeling · ön görüşme","names":{"tr":"Kimyasal peeling · ön görüşme","az":"Kimyəvi pilinq · ilkin görüş","ru":"Химический пилинг · консультация"},"description":"Kimyasal peeling için uzman ön görüşmesi.","descriptions":{"tr":"Kimyasal peeling için uzman ön görüşmesi.","az":"Kimyəvi pilinq üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Химический пилинг."},"sourceNames":{"tr":"Kimyasal peeling","az":"Kimyəvi pilinq","ru":"Химический пилинг"},"sourceDescriptions":{"tr":"Kimyasal peelingin türünü ve uygunluğunu uzmanla konuşun.","az":"Kimyəvi pilinqin növü və uyğunluğu barədə mütəxəssislə danışın.","en":"Discuss the type of chemical peel and suitability with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"chemical-peel","bookingKind":"consultation","treatmentNames":{"tr":"Kimyasal peeling","az":"Kimyəvi pilinq","ru":"Химический пилинг"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-chemical-peel-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-face-mesotherapy","sourceId":"face-mesotherapy","name":"Yüz mezoterapisi · ön görüşme","names":{"tr":"Yüz mezoterapisi · ön görüşme","az":"Üz mezoterapiyası · ilkin görüş","ru":"Мезотерапия лица · консультация"},"description":"Yüz mezoterapisi için uzman ön görüşmesi.","descriptions":{"tr":"Yüz mezoterapisi için uzman ön görüşmesi.","az":"Üz mezoterapiyası üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Мезотерапия лица."},"sourceNames":{"tr":"Yüz mezoterapisi","az":"Üz mezoterapiyası","ru":"Мезотерапия лица"},"sourceDescriptions":{"tr":"Yüz mezoterapisinin uygulama ayrıntılarını uzmanla görüşün.","az":"Üz mezoterapiyasının tətbiq detallarını mütəxəssislə müzakirə edin.","en":"Discuss facial mesotherapy and the application details with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"face-mesotherapy","bookingKind":"consultation","treatmentNames":{"tr":"Yüz mezoterapisi","az":"Üz mezoterapiyası","ru":"Мезотерапия лица"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-face-mesotherapy-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-hair-mesotherapy","sourceId":"hair-mesotherapy","name":"Saç mezoterapisi · ön görüşme","names":{"tr":"Saç mezoterapisi · ön görüşme","az":"Saç mezoterapiyası · ilkin görüş","ru":"Мезотерапия волосистой части головы · консультация"},"description":"Saç mezoterapisi için uzman ön görüşmesi.","descriptions":{"tr":"Saç mezoterapisi için uzman ön görüşmesi.","az":"Saç mezoterapiyası üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Мезотерапия волосистой части головы."},"sourceNames":{"tr":"Saç mezoterapisi","az":"Saç mezoterapiyası","ru":"Мезотерапия волосистой части головы"},"sourceDescriptions":{"tr":"Saç mezoterapisi hakkında uzmandan bilgi alın.","az":"Saç mezoterapiyası barədə mütəxəssisdən məlumat alın.","en":"Ask the specialist about hair mesotherapy."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"hair-mesotherapy","bookingKind":"consultation","treatmentNames":{"tr":"Saç mezoterapisi","az":"Saç mezoterapiyası","ru":"Мезотерапия волосистой части головы"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-hair-mesotherapy-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-3d-face-care","sourceId":"3d-face-care","name":"3D lifting yüz bakımı · ön görüşme","names":{"tr":"3D lifting yüz bakımı · ön görüşme","az":"3D liftinq üz qulluğu · ilkin görüş","ru":"3D-лифтинг уход за лицом · консультация"},"description":"3D lifting yüz bakımı için uzman ön görüşmesi.","descriptions":{"tr":"3D lifting yüz bakımı için uzman ön görüşmesi.","az":"3D liftinq üz qulluğu üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: 3D-лифтинг уход за лицом."},"sourceNames":{"tr":"3D lifting yüz bakımı","az":"3D liftinq üz qulluğu","ru":"3D-лифтинг уход за лицом"},"sourceDescriptions":{"tr":"3D lifting yüz bakımının yöntemini ve uygunluğunu uzmanla netleştirin.","az":"3D liftinq üz qulluğunun üsulunu və uyğunluğunu mütəxəssislə dəqiqləşdirin.","en":"Discuss the method and suitability of 3D lifting facial care with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"3d-face-care","bookingKind":"consultation","treatmentNames":{"tr":"3D lifting yüz bakımı","az":"3D liftinq üz qulluğu","ru":"3D-лифтинг уход за лицом"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-3d-face-care-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-biorevitalisation","sourceId":"biorevitalisation","name":"Biorevitalizasyon · ön görüşme","names":{"tr":"Biorevitalizasyon · ön görüşme","az":"Biorevitalizasiya · ilkin görüş","ru":"Биоревитализация · консультация"},"description":"Biorevitalizasyon için uzman ön görüşmesi.","descriptions":{"tr":"Biorevitalizasyon için uzman ön görüşmesi.","az":"Biorevitalizasiya üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Биоревитализация."},"sourceNames":{"tr":"Biorevitalizasyon","az":"Biorevitalizasiya","ru":"Биоревитализация"},"sourceDescriptions":{"tr":"Biorevitalizasyonun uygulama ayrıntılarını ve uygunluğunu uzmanla görüşün.","az":"Biorevitalizasiyanın tətbiq detallarını və uyğunluğunu mütəxəssislə müzakirə edin.","en":"Discuss biorevitalisation, the application details and suitability with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"biorevitalisation","bookingKind":"consultation","treatmentNames":{"tr":"Biorevitalizasyon","az":"Biorevitalizasiya","ru":"Биоревитализация"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-biorevitalisation-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-prp-face","sourceId":"prp-face","name":"Yüz için PRP · ön görüşme","names":{"tr":"Yüz için PRP · ön görüşme","az":"Üz üçün PRP · ilkin görüş","ru":"PRP для лица · консультация"},"description":"Yüz için PRP için uzman ön görüşmesi.","descriptions":{"tr":"Yüz için PRP için uzman ön görüşmesi.","az":"Üz üçün PRP üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: PRP для лица."},"sourceNames":{"tr":"Yüz için PRP","az":"Üz üçün PRP","ru":"PRP для лица"},"sourceDescriptions":{"tr":"Yüz için PRP uygulaması hakkında uzmandan bilgi alın.","az":"Üz üçün PRP tətbiqi barədə mütəxəssisdən məlumat alın.","en":"Ask the specialist about facial PRP."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"prp-face","bookingKind":"consultation","treatmentNames":{"tr":"Yüz için PRP","az":"Üz üçün PRP","ru":"PRP для лица"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-prp-face-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-prp-hair","sourceId":"prp-hair","name":"Saç için PRP · ön görüşme","names":{"tr":"Saç için PRP · ön görüşme","az":"Saç üçün PRP · ilkin görüş","ru":"PRP для волосистой части головы · консультация"},"description":"Saç için PRP için uzman ön görüşmesi.","descriptions":{"tr":"Saç için PRP için uzman ön görüşmesi.","az":"Saç üçün PRP üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: PRP для волосистой части головы."},"sourceNames":{"tr":"Saç için PRP","az":"Saç üçün PRP","ru":"PRP для волосистой части головы"},"sourceDescriptions":{"tr":"Saç için PRP uygulaması hakkında uzmandan bilgi alın.","az":"Saç üçün PRP tətbiqi barədə mütəxəssisdən məlumat alın.","en":"Ask the specialist about hair PRP."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"prp-hair","bookingKind":"consultation","treatmentNames":{"tr":"Saç için PRP","az":"Saç üçün PRP","ru":"PRP для волосистой части головы"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-prp-hair-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-plasma-face","sourceId":"plasma-face","name":"Plazma yüz bakımı · ön görüşme","names":{"tr":"Plazma yüz bakımı · ön görüşme","az":"Plazma üz qulluğu · ilkin görüş","ru":"Плазменный уход за лицом · консультация"},"description":"Plazma yüz bakımı için uzman ön görüşmesi.","descriptions":{"tr":"Plazma yüz bakımı için uzman ön görüşmesi.","az":"Plazma üz qulluğu üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Плазменный уход за лицом."},"sourceNames":{"tr":"Plazma yüz bakımı","az":"Plazma üz qulluğu","ru":"Плазменный уход за лицом"},"sourceDescriptions":{"tr":"Plazma yüz bakımının kesin yöntemini uzmanla netleştirin.","az":"Plazma ilə üz qulluğunun konkret üsulunu mütəxəssislə dəqiqləşdirin.","en":"Confirm the exact method of plasma facial care with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"plasma-face","bookingKind":"consultation","treatmentNames":{"tr":"Plazma yüz bakımı","az":"Plazma üz qulluğu","ru":"Плазменный уход за лицом"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-plasma-face-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-plasma-hair","sourceId":"plasma-hair","name":"Plazma saç bakımı · ön görüşme","names":{"tr":"Plazma saç bakımı · ön görüşme","az":"Plazma saç qulluğu · ilkin görüş","ru":"Плазменный уход за волосистой частью головы · консультация"},"description":"Plazma saç bakımı için uzman ön görüşmesi.","descriptions":{"tr":"Plazma saç bakımı için uzman ön görüşmesi.","az":"Plazma saç qulluğu üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Плазменный уход за волосистой частью головы."},"sourceNames":{"tr":"Plazma saç bakımı","az":"Plazma saç qulluğu","ru":"Плазменный уход за волосистой частью головы"},"sourceDescriptions":{"tr":"Plazma saç bakımının kesin yöntemini uzmanla netleştirin.","az":"Plazma ilə saç qulluğunun konkret üsulunu mütəxəssislə dəqiqləşdirin.","en":"Confirm the exact method of plasma hair care with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"plasma-hair","bookingKind":"consultation","treatmentNames":{"tr":"Plazma saç bakımı","az":"Plazma saç qulluğu","ru":"Плазменный уход за волосистой частью головы"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-plasma-hair-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-meso-botox","sourceId":"meso-botox","name":"Mezobotoks · ön görüşme","names":{"tr":"Mezobotoks · ön görüşme","az":"Mezobotoks · ilkin görüş","ru":"Мезоботокс · консультация"},"description":"Mezobotoks için uzman ön görüşmesi.","descriptions":{"tr":"Mezobotoks için uzman ön görüşmesi.","az":"Mezobotoks üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Мезоботокс."},"sourceNames":{"tr":"Mezobotoks","az":"Mezobotoks","ru":"Мезоботокс"},"sourceDescriptions":{"tr":"Mezobotoksun uygulama alanını ve uygunluğunu uzmanla konuşun.","az":"Mezobotoksun tətbiq sahəsi və uyğunluğu barədə mütəxəssislə danışın.","en":"Discuss the application area and suitability of mesobotox with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"meso-botox","bookingKind":"consultation","treatmentNames":{"tr":"Mezobotoks","az":"Mezobotoks","ru":"Мезоботокс"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-meso-botox-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-botox","sourceId":"botox","name":"Botoks · ön görüşme","names":{"tr":"Botoks · ön görüşme","az":"Botoks · ilkin görüş","ru":"Ботокс · консультация"},"description":"Botoks için uzman ön görüşmesi.","descriptions":{"tr":"Botoks için uzman ön görüşmesi.","az":"Botoks üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Ботокс."},"sourceNames":{"tr":"Botoks","az":"Botoks","ru":"Ботокс"},"sourceDescriptions":{"tr":"Botoksun uygulama alanını ve uygunluğunu uzmanla konuşun.","az":"Botoksun tətbiq sahəsi və uyğunluğu barədə mütəxəssislə danışın.","en":"Discuss the application area and suitability of Botox with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"botox","bookingKind":"consultation","treatmentNames":{"tr":"Botoks","az":"Botoks","ru":"Ботокс"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-botox-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-filler","sourceId":"filler","name":"Dolgu · ön görüşme","names":{"tr":"Dolgu · ön görüşme","az":"Filler · ilkin görüş","ru":"Филлеры · консультация"},"description":"Dolgu için uzman ön görüşmesi.","descriptions":{"tr":"Dolgu için uzman ön görüşmesi.","az":"Filler üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Филлеры."},"sourceNames":{"tr":"Dolgu","az":"Filler","ru":"Филлеры"},"sourceDescriptions":{"tr":"Dolgu uygulamasının bölgesini ve uygunluğunu uzmanla konuşun.","az":"Filler tətbiqinin sahəsi və uyğunluğu barədə mütəxəssislə danışın.","en":"Discuss the application area and suitability of filler with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"filler","bookingKind":"consultation","treatmentNames":{"tr":"Dolgu","az":"Filler","ru":"Филлеры"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-filler-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-permanent-eyes","sourceId":"permanent-eyes","name":"Göz kalıcı makyajı · ön görüşme","names":{"tr":"Göz kalıcı makyajı · ön görüşme","az":"Gözlər üçün permanent makiyaj · ilkin görüş","ru":"Перманентный макияж глаз · консультация"},"description":"Göz kalıcı makyajı için uzman ön görüşmesi.","descriptions":{"tr":"Göz kalıcı makyajı için uzman ön görüşmesi.","az":"Gözlər üçün permanent makiyaj üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Перманентный макияж глаз."},"sourceNames":{"tr":"Göz kalıcı makyajı","az":"Gözlər üçün permanent makiyaj","ru":"Перманентный макияж глаз"},"sourceDescriptions":{"tr":"Göz bölgesi için kalıcı makyaj. Şekli ve yöntemi uzmanla görüşün.","az":"Göz nahiyəsi üçün permanent makiyaj. Forma və üsulu mütəxəssislə müzakirə edin.","en":"Permanent makeup for the eye area. Discuss the shape and method with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"permanent-eyes","bookingKind":"consultation","treatmentNames":{"tr":"Göz kalıcı makyajı","az":"Gözlər üçün permanent makiyaj","ru":"Перманентный макияж глаз"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-permanent-eyes-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-permanent-brows","sourceId":"permanent-brows","name":"Kaş kalıcı makyajı · ön görüşme","names":{"tr":"Kaş kalıcı makyajı · ön görüşme","az":"Qaş üçün permanent makiyaj · ilkin görüş","ru":"Перманентный макияж бровей · консультация"},"description":"Kaş kalıcı makyajı için uzman ön görüşmesi.","descriptions":{"tr":"Kaş kalıcı makyajı için uzman ön görüşmesi.","az":"Qaş üçün permanent makiyaj üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Перманентный макияж бровей."},"sourceNames":{"tr":"Kaş kalıcı makyajı","az":"Qaş üçün permanent makiyaj","ru":"Перманентный макияж бровей"},"sourceDescriptions":{"tr":"Kaş için kalıcı makyaj. Şekli ve yöntemi uzmanla görüşün.","az":"Qaş üçün permanent makiyaj. Forma və üsulu mütəxəssislə müzakirə edin.","en":"Permanent brow makeup. Discuss the shape and method with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"permanent-brows","bookingKind":"consultation","treatmentNames":{"tr":"Kaş kalıcı makyajı","az":"Qaş üçün permanent makiyaj","ru":"Перманентный макияж бровей"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-permanent-brows-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-permanent-lips","sourceId":"permanent-lips","name":"Dudak kalıcı makyajı · ön görüşme","names":{"tr":"Dudak kalıcı makyajı · ön görüşme","az":"Dodaq üçün permanent makiyaj · ilkin görüş","ru":"Перманентный макияж губ · консультация"},"description":"Dudak kalıcı makyajı için uzman ön görüşmesi.","descriptions":{"tr":"Dudak kalıcı makyajı için uzman ön görüşmesi.","az":"Dodaq üçün permanent makiyaj üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Перманентный макияж губ."},"sourceNames":{"tr":"Dudak kalıcı makyajı","az":"Dodaq üçün permanent makiyaj","ru":"Перманентный макияж губ"},"sourceDescriptions":{"tr":"Dudak için kalıcı makyaj. Rengi ve yöntemi uzmanla görüşün.","az":"Dodaq üçün permanent makiyaj. Rəng və üsulu mütəxəssislə müzakirə edin.","en":"Permanent lip makeup. Discuss the colour and method with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"permanent-lips","bookingKind":"consultation","treatmentNames":{"tr":"Dudak kalıcı makyajı","az":"Dodaq üçün permanent makiyaj","ru":"Перманентный макияж губ"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-permanent-lips-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-tattoo","sourceId":"tattoo","name":"Dövme · ön görüşme","names":{"tr":"Dövme · ön görüşme","az":"Tatu · ilkin görüş","ru":"Татуировка · консультация"},"description":"Dövme için uzman ön görüşmesi.","descriptions":{"tr":"Dövme için uzman ön görüşmesi.","az":"Tatu üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Татуировка."},"sourceNames":{"tr":"Dövme","az":"Tatu","ru":"Татуировка"},"sourceDescriptions":{"tr":"Dövme uygulamasının tasarım ve ayrıntılarını uzmanla netleştirin.","az":"Tatu tətbiqinin dizayn və detallarını mütəxəssislə dəqiqləşdirin.","en":"Discuss the tattoo design and application details with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"tattoo","bookingKind":"consultation","treatmentNames":{"tr":"Dövme","az":"Tatu","ru":"Татуировка"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-tattoo-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-body-mesotherapy","sourceId":"body-mesotherapy","name":"Vücut mezoterapisi · ön görüşme","names":{"tr":"Vücut mezoterapisi · ön görüşme","az":"Bədən mezoterapiyası · ilkin görüş","ru":"Мезотерапия тела · консультация"},"description":"Vücut mezoterapisi için uzman ön görüşmesi.","descriptions":{"tr":"Vücut mezoterapisi için uzman ön görüşmesi.","az":"Bədən mezoterapiyası üçün mütəxəssislə ilkin görüş.","ru":"Предварительная консультация: Мезотерапия тела."},"sourceNames":{"tr":"Vücut mezoterapisi","az":"Bədən mezoterapiyası","ru":"Мезотерапия тела"},"sourceDescriptions":{"tr":"Vücut mezoterapisinin uygulama bölgesini ve uygunluğunu uzmanla görüşün.","az":"Bədən mezoterapiyasının tətbiq sahəsi və uyğunluğunu mütəxəssislə müzakirə edin.","en":"Discuss the application area and suitability of body mesotherapy with the specialist."},"categoryId":"cosmetology","active":true,"mode":"consultation","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","consultationForServiceId":"body-mesotherapy","bookingKind":"consultation","treatmentNames":{"tr":"Vücut mezoterapisi","az":"Bədən mezoterapiyası","ru":"Мезотерапия тела"},"durationStatus":"demo","resourceId":"facial-unit","mediaSubjectId":"cosmetology","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-body-mesotherapy-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-classic-manicure","sourceId":"classic-manicure","name":"Klasik manikür","names":{"tr":"Klasik manikür","az":"Klassik manikür","ru":"Классический маникюр"},"description":"Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.","descriptions":{"tr":"Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.","az":"Dırnaq qulluğu və lak. Müddət təxminidir; quruma vaxtı əlavədir.","ru":"Классический маникюр."},"sourceNames":{"tr":"Klasik manikür","az":"Klassik manikür","ru":"Классический маникюр"},"sourceDescriptions":{"tr":"Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.","az":"Dırnaq qulluğu və lak. Müddət təxminidir; quruma vaxtı əlavədir.","en":"Nail care and polish. Duration is approximate and excludes drying time."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-classic-manicure-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-classic-pedicure","sourceId":"classic-pedicure","name":"Klasik pedikür","names":{"tr":"Klasik pedikür","az":"Klassik pedikür","ru":"Классический педикюр"},"description":"Pedikür, peeling, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.","descriptions":{"tr":"Pedikür, peeling, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.","az":"Pedikür, skrab, krem və örtük. Müddət təxminidir. Quruma vaxtı əlavədir.","ru":"Классический педикюр."},"sourceNames":{"tr":"Klasik pedikür","az":"Klassik pedikür","ru":"Классический педикюр"},"sourceDescriptions":{"tr":"Pedikür, peeling, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.","az":"Pedikür, skrab, krem və örtük. Müddət təxminidir. Quruma vaxtı əlavədir.","en":"Pedicure, scrub, cream and polish. Duration is approximate. Drying time is additional."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"pedicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-classic-pedicure-40","label":"40 dk","labels":{"tr":"40 dakika","az":"40 dəqiqə","ru":"40 минут"},"duration":40,"priceMinor":6000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-foot-mask","sourceId":"foot-mask","name":"Ayak için ek maske","names":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"description":"Ayak bakımına ek maske uygulaması.","descriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","ru":"Дополнительная маска для стоп. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"sourceDescriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","en":"A mask to add to your foot care."},"categoryId":"nails","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":15,"priceMinor":1500,"durationStatus":"demo","allowedServiceIds":["src-brazil-pedicure","src-classic-pedicure","src-minx-pedicure","src-shellac-brazil-pedicure","src-shellac-classic-pedicure","src-shellac-spa-pedicure","src-spa-pedicure"]}],"requiresConsultation":false},{"id":"src-spa-manicure","sourceId":"spa-manicure","name":"SPA manikür","names":{"tr":"SPA manikür","az":"SPA manikürü","ru":"SPA-маникюр"},"description":"Manikür, peeling, shea yağı, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.","descriptions":{"tr":"Manikür, peeling, shea yağı, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.","az":"Manikür, skrab, karite yağı, krem və örtük. Müddət təxminidir. Quruma vaxtı əlavədir.","ru":"SPA-маникюр."},"sourceNames":{"tr":"SPA manikür","az":"SPA manikürü","ru":"SPA-маникюр"},"sourceDescriptions":{"tr":"Manikür, peeling, shea yağı, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.","az":"Manikür, skrab, karite yağı, krem və örtük. Müddət təxminidir. Quruma vaxtı əlavədir.","en":"Manicure, scrub, shea oil, cream and polish. Duration is approximate. Drying time is additional."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-spa-manicure-50","label":"50 dk","labels":{"tr":"50 dakika","az":"50 dəqiqə","ru":"50 минут"},"duration":50,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-spa-pedicure","sourceId":"spa-pedicure","name":"SPA pedikür","names":{"tr":"SPA pedikür","az":"SPA pedikürü","ru":"SPA-педикюр"},"description":"Pedikür, peeling, maske, shea yağı, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.","descriptions":{"tr":"Pedikür, peeling, maske, shea yağı, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.","az":"Pedikür, skrab, maska, karite yağı, krem və örtük. Müddət təxminidir. Quruma vaxtı əlavədir.","ru":"SPA-педикюр."},"sourceNames":{"tr":"SPA pedikür","az":"SPA pedikürü","ru":"SPA-педикюр"},"sourceDescriptions":{"tr":"Pedikür, peeling, maske, shea yağı, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.","az":"Pedikür, skrab, maska, karite yağı, krem və örtük. Müddət təxminidir. Quruma vaxtı əlavədir.","en":"Pedicure, scrub, mask, shea oil, cream and polish. Duration is approximate. Drying time is additional."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"pedicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-spa-pedicure-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":6000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-foot-mask","sourceId":"foot-mask","name":"Ayak için ek maske","names":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"description":"Ayak bakımına ek maske uygulaması.","descriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","ru":"Дополнительная маска для стоп. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"sourceDescriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","en":"A mask to add to your foot care."},"categoryId":"nails","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":15,"priceMinor":1500,"durationStatus":"demo","allowedServiceIds":["src-brazil-pedicure","src-classic-pedicure","src-minx-pedicure","src-shellac-brazil-pedicure","src-shellac-classic-pedicure","src-shellac-spa-pedicure","src-spa-pedicure"]}],"requiresConsultation":false},{"id":"src-brazil-manicure","sourceId":"brazil-manicure","name":"Brezilya manikürü","names":{"tr":"Brezilya manikürü","az":"Braziliya manikürü","ru":"Бразильский маникюр"},"description":"Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.","descriptions":{"tr":"Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.","az":"Dırnaq qulluğu və lak. Müddət təxminidir; quruma vaxtı əlavədir.","ru":"Бразильский маникюр."},"sourceNames":{"tr":"Brezilya manikürü","az":"Braziliya manikürü","ru":"Бразильский маникюр"},"sourceDescriptions":{"tr":"Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.","az":"Dırnaq qulluğu və lak. Müddət təxminidir; quruma vaxtı əlavədir.","en":"Nail care and polish. Duration is approximate and excludes drying time."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-brazil-manicure-45","label":"45 dk","labels":{"tr":"45 dakika","az":"45 dəqiqə","ru":"45 минут"},"duration":45,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-brazil-pedicure","sourceId":"brazil-pedicure","name":"Brezilya pedikürü","names":{"tr":"Brezilya pedikürü","az":"Braziliya pedikürü","ru":"Бразильский педикюр"},"description":"Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.","descriptions":{"tr":"Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.","az":"Dırnaq qulluğu və lak. Müddət təxminidir; quruma vaxtı əlavədir.","ru":"Бразильский педикюр."},"sourceNames":{"tr":"Brezilya pedikürü","az":"Braziliya pedikürü","ru":"Бразильский педикюр"},"sourceDescriptions":{"tr":"Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.","az":"Dırnaq qulluğu və lak. Müddət təxminidir; quruma vaxtı əlavədir.","en":"Nail care and polish. Duration is approximate and excludes drying time."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"pedicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-brazil-pedicure-50","label":"50 dk","labels":{"tr":"50 dakika","az":"50 dəqiqə","ru":"50 минут"},"duration":50,"priceMinor":6000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-foot-mask","sourceId":"foot-mask","name":"Ayak için ek maske","names":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"description":"Ayak bakımına ek maske uygulaması.","descriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","ru":"Дополнительная маска для стоп. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"sourceDescriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","en":"A mask to add to your foot care."},"categoryId":"nails","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":15,"priceMinor":1500,"durationStatus":"demo","allowedServiceIds":["src-brazil-pedicure","src-classic-pedicure","src-minx-pedicure","src-shellac-brazil-pedicure","src-shellac-classic-pedicure","src-shellac-spa-pedicure","src-spa-pedicure"]}],"requiresConsultation":false},{"id":"src-shellac-polish","sourceId":"shellac-polish","name":"Shellac oje","names":{"tr":"Shellac oje","az":"Shellac örtüyü","ru":"Покрытие Shellac"},"description":"Tırnaklara Shellac oje uygulaması.","descriptions":{"tr":"Tırnaklara Shellac oje uygulaması.","az":"Dırnaqlara Shellac örtüyü.","ru":"Покрытие Shellac."},"sourceNames":{"tr":"Shellac oje","az":"Shellac örtüyü","ru":"Покрытие Shellac"},"sourceDescriptions":{"tr":"Tırnaklara Shellac oje uygulaması.","az":"Dırnaqlara Shellac örtüyü.","en":"Shellac polish application for your nails."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-polish-20","label":"20 dk","labels":{"tr":"20 dakika","az":"20 dəqiqə","ru":"20 минут"},"duration":20,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-shellac-classic-manicure","sourceId":"shellac-classic-manicure","name":"Shellac ile klasik manikür","names":{"tr":"Shellac ile klasik manikür","az":"Shellac ilə klassik manikür","ru":"Классический маникюр с Shellac"},"description":"Tırnak bakımı ve Shellac oje.","descriptions":{"tr":"Tırnak bakımı ve Shellac oje.","az":"Dırnaq qulluğu və Shellac örtüyü.","ru":"Классический маникюр с Shellac."},"sourceNames":{"tr":"Shellac ile klasik manikür","az":"Shellac ilə klassik manikür","ru":"Классический маникюр с Shellac"},"sourceDescriptions":{"tr":"Tırnak bakımı ve Shellac oje.","az":"Dırnaq qulluğu və Shellac örtüyü.","en":"Nail care with Shellac polish."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-classic-manicure-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-shellac-classic-pedicure","sourceId":"shellac-classic-pedicure","name":"Shellac ile klasik pedikür","names":{"tr":"Shellac ile klasik pedikür","az":"Shellac ilə klassik pedikür","ru":"Классический педикюр с Shellac"},"description":"Pedikür, peeling, krem ve oje. Süre yaklaşık.","descriptions":{"tr":"Pedikür, peeling, krem ve oje. Süre yaklaşık.","az":"Pedikür, skrab, krem və örtük. Müddət təxminidir.","ru":"Классический педикюр с Shellac."},"sourceNames":{"tr":"Shellac ile klasik pedikür","az":"Shellac ilə klassik pedikür","ru":"Классический педикюр с Shellac"},"sourceDescriptions":{"tr":"Pedikür, peeling, krem ve oje. Süre yaklaşık.","az":"Pedikür, skrab, krem və örtük. Müddət təxminidir.","en":"Pedicure, scrub, cream and polish. Duration is approximate."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"pedicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-classic-pedicure-75","label":"75 dk","labels":{"tr":"75 dakika","az":"75 dəqiqə","ru":"75 минут"},"duration":75,"priceMinor":6000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-foot-mask","sourceId":"foot-mask","name":"Ayak için ek maske","names":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"description":"Ayak bakımına ek maske uygulaması.","descriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","ru":"Дополнительная маска для стоп. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"sourceDescriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","en":"A mask to add to your foot care."},"categoryId":"nails","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":15,"priceMinor":1500,"durationStatus":"demo","allowedServiceIds":["src-brazil-pedicure","src-classic-pedicure","src-minx-pedicure","src-shellac-brazil-pedicure","src-shellac-classic-pedicure","src-shellac-spa-pedicure","src-spa-pedicure"]}],"requiresConsultation":false},{"id":"src-shellac-spa-manicure","sourceId":"shellac-spa-manicure","name":"Shellac ile SPA manikür","names":{"tr":"Shellac ile SPA manikür","az":"Shellac ilə SPA manikürü","ru":"SPA-маникюр с Shellac"},"description":"Manikür, peeling, shea yağı, krem ve oje. Süre yaklaşık.","descriptions":{"tr":"Manikür, peeling, shea yağı, krem ve oje. Süre yaklaşık.","az":"Manikür, skrab, karite yağı, krem və örtük. Müddət təxminidir.","ru":"SPA-маникюр с Shellac."},"sourceNames":{"tr":"Shellac ile SPA manikür","az":"Shellac ilə SPA manikürü","ru":"SPA-маникюр с Shellac"},"sourceDescriptions":{"tr":"Manikür, peeling, shea yağı, krem ve oje. Süre yaklaşık.","az":"Manikür, skrab, karite yağı, krem və örtük. Müddət təxminidir.","en":"Manicure, scrub, shea oil, cream and polish. Duration is approximate."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-spa-manicure-75","label":"75 dk","labels":{"tr":"75 dakika","az":"75 dəqiqə","ru":"75 минут"},"duration":75,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-shellac-spa-pedicure","sourceId":"shellac-spa-pedicure","name":"Shellac ile SPA pedikür","names":{"tr":"Shellac ile SPA pedikür","az":"Shellac ilə SPA pedikürü","ru":"SPA-педикюр с Shellac"},"description":"Pedikür, peeling, maske, shea yağı, krem ve oje. Süre yaklaşık.","descriptions":{"tr":"Pedikür, peeling, maske, shea yağı, krem ve oje. Süre yaklaşık.","az":"Pedikür, skrab, maska, karite yağı, krem və örtük. Müddət təxminidir.","ru":"SPA-педикюр с Shellac."},"sourceNames":{"tr":"Shellac ile SPA pedikür","az":"Shellac ilə SPA pedikürü","ru":"SPA-педикюр с Shellac"},"sourceDescriptions":{"tr":"Pedikür, peeling, maske, shea yağı, krem ve oje. Süre yaklaşık.","az":"Pedikür, skrab, maska, karite yağı, krem və örtük. Müddət təxminidir.","en":"Pedicure, scrub, mask, shea oil, cream and polish. Duration is approximate."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"pedicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-spa-pedicure-90","label":"90 dk","labels":{"tr":"90 dakika","az":"90 dəqiqə","ru":"90 минут"},"duration":90,"priceMinor":6000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-foot-mask","sourceId":"foot-mask","name":"Ayak için ek maske","names":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"description":"Ayak bakımına ek maske uygulaması.","descriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","ru":"Дополнительная маска для стоп. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"sourceDescriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","en":"A mask to add to your foot care."},"categoryId":"nails","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":15,"priceMinor":1500,"durationStatus":"demo","allowedServiceIds":["src-brazil-pedicure","src-classic-pedicure","src-minx-pedicure","src-shellac-brazil-pedicure","src-shellac-classic-pedicure","src-shellac-spa-pedicure","src-spa-pedicure"]}],"requiresConsultation":false},{"id":"src-shellac-brazil-manicure","sourceId":"shellac-brazil-manicure","name":"Shellac ile Brezilya manikürü","names":{"tr":"Shellac ile Brezilya manikürü","az":"Shellac ilə Braziliya manikürü","ru":"Бразильский маникюр с Shellac"},"description":"Brezilya manikürü ve Shellac oje.","descriptions":{"tr":"Brezilya manikürü ve Shellac oje.","az":"Braziliya manikürü və Shellac örtüyü.","ru":"Бразильский маникюр с Shellac."},"sourceNames":{"tr":"Shellac ile Brezilya manikürü","az":"Shellac ilə Braziliya manikürü","ru":"Бразильский маникюр с Shellac"},"sourceDescriptions":{"tr":"Brezilya manikürü ve Shellac oje.","az":"Braziliya manikürü və Shellac örtüyü.","en":"Brazilian manicure with Shellac polish."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-brazil-manicure-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-shellac-brazil-pedicure","sourceId":"shellac-brazil-pedicure","name":"Shellac ile Brezilya pedikürü","names":{"tr":"Shellac ile Brezilya pedikürü","az":"Shellac ilə Braziliya pedikürü","ru":"Бразильский педикюр с Shellac"},"description":"Brezilya pedikürü ve Shellac oje.","descriptions":{"tr":"Brezilya pedikürü ve Shellac oje.","az":"Braziliya pedikürü və Shellac örtüyü.","ru":"Бразильский педикюр с Shellac."},"sourceNames":{"tr":"Shellac ile Brezilya pedikürü","az":"Shellac ilə Braziliya pedikürü","ru":"Бразильский педикюр с Shellac"},"sourceDescriptions":{"tr":"Brezilya pedikürü ve Shellac oje.","az":"Braziliya pedikürü və Shellac örtüyü.","en":"Brazilian pedicure with Shellac polish."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"pedicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-brazil-pedicure-75","label":"75 dk","labels":{"tr":"75 dakika","az":"75 dəqiqə","ru":"75 минут"},"duration":75,"priceMinor":6000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-foot-mask","sourceId":"foot-mask","name":"Ayak için ek maske","names":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"description":"Ayak bakımına ek maske uygulaması.","descriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","ru":"Дополнительная маска для стоп. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"sourceDescriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","en":"A mask to add to your foot care."},"categoryId":"nails","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":15,"priceMinor":1500,"durationStatus":"demo","allowedServiceIds":["src-brazil-pedicure","src-classic-pedicure","src-minx-pedicure","src-shellac-brazil-pedicure","src-shellac-classic-pedicure","src-shellac-spa-pedicure","src-spa-pedicure"]}],"requiresConsultation":false},{"id":"src-shellac-french","sourceId":"shellac-french","name":"Shellac ile French manikür","names":{"tr":"Shellac ile French manikür","az":"Shellac ilə fransız manikürü","ru":"Французский маникюр с Shellac"},"description":"French tarzı Shellac.","descriptions":{"tr":"French tarzı Shellac.","az":"Fransız üslubunda Shellac.","ru":"Покрытие Shellac во французском стиле."},"sourceNames":{"tr":"Shellac ile French manikür","az":"Shellac ilə fransız manikürü","ru":"Французский маникюр с Shellac"},"sourceDescriptions":{"tr":"French tarzı Shellac. Süre 35 veya 45 dakika; mekânla teyit edin.","az":"Fransız üslubunda Shellac. Müddət 35 və ya 45 dəqiqədir; məkanla dəqiqləşdirin.","en":"French style Shellac. The duration is 35 or 45 minutes; confirm with the venue."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-french-35","label":"35 dk","labels":{"tr":"35 dakika","az":"35 dəqiqə","ru":"35 минут"},"duration":35,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-shellac-magnetic","sourceId":"shellac-magnetic","name":"Manyetik Shellac","names":{"tr":"Manyetik Shellac","az":"Maqnitli Shellac","ru":"Магнитное покрытие Shellac"},"description":"Manyetik Shellac ile tırnak tasarımı.","descriptions":{"tr":"Manyetik Shellac ile tırnak tasarımı.","az":"Maqnitli Shellac ilə dırnaq dizaynı.","ru":"Магнитное покрытие Shellac."},"sourceNames":{"tr":"Manyetik Shellac","az":"Maqnitli Shellac","ru":"Магнитное покрытие Shellac"},"sourceDescriptions":{"tr":"Manyetik Shellac ile tırnak tasarımı.","az":"Maqnitli Shellac ilə dırnaq dizaynı.","en":"Nail design using magnetic Shellac."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-magnetic-35","label":"35 dk","labels":{"tr":"35 dakika","az":"35 dəqiqə","ru":"35 минут"},"duration":35,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-shellac-removal","sourceId":"shellac-removal","name":"Shellac çıkarma","names":{"tr":"Shellac çıkarma","az":"Shellac təmizlənməsi","ru":"Снятие Shellac"},"description":"Shellac ojenin çıkarılması.","descriptions":{"tr":"Shellac ojenin çıkarılması.","az":"Shellac örtüyünün təmizlənməsi.","ru":"Снятие Shellac."},"sourceNames":{"tr":"Shellac çıkarma","az":"Shellac təmizlənməsi","ru":"Снятие Shellac"},"sourceDescriptions":{"tr":"Shellac ojenin çıkarılması.","az":"Shellac örtüyünün təmizlənməsi.","en":"Removal of Shellac polish."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-shellac-removal-15","label":"15 dk","labels":{"tr":"15 dakika","az":"15 dəqiqə","ru":"15 минут"},"duration":15,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-minx-manicure","sourceId":"minx-manicure","name":"Minx manikür","names":{"tr":"Minx manikür","az":"Minx manikürü","ru":"Маникюр Minx"},"description":"Manikür ve Minx kaplama.","descriptions":{"tr":"Manikür ve Minx kaplama.","az":"Manikür və Minx örtüyü.","ru":"Маникюр Minx."},"sourceNames":{"tr":"Minx manikür","az":"Minx manikürü","ru":"Маникюр Minx"},"sourceDescriptions":{"tr":"Manikür ve Minx kaplama.","az":"Manikür və Minx örtüyü.","en":"Manicure with Minx application."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-minx-manicure-75","label":"75 dk","labels":{"tr":"75 dakika","az":"75 dəqiqə","ru":"75 минут"},"duration":75,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-minx-pedicure","sourceId":"minx-pedicure","name":"Minx pedikür","names":{"tr":"Minx pedikür","az":"Minx pedikürü","ru":"Педикюр Minx"},"description":"Pedikür ve Minx kaplama.","descriptions":{"tr":"Pedikür ve Minx kaplama.","az":"Pedikür və Minx örtüyü.","ru":"Педикюр Minx."},"sourceNames":{"tr":"Minx pedikür","az":"Minx pedikürü","ru":"Педикюр Minx"},"sourceDescriptions":{"tr":"Pedikür ve Minx kaplama.","az":"Pedikür və Minx örtüyü.","en":"Pedicure with Minx application."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"pedicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-minx-pedicure-90","label":"90 dk","labels":{"tr":"90 dakika","az":"90 dəqiqə","ru":"90 минут"},"duration":90,"priceMinor":6000,"durationStatus":"source","priceStatus":"demo"}],"addOns":[{"id":"src-foot-mask","sourceId":"foot-mask","name":"Ayak için ek maske","names":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"description":"Ayak bakımına ek maske uygulaması.","descriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","ru":"Дополнительная маска для стоп. Состав процедуры и детали визита уточняются с командой."},"sourceNames":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"sourceDescriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","en":"A mask to add to your foot care."},"categoryId":"nails","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":15,"priceMinor":1500,"durationStatus":"demo","allowedServiceIds":["src-brazil-pedicure","src-classic-pedicure","src-minx-pedicure","src-shellac-brazil-pedicure","src-shellac-classic-pedicure","src-shellac-spa-pedicure","src-spa-pedicure"]}],"requiresConsultation":false},{"id":"src-minx-polish","sourceId":"minx-polish","name":"Minx kaplama","names":{"tr":"Minx kaplama","az":"Minx örtüyü","ru":"Покрытие Minx"},"description":"Tırnaklara Minx kaplama.","descriptions":{"tr":"Tırnaklara Minx kaplama.","az":"Dırnaqlara Minx örtüyü.","ru":"Покрытие Minx."},"sourceNames":{"tr":"Minx kaplama","az":"Minx örtüyü","ru":"Покрытие Minx"},"sourceDescriptions":{"tr":"Tırnaklara Minx kaplama.","az":"Dırnaqlara Minx örtüyü.","en":"Minx application for your nails."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-minx-polish-35","label":"35 dk","labels":{"tr":"35 dakika","az":"35 dəqiqə","ru":"35 минут"},"duration":35,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-minx-single-nail","sourceId":"minx-single-nail","name":"Tek tırnağa Minx kaplama","names":{"tr":"Tek tırnağa Minx kaplama","az":"Bir dırnağa Minx örtüyü","ru":"Покрытие Minx на один ноготь"},"description":"Tek tırnağa Minx kaplama.","descriptions":{"tr":"Tek tırnağa Minx kaplama.","az":"Bir dırnağa Minx örtüyü.","ru":"Покрытие Minx на один ноготь."},"sourceNames":{"tr":"Tek tırnağa Minx kaplama","az":"Bir dırnağa Minx örtüyü","ru":"Покрытие Minx на один ноготь"},"sourceDescriptions":{"tr":"Tek tırnağa Minx kaplama.","az":"Bir dırnağa Minx örtüyü.","en":"Minx application on one nail."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-minx-single-nail-5","label":"5 dk","labels":{"tr":"5 dakika","az":"5 dəqiqə","ru":"5 минут"},"duration":5,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-standard-nail-polish","sourceId":"standard-nail-polish","name":"Standart oje","names":{"tr":"Standart oje","az":"Adi dırnaq lakı","ru":"Обычное покрытие лаком"},"description":"Tırnaklara standart oje uygulaması.","descriptions":{"tr":"Tırnaklara standart oje uygulaması.","az":"Dırnaqlara adi lak tətbiqi.","ru":"Обычное покрытие лаком."},"sourceNames":{"tr":"Standart oje","az":"Adi dırnaq lakı","ru":"Обычное покрытие лаком"},"sourceDescriptions":{"tr":"Tırnaklara standart oje uygulaması.","az":"Dırnaqlara adi lak tətbiqi.","en":"Standard nail polish application."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-standard-nail-polish-10","label":"10 dk","labels":{"tr":"10 dakika","az":"10 dəqiqə","ru":"10 минут"},"duration":10,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-gel-extensions","sourceId":"gel-extensions","name":"Jel tırnak uzatma","names":{"tr":"Jel tırnak uzatma","az":"Gel ilə dırnaq uzadılması","ru":"Наращивание ногтей гелем"},"description":"Jelle tırnak uzatma.","descriptions":{"tr":"Jelle tırnak uzatma.","az":"Gel ilə dırnaqların uzadılması.","ru":"Наращивание ногтей гелем."},"sourceNames":{"tr":"Jel tırnak uzatma","az":"Gel ilə dırnaq uzadılması","ru":"Наращивание ногтей гелем"},"sourceDescriptions":{"tr":"Jelle tırnak uzatma.","az":"Gel ilə dırnaqların uzadılması.","en":"Nail extensions using gel."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-gel-extensions-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-gel-removal-care","sourceId":"gel-removal-care","name":"Jel tırnak çıkarma ve bakım","names":{"tr":"Jel tırnak çıkarma ve bakım","az":"Gel dırnaqların çıxarılması və qulluq","ru":"Снятие геля и уход"},"description":"Jel tırnak çıkarma ve tırnak bakımı.","descriptions":{"tr":"Jel tırnak çıkarma ve tırnak bakımı.","az":"Gel dırnaqların çıxarılması və dırnaq qulluğu.","ru":"Снятие геля и уход."},"sourceNames":{"tr":"Jel tırnak çıkarma ve bakım","az":"Gel dırnaqların çıxarılması və qulluq","ru":"Снятие геля и уход"},"sourceDescriptions":{"tr":"Jel tırnak çıkarma ve tırnak bakımı.","az":"Gel dırnaqların çıxarılması və dırnaq qulluğu.","en":"Gel removal followed by nail care."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-gel-removal-care-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-gel-correction","sourceId":"gel-correction","name":"Jel tırnak düzeltme","names":{"tr":"Jel tırnak düzeltme","az":"Gel dırnaqların korreksiyası","ru":"Коррекция гелевых ногтей"},"description":"Jel tırnaklara düzeltme uygulaması.","descriptions":{"tr":"Jel tırnaklara düzeltme uygulaması.","az":"Gel dırnaqların korreksiyası.","ru":"Коррекция гелевых ногтей."},"sourceNames":{"tr":"Jel tırnak düzeltme","az":"Gel dırnaqların korreksiyası","ru":"Коррекция гелевых ногтей"},"sourceDescriptions":{"tr":"Jel tırnaklara düzeltme uygulaması.","az":"Gel dırnaqların korreksiyası.","en":"Correction of gel nails."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-gel-correction-60","label":"60 dk","labels":{"tr":"60 dakika","az":"60 dəqiqə","ru":"60 минут"},"duration":60,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-gel-single-correction","sourceId":"gel-single-correction","name":"Tek jel tırnak düzeltme","names":{"tr":"Tek jel tırnak düzeltme","az":"Bir gel dırnağın korreksiyası","ru":"Коррекция одного гелевого ногтя"},"description":"Tek jel tırnağa düzeltme uygulaması.","descriptions":{"tr":"Tek jel tırnağa düzeltme uygulaması.","az":"Bir gel dırnağın korreksiyası.","ru":"Коррекция одного гелевого ногтя."},"sourceNames":{"tr":"Tek jel tırnak düzeltme","az":"Bir gel dırnağın korreksiyası","ru":"Коррекция одного гелевого ногтя"},"sourceDescriptions":{"tr":"Tek jel tırnağa düzeltme uygulaması.","az":"Bir gel dırnağın korreksiyası.","en":"Correction of one gel nail."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"source","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-gel-single-correction-20","label":"20 dk","labels":{"tr":"20 dakika","az":"20 dəqiqə","ru":"20 минут"},"duration":20,"priceMinor":4500,"durationStatus":"source","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-artificial-nails","sourceId":"artificial-nails","name":"Takma tırnak uygulaması","names":{"tr":"Takma tırnak uygulaması","az":"Süni dırnaq tətbiqi","ru":"Накладные ногти"},"description":"Takma tırnak uygulaması.","descriptions":{"tr":"Takma tırnak uygulaması.","az":"Süni dırnaqların tətbiqi.","ru":"Накладные ногти."},"sourceNames":{"tr":"Takma tırnak uygulaması","az":"Süni dırnaq tətbiqi","ru":"Накладные ногти"},"sourceDescriptions":{"tr":"Takma tırnak uygulama seçeneklerini salonla netleştirin.","az":"Süni dırnaq tətbiqi üçün seçimləri salonla dəqiqləşdirin.","en":"Confirm artificial nail application options with the salon."},"categoryId":"nails","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"nail-station","mediaSubjectId":"manicure","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-artificial-nails-40","label":"40 dk","labels":{"tr":"40 dakika","az":"40 dəqiqə","ru":"40 минут"},"duration":40,"priceMinor":4500,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-brazilian-wax","sourceId":"brazilian-wax","name":"Brezilya ağda","names":{"tr":"Brezilya ağda","az":"Braziliya epilyasiyası","ru":"Бразильская восковая эпиляция"},"description":"Brezilya ağda.","descriptions":{"tr":"Brezilya ağda.","az":"Braziliya epilyasiyası.","ru":"Бразильская восковая эпиляция."},"sourceNames":{"tr":"Brezilya ağda","az":"Braziliya epilyasiyası","ru":"Бразильская восковая эпиляция"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-brazilian-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-bikini-wax","sourceId":"bikini-wax","name":"Bikini ağda","names":{"tr":"Bikini ağda","az":"Bikini nahiyəsinin epilyasiyası","ru":"Восковая эпиляция зоны бикини"},"description":"Bikini ağda.","descriptions":{"tr":"Bikini ağda.","az":"Bikini nahiyəsinin epilyasiyası.","ru":"Восковая эпиляция зоны бикини."},"sourceNames":{"tr":"Bikini ağda","az":"Bikini nahiyəsinin epilyasiyası","ru":"Восковая эпиляция зоны бикини"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-bikini-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-underarm-wax","sourceId":"underarm-wax","name":"Koltuk altı ağda","names":{"tr":"Koltuk altı ağda","az":"Qoltuqaltı epilyasiya","ru":"Восковая эпиляция подмышек"},"description":"Koltuk altı ağda.","descriptions":{"tr":"Koltuk altı ağda.","az":"Qoltuqaltı epilyasiya.","ru":"Восковая эпиляция подмышек."},"sourceNames":{"tr":"Koltuk altı ağda","az":"Qoltuqaltı epilyasiya","ru":"Восковая эпиляция подмышек"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-underarm-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-half-leg-wax","sourceId":"half-leg-wax","name":"Yarım bacak ağda","names":{"tr":"Yarım bacak ağda","az":"Yarım ayaq epilyasiyası","ru":"Восковая эпиляция голеней"},"description":"Yarım bacak ağda.","descriptions":{"tr":"Yarım bacak ağda.","az":"Yarım ayaq epilyasiyası.","ru":"Восковая эпиляция голеней."},"sourceNames":{"tr":"Yarım bacak ağda","az":"Yarım ayaq epilyasiyası","ru":"Восковая эпиляция голеней"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-half-leg-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-full-leg-wax","sourceId":"full-leg-wax","name":"Tam bacak ağda","names":{"tr":"Tam bacak ağda","az":"Tam ayaq epilyasiyası","ru":"Восковая эпиляция ног полностью"},"description":"Tam bacak ağda.","descriptions":{"tr":"Tam bacak ağda.","az":"Tam ayaq epilyasiyası.","ru":"Восковая эпиляция ног полностью."},"sourceNames":{"tr":"Tam bacak ağda","az":"Tam ayaq epilyasiyası","ru":"Восковая эпиляция ног полностью"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-full-leg-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-arm-wax","sourceId":"arm-wax","name":"Tam kol ağda","names":{"tr":"Tam kol ağda","az":"Tam qol epilyasiyası","ru":"Восковая эпиляция рук полностью"},"description":"Tam kol ağda.","descriptions":{"tr":"Tam kol ağda.","az":"Tam qol epilyasiyası.","ru":"Восковая эпиляция рук полностью."},"sourceNames":{"tr":"Tam kol ağda","az":"Tam qol epilyasiyası","ru":"Восковая эпиляция рук полностью"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-arm-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-face-wax","sourceId":"face-wax","name":"Yüz ağda","names":{"tr":"Yüz ağda","az":"Üz epilyasiyası","ru":"Восковая эпиляция лица"},"description":"Yüz ağda.","descriptions":{"tr":"Yüz ağda.","az":"Üz epilyasiyası.","ru":"Восковая эпиляция лица."},"sourceNames":{"tr":"Yüz ağda","az":"Üz epilyasiyası","ru":"Восковая эпиляция лица"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-face-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-abdomen-wax","sourceId":"abdomen-wax","name":"Karın ağda","names":{"tr":"Karın ağda","az":"Qarın nahiyəsinin epilyasiyası","ru":"Восковая эпиляция живота"},"description":"Karın ağda.","descriptions":{"tr":"Karın ağda.","az":"Qarın nahiyəsinin epilyasiyası.","ru":"Восковая эпиляция живота."},"sourceNames":{"tr":"Karın ağda","az":"Qarın nahiyəsinin epilyasiyası","ru":"Восковая эпиляция живота"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-abdomen-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-full-back-wax","sourceId":"full-back-wax","name":"Sırt ağda","names":{"tr":"Sırt ağda","az":"Bel nahiyəsinin epilyasiyası","ru":"Восковая эпиляция спины полностью"},"description":"Sırt ağda.","descriptions":{"tr":"Sırt ağda.","az":"Bel nahiyəsinin epilyasiyası.","ru":"Восковая эпиляция спины полностью."},"sourceNames":{"tr":"Sırt ağda","az":"Bel nahiyəsinin epilyasiyası","ru":"Восковая эпиляция спины полностью"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-full-back-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-full-abdomen-wax","sourceId":"full-abdomen-wax","name":"Tam karın ağda","names":{"tr":"Tam karın ağda","az":"Qarın nahiyəsinin tam epilyasiyası","ru":"Восковая эпиляция живота полностью"},"description":"Tam karın ağda.","descriptions":{"tr":"Tam karın ağda.","az":"Qarın nahiyəsinin tam epilyasiyası.","ru":"Восковая эпиляция живота полностью."},"sourceNames":{"tr":"Tam karın ağda","az":"Qarın nahiyəsinin tam epilyasiyası","ru":"Восковая эпиляция живота полностью"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-full-abdomen-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-full-body-wax","sourceId":"full-body-wax","name":"Tüm vücut ağda","names":{"tr":"Tüm vücut ağda","az":"Tam bədən epilyasiyası","ru":"Восковая эпиляция всего тела"},"description":"Tüm vücut ağda.","descriptions":{"tr":"Tüm vücut ağda.","az":"Tam bədən epilyasiyası.","ru":"Восковая эпиляция всего тела."},"sourceNames":{"tr":"Tüm vücut ağda","az":"Tam bədən epilyasiyası","ru":"Восковая эпиляция всего тела"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-full-body-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-lip-chin-wax","sourceId":"lip-chin-wax","name":"Dudak üstü ve çene ağda","names":{"tr":"Dudak üstü ve çene ağda","az":"Dodaq üstü və çənə epilyasiyası","ru":"Восковая эпиляция верхней губы и подбородка"},"description":"Dudak üstü ve çene ağda.","descriptions":{"tr":"Dudak üstü ve çene ağda.","az":"Dodaq üstü və çənə epilyasiyası.","ru":"Восковая эпиляция верхней губы и подбородка."},"sourceNames":{"tr":"Dudak üstü ve çene ağda","az":"Dodaq üstü və çənə epilyasiyası","ru":"Восковая эпиляция верхней губы и подбородка"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-lip-chin-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-full-leg-bikini-wax","sourceId":"full-leg-bikini-wax","name":"Tam bacak ve bikini ağda","names":{"tr":"Tam bacak ve bikini ağda","az":"Tam ayaq və bikini epilyasiyası","ru":"Восковая эпиляция ног и бикини"},"description":"Tam bacak ve bikini ağda.","descriptions":{"tr":"Tam bacak ve bikini ağda.","az":"Tam ayaq və bikini epilyasiyası.","ru":"Восковая эпиляция ног и бикини."},"sourceNames":{"tr":"Tam bacak ve bikini ağda","az":"Tam ayaq və bikini epilyasiyası","ru":"Восковая эпиляция ног и бикини"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-full-leg-bikini-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-full-leg-brazilian-wax","sourceId":"full-leg-brazilian-wax","name":"Tam bacak ve Brezilya ağda","names":{"tr":"Tam bacak ve Brezilya ağda","az":"Tam ayaq və Braziliya epilyasiyası","ru":"Восковая эпиляция ног и бразильская"},"description":"Tam bacak ve Brezilya ağda.","descriptions":{"tr":"Tam bacak ve Brezilya ağda.","az":"Tam ayaq və Braziliya epilyasiyası.","ru":"Восковая эпиляция ног и бразильская."},"sourceNames":{"tr":"Tam bacak ve Brezilya ağda","az":"Tam ayaq və Braziliya epilyasiyası","ru":"Восковая эпиляция ног и бразильская"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-full-leg-brazilian-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-brow-wax","sourceId":"brow-wax","name":"Kaş ağda","names":{"tr":"Kaş ağda","az":"Qaşların mumla formalaşdırılması","ru":"Восковая эпиляция бровей"},"description":"Kaş ağda.","descriptions":{"tr":"Kaş ağda.","az":"Qaşların mumla formalaşdırılması.","ru":"Восковая эпиляция бровей."},"sourceNames":{"tr":"Kaş ağda","az":"Qaşların mumla formalaşdırılması","ru":"Восковая эпиляция бровей"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-brow-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-chest-wax","sourceId":"chest-wax","name":"Göğüs ağda","names":{"tr":"Göğüs ağda","az":"Sinə nahiyəsinin epilyasiyası","ru":"Восковая эпиляция груди"},"description":"Göğüs ağda.","descriptions":{"tr":"Göğüs ağda.","az":"Sinə nahiyəsinin epilyasiyası.","ru":"Восковая эпиляция груди."},"sourceNames":{"tr":"Göğüs ağda","az":"Sinə nahiyəsinin epilyasiyası","ru":"Восковая эпиляция груди"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"epilation-unit","mediaSubjectId":"epilation","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-chest-wax-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":5000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-false-lashes","sourceId":"false-lashes","name":"Takma kirpik","names":{"tr":"Takma kirpik","az":"Süni kirpik tətbiqi","ru":"Накладные ресницы"},"description":"Takma kirpik uygulaması.","descriptions":{"tr":"Takma kirpik uygulaması.","az":"Süni kirpiklərin tətbiqi.","ru":"Нанесение накладных ресниц."},"sourceNames":{"tr":"Takma kirpik","az":"Süni kirpik tətbiqi","ru":"Накладные ресницы"},"sourceDescriptions":{"tr":"Takma kirpik uygulaması. Tarzı ve randevu süresini salonla netleştirin.","az":"Süni kirpiklərin tətbiqi. Üslubu və qəbul müddətini salonla dəqiqləşdirin.","en":"False lash application. Confirm the style and appointment duration with the salon."},"categoryId":"brows-lashes","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"brow-station","mediaSubjectId":"brows-lashes","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-false-lashes-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":4000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-brow-shaping","sourceId":"brow-shaping","name":"Kaş şekillendirme","names":{"tr":"Kaş şekillendirme","az":"Qaş korreksiyası","ru":"Коррекция формы бровей"},"description":"Kaş şekillendirme.","descriptions":{"tr":"Kaş şekillendirme.","az":"Qaş formasının korreksiyası.","ru":"Коррекция формы бровей."},"sourceNames":{"tr":"Kaş şekillendirme","az":"Qaş korreksiyası","ru":"Коррекция формы бровей"},"sourceDescriptions":{"tr":"Kaş şekillendirme.","az":"Qaş formasının korreksiyası.","en":"Eyebrow shaping."},"categoryId":"brows-lashes","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"brow-station","mediaSubjectId":"brows-lashes","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-brow-shaping-30","label":"30 dk","labels":{"tr":"30 dakika","az":"30 dəqiqə","ru":"30 минут"},"duration":30,"priceMinor":4000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-day-evening-makeup","sourceId":"day-evening-makeup","name":"Gündüz ve gece makyajı","names":{"tr":"Gündüz ve gece makyajı","az":"Gündüz və axşam makiyajı","ru":"Дневной и вечерний макияж"},"description":"Gündüz veya gece için makyaj.","descriptions":{"tr":"Gündüz veya gece için makyaj.","az":"Gündüz və ya axşam üçün makiyaj.","ru":"Дневной и вечерний макияж."},"sourceNames":{"tr":"Gündüz ve gece makyajı","az":"Gündüz və axşam makiyajı","ru":"Дневной и вечерний макияж"},"sourceDescriptions":{"tr":"Gündüz veya gece için makyaj.","az":"Gündüz və ya axşam üçün makiyaj.","en":"Makeup for daytime or an evening occasion."},"categoryId":"makeup","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"makeup-station","mediaSubjectId":"makeup","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-day-evening-makeup-45","label":"45 dk","labels":{"tr":"45 dakika","az":"45 dəqiqə","ru":"45 минут"},"duration":45,"priceMinor":8000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-bridal-makeup","sourceId":"bridal-makeup","name":"Gelin makyajı","names":{"tr":"Gelin makyajı","az":"Toy makiyajı","ru":"Свадебный макияж"},"description":"Düğün günü için makyaj.","descriptions":{"tr":"Düğün günü için makyaj.","az":"Toy günü üçün makiyaj.","ru":"Макияж для свадебного дня."},"sourceNames":{"tr":"Gelin makyajı","az":"Toy makiyajı","ru":"Свадебный макияж"},"sourceDescriptions":{"tr":"Düğün günü için makyaj. Prova makyajının dahil olup olmadığını teyit edin.","az":"Toy günü üçün makiyaj. Sınaq makiyajının daxil olub-olmadığını dəqiqləşdirin.","en":"Makeup for your wedding day. Confirm whether a makeup trial is included."},"categoryId":"makeup","active":true,"mode":"service","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookingKind":"service","durationStatus":"demo","resourceId":"makeup-station","mediaSubjectId":"makeup","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-bridal-makeup-45","label":"45 dk","labels":{"tr":"45 dakika","az":"45 dəqiqə","ru":"45 минут"},"duration":45,"priceMinor":8000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"requiresConsultation":false},{"id":"src-slimming-consultation","sourceId":"slimming-programmes","name":"Vücut bakım programları · ön görüşme","names":{"tr":"Vücut bakım programları · ön görüşme","az":"Bədən qulluğu proqramları · ilkin görüş","ru":"Программы ухода за телом · консультация"},"descriptions":{"tr":"Vücut bakım programları için ön görüşme.","az":"Bədən qulluğu proqramları üçün ilkin görüş.","ru":"Предварительная консультация по программам ухода за телом."},"categoryId":"body","active":true,"mode":"consultation","bookingKind":"consultation","consultationForServiceId":"slimming-programmes","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false},"durationStatus":"demo","priceStatus":"demo","resourceId":"body-room","specialistIds":["lala","aylin","nigar"],"bufferBefore":5,"bufferAfter":10,"variants":[{"id":"src-slimming-consultation-30","label":"30 dk","duration":30,"priceMinor":3000,"durationStatus":"demo","priceStatus":"demo"}],"addOns":[],"mediaSubjectId":"body-care","requiresConsultation":false,"outsideOfficialServiceMapping":true,"description":"Vücut bakım programları için ön görüşme."}],"programs":[{"id":"src-aerobics","sourceId":"aerobics","name":"Aerobik","names":{"tr":"Aerobik","az":"Aerobika","ru":"Аэробика"},"description":"Aerobik grup dersi.","descriptions":{"tr":"Aerobik grup dersi.","az":"Aerobika qrup dərsi.","ru":"Аэробика — групповое занятие."},"sourceNames":{"tr":"Aerobik","az":"Aerobika","ru":"Аэробика"},"sourceDescriptions":{"tr":"Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.","az":"Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.","en":"Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."},"categoryId":"fitness","active":true,"mode":"class","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","requiresReview":false,"scheduleStatus":"demo","duration":50,"durationStatus":"demo","priceMinor":3500,"mediaSubjectId":"aerobics"},{"id":"src-aqua-aerobics","sourceId":"aqua-aerobics","name":"Su aerobiği","names":{"tr":"Su aerobiği","az":"Akvaaerobika","ru":"Аквааэробика"},"description":"Su aerobiği grup dersi.","descriptions":{"tr":"Su aerobiği grup dersi.","az":"Akvaaerobika qrup dərsi.","ru":"Аквааэробика — групповое занятие."},"sourceNames":{"tr":"Su aerobiği","az":"Akvaaerobika","ru":"Аквааэробика"},"sourceDescriptions":{"tr":"Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.","az":"Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.","en":"Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."},"categoryId":"fitness","active":true,"mode":"class","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","requiresReview":false,"scheduleStatus":"demo","duration":50,"durationStatus":"demo","priceMinor":3500,"mediaSubjectId":"aqua-aerobics"},{"id":"src-pilates","sourceId":"pilates","name":"Pilates","names":{"tr":"Pilates","az":"Pilates","ru":"Пилатес"},"description":"Pilates grup dersi.","descriptions":{"tr":"Pilates grup dersi.","az":"Pilates qrup dərsi.","ru":"Пилатес — групповое занятие."},"sourceNames":{"tr":"Pilates","az":"Pilates","ru":"Пилатес"},"sourceDescriptions":{"tr":"Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.","az":"Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.","en":"Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."},"categoryId":"fitness","active":true,"mode":"class","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","requiresReview":false,"scheduleStatus":"demo","duration":50,"durationStatus":"demo","priceMinor":3500,"mediaSubjectId":"pilates"},{"id":"src-zumba","sourceId":"zumba","name":"Zumba","names":{"tr":"Zumba","az":"Zumba","ru":"Зумба"},"description":"Zumba grup dersi.","descriptions":{"tr":"Zumba grup dersi.","az":"Zumba qrup dərsi.","ru":"Зумба — групповое занятие."},"sourceNames":{"tr":"Zumba","az":"Zumba","ru":"Зумба"},"sourceDescriptions":{"tr":"Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.","az":"Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.","en":"Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."},"categoryId":"fitness","active":true,"mode":"class","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","requiresReview":false,"scheduleStatus":"demo","duration":50,"durationStatus":"demo","priceMinor":3500,"mediaSubjectId":"zumba"},{"id":"src-oriental-dance","sourceId":"oriental-dance","name":"Oryantal dans","names":{"tr":"Oryantal dans","az":"Şərq rəqsləri","ru":"Восточные танцы"},"description":"Oryantal dans grup dersi.","descriptions":{"tr":"Oryantal dans grup dersi.","az":"Şərq rəqsləri qrup dərsi.","ru":"Восточные танцы — групповое занятие."},"sourceNames":{"tr":"Oryantal dans","az":"Şərq rəqsləri","ru":"Восточные танцы"},"sourceDescriptions":{"tr":"Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.","az":"Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.","en":"Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."},"categoryId":"fitness","active":true,"mode":"class","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","requiresReview":false,"scheduleStatus":"demo","duration":50,"durationStatus":"demo","priceMinor":3500,"mediaSubjectId":"oriental-dance"},{"id":"src-total-body-workout","sourceId":"total-body-workout","name":"Tüm vücut antrenmanı","names":{"tr":"Tüm vücut antrenmanı","az":"Bütün bədən məşqi","ru":"Тренировка всего тела"},"description":"Tüm vücut antrenmanı grup dersi.","descriptions":{"tr":"Tüm vücut antrenmanı grup dersi.","az":"Bütün bədən məşqi qrup dərsi.","ru":"Тренировка всего тела — групповое занятие."},"sourceNames":{"tr":"Tüm vücut antrenmanı","az":"Bütün bədən məşqi","ru":"Тренировка всего тела"},"sourceDescriptions":{"tr":"Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.","az":"Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.","en":"Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."},"categoryId":"fitness","active":true,"mode":"class","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","requiresReview":false,"scheduleStatus":"demo","duration":50,"durationStatus":"demo","priceMinor":3500,"mediaSubjectId":"total-body-workout"}],"classes":[{"id":"src-aerobics-1","programId":"src-aerobics","name":"Aerobik","names":{"tr":"Aerobik","az":"Aerobika","ru":"Аэробика"},"active":true,"date":"2026-11-05","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"lala","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":0,"sourceId":"aerobics","mediaSubjectId":"aerobics","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-aerobics-2","programId":"src-aerobics","name":"Aerobik","names":{"tr":"Aerobik","az":"Aerobika","ru":"Аэробика"},"active":true,"date":"2026-11-12","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"lala","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":4,"sourceId":"aerobics","mediaSubjectId":"aerobics","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-aqua-aerobics-1","programId":"src-aqua-aerobics","name":"Su aerobiği","names":{"tr":"Su aerobiği","az":"Akvaaerobika","ru":"Аквааэробика"},"active":true,"date":"2026-11-06","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"aylin","resourceId":"pool","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":0,"sourceId":"aqua-aerobics","mediaSubjectId":"aqua-aerobics","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-aqua-aerobics-2","programId":"src-aqua-aerobics","name":"Su aerobiği","names":{"tr":"Su aerobiği","az":"Akvaaerobika","ru":"Аквааэробика"},"active":true,"date":"2026-11-13","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"aylin","resourceId":"pool","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":4,"sourceId":"aqua-aerobics","mediaSubjectId":"aqua-aerobics","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-pilates-1","programId":"src-pilates","name":"Pilates","names":{"tr":"Pilates","az":"Pilates","ru":"Пилатес"},"active":true,"date":"2026-11-07","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"nigar","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":0,"sourceId":"pilates","mediaSubjectId":"pilates","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-pilates-2","programId":"src-pilates","name":"Pilates","names":{"tr":"Pilates","az":"Pilates","ru":"Пилатес"},"active":true,"date":"2026-11-14","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"nigar","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":4,"sourceId":"pilates","mediaSubjectId":"pilates","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-zumba-1","programId":"src-zumba","name":"Zumba","names":{"tr":"Zumba","az":"Zumba","ru":"Зумба"},"active":true,"date":"2026-11-08","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"lala","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":0,"sourceId":"zumba","mediaSubjectId":"zumba","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-zumba-2","programId":"src-zumba","name":"Zumba","names":{"tr":"Zumba","az":"Zumba","ru":"Зумба"},"active":true,"date":"2026-11-15","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"lala","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":4,"sourceId":"zumba","mediaSubjectId":"zumba","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-oriental-dance-1","programId":"src-oriental-dance","name":"Oryantal dans","names":{"tr":"Oryantal dans","az":"Şərq rəqsləri","ru":"Восточные танцы"},"active":true,"date":"2026-11-09","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"aylin","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":0,"sourceId":"oriental-dance","mediaSubjectId":"oriental-dance","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-oriental-dance-2","programId":"src-oriental-dance","name":"Oryantal dans","names":{"tr":"Oryantal dans","az":"Şərq rəqsləri","ru":"Восточные танцы"},"active":true,"date":"2026-11-16","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"aylin","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":4,"sourceId":"oriental-dance","mediaSubjectId":"oriental-dance","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-total-body-workout-1","programId":"src-total-body-workout","name":"Tüm vücut antrenmanı","names":{"tr":"Tüm vücut antrenmanı","az":"Bütün bədən məşqi","ru":"Тренировка всего тела"},"active":true,"date":"2026-11-10","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"nigar","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":0,"sourceId":"total-body-workout","mediaSubjectId":"total-body-workout","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}},{"id":"src-total-body-workout-2","programId":"src-total-body-workout","name":"Tüm vücut antrenmanı","names":{"tr":"Tüm vücut antrenmanı","az":"Bütün bədən məşqi","ru":"Тренировка всего тела"},"active":true,"date":"2026-11-17","time":"11:00","duration":50,"priceMinor":3500,"capacity":4,"specialistId":"nigar","resourceId":"pilates-room","durationStatus":"demo","priceStatus":"demo","availabilityStatus":"demo","scheduleStatus":"demo","demoOccupancy":4,"sourceId":"total-body-workout","mediaSubjectId":"total-body-workout","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"}}],"packageOffers":[{"id":"src-massage-5","active":true,"displayGroup":"massage-5","name":"5 seans Sultan Saba mum masajı — Örnek paket","names":{"tr":"5 seans Sultan Saba mum masajı — Örnek paket","az":"5 seans Sultan Saba şam masajı — Nümunə paket","ru":"5 сеансов свечного массажа Sultan Saba — Пример пакета"},"total":5,"priceMinor":54000,"validDays":90,"serviceIds":["src-sultan-saba-candle-massage"],"variantIds":["src-sultan-saba-candle-massage-70"],"priceStatus":"demo","termsStatus":"demo","sourceStatus":"demo-offer","source":{"kind":"illustrative-demo","currentTermsConfirmed":false}}],"membershipOffers":[{"id":"src-basic-3m","active":true,"displayGroup":"basic","sourceId":"basic","name":"Basic · 3 ay","names":{"tr":"Basic · 3 ay","az":"Basic · 3 ay","ru":"Basic · 3 мес."},"months":3,"priceMinor":45000,"facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":[],"components":[{"id":"src-basic-3m-access","kind":"membership","facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":[],"months":3,"validDays":90,"gift":false,"freezeWithMembership":true}],"priceStatus":"demo","termsStatus":"demo","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false}},{"id":"src-basic-6m","active":true,"displayGroup":"basic","sourceId":"basic","name":"Basic · 6 ay","names":{"tr":"Basic · 6 ay","az":"Basic · 6 ay","ru":"Basic · 6 мес."},"months":6,"priceMinor":90000,"facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":[],"components":[{"id":"src-basic-6m-access","kind":"membership","facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":[],"months":6,"validDays":180,"gift":false,"freezeWithMembership":true}],"priceStatus":"demo","termsStatus":"demo","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false}},{"id":"src-basic-12m","active":true,"displayGroup":"basic","sourceId":"basic","name":"Basic · 12 ay","names":{"tr":"Basic · 12 ay","az":"Basic · 12 ay","ru":"Basic · 12 мес."},"months":12,"priceMinor":180000,"facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":[],"components":[{"id":"src-basic-12m-access","kind":"membership","facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":[],"months":12,"validDays":360,"gift":false,"freezeWithMembership":true}],"priceStatus":"demo","termsStatus":"demo","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false}},{"id":"src-fit-fun-3m","active":true,"displayGroup":"fit-fun","sourceId":"fitfun","name":"Fit&Fun · 3 ay","names":{"tr":"Fit&Fun · 3 ay","az":"Fit&Fun · 3 ay","ru":"Fit&Fun · 3 мес."},"months":3,"priceMinor":45000,"facilityIds":[],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"components":[{"id":"src-fit-fun-3m-access","kind":"membership","facilityIds":[],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"months":3,"validDays":90,"gift":false,"freezeWithMembership":true}],"priceStatus":"demo","termsStatus":"demo","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false}},{"id":"src-fit-fun-6m","active":true,"displayGroup":"fit-fun","sourceId":"fitfun","name":"Fit&Fun · 6 ay","names":{"tr":"Fit&Fun · 6 ay","az":"Fit&Fun · 6 ay","ru":"Fit&Fun · 6 мес."},"months":6,"priceMinor":90000,"facilityIds":[],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"components":[{"id":"src-fit-fun-6m-access","kind":"membership","facilityIds":[],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"months":6,"validDays":180,"gift":false,"freezeWithMembership":true}],"priceStatus":"demo","termsStatus":"demo","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false}},{"id":"src-fit-fun-12m","active":true,"displayGroup":"fit-fun","sourceId":"fitfun","name":"Fit&Fun · 12 ay","names":{"tr":"Fit&Fun · 12 ay","az":"Fit&Fun · 12 ay","ru":"Fit&Fun · 12 мес."},"months":12,"priceMinor":180000,"facilityIds":[],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"components":[{"id":"src-fit-fun-12m-access","kind":"membership","facilityIds":[],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"months":12,"validDays":360,"gift":false,"freezeWithMembership":true}],"priceStatus":"demo","termsStatus":"demo","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false}},{"id":"src-gold-3m","active":true,"displayGroup":"gold","sourceId":"gold","name":"Gold · 3 ay","names":{"tr":"Gold · 3 ay","az":"Gold · 3 ay","ru":"Gold · 3 мес."},"months":3,"priceMinor":65000,"facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"components":[{"id":"src-gold-3m-access","kind":"membership","facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"months":3,"validDays":90,"gift":false,"freezeWithMembership":true}],"priceStatus":"demo","termsStatus":"demo","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false}},{"id":"src-gold-6m","active":true,"displayGroup":"gold","sourceId":"gold","name":"Gold · 6 ay","names":{"tr":"Gold · 6 ay","az":"Gold · 6 ay","ru":"Gold · 6 мес."},"months":6,"priceMinor":130000,"facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"components":[{"id":"src-gold-6m-access","kind":"membership","facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"months":6,"validDays":180,"gift":false,"freezeWithMembership":true}],"priceStatus":"demo","termsStatus":"demo","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false}},{"id":"src-gold-12m","active":true,"displayGroup":"gold","sourceId":"gold","name":"Gold · 12 ay","names":{"tr":"Gold · 12 ay","az":"Gold · 12 ay","ru":"Gold · 12 мес."},"months":12,"priceMinor":260000,"facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"components":[{"id":"src-gold-12m-access","kind":"membership","facilityIds":["hamam","sauna","pool","fitness","rest-area"],"programIds":["src-aerobics","src-aqua-aerobics","src-pilates","src-zumba","src-oriental-dance","src-total-body-workout"],"months":12,"validDays":360,"gift":false,"freezeWithMembership":true}],"priceStatus":"demo","termsStatus":"demo","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","accessedAt":"2026-11-03","currentTermsConfirmed":false}}],"facilities":[{"id":"hamam","sourceId":"hamam","name":"Türk hamamı","names":{"tr":"Türk hamamı","az":"Türk hamamı","ru":"Турецкий хаммам"},"description":"Özel bakım odası bulunan hamam.","descriptions":{"tr":"Özel bakım odası bulunan hamam.","az":"Fərdi qulluq otağı olan hamam.","ru":"Турецкий хаммам."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=31","currentTermsConfirmed":false}},{"id":"pool","sourceId":"pool","name":"Havuz","names":{"tr":"Havuz","az":"Hovuz","ru":"Бассейн"},"description":"Yüzme havuzu ve havuz kenarı dinlenme alanı.","descriptions":{"tr":"Yüzme havuzu ve havuz kenarı dinlenme alanı.","az":"Üzgüçülük hovuzu və hovuzkənarı istirahət sahəsi.","ru":"Бассейн."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=31","currentTermsConfirmed":false}},{"id":"rest-area","sourceId":"rest-area","name":"Dinlenme alanı","names":{"tr":"Dinlenme alanı","az":"İstirahət sahəsi","ru":"Зона отдыха"},"description":"Havuz kenarındaki dinlenme alanında ziyaretinize sakin bir mola ekleyin.","descriptions":{"tr":"Havuz kenarındaki dinlenme alanında ziyaretinize sakin bir mola ekleyin.","az":"Hovuzkənarı istirahət sahəsində ziyarətinizə sakit bir fasilə əlavə edin.","ru":"Зона отдыха."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","currentTermsConfirmed":false}},{"id":"fitness","sourceId":"fitness-studio","name":"Fitness stüdyosu","names":{"tr":"Fitness stüdyosu","az":"Fitnes studiyası","ru":"Фитнес-студия"},"description":"Technogym ekipmanıyla fitness stüdyosu.","descriptions":{"tr":"Technogym ekipmanıyla fitness stüdyosu.","az":"Technogym avadanlıqları ilə fitnes studiyası.","ru":"Фитнес-студия."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=31","currentTermsConfirmed":false}},{"id":"sauna","sourceId":"sauna","name":"Fin saunası","names":{"tr":"Fin saunası","az":"Fin saunası","ru":"Финская сауна"},"description":"Wellness alanında sauna.","descriptions":{"tr":"Wellness alanında sauna.","az":"Wellness sahəsində sauna.","ru":"Финская сауна."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=31","currentTermsConfirmed":false}},{"id":"wellbeing","sourceId":"wellbeing","name":"Yüz ve vücut bakımı","names":{"tr":"Yüz ve vücut bakımı","az":"Üz və bədən qulluğu","ru":"Уход за лицом и телом"},"description":"Yüz ve vücut bakımına ayrılan alan.","descriptions":{"tr":"Yüz ve vücut bakımına ayrılan alan.","az":"Üz və bədən qulluğu üçün ayrılmış məkan.","ru":"Уход за лицом и телом."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=03","currentTermsConfirmed":false}},{"id":"hair-nail-spa","sourceId":"hair-nail-spa","name":"Saç ve tırnak salonu","names":{"tr":"Saç ve tırnak salonu","az":"Saç və dırnaq salonu","ru":"Салон волос и ногтей"},"description":"Saç ve tırnak bakım salonu.","descriptions":{"tr":"Saç ve tırnak bakım salonu.","az":"Saç və dırnaq qulluğu üçün salon.","ru":"Салон волос и ногтей."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=03","currentTermsConfirmed":false}},{"id":"slim-cafe","sourceId":"slim-cafe","name":"Slim Cafe","names":{"tr":"Slim Cafe","az":"Slim Cafe","ru":"Slim Cafe"},"description":"Ziyaretinizden önce veya sonra kafede mola verin. Menü ve fiyatları mekândan öğrenin.","descriptions":{"tr":"Ziyaretinizden önce veya sonra kafede mola verin. Menü ve fiyatları mekândan öğrenin.","az":"Ziyarətinizdən əvvəl və ya sonra kafedə fasilə verin. Menyu və qiymətləri məkandan öyrənin.","ru":"Slim Cafe."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=03","currentTermsConfirmed":false}},{"id":"shop","sourceId":"shop","name":"Sultan Saba mağazası","names":{"tr":"Sultan Saba mağazası","az":"Sultan Saba mağazası","ru":"Магазин Sultan Saba"},"description":"La Sultane de Saba ve Aroma Derm ürünlerini keşfedin. Mevcut ürünleri mağazadan öğrenin.","descriptions":{"tr":"La Sultane de Saba ve Aroma Derm ürünlerini keşfedin. Mevcut ürünleri mağazadan öğrenin.","az":"La Sultane de Saba və Aroma Derm məhsullarını kəşf edin. Mövcud məhsulları mağazadan öyrənin.","ru":"Магазин Sultan Saba."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=35","currentTermsConfirmed":false}},{"id":"slimming-programmes","sourceId":"slimming-programmes","name":"Vücut bakım programları","names":{"tr":"Vücut bakım programları","az":"Bədən qulluğu proqramları","ru":"Программы ухода за телом"},"description":"Vücut bakım paketleri hakkında ekipten bilgi alın. İçeriği, süreyi ve fiyatı birlikte netleştirin.","descriptions":{"tr":"Vücut bakım paketleri hakkında ekipten bilgi alın. İçeriği, süreyi ve fiyatı birlikte netleştirin.","az":"Bədən qulluğu paketləri barədə komandadan məlumat alın. Tərkib, müddət və qiyməti birlikdə dəqiqləşdirin.","ru":"Программы ухода за телом."},"active":false,"informational":true,"bookable":false,"source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","currentTermsConfirmed":false}}],"officialMapping":[{"id":"traditional-turkish-bath","sourceId":"traditional-turkish-bath","category":"hamam","categoryId":"hamam","mode":"service","runtimeId":"src-traditional-turkish-bath"},{"id":"aromatic-foam-bath","sourceId":"aromatic-foam-bath","category":"hamam","categoryId":"hamam","mode":"service","runtimeId":"src-aromatic-foam-bath"},{"id":"kese-bath","sourceId":"kese-bath","category":"hamam","categoryId":"hamam","mode":"service","runtimeId":"src-kese-bath"},{"id":"sultan-saba-ritual","sourceId":"sultan-saba-ritual","category":"hamam","categoryId":"hamam","mode":"service","runtimeId":"src-sultan-saba-ritual"},{"id":"sultan-saba-peeling","sourceId":"sultan-saba-peeling","category":"hamam","categoryId":"hamam","mode":"service","runtimeId":"src-sultan-saba-peeling"},{"id":"chi-yang-massage","sourceId":"chi-yang-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-chi-yang-massage"},{"id":"hot-oil-massage","sourceId":"hot-oil-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-hot-oil-massage"},{"id":"chakra-stone-massage","sourceId":"chakra-stone-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-chakra-stone-massage"},{"id":"head-massage","sourceId":"head-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-head-massage"},{"id":"indian-head-hair-mask","sourceId":"indian-head-hair-mask","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-indian-head-hair-mask"},{"id":"shirodhara-massage","sourceId":"shirodhara-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-shirodhara-massage"},{"id":"lomi-lomi-massage","sourceId":"lomi-lomi-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-lomi-lomi-massage"},{"id":"sultan-saba-candle-massage","sourceId":"sultan-saba-candle-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-sultan-saba-candle-massage"},{"id":"herbal-massage","sourceId":"herbal-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-herbal-massage"},{"id":"local-massage","sourceId":"local-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-local-massage"},{"id":"foot-reflexology","sourceId":"foot-reflexology","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-foot-reflexology"},{"id":"foot-massage","sourceId":"foot-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-foot-massage"},{"id":"foot-massage-sultan-mask","sourceId":"foot-massage-sultan-mask","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-foot-massage-sultan-mask"},{"id":"anti-cellulite-massage","sourceId":"anti-cellulite-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-anti-cellulite-massage"},{"id":"styx-oil-gel-massage","sourceId":"styx-oil-gel-massage","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-styx-oil-gel-massage"},{"id":"classic-aroma-derm-facial","sourceId":"classic-aroma-derm-facial","category":"face","categoryId":"face","mode":"service","runtimeId":"src-classic-aroma-derm-facial"},{"id":"prestige-facial","sourceId":"prestige-facial","category":"face","categoryId":"face","mode":"service","runtimeId":"src-prestige-facial"},{"id":"amethyst-facial","sourceId":"amethyst-facial","category":"face","categoryId":"face","mode":"service","runtimeId":"src-amethyst-facial"},{"id":"eye-area-care","sourceId":"eye-area-care","category":"face","categoryId":"face","mode":"service","runtimeId":"src-eye-area-care"},{"id":"express-aroma-derm-facial","sourceId":"express-aroma-derm-facial","category":"face","categoryId":"face","mode":"service","runtimeId":"src-express-aroma-derm-facial"},{"id":"aroma-derm-ampoule-facial","sourceId":"aroma-derm-ampoule-facial","category":"face","categoryId":"face","mode":"service","runtimeId":"src-aroma-derm-ampoule-facial"},{"id":"aroma-derm-extra-facial","sourceId":"aroma-derm-extra-facial","category":"face","categoryId":"face","mode":"service","runtimeId":"src-aroma-derm-extra-facial"},{"id":"lifting-vitamin-mask","sourceId":"lifting-vitamin-mask","category":"face","categoryId":"face","mode":"service","runtimeId":"src-lifting-vitamin-mask"},{"id":"modelage-mask","sourceId":"modelage-mask","category":"face","categoryId":"face","mode":"service","runtimeId":"src-modelage-mask"},{"id":"face-mask","sourceId":"face-mask","category":"face","categoryId":"face","mode":"service","runtimeId":"src-face-mask"},{"id":"face-massage","sourceId":"face-massage","category":"face","categoryId":"face","mode":"service","runtimeId":"src-face-massage"},{"id":"decollete-care","sourceId":"decollete-care","category":"face","categoryId":"face","mode":"supplement","runtimeId":"src-decollete-care"},{"id":"express-skin-burst-up-care","sourceId":"express-skin-burst-up-care","category":"face","categoryId":"face","mode":"service","runtimeId":"src-express-skin-burst-up-care"},{"id":"chakra-balance","sourceId":"chakra-balance","category":"massage","categoryId":"massage","mode":"service","runtimeId":"src-chakra-balance"},{"id":"body-wrap","sourceId":"body-wrap","category":"body","categoryId":"body","mode":"service","runtimeId":"src-body-wrap"},{"id":"aroma-derm-body-wrap","sourceId":"aroma-derm-body-wrap","category":"body","categoryId":"body","mode":"service","runtimeId":"src-aroma-derm-body-wrap"},{"id":"aroma-derm-bandage","sourceId":"aroma-derm-bandage","category":"body","categoryId":"body","mode":"service","runtimeId":"src-aroma-derm-bandage"},{"id":"aroma-oil-body-care","sourceId":"aroma-oil-body-care","category":"body","categoryId":"body","mode":"information","runtimeId":"src-aroma-oil-body-care"},{"id":"rose-oil-body-care","sourceId":"rose-oil-body-care","category":"body","categoryId":"body","mode":"information","runtimeId":"src-rose-oil-body-care"},{"id":"jet-shower","sourceId":"jet-shower","category":"body","categoryId":"body","mode":"service","runtimeId":"src-jet-shower"},{"id":"starvac-vacuum","sourceId":"starvac-vacuum","category":"body","categoryId":"body","mode":"service","runtimeId":"src-starvac-vacuum"},{"id":"pressotherapy","sourceId":"pressotherapy","category":"body","categoryId":"body","mode":"service","runtimeId":"src-pressotherapy"},{"id":"myostimulation","sourceId":"myostimulation","category":"body","categoryId":"body","mode":"service","runtimeId":"src-myostimulation"},{"id":"vibromassage","sourceId":"vibromassage","category":"body","categoryId":"body","mode":"service","runtimeId":"src-vibromassage"},{"id":"laser-epilation","sourceId":"laser-epilation","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-laser-epilation"},{"id":"laser-skin-care","sourceId":"laser-skin-care","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-laser-skin-care"},{"id":"laser-acne-care","sourceId":"laser-acne-care","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-laser-acne-care"},{"id":"laser-pigmentation","sourceId":"laser-pigmentation","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-laser-pigmentation"},{"id":"laser-couperose","sourceId":"laser-couperose","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-laser-couperose"},{"id":"facial-cleansing","sourceId":"facial-cleansing","category":"face","categoryId":"face","mode":"service","runtimeId":"src-facial-cleansing"},{"id":"complete-facial","sourceId":"complete-facial","category":"face","categoryId":"face","mode":"service","runtimeId":"src-complete-facial"},{"id":"chemical-peel","sourceId":"chemical-peel","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-chemical-peel"},{"id":"face-mesotherapy","sourceId":"face-mesotherapy","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-face-mesotherapy"},{"id":"hair-mesotherapy","sourceId":"hair-mesotherapy","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-hair-mesotherapy"},{"id":"3d-face-care","sourceId":"3d-face-care","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-3d-face-care"},{"id":"biorevitalisation","sourceId":"biorevitalisation","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-biorevitalisation"},{"id":"prp-face","sourceId":"prp-face","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-prp-face"},{"id":"prp-hair","sourceId":"prp-hair","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-prp-hair"},{"id":"plasma-face","sourceId":"plasma-face","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-plasma-face"},{"id":"plasma-hair","sourceId":"plasma-hair","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-plasma-hair"},{"id":"meso-botox","sourceId":"meso-botox","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-meso-botox"},{"id":"botox","sourceId":"botox","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-botox"},{"id":"filler","sourceId":"filler","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-filler"},{"id":"permanent-eyes","sourceId":"permanent-eyes","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-permanent-eyes"},{"id":"permanent-brows","sourceId":"permanent-brows","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-permanent-brows"},{"id":"permanent-lips","sourceId":"permanent-lips","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-permanent-lips"},{"id":"tattoo","sourceId":"tattoo","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-tattoo"},{"id":"body-mesotherapy","sourceId":"body-mesotherapy","category":"cosmetology","categoryId":"cosmetology","mode":"consultation","runtimeId":"src-body-mesotherapy"},{"id":"classic-manicure","sourceId":"classic-manicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-classic-manicure"},{"id":"classic-pedicure","sourceId":"classic-pedicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-classic-pedicure"},{"id":"spa-manicure","sourceId":"spa-manicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-spa-manicure"},{"id":"spa-pedicure","sourceId":"spa-pedicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-spa-pedicure"},{"id":"brazil-manicure","sourceId":"brazil-manicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-brazil-manicure"},{"id":"brazil-pedicure","sourceId":"brazil-pedicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-brazil-pedicure"},{"id":"shellac-polish","sourceId":"shellac-polish","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-polish"},{"id":"shellac-classic-manicure","sourceId":"shellac-classic-manicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-classic-manicure"},{"id":"shellac-classic-pedicure","sourceId":"shellac-classic-pedicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-classic-pedicure"},{"id":"shellac-spa-manicure","sourceId":"shellac-spa-manicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-spa-manicure"},{"id":"shellac-spa-pedicure","sourceId":"shellac-spa-pedicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-spa-pedicure"},{"id":"shellac-brazil-manicure","sourceId":"shellac-brazil-manicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-brazil-manicure"},{"id":"shellac-brazil-pedicure","sourceId":"shellac-brazil-pedicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-brazil-pedicure"},{"id":"shellac-french","sourceId":"shellac-french","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-french"},{"id":"shellac-magnetic","sourceId":"shellac-magnetic","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-magnetic"},{"id":"shellac-removal","sourceId":"shellac-removal","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-shellac-removal"},{"id":"minx-manicure","sourceId":"minx-manicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-minx-manicure"},{"id":"minx-pedicure","sourceId":"minx-pedicure","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-minx-pedicure"},{"id":"minx-polish","sourceId":"minx-polish","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-minx-polish"},{"id":"minx-single-nail","sourceId":"minx-single-nail","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-minx-single-nail"},{"id":"nail-design","sourceId":"nail-design","category":"nails","categoryId":"nails","mode":"information","runtimeId":"src-nail-design"},{"id":"standard-nail-polish","sourceId":"standard-nail-polish","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-standard-nail-polish"},{"id":"gel-extensions","sourceId":"gel-extensions","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-gel-extensions"},{"id":"gel-removal-care","sourceId":"gel-removal-care","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-gel-removal-care"},{"id":"gel-correction","sourceId":"gel-correction","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-gel-correction"},{"id":"gel-single-correction","sourceId":"gel-single-correction","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-gel-single-correction"},{"id":"artificial-nails","sourceId":"artificial-nails","category":"nails","categoryId":"nails","mode":"service","runtimeId":"src-artificial-nails"},{"id":"foot-mask","sourceId":"foot-mask","category":"nails","categoryId":"nails","mode":"supplement","runtimeId":"src-foot-mask"},{"id":"hand-mask","sourceId":"hand-mask","category":"nails","categoryId":"nails","mode":"information","runtimeId":"src-hand-mask"},{"id":"hot-wax","sourceId":"hot-wax","category":"epilation","categoryId":"epilation","mode":"information","runtimeId":"src-hot-wax"},{"id":"brazilian-wax","sourceId":"brazilian-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-brazilian-wax"},{"id":"bikini-wax","sourceId":"bikini-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-bikini-wax"},{"id":"underarm-wax","sourceId":"underarm-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-underarm-wax"},{"id":"half-leg-wax","sourceId":"half-leg-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-half-leg-wax"},{"id":"full-leg-wax","sourceId":"full-leg-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-full-leg-wax"},{"id":"arm-wax","sourceId":"arm-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-arm-wax"},{"id":"face-wax","sourceId":"face-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-face-wax"},{"id":"abdomen-wax","sourceId":"abdomen-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-abdomen-wax"},{"id":"full-back-wax","sourceId":"full-back-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-full-back-wax"},{"id":"full-abdomen-wax","sourceId":"full-abdomen-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-full-abdomen-wax"},{"id":"full-body-wax","sourceId":"full-body-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-full-body-wax"},{"id":"lip-chin-wax","sourceId":"lip-chin-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-lip-chin-wax"},{"id":"full-leg-bikini-wax","sourceId":"full-leg-bikini-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-full-leg-bikini-wax"},{"id":"full-leg-brazilian-wax","sourceId":"full-leg-brazilian-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-full-leg-brazilian-wax"},{"id":"brow-wax","sourceId":"brow-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-brow-wax"},{"id":"chest-wax","sourceId":"chest-wax","category":"epilation","categoryId":"epilation","mode":"service","runtimeId":"src-chest-wax"},{"id":"false-lashes","sourceId":"false-lashes","category":"brows-lashes","categoryId":"brows-lashes","mode":"service","runtimeId":"src-false-lashes"},{"id":"lash-application","sourceId":"lash-application","category":"brows-lashes","categoryId":"brows-lashes","mode":"information","runtimeId":"src-lash-application"},{"id":"brow-shaping","sourceId":"brow-shaping","category":"brows-lashes","categoryId":"brows-lashes","mode":"service","runtimeId":"src-brow-shaping"},{"id":"day-evening-makeup","sourceId":"day-evening-makeup","category":"makeup","categoryId":"makeup","mode":"service","runtimeId":"src-day-evening-makeup"},{"id":"bridal-makeup","sourceId":"bridal-makeup","category":"makeup","categoryId":"makeup","mode":"service","runtimeId":"src-bridal-makeup"},{"id":"hair-care","sourceId":"hair-care","category":"hair","categoryId":"hair","mode":"information","runtimeId":"src-hair-care"},{"id":"aerobics","sourceId":"aerobics","category":"fitness","categoryId":"fitness","mode":"class","runtimeId":"src-aerobics"},{"id":"aqua-aerobics","sourceId":"aqua-aerobics","category":"fitness","categoryId":"fitness","mode":"class","runtimeId":"src-aqua-aerobics"},{"id":"pilates","sourceId":"pilates","category":"fitness","categoryId":"fitness","mode":"class","runtimeId":"src-pilates"},{"id":"zumba","sourceId":"zumba","category":"fitness","categoryId":"fitness","mode":"class","runtimeId":"src-zumba"},{"id":"oriental-dance","sourceId":"oriental-dance","category":"fitness","categoryId":"fitness","mode":"class","runtimeId":"src-oriental-dance"},{"id":"total-body-workout","sourceId":"total-body-workout","category":"fitness","categoryId":"fitness","mode":"class","runtimeId":"src-total-body-workout"}],"informationItems":[{"id":"src-aroma-oil-body-care","sourceId":"aroma-oil-body-care","name":"Aromatik yağlarla vücut bakımı","names":{"tr":"Aromatik yağlarla vücut bakımı","az":"Ətirli yağlarla bədən qulluğu","ru":"Уход за телом с ароматическими маслами"},"description":"Aromatik yağlarla vücut bakımı.","descriptions":{"tr":"Aromatik yağlarla vücut bakımı.","az":"Ətirli yağlarla bədən qulluğu.","ru":"Уход за телом с ароматическими маслами."},"sourceNames":{"tr":"Aromatik yağlarla vücut bakımı","az":"Ətirli yağlarla bədən qulluğu","ru":"Уход за телом с ароматическими маслами"},"sourceDescriptions":{"tr":"Aromatik yağlarla vücut bakımı. Süreyi ve uygulama ayrıntılarını netleştirin.","az":"Ətirli yağlarla bədən qulluğu. Müddət və tətbiq detallarını dəqiqləşdirin.","en":"Body care with aromatic oils. Confirm the duration and application details."},"categoryId":"body","active":true,"mode":"information","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookable":false,"informationOnly":true},{"id":"src-rose-oil-body-care","sourceId":"rose-oil-body-care","name":"Gül yağıyla vücut bakımı","names":{"tr":"Gül yağıyla vücut bakımı","az":"Qızılgül yağı ilə bədən qulluğu","ru":"Уход за телом с розовым маслом"},"description":"Gül yağıyla vücut bakımı.","descriptions":{"tr":"Gül yağıyla vücut bakımı.","az":"Qızılgül yağı ilə bədən qulluğu.","ru":"Уход за телом с розовым маслом."},"sourceNames":{"tr":"Gül yağıyla vücut bakımı","az":"Qızılgül yağı ilə bədən qulluğu","ru":"Уход за телом с розовым маслом"},"sourceDescriptions":{"tr":"Gül yağıyla vücut bakımı.","az":"Qızılgül yağı ilə bədən qulluğu.","en":"Body care using rose oil."},"categoryId":"body","active":true,"mode":"information","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookable":false,"informationOnly":true},{"id":"src-nail-design","sourceId":"nail-design","name":"Tırnak tasarımı","names":{"tr":"Tırnak tasarımı","az":"Dırnaq dizaynı","ru":"Дизайн ногтей"},"description":"Tırnak tasarımı uygulamaları.","descriptions":{"tr":"Tırnak tasarımı uygulamaları.","az":"Dırnaq dizaynı tətbiqləri.","ru":"Дизайн ногтей."},"sourceNames":{"tr":"Tırnak tasarımı","az":"Dırnaq dizaynı","ru":"Дизайн ногтей"},"sourceDescriptions":{"tr":"Tırnak tasarımı seçeneklerini salon ekibiyle konuşun.","az":"Dırnaq dizaynı seçimlərini salon komandası ilə müzakirə edin.","en":"Explore nail design options with the salon team."},"categoryId":"nails","active":true,"mode":"information","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookable":false,"informationOnly":true},{"id":"src-hand-mask","sourceId":"hand-mask","name":"El maskesi","names":{"tr":"El maskesi","az":"Əl üçün maska","ru":"Маска для рук"},"description":"Eller için maskeyle bakım.","descriptions":{"tr":"Eller için maskeyle bakım.","az":"Əllər üçün maska ilə qulluq.","ru":"Маска для рук."},"sourceNames":{"tr":"El maskesi","az":"Əl üçün maska","ru":"Маска для рук"},"sourceDescriptions":{"tr":"Eller için maskeyle bakım.","az":"Əllər üçün maska ilə qulluq.","en":"Hand care with a mask."},"categoryId":"nails","active":true,"mode":"information","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=en&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookable":false,"informationOnly":true},{"id":"src-hot-wax","sourceId":"hot-wax","name":"Sıcak ağda","names":{"tr":"Sıcak ağda","az":"İsti mumla epilyasiya","ru":"Горячий воск"},"description":"Sıcak ağda ile epilasyon.","descriptions":{"tr":"Sıcak ağda ile epilasyon.","az":"İsti mumla epilyasiya.","ru":"Эпиляция горячим воском."},"sourceNames":{"tr":"Sıcak ağda","az":"İsti mumla epilyasiya","ru":"Горячий воск"},"sourceDescriptions":{"tr":"Epilasyon alanını ve randevu süresini salonla netleştirin.","az":"Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.","en":"Confirm the hair removal area and appointment duration with the salon."},"categoryId":"epilation","active":true,"mode":"information","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookable":false,"informationOnly":true},{"id":"src-lash-application","sourceId":"lash-application","name":"Kirpik uygulaması (yöntem teyit bekliyor)","names":{"tr":"Kirpik uygulaması (yöntem teyit bekliyor)","az":"Kirpik əkimi (üsul dəqiqləşdirilir)","ru":"Процедура для ресниц (метод уточняется)"},"description":"Kirpiklere yönelik uygulamalar.","descriptions":{"tr":"Kirpiklere yönelik uygulamalar.","az":"Kirpiklər üçün tətbiqlər.","ru":"Процедуры для ресниц."},"sourceNames":{"tr":"Kirpik uygulaması (yöntem teyit bekliyor)","az":"Kirpik əkimi (üsul dəqiqləşdirilir)","ru":"Процедура для ресниц (метод уточняется)"},"sourceDescriptions":{"tr":"Kirpik uygulamasının kesin yöntemini ve uygunluğunu uzmanla netleştirin.","az":"Kirpik tətbiqinin konkret üsulu və uyğunluğunu mütəxəssislə dəqiqləşdirin.","en":"Confirm the exact eyelash application method and suitability with the specialist."},"categoryId":"brows-lashes","active":true,"mode":"information","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookable":false,"informationOnly":true},{"id":"src-hair-care","sourceId":"hair-care","name":"Saç bakımı","names":{"tr":"Saç bakımı","az":"Saça qulluq","ru":"Уход за волосами"},"description":"Saç bakım hizmetleri.","descriptions":{"tr":"Saç bakım hizmetleri.","az":"Saça qulluq xidmətləri.","ru":"Уход за волосами."},"sourceNames":{"tr":"Saç bakımı","az":"Saça qulluq","ru":"Уход за волосами"},"sourceDescriptions":{"tr":"Saç bakım seçeneklerini salon ekibiyle konuşun. Hizmet ve randevu ayrıntılarını netleştirin.","az":"Saçınıza qulluq seçimlərini salon komandası ilə müzakirə edin. Xidmət və qəbul detallarını dəqiqləşdirin.","en":"Explore hair care options with the salon team and confirm the treatment and appointment details."},"categoryId":"hair","active":true,"mode":"information","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=04","name":"Sultan Saba — Membership & Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","bookable":false,"informationOnly":true}],"supplements":[{"id":"src-decollete-care","sourceId":"decollete-care","name":"Dekolte bakımı","names":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"description":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","descriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","ru":"Уход за декольте."},"sourceNames":{"tr":"Dekolte bakımı","az":"Dekolte zonasına qulluq","ru":"Уход за декольте"},"sourceDescriptions":{"tr":"Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.","az":"Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.","en":"Neck and chest area care that can be added to a facial."},"categoryId":"face","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":30,"priceMinor":2000,"durationStatus":"source","allowedServiceIds":["src-classic-aroma-derm-facial","src-prestige-facial","src-amethyst-facial","src-eye-area-care","src-express-aroma-derm-facial","src-aroma-derm-ampoule-facial","src-aroma-derm-extra-facial","src-lifting-vitamin-mask","src-modelage-mask","src-face-mask","src-face-massage","src-express-skin-burst-up-care","src-facial-cleansing","src-complete-facial"]},{"id":"src-foot-mask","sourceId":"foot-mask","name":"Ayak için ek maske","names":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"description":"Ayak bakımına ek maske uygulaması.","descriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","ru":"Дополнительная маска для стоп."},"sourceNames":{"tr":"Ayak için ek maske","az":"Ayaq üçün əlavə maska","ru":"Дополнительная маска для стоп"},"sourceDescriptions":{"tr":"Ayak bakımına ek maske uygulaması.","az":"Ayaq qulluğuna əlavə maska tətbiqi.","en":"A mask to add to your foot care."},"categoryId":"nails","active":true,"mode":"supplement","source":{"kind":"historical-website","url":"https://sultansaba.az/sultansabais/index.php?lang=az&page=41","name":"Sultan Saba — Individual Offers","accessedAt":"2026-11-03","currentTermsConfirmed":false,"scope":"source name and procedure; listed durations when present"},"sourceStatus":"historical-unconfirmed","priceStatus":"demo","duration":15,"priceMinor":1500,"durationStatus":"demo","allowedServiceIds":["src-brazil-pedicure","src-classic-pedicure","src-minx-pedicure","src-shellac-brazil-pedicure","src-shellac-classic-pedicure","src-shellac-spa-pedicure","src-spa-pedicure"]}],"classOccupancy":{"src-aerobics-1":0,"src-aerobics-2":4,"src-aqua-aerobics-1":0,"src-aqua-aerobics-2":4,"src-pilates-1":0,"src-pilates-2":4,"src-zumba-1":0,"src-zumba-2":4,"src-oriental-dance-1":0,"src-oriental-dance-2":4,"src-total-body-workout-1":0,"src-total-body-workout-2":4}};
for(const key of ['services','programs','classes','packageOffers','membershipOffers','facilities'])catalogue[key]=(catalogue[key]||[]).concat(additions[key]);
for(const key of ['officialMapping','informationItems','supplements','classOccupancy'])catalogue[key]=additions[key];
catalogue.version='demo-simplified-2026-11-04-r2';
catalogue.serviceCategories.push({id:'cosmetology',name:'Kozmetoloji',names:{tr:'Kozmetoloji',az:'Kosmetologiya',ru:'Косметология'},active:true});
catalogue.rules=Object.assign({},catalogue.rules,{simplifiedCatalogue:true,cafeOrderPilot:false,cafeRewardPilot:false,allowSourceMenuDemoOrders:false,serviceConsultationPolicy:'disabled'});
catalogue.evidence=Object.assign({},catalogue.evidence,{asOf:'2026-11-04',sourceSnapshot:'source-catalogue/',sourceInventoryCount:126,currentLiveAvailabilityVerified:false,sourceCountedServiceCount:111,extraConsultationCount:1,notice:{tr:'Hizmet adları kaynak listeden; fiyatlar, tarihler, uzman ve kapasite demo koşullarıdır.',az:'Xidmət adları mənbə siyahısındandır; qiymətlər, tarixlər, mütəxəssis və tutum demo şərtləridir.',ru:'Названия из исходного каталога; цены, даты, специалисты и вместимость — условия демо.'}});

// Four-language content only. Source snapshots and historical transaction terms remain untouched.
const contentTranslations={
  "services": {
    "src-traditional-turkish-bath": {
      "names": {
        "tr": "Geleneksel Türk hamamı",
        "az": "Ənənəvi türk hamamı",
        "ru": "Традиционный турецкий хаммам",
        "en": "Traditional Turkish bath"
      },
      "descriptions": {
        "tr": "Kese ve köpük masajı.",
        "az": "Kisələnmə və köpük masajı.",
        "ru": "Отшелушивание тела рукавицей кесе и пенный массаж.",
        "en": "Body exfoliation with a kese glove and foam massage."
      }
    },
    "src-aromatic-foam-bath": {
      "names": {
        "tr": "Aromatik köpük hamamı",
        "az": "Ətirli köpük hamamı",
        "ru": "Ароматный пенный хаммам",
        "en": "Aromatic foam bath"
      },
      "descriptions": {
        "tr": "Hamamın mermer göbek taşında aromatik köpük uygulaması.",
        "az": "Hamamın mərmər masasında ətirli köpüklə qulluq.",
        "ru": "Ароматная пена на мраморном столе хаммама.",
        "en": "Aromatic foam applied on the hamam marble table."
      }
    },
    "src-kese-bath": {
      "names": {
        "tr": "Kese",
        "az": "Kisələnmə",
        "ru": "Кесе",
        "en": "Kese exfoliation"
      },
      "descriptions": {
        "tr": "Vücuda kese uygulanması.",
        "az": "Xüsusi kisə ilə bədənin təmizlənməsi.",
        "ru": "Отшелушивание тела рукавицей кесе.",
        "en": "Body exfoliation using a kese glove."
      }
    },
    "src-sultan-saba-ritual": {
      "names": {
        "tr": "Sultan Saba ritüeli",
        "az": "Sultan Saba ritualı",
        "ru": "Ритуал Sultan Saba",
        "en": "Sultan Saba ritual"
      },
      "descriptions": {
        "tr": "Siyah sabun, kese, köpük masajı ve Lokum peelingi.",
        "az": "Qara sabun, kisələnmə, köpük masajı və Lokum skrabı.",
        "ru": "Чёрное мыло, кесе, пенный массаж и скраб Lokum.",
        "en": "Black soap, kese exfoliation, foam massage and Lokum scrub."
      }
    },
    "src-sultan-saba-peeling": {
      "names": {
        "tr": "Sultan Saba peelingi",
        "az": "Sultan Saba pilinqi",
        "ru": "Пилинг Sultan Saba",
        "en": "Sultan Saba peeling"
      },
      "descriptions": {
        "tr": "Sultan Saba Lokum, yağ ve tuzla vücut peelingi.",
        "az": "Sultan Saba Lokum, yağ və duz ilə bədən pilinqi.",
        "ru": "Пилинг тела с Lokum Sultan Saba, маслом и солью.",
        "en": "Body exfoliation with Sultan Saba Lokum, oil and salt."
      }
    },
    "src-chi-yang-massage": {
      "names": {
        "tr": "Chi-Yang (İsveç) masajı",
        "az": "Çin-Yanq (İsveç) masajı",
        "ru": "Массаж Чи-Ян (шведский)",
        "en": "Chi-Yang (Swedish) massage"
      },
      "descriptions": {
        "tr": "Tercihlerinize göre uyarlanan bireysel masaj.",
        "az": "İstəyinizə uyğunlaşdırılan fərdi masaj.",
        "ru": "Индивидуальный массаж с учётом ваших предпочтений.",
        "en": "An individual massage adapted to your preferences."
      }
    },
    "src-hot-oil-massage": {
      "names": {
        "tr": "Sıcak yağlı SPA masajı",
        "az": "İsti yağlı SPA masajı",
        "ru": "SPA-массаж с тёплым маслом",
        "en": "Hot oil spa massage"
      },
      "descriptions": {
        "tr": "Sıcak yağla vücut masajı.",
        "az": "İsti yağla bədən masajı.",
        "ru": "Массаж тела с тёплым маслом.",
        "en": "Body massage using warm oil."
      }
    },
    "src-chakra-stone-massage": {
      "names": {
        "tr": "Çakra taşlarıyla masaj",
        "az": "Çakra daşları ilə masaj",
        "ru": "Массаж камнями чакр",
        "en": "Chakra stone massage"
      },
      "descriptions": {
        "tr": "Isıtılmış volkanik taşlarla vücut masajı.",
        "az": "İsidilmiş vulkanik daşlarla bədən masajı.",
        "ru": "Массаж тела нагретыми вулканическими камнями.",
        "en": "Body massage using heated volcanic stones."
      }
    },
    "src-head-massage": {
      "names": {
        "tr": "Baş masajı",
        "az": "Baş masajı",
        "ru": "Массаж головы",
        "en": "Head massage"
      },
      "descriptions": {
        "tr": "Baş, sırt ve omuzlara hafif ve orta basınçlı masaj.",
        "az": "Baş, kürək və çiyinlərə yüngül və orta təzyiqli masaj.",
        "ru": "Массаж головы, спины и плеч с лёгким или средним нажимом.",
        "en": "Light to medium pressure massage for your head, back and shoulders."
      }
    },
    "src-indian-head-hair-mask": {
      "names": {
        "tr": "Hint baş masajı ve saç maskesi",
        "az": "Hind baş masajı və saç maskası",
        "ru": "Индийский массаж головы и маска для волос",
        "en": "Indian head massage and hair mask"
      },
      "descriptions": {
        "tr": "Sırt, baş ve omuz masajının ardından saç maskesi.",
        "az": "Kürək, baş və çiyin masajından sonra saç maskası.",
        "ru": "Массаж спины, головы и плеч, затем маска для волос.",
        "en": "Back, head and shoulder massage followed by a hair mask."
      }
    },
    "src-shirodhara-massage": {
      "names": {
        "tr": "Shirodhara masajı",
        "az": "Şirodhara masajı",
        "ru": "Массаж Широдхара",
        "en": "Shirodhara massage"
      },
      "descriptions": {
        "tr": "Shirodhara masajı. Uygulama ayrıntılarını uzmanla netleştirin.",
        "az": "Şirodhara masajı. Tətbiq detallarını mütəxəssislə dəqiqləşdirin.",
        "ru": "Массаж Широдхара. Уточните детали сеанса у специалиста.",
        "en": "Shirodhara massage. Confirm the session details with the specialist."
      }
    },
    "src-lomi-lomi-massage": {
      "names": {
        "tr": "Lomi Lomi masajı",
        "az": "Lomi Lomi masajı",
        "ru": "Массаж Ломи-Ломи",
        "en": "Lomi Lomi massage"
      },
      "descriptions": {
        "tr": "Hawaii tarzı hareketler ve dokunuşlarla vücut masajı.",
        "az": "Havay üslubunda hərəkətlər və toxunuşlarla bədən masajı.",
        "ru": "Гавайский массаж с плавными движениями и растяжкой.",
        "en": "Hawaiian style massage using flowing touch and stretching."
      }
    },
    "src-sultan-saba-candle-massage": {
      "names": {
        "tr": "Sultan Saba mum masajı",
        "az": "Sultan Saba şam masajı",
        "ru": "Свечной массаж Sultan Saba",
        "en": "Sultan Saba candle massage"
      },
      "descriptions": {
        "tr": "Isıtılmış mum yağıyla masaj. Vücut sargısının dahil olup olmadığını teyit edin.",
        "az": "İsidilmiş şam yağı ilə masaj. Bədən bükməsinin daxil olub-olmadığını dəqiqləşdirin.",
        "ru": "Массаж тёплым свечным маслом. Уточните, входит ли обёртывание.",
        "en": "Massage with warmed candle oil. Ask whether a body wrap is included."
      }
    },
    "src-herbal-massage": {
      "names": {
        "tr": "Bitki keseleriyle masaj",
        "az": "Bitki kisələri ilə masaj",
        "ru": "Массаж травяными мешочками",
        "en": "Herbal compress massage"
      },
      "descriptions": {
        "tr": "Bitkisel keselerle vücut masajı.",
        "az": "Bitki tərkibli xüsusi vasitələrlə bədən masajı.",
        "ru": "Массаж тела травяными компрессами.",
        "en": "Body massage using herbal compress tools."
      }
    },
    "src-local-massage": {
      "names": {
        "tr": "Bölgesel masaj",
        "az": "Lokal masaj",
        "ru": "Локальный массаж",
        "en": "Local massage"
      },
      "descriptions": {
        "tr": "Seçilen vücut bölgesine yönelik masaj.",
        "az": "Seçilmiş bədən nahiyəsinə yönələn masaj.",
        "ru": "Массаж выбранной области тела.",
        "en": "Massage focused on a chosen area."
      }
    },
    "src-foot-reflexology": {
      "names": {
        "tr": "Ayak refleksolojisi",
        "az": "Ayaq refleksologiyası",
        "ru": "Рефлексология стоп",
        "en": "Foot reflexology"
      },
      "descriptions": {
        "tr": "Ayaktaki noktalara basınç uygulaması ve ayak masajı.",
        "az": "Ayaqdakı nöqtələrə təzyiq və ayaq masajı.",
        "ru": "Воздействие на точки стоп с последующим массажем стоп.",
        "en": "Pressure applied to points on the feet, followed by foot massage."
      }
    },
    "src-foot-massage": {
      "names": {
        "tr": "Ayak masajı",
        "az": "Ayaq masajı",
        "ru": "Массаж стоп",
        "en": "Foot massage"
      },
      "descriptions": {
        "tr": "El ve parmak basıncıyla ayak masajı.",
        "az": "Əl və barmaq təzyiqi ilə ayaq masajı.",
        "ru": "Массаж стоп руками и пальцами.",
        "en": "Foot massage using hand and finger pressure."
      }
    },
    "src-foot-massage-sultan-mask": {
      "names": {
        "tr": "Ayak masajı ve Sultan maskesi",
        "az": "Ayaq masajı və Sultan maskası",
        "ru": "Массаж стоп и маска Sultan",
        "en": "Foot massage and Sultan mask"
      },
      "descriptions": {
        "tr": "Ayak masajı ve bakım, son aşamada serinletici jel uygulaması.",
        "az": "Ayaq masajı və qulluq, sonda sərinləşdirici gel tətbiqi.",
        "ru": "Массаж и уход за стопами с охлаждающим гелем в завершение.",
        "en": "Foot massage and care, finished with a cooling gel."
      }
    },
    "src-anti-cellulite-massage": {
      "names": {
        "tr": "Selülit masajı",
        "az": "Anti-sellülit masajı",
        "ru": "Массаж «Антицеллюлитный»",
        "en": "Anti-cellulite massage"
      },
      "descriptions": {
        "tr": "Selülit masajı olarak sunulan vücut uygulaması.",
        "az": "Anti-sellülit adı ilə təqdim olunan bədən masajı.",
        "ru": "Массаж тела, указанный в каталоге как антицеллюлитный.",
        "en": "A body massage offered as an anti-cellulite treatment."
      }
    },
    "src-styx-oil-gel-massage": {
      "names": {
        "tr": "STYX yağ veya jel masajı",
        "az": "STYX yağı və ya geli ilə masaj",
        "ru": "Массаж с маслом или гелем STYX",
        "en": "STYX oil or gel massage"
      },
      "descriptions": {
        "tr": "Aroma Derm vücut bakımı öncesinde STYX yağ veya jel masajı.",
        "az": "Aroma Derm bədən qulluğundan əvvəl STYX yağı və ya geli ilə masaj.",
        "ru": "Массаж маслом или гелем STYX перед уходом Aroma Derm.",
        "en": "Massage with STYX oil or gel before Aroma Derm body care."
      }
    },
    "src-classic-aroma-derm-facial": {
      "names": {
        "tr": "Aroma Derm klasik yüz bakımı",
        "az": "Aroma Derm klassik üz qulluğu",
        "ru": "Классический уход за лицом Aroma Derm",
        "en": "Aroma Derm classic facial"
      },
      "descriptions": {
        "tr": "Cilt tipine göre temizleme, maske ve kremle masaj.",
        "az": "Dəri tipinə uyğun təmizləmə, maska və krem ilə masaj.",
        "ru": "Очищение, маска и массаж с кремом по типу кожи.",
        "en": "Cleansing, mask and cream massage selected for the skin type."
      }
    },
    "src-prestige-facial": {
      "names": {
        "tr": "Prestij yüz bakımı",
        "az": "Prestij üz qulluğu",
        "ru": "Уход за лицом «Престиж»",
        "en": "Prestige facial"
      },
      "descriptions": {
        "tr": "Prestij yüz bakımı. Uygulama ayrıntılarını uzmanla netleştirin.",
        "az": "Prestij üz qulluğu. Tətbiq detallarını mütəxəssislə dəqiqləşdirin.",
        "ru": "Уход Prestige. Уточните этапы процедуры у специалиста.",
        "en": "Prestige facial. Confirm the session details with the specialist."
      }
    },
    "src-amethyst-facial": {
      "names": {
        "tr": "Ametist taşlarıyla yüz bakımı",
        "az": "Ametist daşları ilə üz qulluğu",
        "ru": "Уход за лицом с аметистом",
        "en": "Amethyst stone facial"
      },
      "descriptions": {
        "tr": "Temizleme, ampul, iki maske ve ametist taşlarıyla yüz masajı.",
        "az": "Təmizləmə, ampula, iki maska və ametist daşları ilə üz masajı.",
        "ru": "Очищение, ампула, две маски и массаж лица аметистовыми камнями.",
        "en": "Cleansing, ampoule, two masks and an amethyst stone facial massage."
      }
    },
    "src-eye-area-care": {
      "names": {
        "tr": "Göz çevresi bakımı",
        "az": "Gözətrafı dəriyə qulluq",
        "ru": "Уход за областью вокруг глаз",
        "en": "Eye area care"
      },
      "descriptions": {
        "tr": "Göz çevresine yönelik bakım ve masaj.",
        "az": "Gözətrafı dəriyə qulluq və masaj.",
        "ru": "Уход и массаж области вокруг глаз.",
        "en": "Care and massage for the eye area."
      }
    },
    "src-express-aroma-derm-facial": {
      "names": {
        "tr": "Aroma Derm ekspres yüz bakımı",
        "az": "Aroma Derm ekspress üz qulluğu",
        "ru": "Экспресс-уход за лицом Aroma Derm",
        "en": "Aroma Derm express facial"
      },
      "descriptions": {
        "tr": "Aroma Derm ürünleriyle kısa yüz bakımı.",
        "az": "Aroma Derm məhsulları ilə qısa üz qulluğu.",
        "ru": "Короткий уход за лицом с продуктами Aroma Derm.",
        "en": "A shorter facial using Aroma Derm products."
      }
    },
    "src-aroma-derm-ampoule-facial": {
      "names": {
        "tr": "Aroma Derm ampullü yüz bakımı",
        "az": "Aroma Derm ampulaları ilə üz qulluğu",
        "ru": "Уход за лицом с ампулами Aroma Derm",
        "en": "Aroma Derm ampoule facial"
      },
      "descriptions": {
        "tr": "Aroma Derm ampulüyle yüz bakımı.",
        "az": "Aroma Derm ampulası ilə üz qulluğu.",
        "ru": "Уход за лицом с ампулой Aroma Derm.",
        "en": "Facial care with an Aroma Derm ampoule."
      }
    },
    "src-aroma-derm-extra-facial": {
      "names": {
        "tr": "Aroma Derm Extra yüz bakımı",
        "az": "Aroma Derm Extra üz qulluğu",
        "ru": "Уход за лицом Aroma Derm Extra",
        "en": "Aroma Derm Extra facial"
      },
      "descriptions": {
        "tr": "Ampul ve konsantreyle yüz bakımı.",
        "az": "Ampula və konsentrat ilə üz qulluğu.",
        "ru": "Уход за лицом с ампулой и концентратом.",
        "en": "Facial care with an ampoule and concentrate."
      }
    },
    "src-lifting-vitamin-mask": {
      "names": {
        "tr": "Lifting vitamin maskesi",
        "az": "Liftinq vitamin maskası",
        "ru": "Витаминная лифтинг-маска",
        "en": "Lifting vitamin mask"
      },
      "descriptions": {
        "tr": "Vitamin maskesi ve elle masaj. Süre 50 veya 60 dakika; mekânla teyit edin.",
        "az": "Vitamin maskası və əl masajı. Müddət 50 və ya 60 dəqiqədir; məkanla dəqiqləşdirin.",
        "ru": "Витаминная маска и ручной массаж. В источнике указано 50 или 60 минут; уточните в салоне.",
        "en": "Vitamin mask with manual massage. The duration is 50 or 60 minutes; confirm with the venue."
      }
    },
    "src-modelage-mask": {
      "names": {
        "tr": "Modelage maskesi",
        "az": "Modelage maskası",
        "ru": "Маска Modelage",
        "en": "Modelage mask"
      },
      "descriptions": {
        "tr": "Modelage yüz maskesi. Cildinize uygunluğunu uzmanla konuşun.",
        "az": "Modelage üz maskası. Dərinizə uyğunluğu barədə mütəxəssislə danışın.",
        "ru": "Маска Modelage для лица. Обсудите соответствие вашему типу кожи со специалистом.",
        "en": "A Modelage face mask. Discuss suitability for your skin with the specialist."
      }
    },
    "src-face-mask": {
      "names": {
        "tr": "Yüz maskesi",
        "az": "Üz maskası",
        "ru": "Маска для лица",
        "en": "Face mask"
      },
      "descriptions": {
        "tr": "Cilde göre seçilen yüz maskesi.",
        "az": "Dəriyə uyğun üz maskası.",
        "ru": "Маска, подобранная для кожи лица.",
        "en": "Face mask selected for the skin."
      }
    },
    "src-face-massage": {
      "names": {
        "tr": "Yüz masajı",
        "az": "Üz masajı",
        "ru": "Массаж лица",
        "en": "Face massage"
      },
      "descriptions": {
        "tr": "Temizleme, tonik, peeling ve yüz masajı.",
        "az": "Təmizləmə, tonik, skrab və üz masajı.",
        "ru": "Очищение, тонизирование, скраб и массаж лица.",
        "en": "Cleansing, toning, scrub and facial massage."
      }
    },
    "src-express-skin-burst-up-care": {
      "names": {
        "tr": "Ekspres cilt bakımı",
        "az": "Ekspress dəri qulluğu",
        "ru": "Экспресс-уход за кожей",
        "en": "Express skin care"
      },
      "descriptions": {
        "tr": "Ekspres cilt bakımı. Uygulama ayrıntılarını uzmanla netleştirin.",
        "az": "Ekspress dəri qulluğu. Tətbiq detallarını mütəxəssislə dəqiqləşdirin.",
        "ru": "Короткий уход за кожей. Уточните этапы у специалиста.",
        "en": "Express skin care. Confirm the session details with the specialist."
      }
    },
    "src-chakra-balance": {
      "names": {
        "tr": "Çakra dengeleme",
        "az": "Çakra balansı",
        "ru": "Баланс чакр",
        "en": "Chakra balance"
      },
      "descriptions": {
        "tr": "Çakra dengeleme uygulaması hakkında ekipten bilgi alın.",
        "az": "Çakra balansı tətbiqi barədə komandadan məlumat alın.",
        "ru": "Уточните у команды содержание сеанса «Баланс чакр».",
        "en": "Ask the team about the chakra balance session."
      }
    },
    "src-body-wrap": {
      "names": {
        "tr": "Vücut sargısı",
        "az": "Bədən bükməsi",
        "ru": "Обертывание тела",
        "en": "Body wrap"
      },
      "descriptions": {
        "tr": "Isıtıcı örtükle vücut bakımı.",
        "az": "İsidici örtük ilə bədən qulluğu.",
        "ru": "Уход за телом с согревающим одеялом.",
        "en": "Body care using a warming blanket."
      }
    },
    "src-aroma-derm-body-wrap": {
      "names": {
        "tr": "Aroma Derm vücut sargısı",
        "az": "Aroma Derm bədən bükməsi",
        "ru": "Обертывание Aroma Derm",
        "en": "Aroma Derm body wrap"
      },
      "descriptions": {
        "tr": "Aroma Derm jelleriyle vücut sargısı.",
        "az": "Aroma Derm gelləri ilə bədən bükməsi.",
        "ru": "Обёртывание с гелями Aroma Derm.",
        "en": "Body wrap using Aroma Derm gels."
      }
    },
    "src-aroma-derm-bandage": {
      "names": {
        "tr": "Aroma Derm bandaj sargısı",
        "az": "Aroma Derm bandaj sarğısı",
        "ru": "Бандажное обертывание Aroma Derm",
        "en": "Aroma Derm bandage wrap"
      },
      "descriptions": {
        "tr": "Yağ ve bakım ürünleriyle bandaj uygulaması.",
        "az": "Yağ və qulluq məhsulları ilə bandaj tətbiqi.",
        "ru": "Бандажное нанесение масел и средств ухода за телом.",
        "en": "Bandage application with oils and body care products."
      }
    },
    "src-jet-shower": {
      "names": {
        "tr": "Hidromasaj duşu",
        "az": "Hidromasaj duşu",
        "ru": "Гидромассажный душ",
        "en": "Jet shower"
      },
      "descriptions": {
        "tr": "Seçilen vücut bölgelerine yönlendirilen su akışı.",
        "az": "Seçilmiş bədən nahiyələrinə istiqamətləndirilən su axını.",
        "ru": "Регулируемые струи воды направляются на выбранные участки тела.",
        "en": "Adjustable water jets directed to selected body areas."
      }
    },
    "src-starvac-vacuum": {
      "names": {
        "tr": "Starvac vakum masajı",
        "az": "Starvac vakuum masajı",
        "ru": "Вакуумный массаж Starvac",
        "en": "Starvac vacuum massage"
      },
      "descriptions": {
        "tr": "Cihazla vakum masajı. 30, 40 ve 50 dakikalık seçenekleri ekiple netleştirin.",
        "az": "Cihazla vakuum masajı. 30, 40 və 50 dəqiqəlik seçimləri komanda ilə dəqiqləşdirin.",
        "ru": "Аппаратный вакуумный массаж. Уточните варианты на 30, 40 и 50 минут.",
        "en": "Device assisted vacuum massage. Ask the team about the 30, 40 and 50 minute options."
      }
    },
    "src-pressotherapy": {
      "names": {
        "tr": "Pressoterapi",
        "az": "Pressoterapiya",
        "ru": "Прессотерапия",
        "en": "Pressotherapy"
      },
      "descriptions": {
        "tr": "Bacaklara değişken hava basıncı uygulayan cihazla bakım.",
        "az": "Ayaqlara dəyişən hava təzyiqi tətbiq edən cihazla qulluq.",
        "ru": "Аппаратный уход с чередующимся давлением воздуха на ноги.",
        "en": "Device assisted care applying alternating air pressure to the legs."
      }
    },
    "src-myostimulation": {
      "names": {
        "tr": "Miyostimülasyon",
        "az": "Miostimulyasiya",
        "ru": "Миостимуляция",
        "en": "Myostimulation"
      },
      "descriptions": {
        "tr": "Elektrik impulslarıyla cihaz uygulaması. Uygunluğunu uzmanla konuşun.",
        "az": "Elektrik impulsları ilə cihaz tətbiqi. Uyğunluğu barədə mütəxəssislə danışın.",
        "ru": "Аппаратная процедура с электрическими импульсами. Обсудите пригодность со специалистом.",
        "en": "A device application using electrical impulses. Discuss suitability with the specialist."
      }
    },
    "src-vibromassage": {
      "names": {
        "tr": "Vibrasyon masajı",
        "az": "Vibromasaj",
        "ru": "Вибромассаж",
        "en": "Vibromassage"
      },
      "descriptions": {
        "tr": "Cihazla vibrasyon masajı.",
        "az": "Cihazla vibrasiya masajı.",
        "ru": "Аппаратный вибрационный массаж.",
        "en": "Device assisted vibration massage."
      }
    },
    "src-laser-epilation": {
      "names": {
        "tr": "Lazer epilasyon · ön görüşme",
        "az": "Lazer epilyasiyası · ilkin görüş",
        "ru": "Лазерная эпиляция · консультация",
        "en": "Laser hair removal · consultation"
      },
      "descriptions": {
        "tr": "Lazer epilasyon için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Lazer epilyasiyası üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Лазерная эпиляция · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Laser hair removal. The appointment is a consultation; treatment is not included."
      }
    },
    "src-laser-skin-care": {
      "names": {
        "tr": "Lazerle cilt bakımı · ön görüşme",
        "az": "Lazer ilə dəri qulluğu · ilkin görüş",
        "ru": "Лазерный уход за кожей · консультация",
        "en": "Laser skin care · consultation"
      },
      "descriptions": {
        "tr": "Lazerle cilt bakımı için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Lazer ilə dəri qulluğu üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Лазерный уход за кожей · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Laser skin care. The appointment is a consultation; treatment is not included."
      }
    },
    "src-laser-acne-care": {
      "names": {
        "tr": "Akneye yönelik lazer uygulaması · ön görüşme",
        "az": "Akneyə yönəlik lazer tətbiqi · ilkin görüş",
        "ru": "Лазерная процедура при акне · консультация",
        "en": "Laser acne care · consultation"
      },
      "descriptions": {
        "tr": "Akneye yönelik lazer uygulaması için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Akneyə yönəlik lazer tətbiqi üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Лазерная процедура при акне · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Laser acne care. The appointment is a consultation; treatment is not included."
      }
    },
    "src-laser-pigmentation": {
      "names": {
        "tr": "Pigmentasyona yönelik lazer uygulaması · ön görüşme",
        "az": "Piqmentasiyaya yönəlik lazer tətbiqi · ilkin görüş",
        "ru": "Лазерная процедура при пигментации · консультация",
        "en": "Laser pigmentation care · consultation"
      },
      "descriptions": {
        "tr": "Pigmentasyona yönelik lazer uygulaması için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Piqmentasiyaya yönəlik lazer tətbiqi üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Лазерная процедура при пигментации · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Laser pigmentation care. The appointment is a consultation; treatment is not included."
      }
    },
    "src-laser-couperose": {
      "names": {
        "tr": "Kuperoza yönelik lazer uygulaması · ön görüşme",
        "az": "Kuperoza yönəlik lazer tətbiqi · ilkin görüş",
        "ru": "Лазерная процедура при куперозе · консультация",
        "en": "Laser couperose care · consultation"
      },
      "descriptions": {
        "tr": "Kuperoza yönelik lazer uygulaması için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Kuperoza yönəlik lazer tətbiqi üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Лазерная процедура при куперозе · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Laser couperose care. The appointment is a consultation; treatment is not included."
      }
    },
    "src-facial-cleansing": {
      "names": {
        "tr": "Yüz temizliği",
        "az": "Üz təmizlənməsi",
        "ru": "Чистка лица",
        "en": "Facial cleansing"
      },
      "descriptions": {
        "tr": "Yüz temizliğine yönelik bakım. Uygulama yöntemini uzmanla netleştirin.",
        "az": "Üzün təmizlənməsi üçün qulluq. Tətbiq üsulunu mütəxəssislə dəqiqləşdirin.",
        "ru": "Очищение лица. Уточните метод у специалиста.",
        "en": "A facial cleansing session. Confirm the approach with the specialist."
      }
    },
    "src-complete-facial": {
      "names": {
        "tr": "Tam yüz bakımı",
        "az": "Tam üz qulluğu",
        "ru": "Комплексный уход за лицом",
        "en": "Complete facial care"
      },
      "descriptions": {
        "tr": "Tam yüz bakımının aşamalarını cildinize göre uzmanla konuşun.",
        "az": "Tam üz qulluğunun mərhələlərini dərinizə uyğun müzakirə edin.",
        "ru": "Обсудите этапы комплексного ухода за лицом и соответствие вашему типу кожи.",
        "en": "Discuss the steps of a complete facial and suitability for your skin."
      }
    },
    "src-chemical-peel": {
      "names": {
        "tr": "Kimyasal peeling · ön görüşme",
        "az": "Kimyəvi pilinq · ilkin görüş",
        "ru": "Химический пилинг · консультация",
        "en": "Chemical peel · consultation"
      },
      "descriptions": {
        "tr": "Kimyasal peeling için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Kimyəvi pilinq üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Химический пилинг · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Chemical peel. The appointment is a consultation; treatment is not included."
      }
    },
    "src-face-mesotherapy": {
      "names": {
        "tr": "Yüz mezoterapisi · ön görüşme",
        "az": "Üz mezoterapiyası · ilkin görüş",
        "ru": "Мезотерапия лица · консультация",
        "en": "Facial mesotherapy · consultation"
      },
      "descriptions": {
        "tr": "Yüz mezoterapisi için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Üz mezoterapiyası üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Мезотерапия лица · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Facial mesotherapy. The appointment is a consultation; treatment is not included."
      }
    },
    "src-hair-mesotherapy": {
      "names": {
        "tr": "Saç mezoterapisi · ön görüşme",
        "az": "Saç mezoterapiyası · ilkin görüş",
        "ru": "Мезотерапия волосистой части головы · консультация",
        "en": "Hair mesotherapy · consultation"
      },
      "descriptions": {
        "tr": "Saç mezoterapisi için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Saç mezoterapiyası üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Мезотерапия волосистой части головы · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Hair mesotherapy. The appointment is a consultation; treatment is not included."
      }
    },
    "src-3d-face-care": {
      "names": {
        "tr": "3D lifting yüz bakımı · ön görüşme",
        "az": "3D liftinq üz qulluğu · ilkin görüş",
        "ru": "3D-лифтинг уход за лицом · консультация",
        "en": "3D lifting facial care · consultation"
      },
      "descriptions": {
        "tr": "3D lifting yüz bakımı için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "3D liftinq üz qulluğu üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: 3D-лифтинг уход за лицом · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about 3D lifting facial care. The appointment is a consultation; treatment is not included."
      }
    },
    "src-biorevitalisation": {
      "names": {
        "tr": "Biorevitalizasyon · ön görüşme",
        "az": "Biorevitalizasiya · ilkin görüş",
        "ru": "Биоревитализация · консультация",
        "en": "Biorevitalisation · consultation"
      },
      "descriptions": {
        "tr": "Biorevitalizasyon için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Biorevitalizasiya üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Биоревитализация · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Biorevitalisation. The appointment is a consultation; treatment is not included."
      }
    },
    "src-prp-face": {
      "names": {
        "tr": "Yüz için PRP · ön görüşme",
        "az": "Üz üçün PRP · ilkin görüş",
        "ru": "PRP для лица · консультация",
        "en": "Facial PRP · consultation"
      },
      "descriptions": {
        "tr": "Yüz için PRP için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Üz üçün PRP üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: PRP для лица · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Facial PRP. The appointment is a consultation; treatment is not included."
      }
    },
    "src-prp-hair": {
      "names": {
        "tr": "Saç için PRP · ön görüşme",
        "az": "Saç üçün PRP · ilkin görüş",
        "ru": "PRP для волосистой части головы · консультация",
        "en": "Hair PRP · consultation"
      },
      "descriptions": {
        "tr": "Saç için PRP için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Saç üçün PRP üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: PRP для волосистой части головы · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Hair PRP. The appointment is a consultation; treatment is not included."
      }
    },
    "src-plasma-face": {
      "names": {
        "tr": "Plazma yüz bakımı · ön görüşme",
        "az": "Plazma üz qulluğu · ilkin görüş",
        "ru": "Плазменный уход за лицом · консультация",
        "en": "Plasma facial care · consultation"
      },
      "descriptions": {
        "tr": "Plazma yüz bakımı için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Plazma üz qulluğu üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Плазменный уход за лицом · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Plasma facial care. The appointment is a consultation; treatment is not included."
      }
    },
    "src-plasma-hair": {
      "names": {
        "tr": "Plazma saç bakımı · ön görüşme",
        "az": "Plazma saç qulluğu · ilkin görüş",
        "ru": "Плазменный уход за волосистой частью головы · консультация",
        "en": "Plasma hair care · consultation"
      },
      "descriptions": {
        "tr": "Plazma saç bakımı için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Plazma saç qulluğu üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Плазменный уход за волосистой частью головы · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Plasma hair care. The appointment is a consultation; treatment is not included."
      }
    },
    "src-meso-botox": {
      "names": {
        "tr": "Mezobotoks · ön görüşme",
        "az": "Mezobotoks · ilkin görüş",
        "ru": "Мезоботокс · консультация",
        "en": "Mesobotox · consultation"
      },
      "descriptions": {
        "tr": "Mezobotoks için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Mezobotoks üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Мезоботокс · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Mesobotox. The appointment is a consultation; treatment is not included."
      }
    },
    "src-botox": {
      "names": {
        "tr": "Botoks · ön görüşme",
        "az": "Botoks · ilkin görüş",
        "ru": "Ботокс · консультация",
        "en": "Botox · consultation"
      },
      "descriptions": {
        "tr": "Botoks için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Botoks üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Ботокс · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Botox. The appointment is a consultation; treatment is not included."
      }
    },
    "src-filler": {
      "names": {
        "tr": "Dolgu · ön görüşme",
        "az": "Filler · ilkin görüş",
        "ru": "Филлеры · консультация",
        "en": "Filler · consultation"
      },
      "descriptions": {
        "tr": "Dolgu için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Filler üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Филлеры · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Filler. The appointment is a consultation; treatment is not included."
      }
    },
    "src-permanent-eyes": {
      "names": {
        "tr": "Göz kalıcı makyajı · ön görüşme",
        "az": "Gözlər üçün permanent makiyaj · ilkin görüş",
        "ru": "Перманентный макияж глаз · консультация",
        "en": "Permanent eye makeup · consultation"
      },
      "descriptions": {
        "tr": "Göz kalıcı makyajı için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Gözlər üçün permanent makiyaj üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Перманентный макияж глаз · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Permanent eye makeup. The appointment is a consultation; treatment is not included."
      }
    },
    "src-permanent-brows": {
      "names": {
        "tr": "Kaş kalıcı makyajı · ön görüşme",
        "az": "Qaş üçün permanent makiyaj · ilkin görüş",
        "ru": "Перманентный макияж бровей · консультация",
        "en": "Permanent brow makeup · consultation"
      },
      "descriptions": {
        "tr": "Kaş kalıcı makyajı için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Qaş üçün permanent makiyaj üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Перманентный макияж бровей · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Permanent brow makeup. The appointment is a consultation; treatment is not included."
      }
    },
    "src-permanent-lips": {
      "names": {
        "tr": "Dudak kalıcı makyajı · ön görüşme",
        "az": "Dodaq üçün permanent makiyaj · ilkin görüş",
        "ru": "Перманентный макияж губ · консультация",
        "en": "Permanent lip makeup · consultation"
      },
      "descriptions": {
        "tr": "Dudak kalıcı makyajı için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Dodaq üçün permanent makiyaj üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Перманентный макияж губ · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Permanent lip makeup. The appointment is a consultation; treatment is not included."
      }
    },
    "src-tattoo": {
      "names": {
        "tr": "Dövme · ön görüşme",
        "az": "Tatu · ilkin görüş",
        "ru": "Татуировка · консультация",
        "en": "Tattoo · consultation"
      },
      "descriptions": {
        "tr": "Dövme için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Tatu üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Татуировка · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Tattoo. The appointment is a consultation; treatment is not included."
      }
    },
    "src-body-mesotherapy": {
      "names": {
        "tr": "Vücut mezoterapisi · ön görüşme",
        "az": "Bədən mezoterapiyası · ilkin görüş",
        "ru": "Мезотерапия тела · консультация",
        "en": "Body mesotherapy · consultation"
      },
      "descriptions": {
        "tr": "Vücut mezoterapisi için uzman ön görüşmesi. Bu randevu ön görüşmedir; uygulama içermez.",
        "az": "Bədən mezoterapiyası üçün mütəxəssislə ilkin görüş. Bu qəbul ilkin görüşdür; prosedur daxil deyil.",
        "ru": "Консультация специалиста: Мезотерапия тела · консультация. Запись включает консультацию, без проведения процедуры.",
        "en": "Specialist consultation about Body mesotherapy. The appointment is a consultation; treatment is not included."
      }
    },
    "src-classic-manicure": {
      "names": {
        "tr": "Klasik manikür",
        "az": "Klassik manikür",
        "ru": "Классический маникюр",
        "en": "Classic manicure"
      },
      "descriptions": {
        "tr": "Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.",
        "az": "Dırnaq qulluğu və lak. Müddət təxminidir; quruma vaxtı əlavədir.",
        "ru": "Уход за ногтями и покрытие лаком. Время приблизительное, без сушки.",
        "en": "Nail care and polish. Duration is approximate and excludes drying time."
      }
    },
    "src-classic-pedicure": {
      "names": {
        "tr": "Klasik pedikür",
        "az": "Klassik pedikür",
        "ru": "Классический педикюр",
        "en": "Classic pedicure"
      },
      "descriptions": {
        "tr": "Pedikür, peeling, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.",
        "az": "Pedikür, skrab, krem və örtük. Müddət təxminidir. Quruma vaxtı əlavədir.",
        "ru": "Педикюр, скраб, крем и лак. Время приблизительное; сушка требует дополнительного времени.",
        "en": "Pedicure, scrub, cream and polish. Duration is approximate. Drying time is additional."
      }
    },
    "src-spa-manicure": {
      "names": {
        "tr": "SPA manikür",
        "az": "SPA manikürü",
        "ru": "SPA-маникюр",
        "en": "Spa manicure"
      },
      "descriptions": {
        "tr": "Manikür, peeling, shea yağı, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.",
        "az": "Manikür, skrab, karite yağı, krem və örtük. Müddət təxminidir. Quruma vaxtı əlavədir.",
        "ru": "Маникюр, скраб, масло ши, крем и лак. Время приблизительное, без сушки.",
        "en": "Manicure, scrub, shea oil, cream and polish. Duration is approximate. Drying time is additional."
      }
    },
    "src-spa-pedicure": {
      "names": {
        "tr": "SPA pedikür",
        "az": "SPA pedikürü",
        "ru": "SPA-педикюр",
        "en": "Spa pedicure"
      },
      "descriptions": {
        "tr": "Pedikür, peeling, maske, shea yağı, krem ve oje. Süre yaklaşık. Kuruma süresi ayrıca eklenir.",
        "az": "Pedikür, skrab, maska, karite yağı, krem və örtük. Müddət təxminidir. Quruma vaxtı əlavədir.",
        "ru": "Педикюр, скраб, маска, масло ши, крем и лак. Время приблизительное, без сушки.",
        "en": "Pedicure, scrub, mask, shea oil, cream and polish. Duration is approximate. Drying time is additional."
      }
    },
    "src-brazil-manicure": {
      "names": {
        "tr": "Brezilya manikürü",
        "az": "Braziliya manikürü",
        "ru": "Бразильский маникюр",
        "en": "Brazilian manicure"
      },
      "descriptions": {
        "tr": "Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.",
        "az": "Dırnaq qulluğu və lak. Müddət təxminidir; quruma vaxtı əlavədir.",
        "ru": "Уход за ногтями и покрытие лаком. Время приблизительное, без сушки.",
        "en": "Nail care and polish. Duration is approximate and excludes drying time."
      }
    },
    "src-brazil-pedicure": {
      "names": {
        "tr": "Brezilya pedikürü",
        "az": "Braziliya pedikürü",
        "ru": "Бразильский педикюр",
        "en": "Brazilian pedicure"
      },
      "descriptions": {
        "tr": "Tırnak bakımı ve oje. Süre yaklaşık; kuruma süresi ayrıca eklenir.",
        "az": "Dırnaq qulluğu və lak. Müddət təxminidir; quruma vaxtı əlavədir.",
        "ru": "Уход за ногтями и покрытие лаком. Время приблизительное, без сушки.",
        "en": "Nail care and polish. Duration is approximate and excludes drying time."
      }
    },
    "src-shellac-polish": {
      "names": {
        "tr": "Shellac oje",
        "az": "Shellac örtüyü",
        "ru": "Покрытие Shellac",
        "en": "Shellac polish"
      },
      "descriptions": {
        "tr": "Tırnaklara Shellac oje uygulaması.",
        "az": "Dırnaqlara Shellac örtüyü.",
        "ru": "Покрытие ногтей Shellac.",
        "en": "Shellac polish application for your nails."
      }
    },
    "src-shellac-classic-manicure": {
      "names": {
        "tr": "Shellac ile klasik manikür",
        "az": "Shellac ilə klassik manikür",
        "ru": "Классический маникюр с Shellac",
        "en": "Classic manicure with Shellac"
      },
      "descriptions": {
        "tr": "Tırnak bakımı ve Shellac oje.",
        "az": "Dırnaq qulluğu və Shellac örtüyü.",
        "ru": "Уход за ногтями с покрытием Shellac.",
        "en": "Nail care with Shellac polish."
      }
    },
    "src-shellac-classic-pedicure": {
      "names": {
        "tr": "Shellac ile klasik pedikür",
        "az": "Shellac ilə klassik pedikür",
        "ru": "Классический педикюр с Shellac",
        "en": "Classic pedicure with Shellac"
      },
      "descriptions": {
        "tr": "Pedikür, peeling, krem ve oje. Süre yaklaşık.",
        "az": "Pedikür, skrab, krem və örtük. Müddət təxminidir.",
        "ru": "Педикюр, скраб, крем и лак. Время приблизительное.",
        "en": "Pedicure, scrub, cream and polish. Duration is approximate."
      }
    },
    "src-shellac-spa-manicure": {
      "names": {
        "tr": "Shellac ile SPA manikür",
        "az": "Shellac ilə SPA manikürü",
        "ru": "SPA-маникюр с Shellac",
        "en": "Spa manicure with Shellac"
      },
      "descriptions": {
        "tr": "Manikür, peeling, shea yağı, krem ve oje. Süre yaklaşık.",
        "az": "Manikür, skrab, karite yağı, krem və örtük. Müddət təxminidir.",
        "ru": "Маникюр, скраб, масло ши, крем и лак. Время приблизительное.",
        "en": "Manicure, scrub, shea oil, cream and polish. Duration is approximate."
      }
    },
    "src-shellac-spa-pedicure": {
      "names": {
        "tr": "Shellac ile SPA pedikür",
        "az": "Shellac ilə SPA pedikürü",
        "ru": "SPA-педикюр с Shellac",
        "en": "Spa pedicure with Shellac"
      },
      "descriptions": {
        "tr": "Pedikür, peeling, maske, shea yağı, krem ve oje. Süre yaklaşık.",
        "az": "Pedikür, skrab, maska, karite yağı, krem və örtük. Müddət təxminidir.",
        "ru": "Педикюр, скраб, маска, масло ши, крем и лак. Время приблизительное.",
        "en": "Pedicure, scrub, mask, shea oil, cream and polish. Duration is approximate."
      }
    },
    "src-shellac-brazil-manicure": {
      "names": {
        "tr": "Shellac ile Brezilya manikürü",
        "az": "Shellac ilə Braziliya manikürü",
        "ru": "Бразильский маникюр с Shellac",
        "en": "Brazilian manicure with Shellac"
      },
      "descriptions": {
        "tr": "Brezilya manikürü ve Shellac oje.",
        "az": "Braziliya manikürü və Shellac örtüyü.",
        "ru": "Бразильский маникюр с покрытием Shellac.",
        "en": "Brazilian manicure with Shellac polish."
      }
    },
    "src-shellac-brazil-pedicure": {
      "names": {
        "tr": "Shellac ile Brezilya pedikürü",
        "az": "Shellac ilə Braziliya pedikürü",
        "ru": "Бразильский педикюр с Shellac",
        "en": "Brazilian pedicure with Shellac"
      },
      "descriptions": {
        "tr": "Brezilya pedikürü ve Shellac oje.",
        "az": "Braziliya pedikürü və Shellac örtüyü.",
        "ru": "Бразильский педикюр с покрытием Shellac.",
        "en": "Brazilian pedicure with Shellac polish."
      }
    },
    "src-shellac-french": {
      "names": {
        "tr": "Shellac ile French manikür",
        "az": "Shellac ilə fransız manikürü",
        "ru": "Французский маникюр с Shellac",
        "en": "French Shellac polish"
      },
      "descriptions": {
        "tr": "French tarzı Shellac. Süre 35 veya 45 dakika; mekânla teyit edin.",
        "az": "Fransız üslubunda Shellac. Müddət 35 və ya 45 dəqiqədir; məkanla dəqiqləşdirin.",
        "ru": "Французское покрытие Shellac. В источнике указано 35 или 45 минут; уточните в салоне.",
        "en": "French style Shellac. The duration is 35 or 45 minutes; confirm with the venue."
      }
    },
    "src-shellac-magnetic": {
      "names": {
        "tr": "Manyetik Shellac",
        "az": "Maqnitli Shellac",
        "ru": "Магнитное покрытие Shellac",
        "en": "Magnetic Shellac polish"
      },
      "descriptions": {
        "tr": "Manyetik Shellac ile tırnak tasarımı.",
        "az": "Maqnitli Shellac ilə dırnaq dizaynı.",
        "ru": "Дизайн ногтей с магнитным Shellac.",
        "en": "Nail design using magnetic Shellac."
      }
    },
    "src-shellac-removal": {
      "names": {
        "tr": "Shellac çıkarma",
        "az": "Shellac təmizlənməsi",
        "ru": "Снятие Shellac",
        "en": "Shellac removal"
      },
      "descriptions": {
        "tr": "Shellac ojenin çıkarılması.",
        "az": "Shellac örtüyünün təmizlənməsi.",
        "ru": "Снятие покрытия Shellac.",
        "en": "Removal of Shellac polish."
      }
    },
    "src-minx-manicure": {
      "names": {
        "tr": "Minx manikür",
        "az": "Minx manikürü",
        "ru": "Маникюр Minx",
        "en": "Minx manicure"
      },
      "descriptions": {
        "tr": "Manikür ve Minx kaplama.",
        "az": "Manikür və Minx örtüyü.",
        "ru": "Маникюр с покрытием Minx.",
        "en": "Manicure with Minx application."
      }
    },
    "src-minx-pedicure": {
      "names": {
        "tr": "Minx pedikür",
        "az": "Minx pedikürü",
        "ru": "Педикюр Minx",
        "en": "Minx pedicure"
      },
      "descriptions": {
        "tr": "Pedikür ve Minx kaplama.",
        "az": "Pedikür və Minx örtüyü.",
        "ru": "Педикюр с покрытием Minx.",
        "en": "Pedicure with Minx application."
      }
    },
    "src-minx-polish": {
      "names": {
        "tr": "Minx kaplama",
        "az": "Minx örtüyü",
        "ru": "Покрытие Minx",
        "en": "Minx application"
      },
      "descriptions": {
        "tr": "Tırnaklara Minx kaplama.",
        "az": "Dırnaqlara Minx örtüyü.",
        "ru": "Покрытие ногтей Minx.",
        "en": "Minx application for your nails."
      }
    },
    "src-minx-single-nail": {
      "names": {
        "tr": "Tek tırnağa Minx kaplama",
        "az": "Bir dırnağa Minx örtüyü",
        "ru": "Покрытие Minx на один ноготь",
        "en": "Minx application on one nail"
      },
      "descriptions": {
        "tr": "Tek tırnağa Minx kaplama.",
        "az": "Bir dırnağa Minx örtüyü.",
        "ru": "Покрытие Minx на одном ногте.",
        "en": "Minx application on one nail."
      }
    },
    "src-standard-nail-polish": {
      "names": {
        "tr": "Standart oje",
        "az": "Adi dırnaq lakı",
        "ru": "Обычное покрытие лаком",
        "en": "Standard nail polish"
      },
      "descriptions": {
        "tr": "Tırnaklara standart oje uygulaması.",
        "az": "Dırnaqlara adi lak tətbiqi.",
        "ru": "Покрытие ногтей обычным лаком.",
        "en": "Standard nail polish application."
      }
    },
    "src-gel-extensions": {
      "names": {
        "tr": "Jel tırnak uzatma",
        "az": "Gel ilə dırnaq uzadılması",
        "ru": "Наращивание ногтей гелем",
        "en": "Gel nail extensions"
      },
      "descriptions": {
        "tr": "Jelle tırnak uzatma.",
        "az": "Gel ilə dırnaqların uzadılması.",
        "ru": "Наращивание ногтей гелем.",
        "en": "Nail extensions using gel."
      }
    },
    "src-gel-removal-care": {
      "names": {
        "tr": "Jel tırnak çıkarma ve bakım",
        "az": "Gel dırnaqların çıxarılması və qulluq",
        "ru": "Снятие геля и уход",
        "en": "Gel removal and nail care"
      },
      "descriptions": {
        "tr": "Jel tırnak çıkarma ve tırnak bakımı.",
        "az": "Gel dırnaqların çıxarılması və dırnaq qulluğu.",
        "ru": "Снятие геля и последующий уход за ногтями.",
        "en": "Gel removal followed by nail care."
      }
    },
    "src-gel-correction": {
      "names": {
        "tr": "Jel tırnak düzeltme",
        "az": "Gel dırnaqların korreksiyası",
        "ru": "Коррекция гелевых ногтей",
        "en": "Gel nail correction"
      },
      "descriptions": {
        "tr": "Jel tırnaklara düzeltme uygulaması.",
        "az": "Gel dırnaqların korreksiyası.",
        "ru": "Коррекция гелевых ногтей.",
        "en": "Correction of gel nails."
      }
    },
    "src-gel-single-correction": {
      "names": {
        "tr": "Tek jel tırnak düzeltme",
        "az": "Bir gel dırnağın korreksiyası",
        "ru": "Коррекция одного гелевого ногтя",
        "en": "Single gel nail correction"
      },
      "descriptions": {
        "tr": "Tek jel tırnağa düzeltme uygulaması.",
        "az": "Bir gel dırnağın korreksiyası.",
        "ru": "Коррекция одного гелевого ногтя.",
        "en": "Correction of one gel nail."
      }
    },
    "src-artificial-nails": {
      "names": {
        "tr": "Takma tırnak uygulaması",
        "az": "Süni dırnaq tətbiqi",
        "ru": "Накладные ногти",
        "en": "Artificial nail application"
      },
      "descriptions": {
        "tr": "Takma tırnak uygulama seçeneklerini salonla netleştirin.",
        "az": "Süni dırnaq tətbiqi üçün seçimləri salonla dəqiqləşdirin.",
        "ru": "Уточните варианты накладных ногтей в салоне.",
        "en": "Confirm artificial nail application options with the salon."
      }
    },
    "src-brazilian-wax": {
      "names": {
        "tr": "Brezilya ağda",
        "az": "Braziliya epilyasiyası",
        "ru": "Бразильская восковая эпиляция",
        "en": "Brazilian wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-bikini-wax": {
      "names": {
        "tr": "Bikini ağda",
        "az": "Bikini nahiyəsinin epilyasiyası",
        "ru": "Восковая эпиляция зоны бикини",
        "en": "Bikini wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-underarm-wax": {
      "names": {
        "tr": "Koltuk altı ağda",
        "az": "Qoltuqaltı epilyasiya",
        "ru": "Восковая эпиляция подмышек",
        "en": "Underarm wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-half-leg-wax": {
      "names": {
        "tr": "Yarım bacak ağda",
        "az": "Yarım ayaq epilyasiyası",
        "ru": "Восковая эпиляция голеней",
        "en": "Half leg wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-full-leg-wax": {
      "names": {
        "tr": "Tam bacak ağda",
        "az": "Tam ayaq epilyasiyası",
        "ru": "Восковая эпиляция ног полностью",
        "en": "Full leg wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-arm-wax": {
      "names": {
        "tr": "Tam kol ağda",
        "az": "Tam qol epilyasiyası",
        "ru": "Восковая эпиляция рук полностью",
        "en": "Full arm wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-face-wax": {
      "names": {
        "tr": "Yüz ağda",
        "az": "Üz epilyasiyası",
        "ru": "Восковая эпиляция лица",
        "en": "Facial hair removal"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-abdomen-wax": {
      "names": {
        "tr": "Karın ağda",
        "az": "Qarın nahiyəsinin epilyasiyası",
        "ru": "Восковая эпиляция живота",
        "en": "Abdomen hair removal"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-full-back-wax": {
      "names": {
        "tr": "Sırt ağda",
        "az": "Bel nahiyəsinin epilyasiyası",
        "ru": "Восковая эпиляция спины полностью",
        "en": "Back wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-full-abdomen-wax": {
      "names": {
        "tr": "Tam karın ağda",
        "az": "Qarın nahiyəsinin tam epilyasiyası",
        "ru": "Восковая эпиляция живота полностью",
        "en": "Full abdomen hair removal"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-full-body-wax": {
      "names": {
        "tr": "Tüm vücut ağda",
        "az": "Tam bədən epilyasiyası",
        "ru": "Восковая эпиляция всего тела",
        "en": "Full body hair removal"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-lip-chin-wax": {
      "names": {
        "tr": "Dudak üstü ve çene ağda",
        "az": "Dodaq üstü və çənə epilyasiyası",
        "ru": "Восковая эпиляция верхней губы и подбородка",
        "en": "Lip and chin wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-full-leg-bikini-wax": {
      "names": {
        "tr": "Tam bacak ve bikini ağda",
        "az": "Tam ayaq və bikini epilyasiyası",
        "ru": "Восковая эпиляция ног и бикини",
        "en": "Full leg and bikini wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-full-leg-brazilian-wax": {
      "names": {
        "tr": "Tam bacak ve Brezilya ağda",
        "az": "Tam ayaq və Braziliya epilyasiyası",
        "ru": "Восковая эпиляция ног и бразильская",
        "en": "Full leg and Brazilian wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-brow-wax": {
      "names": {
        "tr": "Kaş ağda",
        "az": "Qaşların mumla formalaşdırılması",
        "ru": "Восковая эпиляция бровей",
        "en": "Brow wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-chest-wax": {
      "names": {
        "tr": "Göğüs ağda",
        "az": "Sinə nahiyəsinin epilyasiyası",
        "ru": "Восковая эпиляция груди",
        "en": "Chest wax"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-false-lashes": {
      "names": {
        "tr": "Takma kirpik",
        "az": "Süni kirpik tətbiqi",
        "ru": "Накладные ресницы",
        "en": "False lash application"
      },
      "descriptions": {
        "tr": "Takma kirpik uygulaması. Tarzı ve randevu süresini salonla netleştirin.",
        "az": "Süni kirpiklərin tətbiqi. Üslubu və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Накладные ресницы. Уточните стиль и длительность в салоне.",
        "en": "False lash application. Confirm the style and appointment duration with the salon."
      }
    },
    "src-brow-shaping": {
      "names": {
        "tr": "Kaş şekillendirme",
        "az": "Qaş korreksiyası",
        "ru": "Коррекция формы бровей",
        "en": "Eyebrow shaping"
      },
      "descriptions": {
        "tr": "Kaş şekillendirme.",
        "az": "Qaş formasının korreksiyası.",
        "ru": "Коррекция формы бровей.",
        "en": "Eyebrow shaping."
      }
    },
    "src-day-evening-makeup": {
      "names": {
        "tr": "Gündüz ve gece makyajı",
        "az": "Gündüz və axşam makiyajı",
        "ru": "Дневной и вечерний макияж",
        "en": "Day and evening makeup"
      },
      "descriptions": {
        "tr": "Gündüz veya gece için makyaj.",
        "az": "Gündüz və ya axşam üçün makiyaj.",
        "ru": "Макияж для дневного или вечернего мероприятия.",
        "en": "Makeup for daytime or an evening occasion."
      }
    },
    "src-bridal-makeup": {
      "names": {
        "tr": "Gelin makyajı",
        "az": "Toy makiyajı",
        "ru": "Свадебный макияж",
        "en": "Bridal makeup"
      },
      "descriptions": {
        "tr": "Düğün günü için makyaj. Prova makyajının dahil olup olmadığını teyit edin.",
        "az": "Toy günü üçün makiyaj. Sınaq makiyajının daxil olub-olmadığını dəqiqləşdirin.",
        "ru": "Свадебный макияж. Уточните, входит ли пробный макияж.",
        "en": "Makeup for your wedding day. Confirm whether a makeup trial is included."
      }
    },
    "src-slimming-consultation": {
      "names": {
        "tr": "Vücut bakım programları · ön görüşme",
        "az": "Bədən qulluğu proqramları · ilkin görüş",
        "ru": "Программы ухода за телом · консультация",
        "en": "Body care programmes · consultation"
      },
      "descriptions": {
        "tr": "Vücut bakım programları için ön görüşme. Uygulama içermez.",
        "az": "Bədən qulluğu proqramları üçün ilkin görüş. Prosedur daxil deyil.",
        "ru": "Предварительная консультация по программам ухода за телом, без проведения процедуры.",
        "en": "A consultation about body care programmes. Treatment is not included."
      }
    },
    "massage": {
      "names": {
        "tr": "Sultan Masajı",
        "az": "Sultan masajı",
        "ru": "Султан массаж",
        "en": "Sultan massage"
      }
    },
    "hamam": {
      "names": {
        "tr": "Geleneksel Hamam",
        "az": "Ənənəvi hamam",
        "ru": "Традиционный хаммам",
        "en": "Traditional hamam"
      }
    },
    "facial": {
      "names": {
        "tr": "Işıltılı Cilt Bakımı",
        "az": "Parlaq dəri qulluğu",
        "ru": "Уход за сиянием кожи",
        "en": "Radiance facial"
      }
    },
    "hair": {
      "names": {
        "tr": "Saç Bakımı ve Şekillendirme",
        "az": "Saç qulluğu və düzümü",
        "ru": "Уход и укладка волос",
        "en": "Hair care and styling"
      }
    },
    "body-care": {
      "names": {
        "tr": "Vücut bakımı",
        "az": "Bədən qulluğu",
        "ru": "Уход за телом",
        "en": "Body care"
      }
    },
    "pressotherapy": {
      "names": {
        "tr": "Pressoterapi",
        "az": "Pressoterapiya",
        "ru": "Прессотерапия",
        "en": "Pressotherapy"
      }
    },
    "manicure": {
      "names": {
        "tr": "Manikür",
        "az": "Manikür",
        "ru": "Маникюр",
        "en": "Manicure"
      }
    },
    "pedicure": {
      "names": {
        "tr": "Pedikür",
        "az": "Pedikür",
        "ru": "Педикюр",
        "en": "Pedicure"
      }
    },
    "makeup": {
      "names": {
        "tr": "Makyaj",
        "az": "Makiyaj",
        "ru": "Макияж",
        "en": "Makeup"
      }
    },
    "brows-lashes": {
      "names": {
        "tr": "Kaş ve kirpik bakımı",
        "az": "Qaş və kirpik qulluğu",
        "ru": "Уход за бровями и ресницами",
        "en": "Brow and lash care"
      }
    },
    "epilation": {
      "names": {
        "tr": "Epilasyon",
        "az": "Epilyasiya",
        "ru": "Эпиляция",
        "en": "Hair removal"
      }
    }
  },
  "programs": {
    "src-aerobics": {
      "names": {
        "tr": "Aerobik",
        "az": "Aerobika",
        "ru": "Аэробика",
        "en": "Aerobics"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-aqua-aerobics": {
      "names": {
        "tr": "Su aerobiği",
        "az": "Akvaaerobika",
        "ru": "Аквааэробика",
        "en": "Aqua aerobics"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-pilates": {
      "names": {
        "tr": "Pilates",
        "az": "Pilates",
        "ru": "Пилатес",
        "en": "Pilates"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-zumba": {
      "names": {
        "tr": "Zumba",
        "az": "Zumba",
        "ru": "Зумба",
        "en": "Zumba"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-oriental-dance": {
      "names": {
        "tr": "Oryantal dans",
        "az": "Şərq rəqsləri",
        "ru": "Восточные танцы",
        "en": "Oriental dance"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-total-body-workout": {
      "names": {
        "tr": "Tüm vücut antrenmanı",
        "az": "Bütün bədən məşqi",
        "ru": "Тренировка всего тела",
        "en": "Total body workout"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "pilates": {
      "names": {
        "tr": "Mat Pilates",
        "az": "Mat Pilates",
        "ru": "Мат Пилатес",
        "en": "Mat Pilates"
      }
    },
    "swimming": {
      "names": {
        "tr": "Yüzme başlangıç",
        "az": "Başlanğıc üzgüçülük",
        "ru": "Плавание для начинающих",
        "en": "Beginner swimming"
      }
    },
    "swimming-advanced": {
      "names": {
        "tr": "Yüzme devam",
        "az": "Davam üzgüçülük",
        "ru": "Продвинутое плавание",
        "en": "Continuing swimming"
      }
    }
  },
  "informationItems": {
    "src-aroma-oil-body-care": {
      "names": {
        "tr": "Aromatik yağlarla vücut bakımı",
        "az": "Ətirli yağlarla bədən qulluğu",
        "ru": "Уход за телом с ароматическими маслами",
        "en": "Aroma oil body care"
      },
      "descriptions": {
        "tr": "Aromatik yağlarla vücut bakımı. Süreyi ve uygulama ayrıntılarını netleştirin.",
        "az": "Ətirli yağlarla bədən qulluğu. Müddət və tətbiq detallarını dəqiqləşdirin.",
        "ru": "Уход за телом с ароматическими маслами. Уточните длительность и способ нанесения.",
        "en": "Body care with aromatic oils. Confirm the duration and application details."
      }
    },
    "src-rose-oil-body-care": {
      "names": {
        "tr": "Gül yağıyla vücut bakımı",
        "az": "Qızılgül yağı ilə bədən qulluğu",
        "ru": "Уход за телом с розовым маслом",
        "en": "Rose oil body care"
      },
      "descriptions": {
        "tr": "Gül yağıyla vücut bakımı.",
        "az": "Qızılgül yağı ilə bədən qulluğu.",
        "ru": "Уход за телом с розовым маслом.",
        "en": "Body care using rose oil."
      }
    },
    "src-nail-design": {
      "names": {
        "tr": "Tırnak tasarımı",
        "az": "Dırnaq dizaynı",
        "ru": "Дизайн ногтей",
        "en": "Nail design"
      },
      "descriptions": {
        "tr": "Tırnak tasarımı seçeneklerini salon ekibiyle konuşun.",
        "az": "Dırnaq dizaynı seçimlərini salon komandası ilə müzakirə edin.",
        "ru": "Обсудите варианты дизайна ногтей с командой салона.",
        "en": "Explore nail design options with the salon team."
      }
    },
    "src-hand-mask": {
      "names": {
        "tr": "El maskesi",
        "az": "Əl üçün maska",
        "ru": "Маска для рук",
        "en": "Hand mask"
      },
      "descriptions": {
        "tr": "Eller için maskeyle bakım.",
        "az": "Əllər üçün maska ilə qulluq.",
        "ru": "Уход за руками с маской.",
        "en": "Hand care with a mask."
      }
    },
    "src-hot-wax": {
      "names": {
        "tr": "Sıcak ağda",
        "az": "İsti mumla epilyasiya",
        "ru": "Горячий воск",
        "en": "Hot wax hair removal"
      },
      "descriptions": {
        "tr": "Epilasyon alanını ve randevu süresini salonla netleştirin.",
        "az": "Epilyasiya sahəsi və qəbul müddətini salonla dəqiqləşdirin.",
        "ru": "Уточните зону удаления волос и длительность записи в салоне.",
        "en": "Confirm the hair removal area and appointment duration with the salon."
      }
    },
    "src-lash-application": {
      "names": {
        "tr": "Kirpik uygulaması (yöntem teyit bekliyor)",
        "az": "Kirpik əkimi (üsul dəqiqləşdirilir)",
        "ru": "Процедура для ресниц (метод уточняется)",
        "en": "Eyelash application (method to confirm)"
      },
      "descriptions": {
        "tr": "Kirpik uygulamasının kesin yöntemini ve uygunluğunu uzmanla netleştirin.",
        "az": "Kirpik tətbiqinin konkret üsulu və uyğunluğunu mütəxəssislə dəqiqləşdirin.",
        "ru": "Уточните точный метод работы с ресницами и пригодность у специалиста.",
        "en": "Confirm the exact eyelash application method and suitability with the specialist."
      }
    },
    "src-hair-care": {
      "names": {
        "tr": "Saç bakımı",
        "az": "Saça qulluq",
        "ru": "Уход за волосами",
        "en": "Hair care"
      },
      "descriptions": {
        "tr": "Saç bakım seçeneklerini salon ekibiyle konuşun. Hizmet ve randevu ayrıntılarını netleştirin.",
        "az": "Saçınıza qulluq seçimlərini salon komandası ilə müzakirə edin. Xidmət və qəbul detallarını dəqiqləşdirin.",
        "ru": "Обсудите варианты ухода за волосами и детали записи с командой салона.",
        "en": "Explore hair care options with the salon team and confirm the treatment and appointment details."
      }
    }
  },
  "supplements": {
    "src-decollete-care": {
      "names": {
        "tr": "Dekolte bakımı",
        "az": "Dekolte zonasına qulluq",
        "ru": "Уход за декольте",
        "en": "Décolleté care"
      },
      "descriptions": {
        "tr": "Boyun ve göğüs bölgesi bakımı; yüz bakımına eklenebilir.",
        "az": "Boyun və sinə zonasına qulluq; üz qulluğuna əlavə edilə bilər.",
        "ru": "Уход за шеей и зоной декольте в дополнение к уходу за лицом.",
        "en": "Neck and chest area care that can be added to a facial."
      }
    },
    "src-foot-mask": {
      "names": {
        "tr": "Ayak için ek maske",
        "az": "Ayaq üçün əlavə maska",
        "ru": "Дополнительная маска для стоп",
        "en": "Foot mask add-on"
      },
      "descriptions": {
        "tr": "Ayak bakımına ek maske uygulaması.",
        "az": "Ayaq qulluğuna əlavə maska tətbiqi.",
        "ru": "Маска в дополнение к уходу за стопами.",
        "en": "A mask to add to your foot care."
      }
    }
  },
  "facilities": {
    "hamam": {
      "names": {
        "tr": "Türk hamamı",
        "az": "Türk hamamı",
        "ru": "Турецкий хаммам",
        "en": "Turkish hamam"
      },
      "descriptions": {
        "tr": "Özel bakım odası bulunan hamam.",
        "az": "Fərdi qulluq otağı olan hamam.",
        "ru": "Хаммам с отдельной процедурной комнатой.",
        "en": "Hamam with a private treatment room."
      }
    },
    "pool": {
      "names": {
        "tr": "Havuz",
        "az": "Hovuz",
        "ru": "Бассейн",
        "en": "Swimming pool"
      },
      "descriptions": {
        "tr": "Yüzme havuzu ve havuz kenarı dinlenme alanı.",
        "az": "Üzgüçülük hovuzu və hovuzkənarı istirahət sahəsi.",
        "ru": "Плавательный бассейн с зоной отдыха у воды.",
        "en": "Swimming pool with a poolside rest area."
      }
    },
    "rest-area": {
      "names": {
        "tr": "Dinlenme alanı",
        "az": "İstirahət sahəsi",
        "ru": "Зона отдыха",
        "en": "Rest area"
      },
      "descriptions": {
        "tr": "Havuz kenarındaki dinlenme alanında ziyaretinize sakin bir mola ekleyin.",
        "az": "Hovuzkənarı istirahət sahəsində ziyarətinizə sakit bir fasilə əlavə edin.",
        "ru": "Зона отдыха у бассейна.",
        "en": "Take a quiet pause in the poolside rest area."
      }
    },
    "fitness": {
      "names": {
        "tr": "Fitness stüdyosu",
        "az": "Fitnes studiyası",
        "ru": "Фитнес-студия",
        "en": "Fitness studio"
      },
      "descriptions": {
        "tr": "Technogym ekipmanıyla fitness stüdyosu.",
        "az": "Technogym avadanlıqları ilə fitnes studiyası.",
        "ru": "Фитнес-студия с оборудованием Technogym.",
        "en": "A fitness studio with Technogym equipment."
      }
    },
    "sauna": {
      "names": {
        "tr": "Fin saunası",
        "az": "Fin saunası",
        "ru": "Финская сауна",
        "en": "Finnish sauna"
      },
      "descriptions": {
        "tr": "Wellness alanında sauna.",
        "az": "Wellness sahəsində sauna.",
        "ru": "Сауна в wellness-зоне.",
        "en": "Sauna within the wellness area."
      }
    },
    "wellbeing": {
      "names": {
        "tr": "Yüz ve vücut bakımı",
        "az": "Üz və bədən qulluğu",
        "ru": "Уход за лицом и телом",
        "en": "Face and body care"
      },
      "descriptions": {
        "tr": "Yüz ve vücut bakımına ayrılan alan.",
        "az": "Üz və bədən qulluğu üçün ayrılmış məkan.",
        "ru": "Зона ухода за лицом и телом.",
        "en": "A space for facial and body care."
      }
    },
    "hair-nail-spa": {
      "names": {
        "tr": "Saç ve tırnak salonu",
        "az": "Saç və dırnaq salonu",
        "ru": "Салон волос и ногтей",
        "en": "Hairdresser and Nail Spa"
      },
      "descriptions": {
        "tr": "Saç ve tırnak bakım salonu.",
        "az": "Saç və dırnaq qulluğu üçün salon.",
        "ru": "Салон ухода за волосами и ногтями.",
        "en": "Salon for hair and nail care."
      }
    },
    "slim-cafe": {
      "names": {
        "tr": "Slim Cafe",
        "az": "Slim Cafe",
        "ru": "Slim Cafe",
        "en": "Slim Cafe"
      },
      "descriptions": {
        "tr": "Ziyaretinizden önce veya sonra kafede mola verin. Menü ve fiyatları mekândan öğrenin.",
        "az": "Ziyarətinizdən əvvəl və ya sonra kafedə fasilə verin. Menyu və qiymətləri məkandan öyrənin.",
        "ru": "Кафе для перерыва до или после посещения. Меню и цены уточняйте у команды.",
        "en": "Pause at the café before or after your visit. Ask the team for the menu and prices."
      }
    },
    "shop": {
      "names": {
        "tr": "Sultan Saba mağazası",
        "az": "Sultan Saba mağazası",
        "ru": "Магазин Sultan Saba",
        "en": "Sultan Saba shop"
      },
      "descriptions": {
        "tr": "La Sultane de Saba ve Aroma Derm ürünlerini keşfedin. Mevcut ürünleri mağazadan öğrenin.",
        "az": "La Sultane de Saba və Aroma Derm məhsullarını kəşf edin. Mövcud məhsulları mağazadan öyrənin.",
        "ru": "Магазин продуктов La Sultane de Saba и Aroma Derm. Актуальный ассортимент уточняйте в магазине.",
        "en": "Explore La Sultane de Saba and Aroma Derm products. Ask the shop about the current selection."
      }
    },
    "slimming-programmes": {
      "names": {
        "tr": "Vücut bakım programları",
        "az": "Bədən qulluğu proqramları",
        "ru": "Программы ухода за телом",
        "en": "Body care programmes"
      },
      "descriptions": {
        "tr": "Vücut bakım paketleri hakkında ekipten bilgi alın. İçeriği, süreyi ve fiyatı birlikte netleştirin.",
        "az": "Bədən qulluğu paketləri barədə komandadan məlumat alın. Tərkib, müddət və qiyməti birlikdə dəqiqləşdirin.",
        "ru": "Уточните у команды состав, длительность и стоимость программ ухода за телом.",
        "en": "Ask the team about body care packages and confirm their contents, duration and price."
      }
    },
    "wellness-entry": {
      "names": {
        "tr": "Hamam, sauna ve havuz erişimi",
        "az": "Hamam, sauna və hovuz girişi",
        "ru": "Вход в хаммам, сауну и бассейн",
        "en": "Hamam, sauna and pool access"
      }
    },
    "pool-entry": {
      "names": {
        "tr": "Havuz erişimi",
        "az": "Hovuz girişi",
        "ru": "Вход в бассейн",
        "en": "Pool access"
      }
    },
    "fitness-entry": {
      "names": {
        "tr": "Spor salonu erişimi",
        "az": "İdman zalı girişi",
        "ru": "Вход в тренажёрный зал",
        "en": "Fitness studio access"
      }
    }
  },
  "membershipOffers": {
    "src-basic-3m": {
      "names": {
        "tr": "Basic · 3 ay",
        "az": "Basic · 3 ay",
        "ru": "Basic · 3 мес.",
        "en": "Basic · 3 months"
      },
      "descriptions": {
        "tr": "Fitness stüdyosu ve wellness alanına erişim.",
        "az": "Fitnes studiyası və wellness sahəsinə giriş.",
        "en": "Access to the fitness studio and wellness area.",
        "ru": "Доступ в фитнес-студию и wellness-зону."
      }
    },
    "src-basic-6m": {
      "names": {
        "tr": "Basic · 6 ay",
        "az": "Basic · 6 ay",
        "ru": "Basic · 6 мес.",
        "en": "Basic · 6 months"
      },
      "descriptions": {
        "tr": "Fitness stüdyosu ve wellness alanına erişim.",
        "az": "Fitnes studiyası və wellness sahəsinə giriş.",
        "en": "Access to the fitness studio and wellness area.",
        "ru": "Доступ в фитнес-студию и wellness-зону."
      }
    },
    "src-basic-12m": {
      "names": {
        "tr": "Basic · 12 ay",
        "az": "Basic · 12 ay",
        "ru": "Basic · 12 мес.",
        "en": "Basic · 12 months"
      },
      "descriptions": {
        "tr": "Fitness stüdyosu ve wellness alanına erişim.",
        "az": "Fitnes studiyası və wellness sahəsinə giriş.",
        "en": "Access to the fitness studio and wellness area.",
        "ru": "Доступ в фитнес-студию и wellness-зону."
      }
    },
    "src-fit-fun-3m": {
      "names": {
        "tr": "Fit&Fun · 3 ay",
        "az": "Fit&Fun · 3 ay",
        "ru": "Fit&Fun · 3 мес.",
        "en": "Fit&Fun · 3 months"
      },
      "descriptions": {
        "tr": "Resmî listede belirtilen grup derslerine erişim.",
        "az": "Rəsmi siyahıda göstərilən qrup dərslərinə giriş.",
        "en": "Access to the group classes listed by the venue.",
        "ru": "Доступ к групповым занятиям из каталога клуба."
      }
    },
    "src-fit-fun-6m": {
      "names": {
        "tr": "Fit&Fun · 6 ay",
        "az": "Fit&Fun · 6 ay",
        "ru": "Fit&Fun · 6 мес.",
        "en": "Fit&Fun · 6 months"
      },
      "descriptions": {
        "tr": "Resmî listede belirtilen grup derslerine erişim.",
        "az": "Rəsmi siyahıda göstərilən qrup dərslərinə giriş.",
        "en": "Access to the group classes listed by the venue.",
        "ru": "Доступ к групповым занятиям из каталога клуба."
      }
    },
    "src-fit-fun-12m": {
      "names": {
        "tr": "Fit&Fun · 12 ay",
        "az": "Fit&Fun · 12 ay",
        "ru": "Fit&Fun · 12 мес.",
        "en": "Fit&Fun · 12 months"
      },
      "descriptions": {
        "tr": "Resmî listede belirtilen grup derslerine erişim.",
        "az": "Rəsmi siyahıda göstərilən qrup dərslərinə giriş.",
        "en": "Access to the group classes listed by the venue.",
        "ru": "Доступ к групповым занятиям из каталога клуба."
      }
    },
    "src-gold-3m": {
      "names": {
        "tr": "Gold · 3 ay",
        "az": "Gold · 3 ay",
        "ru": "Gold · 3 мес.",
        "en": "Gold · 3 months"
      },
      "descriptions": {
        "tr": "Wellness alanı ve Fit&Fun grup programları.",
        "az": "Wellness sahəsi və Fit&Fun qrup proqramları.",
        "en": "Wellness access and Fit&Fun group programmes.",
        "ru": "Доступ в wellness-зону и групповые программы Fit&Fun."
      }
    },
    "src-gold-6m": {
      "names": {
        "tr": "Gold · 6 ay",
        "az": "Gold · 6 ay",
        "ru": "Gold · 6 мес.",
        "en": "Gold · 6 months"
      },
      "descriptions": {
        "tr": "Wellness alanı ve Fit&Fun grup programları.",
        "az": "Wellness sahəsi və Fit&Fun qrup proqramları.",
        "en": "Wellness access and Fit&Fun group programmes.",
        "ru": "Доступ в wellness-зону и групповые программы Fit&Fun."
      }
    },
    "src-gold-12m": {
      "names": {
        "tr": "Gold · 12 ay",
        "az": "Gold · 12 ay",
        "ru": "Gold · 12 мес.",
        "en": "Gold · 12 months"
      },
      "descriptions": {
        "tr": "Wellness alanı ve Fit&Fun grup programları.",
        "az": "Wellness sahəsi və Fit&Fun qrup proqramları.",
        "en": "Wellness access and Fit&Fun group programmes.",
        "ru": "Доступ в wellness-зону и групповые программы Fit&Fun."
      }
    },
    "pilates-3m": {
      "names": {
        "tr": "3 Aylık Pilates + 3 tesis girişi · demo",
        "az": "3 aylıq Pilates + 3 giriş · demo",
        "ru": "Пилатес 3 месяца + 3 входа · демо",
        "en": "3 months Pilates + 3 facility entries · demo"
      }
    },
    "fitness-body-demo": {
      "names": {
        "tr": "Bakım programı + salon erişimi · demo",
        "az": "Qulluq proqramı + zal girişi · demo",
        "ru": "Программа ухода + зал · демо",
        "en": "Body care programme + gym access · demo"
      }
    }
  },
  "classes": {
    "pilates-31": {
      "names": {
        "tr": "Mat Pilates",
        "az": "Mat Pilates",
        "ru": "Мат Пилатес",
        "en": "Mat Pilates"
      },
      "descriptions": {
        "tr": "Mat Pilates",
        "az": "Mat Pilates",
        "ru": "Мат Пилатес",
        "en": "Mat Pilates"
      }
    },
    "swimming-01": {
      "names": {
        "tr": "Yüzme başlangıç",
        "az": "Başlanğıc üzgüçülük",
        "ru": "Плавание для начинающих",
        "en": "Beginner swimming"
      },
      "descriptions": {
        "tr": "Yüzme başlangıç",
        "az": "Başlanğıc üzgüçülük",
        "ru": "Плавание для начинающих",
        "en": "Beginner swimming"
      }
    },
    "pilates-01": {
      "names": {
        "tr": "Mat Pilates",
        "az": "Mat Pilates",
        "ru": "Мат Пилатес",
        "en": "Mat Pilates"
      },
      "descriptions": {
        "tr": "Mat Pilates",
        "az": "Mat Pilates",
        "ru": "Мат Пилатес",
        "en": "Mat Pilates"
      }
    },
    "pilates-03": {
      "names": {
        "tr": "Mat Pilates",
        "az": "Mat Pilates",
        "ru": "Мат Пилатес",
        "en": "Mat Pilates"
      },
      "descriptions": {
        "tr": "Mat Pilates",
        "az": "Mat Pilates",
        "ru": "Мат Пилатес",
        "en": "Mat Pilates"
      }
    },
    "swimming-advanced-02": {
      "names": {
        "tr": "Yüzme devam",
        "az": "Davam üzgüçülük",
        "ru": "Продвинутое плавание",
        "en": "Continuing swimming"
      },
      "descriptions": {
        "tr": "Yüzme devam",
        "az": "Davam üzgüçülük",
        "ru": "Продвинутое плавание",
        "en": "Continuing swimming"
      }
    },
    "src-aerobics-1": {
      "names": {
        "tr": "Aerobik",
        "az": "Aerobika",
        "ru": "Аэробика",
        "en": "Aerobics"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-aerobics-2": {
      "names": {
        "tr": "Aerobik",
        "az": "Aerobika",
        "ru": "Аэробика",
        "en": "Aerobics"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-aqua-aerobics-1": {
      "names": {
        "tr": "Su aerobiği",
        "az": "Akvaaerobika",
        "ru": "Аквааэробика",
        "en": "Aqua aerobics"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-aqua-aerobics-2": {
      "names": {
        "tr": "Su aerobiği",
        "az": "Akvaaerobika",
        "ru": "Аквааэробика",
        "en": "Aqua aerobics"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-pilates-1": {
      "names": {
        "tr": "Pilates",
        "az": "Pilates",
        "ru": "Пилатес",
        "en": "Pilates"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-pilates-2": {
      "names": {
        "tr": "Pilates",
        "az": "Pilates",
        "ru": "Пилатес",
        "en": "Pilates"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-zumba-1": {
      "names": {
        "tr": "Zumba",
        "az": "Zumba",
        "ru": "Зумба",
        "en": "Zumba"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-zumba-2": {
      "names": {
        "tr": "Zumba",
        "az": "Zumba",
        "ru": "Зумба",
        "en": "Zumba"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-oriental-dance-1": {
      "names": {
        "tr": "Oryantal dans",
        "az": "Şərq rəqsləri",
        "ru": "Восточные танцы",
        "en": "Oriental dance"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-oriental-dance-2": {
      "names": {
        "tr": "Oryantal dans",
        "az": "Şərq rəqsləri",
        "ru": "Восточные танцы",
        "en": "Oriental dance"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-total-body-workout-1": {
      "names": {
        "tr": "Tüm vücut antrenmanı",
        "az": "Bütün bədən məşqi",
        "ru": "Тренировка всего тела",
        "en": "Total body workout"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    },
    "src-total-body-workout-2": {
      "names": {
        "tr": "Tüm vücut antrenmanı",
        "az": "Bütün bədən məşqi",
        "ru": "Тренировка всего тела",
        "en": "Total body workout"
      },
      "descriptions": {
        "tr": "Fit&Fun ile grup derslerine katılın. Ders programı ve katılım koşulları için ekipten bilgi alın.",
        "az": "Fit&Fun ilə qrup dərslərinə qoşulun. Cədvəl və iştirak qaydaları üçün komandadan məlumat alın.",
        "ru": "Групповое занятие Fit&Fun. Уточните расписание и порядок участия у команды.",
        "en": "Explore group classes with Fit&Fun. Ask the team about the timetable and how to take part."
      }
    }
  },
  "packageOffers": {
    "massage-5": {
      "names": {
        "tr": "5 Seans Sultan Masajı",
        "az": "5 seans Sultan masajı",
        "ru": "5 сеансов массажа",
        "en": "5 Sultan massage sessions"
      }
    },
    "wellness-10": {
      "names": {
        "tr": "10 Ders Wellness",
        "az": "10 wellness dərsi",
        "ru": "10 занятий",
        "en": "10 wellness classes"
      }
    },
    "massage-10-mixed": {
      "names": {
        "tr": "10 masaj + 2 pressoterapi · demo",
        "az": "10 masaj + 2 pressoterapiya · demo",
        "ru": "10 массажей + 2 прессотерапии · демо",
        "en": "10 massages + 2 pressotherapy sessions · demo"
      }
    },
    "src-massage-5": {
      "names": {
        "tr": "5 seans Sultan Saba mum masajı — Örnek paket",
        "az": "5 seans Sultan Saba şam masajı — Nümunə paket",
        "ru": "5 сеансов свечного массажа Sultan Saba — Пример пакета",
        "en": "5 Sultan Saba candle massage sessions · example package"
      },
      "descriptions": {
        "tr": "Sultan Saba mum masajı için beş seanslık örnek paket. Koşullar demo amaçlıdır.",
        "az": "Sultan Saba şam masajı üçün beş seanslıq nümunə paket. Şərtlər demo üçündür.",
        "ru": "Пример пакета из пяти сеансов свечного массажа Sultan Saba. Условия демонстрационные.",
        "en": "An example package of five Sultan Saba candle massage sessions. Terms are for the demo."
      }
    }
  },
  "giftOffers": {
    "gift-facial": {
      "names": {
        "tr": "Hediye Cilt Bakımı",
        "az": "Hədiyyə dəri qulluğu",
        "ru": "Подарочный уход",
        "en": "Gift facial"
      }
    },
    "gift-money": {
      "names": {
        "tr": "Hediye bakiyesi",
        "az": "Hədiyyə balansı",
        "ru": "Подарочный баланс",
        "en": "Gift balance"
      }
    }
  },
  "campaigns": {
    "autumn-care": {
      "names": {
        "tr": "Sonbahar bakım fırsatı",
        "az": "Payız qulluğu",
        "ru": "Осенний уход",
        "en": "Autumn care offer"
      }
    },
    "first-visit": {
      "names": {
        "tr": "İlk ziyaret",
        "az": "İlk ziyarət",
        "ru": "Первый визит",
        "en": "First visit"
      }
    }
  },
  "loyaltyRewards": {
    "tea-reward": {
      "names": {
        "tr": "Çay ikramı",
        "az": "Çay hədiyyəsi",
        "ru": "Чай в подарок",
        "en": "Complimentary tea"
      }
    },
    "facial-reward": {
      "names": {
        "tr": "Cilt bakımı hakkı",
        "az": "Dəri qulluğu haqqı",
        "ru": "Право на уход",
        "en": "Facial benefit"
      }
    }
  },
  "eventTypes": {
    "celebration": {
      "names": {
        "tr": "Grup kutlaması",
        "az": "Qrup bayramı",
        "ru": "Групповой праздник",
        "en": "Group celebration"
      }
    },
    "workshop": {
      "names": {
        "tr": "Wellness atölyesi",
        "az": "Wellness seminarı",
        "ru": "Оздоровительный мастер-класс",
        "en": "Wellness workshop"
      }
    },
    "henna": {
      "names": {
        "tr": "Kına etkinliği",
        "az": "Xına mərasimi",
        "ru": "Хна-вечеринка",
        "en": "Henna celebration"
      },
      "descriptions": {
        "tr": "Kına etkinliğiniz için özel bir buluşma planlayın. Program, davetli sayısı ve teklif için ekiple görüşün.",
        "az": "Xına mərasimi üçün özəl bir görüş planlaşdırın. Proqram, qonaq sayı və təklif üçün komanda ilə danışın.",
        "en": "Plan a gathering for your henna celebration. Speak with the team about the programme, guest numbers and a quote.",
        "ru": "Обсудите с командой программу праздника хны, число гостей и стоимость."
      }
    },
    "bridal-hamam": {
      "names": {
        "tr": "Gelin hamamı",
        "az": "Gəlin hamamı",
        "ru": "Свадебный хаммам",
        "en": "Bridal hamam"
      },
      "descriptions": {
        "tr": "Gelin hamamını birlikte planlayın. Program, davetli sayısı ve teklif için ekiple iletişime geçin.",
        "az": "Gəlin hamamını birlikdə planlaşdırın. Proqram, qonaq sayı və təklif üçün komanda ilə əlaqə saxlayın.",
        "en": "Plan a bridal hamam celebration. Contact the team to discuss the programme, guest numbers and a quote.",
        "ru": "Обсудите с командой программу свадебного хаммама, число гостей и стоимость."
      }
    },
    "birthday": {
      "names": {
        "tr": "Doğum günü",
        "az": "Ad günü",
        "ru": "День рождения",
        "en": "Birthday"
      }
    }
  },
  "retailProducts": {
    "rose-oil": {
      "names": {
        "tr": "Gül bakım yağı · demo ürün",
        "az": "Qızılgül qulluq yağı · demo məhsul",
        "ru": "Розовое масло · демо образец",
        "en": "Rose care oil · demo product"
      }
    },
    "body-scrub": {
      "names": {
        "tr": "Vücut peelingi · demo ürün",
        "az": "Bədən skrabı · demo məhsul",
        "ru": "Скраб для тела · демо образец",
        "en": "Body scrub · demo product"
      }
    },
    "la-sultan-de-saba-sample": {
      "names": {
        "tr": "La Sultan de Saba · temsili demo ürün",
        "az": "La Sultan de Saba · nümunə demo məhsul",
        "ru": "La Sultan de Saba · демонстрационный образец",
        "en": "La Sultan de Saba · illustrative demo product"
      }
    },
    "aroma-derm-sample": {
      "names": {
        "tr": "Aroma Derm · temsili demo ürün",
        "az": "Aroma Derm · nümunə demo məhsul",
        "ru": "Aroma Derm · демонстрационный образец",
        "en": "Aroma Derm · illustrative demo product"
      }
    }
  },
  "serviceCategories": {
    "massage": {
      "names": {
        "tr": "Masaj",
        "az": "Masaj",
        "ru": "Массаж",
        "en": "Massage"
      }
    },
    "hamam": {
      "names": {
        "tr": "Hamam ritüelleri",
        "az": "Hamam ritualları",
        "ru": "Ритуалы хаммама",
        "en": "Hamam rituals"
      }
    },
    "hair": {
      "names": {
        "tr": "Saç",
        "az": "Saç",
        "ru": "Волосы",
        "en": "Hair"
      }
    },
    "makeup": {
      "names": {
        "tr": "Makyaj",
        "az": "Makiyaj",
        "ru": "Макияж",
        "en": "Makeup"
      }
    },
    "brows-lashes": {
      "names": {
        "tr": "Kaş ve kirpik",
        "az": "Qaş və kirpik",
        "ru": "Брови и ресницы",
        "en": "Brows and lashes"
      }
    },
    "epilation": {
      "names": {
        "tr": "Epilasyon",
        "az": "Epilyasiya",
        "ru": "Эпиляция",
        "en": "Hair removal"
      }
    },
    "face": {
      "names": {
        "tr": "Yüz bakımı",
        "az": "Üz qulluğu",
        "ru": "Уход за лицом",
        "en": "Face care"
      }
    },
    "body": {
      "names": {
        "tr": "Vücut bakımı",
        "az": "Bədən qulluğu",
        "ru": "Уход за телом",
        "en": "Body care"
      }
    },
    "nails": {
      "names": {
        "tr": "Tırnak bakımı",
        "az": "Dırnaq qulluğu",
        "ru": "Уход за ногтями",
        "en": "Nail care"
      }
    },
    "cosmetology": {
      "names": {
        "tr": "Kozmetoloji",
        "az": "Kosmetologiya",
        "ru": "Косметология",
        "en": "Cosmetology"
      }
    }
  },
  "treatmentPrograms": {
    "body-program": {
      "names": {
        "tr": "Vücut bakımı programı",
        "az": "Bədən qulluğu proqramı",
        "ru": "Программа ухода за телом",
        "en": "Body care programme"
      }
    },
    "skin-program": {
      "names": {
        "tr": "Yüz bakımı programı",
        "az": "Üz qulluğu proqramı",
        "ru": "Программа ухода за лицом",
        "en": "Facial care programme"
      }
    }
  },
  "officialMapping": {
    "pressotherapy": {
      "names": {
        "tr": null,
        "az": null,
        "ru": null,
        "en": "Pressotherapy"
      }
    },
    "pilates": {
      "names": {
        "tr": null,
        "az": null,
        "ru": null,
        "en": "Mat Pilates"
      }
    }
  },
  "specialists": {
    "lala": {
      "names": {
        "tr": "Lala M.",
        "az": "Lala M.",
        "ru": "Lala M.",
        "en": "Lala M."
      },
      "roles": {
        "tr": "Demo uzman",
        "az": "Demo mütəxəssis",
        "ru": "Демо-специалист",
        "en": "Demo specialist"
      }
    },
    "aylin": {
      "names": {
        "tr": "Aylin A.",
        "az": "Aylin A.",
        "ru": "Aylin A.",
        "en": "Aylin A."
      },
      "roles": {
        "tr": "Demo uzman",
        "az": "Demo mütəxəssis",
        "ru": "Демо-специалист",
        "en": "Demo specialist"
      }
    },
    "nigar": {
      "names": {
        "tr": "Nigar S.",
        "az": "Nigar S.",
        "ru": "Nigar S.",
        "en": "Nigar S."
      },
      "roles": {
        "tr": "Demo uzman",
        "az": "Demo mütəxəssis",
        "ru": "Демо-специалист",
        "en": "Demo specialist"
      }
    }
  },
  "cafeProducts": {
    "salatlar-01": {
      "names": {
        "tr": "Dana etli salata",
        "az": "Beef salatı",
        "ru": "Салат с говядиной",
        "en": "Beef salad"
      },
      "descriptions": {
        "tr": "marul, karışık yeşillik, domates, salatalık, salatalık turşusu, bonfile, parmesan peyniri, sos",
        "az": "kahı, qarışıq göyərti, pomidor, xiyar, turşu xiyar, can əti, parmesan pendiri, sous",
        "ru": "салат-латук, зелень, помидоры, огурец, маринованный огурец, вырезка, сыр пармезан, соус",
        "en": "lettuce, mixed greens, tomato, cucumber, pickled cucumber, tenderloin, Parmesan cheese, sauce"
      }
    },
    "salatlar-02": {
      "names": {
        "tr": "Yunan salatası",
        "az": "Yunan salatı",
        "ru": "Греческий салат",
        "en": "Greek salad"
      },
      "descriptions": {
        "tr": "domates, salatalık, karışık biber, zeytin, peynir, marul, sos",
        "az": "pomidor, xiyar, qarışıq bibər, zeytun, pendir, kahı, sous",
        "ru": "помидоры, огурец, смесь перцев, оливки, сыр, салат-латук, соус",
        "en": "tomato, cucumber, mixed peppers, olives, cheese, lettuce, sauce"
      }
    },
    "salatlar-03": {
      "names": {
        "tr": "Çoban salatası",
        "az": "Çoban salatı",
        "ru": "Чобан-салат",
        "en": "Shepherd salad"
      },
      "descriptions": {
        "tr": "karışık yeşillik, domates, salatalık, sos",
        "az": "qarışıq göyərti, pomidor, xiyar, sous",
        "ru": "зелень, помидоры, огурец, соус",
        "en": "mixed greens, tomato, cucumber, sauce"
      }
    },
    "salatlar-04": {
      "names": {
        "tr": "Dil salatası",
        "az": "Dil salatı",
        "ru": "Салат с языком",
        "en": "Tongue salad"
      },
      "descriptions": {
        "tr": "marul, karışık yeşillik, elma, salatalık, biber",
        "az": "kahı, qarışıq göyərti, alma, xiyar, bibər",
        "ru": "салат-латук, зелень, яблоко, огурец, перец",
        "en": "lettuce, mixed greens, apple, cucumber, pepper"
      }
    },
    "salatlar-05": {
      "names": {
        "tr": "Thai beef salatası",
        "az": "Thai beef salatı",
        "ru": "Тайский салат с говядиной",
        "en": "Thai beef salad"
      },
      "descriptions": {
        "tr": "dil, kırmızı soğan, domates, salatalık, yeşil soğan, karışık yeşillik, çili biber",
        "az": "dil, qırmızı soğan, pomidor, xiyar, yaşıl soğan, qarışıq göyərti, çili bibər",
        "ru": "язык, красный лук, помидоры, огурец, зелёный лук, зелень, перец чили",
        "en": "tongue, red onion, tomato, cucumber, spring onion, mixed greens, chilli pepper"
      }
    },
    "salatlar-06": {
      "names": {
        "tr": "Kinoa salatası",
        "az": "Kinoa salatı",
        "ru": "Салат с киноа",
        "en": "Quinoa salad"
      },
      "descriptions": {
        "tr": "kinoa, ızgara tavuk, avokado, nar, yeşil fasulye, ekşi sos",
        "az": "kinoa, qril toyuq, avokado, nar, yaşıl lobya, turşulu sous",
        "ru": "киноа, курица на гриле, авокадо, гранат, стручковая фасоль, кислый соус",
        "en": "quinoa, grilled chicken, avocado, pomegranate, green beans, sour dressing"
      }
    },
    "salatlar-07": {
      "names": {
        "tr": "Kremalı tavuk salatası",
        "az": "Qaymaqlı toyuq salatı",
        "ru": "Салат с курицей и сливками",
        "en": "Creamy chicken salad"
      },
      "descriptions": {
        "tr": "krema, tavuk, karışık yeşillik, marul, kinoa, patlıcan, domates",
        "az": "qaymaq, toyuq, qarışıq göyərti, kahı, kinoa, badımcan, pomidor",
        "ru": "сливки, курица, зелень, салат-латук, киноа, баклажан, помидоры",
        "en": "cream, chicken, mixed greens, lettuce, quinoa, aubergine, tomato"
      }
    },
    "salatlar-08": {
      "names": {
        "tr": "Sezar salatası (somon)",
        "az": "Sezar salatı (salmon)",
        "ru": "Салат Цезарь (лосось)",
        "en": "Caesar salad (salmon)"
      },
      "descriptions": {
        "tr": "marul, kruton, domates, parmesan peyniri, Sezar sosu, somon",
        "az": "kahı, suxarı, pomidor, parmesan pendiri, sezar sousu, salmon",
        "ru": "салат-латук, сухарики, помидоры, сыр пармезан, соус Цезарь, лосось",
        "en": "lettuce, croutons, tomato, Parmesan cheese, Caesar dressing, salmon"
      }
    },
    "salatlar-09": {
      "names": {
        "tr": "Sezar salatası (karides)",
        "az": "Sezar salatı (krevetka)",
        "ru": "Салат Цезарь (креветки)",
        "en": "Caesar salad (shrimp)"
      },
      "descriptions": {
        "tr": "marul, kruton, domates, parmesan peyniri, Sezar sosu, karides",
        "az": "kahı, suxarı, pomidor, parmesan pendiri, sezar sousu, krevetka",
        "ru": "салат-латук, сухарики, помидоры, сыр пармезан, соус Цезарь, креветки",
        "en": "lettuce, croutons, tomato, Parmesan cheese, Caesar dressing, shrimp"
      }
    },
    "salatlar-10": {
      "names": {
        "tr": "Sezar salatası (tavuk)",
        "az": "Sezar salatı (toyuq)",
        "ru": "Салат Цезарь (курица)",
        "en": "Caesar salad (chicken)"
      },
      "descriptions": {
        "tr": "marul, kruton, domates, parmesan peyniri, Sezar sosu, tavuk",
        "az": "kahı, suxarı, pomidor, parmesan pendiri, sezar sousu, toyuq",
        "ru": "салат-латук, сухарики, помидоры, сыр пармезан, соус Цезарь, курица",
        "en": "lettuce, croutons, tomato, Parmesan cheese, Caesar dressing, chicken"
      }
    },
    "salatlar-11": {
      "names": {
        "tr": "Sweet chilli tavuk salatası",
        "az": "Sweet chilli toyuq salatı",
        "ru": "Салат с курицей Sweet chilli",
        "en": "Sweet chilli chicken salad"
      },
      "descriptions": {
        "tr": "tavuk fileto, havuç, yeşil soğan, karışık yeşillik, karışık biber, kurutulmuş domates, sos",
        "az": "toyuq file, kök, yaşıl soğan, qarışıq göyərti, qarışıq bibər, qurudulmuş pomidor, sous",
        "ru": "куриное филе, морковь, зелёный лук, зелень, смесь перцев, вяленые помидоры, соус",
        "en": "chicken fillet, carrot, spring onion, mixed greens, mixed peppers, sun-dried tomato, sauce"
      }
    },
    "salatlar-12": {
      "names": {
        "tr": "Somon salatası",
        "az": "Salmon salatı",
        "ru": "Салат с лососем",
        "en": "Salmon salad"
      },
      "descriptions": {
        "tr": "somon, havuç, portakal, karışık yeşillik",
        "az": "salmon, kök, portağal, qarışıq göyərti",
        "ru": "лосось, морковь, апельсин, зелень",
        "en": "salmon, carrot, orange, mixed greens"
      }
    },
    "salatlar-13": {
      "names": {
        "tr": "Izgara somon salatası",
        "az": "Qril salmon salatı",
        "ru": "Салат с лососем на гриле",
        "en": "Grilled salmon salad"
      },
      "descriptions": {
        "tr": "somon, marul, karışık yeşillik, portakal, çörek otu, sos",
        "az": "salmon, kahı, qarışıq göyərti, portağal, çörək otu, sous",
        "ru": "лосось, салат-латук, зелень, апельсин, чернушка, соус",
        "en": "salmon, lettuce, mixed greens, orange, nigella seeds, sauce"
      }
    },
    "salatlar-14": {
      "names": {
        "tr": "Deniz ürünleri salatası",
        "az": "Sea food salatı",
        "ru": "Салат с морепродуктами",
        "en": "Seafood salad"
      },
      "descriptions": {
        "tr": "karışık deniz ürünleri, karışık yeşillik, domates, salatalık turşusu, kızılcık turşusu",
        "az": "qarışıq dəniz məhsulları, qarışıq göyərti, pomidor, turşu xiyar, zoğal turşusu",
        "ru": "морепродукты, зелень, помидоры, маринованный огурец, маринованный кизил",
        "en": "mixed seafood, mixed greens, tomato, pickled cucumber, pickled cornelian cherry"
      }
    },
    "salatlar-15": {
      "names": {
        "tr": "Ton balığı salatası",
        "az": "Tuna salatı",
        "ru": "Салат с тунцом",
        "en": "Tuna salad"
      },
      "descriptions": {
        "tr": "ton balığı, kırmızı soğan, marul, patates, zeytin, domates, salatalık, salatalık turşusu, biber, sos",
        "az": "tuna, qırmızı soğan, kahı, kartof, zeytun, pomidor, xiyar, turşu xiyar, bibər, sous",
        "ru": "тунец, красный лук, салат-латук, картофель, оливки, помидоры, огурец, маринованный огурец, перец, соус",
        "en": "tuna, red onion, lettuce, potato, olives, tomato, cucumber, pickled cucumber, pepper, sauce"
      }
    },
    "salatlar-16": {
      "names": {
        "tr": "Marine levrek salatası",
        "az": "Levrek marine salatı",
        "ru": "Салат с маринованным сибасом",
        "en": "Marinated sea bass salad"
      },
      "descriptions": {
        "tr": "levrek, marul, beyaz soğan, karışık yeşillik, sos",
        "az": "levrek, kahı, ağ soğan, qarışıq göyərti, sous",
        "ru": "сибас, салат-латук, белый лук, зелень, соус",
        "en": "sea bass, lettuce, white onion, mixed greens, sauce"
      }
    },
    "salatlar-17": {
      "names": {
        "tr": "Izgara levrek salatası",
        "az": "Qril levrek salatı",
        "ru": "Салат с сибасом на гриле",
        "en": "Grilled sea bass salad"
      },
      "descriptions": {
        "tr": "marul, domates, salatalık, kızılcık, yeşillik, zeytinyağı",
        "az": "kahı, pomidor, xiyar, zoğal, göyərti, zeytun yağı",
        "ru": "салат-латук, помидоры, огурец, кизил, зелень, оливковое масло",
        "en": "lettuce, tomato, cucumber, cornelian cherry, greens, olive oil"
      }
    },
    "salatlar-18": {
      "names": {
        "tr": "Yeşil salata",
        "az": "Yaşıl salat",
        "ru": "Зелёный салат",
        "en": "Green salad"
      },
      "descriptions": {
        "tr": "marul, karışık yeşillik, elma, salatalık, biber",
        "az": "kahı, qarışıq göyərti, alma, xiyar, bibər",
        "ru": "салат-латук, зелень, яблоко, огурец, перец",
        "en": "lettuce, mixed greens, apple, cucumber, pepper"
      }
    },
    "salatlar-19": {
      "names": {
        "tr": "Sultan Saba salatası",
        "az": "Sultan Saba salatı",
        "ru": "Салат Султан Саба",
        "en": "Sultan Saba salad"
      },
      "descriptions": {
        "tr": "pancar, havuç, zeytin, karışık yeşillik, tavuk eti, sos",
        "az": "çuğundur, kök, zeytun, qarışıq göyərti, toyuq əti, sous",
        "ru": "свёкла, морковь, оливки, зелень, мясо курицы, соус",
        "en": "beetroot, carrot, olives, mixed greens, chicken meat, sauce"
      }
    },
    "suplar-01": {
      "names": {
        "tr": "Mercimek çorbası",
        "az": "Mərci supu",
        "ru": "Чечевичный суп",
        "en": "Lentil soup"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "suplar-02": {
      "names": {
        "tr": "Brokoli çorbası",
        "az": "Brokoli supu",
        "ru": "Суп из брокколи",
        "en": "Broccoli soup"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "suplar-03": {
      "names": {
        "tr": "Mantar çorbası",
        "az": "Göbələk supu",
        "ru": "Грибной суп",
        "en": "Mushroom soup"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "suplar-04": {
      "names": {
        "tr": "Domates çorbası",
        "az": "Tomat supu",
        "ru": "Томатный суп",
        "en": "Tomato soup"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "sendvicler-01": {
      "names": {
        "tr": "Club sandviç ve patates kızartması",
        "az": "Club sandwich & kartof fri",
        "ru": "Клаб-сэндвич и картофель фри",
        "en": "Club sandwich and fries"
      },
      "descriptions": {
        "tr": "tost ekmeği, fileto, domates, salatalık, marul, mayonez",
        "az": "tost, file, pomidor, xiyar, kahı, mayonez",
        "ru": "тост, филе, помидоры, огурец, салат-латук, майонез",
        "en": "toast bread, fillet, tomato, cucumber, lettuce, mayonnaise"
      }
    },
    "sendvicler-02": {
      "names": {
        "tr": "Somon sandviç",
        "az": "Salmon sandwich",
        "ru": "Сэндвич с лососем",
        "en": "Salmon sandwich"
      },
      "descriptions": {
        "tr": "somon, salatalık, salatalık turşusu, marul, labne",
        "az": "salmon, xiyar, turşu xiyar, kahı, labne",
        "ru": "лосось, огурец, маринованный огурец, салат-латук, лабне",
        "en": "salmon, cucumber, pickled cucumber, lettuce, labneh"
      }
    },
    "qelyanaltilar-01": {
      "names": {
        "tr": "Yumurta",
        "az": "Qayğanaq",
        "ru": "Яичница",
        "en": "Eggs"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qelyanaltilar-02": {
      "names": {
        "tr": "Nugget",
        "az": "Naggets",
        "ru": "Наггетсы",
        "en": "Nuggets"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qelyanaltilar-03": {
      "names": {
        "tr": "Mevsim sebzeleri (ızgara)",
        "az": "Mövsüm tərəvəzlər (qril)",
        "ru": "Сезонные овощи на гриле",
        "en": "Grilled seasonal vegetables"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qelyanaltilar-04": {
      "names": {
        "tr": "Peynir tabağı",
        "az": "Pendir assorti",
        "ru": "Сырное ассорти",
        "en": "Cheese platter"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qelyanaltilar-05": {
      "names": {
        "tr": "Domatesli yumurta",
        "az": "Pomidor-yumurta",
        "ru": "Яйца с помидорами",
        "en": "Eggs with tomatoes"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qelyanaltilar-06": {
      "names": {
        "tr": "Dukan krep (tavuk)",
        "az": "Dukan blinçik (toyuq)",
        "ru": "Блинчик Дюкан (курица)",
        "en": "Dukan pancake (chicken)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qelyanaltilar-07": {
      "names": {
        "tr": "Dukan krep (et)",
        "az": "Dukan blinçik (ət)",
        "ru": "Блинчик Дюкан (мясо)",
        "en": "Dukan pancake (meat)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qelyanaltilar-08": {
      "names": {
        "tr": "Dukan krep (somon)",
        "az": "Dukan blinçik (salmon)",
        "ru": "Блинчик Дюкан (лосось)",
        "en": "Dukan pancake (salmon)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qelyanaltilar-09": {
      "names": {
        "tr": "Guacamole",
        "az": "Quakamole",
        "ru": "Гуакамоле",
        "en": "Guacamole"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "toyuq-01": {
      "names": {
        "tr": "Izgara tavuk",
        "az": "Toyuq qril",
        "ru": "Курица на гриле",
        "en": "Grilled chicken"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "toyuq-02": {
      "names": {
        "tr": "Barbekü tavuk",
        "az": "Toyuq barbekü",
        "ru": "Курица барбекю",
        "en": "Barbecue chicken"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "toyuq-03": {
      "names": {
        "tr": "Tavuk stroganoff",
        "az": "Toyuq strogonoff",
        "ru": "Бефстроганов из курицы",
        "en": "Chicken stroganoff"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "toyuq-04": {
      "names": {
        "tr": "Tavuk şnitzel",
        "az": "Toyuq schnitzel",
        "ru": "Куриный шницель",
        "en": "Chicken schnitzel"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "et-01": {
      "names": {
        "tr": "Et stroganoff",
        "az": "Ət strogonoff",
        "ru": "Бефстроганов",
        "en": "Beef stroganoff"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "et-02": {
      "names": {
        "tr": "Langet",
        "az": "Langet",
        "ru": "Лангет",
        "en": "Langet"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "et-03": {
      "names": {
        "tr": "Sultan Saba biftek",
        "az": "Sultan Saba steyk",
        "ru": "Стейк Султан Саба",
        "en": "Sultan Saba steak"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "baliq-01": {
      "names": {
        "tr": "Izgara levrek",
        "az": "Levrek ızqara",
        "ru": "Сибас на гриле",
        "en": "Grilled sea bass"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "baliq-02": {
      "names": {
        "tr": "Izgara somon",
        "az": "Qızıl balıq qril",
        "ru": "Лосось на гриле",
        "en": "Grilled salmon"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "krevetka-01": {
      "names": {
        "tr": "Karides tempura",
        "az": "Krevetka tempura",
        "ru": "Креветки темпура",
        "en": "Shrimp tempura"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "makaron-01": {
      "names": {
        "tr": "Spagetti bolonez",
        "az": "Spagetti-bolonez",
        "ru": "Спагетти болоньезе",
        "en": "Spaghetti Bolognese"
      },
      "descriptions": {
        "tr": "et, spagetti, mozzarella peyniri",
        "az": "ət, spagetti, mozarella pendiri",
        "ru": "мясо, спагетти, сыр моцарелла",
        "en": "meat, spaghetti, mozzarella cheese"
      }
    },
    "qarnirler-01": {
      "names": {
        "tr": "Pirinç",
        "az": "Düyü",
        "ru": "Рис",
        "en": "Rice"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qarnirler-02": {
      "names": {
        "tr": "Bulgur",
        "az": "Bulqur",
        "ru": "Булгур",
        "en": "Bulgur"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qarnirler-03": {
      "names": {
        "tr": "Spagetti",
        "az": "Spagetti",
        "ru": "Спагетти",
        "en": "Spaghetti"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qarnirler-04": {
      "names": {
        "tr": "Köy usulü patates",
        "az": "Kənd üsulu kartof",
        "ru": "Картофель по-деревенски",
        "en": "Country style potatoes"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qarnirler-05": {
      "names": {
        "tr": "Karabuğday",
        "az": "Qarabaşaq",
        "ru": "Гречка",
        "en": "Buckwheat"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qarnirler-06": {
      "names": {
        "tr": "Püre",
        "az": "Püre",
        "ru": "Пюре",
        "en": "Mash"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "qarnirler-07": {
      "names": {
        "tr": "Sebzeli pirinç",
        "az": "Tərəvəzli düyü",
        "ru": "Рис с овощами",
        "en": "Rice with vegetables"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "caylar-01": {
      "names": {
        "tr": "Çay takımı",
        "az": "Çay dəstgahı",
        "ru": "Чайный набор",
        "en": "Tea set"
      },
      "descriptions": {
        "tr": "semaver çayı, leblebi, kuru meyve, reçel, çikolata, limon, tatlı",
        "az": "samovar çayı, ləb-ləbi, quru meyvə, mürəbbə, şokolad, limon, şirniyyat",
        "ru": "чай из самовара, жареный нут, сухофрукты, варенье, шоколад, лимон, сладости",
        "en": "samovar tea, roasted chickpeas, dried fruit, jam, chocolate, lemon, sweets"
      }
    },
    "caylar-02": {
      "names": {
        "tr": "Yeşil çay (demlik)",
        "az": "Yaşıl çay (çaynik)",
        "ru": "Зелёный чай (чайник)",
        "en": "Green tea (teapot)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "caylar-03": {
      "names": {
        "tr": "Yeşil çay (bardak)",
        "az": "Yaşıl çay (stəkan)",
        "ru": "Зелёный чай (стакан)",
        "en": "Green tea (glass)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "caylar-04": {
      "names": {
        "tr": "Siyah çay (demlik)",
        "az": "Qara çay (çaynik)",
        "ru": "Чёрный чай (чайник)",
        "en": "Black tea (teapot)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "caylar-05": {
      "names": {
        "tr": "Siyah çay (bardak)",
        "az": "Qara çay (stəkan)",
        "ru": "Чёрный чай (стакан)",
        "en": "Black tea (glass)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "caylar-06": {
      "names": {
        "tr": "Detoks çayı (demlik)",
        "az": "Detoks çay (çaynik)",
        "ru": "Детокс-чай (чайник)",
        "en": "Detox tea (teapot)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "caylar-07": {
      "names": {
        "tr": "Detoks çayı (bardak)",
        "az": "Detoks çay (stəkan)",
        "ru": "Детокс-чай (стакан)",
        "en": "Detox tea (glass)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "soyuq-ickiler-01": {
      "names": {
        "tr": "Ayran",
        "az": "Ayran",
        "ru": "Айран",
        "en": "Ayran"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "soyuq-ickiler-02": {
      "names": {
        "tr": "Erikli 0,5 l",
        "az": "Erikli 0.5l",
        "ru": "Erikli 0,5 л",
        "en": "Erikli 0.5 l"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "soyuq-ickiler-03": {
      "names": {
        "tr": "Erikli 1 l",
        "az": "Erikli 1l",
        "ru": "Erikli 1 л",
        "en": "Erikli 1 l"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "soyuq-ickiler-04": {
      "names": {
        "tr": "Fanta, Cola, Sprite, Ice tea",
        "az": "Fanta, Cola, Sprite, İce tea",
        "ru": "Fanta, Cola, Sprite, Ice tea",
        "en": "Fanta, Cola, Sprite, iced tea"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "soyuq-ickiler-05": {
      "names": {
        "tr": "Sarı qız",
        "az": "Sarı qız",
        "ru": "Sarı qız",
        "en": "Sarı qız"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "soyuq-ickiler-06": {
      "names": {
        "tr": "Red Bull",
        "az": "Red bull",
        "ru": "Red Bull",
        "en": "Red Bull"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "soyuq-ickiler-07": {
      "names": {
        "tr": "Mojito",
        "az": "Mohito",
        "ru": "Мохито",
        "en": "Mojito"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "soyuq-ickiler-08": {
      "names": {
        "tr": "Enerji",
        "az": "Enerji",
        "ru": "Энергия",
        "en": "Energy"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "kofe-01": {
      "names": {
        "tr": "Americano",
        "az": "Amerikano",
        "ru": "Американо",
        "en": "Americano"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "kofe-02": {
      "names": {
        "tr": "Cappuccino",
        "az": "Cappucino",
        "ru": "Капучино",
        "en": "Cappuccino"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "kofe-03": {
      "names": {
        "tr": "Espresso",
        "az": "Espresso",
        "ru": "Эспрессо",
        "en": "Espresso"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "kofe-04": {
      "names": {
        "tr": "Double espresso",
        "az": "Espresso double",
        "ru": "Двойной эспрессо",
        "en": "Double espresso"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "kofe-05": {
      "names": {
        "tr": "Sütlü kahve, Nescafé",
        "az": "Südlü kofe, nescafe",
        "ru": "Кофе с молоком, Nescafé",
        "en": "Coffee with milk, Nescafé"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "kofe-06": {
      "names": {
        "tr": "Latte",
        "az": "Latte",
        "ru": "Латте",
        "en": "Latte"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "kofe-07": {
      "names": {
        "tr": "Türk kahvesi",
        "az": "Türk kofesi",
        "ru": "Турецкий кофе",
        "en": "Turkish coffee"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "kofe-08": {
      "names": {
        "tr": "Double Türk kahvesi",
        "az": "Türk kofesi double",
        "ru": "Двойной турецкий кофе",
        "en": "Double Turkish coffee"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "murebbeler-01": {
      "names": {
        "tr": "Reçel çeşitleri",
        "az": "Mürəbbə assorti",
        "ru": "Ассорти варенья",
        "en": "Assorted jam"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "murebbeler-02": {
      "names": {
        "tr": "Reçel (küçük)",
        "az": "Mürəbbə balaca",
        "ru": "Варенье (маленькое)",
        "en": "Jam (small)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "murebbeler-03": {
      "names": {
        "tr": "Reçel (büyük)",
        "az": "Mürəbbə böyük",
        "ru": "Варенье (большое)",
        "en": "Jam (large)"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "meyve-siresi-01": {
      "names": {
        "tr": "Elma",
        "az": "Alma",
        "ru": "Яблоко",
        "en": "Apple"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "meyve-siresi-02": {
      "names": {
        "tr": "Portakal",
        "az": "Portağal",
        "ru": "Апельсин",
        "en": "Orange"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "meyve-siresi-03": {
      "names": {
        "tr": "Ananas",
        "az": "Ananas",
        "ru": "Ананас",
        "en": "Pineapple"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "meyve-siresi-04": {
      "names": {
        "tr": "Greyfurt",
        "az": "Qreypfrut",
        "ru": "Грейпфрут",
        "en": "Grapefruit"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "meyve-siresi-05": {
      "names": {
        "tr": "Havuç",
        "az": "Kök",
        "ru": "Морковь",
        "en": "Carrot"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "meyve-siresi-06": {
      "names": {
        "tr": "Yeşil detoks",
        "az": "Yaşıl detoks",
        "ru": "Зелёный детокс",
        "en": "Green detox"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "meyve-siresi-07": {
      "names": {
        "tr": "Nar",
        "az": "Nar",
        "ru": "Гранат",
        "en": "Pomegranate"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "meyve-siresi-08": {
      "names": {
        "tr": "Karışık",
        "az": "Miks",
        "ru": "Микс",
        "en": "Mixed"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "tatlilar-meyve-01": {
      "names": {
        "tr": "Elmalı tart",
        "az": "Apple pie",
        "ru": "Яблочный пирог",
        "en": "Apple pie"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "tatlilar-meyve-02": {
      "names": {
        "tr": "Kurabiye",
        "az": "Peçenye",
        "ru": "Печенье",
        "en": "Cookies"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "tatlilar-meyve-03": {
      "names": {
        "tr": "Kuru meyve, leblebi, şeker (küçük)",
        "az": "Meyvə qurusu, ləb-ləbi, konfet (balaca)",
        "ru": "Сухофрукты, жареный нут, конфеты (маленькая порция)",
        "en": "Dried fruit, roasted chickpeas, sweets (small)"
      },
      "descriptions": {
        "tr": "küçük",
        "az": "balaca",
        "ru": "маленькая порция",
        "en": "small"
      }
    },
    "tatlilar-meyve-04": {
      "names": {
        "tr": "Kuru meyve, leblebi, şeker (büyük)",
        "az": "Meyvə qurusu, ləb-ləbi, konfet (böyük)",
        "ru": "Сухофрукты, жареный нут, конфеты (большая порция)",
        "en": "Dried fruit, roasted chickpeas, sweets (large)"
      },
      "descriptions": {
        "tr": "büyük",
        "az": "böyük",
        "ru": "большая порция",
        "en": "large"
      }
    },
    "tatlilar-meyve-05": {
      "names": {
        "tr": "Cheesecake",
        "az": "Cheescake",
        "ru": "Чизкейк",
        "en": "Cheesecake"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "tatlilar-meyve-06": {
      "names": {
        "tr": "Napolyon",
        "az": "Napalyon",
        "ru": "Наполеон",
        "en": "Napoleon"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "tatlilar-meyve-07": {
      "names": {
        "tr": "Mevsim meyveleri",
        "az": "Mövsüm meyvələri",
        "ru": "Сезонные фрукты",
        "en": "Seasonal fruit"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "tatlilar-meyve-08": {
      "names": {
        "tr": "Meyve çelengi",
        "az": "Meyvə çələngi",
        "ru": "Фруктовый венок",
        "en": "Fruit wreath"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    },
    "tatlilar-meyve-09": {
      "names": {
        "tr": "Sultan Saba tatlısı",
        "az": "Sultan Saba deserti",
        "ru": "Десерт Султан Саба",
        "en": "Sultan Saba dessert"
      },
      "descriptions": {
        "tr": "Kaynak menüde içerik ayrıntısı belirtilmemiştir.",
        "az": "Mənbə menyuda tərkib detalları göstərilməyib.",
        "ru": "Подробный состав в исходном меню не указан.",
        "en": "The source menu does not list ingredient details."
      }
    }
  },
  "cafeCategories": {
    "salatlar": {
      "names": {
        "tr": "Salatalar",
        "az": "Salatlar",
        "ru": "Салаты",
        "en": "Salads"
      }
    },
    "suplar": {
      "names": {
        "tr": "Çorbalar",
        "az": "Suplar",
        "ru": "Супы",
        "en": "Soups"
      }
    },
    "sendvicler": {
      "names": {
        "tr": "Sandviçler",
        "az": "Sendviçlər",
        "ru": "Сэндвичи",
        "en": "Sandwiches"
      }
    },
    "qelyanaltilar": {
      "names": {
        "tr": "Atıştırmalıklar",
        "az": "Qəlyanaltılar",
        "ru": "Закуски",
        "en": "Snacks"
      }
    },
    "toyuq": {
      "names": {
        "tr": "Tavuk",
        "az": "Toyuq",
        "ru": "Курица",
        "en": "Chicken"
      }
    },
    "et": {
      "names": {
        "tr": "Et",
        "az": "Ət",
        "ru": "Мясо",
        "en": "Meat"
      }
    },
    "baliq": {
      "names": {
        "tr": "Balık",
        "az": "Balıq",
        "ru": "Рыба",
        "en": "Fish"
      }
    },
    "krevetka": {
      "names": {
        "tr": "Karides",
        "az": "Krevetka",
        "ru": "Креветки",
        "en": "Shrimp"
      }
    },
    "makaron": {
      "names": {
        "tr": "Makarna",
        "az": "Makaron",
        "ru": "Макароны",
        "en": "Pasta"
      }
    },
    "qarnirler": {
      "names": {
        "tr": "Garnitürler",
        "az": "Qarnirlər",
        "ru": "Гарниры",
        "en": "Sides"
      }
    },
    "caylar": {
      "names": {
        "tr": "Çaylar",
        "az": "Çaylar",
        "ru": "Чай",
        "en": "Tea"
      }
    },
    "soyuq-ickiler": {
      "names": {
        "tr": "Soğuk içecekler",
        "az": "Soyuq içkilər",
        "ru": "Холодные напитки",
        "en": "Cold drinks"
      }
    },
    "kofe": {
      "names": {
        "tr": "Kahve",
        "az": "Kofe",
        "ru": "Кофе",
        "en": "Coffee"
      }
    },
    "murebbeler": {
      "names": {
        "tr": "Reçeller",
        "az": "Mürəbbələr",
        "ru": "Варенье",
        "en": "Jams"
      }
    },
    "meyve-siresi": {
      "names": {
        "tr": "Meyve suyu",
        "az": "Meyvə şirəsi",
        "ru": "Фруктовые соки",
        "en": "Fruit juice"
      }
    },
    "tatlilar-meyve": {
      "names": {
        "tr": "Tatlılar / Meyve",
        "az": "Tatlılar / Meyvə",
        "ru": "Десерты / Фрукты",
        "en": "Desserts / Fruit"
      }
    }
  }
};
for(const [group,items] of Object.entries(contentTranslations))for(const [id,fields] of Object.entries(items)){
 const item=(catalogue[group]||[]).find(x=>x.id===id);if(item)Object.assign(item,fields);
}
for(const group of ['services','informationItems','supplements'])for(const item of catalogue[group]||[]){
 const category=item.categoryId||({Masaj:'massage',Hamam:'hamam','Cilt bakımı':'face','Güzellik':'hair'}[item.category])||item.category;
 item.mediaSubjectId=category==='massage'?'massage':category==='hamam'?'hamam':category==='hair'?'hair':category==='nails'?'beauty':'face';
}
for(const item of catalogue.services||[])for(const variant of item.variants||[]){
 variant.labels=Object.assign({tr:variant.duration+' dakika',az:variant.duration+' dəqiqə',ru:variant.duration+' минут',en:variant.duration+' minutes'},variant.labels);
 variant.labels.en=variant.duration+' minutes';
}
for(const item of catalogue.services||[])for(const extra of item.addOns||[]){
 const source=(catalogue.supplements||[]).find(s=>s.id===extra.id||s.id===extra.supplementId);
 if(source){extra.names=Object.assign({},source.names);extra.descriptions=Object.assign({},source.descriptions);}
 else{const en={'hot-stones':'Hot stones','body-mask':'Body mask','face-mask':'Moisturising mask','hair-oil':'Nourishing care',shellac:'Shellac · demo add-on','shellac-removal':'Removal · demo'}[extra.id];if(en)extra.names=Object.assign({},extra.names,{en});}
}
// The source specifies these durations but no procedure steps; keep that limit explicit.
for(const [id,minutes] of [['src-shirodhara-massage',70],['src-prestige-facial',70],['src-express-skin-burst-up-care',30]]){
 const item=catalogue.services.find(x=>x.id===id);
 item.descriptions={tr:item.names.tr+'. Kaynak listede '+minutes+' dakikalık seans olarak yer alır. Uygulama adımlarını uzmanla görüşün.',az:item.names.az+'. Mənbə siyahıda '+minutes+' dəqiqəlik seans kimi göstərilir. Prosedur mərhələlərini mütəxəssislə müzakirə edin.',ru:item.names.ru+'. В исходном каталоге указан сеанс '+minutes+' минут. Этапы процедуры обсудите со специалистом.',en:item.names.en+'. Listed as a '+minutes+' minute session in the source catalogue. Discuss the procedure steps with the specialist.'};
}
catalogue.evidence.notice.en='Service names come from the source catalogue; prices, dates, specialists and capacity are demo terms.';
catalogue.version='demo-simplified-2026-11-04-r3-four-language';

root.SpaCatalogue=catalogue;if(typeof module!=='undefined'&&module.exports)module.exports=catalogue;
})(typeof globalThis!=='undefined'?globalThis:this);
