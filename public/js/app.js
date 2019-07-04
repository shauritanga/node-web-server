const region = document.querySelector('#region')
      district = document.querySelector('#district');

// Object Of disstrics
const districts = {
    arusha: ['Arumeru', 'Arusha', 'Karatu', 'Monduli', 'Ngorongoro'],
    dar: ['Ilala', 'Temake', 'Kigamboni', 'Kinondoni', 'Ubungo'],
    dodoma: ['Bahi', 'Chamwino', 'Chemba', 'Dodoma', 'Dodoma Rural', 'Kondoa', 'Kongwa', 'Mpwapwa'],
    iringa: ['Iringa Rural', 'Iringa Urban', 'Kilolo', 'Mafinga', 'Mufindi'],
    getai:['Bukombe', 'Chato', 'Geita', 'Mbogwe', 'Nyang\'hwale'],
    kagera: ['Biharamulo', 'Bukoba Rural', 'Bukoba Urban', 'Karagwe', 'Kyerwa', 'Missenyi', 'Muleba', 'Ngara'],
    katavi: ['Mlele', 'Mpanda', 'Tanganyika'],
    kigoma:['Buhigwe', 'Kakonko', 'Kasulu', 'Kibondo'],
    kilimanjaro: ['Hai', 'Moshi', 'Mwanga', 'Rombo', 'Same', 'Siha'],
    lindi: ['Kilwa', 'Lindi', 'Liwale', 'Nachingwea', 'Ruangwa'],
    mtwara: ['Masasi', 'Mtwara', 'Nanyumbu', 'Newela', 'Tandahimba'],
    manyara: ['Babati Rural', 'Babati Urban', 'Hanang', 'Kiteto', 'Mbulu', 'Simanjiro'],
    mbeya: ['Chunya', 'Kyela', 'Mbarali', 'Mbeya', 'Mbeya rural', 'Rungwe'],
    mara: ['Bunda', 'Butiama', 'Musoma Rural', 'Musoma Urban', 'Rorya', 'Serengeti', 'Tarime'],
    morogoro: ['Gairo', 'Kilombero', 'Kilosa', 'Morogoro Rural', 'Morogoro Urban', 'Mvomero', 'Ulanga', 'Malinyi'],
    mwanza: ['Ilemela', 'Kwimba', 'Magu', 'Misungwi', 'Nyamagana', 'Sengerema', 'Ukerewe' ],
    pwani: ['Bagamoyo', 'Kibaha', 'Kisarawe', 'Mafia', 'Mafia Island', 'Mkuranga', 'Rufiji'],
    rukwa: ['Kalambo', 'Nkasi', 'Sumbawanga', 'Sumbawanga Rural'],
    ruvuma: ['Mbinga', 'Namtumbo', 'Songea', 'Songea Rural', 'Tunduru'],
    tanga: ['Handeni', 'Kilindi', 'Korogwe', 'Lushoto', 'Mkinga', 'Muheza', 'Pangani', 'Tanga'],
    kusiniUnguja: ['Kati', 'Kusini'],
    songwe: ['Ileje', 'Mbozi', 'Momba' ],
    tabora: ['Igunga', 'Kaliua', 'Nzega', 'Sikonge', 'Tabora', 'Urambo', 'Uyui'],
    singida: ['Iramba', 'Ikungi', 'Manjoni', 'Mkalama', 'singida D', 'Singida M', 'Itigi'],
    shinyanga: ['Kahama Rural', 'Kahama Urban', 'Kishapu', 'Shinyanga Rural', 'Shinyanga Urban'],
    simiyu: ['Bariadi', 'Busenga', 'Itilima', 'Maswa', 'Meatu'],
    njombe: ['Ludewa', 'Makambako', 'Makete', 'Njombe D', 'Njombe T', 'Wanging\'ombe'],
    mjiniMagharibi: ['Zanzibar', 'Unguja Magharibi'],
    kusiniPemba: ['Chake Chake', 'Mkoani'],
    pembaKaskazini: ['Micheweni', 'Wete'],
    kaskaziniUnguja: ['Kaskazini A', 'Kaskazini B'],

}
region.addEventListener('change', function(e) {
    if(this.value === 'Dar es salaam') {
        var str = ""
        for (var item of districts.dar) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Dodoma') {
        var str = ""
        for (var item of districts.dodoma) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Iringa') {
        var str = "";
        for (var item of districts.iringa) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Kagera') {
        var str = "";
        for (var item of districts.kagera) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Kigoma') {
        var str = "";
        for (var item of districts.kigoma) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Mbeya') {
        var str = "";
        for (var item of districts.mbeya) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Mara') {
        var str = "";
        for (var item of districts.mara) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Mwanza') {
        var str = "";
        for (var item of districts.mwanza) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Morogoro') {
        var str = "";
        for (var item of districts.morogoro) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Geita') {
        var str = "";
        for (var item of districts.getai) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Tanga') {
        var str = "";
        for (var item of districts.tanga) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Arusha') {
        var str = "";
        for (var item of districts.arusha) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Katavi') {
        var str = "";
        for (var item of districts.katavi) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Pwani') {
        var str = "";
        for (var item of districts.pwani) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Rukwa') {
        var str = "";
        for (var item of districts.rukwa) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Ruvuma') {
        var str = "";
        for (var item of districts.ruvuma) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Pemba Kusini') {
        var str = "";
        for (var item of districts.kusiniPemba) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Unguja Kusini') {
        var str = "";
        for (var item of districts.kusiniUnguja) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Mjini Magharibi') {
        var str = "";
        for (var item of districts.mjiniMagharibi) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Unguja Kaskazini') {
        var str = "";
        for (var item of districts.kaskaziniUnguja) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Pembe Kaskazini') {
        var str = "";
        for (var item of districts.pembaKaskazini) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Njombe') {
        var str = "";
        for (var item of districts.njombe) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Songwe') {
        var str = "";
        for (var item of districts.songwe) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Lindi') {
        var str = "";
        for (var item of districts.lindi) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Mtwara') {
        var str = "";
        for (var item of districts.mtwara) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Singida') {
        var str = "";
        for (var item of districts.singida) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Tabora') {
        var str = "";
        for (var item of districts.tabora) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Shinyanga') {
        var str = "";
        for (var item of districts.shinyanga) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Kilimanjaro') {
        var str = "";
        for (var item of districts.kilimanjaro) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Manyara') {
        var str = "";
        for (var item of districts.manyara) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Singida') {
        var str = "";
        for (var item of districts.singida) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Simiyu') {
        var str = "";
        for (var item of districts.simiyu) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
});
