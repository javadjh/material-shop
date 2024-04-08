class IDateList {
  label: string;
  value: number;
  dateQuery: any;
}
export class DateUtility {
  static weeksDateList = (): Array<IDateList> => {
    const list = [];
    const date = new Date();
    date.setDate(date.getDate());
    for (let i = 0; i < 7; i++) {
      list.push({
        label: this.returnDay(i),
        value: 0,
      });
    }

    for (let i = 0; i < 7; i++) {
      const today = new Date();
      const limit = new Date(today);
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() - i - 1);
      limit.setDate(today.getDate() - i + 1);

      list[i].dateQuery = {
        $gte: tomorrow.toLocaleDateString(),
        $lt: limit.toLocaleDateString(),
      };
    }

    return list;
  };
  static monthDateList = (): Array<IDateList> => {
    const list = [];
    const date = new Date();
    date.setDate(date.getDate());
    for (let i = 0; i < 30; i++) {
      list.push({
        label: this.returnDay(i),
        value: 0,
      });
    }

    for (let i = 0; i < 30; i++) {
      const today = new Date();
      const limit = new Date(today);
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() - i - 1);
      limit.setDate(today.getDate() - i + 1);

      list[i].dateQuery = {
        $gte: tomorrow.toLocaleDateString(),
        $lt: limit.toLocaleDateString(),
      };
    }

    return list;
  };
  static returnDay = (day: number) => {
    switch (day) {
      case 0:
        return 'امروز';
      case 1:
        return 'دیروز';
      default:
        return `${day + 1} روز پیش`;
    }
  };
}
