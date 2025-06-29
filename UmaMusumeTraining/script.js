document.getElementById("selectUma").addEventListener("change", function () {
  const selected = this.value;
  showLegacy(selected);
});

function showLegacy(character) {
  const legacyData = {
    tm_opera_o: {
    legacy1: "Symboli Rudolf",
    legacy2: "Tokai Teio",
    alt: "Agnes Tachyon, Daiwa Scarlet",
    focus: [
        { status: "Stamina", star: "⭐⭐⭐⭐", note: "Penting untuk jarak panjang" },
        { status: "Power", star: "⭐⭐⭐⭐", note: "Membantu saat tikungan dan tanjakan" },
        { status: "Speed", star: "⭐⭐⭐", note: "Cukup agar tidak tertinggal jauh" },
        { status: "Intelligence", star: "⭐⭐⭐", note: "Bantu skill aktif & positioning" },
        { status: "Guts", star: "⭐⭐", note: "Tambahan daya tahan di akhir race panjang" }
    ],
    target: {
        Speed: "800–1000",
        Power: "900–1000",
        Stamina: "900–1000",
        Intelligence: "700–800",
        Guts: "400–500"
    },
    turns: [
        ["Debut Race", "~11–12", "2000m", "150–180", "120–150", "150–180", "100+", "80+"],
        ["Junior Grade Race", "~20–25", "2000–2200m", "350–400", "300–350", "400–450", "250+", "150+"],
        ["Satsuki Sho", "~26–30", "2000m", "500+", "400+", "450+", "300+", "200+"],
        ["Tokyo Yushun", "~31–34", "2400m", "600–700", "500–600", "600+", "400+", "200+"],
        ["Kikka Sho", "~40", "3000m", "700+", "600+", "700–800", "500+", "250+"],
        ["Arima Kinen", "~45–50", "2500m", "850–900", "700+", "850–900", "600+", "300+"],
        ["URA Finals", "~66–72", "2400–3000m", "900–1000", "800+", "900–1000", "700–800", "400+"]
    ],
    supports: [
        { name: "Tokai Teio", type: "Speed", rarity: "SSR / SR" },
        { name: "Special Week", type: "Speed", rarity: "SSR / R" },
        { name: "Narita Brian", type: "Power", rarity: "SSR / SR" },
        { name: "Mejiro Ryan", type: "Power", rarity: "R" },
        { name: "Super Creek", type: "Stamina", rarity: "SSR / SR" },
        { name: "Marvelous Sunday", type: "Stamina", rarity: "SR / R" },
        { name: "Rice Shower", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Matikanefukukitaru", type: "Intelligence", rarity: "SSR / R" },
        { name: "Symboli Rudolf", type: "Guts", rarity: "SSR / SR" },
        { name: "Gold Ship", type: "Guts", rarity: "SSR / R" }
    ]
    },
    special_week: {
    legacy1: "Tokai Teio",
    legacy2: "Oguri Cap",
    alt: "Symboli Rudolf, Daiwa Scarlet",
    focus: [
        { status: "Speed", star: "⭐⭐⭐⭐", note: "Fokus utama karena Sp. Week pelari middle–long distance" },
        { status: "Stamina", star: "⭐⭐⭐", note: "Cukup tinggi untuk jarak menengah–jauh" },
        { status: "Power", star: "⭐⭐⭐", note: "Penting untuk mendukung akselerasi" },
        { status: "Intelligence", star: "⭐⭐⭐", note: "Skill aktif akan lebih konsisten" },
        { status: "Guts", star: "⭐⭐", note: "Tambahan di late race, tapi tidak prioritas awal" }
    ],
    target: {
        Speed: "1000–1100",
        Power: "800–900",
        Stamina: "800–900",
        Intelligence: "700–800",
        Guts: "300–400"
    },
    turns: [
        ["Debut Race", "~11–12", "1800m", "180+", "120+", "140+", "100+", "80+"],
        ["Junior Grade", "~22–24", "2000m", "400+", "300+", "350+", "200+", "100+"],
        ["Tulip Sho", "~25–27", "1600m", "500+", "350+", "400+", "300+", "150+"],
        ["Oka Sho", "~28", "1600m", "600+", "400+", "450+", "350+", "180+"],
        ["Yushun Himba", "~31", "2400m", "700+", "500+", "600+", "400+", "200+"],
        ["Shuka Sho", "~40", "2000m", "800+", "600+", "700+", "500+", "250+"],
        ["Arima Kinen", "~46–48", "2500m", "900+", "700+", "850+", "600+", "300+"],
        ["URA Finals", "~67–72", "2400m", "1000+", "800+", "900+", "700+", "350+"]
    ],
    supports: [
        { name: "Tokai Teio", type: "Speed", rarity: "SSR / SR" },
        { name: "Oguri Cap", type: "Speed", rarity: "SSR" },
        { name: "Special Week", type: "Speed", rarity: "SSR / R" },
        { name: "Rice Shower", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Smart Falcon", type: "Intelligence", rarity: "SSR" },
        { name: "Mejiro Ryan", type: "Power", rarity: "R" },
        { name: "Narita Brian", type: "Power", rarity: "SSR / SR" },
        { name: "Super Creek", type: "Stamina", rarity: "SSR / SR" },
        { name: "Marvelous Sunday", type: "Stamina", rarity: "SR / R" },
        { name: "Symboli Rudolf", type: "Guts", rarity: "SSR / SR" }
    ]
    },
    silence_suzuka: {
      legacy1: "El Condor Pasa",
      legacy2: "Maruzensky",
      alt: "Smart Falcon, Sakura Bakushin O",
      focus: [
        { status: "Speed", star: "⭐⭐⭐⭐", note: "Harus tinggi untuk posisi depan" },
        { status: "Power", star: "⭐⭐⭐⭐", note: "Penting untuk akselerasi & tanjakan" },
        { status: "Stamina", star: "⭐⭐⭐", note: "Cukup untuk bertahan di Medium~Long" },
        { status: "Intelligence", star: "⭐⭐", note: "Bantu skill aktif dan pengambilan posisi" },
        { status: "Guts", star: "⭐", note: "Tidak diprioritaskan kecuali long race" },
      ],
      target: {
        Speed: "1100–1200",
        Power: "900–1000",
        Stamina: "700–800",
        Intelligence: "600–800",
        Guts: "300–400",
      },
      turns: [
        ["Debut Race", "~11–12", "1600m", "150–180", "120–150", "130–150", "100+", "80+"],
        ["Junior Grade Race", "~20–25", "1600–1800m", "300–400", "200–300", "300–400", "200+", "100+"],
        ["Oka Sho", "~26–30", "1600m", "500–600", "350–400", "450+", "300+", "150+"],
        ["Yushun Himba", "~31–34", "2400m", "600+", "500–600", "500+", "400+", "200+"],
        ["Shuka Sho", "~40", "2000m", "700+", "550+", "600+", "500+", "200+"],
        ["Queen Elizabeth Cup", "~45–50", "2200m", "800+", "600–650", "700+", "600+", "250+"],
        ["URA Finals", "~66–72", "2000–2500m", "1000–1100", "650–700", "850–900", "700–800", "300+"]
      ],
      supports: [
        { name: "El Condor Pasa", type: "Speed", rarity: "SR" },
        { name: "Sakura Bakushin O", type: "Speed", rarity: "SR" },
        { name: "Agnes Tachyon", type: "Speed", rarity: "R" },
        { name: "Narita Brian", type: "Power", rarity: "SR" },
        { name: "Mihono Bourbon", type: "Power", rarity: "SR" },
        { name: "Super Creek", type: "Stamina", rarity: "SR", note: "(jika kamu punya)" },
        { name: "Twin Turbo", type: "Stamina", rarity: "R", note: "(tambahan stamina + 先行 skill)" },
        { name: "Agnes Digital", type: "Intelligence", rarity: "SR" },
        { name: "Smart Falcon", type: "Intelligence", rarity: "R" },
        { name: "Oguri Cap", type: "Guts", rarity: "R" },
        { name: "Mejiro McQueen", type: "Guts", rarity: "SR" }
      ],
    },
    tokai_teio: {
    legacy1: "Symboli Rudolf",
    legacy2: "Special Week",
    alt: "Oguri Cap, Daiwa Scarlet",
    focus: [
        { status: "Speed", star: "⭐⭐⭐⭐", note: "Fokus utama karena Tokai Teio pelari jarak menengah" },
        { status: "Power", star: "⭐⭐⭐⭐", note: "Penting untuk akselerasi dan tikungan" },
        { status: "Stamina", star: "⭐⭐⭐", note: "Cukup untuk bertahan di jarak 2000–2400m" },
        { status: "Intelligence", star: "⭐⭐⭐", note: "Menambah konsistensi skill & positioning" },
        { status: "Guts", star: "⭐⭐", note: "Tambahan kecil untuk akhir race" }
    ],
    target: {
        Speed: "1000–1100",
        Power: "900–1000",
        Stamina: "700–800",
        Intelligence: "700–800",
        Guts: "300–400"
    },
    turns: [
        ["Debut Race", "~11–12", "1800m", "180+", "150+", "140+", "100+", "80+"],
        ["Junior Grade", "~22–24", "2000m", "400+", "350+", "350+", "250+", "150+"],
        ["Kyoto Shimbun Hai", "~27", "2200m", "550+", "500+", "500+", "300+", "200+"],
        ["Kikuka Sho", "~30", "3000m", "600+", "550+", "600+", "350+", "200+"],
        ["Arima Kinen", "~40", "2500m", "750+", "700+", "700+", "450+", "250+"],
        ["Osaka Hai", "~46", "2000m", "850+", "800+", "800+", "600+", "300+"],
        ["Takarazuka Kinen", "~50", "2200m", "950+", "850+", "850+", "650+", "350+"],
        ["URA Finals", "~67–72", "2400m", "1000+", "900+", "900+", "700+", "400+"]
    ],
    supports: [
        { name: "Tokai Teio", type: "Speed", rarity: "SSR / SR" },
        { name: "Oguri Cap", type: "Speed", rarity: "SSR" },
        { name: "Special Week", type: "Speed", rarity: "SSR / R" },
        { name: "Rice Shower", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Smart Falcon", type: "Intelligence", rarity: "SSR" },
        { name: "Narita Brian", type: "Power", rarity: "SSR / SR" },
        { name: "Mejiro Ryan", type: "Power", rarity: "R" },
        { name: "Super Creek", type: "Stamina", rarity: "SSR / SR" },
        { name: "Marvelous Sunday", type: "Stamina", rarity: "SR / R" },
        { name: "Symboli Rudolf", type: "Guts", rarity: "SSR / SR" }
    ]
    },
    maruzensky: {
    legacy1: "Daiwa Scarlet",
    legacy2: "Taiki Shuttle",
    alt: "Vodka, Sakura Bakushin O",
    focus: [
        { status: "Speed", star: "⭐⭐⭐⭐", note: "Fokus utama karena Maruzensky adalah runner tipe speed" },
        { status: "Power", star: "⭐⭐⭐", note: "Penting untuk akselerasi awal & tikungan" },
        { status: "Stamina", star: "⭐⭐⭐", note: "Cukup agar kuat untuk jarak 1400–1800m" },
        { status: "Intelligence", star: "⭐⭐⭐", note: "Menambah ketepatan penggunaan skill" },
        { status: "Guts", star: "⭐⭐", note: "Tambahan daya tahan di akhir race pendek" }
    ],
    target: {
        Speed: "1100–1200",
        Power: "800–900",
        Stamina: "600–700",
        Intelligence: "700–800",
        Guts: "300–400"
    },
    turns: [
        ["Debut Race", "~11–12", "1600m", "200+", "150+", "120+", "100+", "80+"],
        ["Junior Grade", "~20–24", "1400–1600m", "400+", "300+", "300+", "250+", "150+"],
        ["NHK Mile Cup", "~26–27", "1600m", "550+", "400+", "400+", "300+", "200+"],
        ["Swan Stakes", "~33", "1400m", "700+", "500+", "500+", "400+", "250+"],
        ["Mile Championship", "~40", "1600m", "850+", "600+", "600+", "500+", "300+"],
        ["Arima Kinen (optional)", "~46", "2500m", "950+", "700+", "700+", "600+", "350+"],
        ["URA Finals", "~67–72", "1600–1800m", "1100+", "800+", "700+", "700+", "400+"]
    ],
    supports: [
        { name: "Maruzensky", type: "Speed", rarity: "SSR / SR" },
        { name: "Taiki Shuttle", type: "Speed", rarity: "SSR / SR" },
        { name: "Daiwa Scarlet", type: "Speed", rarity: "SSR" },
        { name: "Smart Falcon", type: "Intelligence", rarity: "SSR" },
        { name: "Fine Motion", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Mejiro Ryan", type: "Power", rarity: "R" },
        { name: "Narita Brian", type: "Power", rarity: "SSR / SR" },
        { name: "Marvelous Sunday", type: "Stamina", rarity: "SR / R" },
        { name: "Rice Shower", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Vodka", type: "Power", rarity: "SSR / SR" }
    ]
    },
    oguri_cap: {
    legacy1: "Special Week",
    legacy2: "Tokai Teio",
    alt: "Symboli Rudolf, Gold Ship",
    focus: [
        { status: "Speed", star: "⭐⭐⭐⭐", note: "Sangat penting karena Oguri adalah pelari middle–long jarak cepat" },
        { status: "Power", star: "⭐⭐⭐⭐", note: "Mendukung akselerasi di tikungan dan tanjakan" },
        { status: "Stamina", star: "⭐⭐⭐", note: "Dibutuhkan untuk race jarak jauh (2000m+)" },
        { status: "Intelligence", star: "⭐⭐⭐", note: "Menambah skill aktif & positioning" },
        { status: "Guts", star: "⭐⭐", note: "Tambahan berguna di akhir race panjang" }
    ],
    target: {
        Speed: "1000–1100",
        Power: "900–1000",
        Stamina: "800–900",
        Intelligence: "700–800",
        Guts: "300–400"
    },
    turns: [
        ["Debut Race", "~11–12", "1800m", "180+", "150+", "140+", "100+", "80+"],
        ["Junior Grade", "~22–24", "2000–2200m", "400+", "350+", "350+", "250+", "150+"],
        ["Naruo Kinen", "~27", "2000m", "550+", "450+", "500+", "300+", "200+"],
        ["Mainichi Okan", "~30", "1800m", "650+", "500+", "600+", "400+", "200+"],
        ["Tenno Sho (Autumn)", "~33", "2000m", "700+", "600+", "650+", "450+", "250+"],
        ["Japan Cup", "~40", "2400m", "850+", "700+", "750+", "550+", "300+"],
        ["Arima Kinen", "~46–48", "2500m", "950+", "800+", "850+", "650+", "350+"],
        ["URA Finals", "~67–72", "2400–2500m", "1000+", "900+", "900+", "700+", "400+"]
    ],
    supports: [
        { name: "Oguri Cap", type: "Speed", rarity: "SSR / SR" },
        { name: "Tokai Teio", type: "Speed", rarity: "SSR / SR" },
        { name: "Special Week", type: "Speed", rarity: "SSR / R" },
        { name: "Rice Shower", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Smart Falcon", type: "Intelligence", rarity: "SSR" },
        { name: "Narita Brian", type: "Power", rarity: "SSR / SR" },
        { name: "Vodka", type: "Power", rarity: "SSR / SR" },
        { name: "Super Creek", type: "Stamina", rarity: "SSR / SR" },
        { name: "Marvelous Sunday", type: "Stamina", rarity: "SR / R" },
        { name: "Symboli Rudolf", type: "Guts", rarity: "SSR / SR" }
    ]
    },
    taiki_shuttle: {
    legacy1: "Maruzensky",
    legacy2: "Daiwa Scarlet",
    alt: "Taiki Shuttle (SSR), Vodka",
    focus: [
        { status: "Speed", star: "⭐⭐⭐⭐", note: "Fokus utama karena Taiki adalah pelari jarak pendek-menengah (sprinter/miler)" },
        { status: "Power", star: "⭐⭐⭐", note: "Penting untuk akselerasi saat tikungan dan sprint akhir" },
        { status: "Intelligence", star: "⭐⭐⭐", note: "Skill aktif cepat dan positioning yang stabil" },
        { status: "Stamina", star: "⭐⭐", note: "Cukup agar kuat finish di 1600m–1800m" },
        { status: "Guts", star: "⭐⭐", note: "Membantu di akhir race jika stamina menipis" }
    ],
    target: {
        Speed: "1100–1200",
        Power: "800–900",
        Stamina: "600–700",
        Intelligence: "700–800",
        Guts: "300–400"
    },
    turns: [
        ["Debut Race", "~11–12", "1600m", "200+", "150+", "120+", "100+", "80+"],
        ["Junior Grade", "~20–24", "1400–1600m", "400+", "300+", "300+", "250+", "150+"],
        ["Hanshin Himba Stakes", "~26", "1600m", "550+", "400+", "350+", "300+", "200+"],
        ["Victoria Mile", "~30", "1600m", "650+", "500+", "400+", "350+", "200+"],
        ["Swan Stakes", "~34", "1400m", "750+", "550+", "450+", "400+", "250+"],
        ["Mile Championship", "~40", "1600m", "850+", "600+", "500+", "500+", "300+"],
        ["Arima Kinen (optional)", "~46", "2500m", "900+", "700+", "700+", "600+", "350+"],
        ["URA Finals", "~67–72", "1600–1800m", "1100+", "800+", "700+", "700+", "400+"]
    ],
    supports: [
        { name: "Taiki Shuttle", type: "Speed", rarity: "SSR / SR" },
        { name: "Maruzensky", type: "Speed", rarity: "SSR / SR" },
        { name: "Daiwa Scarlet", type: "Speed", rarity: "SSR" },
        { name: "Vodka", type: "Power", rarity: "SSR / SR" },
        { name: "Fine Motion", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Rice Shower", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Narita Brian", type: "Power", rarity: "SSR / SR" },
        { name: "Mejiro Ryan", type: "Power", rarity: "R" },
        { name: "Marvelous Sunday", type: "Stamina", rarity: "SR / R" },
        { name: "Smart Falcon", type: "Intelligence", rarity: "SSR" }
    ]
    },
    mejiro_mcqueen: {
    legacy1: "Rice Shower",
    legacy2: "Symboli Rudolf",
    alt: "Super Creek, Gold Ship",
    focus: [
        { status: "Stamina", star: "⭐⭐⭐⭐", note: "Prioritas utama karena McQueen adalah pelari jarak jauh (long distance)" },
        { status: "Power", star: "⭐⭐⭐", note: "Penting untuk tanjakan dan tikungan panjang" },
        { status: "Speed", star: "⭐⭐⭐", note: "Cukup agar tidak tertinggal jauh di awal race" },
        { status: "Intelligence", star: "⭐⭐⭐", note: "Berguna untuk aktivasi skill secara konsisten" },
        { status: "Guts", star: "⭐⭐", note: "Tambahan akhir race, tapi bukan fokus utama" }
    ],
    target: {
        Speed: "800–900",
        Power: "800–900",
        Stamina: "1000–1100",
        Intelligence: "700–800",
        Guts: "300–400"
    },
    turns: [
        ["Debut Race", "~11–12", "2000m", "150+", "140+", "180+", "100+", "80+"],
        ["Junior Grade", "~22–24", "2200–2400m", "300+", "280+", "400+", "250+", "150+"],
        ["Hanshin Daishoten", "~27", "3000m", "450+", "400+", "500+", "300+", "200+"],
        ["Tenno Sho (Spring)", "~30", "3200m", "600+", "500+", "600+", "350+", "200+"],
        ["Takarazuka Kinen", "~40", "2200m", "750+", "600+", "700+", "450+", "250+"],
        ["Tenno Sho (Autumn)", "~45", "2000m", "850+", "700+", "750+", "550+", "300+"],
        ["Arima Kinen", "~50", "2500m", "950+", "800+", "900+", "600+", "350+"],
        ["URA Finals", "~67–72", "3000m", "1000+", "900+", "1000+", "700+", "400+"]
    ],
    supports: [
        { name: "Mejiro McQueen", type: "Stamina", rarity: "SSR / SR" },
        { name: "Rice Shower", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Symboli Rudolf", type: "Guts", rarity: "SSR / SR" },
        { name: "Super Creek", type: "Stamina", rarity: "SSR / SR" },
        { name: "Gold Ship", type: "Guts", rarity: "SSR / R" },
        { name: "Marvelous Sunday", type: "Stamina", rarity: "SR / R" },
        { name: "Narita Brian", type: "Power", rarity: "SSR / SR" },
        { name: "Fine Motion", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Tokai Teio", type: "Speed", rarity: "SSR / SR" },
        { name: "Special Week", type: "Speed", rarity: "SSR / R" }
    ]
    },
    symboli_rudolf: {
    legacy1: "Tokai Teio",
    legacy2: "Special Week",
    alt: "Oguri Cap, Mejiro McQueen",
    focus: [
        { status: "Speed", star: "⭐⭐⭐⭐", note: "Fokus utama karena pelari middle–long distance dengan posisi late runner" },
        { status: "Stamina", star: "⭐⭐⭐⭐", note: "Wajib tinggi untuk bertahan di 2400–3000m" },
        { status: "Power", star: "⭐⭐⭐", note: "Penting untuk menyalip di tikungan dan tanjakan" },
        { status: "Intelligence", star: "⭐⭐⭐", note: "Menstabilkan penggunaan skill dan posisi" },
        { status: "Guts", star: "⭐⭐", note: "Menambah daya tahan menjelang akhir" }
    ],
    target: {
        Speed: "1000–1100",
        Power: "800–900",
        Stamina: "1000–1100",
        Intelligence: "700–800",
        Guts: "300–400"
    },
    turns: [
        ["Debut Race", "~11–12", "1800m", "180+", "140+", "180+", "100+", "80+"],
        ["Junior Grade", "~22–24", "2200–2400m", "400+", "350+", "450+", "250+", "150+"],
        ["Kobe Shimbun Hai", "~27", "2400m", "550+", "400+", "550+", "300+", "200+"],
        ["Kikka Sho", "~30", "3000m", "650+", "500+", "650+", "400+", "250+"],
        ["Japan Cup", "~40", "2400m", "800+", "600+", "800+", "500+", "300+"],
        ["Arima Kinen", "~46–48", "2500m", "900+", "700+", "900+", "600+", "350+"],
        ["URA Finals", "~67–72", "2400–3000m", "1000+", "800+", "1000+", "700+", "400+"]
    ],
    supports: [
        { name: "Symboli Rudolf", type: "Guts", rarity: "SSR / SR" },
        { name: "Tokai Teio", type: "Speed", rarity: "SSR / SR" },
        { name: "Special Week", type: "Speed", rarity: "SSR / R" },
        { name: "Oguri Cap", type: "Speed", rarity: "SSR" },
        { name: "Rice Shower", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Super Creek", type: "Stamina", rarity: "SSR / SR" },
        { name: "Mejiro McQueen", type: "Stamina", rarity: "SSR / SR" },
        { name: "Narita Brian", type: "Power", rarity: "SSR / SR" },
        { name: "Gold Ship", type: "Guts", rarity: "SSR / R" },
        { name: "Marvelous Sunday", type: "Stamina", rarity: "SR / R" }
    ]
    },
    rice_shower: {
    legacy1: "Mejiro McQueen",
    legacy2: "Symboli Rudolf",
    alt: "Super Creek, Gold Ship",
    focus: [
        { status: "Stamina", star: "⭐⭐⭐⭐", note: "Sangat penting karena Rice Shower fokus pada long distance (pelari tahan lama)" },
        { status: "Speed", star: "⭐⭐⭐", note: "Cukup untuk menjaga tempo dan posisi" },
        { status: "Power", star: "⭐⭐⭐", note: "Dibutuhkan saat tanjakan dan akhir race" },
        { status: "Intelligence", star: "⭐⭐⭐", note: "Membantu aktivasi skill dan posisi di mid–late race" },
        { status: "Guts", star: "⭐⭐", note: "Tambahan di akhir race jika stamina hampir habis" }
    ],
    target: {
        Speed: "800–900",
        Power: "800–900",
        Stamina: "1000–1100",
        Intelligence: "700–800",
        Guts: "300–400"
    },
    turns: [
        ["Debut Race", "~11–12", "2000m", "150+", "140+", "180+", "100+", "80+"],
        ["Junior Grade", "~22–24", "2400m", "350+", "300+", "450+", "250+", "150+"],
        ["Hanshin Daishoten", "~26", "3000m", "500+", "400+", "550+", "300+", "200+"],
        ["Tenno Sho (Spring)", "~30", "3200m", "650+", "500+", "650+", "350+", "200+"],
        ["Takarazuka Kinen", "~40", "2200m", "800+", "600+", "700+", "450+", "250+"],
        ["Tenno Sho (Autumn)", "~45", "2000m", "900+", "700+", "750+", "550+", "300+"],
        ["Arima Kinen", "~50", "2500m", "950+", "800+", "850+", "600+", "350+"],
        ["URA Finals", "~67–72", "3000m", "1000+", "900+", "1000+", "700+", "400+"]
    ],
    supports: [
        { name: "Rice Shower", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Mejiro McQueen", type: "Stamina", rarity: "SSR / SR" },
        { name: "Symboli Rudolf", type: "Guts", rarity: "SSR / SR" },
        { name: "Super Creek", type: "Stamina", rarity: "SSR / SR" },
        { name: "Gold Ship", type: "Guts", rarity: "SSR / R" },
        { name: "Narita Brian", type: "Power", rarity: "SSR / SR" },
        { name: "Fine Motion", type: "Intelligence", rarity: "SSR / SR" },
        { name: "Marvelous Sunday", type: "Stamina", rarity: "SR / R" },
        { name: "Tokai Teio", type: "Speed", rarity: "SSR / SR" },
        { name: "Special Week", type: "Speed", rarity: "SSR / R" }
    ]
    },

  };

  const data = legacyData[character];
  if (!data) return;

  document.getElementById("legacyBox").style.display = "block";
  document.getElementById("legacy1").textContent = data.legacy1;
  document.getElementById("legacy2").textContent = data.legacy2;
  document.getElementById("alternatif").textContent = data.alt;

  document.getElementById("cardLevelBox").style.display = "block";
  document.getElementById("supportBox").style.display = "block";
  document.getElementById("goalBox").style.display = "block";
  document.getElementById("turnBox").style.display = "block";

  showSupport(data.supports);
  showFocus(data.focus);
  showTurn(data.turns);
}

function showSupport(cards) {
  const container = document.getElementById("supportCards");
  container.innerHTML = "";
  const levels = getCardLevels();

  const grouped = {
    Speed: [],
    Power: [],
    Stamina: [],
    Intelligence: [],
    Guts: []
  };

  cards.forEach((card) => {
    if (levels.includes(card.rarity)) {
      const note = card.note ? ` ${card.note}` : "";
      grouped[card.type].push({ name: `${card.rarity} ${card.name}${note}` });
    }
  });

  const colors = {
    Speed: "🟦 Speed",
    Power: "🟥 Power",
    Stamina: "🟩 Stamina",
    Intelligence: "🟪 Intelligence",
    Guts: "🟨 Guts"
  };

  for (const type in grouped) {
    if (grouped[type].length > 0) {
      const title = document.createElement("div");
      title.className = "col-12 mt-3 fw-bold fs-5";
      title.innerHTML = colors[type];
      container.appendChild(title);

      grouped[type].forEach((card) => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `<div class='border p-2 rounded bg-light'><strong>${card.name}</strong></div>`;
        container.appendChild(col);
      });
    }
  }
}

function getCardLevels() {
  const levels = [];
  if (document.getElementById("chkSSR").checked) levels.push("SSR");
  if (document.getElementById("chkSR").checked) levels.push("SR");
  if (document.getElementById("chkR").checked) levels.push("R");
  return levels;
}

document.querySelectorAll("input[type='checkbox']").forEach((box) => {
  box.addEventListener("change", () => {
    const selected = document.getElementById("selectUma").value;
    if (selected) showLegacy(selected);
  });
});

function showFocus(list) {
  const tbody = document.getElementById("focusTable");
  tbody.innerHTML = "";
  list.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.status}</td><td>${item.star}</td><td>${item.note}</td>`;
    tbody.appendChild(row);
  });
}

function showTurn(turns) {
  const tbody = document.getElementById("turnTable");
  tbody.innerHTML = "";
  turns.forEach((rowData) => {
    const row = document.createElement("tr");
    rowData.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
}