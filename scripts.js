function drawTree(n) {
  for (var i = 0; i <= n; i++) {
    var star = '';
    for (var j = 0; j < i*2-1; j++) {
      star += '*';
      }
    console.log(star);
}
  }
drawTree(4);