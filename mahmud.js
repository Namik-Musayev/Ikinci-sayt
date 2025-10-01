const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".sidebar");


menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function(e){
      if(
          !e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)
      ){
        navbar.classList.remove("active");
      }
  });
});









//Search hissesi
const product=[
    {
        id:0,
        image:'img/Spirulina2.jpg',
        title:'Spirulina',
        
    },
    {
        id:1,
        image:'img/Zinc.jpg',
        title:'Sink',
        
    },
    {
        id:2,
        image:'img/antilipidcay.jpg',
        title:'Antilipid Çay',
        
    },
    {
        id:3,
        image:'img/slimmingtea2.png',
        title:'Slimming Çay',
        
    },
    {
        id:4,
        image:'img/xitozan.jpg',
        title:'Xitozan',
        
    },
    {
        id:5,
        image:'img/ikan3.jpg',
        title:'Ikan',
        
    },
    {
        id:6,
        image:'img/veykan.jpg',
        title:'Veykan',
        
    },
    {
        id:7,
        image:'img/xolikan.jpg',
        title:'Xolikan',
        
    },
    {
        id:8,
        image:'img/fruktozan.jpg',
        title:'Fruktozan',
        
    },
    {
        id:9,
        image:'img/qlukozamin.jpg',
        title:'Qlükozamin',
        
    },
    {
        id:10,
        image:'img/kordiseps2.avif',
        title:'Kordiseps',
        
    },
    {
        id:11,
        image:'img/usaqkalsiumu.jpg',
        title:'Uşaq kalsiumu',
        
    },
    {
        id:12,
        image:'img/biokalsium.jpg',
        title:'Biokalsium',
        
    },
    {
        id:13,
        image:'img/beyinkalsiumu.jpg',
        title:'Beyin kalsiumu',
        
    },
    {
        id:14,
        image:'img/sekerkalsiumu.jpg',
        title:'Şəkər kalsiumu',
        
    },
    {
        id:15,
        image:'img/orecaredis.jpg',
        title:'Orecare diş məcunu',
        
    },
    {
        id:16,
        image:'img/yorgan.jpg',
        title:'Sağlam yuxu yorğanı',
        
    },
    {
        id:17,
        image:'img/isoukan2.jpg',
        title:'Işoukan',
        
    },
    {
        id:18,
        image:'img/titanmaqnit.jpg',
        title:'Titan-Maqnit qolbağları',
        
    },
    {
        id:19,
        image:'img/ozon.jpg',
        title:'Ozon-Anion  bezləri',
        
    },
    {
        id:20,
        image:'img/qeds.jpg',
        title:'QEDS-QAN VƏ ENERJİ DÖVRANI STİMULYATORU',
        
    },
    {
        id:21,
        image:'img/cilvaris.jpg',
        title:'Cilvaris',
        
    },
    {
        id:22,
        image:'img/saglamyuxu.jpg',
        title:'Sağlam yuxu döşəkcəsi',
        
    },
    {
        id:23,
        image:'img/selluloza.jpg',
        title:'Sellüloza',
        
    },
    {
        id:24,
        image:'img/selen.jpg',
        title:'Selen',
        
    },
    {
        id:25,
        image:'img/hyperh2.jpg',
        title:'Hyper H',
        
    },
]

const categories=[...new Set(product.map((item)=> {return item}))]

document.getElementById('search-box').addEventListener('keyup',(e)=>{
    const searhcData = e.target.value.toLowerCase();
    const filterData= categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searhcData)
        )
    })
    displayItem(filterData)
});

const displayItem=(items)=>{
    document.getElementById('hat').innerHTML=items.map((item)=>{
        var {image, title,id}=item;
        return(
            ` <div class="product" onclick="showInfo(${id})">
                <img src=${image} alt="Məhsulun şəkli">
                <div class="product-name"> ${title}</div>
              </div> `
        )
    }).join('')
};
displayItem(categories);



