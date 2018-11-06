// const getDaysInMonth = (month, year) => {
//     return new Date(year, month, 0).getDate();
// }

export default class getDays {
  constructor() {
    this.yearDates = [];
    this.yearIndexes = {};
    this.yearWeekday = [];
  }

  getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  fillDays(year) {
    let index = 0;
    for (let i = 1; i < 13; i += 1) {
      let date = this.getDaysInMonth(i, year);
      for (let j = 1; j <= date; j += 1) {
        let month;
        if (i < 10) {
          month = ['0'];
          month.push(i.toString());
          month = month.join('');
        } else {
          month = '' + i + '';
        }
        let day;
        if (j < 10) {
          day = ['0'];
          day.push(j.toString());
          day = day.join('');
        } else {
          day = '' + j + '';
        }
        const dateString = `${year}-${month}-${day}`;
        this.yearDates.push(dateString);
        this.yearIndexes[dateString] = index;
        index += 1;
      }
    }
  }

  fillWeekDays() {
    let count = 0;
    for (let i = 0; i < this.yearDates.length; i += 1) {
      if (count === 0) {
        this.yearWeekday.push('Monday');
        count += 1;
      } else if (count === 1) {
        this.yearWeekday.push('Tuesday');
        count += 1;
      } else if (count === 2) {
        this.yearWeekday.push('Wednesday');
        count += 1;
      } else if (count === 3) {
        this.yearWeekday.push('Thursday');
        count += 1;
      } else if (count === 4) {
        this.yearWeekday.push('Friday');
        count += 1;
      } else if (count === 5) {
        this.yearWeekday.push('Saturday');
        count += 1;
      } else {
        this.yearWeekday.push('Sunday');
        count = 0;
      }
    }
  }
}

// let year = new getDays();
// year.fillDays(2018);
// console.log(year.yearDates);
// console.log(year.yearIndexes);

// export default getDays
