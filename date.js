
const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};

let cele = new Date('2021-06-04');
console.log(cele.toUTCString());
//Tue, 08 Oct 2019 00:00:00 GMT

let today = new Date();
console.log(today.toUTCString());
//Wed, 22 Dec 2021 01:30:49 GMT

let time = get_day_of_time(cele,today)
document.write(time+ " day");
//807 day