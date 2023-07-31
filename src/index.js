module.exports = function toReadable(number) {
   let unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
      'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let ten = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let str = '' + number;

   if (number < 20) return unit[number];
   if (number > 19 && number < 100) {
      return (ten[str[0] - 2] + ' ' + unit[str[1]]).replace(' zero', '')
   };
   if (number > 99) {
      let num2 = +str.slice(1);
      return (unit[str[0]] + ' hundred ' + ((num2 < 20) ? unit[num2] : (ten[str[1] - 2] + ' ' + unit[str[2]]))).replace(/ zero/g, '');
   }
}
