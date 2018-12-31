const region = document.querySelector('#region')
      district = document.querySelector('#district');
const districts = {
    dar: ['Ilala', 'Temake', 'Kinondoni'],
    dodoma: ['Bahi', 'Chamwino', 'Chemba', 'Dodoma', 'Dodoma Rular', 'Kondoa', 'Kongwa', 'Mpwapwa'],
    iringa: ['Iringa Rular', 'Iringa Urban', 'Kilolo', 'Mafinga', 'Mufindi'],
    kagera: ['Biharamulo', 'Bukoba Rular', 'Bukoba Urban', 'Karagwe', 'Kyerwa', 'Missenyi', 'Muleba', 'Ngara']
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
        var str = ""
        console.log(districts.iringa);
        for (var item of districts.iringa) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
    if(this.value === 'Kagera') {
        var str = ""
        console.log(districts.kagera);
        for (var item of districts.kagera) {
          str += "<option>" + item + "</option>"
        }
        district.innerHTML = str;
    }
});