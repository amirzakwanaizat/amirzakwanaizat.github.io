$(window).load(function(){
  //$('#comp').style.display = 'none';
  document.getElementById("ddowniam").value = 'Partnership';

  $('#ddowniam').change(function() {
      var ddown = $(this).val();
      
      if(ddown == 'Partnership')
       {
        document.getElementById("comp").style.display = 'block';
        document.getElementById("comp2").style.display = 'block';
        document.getElementById("ind").style.display = 'block';
        document.getElementById("ind2").style.display = 'block';
        document.getElementById("yrev").style.display = 'block';
        document.getElementById("yrev2").style.display = 'block';
        document.getElementById("addi").style.display = 'block';
        document.getElementById("addi2").style.display = 'block';
        document.getElementById("part").style.display = 'block';
        document.getElementById("part2").style.display = 'block';
        document.getElementById("resel").style.display = 'none';
        document.getElementById("resel2").style.display = 'none';
        document.getElementById("enq").style.display = 'none';
        document.getElementById("enq2").style.display = 'none';
       }
       else
       {
        document.getElementById("comp").style.display = 'none';
        document.getElementById("comp2").style.display = 'none';
        document.getElementById("ind").style.display = 'none';
        document.getElementById("ind2").style.display = 'none';
        document.getElementById("yrev").style.display = 'none';
        document.getElementById("yrev2").style.display = 'none';
        document.getElementById("addi").style.display = 'none';
        document.getElementById("addi2").style.display = 'none';
        document.getElementById("part").style.display = 'none';
        document.getElementById("part2").style.display = 'none';
        document.getElementById("resel").style.display = 'none';
        document.getElementById("resel2").style.display = 'none';
        document.getElementById("enq").style.display = 'block';
        document.getElementById("enq2").style.display = 'block';
       }
      //$('#myhidden').val(x);
      return false;
  });

  $('#part2').change(function() {
    var ddown = $(this).val();
    
    if(ddown == 'Reseller')
     {
      document.getElementById("comp").style.display = 'block';
      document.getElementById("comp2").style.display = 'block';
      document.getElementById("ind").style.display = 'block';
      document.getElementById("ind2").style.display = 'block';
      document.getElementById("yrev").style.display = 'block';
      document.getElementById("yrev2").style.display = 'block';
      document.getElementById("addi").style.display = 'block';
      document.getElementById("addi2").style.display = 'block';
      document.getElementById("part").style.display = 'block';
      document.getElementById("part2").style.display = 'block';
      document.getElementById("resel").style.display = 'block';
      document.getElementById("resel2").style.display = 'block';
      document.getElementById("enq").style.display = 'none';
      document.getElementById("enq2").style.display = 'none';
     }
     else
     {
      document.getElementById("comp").style.display = 'block';
      document.getElementById("comp2").style.display = 'block';
      document.getElementById("ind").style.display = 'block';
      document.getElementById("ind2").style.display = 'block';
      document.getElementById("yrev").style.display = 'block';
      document.getElementById("yrev2").style.display = 'block';
      document.getElementById("addi").style.display = 'block';
      document.getElementById("addi2").style.display = 'block';
      document.getElementById("part").style.display = 'block';
      document.getElementById("part2").style.display = 'block';
      document.getElementById("resel").style.display = 'none';
      document.getElementById("resel2").style.display = 'none';
      document.getElementById("enq").style.display = 'none';
      document.getElementById("enq2").style.display = 'none';
     }
    //$('#myhidden').val(x);
    return false;
  });
});