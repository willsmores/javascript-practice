const isAnagram = (s, t) => {
  return s.split('').sort().join('') === t.split('').sort().join('') ? true : false;
};


isAnagram("anagram","nagaram");
isAnagram("rat","car");