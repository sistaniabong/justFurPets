module.exports = {
  
    format_date: (date) => {
      return date.toLocaleDateString();
    },
    format_date_value_display: (date) => {
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let year = date.getFullYear();
      if(day<=9) {
        day = '0' + day
      }
      if(month<10) {
        month = '0' + month
      }
      const postDate = year + '-' + month + '-' + day
      return postDate
    }
};