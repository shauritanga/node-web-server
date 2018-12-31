const region = document.querySelector('#region')
      district = document.querySelector('#district');

// Object Of disstrics
const districts = {
    arusha: ['Arumeru', 'Arusha', 'Karatu', 'Monduli', 'Ngorongoro'],
    dar: ['Ilala', 'Temake', 'Kinondoni'],
    dodoma: ['Bahi', 'Chamwino', 'Chemba', 'Dodoma', 'Dodoma Rural', 'Kondoa', 'Kongwa', 'Mpwapwa'],
    iringa: ['Iringa Rural', 'Iringa Urban', 'Kilolo', 'Mafinga', 'Mufindi'],
    getai:[''],
    kagera: ['Biharamulo', 'Bukoba Rural', 'Bukoba Urban', 'Karagwe', 'Kyerwa', 'Missenyi', 'Muleba', 'Ngara'],
    katavi: ['Mlele', 'Mpanda', 'Tanganyika'],
    kigoma:['Buhigwe', 'Kakonko', 'Kasulu', 'Kibondo'],
    mbeya: ['Chunya', 'kyela', 'Mbarali', 'Mbeya', 'Mbeya rural', 'Rungwe'],
    pwani: ['Bagamoyo', 'Kibaha', 'Kisarawe', 'Mafia', 'Mafia Island', 'Mkuranga', 'Rufiji'],
    rukwa: ['Kalambo', 'Nkasi', 'Sumbawanga', 'Sumbawanga Rural'],
    ruvuma: ['Mbinga', 'Namtumbo', 'Songea', 'Songea Rural', 'Tunduru'],
    tanga: ['Handeni', 'Kilindi', 'Korogwe', 'Lushoto', 'Mkinga', 'Muheza', 'Pangani'],
    kusiniUnguja: ['Kati', 'Kusini'],
    mjiniMagharibi: ['Zanzibar', 'Unguja Magharibi'],
    kusiniPemba: ['Chake Chake', 'Mkoani'],
    pembaKaskazini: ['Micheweni', 'Wete'],
    kaskaziniUnguja: ['Kaskazini A', 'Kaskazini B'],

}
// Event Listerner to Region
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
});