let me = {
    name:'Нікіта',
    surname:'Святовець',
    coins:50,
    date:'12.03.2009',
    age2033:24,
    ageIn2010:'',
    ageIn2011:'',
    ageIn2012:'',
    ageIn2013:'',
    ageIn2014:'',
    ageIn2015:'',
    ageIn2016:'',
    ageIn2017:'',
    ageIn2018:'',
    ageIn2019:'',
    ageIn2020:''
}

for(let ageCount = 2010; ageCount<=2020; ageCount++){
    if(ageCount === 2010){me.ageIn2010 = ageCount-2009}
    if(ageCount === 2011){me.ageIn2011 = ageCount-2009}
    if(ageCount === 2012){me.ageIn2012 = ageCount-2009}
    if(ageCount === 2013){me.ageIn2013 = ageCount-2009}
    if(ageCount === 2014){me.ageIn2014 = ageCount-2009}
    if(ageCount === 2015){me.ageIn2015 = ageCount-2009}
    if(ageCount === 2016){me.ageIn2016 = ageCount-2009}
    if(ageCount === 2017){me.ageIn2017 = ageCount-2009}
    if(ageCount === 2018){me.ageIn2018 = ageCount-2009}
    if(ageCount === 2019){me.ageIn2019 = ageCount-2009}
    if(ageCount === 2020){me.ageIn2020 = ageCount-2009}
}

for(let meIndex = 0; meIndex<=15; meIndex++){
    if(meIndex === 0){console.log('name:'+me.name)}
    if(meIndex === 1){console.log('surname:'+me.surname)}
    if(meIndex === 2){console.log('coins:'+me.coins)}
    if(meIndex === 3){console.log('date:'+me.date)}
    if(meIndex === 4){console.log('age2033:'+me.age2033)}
    if(meIndex === 5){console.log('ageIn2010:'+me.ageIn2010)}
    if(meIndex === 6){console.log('ageIn2011:'+me.ageIn2011)}
    if(meIndex === 7){console.log('ageIn2012:'+me.ageIn2012)}
    if(meIndex === 8){console.log('ageIn2013:'+me.ageIn2013)}
    if(meIndex === 9){console.log('ageIn2014:'+me.ageIn2014)}
    if(meIndex === 10){console.log('ageIn2015:'+me.ageIn2015)}
    if(meIndex === 11){console.log('ageIn2016:'+me.ageIn2016)}
    if(meIndex === 12){console.log('ageIn2017:'+me.ageIn2017)}
    if(meIndex === 13){console.log('ageIn2018:'+me.ageIn2018)}
    if(meIndex === 14){console.log('ageIn2019:'+me.ageIn2019)}
    if(meIndex === 15){console.log('ageIn2020:'+me.ageIn2020)}
}