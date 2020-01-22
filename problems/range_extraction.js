// url: https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

const isConsecutive = ([n1, n2, n3]) => n1 === n2 - 1 && n2 === n3 - 1;

function solution(list) {
  list = [...list];
  const output = [];
  while (list.length) {
    if (isConsecutive(list.slice(0, 3))) {
      let i = 2;
      while (list[i] + 1 === list[i + 1]) i++;
      output.push(`${list[0]}-${list[i]}`);
      list.splice(0, i + 1);
    } else {
      output.push(`${list.shift()}`);
    }
  }
  return output.join(",");
}
