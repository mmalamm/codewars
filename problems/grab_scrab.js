const s = w => [...w].sort().join("");

const grabscrab = (a, d) => {
  const len = a.length;
  return d.filter(w => (w.length === len ? s(w) === s(a) : false));
};
