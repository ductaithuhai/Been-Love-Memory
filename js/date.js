
const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};

let cele = new Date('2021-06-04');
console.log(cele.toString());

let today = new Date();
console.log(today.toString());

let time = get_day_of_time(cele,today)
document.write(time+ " day");