//on sehife
const personInfo = {
    0: {
        name: "Spirulina",
        image: "img/Spirulina2.jpg",
        info: " Təmiz spirulina yosunundan hazırlanır və yüksək miqdarda (60-70%) bitki mənşəli zülal ehtiva edir. Tərkibində beta-karoten, B qrup vitaminləri, dəmir, kalsium və maqnezium kimi vacib mikroelementlər var. ",
        important:"Anemiyanın qarşısının alınması və müalicəsi İnsulin dozasının azaldılmasına kömək edir.Dərinin cavan qalmasını təmin edir , həmçinin qırışların çoxalmasının, sızanaqların və erkən qocalmanın qarşısını alır.Xroniki iltihablara (QİÇS, hepatit, vərəm, bronxit) qarşı effektivdir. Oynaq və sümük xəstəliklərinin (osteoxondroz, miozit),göz problemlərinin (katarakta, yaxın görmə zəifliyi, diabetik retina zədələnməsi),dəri xəstəliklərinin (quruluq, çatlar, hipovitaminoz, erkən yaşlanma) sağalmasına kömək edir.Travma və əməliyyatlardan sonra – sağalmanı sürətləndirir, fəsadların qarşısını alır.Qeyd: Cəmi 1 q spirulina təxminən 1 kq tərəvəzə bərabər qida dəyərinə malikdir.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    1: {
        name: "Sink",
        image: "img/Zinc.jpg",
        info: "Sink laktatı , qlükoza , toyuq yumutası zülalının tozu . ",
        important:"Qrip və infeksiyalara qarşı təsirlidir.İmmuniteti gücləndirir.Saç tökülməsinin qarşısını alır, uzanmanı sürətləndirir.Dırnaqları möhkəmləndirir, soyulma və qırılmanı azaldır.Hormonal balansı tənzimləyir.Görmə zəifliyi və göz problemlərində istifadə olunur.Allergiyalara qarşı faydalıdır.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    2: {
        name: "Antilipid Çay",
        image: "img/antilipidcay.jpg",
        info: "  6 növ yaşıl çay, kassiya tora toxumu, çoxçiçəkli qoresin kökü, beşyarpaqlı kinostemma və şanagülüyarpaqları.     " ,
        important:"Çində bu çaya 'ürəyin qan damarlarının təmizləyicisi' deyilir. Arterioskleroz, hipertoniya və koronar skleroz zamanı faydalıdır. Piy mübadiləsini tənzimləyir, xolesterini azaldır, temperaturu normallaşdırır. Poxmel sindromunu yüngülləşdirir, həzm və qaraciyər funksiyasını yaxşılaşdırır, stressi azaldır. Əks göstərişlər: 12 yaşa qədər uşaqlara, hamilə və süd verən qadınlara məsləhət görülmür.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"

    }, 
    3: {
        name: "Slimming Çay",
        image: "img/slimmingtea2.png",
        info: "'Qara əjdaha' və 'Kudin' çayları, lotos yarpaqları, çastux, ravənd kökü və mandarin qabığı.    ",
        important:"Çay artıq çəkinin azaldılması, orqanizmin toksinlərdən təmizlənməsi, ateroskleroz, xolesterin pozuntuları, hipertoniya və mədə-bağırsaq xəstəliklərində faydalıdır. Qızdırma, iltihab və mikroblara qarşı təsir göstərir. Xroniki yorğunluq, zəif immunitet, xoşxassəli və bədxassəli şişlər, həmçinin dəri şişkinliyi və süstlüyü zamanı tövsiyə olunur.Qeyd: Tədqiqatlarla bu çayın heyvanlar və insanlar üzərində çəki azalmasına təsiri sübut olunmuşdur.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
 4: {
        name: "Xitozan",
        image: "img/xitozan.jpg",
        info: "Qırmızıayaqlı dəniz krablarının zirehlərindən hazırlanmışdır və tərkibində xitin-15% və xitozan-85% var.   ",
        important:"Orqanizmi şlaklardan, xolesterindən və lipidlərdən təmizləyir.Qaraciyər piylənməsi və böyüməsində istifadə olunur.Xora, babasil, fibrioma, mioma, lipoma və kistanın müalicəsində kömək edir.Bel, onurğa və qurşaq ağrılarını aradan qaldırır.Köp, ishal və qəbizliyi aradan qaldırır.Baş ağrılarına qarşı istifadə olunur.Arıqlama proqramlarının əsas məhsuludur,Sağalmayan yaraların bərpasında və süni dəri yaranmasında təsirlidir.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    5: {
        name: "Ikan",
        image: "img/ikan3.jpg",
        info: "Alman biotexnologiyası ilə emal olunmuş bitkilər — dağlıq meşə mənşəli beşyarpaqlı kinostemma, yerkökü mənşəli beta-karotin, teopolifenol, C vitamini və digər təbii komponentlər.        ",
        important:"Hüceyrə səviyyəsində orqanizmi toksinlərdən, dərman qalıqlarından, mikrob və virus zəhərlərindən təmizləmək.Ruhi təmizlənmə: stress, şok və neqativ emosiyaların yaddaşdan silinməsi.Zərərli vərdişlərdən qurtulma dövründə dəstək.Güclü adaptogen: istənilən şəraitə və stressə qarşı dözümlülüyü artırır.Təbii antistress vasitə: düşüncəni aydın saxlayaraq beyni sakitləşdirir, asılılıq yaratmır.Ürək və beynin qan dövranını, oksigenlə təminatını gücləndirir.Cinsiyyət sisteminin funksional bərpasında istifadə olunur.Qocalma prosesini ləngidir, erkən ağ saçların qarşısını alır.Qara ciyər hüceyrələrinin yenilənməsi və hepatit müalicə proqramlarında (kordisepslə birlikdə) faydalıdır.Şəkərli diabet xəstələri üçün dəstəkləyici təsir göstərir.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    6: {
        name: "Veykan",
        image: "img/veykan.jpg",
        info: "Buğda cücərtisi yağı (Alman biotexnologiyası ilə emal olunmuş),Vitamin E – 4,8 mq,Linol turşusu – 320 mq,Linolen turşusu – 48 mq,Lesitin – 120 mq,Beta-karotin – 0,16 mq.    ",
        important:"Zehni və fiziki yorğunluğa qarşı:Xroniki və zehni yorğunluq hallarında enerjini bərpa edir.Yaddaşın gücləndirilməsi:Konsentrasiya və yaddaşı artırır.Ürək-damar sağlamlığı:İnfarkt, insult, stenokardiya, yüksək təzyiq, varikoz və aterosklerozun müalicə və profilaktikasında effektivdir.Cinsiyyət sisteminə dəstək:Kişi və qadın sonsuzluqlarında, qadınlarda aybaşı pozuntularında təsirlidir. Kişilərdə sperm aktivliyini artırır.Dəriyə qulluq:Dərini cavan və təravətli saxlayır, vaxtından əvvəl qocalmanın qarşısını alır.Hamiləlik və laktasiya dövründə:Hamiləliyin 4-cü ayından etibarən və südvermə dövründə istifadəsi tövsiyə olunur, ana və uşaq sağlamlığına müsbət təsir göstərir.Klimaks dövrü:Klimaksın gecikdirilməsi və simptomlarının yüngülləşdirilməsində kömək edir.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    7: {
        name: "Xolikan",
        image: "img/xolikan.jpg",
        info: "Qırmızı üzüm ekstraktı (müasir Alman biotexnologiyası ilə toxum və saplaqdan alınmış) – 54,25 mq,Resveratrol – 2,5 mq,İzomaltooligosaxarid – 259 mq,Vitamin C – 0,35 mq,Kraxmal – 35 mq . ",
        important:"Bağırsaq təmizliyi:Şlakları, toksinləri və qida qalıqlarını bədəndən təmizləyir.Xolesterin səviyyəsinə nəzarət:Bağırsaqlarda artıq xolesterinin sorulmasını azaldaraq ürək-damar xəstəliklərinin qarşısını alır.Öd sağlamlığı:Öd daşlarının kompleks müalicə və profilaktikasında effektivdir.Piylənməyə qarşı müdafiə:Bədən çəkisinin artmasının qarşısını alır.Qəbizliklə mübarizə:Qəbizliyi effektiv və təbii yolla aradan qaldırır.Şəkərli diabetdə dəstək:Bağırsaq və mədəaltı vəzin fəaliyyətini gücləndirir, fruktoza bədənə enerji verir.Həzm sisteminə dəstək:Həzm prosesini sürətləndirir, bədənə tez bir zamanda enerji və güc verir.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"

    },
    8: {
        name: "Fruktozan",
        image: "img/fruktozan.jpg",
        info: "Qida lifləri (selüloza): Müxtəlif bitki ekstraktlarından biomühəndislik üsulu ilə əldə olunmuş, sirop formasında.Bifidobakteriyalar: Bağırsaq mikroflorasını dəstəkləyən faydalı bakteriyalar.Təbii fruktoza şirəsi: Zərərsiz və təbii şirinləşdirici. ",
        important:"Bağırsaq təmizliyi:Şlakları, toksinləri və qida qalıqlarını bədəndən təmizləyir.Xolesterin səviyyəsinə nəzarət:Bağırsaqlarda artıq xolesterinin sorulmasını azaldaraq ürək-damar xəstəliklərinin qarşısını alır.Öd sağlamlığı:Öd daşlarının kompleks müalicə və profilaktikasında effektivdir.Piylənməyə qarşı müdafiə:Bədən çəkisinin artmasının qarşısını alır.Qəbizliklə mübarizə:Qəbizliyi effektiv və təbii yolla aradan qaldırır.Şəkərli diabetdə dəstək:Bağırsaq və mədəaltı vəzin fəaliyyətini gücləndirir, fruktoza bədənə enerji verir.Həzm sisteminə dəstək:Həzm prosesini sürətləndirir, bədənə tez bir zamanda enerji və güc verir.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    9: {
        name: "Qlükozamin",
        image: "img/qlukozamin.jpg",
        info: "Qlükosamin hidroxlorid – 130 mq,Xondroitin sulfat – 100 mq,Kalsium karbonat – 100mq,Kollagen,Maqnezium,Fosfor,Silisium dioksid,Vitamin B2,Vitamin D3,Bor,Fruktoza,Beta-karotin,Limon turşusu,Sukraloza Və digər faydalı komponentlər.",
        important:"Vətər və bağların bərpası:Zədələnmiş vətər və bağların regenerasiyasını sürətləndirir.Oynaq hərəkətliliyini artırır:Oynaqdaxili mayenin keyfiyyətini yaxşılaşdıraraq hərəkət rahatlığını artırır.Qocalmanın qarşısını alır:Hüceyrələrin yenilənməsini dəstəkləyərək yaşlanma prosesini ləngidir.Dayaq-hərəkət sisteminə dəstək:Sümük, oynaq və əzələ xəstəliklərində əsas və ya əlavə müalicə vasitəsi kimi istifadə olunur.Kalsium itkisinə qarşı:Sümüklərdən kalsiumun yuyulmasının qarşısını alır, osteoporoz riskini azaldır.Şişkinliyin azaldılması:Əllərdə və ayaqlarda yaranan zamanla şişkinliyi azaldır.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    10: {
        name: "Kordiseps",
        image: "img/kordiseps2.avif",
        info: "Fermentləşdirilmiş yabanı kordiseps göbələyinin tozu,Adenozin,Mannitol,500 mq kordiseps miselisinin tozu,Digər təbii və aktiv maddələr. ",
        important:"İltihab əleyhinə təsir:Sadə hidrokortizondan daha güclü antioksidant xüsusiyyətlərə malikdir.İmmun sisteminin tənzimlənməsi:Yüksək effektivliklə immuniteti dəstəkləyir.Qanda nikotinin azalması:Təsirli şəkildə nikotin səviyyəsinin düşməsinə kömək edir.Qızdırma və soyuqdəymə zamanı:Xəstəlik dövründə istifadə üçün uyğundur.Qaraciyər və böyrək sağlamlığı:Parçalanmış hüceyrələrin bərpasını təşviq edir, kalsium və fosfor balansının qorunmasına dəstək olur.Beyin və ürək əzələsi:Oksigen aclığına qarşı müqaviməti artırır.Hepatit müalicəsində:Heptral preparatından üstün təsir göstərir, qara ciyərin bərpasını sürətləndirir.Hamiləlik dövründə:İnfeksiya riskini azaldır.Cinsi aktivliyin bərpası:Cinsi funksiyaların normallaşmasına kömək edir.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    
    },
    11: {
        name: "Uşaq kalsiumu",
        image: "img/usaqkalsiumu.jpg",
        info: "İonlaşmış kalsium (3600 mq):,Yağsız quru süd (5420 mq):İzomaltooliqosaxarid (1500 mq): ,Yumurta sarısı tozu (300 mq):,Krimer (500 mq): ,Retinol (0.0091 mq): ,Kolekalsiferol (0.002 mq): ,Vitamin C (6 mq):Dəmir laktatı (1 mq): ,Sink laktatı (1.5 mq)i ,Maltodekstrin (33.6 mq),Taurin (2.8 mq):.",
        important:"Qida və kalsium çatışmazlığını tənzimləyir.Uşaqların zehni inkişafını dəstəkləyir.8 əsas amin turşusu və inkişafda vacib olan qistidin ilə zəngindir.Uşaqların böyüməsi və inkişafı üçün mühüm vitamin və mikroelementlər ehtiva edir.Lipoprotein, lesitin, taurin kimi vacib qidaları təmin edir.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    12: {
        name: "Biokalsium",
        image: "img/biokalsium.jpg",
        info: " İonlaşmış kalsium (4000 mq): Sümük və diş sağlamlığı üçün.Yağsız quru süd (3180 mq): Zülal və kalsium mənbəyi.İzomaltooliqosaxarid (3600 mq): Prebiotik, bağırsaq sağlamlığı.Kakao (200 mq): Dad və antioksidant təsir.Krimer (500 mq): Tekstura və dad üçün.Multivitaminlər (45 mq): Ümumi sağlamlıq və immun dəstəyi.Vanilin (10 mq): Aroma verici.Etilmaltol (5 mq): Dad gücləndirici.", 
        important:"Əzələ və oynaq funksiyasını dəstəkləyir, sınıqları və travmaları tez sağaldır.Meyvə ilə kokteyl şəklində istifadə edilib vitamin deposu kimi xidmət edir.Osteoporozu və sümük kövrəkliyini aradan qaldırır.Revmatizm əleyhinə təsir göstərir.Diş sağlamlığını qoruyur.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    13: {
        name: "Beyin kalsiumu",
        image: "img/beyinkalsiumu.jpg",
        info: "İonlaşmış kalsium, kalsium karbonat: Sümük və sinir sağlamlığı,Lesitin, taurin: Beyin funksiyası və enerji,Vitaminlər (B1, B12, C, fol turşusu): Sinir sistemi və immun dəstəyi,Maltodekstrin, kraxmal, sellüloza: Enerji və kapsulun quruluşu,Çiklodekstrin, talk: Stabilizator və daşıyıcı maddələr    ",
        important:"Zehni fəaliyyət və yaddaşı gücləndirir,İnsultdan sonra bərpanı sürətləndirir, baş ağrısı və miqreni azaldır,Xroniki yorğunluq və qıcolmaların qarşısını alır,Sinir sistemini qoruyur,Abituriyent və tələbələrdə qavrama və yaddaşı yaxşılaşdırır,İdmançılarda reaksiya və cəldliyi artırır,Qocalıqda əqli zəifləmənin qarşısını alır,Yuxunu tənzimləyir",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
 14: {
        name: "Şəkər kalsiumu",
        image: "img/sekerkalsiumu.jpg",
        info: "İonlaşmış kalsium (3000 mq): Sümük və diş sağlamlığı,Yağsız quru süd (2680 mq): Zülal və əlavə kalsium mənbəyi,Boranı toxumu tozu (1700 mq): Qanda şəkərin tənzimlənməsinə və hormonal balansın qorunmasına dəstək,Paxlalı kakao tozu (20 mq): Antioksidant və enerji artırıcı təsir,Vitaminlər (A, B1, B2, C): İmmunitet, sinir sistemi və dəri sağlamlığı üçün,Dəmir və sink laktatı: Qan dövranı və immun sisteminin gücləndirilməsi     ",
        important:"Diabet, zob və qalxanabənzər vəzi xəstəliklərinin qarşısını alır,Diabetin ağır fəsadlarından qoruyur,Fiziki və zehni gərginlikdə şəkəri tənzimləyir,Görmə pozğunluqları (katarakta, retinopatiya, qlaukoma) üçün,Prostat adenoması və mastopatiya müalicəsində istifadə olunur,Sümük və vitamin çatışmazlığına qarşı effektivdir,Hormonal balansı tənzimləməyə kömək edir",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    15: {
        name: "Orecare diş məcunu",
        image: "img/orecaredis.jpg",
        info: "Çobanyastığı, yapon jimolostu, xrizantema və nanə ekstraktı iltihabəleyhinə, antibakterial və təravətləndirici təsir göstərir.        ",
        important:"Diş emalını möhkəmləndirir, mikroçatları aradan qaldırır, kariesin qarşısını alır.Yerli iltihablara qarşı təsir göstərir.Nəfəsi təravətləndirir.Parodontozun profilaktikasını edir, damaqların qanaxmasını dayandırır.Ağız boşluğunun mikroflorasını tənzimləyir, şişə qarşı təsirə malikdir.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    16: {
        name: "Sağlam yuxu yorğanı",
        image: "img/yorgan.jpg",
        info: "Orqanizmin yuxu zamanı ion balansını təmin edir və sinir sistemini sakitləşdirir. Tiensin “Enerji ulduzları” texnologiyası turmalin poroşoku ilə maqnitin unikal birləşməsindən ibarətdir. Turmalin mineralı hormonal və immun sistemə müsbət təsir göstərir, damarları müalicə edir və mənfi emosiyaları neytrallaşdırır. Bu döşəküstü biomaqnit sahəsini bərpa edir, infraqırmızı şüalar və mənfi yüklü oksigen ionları yayır. Nəticədə yuxu keyfiyyəti yaxşılaşır, yorğunluq azalır və bədən enerji toplayır. “Sağlam yuxu” yorğanı yuxusuzluq və onun fəsadlarının qarşısını almaqda effektiv yardımçıdır.    ",
        important:" ",
        terkib:"Əsas xüsusiyyətləri",
        esas:" "
    },
    17: {
        name: "Işoukan",
        image: "img/isoukan2.jpg",
        info: "“İşoukan” aparatı saç darayarkən başın bioelektrik potensialını tənzimləyir, qan təzyiqini stabilləşdirir, lazer impulsları ilə baş dərisi və beyin mikro dövranını yaxşılaşdırır, gərginliyi azaldır və qırışların yaranmasının qarşısını alır.   ",
        important:" ",
        terkib:"Əsas xüsusiyyətləri",
        esas:" "
    },
    18: {
        name: "Titan-Maqnit qolbağları",
        image: "img/titanmaqnit.jpg",
        info: "“Hipoallergen və davamlı qolbaqlarımız 750 ayar qızıl suyunda, təbii müalicəvi daşlar və titanla hazırlanıb, cızılmır, qaralmır, deformasiyaya uğramır. Onlar orqanizmdə elektrocərəyanları tənzimləyir, qan dövranını yaxşılaşdırır, əzələ ağrılarını və yorğunluğu aradan qaldırır, immuniteti gücləndirir. Qolbaqlar fiziki və psixi gərginliklərə qarşı davamlılıq artırır, yuxunu və təzyiqi normallaşdırır, geomaqnit qasırğanın təsirini azaldır. Kişi və qadınlar üçün xüsusi kolleksiyada təqdim olunur. 100% zəmanətlidir.",
        important:" ",
        terkib:"Əsas xüsusiyyətləri",
        esas:" "
    },
    19: {
        name: "Ozon-Anion  bezləri",
        image: "img/ozon.jpg",
        info: "Gigiyenik, müalicəvi və profilaktik qadın bezləri 8 ultranazik təbəqədən ibarətdir, mayeni adi bezlərə nisbətən 3 dəfə sürətlə hopdurur və saxlayır. Antibakterialdır, özünü diaqnostika testi ilə sağlamlıq durumu haqqında məlumat verir. Sidik-cinsiyyət yolu infeksiyaları, babasil, eroziya, endometrioz, mioma, yumurtalıq kistaları və hormon pozğunluqlarının kompleks müalicəsində istifadə olunur. Yorğunluğu və xoşagəlməz qoxunu aradan qaldırır, qan təzyiqini və aybaşı dövrünü normallaşdırır, ağrıları azaldır.",
        important:" ",
        terkib:"Əsas xüsusiyyətləri",
        esas:" "
    },
    20: {
        name: "QEDS-QAN VƏ ENERJİ DÖVRANI STİMULYATORU",
        image: "img/qeds.jpg",
        info: "Qan və enerji dövranını yaxşılaşdıran, saat əqrəbi istiqamətində vibrasiya ilə işləyən sağlamlıq cihazıdır. Əsasən əllər və ayaqlardakı refleksogen nöqtələrə təsir edərək toxumaların oksigenlə təminatını artırır, mübadilə proseslərini stimullaşdırır və bədənin ümumi sağlamlığını dəstəkləyir. ",
        important:" ",
        terkib:"Əsas xüsusiyyətləri",
        esas:" "
    },
    21: {
        name: "Cilvaris",
        image: "img/cilvaris.jpg",
        info: "Üz, boyun və dekolte dərisinə qulluq üçün nəzərdə tutulan bu Tiens cihazı gözəllik salonuna getmədən dərinizə peşəkar qulluq imkanı yaradır. Cilvaris məhsulları ilə birlikdə istifadə olunduqda dəriniz daha sıx, hamar və gənc görünəcək. Artıq ilk istifadədən sonra fərqi hiss edəcəksiniz. ",
        important:" ",
        terkib:"Əsas xüsusiyyətləri",
        esas:" "
    },
    22: {
        name: "Sağlam yuxu döşəkcəsi",
        image: "img/saglamyuxu.jpg",
        info: " Sağlam və keyfiyyətli yuxu üçün xüsusi texnologiya ilə hazırlanmış terapevtik döşəkçədir. Onun tərkibində maqnitlər, uzaq infraqırmızı şüalar və bioenerji sahəsi yaradan materiallar mövcuddur. Bu komponentlər bədəndə qan dövranını yaxşılaşdırır, sinir sistemini sakitləşdirir, əzələ gərginliyini azaldır və dərin, rahat yuxunu təmin edir.   " ,
        important:" ",
        terkib:"Əsas xüsusiyyətləri",
        esas:" "
    },
    23: {
        name: "Sellüloza",
        image: "img/selluloza.jpg",
        info: "tərkibi Tiens Sellülozası təbii bitki mənşəli liflərdən ibarətdir. Tərkibində əsasən qarğıdalı lifi, alma pektini və digər təmizləyici komponentlər yer alır. Bu maddələr bağırsağın fəaliyyətini tənzimləyir və orqanizmi toksinlərdən təmizləyir.    ",
        important:"Xroniki qəbizlik və bağırsaq fəaliyyətinin zəifləməsi.Babasil, arxa keçidin çatı və digər anal nahiyə problemləri.Disbakterioz və antibiotik müalicəsindən sonrakı bağırsaq florasının bərpası.Şəkərli diabet zamanı əlavə dəstək kimi.Ateroskleroz, hipertoniya və ürək xəstəliklərində xolesterini aşağı salmaq və damarların qorunması üçün.Xolesistit və öd kisəsində daş əmələ gəlməsinin qarşısını almaq məqsədilə.Artıq çəki və piylənmənin qarşısını almaqda və arıqlama proqramlarında.Bağırsağın təmizlənməsi və detoks proqramlarında (zəhərlənmə, çirklənmiş mühit və s.).Qadınlarda hormonal pozğunluqlar, klimaks və aybaşıqabağı narahatlıqlar zamanı.Kron xəstəliyi və digər bağırsaq xəstəliklərində, həm müalicə zamanı, həm də profilaktika məqsədilə.Qastroezofageal reflyüks, bağırsaq atoniyası və divertikul hallarında.Bağırsaq, süd vəzi, prostat, uşaqlıq fibroması və mastopatiya kimi xəstəliklərin qarşısının alınması və kompleks müalicəsində.Venaların varikoz genişlənməsi, tromboflebit və trofik xoraların profilaktika və müalicəsində.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
 24: {
        name: "Selen",
        image: "img/selen.jpg",
        info: "Selenium (Se), Vitamin E, Beta-karoten (provitamin A) və Vitamin C daxildir.     ",
        important:"Bədəndə selenium səviyyəsini bərpa etmək və qorumaq üçün nəzərdə tutulmuş qida əlavəsidir. Selenium sink, kalsium və kalium kimi vacib mikroelementlərlə birlikdə orqanizmdə mühüm rol oynayır.Enerjinin 80%-nin formalaşmasnda iştirak edir.Xərçəng riskini və kanserogen təsirləri azaldır.Güclü antioksidantdır, sərbəst radikallarla mübarizə aparır.Qalxanabənzər vəzin normal fəaliyyətini dəstəkləyir.Saç və dırnaq sağlamlığını gücləndirir.Kimyaterapiya sonrası bərpa prosesini sürətləndirir.Qocalmanı ləngidir, gümrahlıq verir.Qrip, vərəm, hepatit kimi infeksiyalarda faydalıdır.İmmuniteti gücləndirir, T-limfosit və antitellərin istehsalına kömək edir.Astma xəstələrinə və yanıqların sağalmasına dəstək olur.",
        terkib:"Tərkibi",
        esas:"Əsas xüsusiyyətləri"
    },
    25: {
        name: "Hyper H",
        image: "img/hyperh2.jpg",
        info: "Bu stəkan suyu intellektual şəkildə təmizləyir, orqanizmi toksinlərdən azad edir, qan dövranını yaxşılaşdırır və maddələr mübadiləsini aktivləşdirir. Nəticədə bədən sağlam və enerjili qalır. Ən önəmlisi isə – xərçəng riskini azaldır.        ",
        important:" ",
        terkib:"Əsas xüsusiyyətləri",
        esas:" "
    },
};
function showInfo(id) {
    const person = personInfo[id];
    document.getElementById('modal-title').textContent = person.name;
    document.getElementById('modal-image').src = person.image;
    document.getElementById('modal-image').alt = person.name;
    document.getElementById('modal-info').textContent = person.info;
    document.getElementById('info-modal').style.display = "block";
    document.getElementById('modal-important').textContent=person.important;
    document.getElementById('modal-terkib').textContent=person.terkib;
    document.getElementById('modal-esas').textContent=person.esas;
}

function closeModal() {
    document.getElementById('info-modal').style.display = "none";
}

// Klikləmə zamanı modal xaricində kliklənərsə modalı bağla
window.onclick = function(event) {
    const modal = document.getElementById('info-modal');
    if (event.target == modal) {
        closeModal();
    }
}