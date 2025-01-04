    let deposit = 5000
    let taruh = 0
    
    function suit(){
    let batu = 'batu'
    let gunting = 'gunting'
    let kertas = 'kertas'
  
    let all = [batu,gunting,kertas,gunting,kertas,batu,kertas,batu,gunting,batu,kertas]
    let acak = Math.floor(Math.random() * 10)
    
    let saldo = document.getElementById('saldo')
    let hasil = document.getElementById('hasil')
    let lose = document.getElementById('lose')
    let win = document.getElementById('win')
    
    let anda = document.getElementById('anda').value
    let taruh = document.getElementById('taruh').value
    
    if(taruh == ''){
      alert('Cekin harus di isi bos 😑')
      return
    }
    
    let saldoNow = parseInt(saldo.innerText)
    if(taruh > saldoNow){
      alert('saldo kurang coi')
      return
    }
    
    let cpu = document.getElementById('cpu').value = all[acak]
    
    
    if(anda == cpu){
      hasil.innerText = 'DRAW'
    }else if(anda == batu && cpu == kertas){
      deposit-=taruh
      hasil.innerText = 'LOSE'
      saldo.innerText = deposit
    }else if(anda == batu && cpu == gunting){
      let depoWin = parseInt(deposit) + parseInt(taruh)
      hasil.innerText = 'WIN'
      saldo.innerText = depoWin
    }else if(anda == kertas && cpu == batu){
      let depoWin = parseInt(deposit)+parseInt(taruh)
      hasil.innerText = 'WIN'
      saldo.innerText = depoWin
    }else if(anda == kertas && cpu == gunting){
      deposit-=taruh
      hasil.innerText = 'LOSE'
      saldo.innerText = deposit
    }else if(anda == gunting && cpu == kertas){
      let depoWin = parseInt(deposit)+parseInt(taruh)
      hasil.innerText = 'WIN'
      saldo.innerText = depoWin
    }else if(anda == gunting && cpu == batu){
      deposit-=taruh
      hasil.innerText = 'LOSE'
      saldo.innerText = deposit
    }
    
    let saldoHasil = parseInt(saldo.innerText)
    if(saldoHasil <= 0){
      lose.style.display = 'block'
    }else if(saldoHasil >= 10000){
      win.style.display = 'block'
    }
    }