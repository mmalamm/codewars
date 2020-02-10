//url: https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

const adjacents = {
  "1": ["2", "4"],
  "2": ["1", "5", "3"],
  "3": ["2", "6"],
  "4": ["1", "5", "7"],
  "5": ["2", "4", "6", "8"],
  "6": ["3", "5", "9"],
  "7": ["4", "8"],
  "8": ["7", "5", "9", "0"],
  "9": ["6", "8"],
  "0": ["8"]
};

const fn = (o, i) => {
  const num = o[i];
  return adjacents[num].map(a => {
    const init = o.slice(0, i),
      end = o.slice(i + 1);
    return `${init}${a}${end}`;
  });
};

function getPINs(o) {
  // TODO: This is your job, detective!
  let output = [o];
  for (let i = 0; i < o.length; i++) {
    const perms = fn(o, i);
    console.log(perms);
    output = [...output, ...perms];
  }
  return output;
}
