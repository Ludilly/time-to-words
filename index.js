// expecting time to be a string in the format like '8:15' or '12:30'
// small problems:
// 1. parse input entry
// 2. convert to english word
// put it my array index together
// 3. everything together
function convertTimeToWords(time) {
  const words = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'thirty',
  };
  // TODO: real code goes here!

  const [hourString, minuteString] = time.split(':');
  const hour = Number(hourString);
  const minute = Number(minuteString);
  if (words[hour] && words[minute]) {
    return `${words[minute]} past ${words[hour]}`;
  }
  return `${words[60 - minute]} to ${words[hour + 1]}`;
}
console.log(convertTimeToWords('10:55'));
module.exports = { convertTimeToWords };
